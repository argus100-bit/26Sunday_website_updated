# 26Sunday — Brand Guidelines

Feed this to Antigravity to establish the design system (Tailwind theme / CSS tokens / fonts) before building any pages. Everything downstream should inherit from here.

## 1. Brand essence

- **Category:** GRC (Governance, Risk & Compliance) / Trust Operations platform
- **Positioning line:** "Trust is the foundation. We automate the rest."
- **Core belief (from About copy):** *"Precision is the respect for reality."*
- **Mission:** Make trust the easiest thing for a business to prove.
- **Personality:** Precise, calm, confident, quietly technical. Not hype-y, not cute. Enterprise-credible but not stiff or legalistic.

## 2. Voice & tone

- Short declarative sentences. Subject-verb-object. Avoid corporate padding ("leverage," "synergy," "solutioning").
- Confident understatement over superlatives. Prefer "We steady the bridge" over "We're the #1 revolutionary platform."
- Every product description follows the pattern: **name the pain → name the mechanism → name the outcome.** (e.g. "Every unanswered questionnaire is a delayed signature... 26Sunday turns that chaos into a structured workflow... you just approve and send.")
- Use "you" to speak to the reader directly; use "we" for 26Sunday's actions.
- Technical credibility signals are allowed and encouraged (SOC 2, ISO 27001, ISO 42001, NIST AI RMF) — this audience trusts specificity, not marketing adjectives.
- Avoid fear-based compliance FUD. Frame security/compliance as a growth lever ("sales acceleration," "close deals faster"), not just risk avoidance.

## 3. Color system

`[EDIT: no palette was specified in the source sketch — this is a recommended enterprise trust/security palette. Replace hex values freely; the token *names* are what matters for consistent implementation.]`

| Token | Suggested value | Usage |
|---|---|---|
| `--color-primary` | `#0B1F3A` (deep navy) | Primary text, header background option, footer background |
| `--color-accent` | `#2F6FED` (trust blue) | Primary CTAs, links, active nav state |
| `--color-accent-soft` | `#E8F0FE` | Card backgrounds, hover states, badges |
| `--color-success` | `#1C8A5A` | Status page "operational" states, positive metrics |
| `--color-warning` | `#D97706` | Status page incidents, alerts |
| `--color-neutral-900` | `#0F1115` | Body text |
| `--color-neutral-600` | `#5B6472` | Secondary/muted text |
| `--color-neutral-100` | `#F5F7FA` | Section backgrounds, alternating page sections |
| `--color-white` | `#FFFFFF` | Base background |

Rules:
- Navy + one accent blue only for primary UI. Success/warning colors reserved strictly for Status Page and Trust Health Score contexts — don't decorate marketing copy with them.
- High contrast, low saturation. This is an enterprise security buyer's site, not a consumer product — avoid gradients-as-decoration, avoid more than one accent hue per section.

## 4. Typography

`[EDIT: not specified in source — recommended pairing below]`

- **Headings:** A grotesk/geometric sans (e.g. Inter, General Sans, or Söhne-style). Tight tracking, medium-to-bold weight.
- **Body:** Same family, regular weight, generous line-height (1.6+) for long-form product/FAQ copy.
- **Monospace accents (optional):** for code-like elements (framework names, control IDs) — e.g. JetBrains Mono, used sparingly (badges, table headers referencing SOC 2 / ISO 27001 / ISO 42001).
- Scale: use a modular scale (e.g. 1.25 ratio) — don't hand-pick arbitrary sizes per page.

## 5. Logo behavior

- Full logo (icon + wordmark) shown at top of page, left-aligned in header.
- **On scroll**, animate/collapse to icon-only — matches the reference behavior described from airtable.com and anthropic.com. Implement as a smooth width/opacity transition on the wordmark portion, not an abrupt swap.
- Logo always links to `/` (home).
- `[EDIT: actual logo asset not provided — use a placeholder wordmark "26Sunday" in the primary navy until final logo files are supplied.]`

## 6. Imagery style

- Product screenshots/dashboard glimpses are used deliberately and sparingly — one hero dashboard glimpse on homepage, one feature screenshot per solution page section (per the "written text right / feature image left" pattern specified for Trust Center).
- No stock photography of people/handshakes/offices — this is a software-first, credibility-first brand. Screens, diagrams, and icons only.
- Icons: consistent single-weight line-icon set across Solutions nav, capabilities grid, and footer categories — do not mix icon styles.

## 7. Layout rhythm principles (from named references)

- **Header nav (Tesla/Orum-style):** horizontal, centered listing of top-level categories; each with an icon and, on hover/expand, a short description + "Learn More" link. Not a traditional dropdown list of plain text links.
- **Hero (Drata-style):** bold one-line value prop + supporting subtext on the left, product screenshot glimpse on the right. Generous whitespace, no clutter.
- **Scroll section (Vanta-style):** a big, simple thematic statement ("One Roof. We Lift. You Look.") introduces a horizontal set of product cards with screenshot + 1-2 line description each.
- **Segmentation section (SecurityPal-style):** audience-segmented cards (by company type/need) each pairing a pain statement with a resolution statement — not generic feature bullets.
- **Footer (Secureslate-style):** multi-column categorized link footer (Solutions / Platform / Resources / Company / Legal / Trust / Social), consistent across every page.

## 8. Accessibility & tone guardrails

- Never imply guaranteed compliance outcomes ("we guarantee your audit will pass") — frame as acceleration/support, matching the source copy's careful phrasing ("fastest path," "guided walk," not "guaranteed pass").
- All comparative claims (vs. Vanta/Drata/SecurityPal) must be factual and specific once populated — see the stub in `07_content_company.md`. Do not let the build agent invent comparison claims.
