import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DroneFlightPath } from "@/components/ui/DroneFlightPath";

import { Hero } from "@/components/sections/Hero";
import { RiscosSection } from "@/components/sections/RiscosSection";
import { BeneficiosPrecisao } from "@/components/sections/BeneficiosPrecisao";
import { BeneficiosEconomia } from "@/components/sections/BeneficiosEconomia";
import { BeneficiosAgilidade } from "@/components/sections/BeneficiosAgilidade";
import { BeneficiosAplicacaoUniforme } from "@/components/sections/BeneficiosAplicacaoUniforme";
import { Sustentabilidade } from "@/components/sections/Sustentabilidade";
import { DadosDecisao } from "@/components/sections/DadosDecisao";
import { SobreEquipamento } from "@/components/sections/SobreEquipamento";
import { AreaAtuacao } from "@/components/sections/AreaAtuacao";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      
      <main className="relative flex flex-col w-full">
        {/* O DroneFlightPath é o overlay absoluto que acompanha todo o scroll */}
        <DroneFlightPath />
        
        <Hero />
        <RiscosSection />
        <BeneficiosPrecisao />
        <BeneficiosEconomia />
        <BeneficiosAgilidade />
        <BeneficiosAplicacaoUniforme />
        <Sustentabilidade />
        <DadosDecisao />
        <SobreEquipamento />
        <AreaAtuacao />
        <Depoimentos />
        <CTAFinal />
      </main>

      <Footer />
    </>
  );
}
