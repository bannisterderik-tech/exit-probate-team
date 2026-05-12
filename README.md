# Exit Probate Team — exitprobateteam.com

The full marketing site for **The Operative Group** at REAL Broker — Oregon's Certified Probate Real Estate Specialists.

**82 pages.** Static HTML, no framework, GSAP-driven motion. Built to ship straight to GitHub Pages.

---

## What's in here

```
/
├── index.html                          ← Home
├── assets/
│   ├── css/styles.css                  ← Full design system
│   ├── js/app.js                       ← Header, FAQ, mobile menu, progress bar
│   ├── js/animations.js                ← GSAP scroll cinema layer
│   └── img/                            ← Logo, headshots, OG image (drop yours in)
├── pages/
│   ├── about.html  services.html  process.html  team.html
│   ├── contact.html  faq.html  testimonials.html
│   ├── services/         ← 6 service detail pages
│   ├── team/             ← 2 team bios
│   ├── counties/         ← All 36 Oregon counties + index
│   ├── cities/           ← 12 top-market cities
│   ├── resources/        ← 7 long-form guides + index
│   ├── case-studies/     ← 4 anonymized engagements + index
│   └── legal/            ← Privacy, Terms, Accessibility, Disclaimer
├── sitemap.xml           ← Auto-generated from build
├── robots.txt
├── humans.txt
├── _build/               ← The generator (edit content here)
└── README.md             ← You are here
```

## Editing content

All content lives inside `_build/`. To make a change, edit the relevant page module, then re-run:

```bash
node _build/build.js
```

That regenerates every static HTML file in place.

| If you want to edit… | Edit this file |
|---|---|
| Brand name, phone, email, social, address | `_build/partials.js` (`SITE` object) |
| Header nav links / footer columns | `_build/partials.js` (`header()` and `footer()`) |
| County list / city list / team bios / services / testimonials / FAQ | `_build/data.js` |
| Home page sections | `_build/pages-core.js` |
| About / Services overview / Process / Team / Contact / FAQ / Testimonials | `_build/pages-marketing.js` |
| Individual service detail page templates | `_build/pages-services-detail.js` |
| Individual team-bio page templates | `_build/pages-team-bios.js` |
| County / city page templates and regional copy | `_build/pages-locations.js` |
| Resource library articles | `_build/pages-resources.js` |
| Case studies | `_build/pages-case-studies.js` |
| Legal pages | `_build/pages-legal.js` |

## Adding a new team headshot

1. Save the image as `assets/img/team-<slug>.webp` (or .jpg/.png).
2. Update the `photo` field on that team member in `_build/data.js`.
3. Run `node _build/build.js`.

The current site references `assets/img/headshot-ed-zulyevic.webp` (already in place) and `team-dan.webp` (drop in when ready — fallback is a dark card while it's missing).

## Adding a new county or city

Open `_build/data.js`. Add an entry to `OREGON_COUNTIES` or `OREGON_CITIES`. Rebuild. A new SEO-optimized page is generated automatically.

## Local preview

Open `index.html` directly in a browser, or run a one-line static server:

```bash
# Python
python3 -m http.server 8080
# Node
npx serve .
```

Then visit `http://localhost:8080/`.

---

## Deploying to GitHub Pages

1. Create a new public repo on GitHub (suggested name: `exitprobateteam-site` or just use the domain).
2. Initialize git in this folder and push:

   ```bash
   cd "/Users/derikbannister9/Oregon Probate expert"
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/exitprobateteam-site.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**. Source: **Deploy from a branch**. Branch: `main` / `/` (root). Save.
4. Wait 30 seconds. The site is live at `https://YOUR_USERNAME.github.io/exitprobateteam-site/`.

### Custom domain (exitprobateteam.com)

1. In GitHub Pages settings, set the custom domain to `exitprobateteam.com`.
2. At your DNS provider, add:
   - `A` records pointing `exitprobateteam.com` to GitHub Pages' IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record on `www` pointing to `YOUR_USERNAME.github.io`
3. In GitHub Pages settings, enable **Enforce HTTPS** after the certificate provisions (usually a few minutes).
4. A `CNAME` file gets written by GitHub automatically — don't delete it.

---

## SEO / AEO highlights baked in

- **Schema.org JSON-LD** on every page: `LocalBusiness` + `RealEstateAgent` site-wide, plus page-specific `BreadcrumbList`, `Service`, `Person`, `Article`, `FAQPage`, and `HowTo` schemas.
- **Per-page canonical URLs**, Open Graph, Twitter Cards, geo metadata.
- **36 county pages** with unique regional narrative, court info, FAQ-schema-marked Q&A — strong long-tail SEO for "[county] probate real estate Oregon" queries.
- **12 city pages** with localized service descriptions and cross-links to their county.
- **Answer-first content** in all resource guides — designed for AI Overviews / Answer Engine Optimization.
- **`sitemap.xml`** rebuilds automatically with appropriate priority weights.
- **`robots.txt`** points search engines at the sitemap.
- All semantic HTML, alt text on every image, proper heading hierarchy, internal link graph.

## Performance / motion

- GSAP + ScrollTrigger via CDN (no build step, no bundler).
- Reduced-motion mode is respected automatically — animations disable when `prefers-reduced-motion: reduce`.
- Custom warm-paper scrollbar.
- Fonts: Fraunces (variable), Newsreader (variable), Instrument Sans (variable), JetBrains Mono — all served from Google Fonts.

## Stack summary

- HTML / CSS / vanilla JavaScript — no framework, no bundler, no Node runtime required for deployment.
- GSAP 3.12 + ScrollTrigger for motion.
- Node.js only required at build time (`node _build/build.js`).

## Authors

The Operative Group — Daniel Gandee and Edward Zulyevic. Built in Eugene, Oregon.
