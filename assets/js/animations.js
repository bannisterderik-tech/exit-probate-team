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

  /* ---------- Identify hero / page-hero scopes ---------- */
  var heroScope = document.querySelector(".hero, [data-hero]");
  var pageHero = document.querySelector(".page-hero");

  function isHeroElement(el) {
    return (heroScope && heroScope.contains(el)) ||
           (pageHero && pageHero.contains(el));
  }

  /* ---------- Initial states for NON-hero scroll reveals ---------- */
  document.querySelectorAll(".reveal").forEach(function (el) {
    if (!isHeroElement(el)) gsap.set(el, { y: 40, opacity: 0 });
  });
  document.querySelectorAll(".reveal-fade").forEach(function (el) {
    if (!isHeroElement(el)) gsap.set(el, { opacity: 0 });
  });
  document.querySelectorAll(".reveal-img").forEach(function (el) {
    if (!isHeroElement(el)) gsap.set(el, { scale: 1.12, opacity: 0 });
  });

  /* ---------- Hero entrance (home page) ---------- */
  if (heroScope) {
    var tl = gsap.timeline({ delay: 0.1 });

    var heroLineSpans = heroScope.querySelectorAll(".line-mask > span");
    if (heroLineSpans.length) {
      gsap.set(heroLineSpans, { yPercent: 110 });
      tl.to(heroLineSpans, {
        yPercent: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.08,
      }, 0);
    }

    var heroReveals = heroScope.querySelectorAll(".reveal");
    if (heroReveals.length) {
      gsap.set(heroReveals, { y: 24, opacity: 0 });
      tl.to(heroReveals, {
        y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.06,
      }, 0.2);
    }

    var heroImgs = heroScope.querySelectorAll(".reveal-img");
    if (heroImgs.length) {
      gsap.set(heroImgs, { scale: 1.06, opacity: 0 });
      tl.to(heroImgs, {
        scale: 1, opacity: 1, duration: 1.6, ease: "expo.out",
      }, 0.15);
    }

    var heroFades = heroScope.querySelectorAll(".reveal-fade");
    if (heroFades.length) {
      gsap.set(heroFades, { opacity: 0 });
      tl.to(heroFades, {
        opacity: 1, duration: 1.2, ease: "power2.out",
      }, 0.3);
    }
  }

  /* ---------- Hero-fade attribute (standalone elements) ---------- */
  gsap.utils.toArray("[data-hero-fade]").forEach(function (el, i) {
    gsap.fromTo(el, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.5 + i * 0.08
    });
  });

  /* ---------- Page-hero entrance (inner pages) ---------- */
  if (pageHero) {
    var ptl = gsap.timeline({ delay: 0.1 });

    var phLines = pageHero.querySelectorAll(".line-mask > span");
    if (phLines.length) {
      gsap.set(phLines, { yPercent: 110 });
      ptl.to(phLines, {
        yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.08,
      }, 0);
    }

    var phReveals = pageHero.querySelectorAll(".reveal");
    if (phReveals.length) {
      gsap.set(phReveals, { y: 24, opacity: 0 });
      ptl.to(phReveals, {
        y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.06,
      }, 0.2);
    }

    var phImgs = pageHero.querySelectorAll(".reveal-img");
    if (phImgs.length) {
      gsap.set(phImgs, { scale: 1.06, opacity: 0 });
      ptl.to(phImgs, {
        scale: 1, opacity: 1, duration: 1.6, ease: "expo.out",
      }, 0.15);
    }

    var phFades = pageHero.querySelectorAll(".reveal-fade");
    if (phFades.length) {
      gsap.set(phFades, { opacity: 0 });
      ptl.to(phFades, {
        opacity: 1, duration: 1.2, ease: "power2.out",
      }, 0.3);
    }
  }

  /* ---------- Generic reveal on scroll ---------- */
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
