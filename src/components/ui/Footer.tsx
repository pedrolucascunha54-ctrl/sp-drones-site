import Link from "next/link";
import { 
  COMPANY_NAME, 
  COMPANY_SLOGAN, 
  INSTAGRAM_LINK, 
  WHATSAPP_LINK, 
  ADDRESS, 
  YEAR 
} from "@/lib/constants";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-ink text-cloud border-t border-steel/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <Link href="#inicio" className="text-display-md flex items-center text-white tracking-tight">
            <span className="bg-gradient-to-b from-cobalt to-cobalt-deep text-transparent bg-clip-text">S</span>
            P DRONES
          </Link>
          <p className="text-steel text-body-md mt-2">{COMPANY_SLOGAN}</p>
          <p className="text-steel text-caption mt-1">{ADDRESS}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-steel hover:text-white transition-colors focus-visible:outline-warning" aria-label="Instagram">
            <InstagramIcon size={28} />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-steel hover:text-white transition-colors text-body-md font-medium focus-visible:outline-warning" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-steel/20 text-center text-steel text-caption">
        <p>© {YEAR} {COMPANY_NAME}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
