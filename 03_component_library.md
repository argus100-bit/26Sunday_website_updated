# 26Sunday — Component Library Spec

Build these as reusable components before assembling pages. Every page in `04`–`07` is composed from these.

## `<SiteHeader />`
- Sticky, full-width, white/navy background per brand tokens.
- Logo (collapses to icon on scroll — see brand guidelines §5).
- Mega-menu nav items (Solutions, Resources, Company) expand on hover/click into a panel; `Infrastructure` is a plain link.
- `Log In` button, right-aligned, distinct visual treatment (filled or bordered button, not plain text link).
- Mobile: collapses to hamburger; mega-menus become accordions.

## `<SiteFooter />`
- Six-column link grid (see `02_site_architecture.md` §3) + social row.
- Renders identically on every page.

## `<Hero />`
Props: `headline`, `subtext`, `ctaLabel`, `ctaHref`, `image`.
- Two-column layout: text block left (headline, subtext, CTA button), image/screenshot right.
- Used on: Home, each Solutions page, SaaS/SaaS+ pages.

## `<ScrollStatement />`
Props: `statement`, `subtext`.
- Full-width, centered, large type. A single bold thematic line + one supporting sentence. No CTA, no image — pure pacing/breathing element between dense sections (Vanta "One Roof" reference).

## `<ProductCardRow />`
Props: `cards: [{ title, description, image }]`
- Horizontal row (wraps to grid on mobile) of cards, each with screenshot + title + 1–2 line description. Used for the four-product showcase on Home.

## `<AudienceSegmentGrid />`
Props: `segments: [{ audience, painAndResolution }]`
- Card grid, one per target audience (AI startups / SaaS companies / SOC2-HIPAA-etc companies). Each card: bold audience label, then a paragraph following the pain→mechanism→outcome voice pattern from brand guidelines.

## `<EngagementModelToggle />`
Props: `models: [{ name: "SaaS" | "SaaS+", description }]`
- Two-option selector/toggle (not a full page nav) used within the Home page and Platform pages to let a visitor mentally switch between "you run it" vs "we run it" framing before clicking through to the dedicated pages.

## `<CapabilitiesGrid />`
Props: `items: [{ icon, title, description }]`
- Grid of 6 capability cards (2×3 or 3×2 responsive), icon + title + short description. Used on Trust Center page: NDA gating & access control, Sales acceleration, Custom branding, Subprocessor change alerts, Audit-ready document vault, Smart Search.
- `[EDIT: source doc references an uploaded reference image (2048×1082px) for this section's exact visual layout — a 6-item icon+title+description grid, roughly 3 columns × 2 rows based on aspect ratio. Recreate the grid rhythm; do not attempt to reproduce the reference image itself, use original icons/illustration.]`

## `<TwoColumnFeature />`
Props: `title`, `body`, `image`, `imagePosition: "left" | "right"`
- Alternating text/image feature blocks used repeatedly on Solution pages (e.g. Trust Center's "Unified Control Plane," "Intelligent Ecosystem Integration," "Questionnaire Gateway" sections).

## `<ComparisonTable />`
Props: `rows: [{ label, saas, saasPlus }]`
- Two-column comparison table (SaaS vs SaaS+) with row labels: Core engine, Best for, Trust Center setup, Questionnaires, Readiness Assessment, Ideal when. See exact copy in `06_content_platforms.md`.

## `<FAQAccordion />`
Props: `items: [{ question, answer }]`
- Standard expand/collapse accordion, one open at a time. Used on Platform page.

## `<StatusIndicatorPreview />` *(optional homepage teaser only)*
- Small decorative element hinting at the Status Page product (green "operational" dot + sample service list) — not a functional status page, just a marketing preview embedded in the product card row.

## Solution Page Template (shared by all 4 `/solutions/*` pages)
Composed as:
1. `<Hero />` — bold claim + supporting paragraph + feature image
2. `<TwoColumnFeature />` × N — alternating feature deep-dives
3. `<CapabilitiesGrid />` — only on Trust Center page (per source content); other solution pages may reuse this component if/when equivalent capability lists are written
4. Cross-link module linking to the other 3 solutions (not explicitly specified in source — `[EDIT: recommended addition for navigation/SEO, confirm before building]`)

## Platform Page Template (`/platform`, `/platform/saas`, `/platform/saas-plus`)
1. `<Hero />`
2. Bulleted value-prop list block (see content file — "Operationalizing trust," "Close Deals Faster," etc. as individually titled short blocks, not a plain bullet list — each gets its own bold mini-heading + 1–2 sentence body)
3. `<ComparisonTable />` (on `/platform` comparison view)
4. `<FAQAccordion />`
