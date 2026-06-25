"use client";

import Image from "next/image";
import { Map, Activity, FileText, Settings } from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";

const items = [
  { icon: Map, text: "Mapeamento" },
  { icon: Activity, text: "Monitoramento" },
  { icon: FileText, text: "Relatórios" },
  { icon: Settings, text: "Gestão inteligente da lavoura" },
];

export function DadosDecisao() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-ink text-cloud relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center" ref={revealRef}>
        <div>
          <h2 className="text-display-lg text-white mb-6">Dados que geram decisões</h2>
          <p className="text-body-lg text-steel mb-12">
            Monitore, analise e tome decisões mais assertivas com dados em tempo real.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((b, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center flex-shrink-0">
                  <b.icon size={24} />
                </div>
                <span className="text-caption font-bold text-white uppercase tracking-widest">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-ink/50">
          <Image 
            src="/images/Com a tecnologia de pulverização por drones, você garante-✅ Aplicação uniforme✅ Redução de despe (5).jpg" 
            alt="Tablet com Mapa de Aplicação"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
