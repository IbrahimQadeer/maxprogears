import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/site";

export function ProductShowcase() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Manufacturing range"
            title="Combat sports gear with a private label finish."
            text="Every product is designed around academy identity, repeat ordering, and durable training use."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.04}>
              <Link
                href={product.href}
                className="group block overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                    0{index + 1}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    {product.kicker}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {product.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
