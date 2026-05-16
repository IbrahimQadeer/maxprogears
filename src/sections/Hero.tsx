import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";

export function HomeHero() {
  return (
    <section className="luxury-shell relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
      <div className="hairline-grid absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="mx-auto grid max-w-[1800px] items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
              Premium private label combat sports manufacturing
            </p>
            <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-[9.8rem]">
              Built for academies that move like brands.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
              MAXPROGEARS manufactures custom BJJ gis, rashguards, fight shorts,
              academy apparel, and private label collections for serious gyms,
              coaches, and combat sports founders.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Request Production Quote</ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                Explore Gear
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:pb-8">
          <div className="grid gap-4 sm:grid-cols-[0.8fr_1fr] lg:min-h-[650px]">
            <ImagePanel
              src="/gallery/m2.PNG"
              alt="Custom rashguard for combat sports academy"
              className="min-h-[340px] sm:min-h-[520px] lg:translate-y-16"
              imageClassName="object-contain bg-zinc-950 p-8"
            />
            <div className="grid gap-4">
              <ImagePanel
                src="/gallery/m1.PNG"
                alt="Premium custom BJJ gi"
                priority
                className="min-h-[360px]"
              />
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {["Low MOQ", "Custom Labels", "Global Ship"].map((item) => (
                    <div key={item}>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
