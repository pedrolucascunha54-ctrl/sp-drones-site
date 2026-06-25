"use client";

import { MapPin } from "lucide-react";
import { COVERAGE_AREA } from "@/lib/constants";
import { useScrollReveal } from "../animation/useScrollReveal";

export function AreaAtuacao() {
  const revealRef = useScrollReveal();

  return (
    <section id="atuacao" className="py-24 bg-ink text-cloud relative z-20 text-center">
      <div className="max-w-3xl mx-auto px-6" ref={revealRef}>
        <div className="w-16 h-16 rounded-full bg-warning/20 text-warning flex items-center justify-center mx-auto mb-6">
          <MapPin size={32} />
        </div>
        <h2 className="text-display-lg text-white mb-6">Onde atuamos</h2>
        <p className="text-body-lg text-steel">
          Atendemos produtores em <span className="text-white font-bold">{COVERAGE_AREA}</span>.
        </p>
      </div>
    </section>
  );
}
