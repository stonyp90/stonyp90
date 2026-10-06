import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173'
const artifactDir = process.env.BROWSER_ARTIFACT_DIR || 'tmp/browser'
await mkdir(artifactDir, { recursive: true })
const browser = await chromium.launch({ headless: true, channel: process.env.BROWSER_CHANNEL || 'chrome' })
const failures = []
const checks = []

try {
  for (const route of ['/', '/fr/']) {
    const locale = route === '/' ? 'en' : 'fr'
    const staticContext = await browser.newContext({ javaScriptEnabled: false })
    const staticPage = await staticContext.newPage()
    await staticPage.goto(`${baseURL}${route}`)
    assert.equal(await staticPage.locator('html').getAttribute('lang'), locale, 'Correct static document language')
    assert.equal(await staticPage.locator('#about > div').evaluate(el => getComputedStyle(el).opacity), '1', 'About must remain readable without JavaScript')
    const hiddenServices = await staticPage.locator('#services [style]').evaluateAll(elements => elements.filter(el => getComputedStyle(el).opacity === '0').length)
    assert.equal(hiddenServices, 0, 'Services must remain readable without JavaScript')
    assert.equal(await staticPage.locator('.project-card').count(), 4, 'All four projects must be in exported HTML')
    assert.equal(await staticPage.locator('#personal-projects').count(), 1, 'One independent projects section')
    await staticContext.close()
    checks.push(`${locale}: readable exported HTML`)

    for (const width of [1440, 390, 320]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' })
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(await page.locator('html').getAttribute('lang'), locale)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
      assert.equal(overflow, false, `No page overflow at ${width}px`)
      assert.match(await page.locator('#top img').getAttribute('src'), /anthony-paquet-pitch\.jpg/)
      assert.equal(await page.locator('#top img').evaluate(img => img.complete && img.naturalWidth > 0), true)
      // Personal-project names belong to #personal-projects only. The company
      // "Nota" legitimately heads #experience, so match its project card name.
      assert.doesNotMatch(await page.locator('#experience').textContent(), /GoNota|Tablix|Ursly|ScaleForged/)
      await page.locator('.site-nav a[href="#personal-projects"]').click()
      await page.locator('#personal-projects').scrollIntoViewIfNeeded()
      assert.equal(await page.locator('#personal-projects').evaluate(el => getComputedStyle(el.parentElement).opacity), '1')
      assert.equal(await page.locator('.project-card a').count(), 4)
      // Card images are lazy loaded, so each one must enter the viewport and
      // finish its fetch before naturalWidth is meaningful.
      for (const image of await page.locator('.project-card img').all()) {
        await image.scrollIntoViewIfNeeded()
        const loaded = await image.evaluate(async (img) => {
          try { await img.decode() } catch { /* measured below */ }
          return img.complete && img.naturalWidth > 0
        })
        assert.equal(loaded, true, `Brand image loaded: ${await image.getAttribute('src')}`)
      }
      await page.screenshot({ path: `${artifactDir}/${locale}-${width}-projects.png` })
      await page.locator('.project-card--ursly').screenshot({ path: `${artifactDir}/${locale}-${width}-ursly.png` })
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }))
      await page.screenshot({ path: `${artifactDir}/${locale}-${width}-hero.png` })
      const toggle = page.locator('#experience button[aria-expanded]').first()
      await toggle.focus()
      const previous = await toggle.getAttribute('aria-expanded')
      await toggle.press('Enter')
      assert.notEqual(await toggle.getAttribute('aria-expanded'), previous, 'Experience works with keyboard')
      assert.equal(errors.length, 0, errors.join('\n'))
      checks.push(`${locale}: ${width}px, reduced motion, project links/images, keyboard, no console errors`)
      await context.close()
    }
  }
  const context = await browser.newContext({ reducedMotion: 'no-preference', viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()
  await page.goto(`${baseURL}/fr/`, { waitUntil: 'networkidle' })
  await page.locator('#personal-projects').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => getComputedStyle(document.querySelector('#personal-projects').parentElement).opacity === '1')
  assert.equal(await page.locator('.reveal-pending #personal-projects').count(), 0)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.waitForFunction(() => document.querySelectorAll('.reveal-pending').length === 0)
  await page.waitForFunction(() => document.querySelector('#how-i-work ul') !== null)
  await context.close()
  checks.push('normal motion: scroll reveal and live reduced-motion change')
} catch (error) { failures.push(error.message) }
finally { await browser.close() }
console.log(JSON.stringify({ baseURL, checks, failures }, null, 2))
if (failures.length) process.exitCode = 1
