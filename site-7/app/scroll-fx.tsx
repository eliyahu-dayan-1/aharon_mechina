"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduceMotion) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    const zoneEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-zone]"),
    );
    const zoneObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            document.body.dataset.zone = (entry.target as HTMLElement).dataset
              .zone;
          }
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );
    zoneEls.forEach((el) => zoneObserver.observe(el));

    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    let ticking = false;
    const applyParallax = () => {
      ticking = false;
      const viewportH = window.innerHeight;
      for (const el of parallaxTargets) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - viewportH / 2;
        const strength = Number(el.dataset.parallax) || 0.12;
        const offset = Math.max(-1, Math.min(1, center / viewportH)) * strength * 100;
        el.style.setProperty("--py", `${offset.toFixed(2)}px`);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyParallax);
      }
    };
    applyParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      zoneObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
