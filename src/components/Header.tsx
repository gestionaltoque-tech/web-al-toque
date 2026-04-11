import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-20 h-20 overflow-hidden transition-transform group-hover:scale-105">
            <Image 
              src="/images/LOGO.png" 
              alt="Al Toque Logo" 
              fill 
              className="object-contain mix-blend-multiply"
            />
          </div>
          <span className="hidden sm:block ml-2 font-display font-semibold text-xl tracking-tight text-on-surface">
            Al Toque
          </span>
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
