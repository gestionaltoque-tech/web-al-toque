import { motion } from "framer-motion";
import { Clock, Dog, MapPin } from "lucide-react";
import Link from "next/link";

export default function InfoSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-surface-container-highest pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Horarios */}
          <motion.div variants={item} className="bg-surface-container-lowest p-10 rounded-4xl flex flex-col items-center text-center shadow-organic">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-6 text-primary">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-on-surface font-semibold mb-3">Horario</h3>
            <p className="text-on-surface-variant font-body">
              Lunes - Jueves: 7:30 - 22:30<br />
              Viernes - Sábados: 8:00 - 23:00<br />
              Domingos: 8:00 - 22:00
            </p>
          </motion.div>

          {/* Ubicación */}
          <motion.div variants={item} className="bg-surface-container-lowest p-10 rounded-4xl flex flex-col items-center text-center shadow-organic">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-6 text-primary">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-on-surface font-semibold mb-3">Ubicación</h3>
            <p className="text-on-surface-variant font-body mb-4">
              Rua Real 69,<br />
              Ferrol, A Coruña, 15402
            </p>
            <Link 
              href="https://maps.google.com/?q=Rua+Real+69,Ferrol,Spain+15402" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary-container underline decoration-2 underline-offset-4 transition-colors"
            >
              Ver en Google Maps
            </Link>
          </motion.div>

          {/* Pet Friendly */}
          <motion.div variants={item} className="bg-surface-container-lowest p-10 rounded-4xl flex flex-col items-center text-center shadow-organic transform md:-translate-y-4">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-6 text-primary">
              <Dog size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-on-surface font-semibold mb-3">Pet Friendly</h3>
            <p className="text-on-surface-variant font-body">
              Tu mejor amigo es bienvenido. Tenemos agua fresca y premios esperándolo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
