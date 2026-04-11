"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/images/unnamed.webp",
  "/images/unnamed (2).jpg",
  "/images/unnamed (3).jpg",
  "/images/unnamed (4).jpg",
  "/images/unnamed (5).jpg",
  "/images/unnamed (6).jpg"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (typeof window !== 'undefined') {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-4">
            Nuestro Local
          </h2>
          <p className="font-body text-lg text-secondary">
            Un espacio creado para que te sientas como en casa.
          </p>
        </div>
        
        {/* Grid de Galería Modal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {photos.map((src, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-square overflow-hidden cursor-pointer shadow-sm hover:shadow-organic transition-shadow duration-300
                ${idx === 0 ? 'rounded-tl-[3rem] rounded-br-[1rem] rounded-tr-[1rem] rounded-bl-[1.5rem]' : ''}
                ${idx === 1 ? 'rounded-[1.5rem]' : ''}
                ${idx === 2 ? 'rounded-tr-[3rem] rounded-bl-[1rem] rounded-tl-[1rem] rounded-br-[1.5rem]' : ''}
                ${idx === 3 ? 'rounded-bl-[3rem] rounded-tr-[1rem] rounded-tl-[1rem] rounded-br-[1.5rem]' : ''}
                ${idx === 4 ? 'rounded-[1.5rem]' : ''}
                ${idx === 5 ? 'rounded-br-[3rem] rounded-tl-[1rem] rounded-tr-[1rem] rounded-bl-[1.5rem]' : ''}
                ${idx > 5 ? 'rounded-3xl' : ''}
              `}
            >
              <Image 
                src={src} 
                alt={`Momentos en Al Toque - Foto ${idx + 1}`}
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                 <span className="opacity-0 hover:opacity-100 text-white font-medium drop-shadow-md">Ampliar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Instagram Call To Action (Reemplazando el video roto) */}
        <div className="mt-24 max-w-lg mx-auto">
          <a 
            href="https://www.instagram.com/altoque_ferrol/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-10 shadow-organic border border-outline-variant/20 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-fixed to-primary-container rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity" />
              
              <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full p-1 mb-6 shadow-sm">
                <div className="w-full h-full bg-surface-container-lowest rounded-full flex items-center justify-center relative overflow-hidden text-on-surface">
                   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-on-surface mb-2">@altoque_ferrol</h3>
              <p className="font-body text-on-surface-variant mb-8 px-4">
                Únete a nuestra comunidad. Descubre los últimos Reels, novedades del menú y el día a día detrás de nuestra barra.
              </p>
              
              <div className="bg-primary text-on-primary font-medium px-8 py-3 rounded-full flex items-center gap-2 group-hover:bg-primary-container group-hover:text-primary transition-colors">
                 <span>Seguir en Instagram</span>
              </div>
            </div>
          </a>
        </div>

      </div>

      {/* Lightbox / Modal con controles */}
      <AnimatePresence>
        {selectedIndex !== null && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
             onClick={() => setSelectedIndex(null)}
           >
              {/* Opción de Cierre */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[110]"
                aria-label="Cerrar imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Botón Anterior */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 sm:left-10 text-white/50 hover:text-white p-3 bg-white/5 hover:bg-white/20 rounded-full transition-all z-[110]"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              {/* Botón Siguiente */}
              <button 
                onClick={handleNext}
                className="absolute right-4 sm:right-10 text-white/50 hover:text-white p-3 bg-white/5 hover:bg-white/20 rounded-full transition-all z-[110]"
                aria-label="Siguiente imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              
              <motion.div 
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full max-w-6xl max-h-[85vh] overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
              >
                <Image 
                  src={photos[selectedIndex]}
                  alt={`Imagen ampliada ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </motion.div>
           </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
