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
  const expandedGallery = [...gallery, ...gallery].slice(0, 6);
  const moq = eyebrow.includes("Gi")
    ? "MOQ 20-25 pcs"
    : eyebrow.includes("Rash")
      ? "MOQ 30-35 pcs"
      : "MOQ 30-35 pcs";

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
              <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                {moq}
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

      <section className="bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Product build
              </p>
              <h2 className="mt-5 text-balance text-5xl font-semibold tracking-tight lg:text-7xl">
                Designed around academy identity first.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Logo placement", "Material direction", "Production quantity"].map((item) => (
                <div key={item} className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
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
                <article className="min-h-64 rounded-[28px] border border-white/10 bg-zinc-950 p-8 transition duration-500 hover:-translate-y-1 hover:border-white/25">
                  <p className="text-sm font-semibold text-zinc-600">0{index + 1}</p>
                  <h2 className="mt-10 text-3xl font-semibold text-white">{feature.title}</h2>
                  <p className="mt-5 leading-8 text-zinc-400">{feature.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Custom options
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-tight text-black lg:text-7xl">
                Details that make it yours.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                Choose the details that matter to your academy program, then
                send them through the quote form for production review.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[30px] border border-black/10 bg-black/10 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="bg-white p-7 transition hover:bg-black hover:text-white">
                <p className="text-lg font-semibold">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                  Product imagery
                </p>
                <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                  Built to photograph clean and train hard.
                </h2>
              </div>
              <ButtonLink href="/quote" variant="secondary">
                Quote This Product
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {expandedGallery.map((src, index) => (
              <Reveal key={`${src}-${index}`} delay={index * 0.05}>
                <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 ${index % 2 === 0 ? "min-h-[460px]" : "min-h-[360px] md:translate-y-10"}`}>
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
