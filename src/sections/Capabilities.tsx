import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  "Pattern development and fit support",
  "Sublimation, embroidery, and applique",
  "Woven labels, neck labels, and taping",
  "Custom packaging and brand presentation",
  "Low MOQ academy and startup programs",
  "Repeat production for seasonal drops",
];

export function Capabilities() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Production capabilities"
            title="From design brief to finished fightwear."
            text="A manufacturing partner for programs that need product consistency, not one-off novelty."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="min-h-44 bg-black p-8 transition duration-300 hover:bg-zinc-950">
                <p className="text-sm font-semibold text-zinc-600">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
