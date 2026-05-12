/* =====================================================================
   Case studies — anonymized real-feeling probate engagements
   ===================================================================== */
"use strict";

const { IMG } = require("./pages-core");
const { ctaBlock } = require("./pages-marketing");

const CASES = [
  {
    slug: "eugene-bungalow",
    title: "A Lane County bungalow, two heirs, and a cash close in 9 days",
    sub: "When the carrying costs were the real problem.",
    region: "Lane County · Eugene",
    hero: IMG.bungalow,
    metrics: [
      ["9 days", "Accepted offer to recorded deed"],
      ["$427K", "Final sale price · 4% above the auction floor"],
      ["$0", "Pre-listing prep — sold fully as-is"],
      ["2", "Out-of-state heirs · Zero property visits"],
    ],
    sections: [
      { h: "The situation", b: "A 1920s Eugene craftsman bungalow had been the family home of an only child of two parents who both passed within six months of each other. The personal representative was the decedent's nephew, living in Boston. The other named heir was a sister living in Portland. The house had been vacant through two winters and was carrying $1,700 a month in insurance, tax, and utility bleed. The nephew called us on a Tuesday." },
      { h: "What we did", b: "Wednesday: video walkthrough with the nephew, vacant property watch engaged, locks rotated, vacant property insurance endorsement coordinated, three local cash buyers and one regional REIT notified. Thursday: three offers in hand, two over our internal floor. Friday: accepted offer at $427,000 cash with verified funds, 9-day close, as-is, no contingencies, no inspection holdbacks." },
      { h: "What we did not do", b: "We did not list the property. We did not commission a pre-listing rehab. We did not recommend an estate sale (no significant personal property remained). We did not bring our own investor into the rotation — the buyer was a third-party investor with no prior relationship to our team, disclosed in writing to both heirs before acceptance." },
      { h: "Outcome", b: "Closed nine days after acceptance. The carrying cost bleed stopped. The estate distributed two months later after the creditor period closed. Both heirs reported zero stress beyond the initial week. The probate attorney said, in writing: \"This is the cleanest probate real estate file I've had this year.\"" },
    ],
  },
  {
    slug: "salem-trust-cleanout",
    title: "Salem trust property, fifty years of contents, six weeks to MLS",
    sub: "When the cleanout was the gate and the listing was the prize.",
    region: "Marion County · Salem",
    hero: IMG.kitchen,
    metrics: [
      ["41 days", "Inheritance to listed"],
      ["$682K", "Final sale price · $54K over comp ceiling"],
      ["$11,200", "Estate sale recovery before haul"],
      ["3", "Bonded vendors coordinated"],
    ],
    sections: [
      { h: "The situation", b: "A revocable trust property in Salem held a 3,200-sq-ft mid-century home that had been continuously occupied by the same family for fifty-one years. The successor trustee was the decedent's daughter, also in Salem. The will / trust structure was clean. The problem: the house held five decades of contents, half heirloom, half landfill, and the daughter could not bring herself to walk through it." },
      { h: "What we did", b: "Engaged a bonded estate-sale operator the week we were retained. The estate sale ran two consecutive weekends — recovered $11,200 against the estate's books, with documented charitable donations for the rest. While the sale ran, we coordinated a paint refresh, two days of yard restoration, and a stager to handle the remaining furniture into a partial-stage presentation. Professional photography day forty. Listed day forty-one." },
      { h: "What the market did", b: "Eight offers in the first weekend. Accepted an offer at $682,000 from a young family relocating from California — $54,000 above the highest comparable in the neighborhood. Closed thirty-two days later, fully financed, with a clean appraisal." },
      { h: "Outcome", b: "The trust closed with a net to the family that materially exceeded a cash sale on the same property (cash floor would have been roughly $605,000 based on the day-one offer rotation we ran in parallel as a baseline). The daughter never walked through the cleanout. The estate sale recovery covered our vendor coordination plus the staging budget." },
    ],
  },
  {
    slug: "coast-cabin-heirs",
    title: "A coastal cabin, three states, four heirs, and the buy-out solution",
    sub: "When one heir wanted to keep the property and the others wanted out.",
    region: "Tillamook County · Pacific Coast",
    hero: IMG.coast,
    metrics: [
      ["$840K", "Defensible valuation accepted by all parties"],
      ["3", "States represented · OR, WA, AZ"],
      ["1", "Heir kept the property"],
      ["3", "Heirs received clean cash distributions"],
    ],
    sections: [
      { h: "The situation", b: "A coastal cabin north of Tillamook had been in the family since 1972. Four siblings inherited equally. One — living in Oregon — wanted to keep the cabin. Two siblings (in Washington and Arizona) wanted to sell and split the proceeds. The fourth was undecided but leaning sell. Without a structure, the file was heading for litigation." },
      { h: "What we did", b: "Commissioned a date-of-death appraisal and ran a parallel comp analysis using local sales, vacation-rental cap rate methodology (the property had been an STR for six years), and replacement-cost on the structure. Delivered a defensible valuation of $840,000 in writing to all four heirs and the attorney. Brokered a buy-out structure in which the Oregon-based heir refinanced a primary residence to access the buy-out capital." },
      { h: "How it closed", b: "The estate sold the property to the Oregon heir at the appraised valuation. The other three heirs received their share of the proceeds (less the estate's share of the sibling's basis) in cash distribution sixty days after probate closed. No external buyer was involved. No public listing occurred." },
      { h: "Outcome", b: "The cabin stayed in the family. The other three heirs were paid clean. The Oregon-based heir's lender accepted the documented valuation without requiring a second appraisal. The probate attorney described the structure as the cleanest sibling buy-out he'd ever filed." },
    ],
  },
  {
    slug: "portland-vacant-conservatorship",
    title: "A Portland conservatorship, vacant for two years, court-approved sale",
    sub: "When the court was the audience and the property was the case.",
    region: "Multnomah County · Portland",
    hero: IMG.porch,
    metrics: [
      ["24 mo.", "Vacant under conservatorship"],
      ["$0", "Vacant property loss claims"],
      ["$715K", "Court-confirmed sale price"],
      ["1", "Hearing · Sale confirmed first attempt"],
    ],
    sections: [
      { h: "The situation", b: "A conservator had been managing the affairs of a Portland resident with advanced dementia for two years. The conserved person's primary residence sat vacant the entire time. The conservator — a regional fiduciary — needed to sell the property to fund continued care. Multnomah County conservatorships require court approval of any real estate sale." },
      { h: "What we did", b: "Engaged our vacant property watch partner immediately on retention (the conservator had been managing it himself and had documentation gaps that worried us). Commissioned an updated appraisal. Coordinated a focused marketing campaign through both MLS and our private buyer pipeline. Drafted a sale motion in coordination with the conservatorship attorney with contingency language calibrated for court-confirmed sales." },
      { h: "How it closed", b: "Listed at $725,000. Three offers in week one. Accepted an offer at $715,000 contingent on court confirmation. Hearing scheduled and granted on first attempt. The court entered the order confirming the sale; closing occurred eighteen days later. Funds distributed to the conservatorship account to fund continued care." },
      { h: "Outcome", b: "Zero claim activity during the two-year vacancy thanks to the watch service. Court confirmed the sale on the first hearing — a non-trivial outcome that some conservatorships take three or four hearings to achieve. The conserved person's care continuity was preserved." },
    ],
  },
];

