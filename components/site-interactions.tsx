"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-head",
  ".voice-head",
  ".voice-card",
  ".product-card",
  ".application-card",
  ".manufacturing-grid figure",
  ".factory-tour-head",
  ".factory-tour-grid figure",
  ".engineering-visual",
  ".engineering-copy",
  ".cta-band",
  ".page-hero-grid > *",
  ".catalog-card",
  ".option-card",
  ".contact-card",
  ".about-stat",
  ".about-capability-card",
  ".trade-show-grid > *",
].join(",");

export function SiteInteractions({ path }: { path: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero-visual");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function updateHeader() {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (reduceMotion) {
      root.classList.add("motion-reduced");
      return () => window.removeEventListener("scroll", updateHeader);
    }

    root.classList.add("motion-ready");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    revealItems.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 65}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9%", threshold: 0.08 },
    );

    revealItems.forEach((item) => observer.observe(item));

    function moveHero(event: PointerEvent) {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--hero-x", `${x * 10}px`);
      hero.style.setProperty("--hero-y", `${y * 10}px`);
    }

    function resetHero() {
      hero?.style.setProperty("--hero-x", "0px");
      hero?.style.setProperty("--hero-y", "0px");
    }

    hero?.addEventListener("pointermove", moveHero);
    hero?.addEventListener("pointerleave", resetHero);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
      hero?.removeEventListener("pointermove", moveHero);
      hero?.removeEventListener("pointerleave", resetHero);
      root.classList.remove("motion-ready");
    };
  }, [path]);

  return null;
}
