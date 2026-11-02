# Mobile Vibe Coding Masterclass — delivery TODO

## Landing page narrative and brand system

- [ ] The website presents a production-quality, mobile-first one-page sales experience for Mobile Vibe Coding Masterclass with a premium futuristic technology / luxury digital education visual identity.
- [ ] The visual system uses the requested dark palette (#080B14, #0D1220, #121A2B, #3978FF, #5B9BFF, #20D69A, #F8FAFC, #A1AEC2), strong editorial typography, subtle borders, restrained gradients and no generic course-template styling.
- [ ] Navigation includes the MOBILE VIBE / CODE ACADEMY wordmark, brand mark, section links, GET THE COURSE CTA, a compact mobile menu and accessible anchor navigation.
- [ ] The hero immediately communicates that a smartphone and AI are enough to start, includes the supplied headline and supporting copy, both CTAs, three trust indicators and a premium smartphone/product-launch visual.
- [ ] The problem, transformation, audience and differentiated-learning sections preserve the supplied messages, avoid fabricated claims, and guide visitors toward the course offer.

## Curriculum, proof and FAQ

- [ ] The curriculum includes the four supplied modules plus the bonus private Telegram learning community, with module numbers, descriptions, lesson lists, illustrative visuals and touch-friendly expandable accordions.
- [ ] The showcase section communicates professional websites, web applications, digital products and live project deployment without presenting illustrative work as real student work.
- [ ] The credibility area uses editable placeholders for instructor identity, photo, bio, course preview video, demonstrations and verified testimonials; it does not invent credentials, student counts, reviews, completion statistics, certifications or earnings.
- [ ] The FAQ accordion contains the seven supplied questions and answers with smooth, accessible disclosure behavior.

## Offer and payment safety

- [ ] The offer shows regular price ₦15,000 crossed out, current launch price ₦7,000, the complete supplied inclusion list, Paystack payment-method reassurance and the transparent future price increase to ₦10,000 without fake countdowns or fake scarcity.
- [ ] Every purchase CTA reads from the clearly identified `PAYSTACK_PAYMENT_URL` / `VITE_PAYSTACK_PAYMENT_URL` configuration contract, opens the real checkout when configured, and never invents a URL or simulates a successful payment.
- [ ] When checkout configuration is missing, the site gives a clear non-deceptive setup message rather than a broken or fake checkout.
- [ ] The dedicated `/success` page uses the exact supplied verified-payment copy, provides the supplied Telegram invitation URL for verified handoff, and explains that real server-side verification/webhook credentials are required before access is granted.
- [ ] The implementation notes the required secure Paystack behavior: server-side verification, NGN amount validation for ₦7,000, duplicate prevention, and graceful abandoned/failed payment handling.

## Responsive experience and polish

- [ ] The site is responsive for smartphone, tablet and desktop widths with no horizontal overflow, readable type, touch-friendly controls, smooth scrolling, optimized visual assets and accessible focus states.
- [ ] A persistent mobile purchase bar appears after the hero CTA leaves the viewport and hides when the main pricing section is prominently visible; it does not cover content or footer controls.
- [ ] Motion includes refined hero/section reveals, subtle phone floating, interface-preview motion, hover/press feedback, accordion transitions and reduced-motion support.
- [ ] Footer includes brand, supplied tagline, navigation, policy placeholders, verified-student Telegram community wording and current copyright year.

## Technical delivery

- [ ] React, TypeScript, Tailwind, Framer Motion and Lucide are used through reusable maintainable components.
- [ ] `public/manus-routes.json` declares `/` and `/success`; SEO metadata includes title, description, OG tags, canonical placeholder, structured data and image alt text.
- [ ] The project passes TypeScript checks, builds through the static build command, serves the route manifest as JSON and is ready for preview/publication.
- [ ] The only unresolved launch blockers are the user's actual Paystack checkout URL and secure Paystack server/webhook credentials; these are clearly called out without pretending the integration is live.
