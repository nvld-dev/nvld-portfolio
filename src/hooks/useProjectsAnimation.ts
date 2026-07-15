"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectsAnimation(
  ref: React.RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const header = q(".projects-header");
      const cards = q(".project-card");
      const cta = q(".projects-cta");

      // ---- Header: zoom blur juga, biar konsisten ----
      if (header.length) {
        gsap.fromTo(
          header,
          { opacity: 0, scale: 1.3, filter: "blur(10px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,opacity,filter",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      // ---- Cards: zoom blur, satu per satu dengan jeda jelas ----
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          once: true,
        },
      });

      cards.forEach((card, i) => {
        cardTimeline.fromTo(
          card,
          {
            opacity: 0,
            scale: 1.35,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity,filter",
          },
          // jeda nyata antar card, bukan numpuk
          i === 0 ? 0 : "+=0.45",
        );
      });

      // ---- CTA: zoom blur juga ----
      if (cta.length) {
        gsap.fromTo(
          cta,
          { opacity: 0, scale: 1.25, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity,filter",
            scrollTrigger: {
              trigger: cta[0],
              start: "top 92%",
              once: true,
            },
          },
        );
      }
    },
    { scope: ref },
  );
}
