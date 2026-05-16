import { Metadata } from "next";
import { ProductDetailPage } from "@/components/ui/ProductDetailPage";

export const metadata: Metadata = {
  title: "Rashguards",
  description:
    "Custom sublimated rashguard manufacturing for BJJ teams, MMA gyms, and private label no-gi collections.",
};

export default function RashguardsPage() {
  return (
    <ProductDetailPage
      eyebrow="Rashguards"
      title="No-gi kits with compression, clarity, and speed."
      intro="Full sublimation rashguards for academies, competition teams, and private labels that need sharp artwork, reliable fit, and durable athletic construction."
      image="/gallery/m2.PNG"
      features={[
        { title: "Sublimation", text: "Artwork is built into the fabric for clean color, full-panel graphics, sponsor placement, and ranked team systems." },
        { title: "Compression fabric", text: "4-way stretch materials support hard rounds, sweat-heavy sessions, and repeated wash cycles." },
        { title: "Team branding", text: "Create short sleeve, long sleeve, kids, ranked, coach, and event editions from one visual system." },
        { title: "Athletic finishing", text: "Flatlock seams, performance cuts, and clean collars keep the garment feeling professional in motion." },
      ]}
      options={[
        "Short sleeve",
        "Long sleeve",
        "Ranked colorways",
        "Flatlock stitching",
        "Sponsor artwork",
        "Custom neck labels",
        "Kids and adult sizing",
        "Private label drops",
      ]}
      gallery={["/gallery/m2.PNG", "/gallery/m3.PNG", "/gallery/m1.PNG"]}
      cta="Launch a no-gi collection that looks like a serious team uniform."
    />
  );
}
