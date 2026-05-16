"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/site";

const expanded = Array.from({ length: 9 }, (_, index) => ({
  ...galleryImages[index % galleryImages.length],
  key: `${galleryImages[index % galleryImages.length].src}-${index}`,
}));

export function GalleryLightbox() {
  const [active, setActive] = useState<(typeof expanded)[number] | null>(null);

  return (
    <>
      <div className="masonry">
        {expanded.map((image, index) => (
          <button
            key={image.key}
            type="button"
            onClick={() => setActive(image)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950 text-left"
          >
            <div className={`relative ${index % 3 === 1 ? "h-[520px]" : "h-[390px]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {image.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            Close
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950">
            <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
