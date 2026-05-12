/* =====================================================================
   Marketing pages: about, services, process, team, contact, faq, testimonials
   ===================================================================== */
"use strict";

const { SERVICES, TEAM, TESTIMONIALS, FAQ, OREGON_CITIES } = require("./data");
const { IMG, serviceIcon } = require("./pages-core");

/* ---------- About ---------- */
function about() {
  return {
    outPath: "pages/about.html",
    meta: {
      title: "About — The Operative Group",
      description: "The story, the standards, and the operational philosophy behind Oregon's only fully probate-specialized real estate team. Co-founded by Daniel Gandee and Edward Zulyevic at REAL Brokerage.",
      ogImage: IMG.meeting,
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "About", href: "https://exitprobateteam.com/pages/about.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About The Operative Group",
        url: "https://exitprobateteam.com/pages/about.html",
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap-narrow">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>About</span></div>
      <span class="eyebrow-line reveal" style="margin-top: 24px; display: inline-flex;">About the team</span>
      <h1 class="reveal" style="margin-top: 18px;">
        <span class="line-mask"><span>A small Oregon team</span></span>
        <span class="line-mask"><span>helping families</span></span>
        <span class="line-mask"><span>through one of</span></span>
        <span class="line-mask"><span>the <em class="serif-italic-accent">hardest</em> parts.</span></span>
      </h1>
      <p class="lede reveal" style="margin-top: 28px;">
        We are licensed Oregon real estate agents specializing in probate, trust, and conservatorship property. We are not attorneys and do not give legal advice — for legal questions we refer to a probate attorney we trust in your county.
      </p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap-narrow">
      <div class="frame frame-cinema reveal-img">
        <img src="${IMG.elderlyCouple}" alt="An older Oregon couple at home — the families our practice exists to serve"/>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split-5-7">
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span>Origin</div>
        </div>
        <div class="prose reveal" style="font-size: 21px;">
          <p>The Operative Group started in a Eugene coffee shop in 2019 when Daniel Gandee — already a licensed Oregon real estate broker — sat across from his fourth executor that quarter who had been talked into the wrong listing strategy by a generalist agent.</p>
          <p>Three things had happened, in roughly this order: the property had sat on the market for ninety days at a price that scared off cash buyers, the heirs were arguing because nobody had explained the math, and the probate file was bleeding carrying costs while the agent kept suggesting "small price reductions." The estate lost an estimated $48,000 by the time it closed.</p>
          <p>That was the night Dan called Ed Zulyevic — a long-time operational partner who had built and broken his teeth on multi-trade renovation logistics — and said the obvious out loud: <strong>Oregon probate families deserve a real estate team that does only this.</strong></p>
          <p>Six years later, that team is the one you're looking at.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="eyebrow reveal text-center" style="text-align: center; display: block;"><span class="dot"></span>What we stand on</div>
      <h2 class="reveal text-center" style="margin-top: 16px; text-align: center;">Five non-negotiables.</h2>
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-top: 56px;" class="standards-grid" data-stagger>
        ${[
          ["Probate first", "We don't moonlight as probate agents. This is our entire practice."],
          ["CPRES certified", "Specialized training in probate real estate law and process."],
          ["Documented", "Every decision documented for the court accounting."],
          ["Vendor-vetted", "Bench partners are bonded, licensed, insured. Always."],
          ["Compassion default", "Grief is not a sales objection. It's the room we work in."],
        ].map(([h, b], i) => `
        <div class="card reveal" data-stagger-item style="background: var(--paper);">
          <div class="eyebrow" style="color: var(--accent-deep);">0${i + 1}</div>
          <h3 style="margin-top: 16px; font-size: clamp(20px, 1.8vw, 26px);">${h}</h3>
          <p style="font-family: var(--serif); color: var(--ink-soft); font-size: 15px; margin-top: 12px; line-height: 1.5;">${b}</p>
        </div>`).join("")}
        <style>@media (max-width: 1080px) { .standards-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 540px) { .standards-grid { grid-template-columns: 1fr !important; } }</style>
      </div>
    </div>
  </section>

  <section class="noir-section grain">
    <div class="wrap-narrow text-center">
      <div class="eyebrow reveal" style="color: var(--accent);"><span style="background: var(--accent); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>The standard</div>
      <p class="testimonial reveal mt-8" style="color: var(--paper); font-size: clamp(28px, 3.6vw, 56px); line-height: 1.18;">
        If your probate attorney can't tell us apart from another good probate attorney in tone and rigor, we're doing it right.
      </p>
      <div class="testimonial-meta reveal" style="color: rgba(253,250,243,0.6);">— Internal Operating Principle</div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span>Brokerage</div>
          <h2 style="margin-top: 16px;">REAL Broker, LLC</h2>
          <p class="lede mt-8">
            The Operative Group is a team within REAL Broker — a publicly-traded, technology-forward brokerage operating across the United States and Canada. We chose REAL because their backend lets us do something most boutique teams can't: deliver enterprise-grade transaction infrastructure to a small, specialized practice.
          </p>
          <ul class="mt-8" style="font-family: var(--serif); font-size: 17px; color: var(--ink-soft); line-height: 1.7;">
            <li>· Statewide Oregon coverage with national investor reach</li>
            <li>· Cross-state buyer pipeline for out-of-Oregon investors</li>
            <li>· Digital transaction infrastructure for remote executors</li>
            <li>· Compliance and trust-account backbone for probate sales</li>
          </ul>
        </div>
        <div class="frame frame-square reveal-img">
          <img src="${IMG.desk}" alt="The work desk where probate files live — paper, coffee, and a phone that always rings" data-img-scroll/>
        </div>
      </div>
    </div>
  </section>

  ${ctaBlock()}
`,
  };
}

/* ---------- Services overview ---------- */
function servicesOverview() {
  return {
    outPath: "pages/services.html",
    meta: {
      title: "Services — Oregon Probate Real Estate",
      description: "Six coordinated services for Oregon probate real estate: cash buyer network, strategic market listing, estate cleanout, vacant property watch, heir location and vendor coordination, and executor advisory.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Services", href: "https://exitprobateteam.com/pages/services.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "Service",
          position: i + 1,
          name: s.title,
          description: s.short,
          url: `https://exitprobateteam.com/pages/services/${s.slug}.html`,
          provider: { "@type": "LocalBusiness", name: "The Operative Group" },
          areaServed: { "@type": "State", name: "Oregon" },
        })),
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>Services</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>Six tools.</span></span>
        <span class="line-mask"><span>One <em class="serif-italic-accent">coordinated</em></span></span>
        <span class="line-mask"><span>bench.</span></span>
      </h1>
      <p class="lede" data-hero-fade>Choose the engagement that fits the estate — or let us recommend one after a 30-minute call. There is no version of this conversation that costs you anything.</p>
    </div>
  </section>

  ${SERVICES.map((s, i) => `
  <section${i % 2 === 1 ? " style=\"background: var(--bg-deep);\"" : ""}>
    <div class="wrap">
      <div class="split${i % 2 === 0 ? "-7-5" : "-5-7"}">
        <div${i % 2 === 1 ? " style=\"order: 2;\"" : ""}>
          <div class="eyebrow reveal"><span class="dot"></span>0${i + 1} / 06 · ${s.title}</div>
          <h2 class="reveal" style="margin-top: 18px; max-width: 18ch;">${s.headline}</h2>
          <p class="lede reveal mt-8">${s.body}</p>
          <ul class="mt-8 reveal" style="font-family: var(--serif); font-size: 17px; color: var(--ink-soft); line-height: 1.7; list-style: none; padding: 0;">
            ${s.benefits.map((b) => `<li style="display:flex; gap:12px; padding: 6px 0;"><span style="color: var(--accent-deep); font-family: var(--mono); font-size: 12px; padding-top: 6px;">●</span>${b}</li>`).join("")}
          </ul>
          <p class="mt-8 reveal" style="font-family: var(--mono); font-size: 13px; letter-spacing: 0.04em; color: var(--ink-mute); border-left: 3px solid var(--accent); padding-left: 14px;">${s.fit}</p>
          <div class="mt-12 reveal">
            <a href="services/${s.slug}.html" class="btn btn-primary" data-magnetic>Read more <span class="arrow">→</span></a>
          </div>
        </div>
        <div class="frame frame-tall reveal-img"${i % 2 === 1 ? " style=\"order: 1;\"" : ""}>
          <img src="${[IMG.craftsman, IMG.papers, IMG.kitchen, IMG.porch, IMG.river, IMG.desk][i]}" alt="${s.title} — illustrative imagery" data-img-scroll/>
          <div class="caption">0${i + 1} · ${s.title}</div>
        </div>
      </div>
    </div>
  </section>`).join("")}

  ${ctaBlock()}
