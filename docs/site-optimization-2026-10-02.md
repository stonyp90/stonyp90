# Portfolio optimization — October 2, 2026

Checked in America/Toronto. Base commit: `d6c6ed85f705031728661458a082618ed82ee5b8`.
Changes are in the local working tree. No commit, push, deployment, or production measurement is implied.

## Delivered behavior and architecture

The entry section now carries the exact approved pitch JPG with a separate alpha mask: its photographic background and arch frame are removed, while the original RGB photograph stays unchanged. The responsive editorial composition prioritizes desktop readability. The downloaded CV contains the pitch portrait while retaining its original texts, geometry, links, tags, and two-page format; see `portrait-evidence-2026-10-02.md`.

`lib/projects.ts` is the framework-independent, typed bilingual catalog. `PersonalProjects` is its presentation adapter. GoNota, Tablix, Ursly, and ScaleForged appear only in the independent personal-project section, after professional experience and credentials. Nota has been removed from the professional experience catalog; the French translation was adjusted at the same boundary. The pre-existing PDF already separates its personal projects from the summary and employment history, so its wording was preserved. Brand sources, owner naming decisions, and hashes are in `project-brand-evidence-2026-10-02.md` and its asset manifest.

The server routes select one locale and pass serializable content to `LocaleProvider`. Both language catalogs are therefore absent from the client module graph. Separate Next route groups share `SiteDocument` while exporting correct `html lang` values for `/` and `/fr/` even without JavaScript. The existing public URLs, static export, metadata, canonical URLs and hreflang links remain in place. Crossing the language root layouts performs a full document navigation, as documented by Next 15. Redundant manual metadata tags and unused font-origin preconnects were removed; Next font assets remain self-hosted.

`MotionProvider` is an isolated browser adapter. All essential sections remain visible in exported HTML, and only off-screen sections acquire a reveal state after hydration. The provider shares `LazyMotion`/`m` features, avoiding the full `motion` feature bundle in rendered components. `useMotionPreference` subscribes to the browser media query with an accessible server snapshot. It fixes the installed Framer Motion 11 hook's static preference snapshot and prevents an SSR/client markup mismatch. The development orbit stops outside the viewport, when the page is hidden, and when reduced motion is requested. Decorative background animations and the full-screen startup loader were removed. Service transitions and experience expansion remain interactive; experience controls are native buttons with expanded state, associated details, and inert collapsed content.

Existing color values are centralized in CSS tokens and consumed by Tailwind. Card shadows and new brand surfaces also use tokens. No runtime service, database, external API or business HTTP API was introduced; an OpenAPI document would not describe this static portfolio. Docker Compose supplies the static server required to run its export independently. CI runs quality checks on pushes and pull requests; the existing deployment job now runs those checks before publishing and uses the same Node version file. See `tooling-evidence-2026-10-02.md`.

## Actual versions and official guidance

No existing runtime/library versions were upgraded. Lockfile versions inspected locally: Next 15.5.9, React/React DOM 19.2.3, Framer Motion 11.18.2, TypeScript 5.9.3, Tailwind 3.4.19, ESLint 9.39.2, Lucide React 0.468.0, React Icons 5.5.0, Node 22.16.0. Browser verification uses bundled Playwright 1.62.1 with installed Chrome. Existing icons were reused without selecting or changing icon-library behavior.

Sources checked October 2, 2026:

