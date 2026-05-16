import { Metadata } from "next";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a premium custom combat sports manufacturing quote for BJJ gis, rashguards, fight shorts, academy apparel, and private label production.",
};

export default function QuotePage() {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                Production quote
              </p>
              <h1 className="mt-6 text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
                Tell us what your team needs.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                Share product type, quantity, artwork needs, and shipping country.
                We will respond with the best path for custom production.
              </p>
              <div className="mt-10 grid gap-4 text-sm text-zinc-400">
                <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  WhatsApp: {brand.whatsapp}
                </a>
                <a href={`mailto:${brand.email}`} className="transition hover:text-white">
                  Email: {brand.email}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
