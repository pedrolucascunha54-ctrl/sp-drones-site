"use client";

import Image from "next/image";
import { CheckSquare, ScanLine, Target, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";

const items = [
  { icon: ScanLine, title: "Cobertura total", desc: "Cada gota no lugar certo, para máxima eficiência." },
  { icon: Target, title: "Menos falhas", desc: "Aplicação precisa mesmo em áreas irregulares." },
  { icon: CheckSquare, title: "Sem sobreposições", desc: "Evita desperdício de produto e reduz custos." },
  { icon: ArrowUpRight, title: "Mais resultados", desc: "Plantas protegidas de forma uniforme e lavoura mais produtiva." },
];

export function BeneficiosAplicacaoUniforme() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-ink text-cloud relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center" ref={revealRef}>
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-ink/50">
          <Image 
            src="/images/WhatsApp Image 2026-06-25 at 11.23.09 AM.jpeg" 
            alt="Aplicação uniforme com drone"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none"></div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-display-lg text-white mb-6">Aplicação uniforme do início ao fim</h2>
          <p className="text-body-lg text-steel mb-12">
            Tecnologia de ponta que garante distribuição homogênea dos defensivos, evitando falhas e sobreposições.
          </p>

          <div className="flex flex-col gap-8">
            {items.map((b, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center flex-shrink-0 mt-1">
                  <b.icon size={28} />
                </div>
                <div>
                  <h3 className="text-body-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-body-md text-steel">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
