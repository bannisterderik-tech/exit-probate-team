/* =====================================================================
   OREGON PROBATE AGENT — GSAP scroll-reveal layer
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

  /* ---------- Process rail: highlight the active step pip ---------- */
  (function () {
    var rail = document.querySelector(".process-rail .rail");
    if (!rail) return;
    var pips = Array.prototype.slice.call(rail.querySelectorAll(".pip"));
    var steps = Array.prototype.slice.call(document.querySelectorAll(".process-rail .step"));
    if (!pips.length || pips.length !== steps.length) return;

    steps.forEach(function (step, i) {
      if (!window.ScrollTrigger) return;
      ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: function (self) {
          if (self.isActive) {
            pips.forEach(function (p) { p.classList.remove("active"); });
            pips[i].classList.add("active");
          }
        },
      });
    });
  })();

  /* ---------- Stat counter: count up on first view ----------
     Captures the markup template (with <em> suffix nodes preserved) at
     start and rewrites just the leading number node on each tick. The
     em-suffix elements stay rendered the entire time. */
  (function () {
    var stats = document.querySelectorAll(".stat-strip .stat .n");
    if (!stats.length || !window.ScrollTrigger) return;
    stats.forEach(function (el) {
      // The number is the first text node — find it and the original target value.
      var firstText = null;
      for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === 3) { firstText = el.childNodes[i]; break; }
      }
      if (!firstText) return;
      var raw = firstText.nodeValue.trim();
      var match = raw.match(/^([0-9]+)/);
      if (!match) return;
      var target = parseInt(match[1], 10);
      if (!isFinite(target) || target === 0) return;
      var leading = raw.slice(match[1].length); // e.g. "/36" — preserve as part of leading text
      var started = false;
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          if (started) return; started = true;
          var obj = { v: 0 };
          firstText.nodeValue = "0" + leading;
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "expo.out",
            onUpdate: function () {
              firstText.nodeValue = Math.round(obj.v) + leading;
            },
            onComplete: function () {
              firstText.nodeValue = target + leading;
            },
          });
        },
      });
    });
  })();
})();
