/* =====================================================================
   EXIT PROBATE TEAM — GSAP cinematic motion layer
   Requires GSAP + ScrollTrigger loaded from CDN (see partials).
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

  /* ---------- Identify hero scope ---------- */
  var heroScope = document.querySelector(".hero, [data-hero]");
  function isInsideHero(el) {
    return heroScope && heroScope.contains(el);
  }

  /* ---------- Initial: hide reveal targets ---------- */
  gsap.set(".line-mask > span", { yPercent: 110 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    if (!isInsideHero(el)) gsap.set(el, { y: 40, opacity: 0 });
  });
  document.querySelectorAll(".reveal-fade").forEach(function (el) {
    if (!isInsideHero(el)) gsap.set(el, { opacity: 0 });
  });
  document.querySelectorAll(".reveal-img").forEach(function (el) {
    if (!isInsideHero(el)) gsap.set(el, { scale: 1.12, opacity: 0 });
  });

  /* ---------- Hero entrance sequence ---------- */
  var heroLines = document.querySelectorAll(".hero .line-mask > span, [data-hero] .line-mask > span");
  if (heroLines.length) {
    gsap.to(heroLines, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.15,
    });
  }

  if (heroScope) {
    var heroReveals = heroScope.querySelectorAll(".reveal");
    gsap.fromTo(heroReveals, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.06, delay: 0.3
    });

    var heroImgs = heroScope.querySelectorAll(".reveal-img");
    gsap.fromTo(heroImgs, { scale: 1.06, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.6, ease: "expo.out", delay: 0.2
    });

    var heroFades = heroScope.querySelectorAll(".reveal-fade");
    gsap.fromTo(heroFades, { opacity: 0 }, {
      opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.4
    });
  }

  gsap.utils.toArray("[data-hero-fade]").forEach(function (el, i) {
    gsap.fromTo(el, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.6 + i * 0.08
    });
  });

  /* ---------- Page-hero entrance (inner pages) ---------- */
  var pageHero = document.querySelector(".page-hero");
  if (pageHero) {
    var phLines = pageHero.querySelectorAll(".line-mask > span");
    if (phLines.length) {
      gsap.to(phLines, {
        yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, delay: 0.15
      });
    }
    var phReveals = pageHero.querySelectorAll(".reveal");
    gsap.fromTo(phReveals, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.06, delay: 0.3
    });
    var phFades = pageHero.querySelectorAll(".reveal-fade");
    gsap.fromTo(phFades, { opacity: 0 }, {
      opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.4
    });
    var phImgs = pageHero.querySelectorAll(".reveal-img");
    gsap.fromTo(phImgs, { scale: 1.06, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.6, ease: "expo.out", delay: 0.2
    });
  }

  /* ---------- Generic reveal on scroll ---------- */
  gsap.utils.toArray(".reveal").forEach(function (el) {
    if (isInsideHero(el) || (pageHero && pageHero.contains(el))) return;
    gsap.to(el, {
      y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  gsap.utils.toArray(".reveal-fade").forEach(function (el) {
    if (isInsideHero(el) || (pageHero && pageHero.contains(el))) return;
    gsap.to(el, {
      opacity: 1, duration: 1.4, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true }
    });
  });

  gsap.utils.toArray(".reveal-img").forEach(function (el) {
    if (isInsideHero(el) || (pageHero && pageHero.contains(el))) return;
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
