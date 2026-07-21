"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectGalleryAnimation(
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

      tl.from(q(".gallery-badge"), {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
      })
        .from(
          q(".gallery-title"),
          {
            opacity: 0,
            y: 30,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          q(".gallery-slider"),
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.15",
        )
        .from(
          q(".gallery-caption"),
          {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        );

      // gallery-dots hanya ada jika slide > 1
      if (q(".gallery-dots").length) {
        tl.from(
          q(".gallery-dots"),
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25",
        );
      }
    },
    {
      scope: ref,
    },
  );
}
