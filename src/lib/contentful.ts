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
    title?: string;
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

export interface ReviewData {
  name?: string;
  text: string;
  originalDate?: string;
  link: string;
}


export const getHeroData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'landing', 
      limit: 1,
    });
    if (response.items.length === 0) return undefined;
    const fields = response.items[0].fields as Record<string, unknown>;
    
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

    if (response.items.length === 0) return undefined;
    const fields = response.items[0].fields as Record<string, unknown>;

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
      order: ['sys.createdAt'], 
    });

    return response.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      const imagen = fields.imagen as ContentfulAsset | undefined;
      const productos = fields.productos as Array<{ fields: Record<string, unknown> }> | undefined;

      return {
        category: fields.titulo as string,
        tituloSeccion: fields.tituloSeccion as string | undefined,
        subtituloSeccion: fields.subtituloSeccion as string | undefined,
        image: imagen?.fields?.file?.url 
          ? `https:${imagen.fields.file.url}` 
          : null,
        items: (productos || []).map((prod) => ({
          name: prod.fields.nombre as string,
          price: prod.fields.precio as string,
          description: prod.fields.descripcion as string,
        })),
      };
    });
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
      const fields = item.fields as Record<string, unknown>;
      
      const titulo = fields.tituloGaleria as string | undefined;
      const subtitulo = fields.subtituloGaleria as string | undefined;
      const assets = fields.imagenes as ContentfulAsset[] | undefined; 
      
      return {
        titulo: titulo, 
        subtitulo: subtitulo,
        imagenes: assets ? assets.map(asset => ({
          url: `https:${asset.fields.file.url}`,
          title: asset.fields.title
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
      const fields = response.items[0].fields as Record<string, unknown>;
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

export const getReviewsData = async (): Promise<ReviewData[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'review',
      order: ['-sys.createdAt'],
    });

    return response.items
      .filter(item => item.fields.texto && item.fields.link)
      .map((item: any) => ({
        name: item.fields.name as string | undefined,
        text: item.fields.texto as string,
        originalDate: item.fields.originalDate as string | undefined,
        link: item.fields.link as string,
      }));
  } catch (error) {
    console.error("Error al obtener las reseñas:", error);
    return [];
  }
};

export const getActionButtonsData = async () => {
  const response = await contentfulClient.getEntries({
    content_type: 'ActionButtonsSection', 
  });

  if (response.items.length > 0) {
    const fields = response.items[0].fields as any;
    return {
      titulo: fields.titulo,
      whatsapp: {
        texto: fields.textoWhatsapp,
        enlace: fields.enlaceWhatsApp,
      },
      mapas: {
        texto: fields.textoMapas,
        enlace: fields.enlaceMapas,
      },
      llamada: {
        texto: fields.textoLlamada,
        telefono: fields.telefonoLlamada,
      }
    };
  }
  return null;
};

export const getFooterData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'footer',
      limit: 1,
    });

    if (response.items.length > 0) {
      const fields = response.items[0].fields as any;
      return {
        titulo: fields.tituloFooter,
        texto: fields.textoFooter,
        follow: fields.follow,
        instagramLink: fields.enlaceInstagram,
        direccion: fields.direccion,
      };
    }
    return null;
  } catch (error) {
    console.error("Error cargando Footer:", error);
    return null;
  }
};

export const getNavbarData = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'navbar',
      limit: 1,
    });

    if (response.items.length > 0) {
      const fields = response.items[0].fields as any;
      return {
        titulo: fields.tituloSitio,
        logoUrl: fields.logo?.fields?.file?.url ? `https:${fields.logo.fields.file.url}` : null,
      };
    }
    return null;
  } catch (error) {
    console.error("Error cargando el Navbar:", error);
    return null;
  }
};