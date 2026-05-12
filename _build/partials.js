/* =====================================================================
   Shared HTML partials + base shell
   ===================================================================== */
"use strict";

const SITE = {
  name: "Exit Probate Team",
  full: "The Operative Group — Exit Probate Team",
  tagline: "Oregon Probate Real Estate Specialists",
  url: "https://exitprobateteam.com",
  phone: "(541) 525-3268",
  phoneHref: "tel:+15415253268",
  email: "hello@exitprobateteam.com",
  emailHref: "mailto:hello@exitprobateteam.com",
  address: "Eugene, Oregon",
  serviceAreaLat: 44.0521,
  serviceAreaLng: -123.0868,
  founded: 2019,
  brokerage: "REAL Broker, LLC",
  founders: ["Daniel Gandee", "Edward Zulyevic"],
  /* IMPORTANT — we are licensed Oregon real estate agents, not attorneys.
     Every page reinforces this so prospects do not confuse our service. */
  positioningNote: "We are licensed Oregon real estate agents specializing in probate, trust, and conservatorship property. We are not attorneys and do not give legal advice.",
  formWebhook: "https://ayskxkjorhoaknkqtyvm.supabase.co/functions/v1/webhook-receive?key=e3302b5d21fc46979aacd6da8576642f",
  formList: "Oregon Probate Experts",
  social: {
    linkedin: "https://www.linkedin.com/company/the-operative-group",
    instagram: "https://www.instagram.com/theoperativegroup",
    facebook: "https://www.facebook.com/theoperativegroup",
    youtube: "https://www.youtube.com/@theoperativegroup",
  },
};

/* Compute a relative-to-root prefix so a page at /pages/legal/privacy.html
   loads assets/css/styles.css correctly. */
function depthPrefix(outPath) {
  // outPath like "pages/legal/privacy.html"
  const parts = outPath.split("/").filter(Boolean);
  const depth = parts.length - 1; // exclude filename
  return depth === 0 ? "" : "../".repeat(depth);
}

