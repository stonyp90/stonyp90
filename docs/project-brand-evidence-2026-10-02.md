# Personal project section — source and implementation evidence

Checked October 2, 2026, America/Toronto. This change adds an independent personal-project section; it does not add a job to experience or a project to the résumé. Browser acceptance belongs to the integrated website validation.

## Architecture

`lib/projects.ts` owns a typed EN/FR product catalog and section copy, with no I/O or framework runtime dependency. Its only import is the existing locale type. `components/PersonalProjects.tsx` is the presentation adapter: it reads the current locale, renders accessible project articles and uses ordinary external anchors. Local image files are a static asset adapter. No service, API, new port or new dependency is introduced. Site composition and CSS remain outside this component.

The section is labelled by `personal-projects-heading`, linked through `#personal-projects`, and uses stable product IDs. All external links use HTTPS and `rel="noopener noreferrer"`. Native lazy-loaded `next/image` elements have explicit intrinsic dimensions; the existing static-export configuration retains `images.unoptimized: true`, so compressed local assets are prepared before build.

## Current brand sources

| Project | Source checked | Decision |
| --- | --- | --- |
| GoNota | `/Users/tony/Github/nota/docs/brand-guidelines.md`, `/Users/tony/Github/nota/apps/web/public/nota-logo-light.svg`, existing portfolio domain `https://gonota.ca` | Display GoNota as requested and retain the existing Nota visual identity. Describe notarial software without an unverified launch or performance claim. |
| Tablix | `/Users/tony/Github/tablix/frontend/public/assets/brand/README.md`, `/Users/tony/Github/tablix/frontend/public/icon.svg`, `/Users/tony/Github/tablix/frontend/src/app/layout.tsx` | Use the official green identity and `https://tablix.ca`. The symbol is the three exact squares from the native icon SVG, with only its black favicon background removed. |
| Ursly | `/Users/tony/Github/entersense/docs/brand-recommendation.md:5`, `/Users/tony/Github/entersense/docs/design-system.md`, reference and master below | September 30 owner decision explicitly confirms Ursly and `https://ursly.io`. “Earsly” is treated as dictation of that established brand, pending any correction from the owner. Keep descriptions exploratory. |
| ScaleForged | `/Users/tony/Github/scaleforged-website/lib/structured-data.ts`, `/Users/tony/Github/scaleforged-website/components/layout/header.tsx`, `/Users/tony/Github/scaleforged-website/public/icon.svg` | Use ScaleForged and `https://scaleforged.io`. The current header uses the three-bar mark, matching `icon.svg`; the older violet `logo.png` is not the current header identity. |

Domain strings above were confirmed against local source, not tested as a deployment or service-health claim.

The Ursly selected image is `/Users/tony/Documents/Codex/2026-10-01/applications-mentioned-by-the-user-appshot-2/outputs/Ursly-brand/ursly-reference-retenue.png`, visually inspected at its native 1672 × 941 size. It carries the exact signature **Vos sens. Vos données. Votre choix.** The selected transparent derivative is `ursly-connected-master.png` in that same directory, with provenance in `ursly-connected-master.json` (checked October 2; native 1914 × 822). That derivative contains the humanoid and Ursly wordmark without background or embedded tagline. The card uses it so the signature remains live, readable HTML. English copy is the corresponding translation **Your senses. Your data. Your choice.**

`brand/BRAND.md` in the EnterSense repository is explicitly superseded. Its former claims about a shipped olfactory SDK, working personal AI and old product names are not copied.

## Assets and reproducibility

The exact source/output paths, SHA-256 values, bytes and transforms are recorded in [`project-brand-assets-2026-10-02.json`](project-brand-assets-2026-10-02.json). GoNota is a byte-identical SVG copy. Tablix and ScaleForged reuse their native source SVG symbols, removing only the background rectangle and tightening the viewport to the unchanged painted shapes. Raster conversion uses installed Sharp 0.34.5, proportional resize with `withoutEnlargement: true`, WebP quality 84 and effort 6. No raster is cropped, creatively retouched or upscaled.

