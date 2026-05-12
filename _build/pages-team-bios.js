/* =====================================================================
   Individual team bio pages
   ===================================================================== */
"use strict";

const { TEAM } = require("./data");
const { IMG } = require("./pages-core");
const { ctaBlock } = require("./pages-marketing");

function bio(m) {
  return {
    outPath: `pages/team/${m.slug}.html`,
    meta: {
      title: `${m.name} — ${m.role}`,
      description: `${m.name}, ${m.role}. ${m.short}. Co-founder of The Operative Group — Oregon's Certified Probate Real Estate Specialists.`,
      ogImage: `https://exitprobateteam.com/assets/img/${m.photo}`,
      breadcrumbs: [
        { label: "Home", href: "https://exitprobateteam.com/" },
        { label: "Team", href: "https://exitprobateteam.com/pages/team.html" },
        { label: m.name, href: `https://exitprobateteam.com/pages/team/${m.slug}.html` },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        worksFor: { "@type": "Organization", name: "The Operative Group" },
        image: `https://exitprobateteam.com/assets/img/${m.photo}`,
        url: `https://exitprobateteam.com/pages/team/${m.slug}.html`,
        knowsAbout: ["Oregon probate real estate", "Trust property liquidation", "Conservatorship sales"],
        hasCredential: m.creds.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })),
      },
    },
    body: `
  <section class="page-hero">
    <div class="wrap">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="../team.html">Team</a><span class="sep">/</span><span>${m.name}</span></div>
      <div class="split" style="margin-top: 32px; align-items: end;">
        <div>
          <div class="pill" data-hero-fade><span class="dot"></span>${m.short}</div>
          <h1 style="margin-top: 28px;">
            <span class="line-mask"><span>${m.name.split(" ")[0]}</span></span>
            <span class="line-mask"><span><em class="serif-italic-accent">${m.name.split(" ").slice(1).join(" ")}.</em></span></span>
          </h1>
          <p class="lede" data-hero-fade style="margin-top: 24px;">${m.role}</p>
          <div data-hero-fade style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px;">
            <a href="../contact.html" class="btn btn-primary" data-magnetic>Reach ${m.name.split(" ")[0]} directly <span class="arrow">→</span></a>
          </div>
        </div>
        <div class="frame frame-portrait reveal-img" style="border-radius: var(--radius-xl); background: var(--noir); position: relative; overflow: hidden;">
          ${m.photoMissing ? `
          <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #1C1B17 0%, #0E0D0B 100%); display: grid; place-items: center;">
            <div style="text-align: center;">
              <div style="font-family: var(--display); font-size: clamp(100px, 10vw, 180px); color: var(--accent); font-style: italic; line-height: 1; opacity: 0.92;">${m.name.split(" ").map((n) => n[0]).join("")}</div>
              <div style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(253,250,243,0.55); margin-top: 22px;">Headshot · Coming soon</div>
            </div>
          </div>
          ` : `<img src="../../assets/img/${m.photo}" alt="Portrait of ${m.name}" data-img-scroll/>`}
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="split-5-7">
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span>Bio</div>
        </div>
        <div class="prose reveal" style="font-size: 20px;">
          ${m.bio.map((p) => `<p>${p}</p>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-deep);">
    <div class="wrap-narrow">
      <div class="eyebrow reveal"><span class="dot"></span>Credentials</div>
      <h2 class="reveal" style="margin-top: 16px;">Specialty training the file demands.</h2>
      <div class="mt-12" data-stagger>
        ${m.creds.map((c, i) => `
        <div data-stagger-item style="display: grid; grid-template-columns: 56px 1fr; gap: 24px; padding: 22px 0; border-top: 1px solid var(--rule); font-family: var(--serif); font-size: 19px; color: var(--ink);">
          <div style="font-family: var(--mono); font-size: 13px; color: var(--accent-deep); letter-spacing: 0.12em;">0${i + 1}</div>
          <div>${c}</div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <section class="noir-section grain">
    <div class="wrap-narrow text-center">
      <div class="eyebrow reveal" style="color: var(--accent);"><span style="background: var(--accent); display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>In ${m.name.split(" ")[0]}'s own words</div>
      <p class="testimonial reveal mt-8" style="color: var(--paper); font-size: clamp(28px, 3.6vw, 56px); line-height: 1.18;">${m.quote}</p>
      <div class="testimonial-meta reveal" style="color: rgba(253,250,243,0.6);">— ${m.name}</div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="specs reveal">
        <div><dt>Territory</dt><dd>${m.territory}</dd></div>
        <div><dt>Role</dt><dd>${m.role.split("·")[0].trim()}</dd></div>
        <div><dt>Specialty focus</dt><dd>${m.role.split("·")[1] ? m.role.split("·")[1].trim() : "Probate real estate"}</dd></div>
        <div><dt>Brokerage</dt><dd>REAL Broker, LLC</dd></div>
      </div>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

function all() {
  return TEAM.map(bio);
}

module.exports = { all };
