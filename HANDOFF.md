# Exit Probate Team — Site Handoff

A single-file briefing for whoever takes this over in Claude Code. Includes the site outline, the brand context, the webhook spec, the references, and a paste-ready prompt at the bottom.

---

## TL;DR — what's in this folder right now

- 82 static HTML pages already generated. Structure is sound, copy is decent, SEO/schema is heavy. Visual design is the part the client hates — went too "flashy" first, then over-corrected to "boring elegant." The new operator gets a clean slate on visuals.
- Build system: Node.js script under `_build/` that emits all 82 pages from data + page templates. **You can keep it, scrap it, or rebuild in Astro/Next/whatever.**
- Logo: `assets/img/logo.png` — co-branded "The Operative Group | REAL"
- Headshot: `assets/img/headshot-dan-gandee.webp` — Dan Gandee (Ed's headshot is NOT in the folder yet)
- Webhook to Supabase is wired in `assets/js/app.js`

---

## Brand context

| | |
|---|---|
| Public brand name | **Exit Probate Team** |
| Operating entity | The Operative Group (a team at REAL Broker, LLC) |
| Co-founders | Daniel Gandee · Edward Zulyevic |
| Headquarters | Eugene, Oregon |
| Service area | All 36 Oregon counties |
| Phone | (541) 525-3268 |
| Email | hello@exitprobateteam.com |
| Domain | exitprobateteam.com (existing site — will be replaced) |
| Established | 2019 |
| Brand colors (existing) | Black + bright green (#6DB23E) + green-arrow mark |

### Dan Gandee credentials (real)
- CPRES — Certified Probate Real Estate Specialist
- RENE — Real Estate Negotiation Expert
- CIPS — Certified International Property Specialist
- CEOA — Certified Express Offers Agent
- B.S. Advertising, Kent State University
- Licensed Oregon real estate broker under REAL Broker, LLC

### Ed Zulyevic
- Co-Founder · Operations & vendor network
- Multi-trade renovation coordination background
- Licensed Oregon real estate broker

### CRITICAL POSITIONING
**We are licensed Oregon real estate agents — we are NOT attorneys. Every page must reinforce this. We do not give legal advice; for legal questions we refer to probate attorneys in our network.**

---

## Form submission — Supabase webhook

Every form submission must POST JSON to:

```
https://ayskxkjorhoaknkqtyvm.supabase.co/functions/v1/webhook-receive?key=e3302b5d21fc46979aacd6da8576642f
```

Required payload shape:

```json
{
  "list": "Oregon Probate Experts",
  "source": "exitprobateteam.com — intake form",
  "submittedAt": "<ISO timestamp>",
  "page": "/contact",
  "name": "...",
  "role": "Personal representative / Trustee / Heir / Attorney / Other",
  "email": "...",
  "phone": "...",
  "county": "...",
  "city": "...",
  "message": "..."
}
```

The `list` field **must** be exactly `"Oregon Probate Experts"` — that's what routes submissions into the right CRM list.

---

## What design direction the client actually wants

After two failed attempts, the client described it as: **elegant, soft, gentle, trustworthy, NOT flashy, the kind of site grieving people will trust.**

Reference points that fit:
- High-end elder law and estate-planning firm websites
- Hospice and grief-support sites (calm, generous whitespace, restrained type)
- Sotheby's-class luxury real estate (refined, photographic, slow)
- Lantern.co (death planning)

What to AVOID (already tried, all rejected):
- Aurora gradients, animated SVG threads, magic bento grids
- Velocity-scrolled marquees, shiny shimmering text
- Photo mosaics with 8-9 images
- Big italic colorful accent words ("Probate" in terracotta italic)
- ALL-CAPS mono labels ("CPRES · 36 COUNTIES · 24-HOUR CASH OFFERS")
- "Special Ops of Real Estate" military-tactical framing in public copy
- Hero text bigger than ~80px
- Aggressive black pill CTAs
- Stat counters that animate "9 days fastest close"

What probably works:
- Modest serif headlines (Fraunces, EB Garamond, or similar at 40–64px)
- Single calm photograph per section, no mosaics
- Sage / forest green / warm cream / clay accents — brand green reduced to a small mark
- Italic serif eyebrows ("About the team") not all-caps mono
- Reading columns ~60–64ch
- Slow opacity fades only — no scale, no transform shimmer
- Generous whitespace
- Restrained, factual copy in a calm voice

---

## Site outline — 82 pages

```
/                                          (Home)
/pages/
  about.html
  services.html                            (overview)
  process.html
  team.html
  contact.html
  faq.html
  testimonials.html
  services/
    cash-offer.html                        Cash Buyer Network
    market-listing.html                    Strategic Market Listing
    estate-cleanout.html                   Estate Cleanout
    vacant-property-watch.html             Vacant Property Watch
    heir-locator.html                      Heir Locator & Vendor Network
    advisory.html                          Executor Advisory
  team/
    dan-gandee.html
    ed-zulyevic.html
  counties/
    index.html
    baker.html       benton.html      clackamas.html   clatsop.html
    columbia.html    coos.html        crook.html       curry.html
    deschutes.html   douglas.html     gilliam.html     grant.html
    harney.html      hood-river.html  jackson.html     jefferson.html
    josephine.html   klamath.html     lake.html        lane.html
    lincoln.html     linn.html        malheur.html     marion.html
    morrow.html      multnomah.html   polk.html        sherman.html
    tillamook.html   umatilla.html    union.html       wallowa.html
    wasco.html       washington.html  wheeler.html     yamhill.html
  cities/
    portland.html     salem.html       eugene.html      bend.html
    gresham.html      hillsboro.html   beaverton.html   medford.html
    springfield.html  corvallis.html   albany.html      tigard.html
  resources/
    index.html
    probate-timeline.html
    selling-probate-property.html
    working-with-attorneys.html
    heirs-guide.html
    avoiding-probate.html
    executor-checklist.html
    glossary.html
  case-studies/
    index.html
    eugene-bungalow.html                   Lane County · 9-day cash close
    salem-trust-cleanout.html              Marion County · cleanout + MLS
    coast-cabin-heirs.html                 Tillamook · sibling buy-out
    portland-vacant-conservatorship.html   Multnomah · court-confirmed sale
  legal/
    privacy.html
    terms.html
    accessibility.html
    disclaimer.html

sitemap.xml      (auto-generated, 82 entries)
robots.txt
humans.txt
```

---

## SEO / AEO requirements (must keep)

- JSON-LD `LocalBusiness` + `RealEstateAgent` schema on every page
- Per-page schema: `BreadcrumbList`, `Service`, `Person`, `Article`, `FAQPage`, `HowTo` where relevant
- Each county page has its own unique narrative + court info + FAQPage schema (don't templated-copy them)
- Canonical URLs, OG tags, Twitter cards, geo meta tags
- `sitemap.xml` with priority weights
- Answer-first copy in resource guides (designed for AI Overview / answer engines)
- 24 different Schema.org types currently in use

---

## Existing build system (use or replace)

```
_build/
  build.js                  — runs everything
  partials.js               — head, header, footer, scripts shell
  data.js                   — counties, cities, services, team, testimonials, FAQ
  pages-core.js             — home page template
  pages-marketing.js        — about, services, process, team, contact, faq, testimonials
  pages-services-detail.js  — 6 service detail pages
  pages-team-bios.js        — 2 team bio pages
  pages-locations.js        — county + city generator (uses data.js)
  pages-resources.js        — 7 long-form guides + index
  pages-case-studies.js     — 4 anonymized engagements + index
  pages-legal.js            — 4 legal pages
```

Run: `node _build/build.js` — emits all HTML.

If you scrap this, the data is portable: `_build/data.js` holds all the structured content (county data, service descriptions, team bios, testimonials, FAQ Q&A) — that's the part worth saving.

---

## Service descriptions (data — keep these)

1. **Cash Buyer Network** — 24-hour offers from pre-approved investors with proof of funds. Close in 7–14 days.
2. **Strategic Market Listing** — Surgical pricing, professional photography, attorney-coordinated contracts, out-of-state buyer outreach.
3. **Estate Cleanout** — Bonded haul partners, estate-sale operators, documented donations for the accounting.
4. **Vacant Property Watch** — Weekly site visits, winterization, insurance vacancy-endorsement coordination.
5. **Heir Locator & Vendor Network** — Forensic genealogists, vetted elder-law and estate-planning attorneys, title officers, contractors.
6. **Executor Advisory** — Hourly strategic counsel without a listing commitment.

---

## Inspiration references (from research)

- [Best estate-planning law firm websites — On The Map Marketing](https://www.onthemap.com/blog/best-estate-planning-law-firm-websites/)
- [Best estate-planning law firm websites — Connective Web Design](https://connectivewebdesign.com/blog/best-estate-planning-law-firm-websites)
- [Best elder-law firm websites 2024 — Civille](https://getciville.com/the-20-best-elder-law-firm-websites-of-2024/)
- [21st.dev component library](https://21st.dev/) — hero / testimonial / pricing patterns to translate
- [UI/UX Pro Max Skill (GitHub)](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — install via `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`

---

## Files the client said they'd save to Desktop (not in folder yet)

- Additional team headshots (Ed's especially — his slot currently shows an "EZ · Portrait coming soon" card)
- An alternate / cleaner version of the logo

Cowork sandbox has no Desktop access, so anything saved there is invisible to the agent. They go in `/Users/derikbannister9/Oregon Probate expert/assets/img/` to be used.

---

## Lessons (read before starting)

1. **Ask BEFORE building.** Two design directions got built and rejected before the right tone surfaced. Show one section in a single mockup first, get sign-off, then expand.
2. **Elegant ≠ minimalist-Apple, and "dope" ≠ aggressive-animated.** The client wants the visual register of a high-end estate-planning attorney's site: serif headlines at modest sizes, slow opacity fades, single calm photos, generous whitespace. Not Apple. Not Stripe. Not boutique-SaaS.
3. **The brand green (#6DB23E) is loud.** Keep it as a 5–8 pixel mark only — the rest of the accent system should be sage / forest / warm clay.
4. **Reading width matters.** Body text should cap at ~60–64ch. Hero columns can be wider.
5. **No mono labels.** All-caps tech-mono "EYEBROWS" read as startup-tech, not estate. Use italic serif lines instead ("About the team").
6. **Grieving audience = no hype copy.** "Start the file ↗" reads as a sales funnel. "Start a quiet conversation" or "When you're ready" reads as care.
7. **Webhook is essential.** Forms must POST to the Supabase URL with `list: "Oregon Probate Experts"`.

---

---

# PASTE-READY PROMPT FOR CLAUDE CODE

Copy everything between the lines below into Claude Code.

---

I'm taking over an existing site project at `/Users/derikbannister9/Oregon Probate expert/`. There are 82 static HTML pages already generated and a Node build system in `_build/`, but the visual design has been rejected twice and I want to start fresh on the look and feel while keeping the page structure, copy, SEO schema, and data intact.

## The brand
**Exit Probate Team** (operating as **The Operative Group** at **REAL Broker, LLC**) — Oregon's Certified Probate Real Estate Specialists. Co-founders Daniel Gandee (CPRES, RENE, CIPS, CEOA) and Edward Zulyevic. Based in Eugene, Oregon. Phone (541) 525-3268. Service area: all 36 Oregon counties. Established 2019.

**Critical positioning: We are licensed Oregon real estate agents — NOT attorneys. Every page must reinforce this. We do not give legal advice; we refer to probate attorneys for legal questions.**

## What's already in the folder
- `assets/img/logo.png` — co-branded Operative Group + REAL logo
- `assets/img/headshot-dan-gandee.webp` — Dan's headshot
- `_build/` — Node build script that generates all 82 pages
- `_build/data.js` — all structured data (counties, cities, services, team bios, FAQ, testimonials) — **keep this, it's the most valuable file**
- Existing copy in all the page modules — generally good, can be lightly polished

## The design direction I actually want
**Elegant. Soft. Gentle. Trustworthy. NOT flashy. The kind of site grieving families will trust.**

Think: high-end elder law firm websites, hospice resource sites, Sotheby's-tier luxury real estate, Lantern.co. Reference: search "best estate planning law firm websites 2024" for visual cues.

### Specific design requirements
- **Type:** Restrained serif headlines (Fraunces / EB Garamond / Cormorant) at 40–72px max. Newsreader or similar for body serif. Sans only for buttons. No mono labels anywhere.
- **Color:** Bone / parchment background (#F4F0E6), warm charcoal text (#2A2620), sage-deep accent (#5A6E51), forest accent (#3E5238), muted clay highlight (#A47158). The brand green (#6DB23E) shows up ONLY as a tiny 5–8px dot or arrow mark — never as a color treatment on text or buttons.
- **Layout:** Generous whitespace. Reading columns ~60–64ch. Single calm photograph per section. Wide vertical rhythm (120–160px section padding).
- **Photography:** Warm, humane Oregon imagery. Elderly couples, multi-generation families, warm interiors, soft window light, Oregon landscape. Single photo per section — no mosaics, no clusters, no 9-photo grids. Use Unsplash with `auto=format&fit=crop&w=1800&q=72`.
- **Motion:** Slow opacity fades only. No transforms, no shiny shimmer, no aurora gradients, no animated threads, no velocity-scroll marquees, no magic bento grids, no tilted cards, no magnetic cursors, no click sparks. Just gentle fade-up on scroll using GSAP ScrollTrigger.
- **CTAs:** "Start a quiet conversation" / "When you're ready" / "Read more →" — never "Start the file ↗" or "Get a cash offer now".
- **Eyebrows:** Italic serif lines like "About the team", "Where we work", "From the team" — never ALL-CAPS MONO.

### What to AVOID (already tried, rejected)
- Aurora gradients, animated SVG threads, magic bento grids, velocity-scrolled marquees, shiny shimmering text, photo mosaics, big italic colorful accent words, ALL-CAPS mono eyebrows, "Special Ops" military framing in public copy, hero text bigger than ~80px, aggressive black pill CTAs, animated stat counters, hustle-coded "Close in 9 days!" framing.

## The 82-page sitemap (must preserve)

```
Home (/)
Core (7): about, services, process, team, contact, faq, testimonials
Service details (6): cash-offer, market-listing, estate-cleanout, vacant-property-watch, heir-locator, advisory
Team bios (2): dan-gandee, ed-zulyevic
County pages (36 + index): all Oregon counties
City pages (12): portland, salem, eugene, bend, gresham, hillsboro, beaverton, medford, springfield, corvallis, albany, tigard
Resources (7 + index): probate-timeline, selling-probate-property, working-with-attorneys, heirs-guide, avoiding-probate, executor-checklist, glossary
Case studies (4 + index): eugene-bungalow, salem-trust-cleanout, coast-cabin-heirs, portland-vacant-conservatorship
Legal (4): privacy, terms, accessibility, disclaimer
```

## SEO / AEO requirements
- JSON-LD `LocalBusiness` + `RealEstateAgent` schema on every page
- Page-specific schemas: `BreadcrumbList`, `Service`, `Person`, `Article`, `FAQPage`, `HowTo`
- Each county page must have unique narrative + court info + FAQPage schema (don't templated-copy)
- Canonical URLs, Open Graph, Twitter cards, geo meta on every page
- Auto-generated `sitemap.xml` with priority weights
- Answer-first copy in resource guides for AI Overview / answer engines
- Semantic HTML, alt text on every image, proper heading hierarchy

## Form webhook (must wire)
Contact form submissions must POST JSON to:
```
https://ayskxkjorhoaknkqtyvm.supabase.co/functions/v1/webhook-receive?key=e3302b5d21fc46979aacd6da8576642f
```
With payload including: `list: "Oregon Probate Experts"` (exact string), name, role, email, phone, county, city, message, page URL, ISO timestamp.

## Tech stack
- Static HTML/CSS/JS — must deploy cleanly to GitHub Pages with no build step at deploy time
- GSAP + ScrollTrigger (via CDN) for the gentle fade animations
- No React, no framework, no bundler required at deploy time
- Node.js OK at build time

## What I want from you
1. First, **show me a single section mockup** (the home hero) before building anything else. Modest serif headline, single warm photograph, restrained pill or eyebrow, two CTAs. Get my sign-off on tone.
2. After hero sign-off, propose the home page section list (probably: hero · short intro · services as quiet list · team teaser · testimonials · process · resources · FAQ · CTA). Get sign-off.
3. Then build the home page. Then I'll review and we'll iterate before touching the other 81 pages.

**Do not rebuild anything until I approve the hero mockup.** The previous agent built 82 pages twice in the wrong direction. Let's not repeat that.

---

(End of paste-ready prompt.)
