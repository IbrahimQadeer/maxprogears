import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Workflow"
            title="A clean production path for academy owners."
            text="No mystery handoffs. Just a clear route from artwork to delivery."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="relative min-h-72 rounded-[28px] border border-white/10 bg-black p-7">
                <p className="text-sm font-semibold text-zinc-600">0{index + 1}</p>
                <h3 className="mt-12 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
