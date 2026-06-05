/* ==========================================================================
   French site content.

   Pattern: spread the English content, then override with French as it is
   provided. Anything not yet translated falls back to English, so /fr never
   renders broken — it just shows English for un-translated fields.

   TO TRANSLATE: add French values into the `ui` overrides below (and, when
   ready, override `experiences` / `services` / `certifications` with French
   versions). Keys must match en.ts exactly.
   ========================================================================== */

import { en } from './en'
import type { SiteContent } from './en'

export const fr: SiteContent = {
  ...en,

  ui: {
    ...en.ui,
    locale: {
      code: 'fr',
      label: 'FR',
      otherLabel: 'EN',
      switchTo: 'View in English',
      otherPath: '/',
    },

    // ---- French overrides go here as copy is provided -----------------------
    // Example (remove once real copy lands):
    // hero: { ...en.ui.hero, badge: 'Disponible pour de nouveaux mandats', ... },
    // -------------------------------------------------------------------------
  },
}
