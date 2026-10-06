import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('../lib/projects.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText
const { getPersonalProjects, personalProjectCopy } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
)

test('each locale exposes the four personal projects with their official destinations', () => {
  for (const locale of ['en', 'fr']) {
    const projects = getPersonalProjects(locale)
    assert.deepEqual(projects.map(({ name }) => name), ['GoNota', 'Tablix', 'Ursly', 'ScaleForged'])
    assert.deepEqual(projects.map(({ url }) => url), [
      'https://gonota.ca', 'https://tablix.ca', 'https://ursly.io', 'https://scaleforged.io',
    ])
    assert.equal(new Set(projects.map(({ id }) => id)).size, 4)
    assert.ok(personalProjectCopy[locale].heading)
  }
})

test('Ursly retains the three-part brand signature in each locale', () => {
  assert.deepEqual(getPersonalProjects('fr').find(({ id }) => id === 'ursly').slogan, [
    'Vos sens.', 'Vos données.', 'Votre choix.',
  ])
  assert.deepEqual(getPersonalProjects('en').find(({ id }) => id === 'ursly').slogan, [
    'Your senses.', 'Your data.', 'Your choice.',
  ])
})

test('local visuals reserve their natural proportions and exist before rendering', async () => {
  for (const project of getPersonalProjects('en')) {
    assert.ok(project.visual.width > 0 && project.visual.height > 0)
    assert.ok(project.visual.src.startsWith('/images/'))
    const asset = await readFile(new URL(`../public${project.visual.src}`, import.meta.url))
    assert.ok(asset.length > 0)
  }
})

test('French descriptions and project categories are localized', () => {
  const english = getPersonalProjects('en')
  const french = getPersonalProjects('fr')
  for (let index = 0; index < english.length; index += 1) {
    assert.notEqual(english[index].description, french[index].description)
    assert.notEqual(english[index].category, french[index].category)
  }
})
