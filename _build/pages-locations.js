/* =====================================================================
   County and City SEO pages — generated from data.js
   ===================================================================== */
"use strict";

const { OREGON_COUNTIES, OREGON_CITIES, FAQ } = require("./data");
const { IMG } = require("./pages-core");
const { ctaBlock } = require("./pages-marketing");

/* ---------- Region-specific narrative ---------- */
const REGION_TONE = {
  "Portland Metro":      { hero: "Oregon's largest probate dockets sit here.", body: "Multnomah, Washington, Clackamas, and the corridor cities together carry roughly half of Oregon's probate filings every year. Property values are high, family geography is wide, and timelines are tight. Most files cross county lines before they close.", img: IMG.craftsman, note: "I-5 corridor · Urban estate density · Multi-county filings" },
  "Willamette Valley":   { hero: "The valley where most Oregon estates begin and end.", body: "Salem, Eugene, Corvallis, Albany, McMinnville — the Willamette Valley is the demographic backbone of Oregon probate. Mid-century homes on quarter-acre lots, family farms on the outskirts, university adjacencies, and the steady rhythm of estates that benefit from a calibrated marketing strategy rather than a fire sale.", img: IMG.rural, note: "Mid-century housing stock · Farm estates · University adjacencies" },
  "Southern Oregon":     { hero: "Rogue Valley estates with out-of-state heirs.", body: "Medford, Ashland, Grants Pass, Roseburg, Klamath Falls. Southern Oregon estates routinely have heirs spread across California, Nevada, and Arizona — sometimes all on the same file. Coordination across state lines is the norm, not the exception, and our remote-executor playbook gets full use here.", img: IMG.forest, note: "Rogue Valley · California heir adjacencies · Out-of-state coordination" },
  "Central Oregon":      { hero: "Bend, Sisters, Redmond — Oregon's recreation-corridor estates.", body: "Central Oregon's property values doubled in the last decade and the probate market has not caught up. Bend, Sisters, Madras, Prineville — second homes, retirement homes, and recreation properties dominate the file mix. Cash-buyer demand is high and timeline pressure usually comes from carry costs rather than family urgency.", img: IMG.landscape, note: "Recreation properties · Second-home estates · High cash demand" },
  "Eastern Oregon":      { hero: "Wide ground, small dockets, real consequences.", body: "Baker, Grant, Harney, Wallowa, Malheur — the population is small but the estates are anything but. Working ranches, multi-generational farmland, mineral interests, water rights. Probate in Eastern Oregon counties requires a team that understands rural appraisal, ag exemptions, and that some properties take a buyer specifically targeted out-of-region.", img: IMG.river, note: "Ranch and ag estates · Rural appraisal · Out-of-region buyer targeting" },
  "Oregon Coast":        { hero: "Coastal estates with seasonal complexity.", body: "Astoria, Tillamook, Newport, Coos Bay, Gold Beach. Coast estates blend year-round homes, vacation rentals, and short-term-rental properties whose business permits and revenue history materially affect the valuation. Salt air maintenance, dune setbacks, and vacant-property exposure to winter storms make our vacant-property watch service standard rather than optional.", img: IMG.coast, note: "Vacation rental complexity · STR valuation · Winter vacant-property risk" },
  "Columbia Gorge":      { hero: "The Gorge — orchard estates, gorge view properties, multi-state heirs.", body: "Hood River, The Dalles, Cascade Locks, Moro, Condon. Gorge estates often involve agricultural land (orchards, vineyards) with heirs split between Oregon and Washington. Multi-state probate coordination, ag-specific buyer pipelines, and the realities of seasonal property access shape the engagement.", img: IMG.river, note: "Orchard estates · Multi-state heir coordination · Ag buyer pipelines" },
};

