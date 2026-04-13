"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroProps {
  data?: {
    tituloPrincipal?: string;
    tituloPrincipalParte2?: string;
    palabrasRotativasTitulo?: string[];
    subtituloPrincipal?: string;
    galleryImagenesPrincipal?: any[];
  };
}

const defaultWords = ["rápida", "pet-friendly", "acogedora"];

export default function Hero({ data }: HeroProps) {
  const [index, setIndex] = useState(0);

  // Mapeo selectivo con fallbacks
  const tituloParte1 = data?.tituloPrincipal || "Tu parada ";
  const tituloParte2 = data?.tituloPrincipalParte2 || "y sabrosa en Ferrol.";
  const palabras = data?.palabrasRotativasTitulo && data.palabrasRotativasTitulo.length > 0 
    ? data.palabrasRotativasTitulo 
    : defaultWords;
  const subtitulo = data?.subtituloPrincipal || "Disfruta del mejor café de especialidad y bollería artesanal en un ambiente relajado y acogedor. ¡Tus mascotas son bievenidas!";
  const imagenes = data?.galleryImagenesPrincipal || [];

  useEffect(() => {
    if (palabras.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % palabras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [palabras.length]);

  // Lógica de imagen: Contentful (si existe) o fallback local
  const getHeroImage = (idx: number) => {
    // Intentamos sacar la imagen de la galería de Contentful
    // Usamos el operador % para que si hay 3 palabras pero solo 1 foto, repita la foto
    const imagenActual = imagenes.length > 0 ? imagenes[idx % imagenes.length] : null;
    const contentfulImg = imagenActual?.fields?.file?.url;

    if (contentfulImg) {
      return contentfulImg.startsWith("//") ? `https:${contentfulImg}` : contentfulImg;
    }
    // Fallback local basado en la lógica original
    return idx === 1 ? "/images/pet.png" : "/images/unnamed (1).jpg";
  };

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
            {tituloParte1} <br className="md:hidden" />
            <span className="text-primary italic inline-flex items-center min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={palabras[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {palabras[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            {tituloParte2}
          </h1>
          <p className="font-body text-lg text-on-surface-variant mb-10 w-4/5 leading-relaxed">
            {subtitulo}
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
        </motion.div>

        <motion.div 
          className="relative h-[40vh] md:h-[60vh] w-full rounded-[3rem] overflow-hidden shadow-organic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={getHeroImage(index)}
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
