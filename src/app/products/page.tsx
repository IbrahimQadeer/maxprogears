import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/sections/CTA";
import { MoqSection } from "@/sections/MoqSection";
import { products } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Custom BJJ gis, rashguards, fight shorts, academy apparel, and private label combat sports manufacturing by MAXPROGEARS.",
};

export default function ProductsPage() {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
              Product overview
            </p>
            <h1 className="mt-6 max-w-5xl text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Private label gear for the full academy floor.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Build a complete combat sports range from one production partner:
              gis, no-gi kits, fight shorts, apparel, trims, and branded packaging.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.04}>
              <Link
                href={product.href}
                className="group grid min-h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-1 hover:border-white/25 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden bg-zinc-900">
                  <Image src={product.image} alt={product.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      {product.kicker}
                    </p>
                    <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
                      {product.title}
                    </h2>
                    <p className="mt-5 leading-8 text-zinc-400">{product.description}</p>
                  </div>
                  <div className="mt-10 grid gap-3">
                    {product.details.map((detail) => (
                      <p key={detail} className="border-t border-white/10 pt-3 text-sm text-zinc-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <MoqSection />
      <CTA />
    </main>
  );
}
