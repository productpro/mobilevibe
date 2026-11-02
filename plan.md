# Mobile Vibe Coding Masterclass — implementation plan

## Scope and implementation approach

Build a static React + TypeScript + Tailwind sales experience with two client routes: `/` for the conversion-focused landing page and `/success` for the verified-payment handoff state. Keep the payment CTA external and safe: read `PAYSTACK_PAYMENT_URL` from a browser-safe public configuration variable, render a clear unconfigured state when absent, and never simulate payment success. The success page is a dedicated UI route only; it states that access should follow real server-side verification and links to the supplied Telegram invite only from the verified handoff context.

The page will be implemented as reusable sections and presentational components in `client/src/pages/Home.tsx`, with concise data arrays for curriculum, FAQ, audience, benefits and offer inclusions. Wouter will route `/` and `/success`; `public/manus-routes.json` will declare both routes. Because the initial project has no Server or Database capability, the site will carry a clear configuration note for the future Paystack URL/webhook credentials rather than pretending verification is live.

## Project structure

- `client/src/pages/Home.tsx`: landing page sections, responsive navigation, accordion state, CTA behavior and sticky mobile purchase bar.
- `client/src/pages/Success.tsx`: post-verification handoff page with Telegram link and configuration caveat.
- `client/src/App.tsx`: route map and global providers.
- `client/src/index.css`: brand tokens, responsive layout, visual system, motion and reduced-motion rules.
- `client/public/manus-routes.json`: route manifest for `/` and `/success`.
- `client/public/hero-smartphone.png`: generated visual asset for the product-launch hero composition.
- `.env.example`: safe configuration contract for `VITE_PAYSTACK_PAYMENT_URL` and future secure verification notes.
- `TODO.md`: acceptance outcomes and unresolved external configuration.

## Design direction

### Considered styles

1. **Editorial launchpad** — premium technology product launch with oversized type, asymmetrical grids, dark blue depth, and restrained electric accents. (0.06)
2. **Neon classroom** — high-energy cyber education with heavier glow and dense UI chrome. (0.04)
3. **Minimal fintech academy** — quiet dark surfaces, strict geometry, and restrained color. (0.08)

### Chosen style: Editorial launchpad

- **Design Movement:** Awwwards-style digital product launch page crossed with premium SaaS education branding.
- **Core Principles:** One clear action; editorial scale; engineered contrast; confidence without hype.
- **Color Philosophy:** Near-black navy creates seriousness and focus; electric blue signals possibility and modern tooling; mint green is reserved for verified, positive and progress moments so it feels earned.
- **Layout Paradigm:** A vertical narrative with offset content rails, wide full-bleed moments, numbered modules and alternating split sections instead of repetitive centered cards.
- **Signature Elements:** A monospaced cursor-mark wordmark; technical index labels like `01 / THE SHIFT`; hairline borders with corner coordinates; a phone-as-product-object composition.
- **Interaction Philosophy:** Every interactive element should feel like a precise control surface: visible focus, purposeful disclosure, touch-safe hit areas and immediate feedback.
- **Animation:** Soft entrance reveals, one subtle floating phone, low-amplitude background light drift and accordion height transitions. Respect `prefers-reduced-motion` by removing transforms and long delays.
- **Typography System:** Manrope for display and body; JetBrains Mono fallback for labels, indices and technical microcopy. Display type uses tight tracking and clamp-based sizing; body copy uses generous line height and readable measure.
- **Brand Essence:** A mobile-native starting point for people who want to turn ideas into software with AI — clear, empowering, serious. Personality: precise, optimistic, catalytic.
- **Brand Voice:** Direct and energizing, never inflated. Example lines: “Your next big idea starts here.” and “Stop waiting for the perfect equipment.”
- **Wordmark & Logo:** Two-line `MOBILE VIBE / CODE ACADEMY` lockup with a small terminal-cursor mark and a mint “live” notch.
- **Signature Brand Color:** Electric blue `#3978FF`, used as a precise navigation and CTA signal rather than a blanket glow.

## Content and functional decisions

- Keep all supplied copy truthful and visibly distinguish illustrative UI/project examples from real student work.
- Use `₦7,000` launch pricing and `₦15,000` regular pricing; mention the planned increase to `₦10,000` without fake countdowns or false scarcity.
- Use the exact supplied Telegram URL on the success page and footer community link, while making the public footer wording clear that access is intended for verified students.
- Present instructor, video, demos and testimonial areas as editable “coming soon / add real proof here” placeholders so no credentials or results are fabricated.
- Include SEO title, description, Open Graph tags, canonical placeholder, JSON-LD Course data and descriptive alt text.
- Configure static publication with `pnpm build:static` outputting `dist/public`; use the current port 3000 for preview.