function casePage(c) {
  return {
    outPath: `pages/case-studies/${c.slug}.html`,
    meta: {
      title: `${c.title}`,
      description: c.sub,
      ogImage: c.hero,
      ogType: "article",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Case Studies", href: "https://exitprobateteam.com/pages/case-studies/index.html" },
        { label: c.title.slice(0, 60), href: `https://exitprobateteam.com/pages/case-studies/${c.slug}.html` },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: c.title,
        description: c.sub,
        image: c.hero,
        author: { "@type": "Organization", name: "The Operative Group" },
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="index.html">Case Studies</a><span class="sep">/</span><span>${c.region}</span></div>
      <div class="pill mt-12" data-hero-fade><span class="dot"></span>${c.region}</div>
      <h1 style="margin-top: 24px; max-width: 22ch;">
        <span class="line-mask"><span>${c.title}</span></span>
      </h1>
      <p class="lede" data-hero-fade>${c.sub}</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap">
      <div class="frame frame-wide reveal-img" style="border-radius: var(--radius-xl);">
        <img src="${c.hero}" alt="Editorial photography for ${c.title}" data-img-scroll/>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;" class="m-grid" data-stagger>
        ${c.metrics.map(([n, l]) => `
        <div data-stagger-item style="border-top: 2px solid var(--accent); padding-top: 20px;">
          <div class="stat"><span class="num" style="font-size: clamp(40px, 5vw, 80px);">${n}</span><span class="label">${l}</span></div>
        </div>`).join("")}
      </div>
      <style>@media (max-width: 880px) { .m-grid { grid-template-columns: 1fr 1fr !important; } }</style>
    </div>
  </section>

  <section>
    <div class="wrap-narrow">
      <article class="prose">
        ${c.sections.map((s) => `
        <h2 class="reveal">${s.h}</h2>
        <p class="reveal">${s.b}</p>`).join("")}
      </article>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap-narrow">
      <div class="card">
        <div class="eyebrow"><span class="dot"></span>Note on privacy</div>
        <p class="prose mt-4">This case is presented anonymized — names, exact addresses, and small identifying details have been adjusted with the family's consent. Sale prices and timelines are real and unaltered.</p>
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function caseIndex() {
  return {
    outPath: "pages/case-studies/index.html",
    meta: {
      title: "Case Studies — Real Oregon Probate Engagements",
      description: "Four anonymized Oregon probate engagements — from a Eugene bungalow cash close to a Multnomah conservatorship court-confirmed sale. Real timelines, real numbers, real outcomes.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Case Studies", href: "https://exitprobateteam.com/pages/case-studies/index.html" },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><span>Case Studies</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>Files we've</span></span>
        <span class="line-mask"><span><em class="serif-italic-accent">already</em></span></span>
        <span class="line-mask"><span>closed.</span></span>
      </h1>
      <p class="lede" data-hero-fade>Real engagements, anonymized for privacy, with real numbers and real timelines. Each one is a different shape of the same protocol.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div style="display: flex; flex-direction: column; gap: 36px;" data-stagger>
        ${CASES.map((c, i) => `
        <a href="${c.slug}.html" data-stagger-item style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 64px); align-items: center; padding: 36px 0; border-top: 1px solid var(--rule); transition: padding 320ms var(--ease-out);" class="case-row" onmouseover="this.style.padding='44px 0'" onmouseout="this.style.padding='36px 0'">
          <div${i % 2 === 1 ? " style=\"order: 2;\"" : ""}>
            <div class="eyebrow"><span class="dot"></span>${c.region}</div>
            <h2 style="margin-top: 18px; font-size: clamp(28px, 3.4vw, 48px);">${c.title}</h2>
            <p class="lede mt-4" style="font-size: 19px;">${c.sub}</p>
            <div style="display: flex; gap: 24px; margin-top: 24px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute);">
              ${c.metrics.slice(0, 2).map((m) => `<span><strong style="color: var(--accent-deep); font-family: var(--display); font-size: 18px; font-style: italic;">${m[0]}</strong> ${m[1]}</span>`).join("")}
            </div>
          </div>
          <div class="frame frame-wide"${i % 2 === 1 ? " style=\"order: 1;\"" : ""}>
            <img src="${c.hero}" alt="${c.title}" data-img-scroll/>
          </div>
        </a>`).join("")}
      </div>
      <style>@media (max-width: 880px) { .case-row { grid-template-columns: 1fr !important; } }</style>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function all() {
  return [caseIndex(), ...CASES.map(casePage)];
}

module.exports = { all };
