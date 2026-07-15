"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAboutAnimation(
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

      tl.from(q(".about-photo"), {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          q(".about-heading"),
          {
            x: 60,
            opacity: 0,
            duration: 0.7,
          },
          "-=.45",
        )
        .from(
          q(".about-description"),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=.35",
        )
        .from(
          q(".about-tech"),
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=.25",
        )
        .from(
          q(".tech-item"),
          {
            scale: 0.8,
            opacity: 0,
            stagger: 0.05,
            duration: 0.3,
          },
          "-=.2",
        )
        .from(
          q(".about-quote"),
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            clearProps: "opacity,transform",
          },
          "-=.15",
        )
        .from(
          q(".stat-card"),
          {
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.45,
            clearProps: "opacity,transform",
          },
          "-=.1",
        );
    },
    {
      scope: ref,
    },
  );
}
