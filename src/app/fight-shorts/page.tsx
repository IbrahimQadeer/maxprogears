import { Metadata } from "next";
import { ProductDetailPage } from "@/components/ui/ProductDetailPage";

export const metadata: Metadata = {
  title: "Fight Shorts",
  description:
    "Custom MMA and grappling fight shorts manufacturing with sublimation, reinforced waistbands, durable fabrics, and private label trims.",
};

export default function FightShortsPage() {
  return (
    <ProductDetailPage
      eyebrow="Fight Shorts"
      title="MMA shorts built for pressure, movement, and brand impact."
      intro="Custom fight shorts for grappling, striking, MMA teams, and private label launches with durable fabric, athletic cuts, and full design control."
      image="/gallery/m3.PNG"
      features={[
        { title: "Durable fabrics", text: "Lightweight stretch, reinforced panels, and training-ready textiles selected for movement and repeated use." },
        { title: "Cut options", text: "No-split, side-split, hybrid grappling, and MMA silhouettes tailored to the team or brand." },
        { title: "Design control", text: "Sublimated panels, waistband branding, sponsor placements, and label systems keep the short premium." },
        { title: "Production consistency", text: "Repeatable color, sizing, and trim details help gyms and brands reorder with confidence." },
      ]}
      options={[
        "Split-side cut",
        "No-split grappling cut",
        "Velcro or elastic waist",
        "Drawcord systems",
        "Sublimated artwork",
        "Woven hem labels",
        "Reinforced stress points",
        "Team colorways",
      ]}
      gallery={["/gallery/m3.PNG", "/gallery/m2.PNG", "/gallery/m1.PNG"]}
      cta="Build fight shorts that feel athletic, durable, and unmistakably yours."
    />
  );
}