`,
  };
}

/* ---------- Process ---------- */
function process() {
  const steps = [
    ["Intake & triage", "We open the file. The first call is 30 minutes. We listen first. We read the court order if there is one. We ask seven specific questions about the property and the estate. By the end of the call, we either tell you exactly what to do next (even if it isn't with us) or we send you a written engagement memo with a path forward.", "Day 1"],
    ["Coordinate counsel", "If the personal representative doesn't have a probate attorney yet, we refer two or three options in the right county based on the complexity of the estate. We do not practice law. We coordinate aggressively with the attorney once one is engaged so the real estate and the legal work move in lockstep.", "Days 1–7"],
    ["Strategy memo", "One document the family and the attorney both work from. It contains: pricing analysis, cash-vs-listing recommendation with a net-proceeds projection on both paths, cleanout scope, vendor needs, timeline against the probate calendar, and the three biggest risks to the estate's bottom line. Decisions get made off this memo, not off vibes.", "Days 7–14"],
    ["Property prep", "Vacant-property protection from day one. Cleanout coordinated through bonded estate-sale and haul partners. Documented donations for the estate accounting. Light pre-listing prep — only what generates more than it costs. Professional photography, 3D walk-through, drone where relevant. All run through the vendor bench, all signed off by the personal representative.", "Days 14–45"],
    ["Market or close", "Two paths. If listing: surgical MLS pricing, multi-channel marketing to local and out-of-state buyers, weekly digest to the executor. If cash: 24-hour offer rotation from pre-approved investors with proof of funds, 7–14 day close. Both paths run with full transparency on every offer and every comp.", "Days 30–90"],
    ["Closing & file close", "Title coordination. Attorney-coordinated contract. Court confirmation if required. Funds disbursed through the estate account. Documentation packaged for the final accounting. Vendor bench released. File closed. We don't ghost on the back end — most of our referrals come from attorneys we worked with on the front end.", "Day of closing"],
  ];

  return {
    outPath: "pages/process.html",
    meta: {
      title: "Our Process — Six-Step Probate File Protocol",
      description: "The exact six-step protocol we run on every Oregon probate real estate engagement, from intake to file close. Predictable process equals predictable outcomes.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Process", href: "https://exitprobateteam.com/pages/process.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How The Operative Group handles an Oregon probate real estate engagement",
        description: "Six-step protocol from intake to file close.",
        totalTime: "P90D",
        step: steps.map(([n, d], i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: n,
          text: d,
        })),
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>Process</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>A six-step</span></span>
        <span class="line-mask"><span><em class="serif-italic-accent">file,</em></span></span>
        <span class="line-mask"><span>not a sales</span></span>
        <span class="line-mask"><span>funnel.</span></span>
      </h1>
      <p class="lede" data-hero-fade>Predictable process equals predictable outcomes. Every engagement runs the same six-step protocol — adapted to the estate.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="process-list" style="border-top: 1px solid var(--rule);">
        ${steps.map(([title, body, when], i) => `
        <div class="process-step reveal" style="grid-template-columns: 100px 1fr 140px;">
          <div>
            <div class="step-num">0${i + 1} / 06</div>
            <div style="font-family: var(--mono); font-size: 11px; color: var(--accent-deep); letter-spacing: 0.14em; margin-top: 8px; text-transform: uppercase;">${when}</div>
          </div>
          <div>
            <div class="step-title">${title}</div>
            <p class="step-body" style="max-width: 64ch;">${body}</p>
          </div>
          <span class="step-arrow">→</span>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap-narrow">
      <div class="eyebrow reveal"><span class="dot"></span>What you'll never get</div>
      <h2 class="reveal" style="margin-top: 16px;">Three things we promise <em class="serif-italic-accent">not</em> to do.</h2>
      <div class="mt-12" data-stagger>
        ${[
          ["Pressure you into a listing on the first call.", "We genuinely don't care if you list with us. We care that you make the right call for the estate. If the right call isn't us, we'll say so."],
          ["Sell the property to one of our own investor relationships without telling you.", "Every offer's source is disclosed. Every comp is shared. Every conflict is named. The court accounting requires it. So do we."],
          ["Go silent between offer and close.", "Weekly executor digest, minimum. Faster when something is moving. The number-one complaint about probate agents is they vanish at signed contract. We do the opposite."],
        ].map(([h, b], i) => `
        <div class="reveal" data-stagger-item style="border-top: 1px solid var(--rule); padding: 28px 0;">
          <div style="display: grid; grid-template-columns: 60px 1fr; gap: 24px; align-items: start;">
            <div style="font-family: var(--mono); font-size: 12px; color: var(--terracotta); letter-spacing: 0.14em;">NO 0${i + 1}</div>
            <div>
              <h3 style="font-size: clamp(22px, 2.2vw, 30px);">${h}</h3>
              <p class="prose mt-4" style="font-size: 17px;">${b}</p>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock()}
`,
  };
}

