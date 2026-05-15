/* =====================================================================
   Legal pages — privacy, terms, accessibility, disclaimer
   ===================================================================== */
"use strict";

const { ctaBlock } = require("./pages-marketing");

function legalPage({ slug, title, sub, body }) {
  return {
    outPath: `pages/legal/${slug}.html`,
    meta: {
      title,
      description: sub,
      breadcrumbs: [
        { label: "Home", href: "https://oregonprobateagent.com/" },
        { label: title, href: `https://oregonprobateagent.com/pages/legal/${slug}.html` },
      ],
    },
    body: `
  <section class="page-hero">
    <div class="wrap-narrow">
      <div class="crumbs reveal-fade"><a href="../../index.html">Home</a><span class="sep">/</span><a href="../about.html">Company</a><span class="sep">/</span><span>${title}</span></div>
      <h1 style="margin-top: 32px;">${title}</h1>
      <p class="lede" data-hero-fade>${sub}</p>
    </div>
  </section>

  <section>
    <div class="wrap-narrow">
      <article class="prose">${body}</article>
    </div>
  </section>

  ${ctaBlock("../contact.html")}
`,
  };
}

const PAGES = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    sub: "What we collect, why, and what we don't do with it. Effective May 2026.",
    body: `
      <p><strong>Effective date: May 1, 2026.</strong></p>
      <h2>Information we collect</h2>
      <p>We collect information you provide directly to us — through the contact form, by email, by phone, or in the course of an engagement. This includes name, contact information, the basic facts of the estate or trust matter you've described, and any documentation you share for the purpose of the engagement.</p>
      <p>We collect minimal analytical information when you visit this website — aggregate page views, browser type, and approximate geographic region — through standard analytics tools. We do not use cross-site tracking pixels, retargeting cookies, or third-party advertising networks.</p>
      <h2>How we use it</h2>
      <p>We use information you provide solely for the purpose of the engagement (or your inquiry): to assess fit, to coordinate with your attorney where applicable, to deliver the services you've engaged us for, and to communicate with you about those services. We do not sell, rent, or share your information with marketers.</p>
      <h2>How we share it</h2>
      <p>We share information only with the vendors and counsel directly involved in your engagement (estate-sale operators, contractors, title companies, attorneys you've authorized) and only the minimum necessary for them to do their job. We share documentation as required for the court accounting where the engagement involves a probate matter. We never share with third parties for marketing purposes.</p>
      <h2>How we store it</h2>
      <p>Engagement records are stored on the brokerage's secure document management system, which is industry-standard for real estate transactions. We retain records for the period required by Oregon real estate regulations and as required to support the estate accounting; we do not retain personal information beyond what is necessary.</p>
      <h2>Your rights</h2>
      <p>You can request a copy of the information we hold about you, request correction, or request deletion subject to our regulatory retention obligations, by emailing <a href="mailto:hello@oregonprobateagent.com">hello@oregonprobateagent.com</a>.</p>
      <h2>Children</h2>
      <p>This site is not directed to children under thirteen. We do not knowingly collect information from anyone under thirteen.</p>
      <h2>Changes</h2>
      <p>If we update this policy materially, we'll post the updated version on this page with a revised effective date. Continued use of this site after material changes constitutes acceptance.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <a href="mailto:hello@oregonprobateagent.com">hello@oregonprobateagent.com</a> or (541) 525-3268.</p>
    `,
  },
  {
    slug: "terms",
    title: "Terms of Use",
    sub: "Reasonable terms for using this website. Effective May 2026.",
    body: `
      <p><strong>Effective date: May 1, 2026.</strong></p>
      <h2>About this site</h2>
      <p>This website is published by The Operative Group, a real estate team operating under REAL Broker, LLC in Oregon. The information on this site is general in nature and is not legal, tax, accounting, or fiduciary advice. We are a real estate team — not attorneys, not accountants, not fiduciaries (except in the limited respects required of a real estate licensee).</p>
      <h2>No agency relationship is created by browsing</h2>
      <p>Browsing this site, downloading a guide, or submitting an intake form does not create a real estate agency relationship. Agency relationships are established only through a written, signed engagement agreement.</p>
      <h2>No legal or tax advice</h2>
      <p>Content on this site — including the resource library, glossary, and case studies — is published for educational purposes. Probate and estate law varies by state and individual circumstance. Always consult a licensed Oregon probate attorney for legal questions and a qualified tax professional for tax questions specific to your situation.</p>
      <h2>Accuracy</h2>
      <p>We make a good-faith effort to keep this site accurate and current. We do not warrant that any specific page is current as of the moment you read it. Always confirm time-sensitive specifics with a qualified professional.</p>
      <h2>Third-party links</h2>
      <p>Where this site links to third parties (court websites, vendor sites, partner organizations), we do so for convenience. We do not endorse, control, or assume responsibility for third-party content.</p>
      <h2>Intellectual property</h2>
      <p>The content on this site — text, photography, page layouts, code, and branding — is owned by The Operative Group or licensed to us. You're welcome to share links and short excerpts with attribution. Wholesale reproduction requires written permission.</p>
      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, The Operative Group, its members, and REAL Broker, LLC are not liable for any indirect, incidental, or consequential damages arising from your use of this site. Engaged-service liability is governed by the written engagement agreement and applicable Oregon real estate law.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Oregon, without regard to its conflict of laws principles.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: <a href="mailto:hello@oregonprobateagent.com">hello@oregonprobateagent.com</a>.</p>
    `,
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    sub: "Our ongoing commitment to a site usable by everyone.",
    body: `
      <h2>Our commitment</h2>
      <p>We believe a probate real estate website should be usable by every person navigating the most stressful months of their life — including people who use screen readers, keyboard navigation, voice control, or any other assistive technology. We're committed to meeting and maintaining WCAG 2.1 Level AA conformance as a baseline.</p>
      <h2>What we've built in</h2>
      <p>Semantic HTML throughout. Proper landmark roles. Adequate color contrast on body text and interactive elements. Keyboard-accessible navigation, including the mobile menu and the FAQ accordions. Skip links to main content. Alt text on every functional image. Focus indicators that are visible against every background. Respect for the user's prefers-reduced-motion setting — all animations and parallax effects automatically disable when the user has indicated a motion preference.</p>
      <h2>What we know we still need to improve</h2>
      <p>We treat accessibility as a continuous practice, not a one-time audit. If you encounter any barrier on this site — anything that prevents you from reading, navigating, or accessing the information you need — we want to know about it directly.</p>
      <h2>How to reach us</h2>
      <p>Email <a href="mailto:hello@oregonprobateagent.com">hello@oregonprobateagent.com</a> with a description of the issue and the page you encountered it on. We respond within one business day and typically resolve within one to two weeks depending on complexity.</p>
      <p>Alternative formats: any content on this site is available in plain-text, large-print, or read-aloud format by request. Call (541) 525-3268 and we'll walk you through it directly.</p>
    `,
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    sub: "Important context about the content of this website.",
    body: `
      <h2>Educational only</h2>
      <p>Every guide, glossary entry, case study, and FAQ on this site is published for educational and informational purposes. None of it constitutes legal advice, tax advice, accounting advice, fiduciary advice, or financial planning advice. Probate law, trust law, estate tax, and real estate regulations vary by jurisdiction and by individual circumstance.</p>
      <h2>Case studies and testimonials</h2>
      <p>Case studies are anonymized real engagements — names, exact addresses, and small identifying details have been adjusted with the families' consent. Sale prices, timelines, and outcomes are real and unaltered. Testimonials are published with explicit written permission from named parties; some last names are abbreviated to protect privacy. Past results do not guarantee future outcomes in any individual estate. Every estate is different.</p>
      <h2>Real estate licensing</h2>
      <p>The Operative Group operates under REAL Broker, LLC and is licensed in the State of Oregon. We do not practice real estate outside of Oregon, and we do not refer business across state lines outside of the standard MLS cooperation infrastructure.</p>
      <h2>Not an attorney</h2>
      <p>We are real estate specialists with extensive probate-specific training. We are not attorneys. We do not draft, review, or interpret legal documents in any way that would constitute the practice of law. Every estate we work on involves a licensed Oregon probate attorney — either one the family already has or one we refer.</p>
      <h2>Photography</h2>
      <p>Stock photography on this site is licensed from Unsplash and similar editorial sources. Photography of identifiable properties associated with case studies is either used with the family's permission or has been adjusted to prevent property identification.</p>
      <h2>Forward-looking statements</h2>
      <p>Any forward-looking statements on this site — projected timelines, anticipated buyer behavior, market characterizations — represent our best professional judgment based on current experience. They are not guarantees.</p>
    `,
  },
];

function all() {
  return PAGES.map(legalPage);
}

module.exports = { all };
