# 26Sunday — Technical / System Instructions for the Build Agent

Feed this file to Antigravity **first, on its own**, before any brand or content files. It scaffolds the project and locks in the working conventions that every other file (`01`–`07`) builds on top of.

**Stack decision: JavaScript, Next.js, Node.js, React.** No TypeScript — plain `.js`/`.jsx` throughout.

---

## 1. Stack

| Layer | Choice | Notes |
|---|---|---|
| Language | **JavaScript (ES2022+)** | No TypeScript. Use `.js` for logic/config, `.jsx` for anything returning JSX. |
| Framework | **Next.js (App Router)** | Latest stable major version. Use React Server Components by default; mark Client Components explicitly with `"use client"` only where interactivity requires it (mega-menu, accordion, toggle, forms). |
| UI library | **React** | Function components + hooks only. No class components. |
| Runtime | **Node.js (LTS)** | For the dev server, build, and any API routes/route handlers. |
| Styling | **Tailwind CSS** | Config driven entirely by design tokens from `01_brand_guidelines.md`. No inline `style={{}}` except for truly dynamic/computed values (e.g. animated header height). |
| Content | **Plain JS content modules** | `/content/*.js` exporting plain objects/arrays (title, body, images, links). No MDX, no CMS dependency for launch — keeps content editable by a non-engineer who can read a JS object literal, and keeps this kit's `.md` content files as the direct source to transcribe from. |
| Forms/backend | **Next.js Route Handlers** (`app/api/.../route.js`) | Contact form posts to a route handler. If no email/CRM backend exists yet, the handler should validate input and return a clear "not yet wired up" response — never fake a success silently. |
| Package manager | **npm** | Default choice; switch to pnpm/yarn only if the team already standardizes on one. |
| Deployment target | **Vercel-compatible** | Static generation (`generateStaticParams`/default SSG) for every marketing page; only use dynamic rendering for something that truly needs it (e.g. a live Product Updates feed later). |
| Linting/formatting | **ESLint (`eslint-config-next`) + Prettier** | Run on every file before considering a page "done." |

`[EDIT: this is the confirmed stack per your instruction — JS/Next.js/Node/React, no TypeScript. Everything below assumes plain JavaScript.]`

---

## 2. Project structure

```
26sunday-web/
├── app/
│   ├── layout.js                 (root layout: <SiteHeader/>, <SiteFooter/>, fonts, metadata)
│   ├── page.js                   (Home)
│   ├── globals.css               (Tailwind directives + CSS variable tokens)
│   ├── solutions/
│   │   ├── page.js               (Solutions hub)
│   │   ├── trust-center/page.js
│   │   ├── questionnaire/page.js
│   │   ├── status-page/page.js
│   │   └── readiness-assessment/page.js
│   ├── platform/
│   │   ├── page.js               (SaaS vs SaaS+ comparison)
│   │   ├── saas/page.js
│   │   └── saas-plus/page.js
│   ├── infrastructure/page.js
│   ├── resources/
│   │   ├── reports/page.js
│   │   ├── documentation/page.js
│   │   └── product-updates/page.js
│   ├── company/
│   │   ├── about/page.js
│   │   ├── careers/page.js
│   │   └── contact/page.js
│   ├── legal/
│   │   ├── privacy-policy/page.js
│   │   ├── terms-of-use/page.js
│   │   └── terms-of-service/page.js
│   ├── api/
│   │   └── contact/route.js      (Node route handler for the contact form)
│   ├── sitemap.js                (dynamic sitemap.xml generation)
│   └── robots.js
├── components/
│   ├── layout/
│   │   ├── SiteHeader.jsx
│   │   ├── SiteFooter.jsx
│   │   └── MegaMenu.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── ScrollStatement.jsx
│       ├── ProductCardRow.jsx
│       ├── AudienceSegmentGrid.jsx
│       ├── EngagementModelToggle.jsx
│       ├── CapabilitiesGrid.jsx
│       ├── TwoColumnFeature.jsx
│       ├── ComparisonTable.jsx
│       └── FAQAccordion.jsx
├── content/
│   ├── home.js
│   ├── solutions/
│   │   ├── trustCenter.js
│   │   ├── questionnaire.js
│   │   ├── statusPage.js
│   │   └── readinessAssessment.js
│   ├── platform/
│   │   ├── saas.js
│   │   ├── saasPlus.js
│   │   └── comparison.js
│   └── company/
│       ├── about.js
│       ├── careers.js
│       └── contact.js
├── lib/
│   └── utils.js                  (shared helpers — cn/classnames merge, etc.)
├── public/
│   └── images/
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json                 (path aliases, e.g. "@/components/*" — JS equivalent of tsconfig)
├── next.config.js
├── .eslintrc.json
├── package.json
└── README.md
```

