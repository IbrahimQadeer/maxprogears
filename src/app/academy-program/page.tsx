import { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Process } from "@/sections/Process";

export const metadata: Metadata = {
  title: "Academy Program",
  description:
    "BJJ academy partnership program for custom team gear, bulk orders, low MOQ production, worldwide shipping, and private label manufacturing.",
};

const benefits = [
  "Low MOQ production for new academy kits",
  "Bulk order planning for adults, kids, and competitors",
  "Coordinated gis, rashguards, shorts, and apparel",
  "Design support for logos, ranks, and sponsor placements",
  "Worldwide shipping from Sialkot, Pakistan",
  "Repeat order support for seasonal team drops",
];

export default function AcademyProgramPage() {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
              Academy partnership
            </p>
            <h1 className="mt-6 max-w-5xl text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Custom gear systems for serious BJJ academies.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Build team packages, student uniforms, coach apparel, ranked
              no-gi collections, and private label drops with one production workflow.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Apply for Quote</ButtonLink>
              <ButtonLink href="/products" variant="secondary">View Products</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.04}>
              <div className="min-h-56 rounded-[28px] border border-white/10 bg-zinc-950 p-8">
                <p className="text-sm font-semibold text-zinc-600">0{index + 1}</p>
                <h2 className="mt-10 text-2xl font-semibold text-white">{benefit}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Team packages
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-tight lg:text-7xl">
                Launch unified gear without carrying warehouse-level inventory.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                ["Starter kit", "Rashguards, shorts, tees, and basic academy branding for new no-gi programs."],
                ["Competition kit", "Gis, ranked rashguards, shorts, and coach apparel for tournament seasons."],
                ["Private label drop", "A focused product run with labels, packaging, and coordinated launch assets."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-[28px] border border-white/10 bg-black p-8">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-8 text-zinc-400">{text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Process />
    </main>
  );
}
