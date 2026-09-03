# 26Sunday — Site Architecture & Navigation

## 1. Sitemap

```
/ (Home)
├── /solutions
│   ├── /solutions/trust-center
│   ├── /solutions/questionnaire
│   ├── /solutions/status-page
│   └── /solutions/readiness-assessment
├── /platform
│   ├── /platform/saas
│   └── /platform/saas-plus
├── /infrastructure
├── /resources
│   ├── /resources/reports
│   ├── /resources/documentation
│   └── /resources/product-updates
├── /company
│   ├── /company/about
│   ├── /company/careers
│   └── /company/contact
├── /legal
│   ├── /legal/privacy-policy
│   ├── /legal/terms-of-use
│   └── /legal/terms-of-service
└── https://app.26sunday.com (external — Log In, opens in same tab)
```

## 2. Header specification

Persistent, sticky header. Structure left-to-right:

1. **Logo** — far left. Full logo (icon + wordmark) at page top; collapses to icon-only on scroll (see `01_brand_guidelines.md` §5). Links to `/`.
2. **Primary nav** — horizontal, centered, in this order:
   - **Solutions** (expandable mega-menu — see below)
   - **Infrastructure** (single link, no submenu — this section exists to subtly market the platform's technical/infra strength)
   - **Resources** (expandable — Reports, Documentation, Product Updates)
   - **Company** (expandable — About, Careers, Contact)
3. **Log In** — far right, styled as a distinct button (not a plain nav link), links to `https://app.26sunday.com`.

### Solutions mega-menu content
Horizontal listing, Tesla/Orum-style — icon + name + one-line description + "Learn More" per item:

| Item | One-liner | Links to |
|---|---|---|
| Trust Center | A smart, intuitive portal where visitors find what they need or upload their questionnaire right there — no back-and-forth. | `/solutions/trust-center` |
| Questionnaire | AI pre-answers from your knowledge base, so you're never starting from scratch. | `/solutions/questionnaire` |
| Status Page | Detects downtime, generates incident timelines, and sends subscriber alerts — all from one dashboard. | `/solutions/status-page` |
| Readiness Assessment | Pick any framework — 26Sunday gap-checks, recommends fixes, and tracks progress daily. | `/solutions/readiness-assessment` |

### Resources menu
- Reports — "Insights from 26Sunday's research" → `/resources/reports`
- Documentation — "Operational and technical knowledge base: platform guides, setup instructions, FAQs" → `/resources/documentation`
- Product Updates — "Changelog/roadmap style: new features, infrastructure improvements, workflow enhancements" → `/resources/product-updates`

### Company menu
- About — "Core company overview: mission, what 26Sunday does, philosophy, positioning" → `/company/about`
- Careers → `/company/careers`
- Contact — "Sales, support, and security contacts" → `/company/contact`

## 3. Footer specification (applies site-wide, every page)

Six-column layout (Secureslate reference):

| Solutions | Platform | Resources | Company | Legal | Trust |
|---|---|---|---|---|---|
| Trust Center | `[EDIT: source doc has one item "Decided." here — appears to be a placeholder/typo in the original sketch, not a real link label. Recommend replacing with SaaS / SaaS+ links pointing to /platform/saas and /platform/saas-plus until clarified.]` | Reports | About | Privacy Policy | Trust Center |
| Questionnaire | | Documentation | Careers | Terms of Use | Status Page |
| Status Page | | Product Updates | Contact | Terms of Service | |
| Readiness Assessment | | | | | |

Plus, bottom row: **Social Handles** — LinkedIn, X, YouTube (icon links, open in new tab).

`[EDIT: "Trust" column duplicates Trust Center / Status Page which already exist under Solutions — likely intentional in the source (a dedicated trust-signal footer cluster, common pattern for compliance-sector sites, e.g. linking to 26Sunday's own public trust center instance). Keep as-is unless you want to deduplicate.]`

## 4. Page-level routing notes

- `/platform` should not be a real landing page necessarily — could redirect to `/platform/saas` by default, or serve as a neutral comparison landing page that then routes into `/platform/saas` and `/platform/saas-plus`. `[EDIT: source doc structures "Platforms" as containing both SaaS and SaaS+ as sibling deep-dive pages with a comparison table between them — recommend building `/platform` as the comparison-table page itself, per `06_content_platforms.md`.]`
- `/infrastructure` is a single marketing page (not a submenu) — see note in `01_brand_guidelines.md` about subtle technical-credibility marketing; content not detailed in the source sketch beyond intent. `[EDIT: needs content — flag to user/marketing team; not fabricated here.]`
- All Solutions sub-pages share the same page template (see `03_component_library.md` §Solution Page Template).