/* ---------- County page ---------- */
function countyPage(c) {
  const tone = REGION_TONE[c.region];
  const neighbors = OREGON_COUNTIES.filter((x) => x.region === c.region && x.slug !== c.slug).slice(0, 4);
  const cities = OREGON_CITIES.filter((x) => x.county === c.name).slice(0, 3);

  return {
    outPath: `pages/counties/${c.slug}.html`,
    meta: {
      title: `${c.name} County, Oregon Probate Real Estate`,
      description: `Certified Probate Real Estate Specialists for ${c.name} County, Oregon. Serving ${c.seat} and the ${c.region} region. Cash offers in 24 hours, strategic listings, full executor support.`,
      ogImage: tone.img,
      geoPlace: `${c.name} County, Oregon`,
      breadcrumbs: [
        { label: "Home", href: "https://oregonprobateagent.com/" },
        { label: "Coverage", href: "https://oregonprobateagent.com/pages/counties/index.html" },
        { label: `${c.name} County`, href: `https://oregonprobateagent.com/pages/counties/${c.slug}.html` },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Probate Real Estate Services in ${c.name} County, Oregon`,
          provider: { "@type": "LocalBusiness", name: "The Operative Group", telephone: "+15415253268" },
          areaServed: { "@type": "AdministrativeArea", name: `${c.name} County, Oregon` },
          serviceType: "Probate, trust, and conservatorship real estate liquidation",
          url: `https://oregonprobateagent.com/pages/counties/${c.slug}.html`,
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `Where is probate filed in ${c.name} County, Oregon?`,
              acceptedAnswer: { "@type": "Answer", text: `Probate in ${c.name} County is administered by the ${c.court}, located in ${c.seat}. Our team holds an active working relationship with attorneys and court personnel in this jurisdiction and routinely handles estate property files originating from ${c.seat} and the surrounding ${c.region} region.` },
            },
            {
              "@type": "Question",
              name: `Do you cover all of ${c.name} County?`,
              acceptedAnswer: { "@type": "Answer", text: `Yes. The Operative Group covers all of ${c.name} County, Oregon — including the county seat of ${c.seat} and the unincorporated rural areas. We are physically present in the ${c.region} region weekly and can typically be at any property within 24 hours of an executor's call.` },
            },
            {
              "@type": "Question",
              name: `How fast can you sell an Oregon probate property in ${c.name} County?`,
              acceptedAnswer: { "@type": "Answer", text: `Our cash-buyer network can produce verified offers within 24 hours and close within 7 to 14 days. Court confirmation requirements may add time depending on the form of administration. Strategic listing engagements typically run 30 to 90 days from listing to close in ${c.name} County.` },
            },
          ],
        },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="index.html">Coverage</a><span class="sep">/</span><span>${c.name} County</span></div>
      <div class="split" style="margin-top: 32px; align-items: end;">
        <div>
          <div class="pill" data-hero-fade><span class="dot"></span>${c.region} · Oregon</div>
          <h1 style="margin-top: 28px;">
            <span class="line-mask"><span>Probate</span></span>
            <span class="line-mask"><span>real estate</span></span>
            <span class="line-mask"><span>in <em class="serif-italic-accent">${c.name}</em></span></span>
            <span class="line-mask"><span>County.</span></span>
          </h1>
          <p class="lede" data-hero-fade style="margin-top: 24px;">${tone.hero} Serving ${c.seat} and the rest of ${c.name} County with the bench, the certifications, and the calibration this region requires.</p>
          <div data-hero-fade style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 36px;">
            <a href="../contact.html" class="btn btn-primary" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a>
            <a href="tel:+15415253268" class="btn btn-ghost">Call (541) 525-3268</a>
          </div>
          <div data-hero-fade style="display: flex; gap: 24px; flex-wrap: wrap; margin-top: 40px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute);">
            <span><span style="color: var(--accent-deep);">●</span> ${tone.note}</span>
          </div>
        </div>
        <div class="frame frame-tall reveal-img" style="border-radius: var(--radius-xl);">
          <img src="${tone.img}" alt="A representative ${c.region} property — the kind of estate ${c.name} County executors call us about" data-img-scroll/>
          <div class="caption">${c.name} County · ${c.region}</div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split-5-7">
        <div>
          <div class="eyebrow reveal"><span class="dot"></span>The region</div>
          <h2 class="reveal" style="margin-top: 16px;">What ${c.name} County estates actually look like.</h2>
        </div>
        <div class="prose reveal" style="font-size: 19px;">
          <p>${tone.body}</p>
          <p>In ${c.name} County specifically, probate is administered by the <strong>${c.court}</strong> with the seat in ${c.seat}. The county's population sits at roughly ${c.pop.toLocaleString()} and the estate mix reflects that scale — from compact single-family files to multi-property estates that touch land, business assets, or out-of-region heirs.</p>
          <p>Whatever the estate looks like, the same protocol applies: triage the file in 30 minutes, agree the strategy in writing, run the vendor bench against the probate calendar, and close on a timeline the personal representative and the court both can defend.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="specs reveal">
        <div><dt>County seat</dt><dd>${c.seat}</dd></div>
        <div><dt>Region</dt><dd>${c.region}</dd></div>
        <div><dt>Probate court</dt><dd>${c.court}</dd></div>
        <div><dt>Approximate population</dt><dd>${c.pop.toLocaleString()}</dd></div>
        <div><dt>Response time to property</dt><dd>≤ 24 hours</dd></div>
        <div><dt>Cash offer turnaround</dt><dd>24 hours · verified funds</dd></div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="eyebrow reveal"><span class="dot"></span>How we work in ${c.name} County</div>
      <h2 class="reveal" style="margin-top: 16px; max-width: 18ch;">The same six-step protocol, calibrated for ${c.region}.</h2>
      <div class="process-list mt-12" style="border-top: 1px solid var(--rule);">
        ${[
          ["Intake call from the personal representative, attorney, or heir.", "30 minutes. The first call answers more questions than it raises."],
          ["Vendor bench activated in the right county.", `In ${c.name} County we typically engage a local vacant-property watch partner within 48 hours of file open.`],
          ["Cash vs. listing recommendation, in writing.", `Most ${c.region} estates respond well to one path or the other — and we'll tell you which, in the strategy memo.`],
          ["Property prep through bonded vendors.", "Estate sale, cleanout, donation, photo, prep — all documented for the accounting."],
          ["Offer rotation or listing engagement.", "24-hour cash offers or a calibrated MLS push. Weekly digest to executor and counsel."],
          ["Close, document, distribute.", `Coordinated with the ${c.court} where required. File closed clean.`],
        ].map(([title, body], i) => `
        <div class="process-step reveal">
          <span class="step-num">0${i + 1} / 06</span>
          <div>
            <div class="step-title" style="font-size: clamp(22px, 2.2vw, 32px);">${title}</div>
            <p class="step-body">${body}</p>
          </div>
          <span class="step-arrow">→</span>
        </div>`).join("")}
      </div>
    </div>
  </section>

  ${cities.length ? `
  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="eyebrow reveal"><span class="dot"></span>Cities we cover in ${c.name} County</div>
      <h2 class="reveal" style="margin-top: 16px;">Specific market pages for ${c.name}'s largest population centers.</h2>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 36px;" class="city-row">
        ${cities.map((city) => `
        <a href="../cities/${city.slug}.html" class="card reveal" style="display: block;">
          <div class="eyebrow" style="color: var(--accent-deep);">${city.region}</div>
          <h3 style="margin-top: 16px; font-size: clamp(24px, 2.4vw, 36px);">${city.name}, OR</h3>
          <p style="font-family: var(--serif); color: var(--ink-soft); font-size: 15px; margin-top: 10px;">Population ${city.pop.toLocaleString()} · ${city.hook}</p>
          <span style="margin-top: 18px; display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;">Learn more <span>→</span></span>
        </a>`).join("")}
      </div>
      <style>@media (max-width: 880px) { .city-row { grid-template-columns: 1fr !important; } }</style>
    </div>
  </section>` : ""}

  ${neighbors.length ? `
  <section>
    <div class="wrap">
      <div class="eyebrow reveal"><span class="dot"></span>Neighboring coverage</div>
      <h2 class="reveal" style="margin-top: 16px;">${c.region} counties we also serve.</h2>
      <div class="county-grid mt-16">
        ${neighbors.map((n) => `
        <a href="${n.slug}.html">${n.name} County <span class="arrow">→</span></a>`).join("")}
      </div>
    </div>
  </section>` : ""}

  ${ctaBlock("../contact.html")}
`,
  };
}

/* ---------- City page ---------- */
function cityPage(c) {
  const county = OREGON_COUNTIES.find((x) => x.name === c.county);
  const tone = REGION_TONE[c.region];

  return {
    outPath: `pages/cities/${c.slug}.html`,
    meta: {
      title: `${c.name}, Oregon Probate Real Estate`,
      description: `Certified Probate Real Estate Specialists serving ${c.name}, Oregon. We handle ${c.hook}. Cash offers in 24 hours, strategic listings, executor advisory across ${c.county} County.`,
      ogImage: tone.img,
      geoPlace: `${c.name}, Oregon`,
      breadcrumbs: [
        { label: "Home", href: "https://oregonprobateagent.com/" },
        { label: "Coverage", href: "https://oregonprobateagent.com/pages/counties/index.html" },
        { label: c.name, href: `https://oregonprobateagent.com/pages/cities/${c.slug}.html` },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Probate Real Estate Services in ${c.name}, Oregon`,
          provider: { "@type": "LocalBusiness", name: "The Operative Group", telephone: "+15415253268" },
          areaServed: { "@type": "City", name: `${c.name}, Oregon` },
          serviceType: "Probate, trust, and conservatorship real estate",
          url: `https://oregonprobateagent.com/pages/cities/${c.slug}.html`,
        },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="../counties/index.html">Coverage</a><span class="sep">/</span><span>${c.name}</span></div>
      <div class="split" style="margin-top: 32px; align-items: end;">
        <div>
          <div class="pill" data-hero-fade><span class="dot"></span>${c.name} · ${c.county} County</div>
          <h1 style="margin-top: 28px;">
            <span class="line-mask"><span>Probate</span></span>
            <span class="line-mask"><span>real estate</span></span>
            <span class="line-mask"><span>in <em class="serif-italic-accent">${c.name}</em>.</span></span>
          </h1>
          <p class="lede" data-hero-fade style="margin-top: 24px;">A working desk for ${c.hook}. Run by the same coordinated bench that covers the rest of Oregon.</p>
          <div data-hero-fade style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 36px;">
            <a href="../contact.html" class="btn btn-primary" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a>
            <a href="../counties/${(county||{}).slug || "lane"}.html" class="btn btn-ghost">See full ${c.county} County</a>
          </div>
        </div>
        <div class="frame frame-tall reveal-img" style="border-radius: var(--radius-xl);">
          <img src="${tone.img}" alt="${c.region} representative imagery for ${c.name}, Oregon" data-img-scroll/>
          <div class="caption">${c.name} · ${c.region}</div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split-5-7">
        <div>
          <div class="eyebrow reveal"><span class="dot"></span>The market</div>
          <h2 class="reveal" style="margin-top: 16px;">What ${c.name} probate looks like in practice.</h2>
        </div>
        <div class="prose reveal" style="font-size: 19px;">
          <p>${c.name}, Oregon sits in ${c.county} County and is administered through the ${(county || {}).court || c.county + ' County Circuit Court'} when probate is opened locally. The estate mix in ${c.name} reflects ${c.hook} — and the right strategy for a property here depends on whether the heirs want speed, price, or both.</p>
          <p>${tone.body}</p>
          <p>For a city of roughly ${c.pop.toLocaleString()} residents, ${c.name} produces a steady volume of probate property files every year, and the gap between the best and worst-handled cases is enormous. The same protocol that we run statewide applies here — sharpened to ${c.name}'s pricing dynamics and timeline pressure.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="specs reveal">
        <div><dt>County</dt><dd>${c.county}</dd></div>
        <div><dt>Region</dt><dd>${c.region}</dd></div>
        <div><dt>Probate court</dt><dd>${(county||{}).court || c.county + ' County Circuit Court'}</dd></div>
        <div><dt>Approximate population</dt><dd>${c.pop.toLocaleString()}</dd></div>
        <div><dt>Cash offer turnaround</dt><dd>24 hours · verified funds</dd></div>
        <div><dt>Response time to property</dt><dd>≤ 24 hours</dd></div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="eyebrow reveal"><span class="dot"></span>What we handle in ${c.name}</div>
      <div class="service-grid mt-12" data-stagger>
        ${[
          ["Cash Buyer Network", "services/cash-offer.html", "24-hour offers from pre-approved investors with proof of funds. Close in 7–14 days, cash, as-is."],
          ["Strategic Market Listing", "services/market-listing.html", "Surgical pricing, professional photography, attorney-coordinated contracts, out-of-state buyer outreach."],
          ["Estate Cleanout", "services/estate-cleanout.html", "Bonded haul partners, estate-sale operators, documented donations for the accounting."],
        ].map(([title, href, body]) => `
        <a href="../${href}" class="service-tile" data-stagger-item>
          <h3>${title}</h3>
          <p>${body}</p>
          <span class="more">Read more <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

/* ---------- Coverage index ---------- */
function coverageIndex() {
  const byRegion = {};
  OREGON_COUNTIES.forEach((c) => { (byRegion[c.region] ||= []).push(c); });
  const regions = Object.keys(byRegion);

  return {
    outPath: "pages/counties/index.html",
    meta: {
      title: "Oregon Coverage — All 36 Counties",
      description: "Statewide Oregon probate real estate coverage. Every county, every probate court. Find your county page and start the file in 30 minutes.",
      breadcrumbs: [
        { label: "Home", href: "https://oregonprobateagent.com/" },
        { label: "Coverage", href: "https://oregonprobateagent.com/pages/counties/index.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: OREGON_COUNTIES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${c.name} County, Oregon`,
          url: `https://oregonprobateagent.com/pages/counties/${c.slug}.html`,
        })),
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><span>Coverage</span></div>
      <h1 style="margin-top: 32px;">
        <span class="line-mask"><span>All <em class="serif-italic-accent">thirty-six</em></span></span>
        <span class="line-mask"><span>Oregon counties.</span></span>
      </h1>
      <p class="lede" data-hero-fade>From Portland to Pendleton, Astoria to Klamath Falls. Every county page below is a real, working desk.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      ${regions.map((region) => `
      <div class="reveal" style="margin-top: 56px;">
        <div class="eyebrow"><span class="dot"></span>${region}</div>
        <div class="county-grid mt-8">
          ${byRegion[region].map((c) => `
          <a href="${c.slug}.html"><span>${c.name} County · ${c.seat}</span><span class="arrow">→</span></a>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="eyebrow reveal"><span class="dot"></span>Top markets</div>
      <h2 class="reveal" style="margin-top: 16px;">Twelve Oregon cities we anchor in.</h2>
      <div class="service-grid mt-16" data-stagger>
        ${OREGON_CITIES.map((c) => `
        <a href="../cities/${c.slug}.html" class="service-tile" data-stagger-item>
          <span class="num">${c.region}</span>
          <h3>${c.name}</h3>
          <p>${c.county} County · ${c.hook}.</p>
          <span class="more">Read more <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function all() {
  const counties = OREGON_COUNTIES.map(countyPage);
  const cities = OREGON_CITIES.map(cityPage);
  return [coverageIndex(), ...counties, ...cities];
}

module.exports = { all, countyPage, cityPage, coverageIndex };
