import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import ts from 'typescript'

// There is no Calendly subscription and no replacement scheduler was adopted, so
// every contact route must end in the reception inbox. This guard turns an
// external booking page into a build failure instead of a review nit.
const SCHEDULER = /calendly|savvycal|tidycal|acuityscheduling|setmore|\bcal\.com\b|books\.meeting/i

const SOURCE_DIRS = ['app', 'components', 'lib']
const SOURCE_SUFFIXES = ['.ts', '.tsx', '.css']
const TEXT_FILES = [
  'public/llms.txt',
  'public/humans.txt',
  'public/robots.txt',
  'public/manifest.json',
  'worker/index.js',
]

// The three components that offer a first contact.
const CONTACT_COMPONENTS = ['components/Hero.tsx', 'components/Services.tsx', 'components/Footer.tsx']

const root = new URL('../', import.meta.url)

function walk(dir) {
  const found = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) found.push(...walk(new URL(`${entry.name}/`, dir)))
    else if (SOURCE_SUFFIXES.some((suffix) => entry.name.endsWith(suffix))) {
      found.push(new URL(entry.name, dir))
    }
  }
  return found
}

const sourceDirs = SOURCE_DIRS.map((dir) => ({ dir, files: walk(new URL(`${dir}/`, root)) }))
const shippedSources = [
  ...sourceDirs.flatMap(({ files }) => files),
  ...TEXT_FILES.map((file) => new URL(file, root)),
]

const relativeName = (url) => decodeURIComponent(url.pathname.replace(root.pathname, ''))

// Anchors are read as syntax, so the guard follows the rendered href and class
// instead of a formatting-dependent string match.
function anchorsIn(sourceText, fileName) {
  const source = ts.createSourceFile(fileName, sourceText, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TSX)
  const found = []
  const attribute = (node, name) => {
    const match = node.attributes.properties.find(
      (property) => ts.isJsxAttribute(property) && property.name.getText() === name
    )
    if (!match || !ts.isJsxAttribute(match) || !match.initializer) return null
    const text = match.initializer.getText()
    if (text.startsWith('{')) return text.slice(1, -1).trim()
    return text.replace(/^"|"$/g, '')
  }
  const visit = (node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText()
      if (tag === 'a' || tag.endsWith('.a')) {
        found.push({
          href: attribute(node, 'href'),
          className: attribute(node, 'className'),
          target: attribute(node, 'target'),
        })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return found
}

const ctaLines = (source, key) =>
  source
    .split('\n')
    .filter((line) => line.trim().startsWith(`${key}:`) && line.trim().endsWith(','))

test('no shipped source points at a third-party booking scheduler', async () => {
  const hits = []
  for (const url of shippedSources) {
    const source = await readFile(url, 'utf8')
    if (SCHEDULER.test(source)) hits.push(relativeName(url))
  }
  // Positive control: the same walk must still see a destination that does ship,
  // so an empty hit list cannot come from a broken scan.
  const corpus = await Promise.all(shippedSources.map((url) => readFile(url, 'utf8')))
  assert.ok(
    corpus.some((source) => /linkedin\.com\/in\/anthony-paquet/i.test(source)),
    'the corpus walk found no shipped external link, so the scan is broken'
  )
  assert.ok(
    shippedSources.length > 25,
    `guard walked only ${shippedSources.length} files, expected the shipped corpus`
  )
  for (const { dir, files } of sourceDirs) {
    assert.ok(files.length > 0, `the walk skipped ${dir}, so the corpus is incomplete`)
  }
  assert.deepEqual(hits, [], 'Contact is by email only, no booking scheduler may be referenced')
})

test('the catalogue carries one inbox and no booking link', async () => {
  const source = await readFile(new URL('../lib/data.ts', import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const { personalInfo, socialLinks } = await import(
    `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
  )
  assert.match(personalInfo.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  assert.equal(socialLinks.email, `mailto:${personalInfo.email}`)
  assert.equal('calendlyUrl' in personalInfo, false, 'the catalogue may not carry a booking URL')
  assert.doesNotMatch(JSON.stringify(personalInfo), SCHEDULER)
})

test('every primary CTA is wired to the inbox instead of a booking page', async () => {
  for (const file of CONTACT_COMPONENTS) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), 'utf8')
    const primaries = anchorsIn(source, file).filter(({ className }) => className?.includes('btn-primary'))
    assert.ok(primaries.length > 0, `${file} must keep a primary call to action`)
    for (const anchor of primaries) {
      assert.equal(
        anchor.href,
        'c.socialLinks.email',
        `${file} must send its primary call to action to the catalogued mailto`
      )
      assert.equal(anchor.target, null, `${file} must not open the inbox in a new tab`)
    }
    assert.doesNotMatch(source, /calendlyUrl/, `${file} must not reference a booking URL`)
  }
})

test('every shipped anchor href is either the inbox, internal, or a real destination', async () => {
  const components = readdirSync(new URL('../components', import.meta.url))
    .filter((name) => name.endsWith('.tsx'))
  const offenders = []
  let inspected = 0
  for (const name of components) {
    const source = await readFile(new URL(`../components/${name}`, import.meta.url), 'utf8')
    inspected += 1
    for (const anchor of anchorsIn(source, name)) {
      if (!anchor.href) continue
      if (SCHEDULER.test(anchor.href)) offenders.push(`${name}: ${anchor.href}`)
    }
  }
  assert.ok(inspected > 10, `guard read only ${inspected} components, expected every adapter to be walked`)
  assert.deepEqual(offenders, [], 'No anchor may hand a visitor to a booking scheduler')
})

test('the contact copy asks for an email and never a booking', async () => {
  // One hero CTA, one services CTA plus hint, one footer CTA. A missing or
  // duplicated declaration fails here instead of quietly dropping the guard.
  const declarations = { ctaPrimary: 1, contactCta: 2, contactHint: 1 }
  const cases = [
    { file: 'lib/content/en.ts', banned: /\b(book|schedul)\w*\b/i },
    { file: 'lib/content/fr.ts', banned: /\b(réserver?|planifi\w+)\b/i },
  ]
  for (const { file, banned } of cases) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), 'utf8')
    for (const [key, count] of Object.entries(declarations)) {
      const lines = ctaLines(source, key)
      assert.equal(lines.length, count, `${file} must declare ${key} exactly ${count} time(s)`)
      assert.deepEqual(
        lines.filter((line) => banned.test(line)),
        [],
        `${file}: ${key} must ask for an email, not a booking`
      )
    }
  }
})
