"use client";

import { Quote } from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";

export function Depoimentos() {
  const revealRef = useScrollReveal();

  // {/* SUBSTITUIR por depoimentos reais de clientes antes de publicar o site. Depoimentos fabricados atribuídos a clientes inexistentes podem configurar propaganda enganosa. */}
  const placeholders = [
    { name: "Depoimento de exemplo 1", text: "Espaço reservado para depoimento real de cliente — substituir antes de publicar." },
    { name: "Depoimento de exemplo 2", text: "Espaço reservado para depoimento real de cliente — substituir antes de publicar." },
    { name: "Depoimento de exemplo 3", text: "Espaço reservado para depoimento real de cliente — substituir antes de publicar." },
  ];

  return (
    <section className="py-24 bg-cloud relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={revealRef}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-display-lg text-ink mb-6">O que dizem sobre a SP Drones</h2>
          <p className="text-body-lg text-steel">Confira a experiência de quem já aprovou nossa tecnologia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholders.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-steel/5 relative">
              <Quote size={40} className="text-cobalt/10 absolute top-6 right-6" />
              <p className="text-body-md text-steel mb-6 italic">&quot;{p.text}&quot;</p>
              <h4 className="text-body-lg font-bold text-ink">{p.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
