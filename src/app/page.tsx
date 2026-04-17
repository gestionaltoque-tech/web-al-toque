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
