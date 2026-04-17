"use client";

import { motion } from "framer-motion";
import { ReviewData } from "@/lib/contentful";

const REVIEWS_FALLBACK: ReviewData[] = [
  {
    name: "Isabel Quintairos Blanco",
    text: "Estupendo local para tomar café, desayunar o merendar. Opciones sin lactosa y sin gluten, deliciosas y frescas, incluido pan del día. Las palmeras de chocolate son espectaculares (y grandes, pongo en la foto al lado de un paquete de pañuelos). El personal, encantador, y el servicio, magnífico. Además los precios son muy razonables. Es nuestra cafetería en Ferrol. Maravillosa.",
    originalDate: "2026-02-11",
    link: "https://share.google/4HO6txVaEJycsEAHk"
  },
  {
    name: "Sara Iglesias",
    text: "Estupendo café en el centro de Ferrol con mucha variedad. El trato ha sido muy bueno, son súper amables. El té matcha buenísimo y la sugerencia de la camarera del té con remolacha y jengibre, espectacular. Repetiremos seguro 🤗",
    originalDate: "2026-02-11",
    link: "https://share.google/Oywwp3YJQ7taQQeVA"
  },
  {
    name: "Carmen Mar",
    text: "Una muy buena opción para ir a tomar café sólo o acompañado. Sitio encantador con un buen ambiente familiar, carta de dulces sencilla pero todo de calidad. Nos pedimos un café con leche más un bizcocho de platano con chocolate para acompañar y ¡estaba riquísimo! Bizcocho tierno, esponjoso... y el café de sobresaliente. Encima la gente que trabaja allí encantadores. Sitio en mi lista para cuando vuelva a Ferrol ♡",
    originalDate: "2025-05-11",
    link: "https://share.google/PoiZ69mGy60pi2yRr"
  }
];

function getRelativeTime(dateString?: string) {
  if (!dateString) return "Hace poco";
  const date = new Date(dateString);
  const now = new Date();
  
  let months = (now.getFullYear() - date.getFullYear()) * 12;
  months -= date.getMonth();
  months += now.getMonth();
  
  if (months <= 0) return "Hace unas semanas";
  
  const years = Math.floor(months / 12);
  
  if (years >= 1) {
    return years === 1 ? 'Hace 1 año' : `Hace ${years} años`;
  }
  return months === 1 ? 'Hace 1 mes' : `Hace ${months} meses`;
}

interface ReviewsProps {
  data?: ReviewData[];
}

export default function Reviews({ data }: ReviewsProps) {
  const reviewsToDisplay = data && data.length > 0 ? data : REVIEWS_FALLBACK;

  return (
    <section className="py-24 bg-surface-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface-dark mb-4">
            Lo que dicen de nosotros
          </h2>
          <p className="font-body text-lg text-on-surface-dark/70">
            Nuestros clientes nos avalan en Google.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviewsToDisplay.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <a 
                href={review.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/10 hover:border-primary/50 hover:shadow-organic hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-primary">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-on-surface-dark/90 leading-relaxed mb-6 italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-display font-bold text-white uppercase">
                      {(review.name || "Cliente").charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-on-surface-dark leading-tight">{review.name || "Cliente"}</h4>
                      <span className="text-xs text-on-surface-dark/50">{getRelativeTime(review.originalDate)}</span>
                    </div>
                  </div>
                  {/* Google "G" icon mini */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
