# SIMLABS Website

## Current State
- Multi-page dark tech website with dedicated pages for Services, Products, Industries, Customers, Projects, Partners, Careers, Contacts.
- Homepage has Hero, AboutBanner, WhatWeOffer, CustomerLogoSection, WhySimlabsSummary, ContactCTA sections.
- The AboutBanner (full SIMLABS® intro text) sits ABOVE the WhatWeOffer section.
- WhatWeOffer tiles for Industries currently show tooltips/descriptions on hover.
- Footer has three-column bottom bar: left copyright + "All rights reserved" combined, center Privacy Policy link, right "Built with ❤️ using caffeine.ai" text.
- Navigation order in `NAV_LINKS` (App.tsx, SharedHeader.tsx, Footer.tsx): Home, Services, Products, Industries, **Customers**, **Projects**, Partners, Careers, Contacts.
- `WhatWeOfferTile` component renders tooltip (`desc`) for all three columns (Services, Products, Industries).

## Requested Changes (Diff)

### Add
- Introductory paragraph (the full SIMLABS® firm description from AboutBanner) inside the WhatWeOffer section, placed ABOVE the three-column grid, styled at the same font size as the introductory paragraph under "Why Choose SIMLABS?" (currently `text-muted-foreground max-w-2xl` / `text-sm`).
- New standardized footer bottom bar with three-zone layout:
  - Left: `© 2026 Simlabs Software LLP.`
  - Center: `All rights reserved.`
  - Right: `Privacy Policy` (link to /privacy-policy)

### Modify
- **AboutBanner**: Remove this section entirely from the homepage render order (its content moves into WhatWeOffer as intro text).
- **WhatWeOfferTile** for Industries column: Pass empty `desc=""` so tooltip does not appear; keep tiles as-is for Services and Products.
- **Footer bottom bar**: Replace the current single-row with the new three-zone layout described above. Remove "Built with ❤️ using caffeine.ai" text entirely.
- **NAV_LINKS** in `App.tsx`, `SharedHeader.tsx`, and `Footer.tsx`: Swap Customers and Projects positions → new order: Home, Services, Products, Industries, **Projects**, **Customers**, Partners, Careers, Contacts.
- **Section spacing**: Audit all `py-*` values across homepage sections and ensure uniform gaps (py-14 consistently) between sections; ensure padding/margin consistency across secondary pages.

### Remove
- `AboutBanner` component usage in `AppHome` (content moved into WhatWeOffer intro).
- "Built with ❤️ using caffeine.ai" text from Footer.
- Tooltip/description behavior for Industries tiles in WhatWeOffer.

## Implementation Plan
1. In `App.tsx`:
   a. Move the full SIMLABS® intro paragraph from `AboutBanner` into `WhatWeOffer`, placed above the 3-column grid, with font size matching `text-sm text-muted-foreground` (same as Why Choose SIMLABS? intro).
   b. Remove `<AboutBanner />` from `AppHome`.
   c. In the Industries column of `WhatWeOffer`, pass `desc=""` to each `WhatWeOfferTile` (or use a separate tile component without tooltip).
   d. Update `NAV_LINKS` in `App.tsx`: swap Customers and Projects → Projects before Customers.
2. In `SharedHeader.tsx`: Update `NAV_LINKS` — swap Projects and Customers.
3. In `Footer.tsx`:
   a. Update `NAV_LINKS` — swap Projects and Customers.
   b. Replace the bottom bar section: left = `© 2026 Simlabs Software LLP.`, center = `All rights reserved.`, right = `Privacy Policy` link. Remove caffeine.ai credit.
4. Verify section spacing is uniform (py-14) across all homepage sections.
5. Validate build passes (lint + typecheck).
