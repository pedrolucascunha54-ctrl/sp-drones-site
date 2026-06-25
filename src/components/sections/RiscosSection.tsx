"use client";

import { AlertTriangle, Droplets, UserX, Tractor, Clock, TrendingDown } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useScrollReveal } from "../animation/useScrollReveal";

const risks = [
  {
    icon: Droplets,
    title: "Aplicação desigual",
    desc: "Falhas de cobertura deixam pragas e doenças avançarem exatamente nos pontos não tratados."
  },
  {
    icon: TrendingDown,
    title: "Desperdício de insumo",
    desc: "Sobreposição de passadas aumenta o custo por hectare sem ganho real de eficácia."
  },
  {
    icon: UserX,
    title: "Exposição do operador",
    desc: "Contato direto e prolongado com defensivos em aplicações manuais ou com maquinário terrestre."
  },
  {
    icon: Tractor,
    title: "Compactação do solo",
    desc: "O trânsito de máquinas pesadas sobre a lavoura prejudica a estrutura do solo e a produtividade das próximas safras."
  },
  {
    icon: Clock,
    title: "Atraso na aplicação",
    desc: "Depender só de mão de obra ou das condições de acesso à lavoura pode adiar o tratamento exatamente no momento em que a praga ou doença mais avança."
  },
  {
    icon: AlertTriangle,
    title: "Perda de produtividade",
    desc: "Isolados ou combinados, todos esses fatores reduzem o potencial real da sua safra."
  }
];

export function RiscosSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="riscos" className="py-24 bg-ink text-cloud relative z-20">
      <div className="max-w-7xl mx-auto px-6" ref={revealRef}>
        <div className="max-w-3xl mb-16">
          <SectionEyebrow className="text-warning">Antes de decidir, entenda os riscos</SectionEyebrow>
          <h2 className="text-display-lg text-white mt-4 mb-6">Os riscos de uma aplicação mal feita</h2>
          <p className="text-body-lg text-steel">
            A pulverização tradicional, quando feita sem precisão, custa mais caro do que parece — para a lavoura e para quem trabalha nela.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {risks.map((risk, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-warning/20 text-warning flex items-center justify-center mb-6">
                <risk.icon size={24} />
              </div>
              <h3 className="text-body-lg font-bold text-white mb-3">{risk.title}</h3>
              <p className="text-body-md text-steel">{risk.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-body-lg font-medium text-white text-center max-w-2xl mx-auto px-6 py-4 border border-white/10 rounded-full bg-white/5">
          A pulverização aérea com drone resolve esses pontos com tecnologia de precisão.
        </p>
      </div>
    </section>
  );
}
