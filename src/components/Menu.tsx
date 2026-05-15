"use client";

import { MenuCategory } from "@/lib/contentful";
import Image from "next/image";

export default function Menu({ data }: { data?: MenuCategory[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="menu" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
        {data.map((categoryData, catIdx) => {
          const isEven = catIdx % 2 === 0;
          const hasSectionHeader = categoryData.tituloSeccion || categoryData.subtituloSeccion;
          const showDefaultHeader = catIdx === 0 && !hasSectionHeader;

          return (
            <div key={catIdx} className="flex flex-col">
              {(hasSectionHeader || showDefaultHeader) && (
                <div className="mb-16 relative z-10">
                  <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-4">
                      {hasSectionHeader ? categoryData.tituloSeccion : "Nuestra Carta"}
                    </h2>
                    {(categoryData.subtituloSeccion || showDefaultHeader) && (
                      <p className="font-body text-lg text-secondary">
                        {hasSectionHeader 
                          ? categoryData.subtituloSeccion 
                          : "Todo claro, rápido y al alcance. Productos de cercanía preparados con todo el cariño de Al Toque."}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className={`flex flex-col ${categoryData.image ? (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse') : ''} gap-10 lg:items-center items-start`}>
              
              {categoryData.image && (
                <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-organic flex-shrink-0 group">
                  <Image 
                    src={categoryData.image}
                    alt={categoryData.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-primary px-6 py-2 rounded-full font-display font-medium text-lg leading-none shadow-sm">
                    {categoryData.category}
                  </div>
                </div>
              )}

              <div className={`w-full ${categoryData.image ? 'lg:w-1/2' : 'max-w-4xl mx-auto'}`}>
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
                        <div className="flex justify-between items-center mb-2 gap-4">
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
          </div>
        );
      })}
      </div>
    </section>
  );
}
