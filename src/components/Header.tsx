import Image from "next/image";
import Link from "next/link";

export interface NavbarData {
  titulo?: string;
  logoUrl?: string | null;
}

export default function Header({ data }: { data?: NavbarData }) {
  const logoSrc = data?.logoUrl || "/images/LOGO.png";
  const brandTitle = data?.titulo;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-20 h-20 overflow-hidden">
            <Image 
              src={logoSrc} 
              alt={brandTitle || "Al Toque Logo"} 
              fill 
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
          {brandTitle && (
            <span className="hidden sm:block ml-2 font-display font-semibold text-xl tracking-tight text-on-surface">
              {brandTitle}
            </span>
          )}
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          <Link href="#menu" className="font-medium text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">
            Menú
          </Link>
          <Link href="#location" className="font-medium text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">
            Ubicación
          </Link>
          <Link href="#contact" className="font-medium text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
