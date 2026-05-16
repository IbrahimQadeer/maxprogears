import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function HomeHero() {
  return (
    <section className="luxury-shell relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="hairline-grid absolute inset-0 -z-10" />
      <div className="noise-layer pointer-events-none absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute left-1/2 top-28 -z-10 hidden h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-white/10 xl:block" />

      <div className="mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100vh-9rem)] items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="relative z-10 max-w-6xl pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                OEM and ODM combat sports manufacturing
              </p>
              <h1 className="mt-6 text-balance text-[4.1rem] font-semibold leading-[0.86] tracking-tight text-white sm:text-[6.8rem] lg:text-[8.4rem] xl:text-[11.2rem]">
                Gear with a fight house signature.
              </h1>
              <div className="mt-8 grid max-w-3xl gap-7 border-l border-white/15 pl-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="text-pretty text-base leading-8 text-zinc-300 sm:text-lg">
                  MAXPROGEARS builds premium BJJ and MMA apparel for academies,
                  gyms, and private label brands that need product depth,
                  disciplined finishing, and modern visual authority.
                </p>
                <div className="hidden h-px w-28 editorial-rule sm:block" />
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/quote">Start Quote</ButtonLink>
                <ButtonLink href="/products" variant="secondary">
                  View Products
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative min-h-[560px] lg:min-h-[720px]">
              <div className="absolute left-0 top-10 z-10 w-[54%] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 sm:w-[46%] lg:-left-8">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/gallery/m2.PNG"
                    alt="Custom rashguard private label product"
                    fill
                    priority
                    sizes="(min-width: 1024px) 22vw, 48vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="border-t border-white/10 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Sublimated no-gi
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-[72%] overflow-hidden rounded-[38px] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/m1.PNG"
                    alt="Premium custom BJJ gi manufacturing"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-400">
                      Custom academy production
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      BJJ Gis. Rashguards. Fight Shorts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="metal-panel absolute right-4 top-0 hidden rounded-full border border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 shadow-xl shadow-black/40 sm:block">
                Sialkot to worldwide
              </div>
              <div className="absolute bottom-12 left-4 hidden rounded-[24px] border border-white/10 bg-black/60 p-5 backdrop-blur lg:block">
                <p className="text-5xl font-semibold tracking-tight text-white">OEM</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  ODM private label
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ["Low MOQ", "Accessible academy runs"],
              ["Premium QC", "Stitching, print, trims"],
              ["Fast Comms", "Clear production flow"],
              ["Global Reach", "Worldwide dispatch"],
            ].map(([title, text]) => (
              <div key={title} className="bg-black/70 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {title}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
