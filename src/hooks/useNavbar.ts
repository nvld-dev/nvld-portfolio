"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);
      const progress =
        current / (document.documentElement.scrollHeight - window.innerHeight);

      gsap.set("#scroll-progress", {
        scaleX: progress,
      });

      if (current > lastScroll && current > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrolled,
    visible,
  };
}
