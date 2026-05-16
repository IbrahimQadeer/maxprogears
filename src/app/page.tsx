import { Metadata } from "next";
import { HomeHero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { MoqSection } from "@/sections/MoqSection";
import { WhyMaxprogears } from "@/sections/WhyMaxprogears";
import { Process } from "@/sections/Process";
import { AcademyProgramFeature } from "@/sections/AcademyProgramFeature";
import { SocialProof } from "@/sections/SocialProof";
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
      <MoqSection />
      <WhyMaxprogears />
      <Process />
      <AcademyProgramFeature />
      <SocialProof />
      <CTA />
    </main>
  );
}

