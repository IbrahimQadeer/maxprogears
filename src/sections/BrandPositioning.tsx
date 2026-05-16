import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";

export function BrandPositioning() {
  return (
    <section className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <ImagePanel
            src="/gallery/m3.PNG"
            alt="Custom fight shorts manufacturing"
            className="min-h-[520px]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
              Academy first
            </p>
            <h2 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white lg:text-7xl">
              Uniforms that make a room feel organized before class starts.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              We build gear for coaches who care about the details: logo scale,
              rank systems, sleeve placement, fabric weight, stitching, trim,
              packing, and the quiet confidence of a team that looks unified.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["BJJ academies", "MMA gyms", "Private labels"].map((item) => (
                <div key={item} className="border-l border-white/15 pl-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