Use `jsconfig.json` (not `tsconfig.json`) to enable clean import aliases like `@/components/sections/Hero` in plain JS:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 3. Component conventions

- Every component listed in `03_component_library.md` gets its own `.jsx` file under `components/sections/`, accepting the props documented there via plain destructured function arguments and PropTypes-style JSDoc comments for self-documentation (since there's no TypeScript to enforce shapes):

```jsx
/**
 * @param {Object} props
 * @param {string} props.headline
 * @param {string} props.subtext
 * @param {string} props.ctaLabel
 * @param {string} props.ctaHref
 * @param {string} props.image
 */
export default function Hero({ headline, subtext, ctaLabel, ctaHref, image }) {
  // ...
}
```

- Default to **Server Components** (no directive needed). Add `"use client"` at the top of a file only when it needs `useState`, `useEffect`, event handlers, or browser APIs — this applies to: `MegaMenu.jsx`, `FAQAccordion.jsx`, `EngagementModelToggle.jsx`, the contact form, and the header's scroll-collapse logic.
- No copy hardcoded inside component files. Components receive content as props; pages import from `/content` and pass it down. This keeps `04`–`07` content files the actual source of truth — someone should be able to update copy by editing a `/content/*.js` file without touching a single component.
- Shared UI primitives (buttons, badges, section containers) should be extracted into small components under `components/ui/` if you notice repetition across 3+ sections — don't let the same button markup get copy-pasted across `Hero.jsx`, `TwoColumnFeature.jsx`, etc.

---

## 4. Styling conventions

- All colors, font sizes, spacing come from Tailwind theme extensions in `tailwind.config.js`, generated from the tokens in `01_brand_guidelines.md` §3–4:

```js
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
    },
  },
};
```

- Define the raw values once in `globals.css` as CSS variables so a future rebrand is a one-file change:

```css
:root {
  --color-primary: #0B1F3A;
  --color-accent: #2F6FED;
  --color-accent-soft: #E8F0FE;
  --color-success: #1C8A5A;
  --color-warning: #D97706;
}
```

- No arbitrary one-off hex values or pixel sizes inline in JSX (`className="text-[#123456]"`) — if a color/size is needed, it goes in the theme first.

---

## 5. Accessibility bar (WCAG 2.1 AA minimum)

- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<footer>`, single `<h1>` per page, strict heading order (no skipping from `h2` to `h4`).
- Every interactive element (mega-menu trigger, accordion item, toggle, form field) reachable and operable via keyboard alone; visible focus states required (don't strip Tailwind's default focus ring without replacing it).
- All images use Next.js `<Image>` with meaningful `alt` text describing content, not filenames (e.g. `alt="Trust Center dashboard showing questionnaire inbox"`, never `alt="image1.png"`).
- Color contrast for every text/background pairing checked against the token palette before shipping.
- Forms: every input has an associated `<label>`; errors are announced via `aria-live` regions, not color alone.

---

## 6. SEO & metadata

- Use the Next.js App Router `metadata` export (plain JS object, no TS types needed) per page:

```js
export const metadata = {
  title: "Trust Center | 26Sunday",
  description: "A smart, intuitive portal where visitors self-serve security answers or submit a questionnaire — no back-and-forth.",
};
```

- Every page gets a unique `title` and `description` written from its actual headline/body — never reuse the homepage's metadata across pages.
- Add JSON-LD structured data via a small script tag helper: `Organization` schema on the homepage, `FAQPage` schema on `/platform` (it has a real, complete FAQ set — this is free rich-result eligibility).
- Generate `app/sitemap.js` and `app/robots.js` using the Next.js built-in conventions so the sitemap always matches the actual route tree in `02_site_architecture.md`.

---

## 7. Performance

- All images served through `next/image` with responsive `sizes` attributes; lazy-load everything below the hero fold (`next/image` does this by default — don't override with `priority` except on the actual hero image).
- Reserve fixed header height/space so the logo's scroll-collapse animation (see `01_brand_guidelines.md` §5) never causes layout shift (CLS).
- Fonts loaded via `next/font` (local or Google) rather than a render-blocking external `<link>` tag, to avoid FOUC and to self-host for performance.
- Target Lighthouse ≥ 90 across Performance / Accessibility / Best Practices / SEO on every page before marking it done. Re-run after adding any third-party script (analytics, chat widget, etc.).

---

## 8. Forms & API routes (Node)

- Contact form (`app/company/contact/page.js`) is a Client Component that posts to `app/api/contact/route.js`.
- The route handler runs on Node.js runtime (default for route handlers unless explicitly set to `edge`), validates required fields server-side (don't trust client-side validation alone), and — until a real email/CRM integration is provided — returns a structured "received, not yet routed" response rather than silently pretending to succeed:

```js
// app/api/contact/route.js
export async function POST(request) {
  const body = await request.json();
  const { name, email, reason, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire to real email/CRM (Sales / Support / Security routing per reason)
  console.log("Contact form submission (not yet routed to backend):", body);

  return Response.json({ status: "received" }, { status: 200 });
}
```

---

## 9. Environment & config

- `.env.local` for any future secrets (email API keys, analytics IDs) — never commit real keys.
- `next.config.js` kept minimal at launch; add `images.remotePatterns` only if/when external image hosts are introduced.

---

## 10. What NOT to fabricate

Several places in the content files (`05`, `07`) are explicitly marked `[EDIT: ...]` because the source brief left them incomplete: Status Page and Readiness Assessment deep-dive copy, Careers content, exact contact routing addresses, the Vanta/Drata/SecurityPal comparison section, exact brand colors/fonts, and the final logo asset. Build clean, clearly-labeled placeholder states for these (e.g. a "Content coming soon" block, not an invented paragraph) and flag the gap back to the user rather than shipping fabricated copy, claims, or comparisons.

---

## 11. Suggested build sequence for the agent

1. `npx create-next-app@latest` with **JavaScript selected (not TypeScript)**, App Router, Tailwind CSS enabled, ESLint enabled.
2. Wire up `globals.css` tokens + `tailwind.config.js` theme extension from `01_brand_guidelines.md`.
3. Build `SiteHeader.jsx` / `SiteFooter.jsx` / root `layout.js` (uses `02_site_architecture.md`).
4. Build each shared section component from `03_component_library.md` — consider a temporary `/app/dev/components/page.js` preview route to sanity-check each in isolation before wiring into real pages (delete this route before launch).
5. Build Home (`04_content_home.md` → `content/home.js` → `app/page.js`).
6. Build Solutions hub + 4 sub-pages (`05_content_solutions.md`).
7. Build Platform pages + comparison + FAQ (`06_content_platforms.md`).
8. Build Company pages (`07_content_company.md`).
9. Stub Infrastructure, Resources, and Legal pages structurally — content not yet provided for these (see gaps noted throughout).
10. Wire the contact form to `app/api/contact/route.js`.
11. Generate `sitemap.js` / `robots.js`, add metadata + JSON-LD to every page.
12. Full responsive pass (375px / 768px / 1440px+), accessibility pass, and Lighthouse ≥ 90 check across every built page before calling the build done.
