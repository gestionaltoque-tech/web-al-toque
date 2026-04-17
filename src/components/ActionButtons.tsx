"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ActionButtonsData {
  titulo?: string;
  whatsapp?: {
    texto?: string;
    enlace?: string;
  };
  mapas?: {
    texto?: string;
    enlace?: string;
  };
  llamada?: {
    texto?: string;
    telefono?: string;
  };
}

export default function ActionButtons({ data }: { data?: ActionButtonsData }) {
  if (!data) return null;

  const { titulo, whatsapp, mapas, llamada } = data;

  if (!whatsapp?.enlace && !mapas?.enlace && !llamada?.telefono) return null;

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-surface-container-low rounded-tr-[4rem] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {titulo && (
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-12">
            {titulo}
          </h2>
        )}
        
        <div className="grid sm:grid-cols-3 gap-6">
          {whatsapp?.enlace && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href={`https://wa.me/${whatsapp.enlace}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MessageCircle size={32} strokeWidth={1.5} />
                </div>
                <span className="font-body font-semibold text-on-surface">
                  {whatsapp.texto || "WhatsApp"}
                </span>
              </Link>
            </motion.div>
          )}

          {mapas?.enlace && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href={mapas.enlace} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={32} strokeWidth={1.5} />
                </div>
                <span className="font-body font-semibold text-on-surface">
                  {mapas.texto || "Ver en Mapa"}
                </span>
              </Link>
            </motion.div>
          )}

          {llamada?.telefono && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href={`tel:+${llamada.telefono}`} 
                className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={32} strokeWidth={1.5} />
                </div>
                <span className="font-body font-semibold text-on-surface">
                  {llamada.texto || "Llamar ahora"}
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
