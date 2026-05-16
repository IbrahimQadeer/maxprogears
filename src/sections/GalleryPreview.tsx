import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function GalleryPreview() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Gallery
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                Real product imagery, presented with a sharper eye.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white underline-offset-8 hover:underline"
            >
              View Gallery
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.05}>
              <Link
                href="/gallery"
                className="group relative block min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-6 left-6 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                  {image.label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
