/* =====================================================================
   Core marketing pages: home, about, services, process, team, contact,
   faq, testimonials
   ===================================================================== */
"use strict";

const { SERVICES, TEAM, TESTIMONIALS, FAQ, OREGON_COUNTIES, OREGON_CITIES } = require("./data");

/* Unsplash photography — intentional probate-relevant Oregon-warm imagery
   Heavy emphasis on elderly subjects, multi-generation families, and the
   quiet domestic objects estates are built around. */
const U = (id, w = 1800, q = 72) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
const IMG = {
  /* Homes / exteriors */
  craftsman:    U("1568605114967-8130f3a36994"),
  bungalow:     U("1518780664697-55e3ad937233"),
  porch:        U("1564013799919-ab600027ffc6"),
  victorian:    U("1570129477492-45c003edd2be"),
  cottage:      U("1572120360610-d971b9d7767c"),
  ranch:        U("1583608205776-bfd35f0d9f83"),

  /* Oregon landscape */
  landscape:    U("1506905925346-21bda4d32df4", 2000),
  coast:        U("1498855926480-d98e83099315"),
  forest:       U("1448375240586-882707db888b"),
  river:        U("1441974231531-c6227db76b6e"),
  rural:        U("1500382017468-9049fed747ef"),
  mountains:    U("1464822759023-fed622ff2c3b", 2000),
  valley:       U("1502301197179-65228ab57f78"),

  /* People — elderly + multi-generation (humane) */
  elderlyCouple:  U("1746192703468-dedf3fc11d87"),
  elderlyHands:   U("1559963110-71b394e7494d"),
  elderlyWoman:   U("1566616213894-2d4e1baee5d8"),
  elderlyMan:     U("1547425260-76bcadfb4f2c"),
  matureCouple:   U("1573497019940-1c28c88b4f3e"),
  grandparent:    U("1497316730643-415fac54a2af"),
  grandkid:       U("1474552226712-ac0f0961a954"),
  family:         U("1511895426328-dc8714191300"),
  familyTable:    U("1529333166437-7750a6dd5a70"),
  motherDaughter: U("1543269664-7eef42226a21"),

  /* Hands and domestic detail */
  hands:         U("1521791136064-7986c2920216"),
  handsTea:      U("1495774856032-8b90bbb32b32"),
  handsBook:     U("1481627834876-b7833e8f5570"),
  handsCoffee:   U("1509042239860-f550ce710b93"),
  kitchen:       U("1556909114-f6e7ad7d3136"),
  kitchenWarm:   U("1507089947368-19c1da9775ae"),

  /* Probate-adjacent details */
  papers:    U("1450101499163-c8848c66ca85"),
  desk:      U("1554224155-6726b3ff858f"),
  hallway:   U("1505691938895-1758d7feb511"),
  table:     U("1573164574511-73c773193279"),
  meeting:   U("1559136555-9303baea8ebd"),
  signing:   U("1450101499163-c8848c66ca85"),

  /* Heirlooms / objects */
  album:        U("1504439468489-c8920d796a29"),
  clock:        U("1565538810643-b5bdb714032a"),
  vintage:      U("1557804506-669a67965ba0"),
  bookshelf:    U("1521587760476-6c12a4b040da"),
  porchChair:   U("1545324418-cc1a3fa10c00"),
  livingRoom:   U("1556228720-195a672e8a03"),
  diningRoom:   U("1556909114-f6e7ad7d3136"),

  /* Cinematic moments */
  windowLight:  U("1499916078039-922301b0eb9b"),
  warmRoom:     U("1572025442646-866d16c84a54"),
  emptyDoorway: U("1505691938895-1758d7feb511"),

  /* New editorial home page imagery — curated, no stock cliches */
  heroHouse:      U("1564013799919-ab600027ffc6", 1800),   // craftsman porch front
  heroHouseAlt:   U("1583608205776-bfd35f0d9f83", 1800),   // alt warm home exterior
  serviceCash:    U("1554224155-6726b3ff858f", 1400),       // desk with papers — cash sale
  serviceListing: U("1564013799919-ab600027ffc6", 1400),    // home exterior — listing
  serviceWatch:   U("1505691938895-1758d7feb511", 1400),    // empty hallway — vacant
  serviceAdvisor: U("1495774856032-8b90bbb32b32", 1400),    // hands with tea — advisory
  stepConversation: U("1495774856032-8b90bbb32b32", 1200),  // tea hands
  stepSummary:    U("1450101499163-c8848c66ca85", 1200),    // papers/desk
  stepPrepare:    U("1505691938895-1758d7feb511", 1200),    // empty room
  stepPaths:      U("1568605114967-8130f3a36994", 1200),    // craftsman home
  stepUpdates:    U("1521791136064-7986c2920216", 1200),    // hands writing
  stepClose:      U("1481627834876-b7833e8f5570", 1200),    // open book / closure
  oregonRoad:     U("1500382017468-9049fed747ef", 1600),    // rural Oregon road
  resourceTimeline: U("1450101499163-c8848c66ca85", 1200),
  resourceSelling:  U("1564013799919-ab600027ffc6", 1200),
  resourceExecutor: U("1481627834876-b7833e8f5570", 1200),
};

