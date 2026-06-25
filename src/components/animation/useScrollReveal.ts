"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      gsap.fromTo(
        el,
        { 
          opacity: 0, 
          y: prefersReducedMotion ? 0 : 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            // play on enter, do nothing on leave, do nothing on re-enter backwards, do nothing on leave backwards
            toggleActions: "play none none none" 
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref as React.MutableRefObject<any>;
}
