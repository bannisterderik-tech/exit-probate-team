/* =====================================================================
   EXIT PROBATE TEAM — GSAP scroll-reveal layer
   Hero animations are CSS-only (see styles.css keyframes).
   Requires GSAP + ScrollTrigger loaded from CDN.
   ===================================================================== */
(function () {
  "use strict";
  if (!window.gsap) {
    document.documentElement.classList.remove("js-anim");
    return;
  }

  document.documentElement.classList.add("js-anim");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.documentElement.classList.remove("js-anim");
    return;
  }

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var heroScope = document.querySelector(".hero, [data-hero]");
  var pageHero = document.querySelector(".page-hero");

  function isHeroElement(el) {
    return (heroScope && heroScope.contains(el)) ||
           (pageHero && pageHero.contains(el));
  }

  /* ---------- Scroll-triggered reveals (skip hero/page-hero) ---------- */
  gsap.utils.toArray(".reveal").forEach(function (el) {
    if (isHeroElement(el)) return;
    gsap.to(el, {
      y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  gsap.utils.toArray(".reveal-fade").forEach(function (el) {
    if (isHeroElement(el)) return;
    gsap.to(el, {
      opacity: 1, duration: 1.4, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true }
    });
  });

  gsap.utils.toArray(".reveal-img").forEach(function (el) {
    if (isHeroElement(el)) return;
    gsap.to(el, {
      scale: 1, opacity: 1, duration: 1.6, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true }
    });
  });

  /* ---------- Stagger groups ---------- */
  gsap.utils.toArray("[data-stagger]").forEach(function (group) {
    var items = group.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;
    gsap.fromTo(items, { y: 32, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "expo.out", stagger: 0.08,
      scrollTrigger: { trigger: group, start: "top 82%", once: true }
    });
  });

  /* ---------- Image scale on scroll ---------- */
  gsap.utils.toArray("[data-img-scroll]").forEach(function (el) {
    gsap.fromTo(el, { scale: 1.0 }, {
      scale: 1.06,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });
})();
