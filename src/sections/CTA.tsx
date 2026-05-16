import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 lg:px-12">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-white p-8 text-black sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Start production
              </p>
              <h2 className="mt-5 text-balance text-5xl font-semibold tracking-tight lg:text-7xl">
                Build your next academy kit with a manufacturing partner.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-zinc-700">
                Send product type, quantity, logo files, and target delivery
                date. We will help shape the correct production plan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/quote" className="bg-black text-white hover:bg-zinc-800">
                  Request Quote
                </ButtonLink>
                <ButtonLink href="/contact" className="border-black/15 bg-transparent text-black hover:bg-zinc-100">
                  Contact
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
