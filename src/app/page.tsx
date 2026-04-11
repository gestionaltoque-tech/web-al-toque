"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <Hero />
      <InfoSection />
      <Menu />
      <Gallery />
      <Reviews />
      <ActionButtons />
      <Footer />
    </main>
  );
}
