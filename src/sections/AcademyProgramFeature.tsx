import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function AcademyProgramFeature() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <Reveal>
          <div className="flex min-h-[640px] flex-col justify-between rounded-[36px] border border-white/10 bg-white p-8 text-black sm:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Academy program
              </p>
              <h2 className="mt-5 text-balance text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Make your gym look like a serious apparel brand.
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-zinc-700">
                Build custom academy identity across gis, ranked rashguards,
                fight shorts, hoodies, tees, and seasonal drops with one
                manufacturing language.
              </p>
              <div className="grid gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                <p>Private label apparel</p>
                <p>Consistent team branding</p>
                <p>Bulk and reorder planning</p>
                <p>Modern gym presentation</p>
              </div>
            </div>
            <div className="mt-10">
              <ButtonLink href="/academy-program" className="bg-black text-white hover:bg-zinc-800">
                Academy Program
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid min-h-[640px] gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950 sm:translate-y-12">
              <Image
                src="/gallery/m1.PNG"
                alt="Custom BJJ academy gi"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
            <div className="grid gap-5">
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950">
                <Image
                  src="/gallery/m2.PNG"
                  alt="Custom academy rashguard"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="rounded-[34px] border border-white/10 bg-zinc-950 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Built for
                </p>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-white">
                  Coaches, teams, founders, competitors.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
