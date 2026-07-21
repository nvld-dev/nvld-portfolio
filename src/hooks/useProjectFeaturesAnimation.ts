"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectFeaturesAnimation(
  ref: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(q(".features-badge"), {
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
      })

        .from(
          q(".features-title"),
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=.25",
        )

        .from(
          q(".features-description"),
          {
            y: 24,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=.35",
        )

        .from(
          q(".feature-card"),
          {
            y: 36,
            opacity: 0,
            scale: 0.96,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          "-=.15",
        );
    },
    {
      scope: ref,
    },
  );
}
