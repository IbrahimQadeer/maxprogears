import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Feature = {
  title: string;
  text: string;
};

type ProductDetailPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  features: Feature[];
  options: string[];
  gallery?: string[];
  cta: string;
};

export function ProductDetailPage({
  eyebrow,
  title,
  intro,
  image,
  features,
  options,
  gallery = ["/gallery/m1.PNG", "/gallery/m2.PNG", "/gallery/m3.PNG"],
  cta,
}: ProductDetailPageProps) {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                {eyebrow}
              </p>
              <h1 className="mt-6 text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                {intro}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/quote">Start Quote</ButtonLink>
                <ButtonLink href="/gallery" variant="secondary">
                  View Gallery
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950">
              <Image src={image} alt={title} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Product system"
              title="Engineered around durability, identity, and repeat production."
              text="A premium look only matters if the garment survives the training room. Materials, placements, trims, and finishing are planned together."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.04}>
                <article className="min-h-64 rounded-[28px] border border-white/10 bg-zinc-950 p-8">
                  <p className="text-sm font-semibold text-zinc-600">0{index + 1}</p>
                  <h2 className="mt-10 text-3xl font-semibold text-white">{feature.title}</h2>
                  <p className="mt-5 leading-8 text-zinc-400">{feature.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Custom options
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                Details that make it yours.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="bg-black p-7">
                <p className="text-lg font-semibold text-white">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((src, index) => (
              <Reveal key={`${src}-${index}`} delay={index * 0.05}>
                <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900">
                  <Image src={src} alt={`${title} gallery ${index + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[34px] border border-white/10 bg-white p-8 text-black sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Production quote
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight lg:text-7xl">
              {cta}
            </h2>
            <div className="mt-9">
              <ButtonLink href="/quote" className="bg-black text-white hover:bg-zinc-800">
                Request Quote
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
