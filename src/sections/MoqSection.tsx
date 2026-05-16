import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { moqRanges } from "@/lib/site";

type MoqSectionProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function MoqSection({ theme = "light", compact = false }: MoqSectionProps) {
  const isLight = theme === "light";

  return (
    <section className={isLight ? "bg-white px-5 py-20 text-black sm:px-8 lg:px-12" : "bg-black px-5 py-20 text-white sm:px-8 lg:px-12"}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500" : "text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"}>
                MOQ and quote ranges
              </p>
              <h2 className={isLight ? "mt-4 text-balance text-5xl font-semibold tracking-tight text-black lg:text-7xl" : "mt-4 text-balance text-5xl font-semibold tracking-tight text-white lg:text-7xl"}>
                Clear starting points for custom academy production.
              </h2>
            </div>
            <p className={isLight ? "max-w-2xl text-lg leading-8 text-zinc-600" : "max-w-2xl text-lg leading-8 text-zinc-400"}>
              Final pricing depends on fabric, decoration, labels, sizes,
              packaging, and shipping country. These MOQ ranges help you plan a
              realistic first inquiry.
            </p>
          </div>
        </Reveal>

        <div className={compact ? "mt-10 grid gap-4 lg:grid-cols-3" : "mt-14 grid gap-4 lg:grid-cols-3"}>
          {moqRanges.map((item, index) => (
            <Reveal key={item.product} delay={index * 0.04}>
              <article className={isLight ? "min-h-64 rounded-[30px] border border-black/10 bg-zinc-50 p-7 transition hover:bg-black hover:text-white" : "min-h-64 rounded-[30px] border border-white/10 bg-zinc-950 p-7 transition hover:border-white/25"}>
                <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500" : "text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500"}>
                  0{index + 1}
                </p>
                <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                  {item.product}
                </h3>
                <p className="mt-4 text-5xl font-semibold tracking-tight">
                  {item.moq}
                </p>
                <p className={isLight ? "mt-6 text-sm leading-7 text-zinc-600" : "mt-6 text-sm leading-7 text-zinc-400"}>
                  {item.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {!compact ? (
          <div className="mt-10">
            <ButtonLink href="/quote" className={isLight ? "bg-black text-white hover:bg-zinc-800" : undefined}>
              Start Quote
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
