import { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MAXPROGEARS for worldwide BJJ academy gear, combat sports private label manufacturing, custom gis, rashguards, and fight shorts.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="luxury-shell px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                Contact
              </p>
              <h1 className="mt-6 text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl">
                Worldwide manufacturing, direct conversation.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                MAXPROGEARS manufactures in Sialkot, Pakistan for BJJ academies,
                MMA gyms, combat sports brands, startup private labels, and team coaches.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Direct links
              </p>
              <div className="mt-8 grid gap-4">
                <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 p-6 transition hover:border-white/30 hover:bg-white/5">
                  <span className="block text-sm uppercase tracking-[0.18em] text-zinc-500">WhatsApp</span>
                  <span className="mt-2 block text-xl font-semibold">{brand.whatsapp}</span>
                </a>
                <a href={`mailto:${brand.email}`} className="rounded-3xl border border-white/10 p-6 transition hover:border-white/30 hover:bg-white/5">
                  <span className="block text-sm uppercase tracking-[0.18em] text-zinc-500">Email</span>
                  <span className="mt-2 block text-xl font-semibold">{brand.email}</span>
                </a>
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 p-6 transition hover:border-white/30 hover:bg-white/5">
                  <span className="block text-sm uppercase tracking-[0.18em] text-zinc-500">Instagram</span>
                  <span className="mt-2 block text-xl font-semibold">@maxprogears</span>
                </a>
              </div>
              <div className="mt-8">
                <ButtonLink href="/quote">Request Quote</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
