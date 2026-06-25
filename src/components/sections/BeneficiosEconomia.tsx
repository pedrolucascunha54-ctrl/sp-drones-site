"use client";

import Image from "next/image";
import { Droplet, Leaf, Banknote, LineChart } from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";

const items = [
  { icon: Droplet, text: "Menor consumo de água" },
  { icon: Leaf, text: "Redução de defensivos" },
  { icon: Banknote, text: "Menos custos operacionais" },
  { icon: LineChart, text: "Melhor retorno financeiro" },
];

export function BeneficiosEconomia() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-ink text-cloud relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center" ref={revealRef}>
        <div>
          <h2 className="text-display-lg text-white mb-6">Economia que faz a diferença</h2>
          <p className="text-body-lg text-steel mb-12">
            Reduza custos operacionais e aumente sua rentabilidade.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((b, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center flex-shrink-0">
                  <b.icon size={24} />
                </div>
                <span className="text-body-md font-medium text-white">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-ink/50">
          <Image 
            src="/images/drone-economia.jpg" 
            alt="Drone pulverizando com economia"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
