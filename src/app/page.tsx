export const revalidate = 86400;

import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import { getGalleryData, getHeroData, getInfoSectionData, getInstagramData, getMenuData } from "@/lib/contentful";

export default async function Home() {
  const [heroData, infoData, menuData, galleryData, instagramData] = await Promise.all([
    getHeroData(),
    getInfoSectionData(),
    getMenuData(),
    getGalleryData(),
    getInstagramData()
  ]);
  
  console.log(menuData,"MENU DATA");
  console.log(galleryData,"galleryData");
  
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <Hero data={heroData || undefined} />
      <InfoSection data={infoData || undefined} />
      <Menu data={menuData || undefined}/>
      <Gallery data={galleryData || undefined} instagramData={instagramData || undefined}/>
      <Reviews />
      <ActionButtons />
      <Footer />
    </main>
  );
}
