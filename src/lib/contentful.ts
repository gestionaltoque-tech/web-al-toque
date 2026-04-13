import { createClient } from 'contentful';

// 1. Configuramos el cliente con las variables de entorno
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: "Cafés" | "Bollería" | "Desayunos";
  image?: string;
}

interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

/**
 * Obtiene los datos del Hero de la sección Landing
 */
export const getHeroData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'landing', 
      limit: 1,
    });
    const fields = response.items[0]?.fields;
    if (!fields) return undefined;
    return {
      tituloPrincipal: fields.tituloPrincipal as string,
      tituloPrincipalParte2: fields.tituloPrincipalParte2 as string,
      palabrasRotativasTitulo: fields.palabrasRotativasTitulo as string[],
      subtituloPrincipal: fields.subtituloPrincipal as string,
      galleryImagenesPrincipal: fields.galleryImagenesPrincipal as ContentfulAsset[], 
    };
  } catch (error) {
    console.error("Error al obtener datos de Contentful:", error);
    return undefined;
  }
};

export const getInfoSectionData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'infoSection', 
      limit: 1,
    });

    const fields = response.items[0]?.fields;
    if (!fields) return undefined;

    return {
      tituloHorario: fields.tituloHorario as string,
      textoHorario: fields.textoHorario as string,
      tituloUbicacion: fields.tituloUbicacion as string,
      textoUbicacion: fields.textoUbicacion as string,
      enlaceGoogleMaps: fields.enlaceGoogleMaps as string,
      textoVerEnGoogle: fields.textoVerEnGoogle as string,
      tituloMascotas: fields.tituloMascotas as string,
      textoMascotas: fields.textoMascotas as string,
    };
  } catch (error) {
    console.error("Error al obtener InfoSection:", error);
    return undefined;
  }
};