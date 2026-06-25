"use client";

import { MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, ADDRESS } from "@/lib/constants";
import { useScrollReveal } from "../animation/useScrollReveal";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


export function CTAFinal() {
  const revealRef = useScrollReveal();

  return (
    <section id="contato" className="py-32 bg-ink relative z-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={revealRef}>
        <h2 className="text-display-lg text-white mb-6">Proteja sua safra com quem entende de precisão</h2>
        <p className="text-body-lg text-steel mb-12">
          Fale agora com a SP Drones e peça um orçamento para sua lavoura.
        </p>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-cobalt text-white rounded-full font-bold text-body-lg hover:bg-cobalt-deep transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 focus-visible:outline-warning mb-16"
        >
          <MessageCircle size={28} />
          Falar no WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-steel">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-warning">
            <InstagramIcon size={20} />
            {INSTAGRAM_HANDLE}
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            {ADDRESS}
          </div>
        </div>
      </div>
      
      {/* Visual landing pad for the drone */}
      <div id="landing-pad" className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-24 w-64 h-64 bg-cobalt/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
