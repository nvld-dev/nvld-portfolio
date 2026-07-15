"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function useHeroAnimation(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const badge = q(".hero-badge");
      const title = q(".hero-title");
      const subtitle = q(".hero-subtitle");
      const description = q(".hero-description");
      const actions = q(".hero-actions");
      const scrollIndicator = q(
        ".hero-item:not(.hero-badge):not(.hero-title):not(.hero-subtitle):not(.hero-description):not(.hero-actions)",
      );

      const tl = gsap.timeline({ delay: 0.2 });

      // Badge — pop in with slight overshoot
      if (badge.length) {
        tl.from(badge, {
          opacity: 0,
          y: -20,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(2.2)",
          clearProps: "opacity,transform",
        });
      }

      // Title — split per kata, muncul dengan blur + rise
      if (title.length) {
        const titleWords = title[0].querySelectorAll("span");

        if (titleWords.length) {
          tl.from(
            titleWords,
            {
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
              duration: 0.9,
              stagger: 0.15,
              ease: "power4.out",
              clearProps: "opacity,transform,filter",
            },
            "-=0.25",
          );
        } else {
          tl.from(
            title,
            {
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
              duration: 0.9,
              ease: "power4.out",
              clearProps: "opacity,transform,filter",
            },
            "-=0.25",
          );
        }
      }

      // Subtitle — slide dari kiri
      if (subtitle.length) {
        tl.from(
          subtitle,
          {
            opacity: 0,
            x: -30,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          "-=0.5",
        );
      }

      // Description — fade halus, sedikit rise
      if (description.length) {
        tl.from(
          description,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "opacity,transform",
          },
          "-=0.4",
        );
      }

      // Actions — tiap tombol pop-scale bergantian
      if (actions.length) {
        const buttons = actions[0].querySelectorAll("button");

        tl.from(
          buttons.length ? buttons : actions,
          {
            opacity: 0,
            y: 25,
            scale: 0.85,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.8)",
            clearProps: "opacity,transform",
          },
          "-=0.35",
        );
      }

      // Scroll indicator — muncul paling akhir, fade lambat
      if (scrollIndicator.length) {
        tl.from(
          scrollIndicator,
          {
            opacity: 0,
            y: 15,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "opacity,transform",
          },
          "-=0.2",
        );
      }
    },
    { scope: ref },
  );
}
