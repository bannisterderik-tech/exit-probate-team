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

const HOME_BODY = `
  <!-- Hero: quiet, single photograph, modest type -->
  <section class="hero" data-hero style="padding-top: 140px; padding-bottom: clamp(60px, 8vw, 120px);">
    <div class="wrap">
      <div class="split-narrow" style="align-items: center; gap: clamp(40px, 6vw, 96px);">
        <div>
          <span class="eyebrow-line reveal">Oregon probate real estate · since 2019</span>
          <h1 class="reveal" style="margin-top: 22px;">
            <span class="line-mask"><span>Helping Oregon</span></span>
            <span class="line-mask"><span>families <em class="serif-italic-accent">settle</em></span></span>
            <span class="line-mask"><span>the homes</span></span>
            <span class="line-mask"><span>they leave behind.</span></span>
          </h1>
          <p class="lede reveal" style="margin-top: 28px; max-width: 50ch;">
            We are licensed Oregon real estate agents specializing in probate, trust, and conservatorship property — not attorneys. Our work is to carry the practical side of the home with the patience the family deserves, on the timeline the family chooses.
          </p>
          <div class="reveal" style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; align-items: center;">
            <a href="pages/contact.html" class="btn btn-primary">Start a quiet conversation <span class="arrow">→</span></a>
            <a href="tel:+15415253268" class="btn-text">Or call (541) 525-3268</a>
          </div>
        </div>
        <div class="frame frame-tall reveal-img" style="border-radius: var(--radius-lg);">
          <img src="${IMG.elderlyCouple}" alt="An older Oregon couple at home — the kind of family our practice was built to serve" />
        </div>
      </div>
    </div>
  </section>

  <!-- A short, written introduction -->
  <section class="compact">
    <div class="wrap-narrow text-center">
      <p class="lede reveal" style="font-size: clamp(20px, 1.8vw, 26px); max-width: 60ch; margin: 0 auto;">
        Most of our clients are sons and daughters who have just lost a parent. Executors handling a will they were not expecting. Trustees managing a parent's late-stage care. The properties are houses where lives were lived. <em class="serif-italic-accent">We treat them that way.</em>
      </p>
    </div>
  </section>

  <!-- A single warm photograph, framed quietly, with a quiet caption -->
  <section class="tight">
    <div class="wrap-narrow">
      <div class="frame frame-cinema reveal-img">
        <img src="${IMG.windowLight}" alt="Window light in a quiet room — the small moments that make a home a home" />
      </div>
      <p class="reveal" style="font-family: var(--display); font-style: italic; font-size: 15px; color: var(--ink-mute); margin-top: 16px; text-align: center;">Eugene, Oregon — Spring 2025</p>
    </div>
  </section>

  <!-- Services as a quiet editorial list -->
  <section>
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">What we do</span>
      <h2 class="reveal" style="margin-top: 18px; max-width: 18ch;">
        Six ways we help, depending on what the family needs.
      </h2>
      <p class="lede reveal mt-6" style="max-width: 56ch;">
        Every estate is different. We start every relationship the same way — a quiet thirty-minute conversation, no obligation — and recommend only the engagement that fits.
      </p>
      <div class="service-list mt-12">
        ${SERVICES.map((s, i) => `
        <a href="pages/services/${s.slug}.html" class="service-item reveal">
          <span class="s-num">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <div class="s-title">${s.title}</div>
            <p class="s-body">${s.short}</p>
          </div>
          <span class="s-link">Read more <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- A short reading from the team — quiet voice, no theatrics -->
  <section style="background: var(--bg-soft);">
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">From the team</span>
      <blockquote class="testimonial reveal mt-6" style="font-size: clamp(24px, 2.8vw, 36px);">
        We do not see the homes we sell as transactions. We see <em>kitchens where Christmas dinners happened, porches where coffee was had every morning for thirty-six years, and bedrooms where people grew up.</em> Our job is to handle them with that in mind — quietly, capably, and on the family's timeline.
      </blockquote>
      <p class="testimonial-meta reveal">— Daniel Gandee, Co-Founder · CPRES</p>
    </div>
  </section>

  <!-- How we work, as a quiet numbered list -->
  <section>
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">How we work</span>
      <h2 class="reveal" style="margin-top: 18px; max-width: 18ch;">
        Six gentle steps, calibrated to the family.
      </h2>
      <div class="process-list mt-12" style="border-top: 1px solid var(--rule-soft);">
        ${[
          ["A first conversation", "A thirty-minute call. We listen first. If there is a probate attorney we coordinate with them; if not we can refer two or three good ones in your county. There is no obligation and no fee for the conversation."],
          ["A written summary", "A short written summary of what we heard, what the path forward could look like, and what we recommend — including the choice not to engage us if that is the right call."],
          ["The property, prepared with care", "We coordinate vacant property protection, gentle cleanout, donation channels for items the family does not need to keep, and any pre-listing work that meaningfully helps the home."],
          ["A choice of paths", "A cash sale to a vetted buyer with a short timeline, or a quiet listing on the market for the best price the home can defensibly command. We make the recommendation; you make the decision."],
          ["Weekly written updates", "Every Friday — to the family, and to the probate attorney if you have one. One inbox, one update, no missed calls."],
          ["A close that finishes the file", "Documentation prepared for the estate accounting. Funds distributed cleanly. We stay until the file is closed."],
        ].map(([title, body], i) => `
        <div class="process-step reveal">
          <span class="step-num">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <div class="step-title">${title}</div>
            <p class="step-body">${body}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- Credentials & the family beside the work -->
  <section style="background: var(--bg-cream);">
    <div class="wrap">
      <div class="split-narrow" style="align-items: start;">
        <div>
          <span class="eyebrow-line reveal">Credentials & care</span>
          <h2 class="reveal" style="margin-top: 18px;">Trained for this work, on purpose.</h2>
          <p class="lede reveal mt-6">
            Probate real estate is not a side practice for us. It is the whole practice. Between us we hold the CPRES designation (Certified Probate Real Estate Specialist), the RENE (Real Estate Negotiation Expert), the CIPS, and the CEOA — and the relationships with local probate attorneys, estate planners, contractors, and bonded estate-sale operators that keep the work coordinated.
          </p>
          <p class="reveal mt-6" style="color: var(--ink-soft);">
            We are licensed under REAL Broker, LLC and serve every county in Oregon. We are real estate agents, not attorneys; we do not give legal advice.
          </p>
        </div>
        <div>
          <div class="reveal">
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0;">
              ${[
                ["CPRES", "Certified Probate Real Estate Specialist"],
                ["RENE", "Real Estate Negotiation Expert"],
                ["CIPS", "Certified International Property Specialist"],
                ["CEOA", "Certified Express Offers Agent"],
                ["REAL", "REAL Broker, LLC — Oregon"],
                ["B.S.", "Advertising, Kent State University · Daniel Gandee"],
              ].map(([k, v]) => `
              <li style="display: grid; grid-template-columns: 80px 1fr; gap: 24px; padding: 18px 0; border-top: 1px solid var(--rule-soft);">
                <span style="font-family: var(--display); font-style: italic; font-size: 15px; color: var(--sage-deep);">${k}</span>
                <span style="font-family: var(--serif); font-size: 16px; color: var(--ink);">${v}</span>
              </li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team teaser, quiet -->
  <section>
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">The team</span>
      <h2 class="reveal" style="margin-top: 18px;">Two co-founders who answer their own phones.</h2>
      <div class="team-grid mt-12" data-stagger>
        ${TEAM.map((m) => `
        <a href="pages/team/${m.slug}.html" class="team-card reveal">
          <div class="photo">
            ${m.photoMissing ? `
              <div style="position: absolute; inset: 0; background: var(--bg-deep); display: grid; place-items: center;">
                <div style="text-align: center;">
                  <div style="font-family: var(--display); font-size: clamp(60px, 6vw, 96px); color: var(--sage-deep); font-style: italic; line-height: 1; font-variation-settings: 'opsz' 144;">${m.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div style="font-family: var(--display); font-style: italic; font-size: 12px; color: var(--ink-mute); margin-top: 16px;">Portrait coming soon</div>
                </div>
              </div>
            ` : `<img src="assets/img/${m.photo}" alt="Portrait of ${m.name}, ${m.role}"/>`}
          </div>
          <div class="meta">
            <div>
              <div class="name">${m.name}</div>
              <div class="role">${m.role}</div>
            </div>
            <div class="open">Read more <span class="arrow">→</span></div>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- A few words from people we have worked with -->
  <section style="background: var(--bg-soft);">
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">In their own words</span>
      <h2 class="reveal" style="margin-top: 18px; max-width: 16ch;">From the families we have worked alongside.</h2>
      <div class="mt-12" style="display: flex; flex-direction: column; gap: 56px;">
        ${TESTIMONIALS.slice(0, 4).map((t) => `
        <figure class="reveal" style="border-top: 1px solid var(--rule-soft); padding-top: 32px;">
          <blockquote class="testimonial">${t.quote}</blockquote>
          <figcaption class="testimonial-meta">— ${t.name}, ${t.where}</figcaption>
        </figure>`).join("")}
      </div>
      <div class="mt-12 reveal"><a href="pages/testimonials.html" class="btn-text">Read more</a></div>
    </div>
  </section>

  <!-- Coverage — quiet list, not a marketing splash -->
  <section>
    <div class="wrap">
      <div class="split-narrow" style="align-items: start;">
        <div>
          <span class="eyebrow-line reveal">Where we work</span>
          <h2 class="reveal" style="margin-top: 18px;">Every Oregon county.</h2>
          <p class="lede reveal mt-6" style="max-width: 48ch;">
            We are anchored in Eugene and serve every Oregon county — from Multnomah to Wallowa. If you would like to see how we work in your specific county, the pages below cover each one in detail.
          </p>
          <div class="mt-8 reveal"><a href="pages/counties/index.html" class="btn-text">See all 36 counties</a></div>
        </div>
        <div class="reveal-img">
          <div class="frame frame-square">
            <img src="${IMG.landscape}" alt="Oregon's quiet expanse — the geography our practice covers" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Resources teaser -->
  <section style="background: var(--bg-cream);">
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">Reading, if it helps</span>
      <h2 class="reveal" style="margin-top: 18px;">Free guides we wrote for families.</h2>
      <p class="lede reveal mt-6" style="max-width: 56ch;">
        We wrote these because the same questions came up on every first call. They are written to be useful, not to sell — read what is helpful, skip the rest.
      </p>
      <div class="service-list mt-12">
        ${[
          ["The Oregon probate timeline", "resources/probate-timeline.html", "Month by month, what to expect between Letters and the final accounting."],
          ["Selling a probate home in Oregon", "resources/selling-probate-property.html", "When cash is right, when the market is right, and the eleven mistakes families regret most."],
          ["The executor's first 90 days", "resources/executor-checklist.html", "The exact order of operations we walk new executors through, with the deadlines that matter."],
        ].map(([title, href, body], i) => `
        <a href="pages/${href}" class="service-item reveal">
          <span class="s-num">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <div class="s-title">${title}</div>
            <p class="s-body">${body}</p>
          </div>
          <span class="s-link">Read <span class="arrow">→</span></span>
        </a>`).join("")}
      </div>
      <div class="mt-12 reveal"><a href="pages/resources/index.html" class="btn-text">See the full library</a></div>
    </div>
  </section>

  <!-- FAQ teaser -->
  <section>
    <div class="wrap-narrow">
      <span class="eyebrow-line reveal">Questions families ask</span>
      <h2 class="reveal" style="margin-top: 18px;">Direct answers, written plainly.</h2>
      <div class="faq mt-12">
        ${FAQ.slice(0, 5).map((f, i) => `
        <div class="faq-item${i === 0 ? " open" : ""} reveal">
          <button class="faq-q">${f.q}<span class="plus" aria-hidden="true"></span></button>
          <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
        </div>`).join("")}
      </div>
      <div class="mt-12 reveal"><a href="pages/faq.html" class="btn-text">All questions</a></div>
    </div>
  </section>

  <!-- Final CTA — calm -->
  <section class="tight">
    <div class="wrap-narrow">
      <div class="cta-block reveal text-center">
        <span class="eyebrow-line" style="display: inline-flex;">When you are ready</span>
        <h2 style="margin-top: 18px;">A first conversation costs nothing.</h2>
        <p class="lede" style="margin-left: auto; margin-right: auto;">Thirty minutes. We listen first. If we are the right team for the family we will say so. If we are not we will tell you that too — and refer you somewhere good.</p>
        <div class="btn-row" style="justify-content: center;">
          <a href="pages/contact.html" class="btn btn-primary">Start a quiet conversation <span class="arrow">→</span></a>
          <a href="tel:+15415253268" class="btn btn-paper">Call (541) 525-3268</a>
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
