"use client";

import { Target, CheckCircle2, TrendingUp, Droplet } from "lucide-react";
import { IconBadge } from "../ui/IconBadge";
import { useScrollReveal } from "../animation/useScrollReveal";

const benefits = [
  { icon: Target, text: "Aplicação uniforme" },
  { icon: Droplet, text: "Dose certa" },
  { icon: CheckCircle2, text: "Menos desperdício" },
  { icon: TrendingUp, text: "Mais produtividade" },
];

export function BeneficiosPrecisao() {
  const revealRef = useScrollReveal();

  return (
    <section id="como-funciona" className="py-24 bg-cloud relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center" ref={revealRef}>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-display-lg text-ink mb-6">Mais precisão, melhores resultados</h2>
          <p className="text-body-lg text-steel">
            A pulverização com drones garante aplicação uniforme, na dose certa e no lugar certo, reduzindo falhas e maximizando a produtividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-steel/5">
              <IconBadge icon={b.icon} className="mb-6" />
              <h3 className="text-body-lg font-bold text-ink">{b.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
