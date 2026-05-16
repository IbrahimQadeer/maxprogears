import { Metadata } from "next";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "MAXPROGEARS product gallery featuring custom BJJ gis, rashguards, fight shorts, and combat sports manufacturing work.",
};

export default function GalleryPage() {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
              Gallery
            </p>
            <h1 className="mt-6 max-w-5xl text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Product details with a manufacturing eye.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              A curated look at custom combat sports gear, using the existing MAXPROGEARS product imagery in a responsive editorial gallery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <GalleryLightbox />
        </div>
      </section>
    </main>
  );
}
