#!/usr/bin/env node
/* =====================================================================
   build.js — Static site generator for Oregon Probate Agent
   Run:  node _build/build.js
   Emits: all HTML files at the correct paths, plus sitemap.xml + robots.txt
   ===================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");

const { page, SITE } = require("./partials");
const Home = require("./pages-core");
const Mkt  = require("./pages-marketing");
const Svc  = require("./pages-services-detail");
const Bios = require("./pages-team-bios");
const Loc  = require("./pages-locations");
const Res  = require("./pages-resources");
const Cse  = require("./pages-case-studies");
const Lgl  = require("./pages-legal");

/* root = parent of _build/ = /Oregon Probate expert/ */
const ROOT = path.resolve(__dirname, "..");

function writeFile(rel, contents) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, contents, "utf8");
}

function emit(p) {
  const html = page({
    outPath: p.outPath,
    meta: p.meta || {},
    body: p.body,
    currentPath: p.outPath,
  });
  writeFile(p.outPath, html);
  return p.outPath;
}

/* ---------- Collect all page descriptors ---------- */
const pages = [
  Home.home(),
  Mkt.about(),
  Mkt.servicesOverview(),
  Mkt.process(),
  Mkt.team(),
  Mkt.contact(),
  Mkt.faq(),
  Mkt.testimonials(),
  ...Svc.all(),
  ...Bios.all(),
  ...Loc.all(),
  ...Res.all(),
  ...Cse.all(),
  ...Lgl.all(),
];

/* ---------- Write all pages ---------- */
const written = pages.map(emit);

/* ---------- sitemap.xml ---------- */
function urlEntry(p) {
  const loc = `${SITE.url}/${p === "index.html" ? "" : p}`;
  const lastmod = new Date().toISOString().split("T")[0];
  // Priority: home highest, marketing core high, SEO pages medium, legal low
  let priority = 0.5;
  if (p === "index.html") priority = 1.0;
  else if (/^pages\/(about|services|process|team|contact|faq|testimonials)\.html$/.test(p)) priority = 0.9;
  else if (/^pages\/services\//.test(p)) priority = 0.85;
  else if (/^pages\/counties\//.test(p) || /^pages\/cities\//.test(p)) priority = 0.8;
  else if (/^pages\/case-studies\//.test(p) || /^pages\/resources\//.test(p)) priority = 0.75;
  else if (/^pages\/team\//.test(p)) priority = 0.8;
  else if (/^pages\/legal\//.test(p)) priority = 0.3;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${written.map(urlEntry).join("\n")}
</urlset>
`;
writeFile("sitemap.xml", sitemap);

/* ---------- robots.txt ---------- */
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
writeFile("robots.txt", robots);

/* ---------- humans.txt — credit and craft signal ---------- */
const humans = `/* TEAM */
The Operative Group
Co-founders: Daniel Gandee · Edward Zulyevic
Site: https://oregonprobateagent.com
Location: Eugene, Oregon

/* SITE */
Built with: HTML5, CSS3, vanilla JavaScript, GSAP + ScrollTrigger
Typography: Fraunces, Newsreader, Instrument Sans, JetBrains Mono
Photography: licensed editorial via Unsplash
Brokerage: REAL Broker, LLC
`;
writeFile("humans.txt", humans);

/* ---------- Summary ---------- */
console.log(`\n✓ Built ${written.length} pages.\n`);
console.log("Page list:");
written.forEach((p) => console.log("  • " + p));
console.log("\n✓ sitemap.xml");
console.log("✓ robots.txt");
console.log("✓ humans.txt");
console.log("\nDone.");
