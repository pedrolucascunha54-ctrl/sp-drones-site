"use client";

import { Leaf, Globe, Recycle, Cpu } from "lucide-react";
import { IconBadge } from "../ui/IconBadge";
import { useScrollReveal } from "../animation/useScrollReveal";

const benefits = [
  { icon: Leaf, text: "Aplicação consciente" },
  { icon: Globe, text: "Menor impacto ambiental" },
  { icon: Recycle, text: "Uso racional de recursos" },
  { icon: Cpu, text: "Agricultura moderna" },
];

export function Sustentabilidade() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-cloud relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center" ref={revealRef}>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-display-lg text-ink mb-6">Sustentabilidade no campo</h2>
          <p className="text-body-lg text-steel">
            Drones promovem uma agricultura mais sustentável, com uso consciente de insumos e respeito ao meio ambiente.
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
