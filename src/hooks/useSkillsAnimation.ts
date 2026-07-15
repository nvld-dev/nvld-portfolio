"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSkillsAnimation(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const eyebrow = q(".skills-header > span");
      const title = q(".skills-header h2");
      const desc = q(".skills-header p");
      const cards = q(".skill-card");

      // Header — eyebrow pop, title blur-in, desc fade
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      if (eyebrow.length) {
        headerTl.from(eyebrow, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }

      if (title.length) {
        headerTl.from(
          title,
          {
            y: 24,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.out",
            clearProps: "opacity,transform,filter",
          },
          "-=0.3",
        );
      }

      if (desc.length) {
        headerTl.from(
          desc,
          {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,transform",
          },
          "-=0.45",
        );
      }

      // Cards — masing-masing card jadi timeline kecil sendiri,
      // trigger independen supaya animasi berjalan sesuai posisi scroll card itu
      cards.forEach((card, i) => {
        const icon = card.querySelector(".mb-4 > div");
        const tags = card.querySelectorAll("span");

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        cardTl.from(card, {
          y: 45,
          opacity: 0,
          rotateX: -15,
          scale: 0.94,
          transformOrigin: "top center",
          duration: 0.7,
          ease: "power3.out",
          clearProps: "opacity,transform",
        });

        if (icon) {
          cardTl.from(
            icon,
            {
              scale: 0,
              rotate: -90,
              opacity: 0,
              duration: 0.5,
              ease: "back.out(2.4)",
              clearProps: "opacity,transform",
            },
            "-=0.4",
          );
        }

        if (tags.length) {
          cardTl.from(
            tags,
            {
              opacity: 0,
              y: 10,
              scale: 0.8,
              duration: 0.4,
              stagger: 0.04,
              ease: "power2.out",
              clearProps: "opacity,transform",
            },
            "-=0.2",
          );
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: ref },
  );
}
