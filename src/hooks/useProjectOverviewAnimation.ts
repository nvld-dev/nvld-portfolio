"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectOverviewAnimation(
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

      tl.from(q(".overview-badge"), {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          q(".overview-title"),
          {
            y: 24,
            opacity: 0,
            duration: 0.65,
          },
          "-=.3",
        )
        .from(
          q(".overview-description"),
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=.35",
        )
        .from(
          q(".overview-card"),
          {
            y: 36,
            opacity: 0,
            scale: 0.97,
            stagger: 0.15,
            duration: 0.55,
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
