"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useProjectHeroAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 0.7,
      },
    });

    tl.from(".project-back", {
      opacity: 0,
      y: 20,
    })
      .from(
        ".project-text > *",
        {
          opacity: 0,
          y: 24,
          stagger: 0.08,
        },
        "-=0.3",
      )
      .from(
        ".project-banner",
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
        },
        "-=0.5",
      );
  });
}
