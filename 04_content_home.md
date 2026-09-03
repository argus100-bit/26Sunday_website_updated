# 26Sunday — Homepage Content

Build using: `<Hero />`, `<ScrollStatement />`, `<ProductCardRow />`, `<AudienceSegmentGrid />`, `<EngagementModelToggle />`, standard `<SiteHeader />` / `<SiteFooter />`.

## Section 1 — Hero

Pick ONE of the following as the primary headline (three options were sketched — recommend A/B testing, or picking based on final brand tone review):

- **Option A:** "Trust is the foundation. We automate the rest."
- **Option B:** "Automate trust. Secure every connection. Build the future."
- **Option C:** "We steady the bridge." — subtext: "Trust centers. Questionnaires. Status. Readiness. One platform."

`[EDIT: recommend Option C as primary — it's the only one with a supporting subtext already written, and it best introduces the four-product framing that follows immediately after.]`

**Layout:** headline + subtext on the left; dashboard product glimpse image on the right (per `<Hero />` component).

## Section 2 — Scroll statement

Use `<ScrollStatement />`:

> **One Roof. We Lift. You Look.**
>
> All your trust operations under one roof. From trust centers to questionnaires to readiness — we run the engine. You stay in control.

## Section 3 — Product showcase

Use `<ProductCardRow />` with these four cards (screenshot placeholder + copy each):

1. **Trust Center**
   "From silent repository to active sales asset. Customers self-serve, submit security questionnaires, and you wake up to signed deals. You get a dashboard, not another email thread."

2. **Questionnaire**
   "The only questionnaire tool that learns as you go. Upload. Auto-fill. Review. Send. That's the whole workflow. Everything else is our AI."

3. **Status Page**
   "A status page that actually builds trust, not just shows outages. Automatic updates from your monitoring tools, subscriber notifications, and incident history are all linked to your Trust Health Score."

4. **Readiness Assessment**
   "The fastest path from 'we should get certified' to 'we're ready.' Pre-mapped controls, auditor-approved evidence templates, and a clear gap closure plan — you just track progress."

## Section 4 — Who it's for

Intro line: **"26Sunday is for everyone."**

Use `<AudienceSegmentGrid />` with three segments:

1. **AI startups chasing ISO 42001 readiness / NIST AI RMF**
   "Chasing ISO 42001 or any new assurance needed for compliance? 26Sunday turns a daunting compliance sprint into a guided, weeks-long walk. We map every required control, auto-detect gaps, and provide auditor-approved evidence templates. You just review, implement, and submit."

2. **SaaS companies drowning in security questionnaires**
   "Every unanswered questionnaire is a delayed signature. Every manual response burns engineering hours you don't have. 26Sunday turns that chaos into a structured workflow: we auto-detect questions, map them to your knowledge base, and deliver draft answers — you just approve and send."

3. **Companies managing SOC 2, HIPAA, and beyond**
   "Companies juggling SOC 2, HIPAA, and many more often get blindsided by expired certificates or drifted controls. 26Sunday sends automated expiry alerts weeks in advance, and flags control changes daily, so you fix issues before auditors do."

## Section 5 — Engagement model

Heading: **"Choose your Engagement Model"**

Use `<EngagementModelToggle />`:

- **SaaS You run the platform.**
- **SaaS+ We run the platform for you.**

Body copy (below the toggle):
"Every 26Sunday solution is available in two tiers. With SaaS, your team retains full control: you configure, review, and approve all outputs. With SaaS+, our certified GRC specialists act as an extension of your team — we handle the day-to-day work (creation of the trust center, evidence collection, questionnaire drafting, readiness assessments, and viable requests within scope) and deliver only the final items for your approval. The underlying platform is identical. The only difference is who lifts."

"Select SaaS for complete autonomy. Select SaaS+ for hands-free compliance. Mix and match per solution, or apply the same model across your entire trust program."

CTA buttons under this section should link to `/platform/saas` and `/platform/saas-plus` respectively.

## Section 6 — Footer

Standard `<SiteFooter />` (see `02_site_architecture.md` §3) — no unique homepage footer content.
