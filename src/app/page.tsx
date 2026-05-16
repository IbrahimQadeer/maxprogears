import { Metadata } from "next";
import { HomeHero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { BrandPositioning } from "@/sections/BrandPositioning";
import { Capabilities } from "@/sections/Capabilities";
import { Process } from "@/sections/Process";
import { GalleryPreview } from "@/sections/GalleryPreview";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Luxury Combat Sports Manufacturing",
  description:
    "Premium custom BJJ gis, rashguards, fight shorts, academy apparel, and private label manufacturing for combat sports teams worldwide.",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ProductShowcase />
      <BrandPositioning />
      <Capabilities />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <CTA />
    </main>
  );
}
