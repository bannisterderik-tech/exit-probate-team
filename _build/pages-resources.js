/* =====================================================================
   Resource hub: index + 7 long-form guides
   ===================================================================== */
"use strict";

const { IMG } = require("./pages-core");
const { ctaBlock } = require("./pages-marketing");

const RESOURCES = [
  {
    slug: "probate-timeline",
    title: "The Oregon Probate Timeline",
    sub: "Month-by-month, what actually happens between letters and final accounting.",
    readTime: "12 min read",
    hero: IMG.papers,
    sections: [
      { h: "TL;DR — the short answer", b: "Most Oregon probates run 4 to 12 months. Small estates may close in 30 days under a small-estate affidavit. Complex estates with contested wills, missing heirs, or interstate property routinely run 12 to 24 months." },
      { h: "Days 0–14: Petition & Letters", b: "The personal representative files a petition for probate with the circuit court (or county court, in the six counties that use them). The court issues Letters Testamentary (if there is a will) or Letters of Administration (if there is not). These letters are the personal representative's legal authority to act on the estate's behalf. Until the letters are issued, no estate property can be sold." },
      { h: "Days 14–60: Notice & inventory", b: "The personal representative must notify the heirs and devisees, publish notice to creditors (Oregon requires four months of creditor notice), and prepare an inventory of estate assets. Real estate is appraised. This is the right time to engage a probate real estate specialist — pricing strategy gets locked in here, even if the property doesn't list yet." },
      { h: "Months 2–6: Creditor period & property prep", b: "Oregon's creditor period runs four months from publication of notice. While that clock runs, the property typically gets prepared — cleanout, vacant-property protection, light prep, photography. Many properties go under contract during the creditor period with a closing date timed after it ends." },
      { h: "Months 6–9: Sale & distribution preparation", b: "Once the creditor period closes, the personal representative pays creditor claims, finalizes the inventory, and prepares the final accounting. Real estate sales close in this window for most estates. Court confirmation is required in certain cases — independent personal representatives have more flexibility, while supervised administrations require court approval of the sale." },
      { h: "Months 9–12: Final accounting & close", b: "The personal representative files the final accounting, pays remaining estate expenses (including specialist fees from the real estate sale), distributes the remaining assets to the heirs, and files the petition to close the estate. The court issues a final order. The file is closed." },
      { h: "Where real estate becomes the bottleneck", b: "In our experience, the real estate sale is rarely the actual bottleneck — it's heir notification, creditor periods, and accounting that drive the calendar. The property's job is to be ready to close the moment the legal calendar allows. That's why we recommend engaging the property strategy early, even when the sale won't happen until month seven." },
    ],
  },
  {
    slug: "selling-probate-property",
    title: "Selling Probate Property in Oregon",
    sub: "Listing vs. cash, court confirmations, tax basis, and the eleven mistakes executors regret most.",
    readTime: "14 min read",
    hero: IMG.craftsman,
    sections: [
      { h: "The two paths", b: "Every Oregon probate property sale fits into one of two strategies: a cash sale to a pre-approved investor with verified funds, or a strategic market listing with calibrated MLS exposure. Cash offers maximize speed and certainty. Market listings maximize net proceeds. The right call depends on the estate's timeline, the family's priorities, and the property's condition." },
      { h: "When cash wins", b: "Cash is the right path when: (1) the estate needs liquidity inside 30 days, (2) heirs live out of state and don't want to manage a listing, (3) the property requires significant work that the estate doesn't want to fund up front, (4) family dynamics make a traditional listing combustible, or (5) the property is in a market where investor demand is structurally high and listing premiums are slim." },
      { h: "When listing wins", b: "Listing is the right path when: (1) there is time on the probate calendar (4+ months), (2) the property shows well or can be made to with limited prep, (3) the heirs prioritize net proceeds over speed, and (4) the market supports a defensible price above the cash offer's ceiling." },
      { h: "Court confirmation explained", b: "Whether the court must approve the sale depends on whether the personal representative is independent (with the testator having explicitly granted full powers) or supervised. Independent administrations typically don't require court approval of a real estate sale. Supervised administrations do. We coordinate directly with the probate attorney to clarify which applies and time the contract accordingly." },
      { h: "The stepped-up basis", b: "When a property is inherited, its tax basis is generally stepped up to the fair market value on the date of the decedent's death. This is a significant tax benefit for heirs who eventually sell the property. We routinely commission a date-of-death appraisal for the file even when the sale happens months later — it protects the heirs from a capital gains argument later." },
      { h: "Eleven mistakes executors regret most", b: "1. Waiting until probate closes to engage the property strategy. 2. Listing with a generalist agent who treats it like any other sale. 3. Not running a vacant-property insurance endorsement. 4. Letting the lawn or HVAC go through a season. 5. Doing a full pre-listing rehab the estate didn't need. 6. Accepting the first cash offer without rotating. 7. Skipping the date-of-death appraisal. 8. Not coordinating the contract with the probate attorney. 9. Trusting verbal proof-of-funds. 10. Not documenting vendor charges for the accounting. 11. Going silent with the heirs between offer and close." },
    ],
  },
  {
    slug: "working-with-attorneys",
    title: "Working With Your Probate Attorney",
    sub: "How real estate and legal counsel coordinate cleanly when the file is moving fast.",
    readTime: "9 min read",
    hero: IMG.meeting,
    sections: [
      { h: "Two lanes, one file", b: "Probate is a legal proceeding. Probate real estate is a logistics and market problem inside that proceeding. The attorney drives the legal lane; we drive the real estate lane. When both lanes coordinate weekly, the file moves at the pace the family deserves. When they don't, the property bleeds carrying costs while the lawyers and the agent each wait for the other." },
      { h: "What the attorney needs from us", b: "Most probate attorneys want: a clear pricing recommendation in writing, a documented offer rotation, real-time updates on contract status, contracts that line up with their court calendar, and final accounting-ready invoices for every vendor we coordinated. We deliver all of these by default — they're how we operate." },
      { h: "What we need from the attorney", b: "Clarity on the form of administration (independent or supervised), the court calendar for any required confirmations, the personal representative's signing authority, any pending creditor claims that affect proceeds, and a heads-up if the estate is contested or if there's potential litigation that could derail the sale." },
      { h: "If you don't have an attorney yet", b: "We will refer two or three probate attorneys in the right county, with no referral fee changing hands. Oregon is large enough that the right attorney varies by region — Lane County probate counsel works differently from Multnomah County probate counsel. We can recommend the right fit." },
    ],
  },
  {
    slug: "heirs-guide",
    title: "An Heir's Guide to Oregon Probate Property",
    sub: "If you've just been named in a will or as a trust beneficiary, start here.",
    readTime: "10 min read",
    hero: IMG.kitchen,
    sections: [
      { h: "First — breathe", b: "If a family member has just died and you've been named in a will or trust, the first thing to know is that you almost certainly do not have to do anything urgent. Probate is slow on purpose. There will be a personal representative (named in the will or appointed by the court) and that person — not you, unless you are them — handles the file." },
      { h: "Your rights as an heir", b: "Under Oregon probate law, named heirs and devisees are entitled to: notice of the probate proceeding, a copy of the inventory and any later supplements, notice of any sale of estate property, the right to object to a sale or accounting, and a copy of the final accounting before distribution. You are not entitled to make decisions on the property — that's the personal representative's role." },
      { h: "What if you disagree with the PR?", b: "Disagreements with the personal representative are common and not the end of the world. Most are resolved with clearer information. If you genuinely believe the PR is acting against the estate's interest, you can raise objections through the court. We will not take sides between heirs — we work for the personal representative under their authority — but we will share comps, offer rotations, and decisions with all named parties in writing." },
      { h: "What if you want to keep the property?", b: "If you want to keep the property and have the means, we can help structure a buy-out of the other heirs. We provide a defensible valuation, document the comps for the court, help structure financing (often a refinance or 1031 exchange), and coordinate the title work. The estate sells the property to you at fair market value; the other heirs receive their share in cash; everyone walks." },
    ],
  },
  {
    slug: "avoiding-probate",
    title: "What Future-You Will Wish Present-You Had Done",
    sub: "Estate planning steps that materially reduce the probate burden on the people you love.",
    readTime: "8 min read",
    hero: IMG.desk,
    sections: [
      { h: "Probate is not the enemy", b: "Probate exists for a reason — it provides court oversight of asset distribution and creditor claims, which protects everyone. The goal isn't to avoid probate at all costs. The goal is to make sure your estate moves through probate as smoothly as it possibly can, and to keep the most time-sensitive or family-sensitive assets outside of it where appropriate." },
      { h: "Steps that meaningfully reduce probate friction", b: "1. Establish a revocable living trust for major real estate. 2. Make sure beneficiary designations on retirement accounts and life insurance are current. 3. Use transfer-on-death deeds where Oregon allows them. 4. Maintain an updated will with a named personal representative who is actually willing to serve. 5. Keep an organized record of accounts, passwords (in a sealed letter), and key documents." },
      { h: "What this team does — and doesn't do — at this stage", b: "We are real estate specialists, not estate planning attorneys. We don't draft trusts. What we do is sit on a vetted bench of Oregon estate planning attorneys we can refer to, and we will happily make introductions for anyone who realizes — while reading this — that they should probably have this conversation with a professional." },
    ],
  },
  {
    slug: "executor-checklist",
    title: "The Executor's First-90-Days Checklist",
    sub: "The exact sequence we walk new personal representatives through.",
    readTime: "7 min read",
    hero: IMG.papers,
    sections: [
      { h: "Day 0–7: Confirm and secure", b: "Locate the will, the death certificate, and any safe-deposit box keys. Confirm you are named as personal representative. Secure the decedent's home — change locks if needed, forward mail, freeze utility billing to a manageable level. Notify the immediate family of the steps you'll be taking." },
      { h: "Day 7–14: Retain counsel and assess", b: "Retain a probate attorney in the right county. Begin a rough inventory — real estate, vehicles, accounts, valuables, debts. Notify Social Security and any pension administrators. Cancel non-essential subscriptions and services. If the property is vacant, engage a vacant-property watch service immediately." },
      { h: "Day 14–30: File and notify", b: "Your attorney files the petition for probate. The court issues Letters Testamentary or Letters of Administration. Notify the heirs and devisees formally. Publish notice to creditors. Open an estate bank account. Cancel the decedent's credit cards." },
      { h: "Day 30–60: Inventory and strategy", b: "Complete the formal inventory. Obtain a date-of-death appraisal on the real estate. Engage a probate real estate specialist to develop the property strategy memo. Decide on cleanout scope, pre-listing prep (if any), and timing. Begin preparing the property in parallel with the legal timeline." },
      { h: "Day 60–90: Pay, prep, and position", b: "Begin paying valid creditor claims. Continue creditor notice period. Complete property prep. Have the property MLS-ready or cash-offer-ready by day 90 even if the closing won't happen for another two months — being ready protects the estate's optionality." },
    ],
  },
  {
    slug: "glossary",
    title: "The Oregon Probate Real Estate Glossary",
    sub: "Every term you'll hear from your attorney, the court, and us — in plain English.",
    readTime: "Reference",
    hero: IMG.desk,
    sections: [
      { h: "Personal representative (PR)", b: "The person legally authorized to act on behalf of an estate. Sometimes called the executor (if named in a will) or the administrator (if appointed without a will). Holds the authority to sell estate property within the limits of the will and the court's order." },
      { h: "Letters Testamentary / Letters of Administration", b: "The court order that gives the personal representative their legal authority. \"Testamentary\" if there is a will; \"of Administration\" if not. The estate cannot transact significant property without these in hand." },
      { h: "Independent vs. supervised administration", b: "Independent administrations grant the PR full powers (usually because the will explicitly does so) and require less court approval for individual transactions. Supervised administrations require the court to approve major actions, including real estate sales." },
      { h: "Creditor period", b: "In Oregon, four months from publication of notice to creditors during which creditors must file claims against the estate. Real estate sales can occur during this period; distribution typically waits until after." },
      { h: "Stepped-up basis", b: "The tax basis adjustment for inherited property — set to the fair market value on the date of death — which protects heirs from significant capital gains exposure on later sale." },
      { h: "Court confirmation", b: "Where required, the court's approval of a specific real estate sale. Pre-arranged contract language and a coordinated motion get this done cleanly." },
      { h: "Small estate affidavit", b: "Oregon's simplified procedure for estates under $200,000 in personal property and $200,000 in real property. Skips full probate and closes in roughly 30 days." },
      { h: "CPRES — Certified Probate Real Estate Specialist", b: "A specialty designation requiring focused training in probate-specific real estate practice, including court procedures, fiduciary duties, and the specific marketing realities of estate property." },
      { h: "Trustee", b: "The person responsible for administering a trust, including any real estate held in trust. Often performs the same property-disposition work as a personal representative but under trust law rather than probate." },
      { h: "Conservatorship", b: "Court-appointed authority to manage the affairs of a living person who cannot manage them themselves. Real estate sales under conservatorship require court approval and the same documentation rigor as a probate sale." },
    ],
  },
];

