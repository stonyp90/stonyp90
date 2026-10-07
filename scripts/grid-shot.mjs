import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173'
const artifactDir = process.env.BROWSER_ARTIFACT_DIR || 'tmp/live'
await mkdir(artifactDir, { recursive: true })
const browser = await chromium.launch({
  headless: true,
  channel: process.env.BROWSER_CHANNEL || 'chrome',
})

for (const [locale, route] of [
  ['en', '/'],
  ['fr', '/fr/'],
]) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1400 },
    reducedMotion: 'reduce',
  })
  await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  await page.locator('#personal-projects').scrollIntoViewIfNeeded()
  for (const image of await page.locator('.project-card img').all()) {
    await image.scrollIntoViewIfNeeded()
  }
  await page.waitForTimeout(400)
  await page
    .locator('.projects-grid')
    .screenshot({ path: path.join(artifactDir, `${locale}-projects-grid.png`) })
  await page.close()
}

await browser.close()
