"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useContactAnimation(
  ref: React.RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const q = gsap.utils.selector(ref);

      const eyebrow = q(".contact-header > span");
      const title = q(".contact-header h2");
      const desc = q(".contact-header p");
      const cards = q(".contact-card");
      const cardIcons = q(".contact-icon");
      const location = q(".contact-location");
      const illustration = q(".contact-illustration");
      const glow = q(".contact-glow");

      // Master timeline tied to section entering viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      // Eyebrow label — lines expand from center + fade
      if (eyebrow.length) {
        tl.from(eyebrow, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }

      // Title — soft blur-in + rise
      if (title.length) {
        tl.from(
          title,
          {
            y: 24,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.out",
            clearProps: "opacity,transform,filter",
          },
          "-=0.35",
        );
      }

      // Description — gentle fade/rise
      if (desc.length) {
        tl.from(
          desc,
          {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,transform",
          },
          "-=0.5",
        );
      }

      // Glow behind section — fades in slowly, feels ambient
      if (glow.length) {
        tl.from(
          glow,
          {
            opacity: 0,
            scale: 0.6,
            duration: 1.6,
            ease: "power2.out",
            clearProps: "transform",
          },
          "-=0.6",
        );
      }

      // Cards — 3D tilt-in with stagger, from alternating directions
      if (cards.length) {
        tl.from(
          cards,
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
            rotateX: -25,
            transformOrigin: "top center",
            duration: 0.7,
            stagger: {
              each: 0.12,
              from: "start",
            },
            ease: "back.out(1.7)",
            clearProps: "opacity,transform",
          },
          "-=0.5",
        );
      }

      // Icons inside cards — pop + spin in, slightly after card lands
      if (cardIcons.length) {
        tl.from(
        cardIcons,
        {
          scale: 1,
          opacity: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "back.out(2)",
          clearProps: "opacity,transform",
        },
        "-=0.45",
      );
    }
      

      // Subtle continuous float on card icons after entrance
      if (cardIcons.length) {
        cardIcons.forEach((icon, i) => {
          gsap.to(icon, {
            y: -4,
            duration: 2 + i * 0.15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1 + i * 0.1,
          });
        });
      }

      // Location pill — pops in with a little bounce
      if (location.length) {
        gsap.from(location, {
          y: 20,
          opacity: 0,
          scale: 0.85,
          duration: 0.6,
          ease: "back.out(1.8)",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: location[0],
            start: "top 90%",
            once: true,
          },
        });
      }

      // Illustration — reveal via clip-path + slight scale, then parallax on scroll
      if (illustration.length) {
        gsap.fromTo(
          illustration[0],
          {
            clipPath: "inset(0 0 100% 0)",
            scale: 1.08,
            opacity: 0,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: illustration[0],
              start: "top 88%",
              once: true,
            },
          },
        );

        // Parallax: image drifts as user scrolls past section
        const img = illustration[0].querySelector("img");
        if (img) {
          gsap.to(img, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: illustration[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }
      }
    },
    { scope: ref },
  );
}
