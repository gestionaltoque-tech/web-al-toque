/**
 * Servicio para integración futura con Contentful CMS
 * 
 * Este archivo está preparado para conectar el menú de "Al Toque"
 * con un headless CMS (Contentful).
 * 
 * Requiere instalar: npm install contentful
 */

// import { createClient } from 'contentful';

/*
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});
*/

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: "Cafés" | "Bollería" | "Desayunos";
  image?: string;
}

/**
 * Función mock para obtener el menú. 
 * En el futuro, reemplázala con la llamada real a contentfulClient.getEntries()
 */
export const getMenuEntries = async (): Promise<MenuItem[]> => {
  // Simulación de datos para la Landing Page
  return [
    {
      id: "1",
      title: "Café de Especialidad",
      description: "Espresso doble con nuestro blend de origen Colombia.",
      price: "2.50€",
      category: "Cafés"
    },
    {
      id: "2",
      title: "Flat White",
      description: "Doble shot de espresso con leche texturizada.",
      price: "3.00€",
      category: "Cafés"
    },
    {
      id: "3",
      title: "Croissant Artesano",
      description: "Receta francesa tradicional, crujiente por fuera y mantequilla por dentro.",
      price: "1.80€",
      category: "Bollería"
    },
    {
      id: "4",
      title: "Roll de Canela",
      description: "Recién horneado, glaseado suave y masa esponjosa.",
      price: "2.50€",
      category: "Bollería"
    },
    {
      id: "5",
      title: "Tostada Aguacate",
      description: "Pan de masa madre, aguacate triturado, AOVE y semillas.",
      price: "5.50€",
      category: "Desayunos"
    },
    {
      id: "6",
      title: "Bowl Acai",
      description: "Acai orgánico, granola casera, plátano y frutos rojos frescos.",
      price: "6.50€",
      category: "Desayunos"
    }
  ];
};
