"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const words = ["rápida", "pet-friendly", "acogedora"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface">
      {/* Background with Intentional Asymmetry */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-[60vh] md:h-full bg-surface-container-low rounded-bl-[4rem] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="max-w-xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight text-on-surface -tracking-[0.02em] mb-6">
            Tu parada <br className="md:hidden" />
            <span className="text-primary italic inline-flex items-center min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            y sabrosa en Ferrol.
          </h1>
          <p className="font-body text-lg text-on-surface-variant mb-10 w-4/5 leading-relaxed">
            Disfruta del mejor café de especialidad y bollería artesanal en un ambiente relajado y acogedor. ¡Tus mascotas son bievenidas!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://qr1.be/FQDJ" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-on-primary font-medium text-lg rounded-5xl bg-gradient-to-br from-primary to-primary-container hover:to-primary hover:shadow-organic transition-all duration-300 transform hover:-translate-y-1"
            >
              Ver Carta Online
            </Link>
            <Link 
              href="#menu" 
              className="inline-flex items-center justify-center px-8 py-4 text-primary font-medium text-lg rounded-5xl bg-surface border-2 border-primary/20 hover:border-primary hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              Nuestro Menú
            </Link>
          </div>

          {/* Social Proof: Reseñas de Google */}
  {/*         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10"
          >
            <Link 
              href="https://www.google.com/search?sca_esv=8e2fe23374549be9&rlz=1C1UEAD_esES1041ES1041&sxsrf=ANbL-n6-pLjW4sTvVSd8WKwTuEMdxQQjGw:1775869421226&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-4UORMzVpzwoDZld-YtjVKhgytvAvGW3CYM4H0tp6-7SJ2mg6PFKwRXT449Ntb12N5c3jNIA9IBAEC0imwRNd9R6fSX2akK4K28JDA_pTE-LdqfxoULDCt0s2uBggHcZW1ytHXg&q=Caf%C3%A9+Al+Toque+Rese%C3%B1as&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOd4MMqnK4jcbZZWQoELXD3MzMr2cVg8faIbFLUGcYprGcioYRR2RbO0omtC4ZYOCKoOsyGhwYz7oxgSvtqNHYzQOHUTT&hl=es-ES&sa=X&ved=2ahUKEwiP6JOQzeSTAxXZ4QIHHZgxGpsQ_4MLegQIURAO&biw=1920&bih=911&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
              title="Lee nuestras reseñas en Google"
            >
              <div className="relative h-16 w-56 sm:w-64 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Image 
                  src="/images/media_google_reseña.png" 
                  alt="Nuestra puntuación en Google Reseñas" 
                  fill 
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </Link>
          </motion.div> */}
        </motion.div>

        <motion.div 
          className="relative h-[40vh] md:h-[60vh] w-full rounded-[3rem] overflow-hidden shadow-organic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={index === 1 ? "/images/pet.png" : "/images/unnamed (1).jpg"}
                alt="Café de especialidad en Al Toque"
                fill
                className={`object-cover ${index === 1 ? 'object-center' : 'object-bottom'}`}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
