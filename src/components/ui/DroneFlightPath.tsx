"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export function DroneFlightPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !droneRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hovering animation
      gsap.to(droneRef.current, {
        y: "+=8",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Flight path animation tied to scroll
      gsap.to(droneRef.current, {
        scrollTrigger: {
          trigger: document.body, // Tie to body scroll
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
        motionPath: {
          path: "#flight-path",
          align: "#flight-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none"
      });
      
      // Decollage scale effect
      gsap.fromTo(droneRef.current, 
        { scale: 0.8 }, 
        { 
          scale: 1, 
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "300px top",
            scrub: true
          } 
        }
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 overflow-hidden">
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-15" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 1000"
      >
        <path 
          id="flight-path"
          d="M 50,2 C 70,5 70,15 50,25 C 30,35 30,45 50,55 C 70,65 70,75 50,85 C 30,95 50,105 50,115 C 70,125 70,135 50,145 C 30,155 30,165 50,175 C 70,185 70,195 50,205 C 30,215 30,225 50,235 C 70,245 70,255 50,265 C 30,275 50,285 50,295 C 70,305 70,315 50,325 C 30,335 30,345 50,355 C 70,365 70,375 50,385 C 30,395 50,405 50,415 C 70,425 70,435 50,445 C 30,455 30,465 50,475 C 70,485 70,495 50,505 C 30,515 50,525 50,535 C 70,545 70,555 50,565 C 30,575 30,585 50,595 C 70,605 70,615 50,625 C 30,635 50,645 50,655 C 70,665 70,675 50,685 C 30,695 30,705 50,715 C 70,725 70,735 50,745 C 30,755 50,765 50,775 C 70,785 70,795 50,805 C 30,815 30,825 50,835 C 70,845 70,855 50,865 C 30,875 50,885 50,895 C 70,905 70,915 50,925 C 30,935 30,945 50,955 C 70,965 70,975 50,985 C 50,990 50,995 50,998" 
          fill="none" 
          stroke="var(--color-cobalt)" 
          strokeWidth="0.5" 
          strokeDasharray="2 2"
        />
      </svg>

      <div ref={droneRef} className="absolute top-0 left-0 w-20 h-20 -ml-10 -mt-10 text-cobalt flex items-center justify-center will-change-transform drop-shadow-2xl">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <rect x="8" y="10" width="8" height="4" rx="1" fill="currentColor" />
          <path d="M4 8l4 2M20 8l-4 2M4 16l4-2M20 16l-4-2" strokeLinecap="round" />
          <ellipse cx="4" cy="8" rx="3" ry="1" fill="currentColor" />
          <ellipse cx="20" cy="8" rx="3" ry="1" fill="currentColor" />
          <ellipse cx="4" cy="16" rx="3" ry="1" fill="currentColor" />
          <ellipse cx="20" cy="16" rx="3" ry="1" fill="currentColor" />
          <path d="M5 17v2M19 17v2" strokeLinecap="round" />
          <path d="M4 22l1-3M6 22l-1-3M18 22l1-3M20 22l-1-3" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