/* ---------- Team ---------- */
function team() {
  return {
    outPath: "pages/team.html",
    meta: {
      title: "Team — The Operative Group",
      description: "Meet the operatives behind Oregon's only fully probate-specialized real estate team. Co-founders Daniel Gandee (CPRES) and Edward Zulyevic.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Team", href: "https://exitprobateteam.com/pages/team.html" },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>Team</span></div>
      <h1 style="margin-top: 32px; max-width: 16ch;">
        <span class="line-mask"><span>The</span></span>
        <span class="line-mask"><span><em class="serif-italic-accent">operatives.</em></span></span>
      </h1>
      <p class="lede" data-hero-fade>Two co-founders. One coordinated bench. Both of us answer our own phones.</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap">
      <div class="team-grid" data-stagger>
        ${TEAM.map((m) => `
        <a href="team/${m.slug}.html" class="team-card tilt" data-stagger-item>
          <div class="photo">
            ${m.photoMissing ? `
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #1C1B17 0%, #0E0D0B 100%); display: grid; place-items: center;">
                <div style="text-align: center;">
                  <div style="font-family: var(--display); font-size: clamp(80px, 8vw, 140px); color: var(--accent); font-style: italic; line-height: 1; opacity: 0.92;">${m.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div style="font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(253,250,243,0.5); margin-top: 18px;">Headshot · Coming soon</div>
                </div>
              </div>
            ` : `<img src="../assets/img/${m.photo}" alt="Portrait of ${m.name}"/>`}
          </div>
          <div class="meta">
            <div>
              <div class="name">${m.name}</div>
              <div class="role">${m.role}</div>
              <div style="font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-top: 12px;">${m.short}</div>
            </div>
            <div class="open" aria-hidden="true">→</div>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap-narrow text-center">
      <div class="eyebrow reveal"><span class="dot"></span>The bench</div>
      <h2 class="reveal" style="margin-top: 16px;">Behind the founders, a <em class="serif-italic-accent">deep vendor bench.</em></h2>
      <p class="lede reveal mt-8">Bonded estate-sale operators, licensed haulers, elder-law attorneys, estate planners, title officers, 1031 facilitators, contractors, handymen, forensic genealogists, and 24-hour locksmiths. We don't hire them — we vet them, document them, and rotate them based on county and complexity. Most have been with us five years or more.</p>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap">
      <div class="eyebrow reveal text-center" style="text-align: center; display: block;"><span class="dot"></span>Active vendor categories</div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 48px;" class="vendors-grid" data-stagger>
        ${["Probate attorneys","Elder-law attorneys","Estate planners","Title officers","1031 facilitators","Estate sale operators","Bonded haulers","Donation channels","Trauma cleanup","Licensed contractors","Handymen","HVAC technicians","Locksmiths","Forensic genealogists","Skip tracers","Drone photographers","3D tour operators","Stagers","Landscapers","Snow & lawn"].map((v) => `
        <div data-stagger-item style="background: var(--paper); border: 1px solid var(--rule-soft); border-radius: var(--radius); padding: 18px 20px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); display: flex; align-items: center; gap: 10px;"><span style="width:6px;height:6px;background:var(--accent);border-radius:50%;"></span>${v}</div>`).join("")}
        <style>@media (max-width: 1080px) { .vendors-grid { grid-template-columns: repeat(3, 1fr) !important; } } @media (max-width: 720px) { .vendors-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 480px) { .vendors-grid { grid-template-columns: 1fr !important; } }</style>
      </div>
    </div>
  </section>

  ${ctaBlock()}
`,
  };
}

/* ---------- Contact ---------- */
function contact() {
  return {
    outPath: "pages/contact.html",
    meta: {
      title: "Contact — Start the Conversation",
      description: "Reach the Exit Probate Team. Call (541) 525-3268, email hello@exitprobateteam.com, or send the estate details through the secure intake form. 30-minute consultation, no retainer, no pressure.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Contact", href: "https://exitprobateteam.com/pages/contact.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: "https://exitprobateteam.com/pages/contact.html",
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>Contact</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>Start the</span></span>
        <span class="line-mask"><span><em class="serif-italic-accent">conversation.</em></span></span>
      </h1>
      <p class="lede" data-hero-fade>Thirty minutes. No retainer. No pressure. Tell us about the estate and we'll tell you whether we're the right call.</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap">
      <div class="split-5-7" style="align-items: start;">
        <div>
          <div class="card" style="background: var(--noir); color: var(--paper);">
            <div class="eyebrow" style="color: var(--accent);"><span style="background: var(--accent); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>Direct lines</div>
            <h3 style="color: var(--paper); margin-top: 18px;">We answer our own phones.</h3>
            <div class="mt-12" style="display: flex; flex-direction: column; gap: 18px;">
              <a href="tel:+15415253268" style="color: var(--paper); font-family: var(--display); font-size: 32px; letter-spacing: -0.01em; text-decoration: none;">(541) 525-3268</a>
              <a href="mailto:hello@exitprobateteam.com" style="color: var(--paper); font-family: var(--serif); font-size: 18px;">hello@exitprobateteam.com</a>
              <div style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(253,250,243,0.55); margin-top: 6px;">Eugene · Oregon · Statewide coverage</div>
            </div>
            <div class="mt-12" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;">
              <div class="eyebrow" style="color: rgba(253,250,243,0.55);">Hours</div>
              <div style="font-family: var(--serif); font-size: 16px; color: rgba(253,250,243,0.78); margin-top: 10px; line-height: 1.7;">
                Mon–Fri · 8a–6p PT<br>Sat · 10a–4p PT by appointment<br><span style="color: var(--accent);">After-hours: emergencies always</span>
              </div>
            </div>
          </div>
        </div>

        <form id="intakeForm" class="card" style="display: flex; flex-direction: column; gap: 22px;">
          <div class="eyebrow"><span class="dot"></span>Secure intake · We are real estate agents, not attorneys</div>
          <h3 style="margin-top: 4px;">Tell us about the estate.</h3>
          <p style="font-family: var(--serif); color: var(--ink-soft); font-size: 16px;">Whatever you can share. We'll respond within one business day. (For legal questions, we'll refer you to a probate attorney — we coordinate but don't practice law.)</p>
          <div class="split" style="gap: 20px;">
            <div class="field"><label>Your name</label><input type="text" name="name" required></div>
            <div class="field"><label>Your relationship to the estate</label>
              <select name="role">
                <option>Personal representative / executor</option>
                <option>Trustee</option>
                <option>Heir / beneficiary</option>
                <option>Probate attorney</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="split" style="gap: 20px;">
            <div class="field"><label>Email</label><input type="email" name="email" required></div>
            <div class="field"><label>Phone</label><input type="tel" name="phone"></div>
          </div>
          <div class="split" style="gap: 20px;">
            <div class="field"><label>Property county</label>
              <select name="county">
                <option>Multnomah</option><option>Washington</option><option>Clackamas</option><option>Lane</option><option>Marion</option><option>Jackson</option><option>Deschutes</option><option>Linn</option><option>Yamhill</option><option>Other / multiple</option>
              </select>
            </div>
            <div class="field"><label>Property city</label><input type="text" name="city"></div>
          </div>
          <div class="field"><label>The situation in your own words</label><textarea name="msg" rows="6" placeholder="No need to be polished. Stage of probate, property type, anything pressing."></textarea></div>
          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            <button type="submit" class="btn btn-primary" data-magnetic>Send <span class="arrow">→</span></button>
            <span style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute);">No retainer · No pressure · Real estate agents (not attorneys)</span>
          </div>
          <div id="intakeStatus" role="status" aria-live="polite" style="display:none; padding: 14px 16px; border-radius: var(--radius); font-family: var(--mono); font-size: 12px; letter-spacing: 0.04em;"></div>
        </form>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="cta-block">
        <div class="eyebrow" style="color: var(--accent);"><span style="background: var(--accent); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>For attorneys & fiduciaries</div>
        <h2 style="margin-top: 18px;">Working an estate file? We integrate directly with your practice.</h2>
        <p class="lede">We take referrals from probate, trust, and elder-law attorneys statewide. Our weekly executor digests are CC'd to counsel by default. Reach out through your normal channels or call us direct.</p>
        <div class="btn-row">
          <a href="tel:+15415253268" class="btn btn-accent" data-magnetic>Call us directly <span class="arrow">→</span></a>
          <a href="mailto:hello@exitprobateteam.com" class="btn btn-ghost" style="color: var(--paper); border-color: rgba(255,255,255,0.3);">Email attorney intake</a>
        </div>
      </div>
    </div>
  </section>
`,
  };
}

/* ---------- FAQ page ---------- */
function faq() {
  return {
    outPath: "pages/faq.html",
    meta: {
      title: "FAQ — Oregon Probate Real Estate Answers",
      description: "Direct answers to the questions executors, trustees, and heirs actually ask in their first Oregon probate real estate call. No legalese, no filler.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "FAQ", href: "https://exitprobateteam.com/pages/faq.html" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>FAQ</span></div>
      <h1 style="margin-top: 32px; max-width: 16ch;">
        <span class="line-mask"><span>Asked.</span></span>
        <span class="line-mask"><span><em class="serif-italic-accent">Answered.</em></span></span>
      </h1>
      <p class="lede" data-hero-fade>The questions executors actually ask in the first call. No legalese, no filler, no upsell.</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap-narrow">
      <div class="faq">
        ${FAQ.map((f, i) => `
        <div class="faq-item${i === 0 ? " open" : ""} reveal">
          <button class="faq-q">${f.q}<span class="plus" aria-hidden="true"></span></button>
          <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  ${ctaBlock()}
`,
  };
}

/* ---------- Testimonials ---------- */
function testimonials() {
  return {
    outPath: "pages/testimonials.html",
    meta: {
      title: "Testimonials — Executors, Attorneys, and Heirs",
      description: "Voices from the file — Oregon executors, probate attorneys, and heirs who worked with The Operative Group through the most time-sensitive moments of their estate.",
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Testimonials", href: "https://exitprobateteam.com/pages/testimonials.html" },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../index.html">Home</a><span class="sep">/</span><span>Testimonials</span></div>
      <h1 style="margin-top: 32px; max-width: 14ch;">
        <span class="line-mask"><span>Voices from</span></span>
        <span class="line-mask"><span>the <em class="serif-italic-accent">file.</em></span></span>
      </h1>
      <p class="lede" data-hero-fade>The executors, trustees, attorneys, and heirs who walked through their hardest months with us — and what they said after.</p>
    </div>
  </section>

  <section class="tight">
    <div class="wrap">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 64px);" class="t-grid" data-stagger>
        ${TESTIMONIALS.map((t) => `
        <figure data-stagger-item style="border-top: 1px solid var(--rule); padding-top: 36px;">
          <blockquote class="testimonial">${t.quote}</blockquote>
          <figcaption class="testimonial-meta">${t.name} · ${t.where}</figcaption>
        </figure>`).join("")}
      </div>
      <style>@media (max-width: 880px) { .t-grid { grid-template-columns: 1fr !important; } }</style>
    </div>
  </section>

  <section>
    <div class="wrap-narrow">
      <div class="card" style="text-align: center;">
        <div class="eyebrow"><span class="dot"></span>Note on privacy</div>
        <p class="prose mt-4" style="margin: 0 auto;">Every testimonial above is published with explicit written permission from the named party. Some names are abbreviated to protect the privacy of the estate, the heirs, or the property's prior occupants. We never publish anything tied to an open probate file.</p>
      </div>
    </div>
  </section>

  ${ctaBlock()}
`,
  };
}

/* ---------- Reusable CTA block ---------- */
/* contactHref defaults assume page lives at /pages/<file>.html (sibling) */
function ctaBlock(contactHref = "contact.html") {
  return `
  <section class="tight">
    <div class="wrap">
      <div class="cta-block reveal">
        <div class="eyebrow" style="color: var(--sage);"><span style="background: var(--sage); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>When you are ready</div>
        <h2 style="margin-top: 18px;">A first conversation costs nothing.</h2>
        <p class="lede">Thirty minutes. We listen first. If we are the right team we will say so. If we are not we will tell you that too — and refer you somewhere good.</p>
        <div class="btn-row">
          <a href="${contactHref}" class="btn btn-accent">Start a quiet conversation <span class="arrow">→</span></a>
          <a href="tel:+15415253268" class="btn btn-ghost" style="color: var(--paper); border-color: rgba(255,255,255,0.3);">Call (541) 525-3268</a>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = { about, servicesOverview, process, team, contact, faq, testimonials, ctaBlock };
