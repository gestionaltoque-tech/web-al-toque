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

export interface MenuProduct {
  name: string;
  price: string;
  description: string;
}

export interface MenuCategory {
  category: string;
  image?: string | null;
  items: MenuProduct[];
  tituloSeccion?: string;
  subtituloSeccion?: string;
}


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

export const getMenuData = async (): Promise<MenuCategory[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'categoriaDeCarta', 
      include: 2, 
      order: ['sys.createdAt'] as any, 
    });

    return response.items.map((cat) => ({
      category: cat.fields.titulo as string,
      tituloSeccion: cat.fields.tituloSeccion as string,
      subtituloSeccion: cat.fields.subtituloSeccion as string,
      image: (cat.fields.imagen as any)?.fields?.file?.url 
        ? `https:${(cat.fields.imagen as any).fields.file.url}` 
        : null,
      items: (cat.fields.productos as any[] || []).map((prod) => ({
        name: prod.fields.nombre as string,
        price: prod.fields.precio as string,
        description: prod.fields.description as string,
      })),
    }));
  } catch (error) {
    console.error("Error cargando el menú de Al Toque:", error);
    return [];
  }
};

export const getGalleryData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'gallery',
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      
      const titulo = item.fields.tituloGaleria as string;
      const subtitulo = item.fields.subtituloGaleria as string;
      const assets = item.fields.imagenes as any[]; 
      
      return {
        titulo: titulo , 
        subtitulo: subtitulo,
        imagenes: assets ? assets.map(asset => ({
          url: `https:${asset.fields.file.url}`,
          title: asset.fields.title as string
        })) : []
      };
    }
    return null;
  } catch (error) {
    console.error("Error al obtener la galería:", error);
    return null;
  }
};
export const getInstagramData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'instagramSection',
    });

    if (response.items.length > 0) {
      const fields = response.items[0].fields;
      return {
        usuario: fields.usuario as string,
        descripcion: fields.descripcion as string,
        enlace: fields.enlaceInstagram as string,
        textoBoton: fields.textoBoton as string,
      };
    }
    return null;
  } catch (error) {
    console.error("Error cargando Instagram:", error);
    return null;
  }
};