# 26Sunday Website — Build Kit for Antigravity

This folder is a modular spec for building the **26sunday.com** marketing website. It's split into independent files on purpose: you can hand Antigravity one file at a time, or all of them, and you can edit any single piece (e.g. just the brand colors, or just the Trust Center page copy) without breaking the others.

## Files in this kit

| File | Purpose | Edit this when... |
|---|---|---|
| `01_brand_guidelines.md` | Voice, tone, color system, typography, logo behavior, design references | You want to change how the site *looks and sounds* |
| `02_site_architecture.md` | Full sitemap, nav structure, header/footer spec, routing | You add/remove/rename a page or nav item |
| `03_component_library.md` | Reusable UI component specs (header, hero, cards, tables, FAQ, footer) | You want a component to behave/look differently everywhere it's used |
| `04_content_home.md` | Full homepage copy, section by section | You want to change homepage messaging |
| `05_content_solutions.md` | Solutions hub + 4 product pages (Trust Center, Questionnaire, Status Page, Readiness Assessment) | You want to change product page copy |
| `06_content_platforms.md` | SaaS vs SaaS+ page, comparison table, FAQ | You want to change pricing/model messaging |
| `07_content_company.md` | About, Careers, Contact page copy | You want to change company-facing copy |
| `08_technical_system_instructions.md` | Stack, folder structure, performance/SEO/accessibility rules, coding conventions | You want to change *how* the agent builds (framework, conventions, quality bar) |

## Recommended build order (paste into Antigravity in this sequence)

1. **`08_technical_system_instructions.md`** first, alone — this sets the stack and ground rules for everything that follows. Let Antigravity scaffold the project from this before you give it any content.
2. **`01_brand_guidelines.md`** — establish the design system (Tailwind config / tokens / fonts) before building pages, so every subsequent page inherits it instead of improvising.
3. **`02_site_architecture.md`** + **`03_component_library.md`** together — have it build the shared shell (header, footer, nav, layout) and the reusable components first.
4. Then feed content files one at a time: `04` → `05` → `06` → `07`, building one page/section at a time and reviewing before moving to the next.

## Why split it this way (efficiency notes)

- **Small, focused prompts beat one giant prompt.** Antigravity (like any agentic coding tool) produces more reliable output when each task is scoped to one concern. Dumping all 9 files in one message invites it to blend concerns and drift from the spec.
- **Content is separated from design.** If you rewrite the About page copy next month, you only touch `07`. If you rebrand colors, you only touch `01`. Neither touches the component code.
- **Placeholders are marked `[EDIT: ...]`** throughout these files — anything not explicitly specified in the original sketch (exact hex codes, font choices, contact emails, legal page text) is flagged this way so you know what's an assumption vs. what came from your brief.
- **Open items from your sketch:** the "26 ways 26Sunday is better than Vanta/Drata/SecurityPal" section was marked in your original doc as pending research (comment from Arpan Baral, June 18 2026) — it's included here as a stubbed-out section in `07_content_company.md` for you to fill in once that research is done, rather than fabricated.

## A note on design references from your sketch

Your original doc named several sites as visual/structural references. These are recorded in `01_brand_guidelines.md` and `03_component_library.md` as directional cues (layout rhythm, information density, interaction patterns) — not as anything to copy pixel-for-pixel or reproduce IP from:
- Airtable / Anthropic → logo-to-icon scroll animation in header
- Tesla / Orum → horizontal solutions nav with icon + "Learn More"
- Drata → landing page hero one-liner treatment
- Vanta → "one roof" scroll section, SaaS+ demo-video layout
- SecurityPal → segmented "who it's for" marketing section
- Secureslate → footer structure
