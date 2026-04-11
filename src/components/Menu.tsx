"use client";

import Image from "next/image";

export const CAFE_MENU = [
  {
    category: "Cafés y Bebidas Calientes",
    items: [
      { name: "Espresso / Ristretto", price: "1.40€", description: "Café de especialidad recién molido." },
      { name: "Café Cortado", price: "1.50€", description: "Con un toque de leche cremosa." },
      { name: "Café con Leche", price: "1.70€", description: "Equilibrio perfecto entre café y leche." },
      { name: "Capuccino", price: "2.50€", description: "Espuma densa con cacao o canela espolvoreada." },
      { name: "Latte Macchiato", price: "2.80€", description: "Tres capas de placer: leche, espresso y espuma." },
      { name: "Mocha", price: "3.20€", description: "Café, leche y un toque de chocolate artesano." },
      { name: "Infusiones Orgánicas", price: "1.80€", description: "Té verde, rojo, negro y mezclas herbales." },
      { name: "Chocolate a la Taza", price: "2.50€", description: "Espeso y reconfortante." }
    ]
  },
  {
    category: "Desayunos y Tostas",
    image: "/images/unnamed (3).jpg",
    items: [
      { name: "Tostada con Tomate y AOVE", price: "2.20€", description: "Pan artesano, tomate triturado y aceite virgen extra." },
      { name: "Tostada Al Toque", price: "4.50€", description: "Aguacate, huevo poché y semillas sobre pan de masa madre." },
      { name: "Bowl de Yogur y Granola", price: "3.90€", description: "Yogur natural, frutas de temporada y granola crujiente." },
      { name: "Croissant a la Plancha", price: "1.80€", description: "Mantequilla y mermelada o solo." }
    ]
  },
  {
    category: "Bollería Artesana",
    image: "/images/bolleria_artesana.webp",
    items: [
      { name: "Cookie de Chocolate", price: "2.00€", description: "Horneada diariamente con pepitas de chocolate negro." },
      { name: "Bizcocho Casero", price: "2.50€", description: "Pregunta por el sabor del día (Limón, Naranja, Marmolado)." },
      { name: "Palmera de Chocolate", price: "1.90€", description: "Hojaldre crujiente bañado en chocolate." }
    ]
  },
  {
    category: "Extras y Bebidas Frías",
    items: [
      { name: "Leches Especiales", price: "+0.20€", description: "Avena, Soja o Almendra." },
      { name: "Zumo de Naranja Natural", price: "2.50€", description: "Recién exprimido." },
      { name: "Iced Latte", price: "3.00€", description: "Nuestro café con leche servido con mucho hielo." }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-4">
            Nuestra Carta
          </h2>
          <p className="font-body text-lg text-secondary">
            Todo claro, rápido y al alcance. Productos de cercanía preparados con todo el cariño de Al Toque.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">
        {CAFE_MENU.map((categoryData, catIdx) => {
          const isEven = catIdx % 2 === 0;

          return (
            <div key={catIdx} className={`flex flex-col ${categoryData.image ? (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse') : ''} gap-10 items-start`}>
              
              {/* Bloque Izquierdo/Derecho: Imagen (Si la categoría la tiene) */}
              {categoryData.image && (
                <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-organic flex-shrink-0 group">
                  <Image 
                    src={categoryData.image}
                    alt={categoryData.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Etiqueta visual sutil sobre la foto */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-primary px-6 py-2 rounded-full font-display font-medium text-lg leading-none shadow-sm">
                    {categoryData.category}
                  </div>
                </div>
              )}

              {/* Bloque Principal: Platos y Precios */}
              <div className={`w-full ${categoryData.image ? 'lg:w-1/2' : 'max-w-4xl mx-auto'}`}>
                 {/* Si no hay imagen, titulo encima de la lista */}
                 {!categoryData.image && (
                    <h3 className="font-display text-3xl text-primary font-medium mb-8 pb-4 border-b-2 border-primary/20">
                       {categoryData.category}
                    </h3>
                 )}

                 <div className={`grid gap-x-8 gap-y-6 ${!categoryData.image ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {categoryData.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="group flex flex-col p-5 rounded-[1.5rem] bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-low hover:shadow-sm border border-outline-variant/10 relative overflow-hidden"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                        <div className="flex justify-between items-baseline mb-2 gap-4">
                          <h4 className="font-body text-xl font-semibold text-on-surface leading-tight">
                            {item.name}
                          </h4>
                          <div className="font-display font-semibold text-lg text-primary shrink-0 opacity-90 px-3 py-1 bg-primary/5 rounded-full">
                            {item.price}
                          </div>
                        </div>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-90">
                          {item.description}
                        </p>
                      </div>
                    ))}
                 </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
