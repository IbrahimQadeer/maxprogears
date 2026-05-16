import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/gallery/m3.PNG"
          alt="Combat sports product texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
      </div>
      <div className="noise-layer pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
              Brand feel
            </p>
            <h2 className="mt-5 text-balance text-6xl font-semibold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
              The details should feel expensive before anyone reads the label.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-[34px] border border-white/10 bg-black/55 p-8 backdrop-blur-xl sm:p-10">
            <p className="text-lg leading-8 text-zinc-300">
              Combat sports products carry trust through texture: embroidery
              density, print sharpness, neck labels, waistband finish, fabric
              handfeel, and how the full kit photographs when a team walks onto
              the mat.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
              {["Craft", "Control", "Presence"].map((word) => (
                <p key={word} className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {word}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
