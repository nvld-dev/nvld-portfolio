"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useJourneyAnimation(
  ref: React.RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      // Header fade up, sekali saat masuk viewport
      gsap.from(q(".journey-header"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      // Garis tengah & garis mobile "tumbuh" mengikuti scroll (scrub)
      const track = q(".timeline-track")[0];

      q(".timeline-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top 60%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          },
        );
      });

      // Setiap item timeline muncul dari kiri/kanan sesuai posisinya
      q(".timeline-item").forEach((item) => {
        const el = item as HTMLElement;
        const isLeft = el.dataset.side === "left";
        const cards = el.querySelectorAll(".timeline-card");
        const nodes = el.querySelectorAll(".timeline-node");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        });

        tl.from(cards, {
          x: isLeft ? -60 : 60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "opacity,transform",
        });

        if (nodes.length) {
          tl.from(
            nodes,
            {
              scale: 0,
              opacity: 0,
              duration: 0.4,
              ease: "back.out(2)",
              clearProps: "opacity,transform",
            },
            "-=.5",
          );
        }
      });
    },
    { scope: ref },
  );
}
