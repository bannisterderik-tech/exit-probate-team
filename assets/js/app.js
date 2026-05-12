/* =====================================================================
   EXIT PROBATE TEAM — global UI behavior
   Header scroll, mobile menu, FAQ, year stamps, progress bar, smooth anchors.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Site header: shrink on scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const closeBtn = document.querySelector(".mobile-menu .close");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
  if (menu) {
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      item.classList.toggle("open");
    });
  });

  /* ---------- Page progress bar ---------- */
  const bar = document.querySelector(".page-progress");
  if (bar) {
    const setBar = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", setBar, { passive: true });
    setBar();
  }

  /* ---------- Year stamps ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute("href");
    if (href === "#" || href === "#!") return;
    a.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---------- Intake form → Supabase webhook ---------- */
  const intake = document.getElementById("intakeForm");
  if (intake) {
    const WEBHOOK = "https://ayskxkjorhoaknkqtyvm.supabase.co/functions/v1/webhook-receive?key=e3302b5d21fc46979aacd6da8576642f";
    const LIST = "Oregon Probate Experts";
    const status = document.getElementById("intakeStatus");

    function showStatus(msg, ok) {
      if (!status) return;
      status.style.display = "block";
      status.textContent = msg;
      status.style.background = ok ? "rgba(109,178,62,0.12)" : "rgba(184,89,57,0.12)";
      status.style.color = ok ? "var(--accent-deep)" : "var(--terracotta)";
      status.style.border = "1px solid " + (ok ? "var(--accent)" : "var(--terracotta)");
    }

    intake.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(intake);
      const payload = {
        list: LIST,
        source: "exitprobateteam.com — intake form",
        submittedAt: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        name: fd.get("name"),
        role: fd.get("role"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        county: fd.get("county"),
        city: fd.get("city"),
        message: fd.get("msg"),
      };
      const btn = intake.querySelector("button[type=submit]");
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = "Sending… <span class=\"arrow\">↗</span>";
      try {
        const res = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        showStatus("Received. We'll be in touch within one business day.", true);
        intake.reset();
      } catch (err) {
        showStatus("Couldn't submit just now — please call (541) 525-3268 or email hello@exitprobateteam.com.", false);
      } finally {
        btn.disabled = false;
        btn.innerHTML = original;
      }
    });
  }

  /* ---------- Magnetic CTA (subtle) ---------- */
  const magnets = document.querySelectorAll("[data-magnetic]");
  magnets.forEach((el) => {
    let raf = null;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });
    };
    const reset = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
  });
})();
