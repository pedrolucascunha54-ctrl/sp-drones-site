"use client";

import { useScrollReveal } from "../animation/useScrollReveal";

export function SobreEquipamento() {
  const revealRef = useScrollReveal();

  return (
    <section id="tecnologia" className="py-24 bg-cloud relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center" ref={revealRef}>
        <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video 
            src="/video/videoplayback (7).mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-display-lg text-ink mb-6">Tecnologia DJI Agras T50</h2>
          <p className="text-body-lg text-steel">
            Operamos com o DJI Agras T50, um dos drones agrícolas mais avançados do mercado, 
            com sistema de pulverização de precisão e mapeamento em tempo real — garantindo 
            que cada aplicação seja feita com máxima eficiência.
          </p>
        </div>
      </div>
    </section>
  );
}
