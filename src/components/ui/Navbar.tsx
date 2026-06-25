import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-40 bg-cloud/95 backdrop-blur-md border-b border-steel/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link href="#inicio" className="text-display-md flex items-center text-ink tracking-tight hover:opacity-90 transition-opacity">
          <span className="bg-gradient-to-b from-cobalt to-cobalt-deep text-transparent bg-clip-text">S</span>
          P DRONES
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-body-md font-medium text-ink">
          <Link href="#inicio" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Início</Link>
          <Link href="#riscos" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Riscos</Link>
          <Link href="#beneficios" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Benefícios</Link>
          <Link href="#tecnologia" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Tecnologia</Link>
          <Link href="#atuacao" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Área de Atuação</Link>
          <Link href="#contato" className="hover:text-cobalt transition-colors focus-visible:outline-warning">Contato</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-cobalt text-white rounded-full font-medium hover:bg-cobalt-deep transition-colors text-body-md focus-visible:outline-warning"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
