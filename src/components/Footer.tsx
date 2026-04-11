import { AtSign } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-dim pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold text-2xl text-on-surface mb-2">
              Al Toque
            </h3>
            <p className="font-body text-on-surface-variant max-w-xs mx-auto md:mx-0">
              Tu parada rápida y sabrosa en el corazón de Ferrol.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold text-lg text-on-surface mb-4">Síguenos</h4>
            <Link 
              href="https://instagram.com/altoque_ferrol" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <AtSign size={20} />
              <span>@altoque_ferrol</span>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant font-body">
          <p>
            Rua Real 69, Ferrol, Spain 15402
          </p>
          <p>
            © {new Date().getFullYear()} Al Toque. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
