import { AtSign } from "lucide-react";
import Link from "next/link";

export interface FooterData {
  titulo: string;
  texto?: string;
  follow?: string;
  instagramLink?: string;
  direccion?: string;
}

export default function Footer({ data }: { data?: FooterData }) {
  if (!data) return null;

  const { titulo, texto, follow, instagramLink, direccion } = data;

  return (
    <footer className="bg-surface-dark pt-16 pb-8 text-on-surface-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold text-3xl mb-2">
              {titulo}
            </h3>
            {texto && (
              <p className="font-body opacity-70 max-w-xs mx-auto md:mx-0">
                {texto}
              </p>
            )}
          </div>
          
          {(follow || instagramLink) && (
            <div className="text-center md:text-right">
              <h4 className="font-display font-semibold text-lg mb-4">{follow}</h4>
              {instagramLink && (
                <Link 
                  href={`https://instagram.com/${instagramLink}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 opacity-70 hover:text-primary hover:opacity-100 transition-all"
                >
                  <AtSign size={20} />
                  <span>@{instagramLink}</span>
                </Link>
              )}
            </div>
          )}
        </div>
        
        <div className="border-t border-on-surface-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50 font-body">
          <p>
            {direccion}
          </p>
          <p>
            © {new Date().getFullYear()} {titulo}.
          </p>
        </div>
      </div>
    </footer>
  );
}