function safe(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

/* ---------- <head> ---------- */
function head(meta, outPath) {
  const r = depthPrefix(outPath);
  const title = meta.title
    ? `${meta.title} — ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;
  const desc = meta.description || "Oregon probate real estate specialists. Certified Probate Real Estate Specialists serving every Oregon county. Compassionate, low-pressure, decisive.";
  const canonical = `${SITE.url}/${outPath.replace(/^index\.html$/, "").replace(/\/index\.html$/, "/")}`.replace(/\/+/g, "/").replace(":/", "://");
  const ogImg = meta.ogImage || `${SITE.url}/assets/img/og-default.jpg`;

  const breadcrumbs = (meta.breadcrumbs || []).map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: b.label,
    item: b.href,
  }));

  const jsonLd = [];
  // LocalBusiness on every page
  jsonLd.push({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${SITE.url}#business`,
    name: SITE.full,
    alternateName: ["Exit Probate Team", "The Operative Group"],
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/assets/img/logo.png`,
    logo: `${SITE.url}/assets/img/logo.png`,
    description: "Certified Probate Real Estate Specialists serving every Oregon county. We handle probate, trust, and conservatorship property liquidation with compassion and precision.",
    foundingDate: String(SITE.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Eugene",
      addressRegion: "OR",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.serviceAreaLat, longitude: SITE.serviceAreaLng },
    areaServed: { "@type": "State", name: "Oregon" },
    founder: SITE.founders.map((n) => ({ "@type": "Person", name: n })),
    parentOrganization: { "@type": "Organization", name: SITE.brokerage },
    sameAs: Object.values(SITE.social),
    knowsAbout: [
      "Probate real estate",
      "Trust property liquidation",
      "Conservatorship sales",
      "Estate cleanout",
      "Oregon probate process",
      "Certified Probate Real Estate Specialist",
    ],
  });

  if (breadcrumbs.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    });
  }

  if (meta.jsonLd) jsonLd.push(...(Array.isArray(meta.jsonLd) ? meta.jsonLd : [meta.jsonLd]));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safe(title)}</title>
  <meta name="description" content="${safe(desc)}" />
  <meta name="theme-color" content="#F4EFE6" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" type="image/png" href="${r}assets/img/favicon.png" />
  <link rel="apple-touch-icon" href="${r}assets/img/logo.png" />

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="${meta.ogType || "website"}" />
  <meta property="og:title" content="${safe(title)}" />
  <meta property="og:description" content="${safe(desc)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImg}" />
  <meta property="og:site_name" content="${SITE.name}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${safe(title)}" />
  <meta name="twitter:description" content="${safe(desc)}" />
  <meta name="twitter:image" content="${ogImg}" />

  <!-- AEO / robots -->
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="googlebot" content="index,follow" />
  <meta name="geo.region" content="US-OR" />
  <meta name="geo.placename" content="${safe(meta.geoPlace || "Oregon")}" />

  <!-- Preconnect / fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Stylesheets -->
  <link rel="stylesheet" href="${r}assets/css/styles.css?v=${Date.now()}" />
  <link rel="stylesheet" href="${r}assets/css/reactbits.css" />

  ${jsonLd
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join("\n  ")}
</head>`;
}

/* ---------- Header ---------- */
function header(currentPath, outPath) {
  const r = depthPrefix(outPath);
  const links = [
    { href: "about.html", label: "About" },
    { href: "services.html", label: "Services" },
    { href: "process.html", label: "Process" },
    { href: "team.html", label: "Team" },
    { href: "resources/index.html", label: "Resources" },
    { href: "counties/index.html", label: "Coverage" },
    { href: "case-studies/index.html", label: "Cases" },
    { href: "contact.html", label: "Contact" },
  ];
  const homeHref = r + "index.html";
  return `
  <div class="page-progress" aria-hidden="true"></div>
  <header class="site-header">
    <div class="wrap nav">
      <a href="${homeHref}" class="brand" aria-label="Exit Probate Team home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 L19 5 M9 5 L19 5 L19 15" stroke="#6DB23E" stroke-width="2.6" fill="none" stroke-linecap="square"/></svg>
        </span>
        <span class="brand-name">
          <span class="name">Exit Probate Team</span>
          <span class="sub">The Operative Group · Oregon</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${links
          .map((l) => {
            const href = r + "pages/" + l.href;
            const active = currentPath.endsWith(l.href) ? " active" : "";
            return `<a href="${href}" class="${active.trim()}">${l.label}</a>`;
          })
          .join("\n        ")}
      </nav>
      <a href="${r}pages/contact.html" class="nav-cta">When you're ready <span class="arrow">→</span></a>
      <button class="nav-toggle" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M0 1h18M0 7h18M0 13h12" stroke="currentColor" stroke-width="1.8"/></svg>
      </button>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true">
    <button class="close" aria-label="Close menu">
      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" stroke-width="2"/></svg>
    </button>
    <nav aria-label="Mobile">
      ${links
        .map((l, i) => `<a href="${r}pages/${l.href}"><span class="num">0${i + 1}</span>${l.label}</a>`)
        .join("\n      ")}
    </nav>
    <div class="mt-12">
      <a href="${r}pages/contact.html" class="btn btn-accent">Start a quiet conversation <span class="arrow">→</span></a>
    </div>
  </div>`;
}

/* ---------- Footer ---------- */
function footer(outPath) {
  const r = depthPrefix(outPath);
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="grid">
        <div class="brand-block">
          <div class="name">Exit Probate <em>Team</em></div>
          <div class="sub">The Operative Group · Oregon</div>
          <p>Oregon's Certified Probate Real Estate Specialists. Compassionate guidance, decisive execution, and a vetted network of attorneys, contractors and cash buyers — when one wrong move can cost the estate months.</p>
          <div class="mt-8" style="display:flex; gap:10px;">
            <a class="pill" href="${SITE.phoneHref}"><span class="dot"></span>${SITE.phone}</a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="${r}pages/services/cash-offer.html">Cash Buyer Network</a></li>
            <li><a href="${r}pages/services/market-listing.html">Strategic Market Listing</a></li>
            <li><a href="${r}pages/services/estate-cleanout.html">Estate Cleanout</a></li>
            <li><a href="${r}pages/services/vacant-property-watch.html">Vacant Property Watch</a></li>
            <li><a href="${r}pages/services/heir-locator.html">Heir Locator</a></li>
            <li><a href="${r}pages/services/advisory.html">Executor Advisory</a></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="${r}pages/about.html">About the Team</a></li>
            <li><a href="${r}pages/process.html">Our Process</a></li>
            <li><a href="${r}pages/team.html">Meet the Operatives</a></li>
            <li><a href="${r}pages/case-studies/index.html">Case Studies</a></li>
            <li><a href="${r}pages/testimonials.html">Testimonials</a></li>
            <li><a href="${r}pages/faq.html">FAQ</a></li>
            <li><a href="${r}pages/resources/index.html">Resource Library</a></li>
            <li><a href="${r}pages/counties/index.html">Oregon Coverage</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="${SITE.phoneHref}">${SITE.phone}</a></li>
            <li><a href="${SITE.emailHref}">${SITE.email}</a></li>
            <li><a href="${r}pages/contact.html">Start the conversation</a></li>
          </ul>
          <h4 style="margin-top:32px;">Follow</h4>
          <ul>
            <li><a href="${SITE.social.linkedin}" rel="noopener">LinkedIn</a></li>
            <li><a href="${SITE.social.instagram}" rel="noopener">Instagram</a></li>
            <li><a href="${SITE.social.facebook}" rel="noopener">Facebook</a></li>
            <li><a href="${SITE.social.youtube}" rel="noopener">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="legal">
        <div>© <span data-year>2026</span> The Operative Group · ${SITE.brokerage} · Licensed in Oregon</div>
        <div style="display:flex; gap:18px; flex-wrap:wrap;">
          <a href="${r}pages/legal/privacy.html">Privacy</a>
          <a href="${r}pages/legal/terms.html">Terms</a>
          <a href="${r}pages/legal/accessibility.html">Accessibility</a>
          <a href="${r}pages/legal/disclaimer.html">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---------- Scripts block ---------- */
function scripts(outPath) {
  const r = depthPrefix(outPath);
  return `
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
  <script src="${r}assets/js/app.js?v=${Date.now()}" defer></script>
  <script src="${r}assets/js/animations.js?v=${Date.now()}" defer></script>
  <script src="${r}assets/js/reactbits.js" defer></script>`;
}

/* ---------- Page shell ---------- */
function page({ outPath, meta, body, currentPath }) {
  return `${head(meta, outPath)}
<body>
${header(currentPath || outPath, outPath)}

<main>
${body}
</main>

${footer(outPath)}
${scripts(outPath)}
</body>
</html>`;
}

module.exports = { SITE, page, head, header, footer, scripts, depthPrefix, safe };
