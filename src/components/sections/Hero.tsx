"use client";

import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useScrollReveal } from "../animation/useScrollReveal";

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-cloud overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full" ref={revealRef}>
        <div className="flex flex-col items-start max-w-2xl">
          <SectionEyebrow>Pulverização Aérea Agrícola — Lavras, MG</SectionEyebrow>
          <h1 className="text-display-xl text-ink mt-4 mb-6">
            Precisão, economia e segurança para sua safra, direto do céu.
          </h1>
          <p className="text-body-lg text-steel mb-10">
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
            <a href="#como-funciona" className="text-body-lg font-medium text-ink hover:text-cobalt transition-colors focus-visible:outline-warning">
              Ver como funciona ↓
            </a>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8">
          <Image 
            src="/images/WhatsApp Image 2026-06-25 at 11.23.09 AM.jpeg" 
            alt="SP Drones Logo no Pôr do Sol"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
