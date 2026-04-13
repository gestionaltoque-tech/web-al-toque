import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import { getHeroData, getInfoSectionData } from "@/lib/contentful";

export default async function Home() {
  const heroData = await getHeroData();
  const infoData = await getInfoSectionData();
  
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <Hero data={heroData || undefined} />
      <InfoSection data={infoData || undefined} />
      <Menu />
      <Gallery />
      <Reviews />
      <ActionButtons />
      <Footer />
    </main>
  );
}
