import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import ts from 'typescript'

// The French catalogue overrides English experience fields by a
// "Company::Position" key instead of an array index. An index would silently
// shift every card when a role is added, removed or reordered, so this guard
// reads both catalogues as syntax and compares the ordered keys.
function experienceKeys(sourceText, fileName) {
  const source = ts.createSourceFile(
    fileName,
    sourceText,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  )
  const literal = (node) =>
    node && ts.isStringLiteral(node) ? node.text : undefined
  const propsOf = (node) => {
    const found = {}
    const members = node.members ?? node.properties ?? []
    for (const member of members) {
      if (!ts.isPropertyAssignment(member)) continue
      const name = member.name.getText(source).replace(/^['"]|['"]$/g, '')
      found[name] = literal(member.initializer)
    }
    return found
  }
  const roleObjects = (node) =>
    ts.isArrayLiteralExpression(node)
      ? node.elements.filter(ts.isObjectLiteralExpression).map(propsOf)
      : []

  let experiences = []
  let overrides = []
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'experiences') {
      experiences = roleObjects(node.initializer)
    }
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'expFr') {
      overrides = roleObjects(node.initializer)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)

  if (fileName.endsWith('data.ts')) {
    return experiences.map((e) => `${e.company}::${e.position}`)
  }
  return overrides.map((e) => e.key)
}

const english = experienceKeys(
  await readFile(new URL('../lib/data.ts', import.meta.url), 'utf8'),
  'lib/data.ts',
)
const french = experienceKeys(
  await readFile(new URL('../lib/content/fr.ts', import.meta.url), 'utf8'),
  'lib/content/fr.ts',
)

test('every English experience has a French override in the same order', () => {
  assert.ok(english.length > 10, `expected the English catalogue, found ${english.length} roles`)
  assert.deepEqual(french, english)
})

test('keys are unique on both sides so the lookup cannot silently drop one', () => {
  assert.equal(new Set(english).size, english.length)
  assert.equal(new Set(french).size, french.length)
})

test('the current role leads the French overrides instead of an index shifted list', () => {
  // Index aligned overrides put Bespoke Labs first while Nota is the current role.
  assert.equal(french[0], 'Nota::Founder & President')
})
