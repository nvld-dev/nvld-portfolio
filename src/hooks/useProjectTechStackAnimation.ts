"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectTechStackAnimation(
  ref: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      // Set the starting state immediately (before ScrollTrigger fires) so
      // there is no flash of fully-visible content on mount/refresh. The
      // elements already start with `opacity-0` in the markup, this just
      // gives GSAP explicit control over the rest of the "from" properties.
      gsap.set(q(".tech-badge, .tech-title, .tech-description"), {
        opacity: 0,
        y: 30,
      });
      gsap.set(q(".tech-card"), {
        opacity: 0,
        y: 40,
        scale: 0.96,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(q(".tech-badge"), {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(
          q(".tech-title"),
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .to(
          q(".tech-description"),
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25",
        )
        .to(
          q(".tech-card"),
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.15",
        );

      // In case content above (e.g. images in earlier sections) shifts
      // layout after mount and changes where "top 70%" actually falls.
      ScrollTrigger.refresh();
    },
    {
      scope: ref,
    },
  );
}
