import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/site";

const coreProducts = products.slice(0, 3);

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="noise-layer pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <SectionHeader
            eyebrow="Product showcase"
            title="The core uniform system for modern fight rooms."
            text="Three product pillars, built with private label detail and academy-grade repeatability."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {coreProducts.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.04}>
              <Link
                href={product.href}
                className="group block overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`transition duration-700 group-hover:scale-105 ${
                      product.title.includes("Rash") ? "object-contain p-8" : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-300 backdrop-blur">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    {product.kicker}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {product.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      Explore
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition group-hover:bg-white group-hover:text-black">
                      +
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
