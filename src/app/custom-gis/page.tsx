import { Metadata } from "next";
import { ProductDetailPage } from "@/components/ui/ProductDetailPage";

export const metadata: Metadata = {
  title: "Custom BJJ Gis",
  description:
    "Premium custom BJJ gi manufacturing with embroidery, woven labels, custom taping, academy branding, and private label production.",
};

export default function CustomGisPage() {
  return (
    <ProductDetailPage
      eyebrow="Custom BJJ Gis"
      title="Academy gis with weight, structure, and presence."
      intro="Manufacture custom BJJ gis for daily training, competition teams, kids programs, and private label collections with premium trims and repeatable sizing."
      image="/gallery/m1.PNG"
      features={[
        { title: "Fabric and weave", text: "Pearl weave, gold weave, ripstop pants, reinforced stress points, and fabric weights chosen around your academy use case." },
        { title: "Embroidery", text: "Chest, shoulder, back, thigh, and skirt embroidery planned for visibility, durability, and competition-friendly balance." },
        { title: "Woven labels", text: "Neck labels, size labels, inner branding, sleeve trims, and woven patches give the gi a finished private label feel." },
        { title: "Academy programs", text: "Adult, kids, coach, and competition runs can be produced with consistent colorways and repeat order planning." },
      ]}
      options={[
        "Pearl weave jacket",
        "Ripstop or twill pants",
        "Custom embroidery",
        "Woven neck labels",
        "Inner jacket taping",
        "Contrast stitching",
        "Rank color systems",
        "Custom packaging",
      ]}
      cta="Create a gi program your academy can reorder season after season."
    />
  );
}
