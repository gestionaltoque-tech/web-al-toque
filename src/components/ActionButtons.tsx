"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ActionButtons() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-surface-container-low rounded-tr-[4rem] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-12">
          ¿Te esperamos?
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              href="https://wa.me/34602400773" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MessageCircle size={32} strokeWidth={1.5} />
              </div>
              <span className="font-body font-semibold text-on-surface">
                WhatsApp
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              href="https://maps.google.com/?q=Rua+Real+69,Ferrol,Spain+15402" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <span className="font-body font-semibold text-on-surface">
                Ver en Mapa
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              href="tel:+34602400773" 
              className="flex flex-col items-center justify-center p-8 bg-surface-container shadow-sm hover:shadow-organic rounded-4xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <span className="font-body font-semibold text-on-surface">
                Llamar ahora
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
