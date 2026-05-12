/* =====================================================================
   EXIT PROBATE TEAM — GSAP cinematic motion layer
   Requires GSAP + ScrollTrigger loaded from CDN (see partials).
   ===================================================================== */
(function () {
  "use strict";
  // Guarantee everything is readable even if GSAP fails to load.
  if (!window.gsap) {
    document.documentElement.classList.remove("js-anim");
    return;
  }

  // Mark the document as animation-capable AFTER we confirm GSAP loaded.
  // (CSS hides .reveal etc. only while .js-anim is set on <html>.)
  document.documentElement.classList.add("js-anim");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.documentElement.classList.remove("js-anim");
    return;
  }

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Initial: hide reveal targets, set masked lines ---------- */
  gsap.set(".line-mask > span", { yPercent: 110 });
  gsap.set(".reveal", { y: 40, opacity: 0 });
  gsap.set(".reveal-fade", { opacity: 0 });
  gsap.set(".reveal-img", { scale: 1.12, opacity: 0 });

  /* ---------- Hero line reveal on load ---------- */
  const heroLines = document.querySelectorAll(".hero .line-mask > span, [data-hero] .line-mask > span");
  if (heroLines.length) {
    gsap.to(heroLines, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.15,
    });
  }

  /* ---------- Hero lede + actions fade up ---------- */
  gsap.utils.toArray("[data-hero-fade]").forEach((el, i) => {
    gsap.fromTo(el, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.6 + i * 0.08
    });
  });

  /* ---------- Generic reveal on scroll ---------- */
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  /* ---------- Generic fade (no transform) ---------- */
  gsap.utils.toArray(".reveal-fade").forEach((el) => {
    gsap.to(el, {
      opacity: 1, duration: 1.4, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  /* ---------- Masked image reveal ---------- */
  gsap.utils.toArray(".reveal-img").forEach((el) => {
    gsap.to(el, {
      scale: 1, opacity: 1, duration: 1.6, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  /* ---------- Stagger groups (children fade up) ---------- */
  gsap.utils.toArray("[data-stagger]").forEach((group) => {
    const items = group.querySelectorAll("[data-stagger-item]");
    gsap.fromTo(items, { y: 32, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "expo.out", stagger: 0.08,
      scrollTrigger: { trigger: group, start: "top 80%", once: true }
    });
  });

  /* ---------- Word-by-word reveal for headlines marked [data-words] ---------- */
  gsap.utils.toArray("[data-words]").forEach((el) => {
    const text = el.textContent;
    el.textContent = "";
    text.split(/\s+/).forEach((word, i, arr) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";
      span.style.paddingBottom = "0.06em";
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.style.transform = "translateY(110%)";
      inner.textContent = word + (i < arr.length - 1 ? " " : "");
      span.appendChild(inner);
      el.appendChild(span);
    });
    gsap.to(el.querySelectorAll("span > span"), {
      yPercent: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: "top 85%", once: true }
    });
  });

  /* ---------- Parallax on [data-parallax] ---------- */
  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    const depth = parseFloat(el.getAttribute("data-parallax")) || 0.2;
    gsap.fromTo(el, { yPercent: -depth * 40 }, {
      yPercent: depth * 40,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* ---------- Stat number count-up ---------- */
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = parseFloat(el.getAttribute("data-count"));
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2.2,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = obj.v.toFixed(decimals).toString() + suffix;
      }
    });
  });

  /* ---------- Pinned section background tone shift ---------- */
  gsap.utils.toArray("[data-tone-shift]").forEach((el) => {
    const toColor = el.getAttribute("data-tone-shift");
    ScrollTrigger.create({
      trigger: el,
      start: "top 40%",
      end: "bottom 40%",
      onEnter: () => gsap.to("body", { backgroundColor: toColor, duration: 0.8 }),
      onEnterBack: () => gsap.to("body", { backgroundColor: toColor, duration: 0.8 }),
      onLeave: () => gsap.to("body", { backgroundColor: "var(--bg)", duration: 0.8 }),
      onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--bg)", duration: 0.8 }),
    });
  });

  /* ---------- Image scale on scroll ---------- */
  gsap.utils.toArray("[data-img-scroll]").forEach((el) => {
    gsap.fromTo(el, { scale: 1.0 }, {
      scale: 1.08,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });
})();
