"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectCTAAnimation(
  ref: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(q(".cta-card"), {
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          q(".cta-badge"),
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
          },
          "-=.35",
        )
        .from(
          q(".cta-title"),
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
          },
          "-=.2",
        )
        .from(
          q(".cta-description"),
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
          },
          "-=.3",
        )
        .from(
          q(".cta-buttons a"),
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.45,
            clearProps: "opacity,transform",
          },
          "-=.2",
        );
    },
    {
      scope: ref,
    },
  );
}