function resourcePage(r) {
  return {
    outPath: `pages/resources/${r.slug}.html`,
    meta: {
      title: r.title,
      description: r.sub,
      ogImage: r.hero,
      ogType: "article",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Resources", href: "https://exitprobateteam.com/pages/resources/index.html" },
        { label: r.title, href: `https://exitprobateteam.com/pages/resources/${r.slug}.html` },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: r.title,
        description: r.sub,
        image: r.hero,
        author: { "@type": "Organization", name: "The Operative Group" },
        publisher: { "@type": "Organization", name: "The Operative Group", logo: { "@type": "ImageObject", url: "https://exitprobateteam.com/assets/img/logo.png" } },
        datePublished: "2026-01-15",
        dateModified: "2026-05-01",
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap-narrow">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="index.html">Resources</a><span class="sep">/</span><span>${r.title}</span></div>
      <div class="pill mt-12" data-hero-fade><span class="dot"></span>${r.readTime} · Updated May 2026</div>
      <h1 style="margin-top: 24px; font-size: clamp(40px, 6vw, 88px);">
        <span class="line-mask"><span>${r.title}</span></span>
      </h1>
      <p class="lede" data-hero-fade style="margin-top: 24px;">${r.sub}</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap-narrow">
      <div class="frame frame-wide reveal-img" style="border-radius: var(--radius-xl);">
        <img src="${r.hero}" alt="Editorial photography for ${r.title}" data-img-scroll/>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap-narrow">
      <article class="prose">
        ${r.sections.map((s) => `
        <h2 class="reveal">${s.h}</h2>
        <p class="reveal">${s.b}</p>`).join("")}
      </article>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap-narrow">
      <div class="card" style="border-left: 4px solid var(--accent);">
        <div class="eyebrow"><span class="dot"></span>Have a related estate question?</div>
        <h3 class="mt-4">Thirty minutes. No retainer.</h3>
        <p class="prose mt-4">If anything in this guide intersects with an estate you're navigating, we'll walk it with you for 30 minutes at no cost. No pressure, no listing pitch.</p>
        <div class="mt-8"><a href="../contact.html" class="btn btn-primary" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a></div>
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function resourcesIndex() {
  return {
    outPath: "pages/resources/index.html",
    meta: {
      title: "Resources — Oregon Probate Real Estate Guides",
      description: "Free, in-depth guides for Oregon executors, trustees, and heirs. Probate timelines, selling guides, executor checklists, and the full glossary.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Resources", href: "https://exitprobateteam.com/pages/resources/index.html" },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><span>Resources</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>Free reading</span></span>
        <span class="line-mask"><span>for executors</span></span>
        <span class="line-mask"><span>who'd <em class="serif-italic-accent">rather be prepared.</em></span></span>
      </h1>
      <p class="lede" data-hero-fade>Seven guides we wrote because we got tired of explaining the same things over the phone. Read what you need, ignore the rest.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="service-grid" data-stagger>
        ${RESOURCES.map((r) => `
        <a href="${r.slug}.html" class="service-tile" data-stagger-item>
          <span class="num">${r.readTime.toUpperCase()}</span>
          <h3>${r.title}</h3>
          <p>${r.sub}</p>
          <span class="more">Read <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function all() {
  return [resourcesIndex(), ...RESOURCES.map(resourcePage)];
}

module.exports = { all, RESOURCES };
