/* =====================================================================
   Individual service detail pages — one per service in data.js
   ===================================================================== */
"use strict";

const { SERVICES } = require("./data");
const { IMG, serviceIcon } = require("./pages-core");
const { ctaBlock } = require("./pages-marketing");

const HERO_IMG_BY_SLUG = {
  "cash-offer": IMG.hands,
  "market-listing": IMG.craftsman,
  "estate-cleanout": IMG.kitchen,
  "vacant-property-watch": IMG.porch,
  "heir-locator": IMG.papers,
  "advisory": IMG.desk,
};

function detail(svc, index) {
  const others = SERVICES.filter((s) => s.slug !== svc.slug);

  return {
    outPath: `pages/services/${svc.slug}.html`,
    meta: {
      title: `${svc.title} — Oregon Probate Real Estate`,
      description: `${svc.short} — ${svc.headline} A specialty service of Oregon's Certified Probate Real Estate Specialists.`,
      ogImage: HERO_IMG_BY_SLUG[svc.slug] || IMG.craftsman,
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Services", href: "https://exitprobateteam.com/pages/services.html" },
        { label: svc.title, href: `https://exitprobateteam.com/pages/services/${svc.slug}.html` },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.title,
        description: svc.body,
        provider: { "@type": "LocalBusiness", name: "The Operative Group" },
        areaServed: { "@type": "State", name: "Oregon" },
        serviceType: svc.title,
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="../services.html">Services</a><span class="sep">/</span><span>${svc.title}</span></div>
      <div class="split" style="margin-top: 32px; align-items: end;">
        <div>
          <div class="pill" data-hero-fade><span class="dot"></span>0${index + 1} / 06 · ${svc.title}</div>
          <h1 style="margin-top: 28px; max-width: 14ch;">
            <span class="line-mask"><span>${svc.headline.split(".")[0]}.</span></span>
          </h1>
          <p class="lede" data-hero-fade style="margin-top: 28px;">${svc.short}</p>
          <div data-hero-fade style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 36px;">
            <a href="../contact.html" class="btn btn-primary" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a>
            <a href="../process.html" class="btn btn-ghost">See the process</a>
          </div>
        </div>
        <div class="frame frame-tall reveal-img" style="border-radius: var(--radius-xl);">
          <img src="${HERO_IMG_BY_SLUG[svc.slug] || IMG.craftsman}" alt="${svc.title} — illustrative photography" data-img-scroll/>
          <div class="caption">${svc.title}</div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split-5-7">
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span>The brief</div>
        </div>
        <div class="prose reveal" style="font-size: 21px;">
          <p>${svc.body}</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow reveal"><span class="dot"></span>Included</div>
          <h2 class="reveal" style="margin-top: 16px; max-width: 16ch;">What you get when you engage this service.</h2>
        </div>
        <div data-stagger>
          ${svc.benefits.map((b, i) => `
          <div data-stagger-item style="display: grid; grid-template-columns: 56px 1fr; gap: 24px; padding: 24px 0; border-top: 1px solid var(--rule);">
            <div style="font-family: var(--mono); font-size: 13px; color: var(--accent-deep); letter-spacing: 0.12em; padding-top: 4px;">0${i + 1}</div>
            <div style="font-family: var(--serif); font-size: 19px; color: var(--ink); line-height: 1.5;">${b}</div>
          </div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap-narrow">
      <div class="card" style="border-left: 4px solid var(--accent);">
        <div class="eyebrow"><span class="dot"></span>Best when</div>
        <p class="prose mt-4" style="font-size: 20px; line-height: 1.5;">${svc.fit}</p>
      </div>
    </div>
  </section>

  <section class="noir-section grain">
    <div class="wrap">
      <div class="eyebrow reveal" style="color: var(--accent);"><span style="background: var(--accent); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>Other services</div>
      <h2 class="reveal" style="color: var(--paper); margin-top: 16px;">Pair this with anything on the bench.</h2>
      <div class="service-grid mt-16" data-stagger>
        ${others.slice(0, 3).map((s, i) => `
        <a href="${s.slug}.html" class="service-tile" data-stagger-item style="background: var(--noir-soft); border-color: var(--noir-line); color: var(--paper);">
          <span class="num" style="color: var(--accent);">0${SERVICES.indexOf(s) + 1}</span>
          <span class="icon" style="color: var(--accent);">${serviceIcon(s.icon)}</span>
          <h3 style="color: var(--paper);">${s.title}</h3>
          <p style="color: rgba(253,250,243,0.7);">${s.short}</p>
          <span class="more" style="color: var(--paper);">Read more <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function all() {
  return SERVICES.map((s, i) => detail(s, i));
}

module.exports = { all };
