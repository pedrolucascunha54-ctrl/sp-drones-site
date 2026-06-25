"use client";

import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useScrollReveal } from "../animation/useScrollReveal";

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pb-12 bg-cloud overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full" ref={revealRef}>
        
        {/* Bloco de Texto (Primeiro no mobile, Esquerda no desktop) */}
        <div className="flex flex-col items-start max-w-2xl space-y-6 lg:space-y-0">
          <SectionEyebrow>Pulverização Aérea Agrícola — Lavras, MG</SectionEyebrow>
          
          <h1 className="text-display-lg sm:text-display-xl text-ink lg:mt-4 lg:mb-6">
            Precisão, economia e segurança para sua safra, direto do céu.
          </h1>
          
          {/* Versão completa (Desktop/Tablet) */}
          <p className="hidden sm:block text-body-lg text-steel lg:mb-10">
            A SP Drones aplica defensivos e fertilizantes com tecnologia DJI Agras T50, 
            cobrindo grandes áreas com dose certa, no lugar certo — reduzindo desperdício e 
            protegendo quem trabalha na lavoura.
          </p>
          
          {/* Versão resumida (Mobile) */}
          <p className="block sm:hidden text-body-md text-steel">
            Aplicação de precisão com drone DJI Agras T50 — menos desperdício, mais segurança.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 lg:pt-0">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-cobalt text-white rounded-full font-bold text-body-md sm:text-body-lg hover:bg-cobalt-deep transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 focus-visible:outline-warning"
            >
              Falar no WhatsApp
            </a>
            <a href="#como-funciona" className="text-body-md sm:text-body-lg font-medium text-ink hover:text-cobalt transition-colors focus-visible:outline-warning">
              Ver como funciona ↓
            </a>
          </div>
        </div>
        
        {/* Bloco da Imagem (Último no mobile, Direita no desktop) */}
        <div className="relative w-full h-64 sm:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
          <Image 
            src="/images/drone-hero.jpg" 
            alt="Drone pulverizando com trator desfocado ao fundo"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
