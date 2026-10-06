import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

// Load the production Worker unchanged in Node without changing the module type
// of the project's CommonJS Next/PostCSS/Tailwind configuration files.
const source = await readFile(new URL('../worker/index.js', import.meta.url), 'utf8')
const { default: worker } = await import(`data:text/javascript,${encodeURIComponent(source)}`)

test('an alternate custom domain redirects to canonical HTTPS with its path and query', async () => {
  const request = new Request('http://anthonypaquet.com/fr/?source=portfolio')
  const response = await worker.fetch(request, {
    CANONICAL_HOST: 'www.anthonypaquet.com',
    ASSETS: { fetch: () => assert.fail('redirects must not fetch an asset') },
  })

  assert.equal(response.status, 301)
  assert.equal(response.headers.get('Location'), 'https://www.anthonypaquet.com/fr/?source=portfolio')
})

for (const [name, url, canonical] of [
  ['canonical domain', 'https://www.anthonypaquet.com/fr/', 'www.anthonypaquet.com'],
  ['Workers preview', 'https://portfolio-preview.workers.dev/fr/', 'www.anthonypaquet.com'],
  ['local environment without canonical configuration', 'http://localhost:3000/fr/', undefined],
]) {
  test(`${name} forwards the original request and the asset response`, async () => {
    const request = new Request(url)
    const assetResponse = new Response('<html lang="fr"></html>', { status: 200 })
    let receivedRequest
    const response = await worker.fetch(request, {
      CANONICAL_HOST: canonical,
      ASSETS: {
        fetch: (value) => {
          receivedRequest = value
          return assetResponse
        },
      },
    })

    assert.equal(receivedRequest, request)
    assert.equal(response, assetResponse)
  })
}