/* ---------- HOME ---------- */
function home() {
  return {
    outPath: "index.html",
    meta: {
      title: null, // homepage uses sitewide default title
      description: "Oregon's Certified Probate Real Estate Specialists. Compassionate guidance, decisive execution, and a vetted vendor bench for executors, trustees, and attorneys handling estate property in all 36 Oregon counties.",
      ogImage: IMG.craftsman,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Exit Probate Team",
        url: "https://exitprobateteam.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://exitprobateteam.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
    body: HOME_BODY,
  };
}

/* Helper renderers for the editorial home page */
function _audienceCard({ num, title, body, href }) {
  return `
    <a href="${href}" class="audience-card reveal">
      <span class="num">${num}</span>
      <h3>${title}</h3>
      <p>${body}</p>
      <span class="more">Read more →</span>
    </a>`;
}

function _bentoTile(s, i, withPhoto, span) {
  const photoMap = {
    "cash-offer":            IMG.serviceCash,
    "market-listing":        IMG.serviceListing,
    "estate-cleanout":       IMG.bookshelf,
    "vacant-property-watch": IMG.serviceWatch,
    "heir-locator":          IMG.oregonRoad,
    "advisory":              IMG.serviceAdvisor,
  };
  const ph = photoMap[s.slug];
  return `
    <a href="pages/services/${s.slug}.html" class="bento tile ${span}${withPhoto ? " has-photo" : ""} reveal">
      ${withPhoto ? `<div class="ph"><img src="${ph}" alt=""></div>` : ""}
      <div class="inner" style="${withPhoto ? "" : "margin: 0; padding: 0;"}">
        <span class="eye">No. ${String(i + 1).padStart(2, "0")} — ${s.slug.replace(/-/g, " ")}</span>
        <h3 style="margin-top: 12px;">${s.title}</h3>
        <p style="margin-top: 14px;">${s.short}</p>
        <span class="arrow-link" style="margin-top: 18px;">Read more →</span>
      </div>
    </a>`;
}

function _processStep(i, title, body, photo) {
  return `
    <div class="step reveal">
      <div class="photo"><img src="${photo}" alt=""></div>
      <div class="body">
        <span class="n">${String(i + 1).padStart(2, "0")}<em>.</em></span>
        <h3>${title}</h3>
        <p>${body}</p>
      </div>
    </div>`;
}

const _PROCESS_STEPS = [
  { title: "A first conversation",          body: "A thirty-minute call. We listen first. If there is a probate attorney we coordinate with them; if not we can refer two or three good ones in your county. There is no obligation and no fee for the conversation.",                                                                       photo: IMG.stepConversation },
  { title: "A written summary",             body: "A short written summary of what we heard, what the path forward could look like, and what we recommend — including the choice not to engage us if that is the right call.",                                                                                                            photo: IMG.stepSummary },
  { title: "The property, prepared with care", body: "We coordinate vacant property protection, gentle cleanout, donation channels for items the family does not need to keep, and any pre-listing work that meaningfully helps the home.",                                                                                                photo: IMG.stepPrepare },
  { title: "A choice of paths",             body: "A cash sale to a vetted buyer with a short timeline, or a quiet listing on the market for the best price the home can defensibly command. We make the recommendation; you make the decision.",                                                                                          photo: IMG.stepPaths },
  { title: "Weekly written updates",        body: "Every Friday — to the family, and to the probate attorney if you have one. One inbox, one update, no missed calls.",                                                                                                                                                                    photo: IMG.stepUpdates },
  { title: "A close that finishes the file", body: "Documentation prepared for the estate accounting. Funds distributed cleanly. We stay until the file is closed.",                                                                                                                                                                       photo: IMG.stepClose },
];

const HOME_BODY = `

  <!-- ====================================================================
       01 — HERO. Editorial, asymmetric, full-bleed photo right.
       ==================================================================== -->
  <section class="hero-editorial" data-hero>
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow-line reveal">Oregon probate real estate · since 2019</span>
          <h1 class="reveal">
            <span class="line-mask"><span>The family</span></span>
            <span class="line-mask"><span><em class="serif-italic-accent">deserves</em> a</span></span>
            <span class="line-mask"><span>quiet, capable</span></span>
            <span class="line-mask"><span>exit.</span></span>
          </h1>
          <p class="lede reveal">
            We are licensed Oregon real estate agents who specialize — only — in probate, trust, and conservatorship property. We carry the practical side of the home with the patience the family deserves, on the timeline the family chooses.
          </p>
          <div class="reveal" style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 40px; align-items: center;">
            <a href="pages/contact.html" class="btn btn-primary" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a>
            <a href="tel:+15415253268" class="btn-text">Or call (541) 525-3268</a>
          </div>
        </div>
        <div class="hero-photo reveal-img">
          <span class="badge">Eugene · Lane County · 2026</span>
          <img src="${IMG.heroHouse}" alt="An Oregon craftsman home with a wide front porch — the kind of property our practice was built around" />
        </div>
      </div>
    </div>

    <!-- Inline data ticker -->
    <div class="hero-ticker reveal-fade" style="margin-top: clamp(40px, 6vw, 80px);">
      <div class="ticker-grid">
        <div class="tick"><span>Statewide</span><span class="v">All 36 counties</span></div>
        <div class="tick"><span>Since</span><span class="v">2019</span></div>
        <div class="tick"><span>Files closed</span><span class="v">187 +</span></div>
        <div class="tick"><span>Direct line</span><span class="v">(541) 525-3268</span></div>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       02 — STAT STRIP. 4-up horizontal proof bar.
       ==================================================================== -->
  <section class="tight">
    <div class="wrap">
      <div class="stat-strip reveal">
        <div class="stat">
          <div class="n">187<em>+</em></div>
          <div class="l">Estate files closed since 2019</div>
        </div>
        <div class="stat">
          <div class="n">36<em>/36</em></div>
          <div class="l">Oregon counties served, anchored in Eugene</div>
        </div>
        <div class="stat">
          <div class="n">11<em> days</em></div>
          <div class="l">Median time from first call to first written offer</div>
        </div>
        <div class="stat">
          <div class="n">$0</div>
          <div class="l">Retainer required. Commission paid only at closing.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       03 — INTRO PARAGRAPH (intentional single-column moment).
       ==================================================================== -->
  <section class="compact">
    <div class="wrap-narrow text-center">
      <p class="lede reveal" style="font-size: clamp(22px, 2vw, 30px); line-height: 1.4; max-width: 56ch; margin: 0 auto;">
        Most of our clients are sons and daughters who have just lost a parent. Executors handling a will they were not expecting. Trustees managing a parent's late-stage care. The properties are houses where lives were lived. <em class="serif-italic-accent">We treat them that way.</em>
      </p>
    </div>
  </section>

  <!-- ====================================================================
       04 — WHO WE SERVE. Three audience cards.
       ==================================================================== -->
  <section style="background: var(--bg-soft);">
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">Who we work with</span>
          <span class="num reveal">01<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Built around the three people who carry the estate <em>through</em> the file.</h2>
        </div>
      </div>
      <div class="audience-grid" data-stagger>
        ${_audienceCard({
          num: "i.",
          title: "For Personal Representatives & Executors",
          body: "You were named in the will. Now you're holding a court appointment, an empty house, and a checklist that grows every day. We carry the real estate piece end-to-end and route the rest to vetted attorneys, estate-sale operators, and contractors — so your job becomes one weekly digest.",
          href: "pages/audiences/executors.html",
        })}
        ${_audienceCard({
          num: "ii.",
          title: "For Trustees & Successor Trustees",
          body: "Trust real estate moves differently than probate — no court confirmation, more discretion, more exposure. We document everything for the trust accounting, coordinate with the trust attorney, and price the property against the duty of impartiality you owe every beneficiary.",
          href: "pages/audiences/trustees.html",
        })}
        ${_audienceCard({
          num: "iii.",
          title: "For Probate Attorneys",
          body: "Most of our calls come from attorneys who'd rather practice law than hunt for a real-estate specialist who won't get the court order wrong. We carry the real estate, you carry the file. We coordinate on contract terms, timing the hearings, and the final accounting line items.",
          href: "pages/audiences/attorneys.html",
        })}
      </div>
    </div>
  </section>

  <!-- ====================================================================
       05 — PULL QUOTE. Magazine break, dark noir block.
       ==================================================================== -->
  <section class="pull-quote" style="padding: 0;">
    <div class="wrap-narrow" style="padding-top: clamp(80px, 10vw, 160px); padding-bottom: clamp(80px, 10vw, 160px);">
      <p class="q reveal">
        We do not see the homes we sell as transactions. We see <em>kitchens where Christmas dinners happened, porches where coffee was had every morning for thirty-six years, and bedrooms where people grew up.</em> Our job is to handle them with that in mind — quietly, capably, and on the family's timeline.
      </p>
      <div class="attr reveal-fade">
        <span class="dash"></span>
        <span>Daniel Gandee · Co-Founder · CPRES</span>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       06 — THE WORK. Bento grid of six services, asymmetric.
       ==================================================================== -->
  <section>
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">The work</span>
          <span class="num reveal">02<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Six engagements, calibrated to where the estate actually <em>is</em>.</h2>
          <p class="lede reveal" style="max-width: 56ch;">
            Every estate is different. We start every relationship the same way — a quiet thirty-minute conversation, no obligation — and recommend only the engagement that fits.
          </p>
        </div>
      </div>

      <div class="bento" data-stagger>
        ${_bentoTile(SERVICES[0], 0, true,  "span-3")}
        ${_bentoTile(SERVICES[1], 1, false, "span-3")}
        ${_bentoTile(SERVICES[2], 2, false, "span-2")}
        ${_bentoTile(SERVICES[3], 3, true,  "span-2")}
        ${_bentoTile(SERVICES[4], 4, false, "span-2")}
        ${_bentoTile(SERVICES[5], 5, false, "span-3")}
        <div class="tile span-3" style="background: var(--bg-cream); display: flex; flex-direction: column; justify-content: center; align-items: flex-start; min-height: 220px;">
          <span class="eye reveal">Not sure which?</span>
          <h3 class="reveal" style="margin-top: 12px;">Tell us the situation. We will tell you which engagement fits — or that we are not the right team.</h3>
          <a href="pages/contact.html" class="arrow-link reveal" style="margin-top: 16px;">Start a quiet conversation →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       07 — THE PROCESS. Sticky-rail vertical timeline.
       ==================================================================== -->
  <section style="background: var(--bg-cream);">
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">How we work</span>
          <span class="num reveal">03<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Six gentle steps. <em>The family decides the pace.</em></h2>
        </div>
      </div>

      <div class="process-rail">
        <aside class="rail">
          <span class="eyebrow-line">Where we are</span>
          <div class="pip-list">
            ${_PROCESS_STEPS.map((s, i) => `
              <div class="pip${i === 0 ? " active" : ""}" data-pip="${i}">
                <span class="n">0${i + 1}</span>
                <span>${s.title}</span>
              </div>`).join("")}
          </div>
        </aside>
        <div class="steps">
          ${_PROCESS_STEPS.map((s, i) => _processStep(i, s.title, s.body, s.photo)).join("")}
        </div>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       08 — COVERAGE. Typographic county masthead.
       ==================================================================== -->
  <section>
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">Coverage</span>
          <span class="num reveal">04<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Every Oregon county. <em>From Multnomah to Wallowa.</em></h2>
        </div>
      </div>

      <div class="county-masthead">
        <div class="head">
          <h2 class="reveal" style="font-size: clamp(72px, 12vw, 220px);">All <em>36.</em></h2>
          <p class="lede reveal" style="margin-top: 24px; max-width: 36ch;">
            We are anchored in Eugene and work statewide. Each county gets its own page — the court address, the typical timeline, the local probate attorneys we trust.
          </p>
          <div class="photo reveal-img">
            <img src="${IMG.oregonRoad}" alt="A quiet Oregon road through the Willamette Valley" />
          </div>
        </div>
        <div class="list reveal">
          ${OREGON_COUNTIES.slice(0, 24).map((c, i) => `
            <a href="pages/counties/${c.slug}.html">
              <span>${c.name}</span>
              <span class="num">${c.seat}</span>
            </a>`).join("")}
        </div>
      </div>
      <div class="reveal" style="margin-top: clamp(32px, 4vw, 56px); display: flex; justify-content: flex-end;">
        <a href="pages/counties/index.html" class="btn-text">See all 36 counties →</a>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       09 — TESTIMONIALS. Offset card grid.
       ==================================================================== -->
  <section style="background: var(--bg-soft);">
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">In their own words</span>
          <span class="num reveal">05<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">From the families <em>we have worked alongside.</em></h2>
        </div>
      </div>

      <div class="testimonial-grid">
        ${TESTIMONIALS.slice(0, 4).map((t) => `
          <figure class="reveal">
            <blockquote>"${t.quote}"</blockquote>
            <figcaption>
              <span class="ini">${t.name.split(/\s+/).map(n => n[0]).join("")}</span>
              <span>${t.name} · ${t.where}</span>
            </figcaption>
          </figure>`).join("")}
      </div>
      <div class="reveal" style="margin-top: clamp(40px, 5vw, 64px); display: flex; justify-content: center;">
        <a href="pages/testimonials.html" class="btn-text">Read all testimonials →</a>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       10 — THE TEAM. Editorial pair, asymmetric vertical offset.
       ==================================================================== -->
  <section>
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">The team</span>
          <span class="num reveal">06<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Two co-founders who <em>answer their own phones.</em></h2>
        </div>
      </div>

      <div class="team-editorial">
        ${TEAM.map((m) => `
          <a href="pages/team/${m.slug}.html" class="tm reveal" style="text-decoration: none; color: var(--ink);">
            <div class="ph">
              ${m.photoMissing
                ? `<div class="ini">${m.name.split(/\s+/).map(n => n[0]).join("")}</div>`
                : `<img src="assets/img/${m.photo}" alt="Portrait of ${m.name}" />`}
            </div>
            <div class="meta">
              <div>
                <div class="name">${m.name}</div>
                <div class="role">${m.role}</div>
              </div>
              <span class="more" style="font-family: var(--display); font-style: italic; font-size: 15px; border-bottom: 1px solid var(--ink); padding-bottom: 2px;">Read bio →</span>
            </div>
            <p>${m.bio[0]}</p>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- ====================================================================
       11 — CREDENTIALS. Horizontal strip.
       ==================================================================== -->
  <section class="tight">
    <div class="wrap">
      <div class="section-head" style="margin-bottom: 28px;">
        <div class="l">
          <span class="eyebrow-line reveal">Credentials</span>
          <span class="num reveal">07<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal" style="font-size: clamp(28px, 3vw, 42px);">Trained for this work, <em>on purpose.</em></h2>
        </div>
      </div>
      <div class="cred-strip reveal">
        <div class="cred"><div class="k">CPRES</div><div class="v">Certified Probate Real Estate Specialist</div></div>
        <div class="cred"><div class="k">RENE</div><div class="v">Real Estate Negotiation Expert</div></div>
        <div class="cred"><div class="k">CIPS</div><div class="v">Certified International Property Specialist</div></div>
        <div class="cred"><div class="k">CEOA</div><div class="v">Certified Express Offers Agent</div></div>
        <div class="cred"><div class="k">REAL</div><div class="v">Licensed under REAL Broker, LLC — Oregon</div></div>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       12 — RESOURCES. Three editorial covers.
       ==================================================================== -->
  <section style="background: var(--bg-cream);">
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">Reading, if it helps</span>
          <span class="num reveal">08<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Free guides we wrote <em>for families.</em></h2>
          <p class="lede reveal" style="max-width: 56ch;">
            We wrote these because the same questions came up on every first call. Written to be useful, not to sell — read what helps, skip the rest.
          </p>
        </div>
      </div>

      <div class="resource-grid" data-stagger>
        ${[
          { title: "The Oregon probate timeline",         href: "resources/probate-timeline.html",      cover: IMG.resourceTimeline, eye: "Field guide · 14 min read", read: "Month by month, what to expect between Letters and the final accounting." },
          { title: "Selling a probate home in Oregon",    href: "resources/selling-probate-property.html", cover: IMG.resourceSelling,  eye: "Strategy · 18 min read",   read: "When cash is right, when the market is right, and the eleven mistakes families regret most." },
          { title: "The executor's first 90 days",        href: "resources/executor-checklist.html",    cover: IMG.resourceExecutor, eye: "Checklist · 11 min read",  read: "The exact order of operations we walk new executors through, with the deadlines that matter." },
        ].map((g) => `
          <a href="pages/${g.href}" class="resource-card reveal">
            <div class="cover">
              <span class="label">${g.eye}</span>
              <img src="${g.cover}" alt="">
            </div>
            <div class="meta">
              <span class="eye">By The Operative Group</span>
              <h3>${g.title}</h3>
              <span class="read">${g.read}</span>
            </div>
          </a>`).join("")}
      </div>

      <div class="reveal" style="margin-top: clamp(40px, 5vw, 64px); display: flex; justify-content: flex-end;">
        <a href="pages/resources/index.html" class="btn-text">See the full library →</a>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       13 — FAQ. Two-column layout.
       ==================================================================== -->
  <section>
    <div class="wrap">
      <div class="section-head">
        <div class="l">
          <span class="eyebrow-line reveal">Questions families ask</span>
          <span class="num reveal">09<em>.</em></span>
        </div>
        <div class="r">
          <h2 class="reveal">Direct answers, <em>written plainly.</em></h2>
        </div>
      </div>

      <div class="faq-grid">
        <div>
          <div class="faq">
            ${FAQ.slice(0, 3).map((f, i) => `
              <div class="faq-item${i === 0 ? " open" : ""} reveal">
                <button class="faq-q">${f.q}<span class="plus" aria-hidden="true"></span></button>
                <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
              </div>`).join("")}
          </div>
        </div>
        <div>
          <div class="faq">
            ${FAQ.slice(3, 6).map((f, i) => `
              <div class="faq-item reveal">
                <button class="faq-q">${f.q}<span class="plus" aria-hidden="true"></span></button>
                <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </div>

      <div class="reveal" style="margin-top: clamp(40px, 5vw, 64px); display: flex; justify-content: flex-end;">
        <a href="pages/faq.html" class="btn-text">All questions →</a>
      </div>
    </div>
  </section>

  <!-- ====================================================================
       14 — FINAL CTA. Dark noir block.
       ==================================================================== -->
  <section class="cta-noir">
    <div class="wrap">
      <div class="grid">
        <div>
          <span class="eyebrow-line reveal" style="color: var(--sage);">When you are ready</span>
          <h2 class="reveal" style="margin-top: 20px;">A first conversation <em>costs nothing.</em></h2>
          <p class="reveal" style="margin-top: 24px; color: rgba(253,250,243,0.78); font-size: clamp(17px, 1.3vw, 20px); max-width: 50ch; line-height: 1.55;">
            Thirty minutes. We listen first. If we are the right team for the family we will say so. If we are not, we will tell you that too — and refer you somewhere good.
          </p>
          <a href="pages/contact.html" class="btn-paper-noir reveal" data-magnetic>Start a quiet conversation <span class="arrow">→</span></a>
        </div>
        <div class="right">
          <div class="item reveal">
            <div class="l">Direct line</div>
            <div class="v"><a href="tel:+15415253268">(541) 525-3268</a></div>
          </div>
          <div class="item reveal">
            <div class="l">Email</div>
            <div class="v"><a href="mailto:hello@exitprobateteam.com">hello@exitprobateteam.com</a></div>
          </div>
          <div class="item reveal">
            <div class="l">Hours</div>
            <div class="v" style="font-size: 18px;">Mon–Fri · 8a–6p PT<br><span style="font-style: italic; font-size: 14px; color: rgba(253,250,243,0.6);">After-hours emergencies always</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

/* SVG service icons */
function serviceIcon(name) {
  const icons = {
    cash: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="14" width="36" height="22" rx="3"/><circle cx="24" cy="25" r="5"/><path d="M14 18v14M34 18v14"/></svg>`,
    list: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 12h28M10 20h28M10 28h28M10 36h18"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="6" cy="20" r="1.5" fill="currentColor"/><circle cx="6" cy="28" r="1.5" fill="currentColor"/><circle cx="6" cy="36" r="1.5" fill="currentColor"/></svg>`,
    broom: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M30 8 L40 18 M10 38 L24 24 L32 32 L18 46z M14 32 L20 38 M8 42 L12 46"/></svg>`,
    shield: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M24 6 L40 12 V24 C40 34 32 42 24 44 C16 42 8 34 8 24 V12z"/><path d="M18 24 L22 28 L30 18"/></svg>`,
    compass: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="18"/><path d="M18 30 L24 14 L30 30 L24 26 Z" fill="currentColor" stroke="none"/></svg>`,
    "compass-2": `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="3" fill="currentColor"/><path d="M24 6 V12 M24 36 V42 M6 24 H12 M36 24 H42"/></svg>`,
  };
  return icons[name] || icons.compass;
}

module.exports = { home, serviceIcon, IMG };
