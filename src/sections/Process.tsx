import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="noise-layer pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="Four decisions between your idea and finished gear."
            text="A controlled workflow keeps the product moving without making the academy owner become a production manager."
          />
        </Reveal>
        <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/10 lg:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="relative min-h-80 rounded-[30px] border border-white/10 bg-black/80 p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/25">
                <div className="grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-zinc-950 text-3xl font-semibold text-white shadow-2xl shadow-black">
                  0{index + 1}
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