| Asset | Output dimensions | Source bytes | Output bytes |
| --- | ---: | ---: | ---: |
| GoNota | SVG | 1,163 | 1,163 |
| Tablix | SVG, viewBox 91 91 330 330 | 386 | 329 |
| Ursly | 900 × 387, alpha retained | 1,112,573 | 72,252 |
| ScaleForged | SVG, viewBox 20 20 24 24 | 443 | 389 |

The compressed Ursly output was visually inspected after conversion. Intrinsic dimensions in the data match the decoded output metadata.

### Transparent-symbol revision after integrated screenshots

The first integrated screenshot exposed the white raster background behind Tablix and the beige favicon background behind ScaleForged. The native Tablix source `/Users/tony/Github/tablix/frontend/public/icon.svg` has the exact official palette (`#2C5F34`, `#50B848`, `#8AE62C`) and three original rectangle geometries. Its 512 × 512 background rectangle is removed only from the copied local asset; `viewBox="91 91 330 330"` fits the original symbol's painted bounds. ScaleForged removes its copied 64 × 64 background rectangle and uses `viewBox="20 20 24 24"`, keeping every original bar coordinate, radius, color and group transform. Catalog dimensions now match those viewport proportions. No external repository is modified.

The earlier `tablix-personal.webp` (600 × 335, 3,832 bytes) remains as historical output and is not referenced by the catalog. It is labelled historical in the asset manifest. The approximate Tablix portfolio SVG from ScaleForged is not used because its opacity and palette differ from the exact native Tablix source. The white email logo is also unsuitable for the site's light cards.

Native SVG transparency was verified by rendering into RGBA in memory: Tablix contains 32,206 fully transparent pixels and 76,126 fully opaque painted pixels at 330 × 330; ScaleForged contains 228 fully transparent pixels and 312 fully opaque pixels at 24 × 24. All three remaining rectangle elements are byte-identical to the corresponding source elements. This checks vector transparency and shape preservation; it is not a new raster-editing operation.

## Official guidance checked

Actual installed versions: Next.js **15.5.9**, React **19.2.3**, TypeScript **5.9.3**, Node.js **22.16.0**, Sharp **0.34.5**. Existing package ranges remain unchanged by this feature.

| Official source | Checked | Decision |
| --- | --- | --- |
| [Next.js 15 Image component](https://nextjs.org/docs/15/app/api-reference/components/image) | 2026-10-02 | Set intrinsic dimensions to reserve the correct aspect ratio; leave rendered size to CSS. Below-fold imagery keeps default lazy loading. The 15.x docs cover the installed 15.5.9 interface; no upgrade is made. |
| [React rendering lists](https://react.dev/learn/rendering-lists) | 2026-10-02 | Stable project IDs and stable phrases supply keys. |
| [TypeScript Record utility](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) | 2026-10-02 | `Record<Locale, ...>` requires both existing locales. No runtime locale inference is added. |
| [Node.js 22.16.0 test runner](https://nodejs.org/download/release/v22.16.0/docs/api/test.html) | 2026-10-02 | Use the existing runtime's `node:test` and strict assertions; no test dependency is introduced. |
| [Sharp resize](https://sharp.pixelplumbing.com/api-resize/), [WebP output](https://sharp.pixelplumbing.com/api-output/#webp) | 2026-10-02 | Resize proportionally without enlargement, retain alpha, and prepare a compressed static output. The installed 0.34.5 methods support the documented options. |

## Verification

`node --test tests/projects.test.mjs` first failed with exit 1 before `lib/projects.ts` existed. After implementation and asset preparation it passed **4 tests**, exit 0. The tests exercise both locale catalogs, official destinations, distinct IDs, exact Ursly signature, localized descriptions/categories, and readable local assets with positive dimensions. TypeScript transpilation in the test executes the data module; integrated type checking, lint, build and browser checks are separate release evidence.
