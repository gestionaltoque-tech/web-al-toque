export const revalidate = 43200;

import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import { getActionButtonsData, getFooterData, getGalleryData, getHeroData, getInfoSectionData, getInstagramData, getMenuData, getNavbarData, getReviewsData } from "@/lib/contentful";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const [navbarData, footerData] = await Promise.all([
    getNavbarData(),
    getFooterData()
  ]);
  
  const title = navbarData?.titulo || "Al Toque";
  const description = footerData?.texto || "Tu parada rápida y sabrosa en el corazón de Ferrol. Cafetería Pet Friendly.";
  const logo = navbarData?.logoUrl || "https://al-toque-dun.vercel.app/images/LOGO.png";

  return {
    title: `${title} | Cafetería en Ferrol`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: logo,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [logo],
    },
  };
}

export default async function Home() {
  const [heroData, infoData, menuData, galleryData, instagramData, reviewsData, actionButtonsData, footerData, navbarData] = await Promise.all([
    getHeroData(),
    getInfoSectionData(),
    getMenuData(),
    getGalleryData(),
    getInstagramData(),
    getReviewsData(),
    getActionButtonsData(),
    getFooterData(),
    getNavbarData()
  ]);
  
 /*  console.log(menuData,"MENU DATA");
  console.log(galleryData,"galleryData");
  console.log(reviewsData,"reviewsData"); */
  
  return (
    <main className="min-h-screen bg-surface">
      <Header data={navbarData || undefined}/>
      <Hero data={heroData || undefined} />
      <InfoSection data={infoData || undefined} />
      <Menu data={menuData || undefined}/>
      <Gallery data={galleryData || undefined} instagramData={instagramData || undefined}/>
      <Reviews data={reviewsData} />
      <ActionButtons data={actionButtonsData || undefined} />
      <Footer data={footerData || undefined} />
    </main>
  );
}
