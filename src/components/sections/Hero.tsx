"use client";

import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useScrollReveal } from "../animation/useScrollReveal";

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-ink">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/WhatsApp Image 2026-06-25 at 11.23.09 AM.jpeg" 
          alt="SP Drones pulverizando lavoura"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
      </div>

      {/* Gradient Overlay: 
          Mobile: Top to bottom (dark at top for text, clear at bottom for drone)
          Desktop: Left to right (dark at left for text, clear at right for drone)
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b lg:bg-gradient-to-r from-ink/90 via-ink/70 lg:via-ink/60 to-ink/10 lg:to-transparent mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b lg:bg-gradient-to-r from-ink/80 via-ink/40 lg:via-ink/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center relative z-20 w-full h-full" ref={revealRef}>
        <div className="flex flex-col items-start max-w-2xl py-12">
          {/* Eyebrow adapted for dark background */}
          <SectionEyebrow className="text-warning">Pulverização Aérea Agrícola — Lavras, MG</SectionEyebrow>
          
          <h1 className="text-display-xl text-white mt-4 mb-6">
            Precisão, economia e segurança para sua safra, direto do céu.
          </h1>
          
          <p className="text-body-lg text-cloud/90 mb-10 text-shadow-sm">
            A SP Drones aplica defensivos e fertilizantes com tecnologia DJI Agras T50, 
            cobrindo grandes áreas com dose certa, no lugar certo — reduzindo desperdício e 
            protegendo quem trabalha na lavoura.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cobalt text-white rounded-full font-bold text-body-lg hover:bg-cobalt-deep transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 focus-visible:outline-warning"
            >
              Falar no WhatsApp
            </a>
            <a href="#como-funciona" className="text-body-lg font-medium text-white hover:text-cobalt transition-colors focus-visible:outline-warning">
              Ver como funciona ↓
            </a>
          </div>
        </div>
        {/* Empty right column to allow the background image to show through */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