- [Next 15 static export](https://nextjs.org/docs/15/app/guides/static-exports): preserve `output: export`, directory routes, and prepared static image assets; no server-only feature added. The docs branch currently shows 15.5.27 but the relevant APIs are present in installed 15.5.9.
- [Next 15 server/client composition](https://nextjs.org/docs/15/app/getting-started/server-and-client-components): select locale on the server and pass serializable data to the client provider.
- [Next 15 route groups](https://nextjs.org/docs/15/app/api-reference/file-conventions/route-groups): independent root layouts retain the current URLs and accurate static language attributes; language switches fully reload the document.
- [React server components](https://react.dev/reference/rsc/server-components), [external store subscriptions](https://react.dev/reference/react/useSyncExternalStore): render the provider from the server and use a consistent SSR media-query snapshot. Docs currently identify React 19.3; these documented APIs exist in installed 19.2.3 and no underlying RSC bundler API is modified.
- [Motion feature bundle](https://motion.dev/docs/react-reduce-bundle-size), [MotionConfig](https://motion.dev/docs/react-motion-config), [reduced motion](https://motion.dev/docs/react-use-reduced-motion): retain the installed `framer-motion` package and use its existing `m`, `LazyMotion`, `domAnimation`, `MotionConfig`, `animate`, and `useInView` exports. Current docs use newer package naming; no migration to `motion/react` is made. Compatibility was checked against installed `dist/index.d.ts` and package source. The installed reduced-motion hook stores its initial value without updating React state; a local subscribed hook handles live preference changes.
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API): progressive, once-only scroll reveal with feature detection and observer cleanup.
- [Tailwind 3 colors](https://v3.tailwindcss.com/docs/customizing-colors): reference CSS design tokens from existing theme keys.
- [Playwright emulated media](https://playwright.dev/docs/api/class-page#page-emulate-media), [browser channels](https://playwright.dev/docs/browsers#google-chrome--microsoft-edge): test preference changes and use installed Chrome because the bundled Playwright browser executable was absent.

Additional Node, TypeScript, ESLint, Docker, PDF and image-transform sources/version decisions are recorded in the other evidence files.

## Measurements and red/green evidence

| Local artifact | Before | After | Interpretation |
| --- | ---: | ---: | --- |
| Next-reported first-load JavaScript, both routes | 184 kB | 158 kB | 14.1% reduction in the build estimate despite the new section; not production network timing |
| Active pitch portrait and transparent mask | old website JPEG 125890 bytes | 109771 + 50082 bytes | Exact original JPG plus lossless alpha; the previous 50454-byte WebP is retained as an unused derivative. The cutout adds image bytes; identity preservation takes priority over recompressing the face. |
| Downloaded CV | 596632 bytes | 289886 bytes | 51.4% smaller, with document invariants preserved |
| Active four-project brand assets combined | — | 74133 bytes | Transparent native Tablix/ScaleForged SVGs replace opaque assets; lazy-loaded, not all requested on entry |

The original static export failed the browser assertion for readable About content without JavaScript (`opacity 0`, expected `1`), and contained Nota in professional experience. It also failed the static French document-language assertion (`en`, expected `fr`). The new catalog test failed before its implementation, then passed. Reduced-motion browser QA exposed React hydration error 418 before the consistent snapshot fix. Independent review found hidden service content, a full `motion` import under strict LazyMotion, and the stale installed media-query hook; all three findings were corrected and rechecked.

Completed checks on the integrated local source/export:

- Production static build: exit 0, `/` and `/fr/` each report 158 kB first-load JS.
- ESLint with zero warnings, TypeScript check, and `git diff --check`: exit 0.
- Node tests: 8 passed, 0 failed (project contracts and Worker routing).
- `tests/browser/portfolio.mjs`: exit 0 on both locales at 1440, 390, and 320 px. Correct static language; exported About/services/projects visible without JavaScript; correct portrait; all four brand images and links; no project in professional experience; keyboard expansion; no horizontal page overflow; no console/page errors.
- Normal motion: section reveal works; live change to reduced motion removes pending reveals and displays the full static phase list. Independent read-only review also observed the orbit icon stop and no console errors.
- Visual correction: `tests/browser/visual-backgrounds.mjs` first failed because the portrait had no mask, then passed after the cutout integration. The added desktop assertion first failed because the CV button wrapped at 1024 px, then passed after reducing the desktop button gap. Final checks cover 1024×768, 1280×800, 1440×900 and 1920×1080: actions fit on one row and remain above the fold, and the heading retains its line rhythm on wider screens. The title now caps at 48 px. At the user's narrower 907×929 preview, a further red/green check verifies the primary action occupies one row and LinkedIn/CV share the next row evenly. Independent EN/FR review found no horizontal overflow or console errors at the four larger desktop sizes. Portrait mask decoding, removal of the arch frame, and transparent logos were also verified at 1440 and 390 px. The user's existing browser tab was reloaded and inspected with the updated cutout and action layout.
- PDF: two pages visually inspected; text, links and content streams preserved; page 2 unchanged pixel-for-pixel. Full evidence and hashes recorded separately.
- Compose configuration: exit 0; static server image manifest available. Docker daemon did not respond, so container execution is unverified.

Browser screenshots are local QA files under ignored `tmp/browser/`. These checks do not prove production Core Web Vitals, real mobile-device behavior, third-party service availability, CI execution on GitHub, or a deployment. The build retains the pre-existing stale Browserslist database notice; no unrelated dependency update was made.

## Reproduce browser verification

Build and serve `out/` with any static server, then run:

```sh
PORTFOLIO_URL=http://127.0.0.1:4173 \
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
BROWSER_CHANNEL=chrome node tests/browser/portfolio.mjs
```

The test dependency is deliberately external to the shipped site. `PLAYWRIGHT_MODULE` can be omitted where `playwright` is locally installed. `BROWSER_ARTIFACT_DIR` controls the screenshot destination. `npm run check` runs the ordinary source/build checks; `docker compose up --build` serves the export.
