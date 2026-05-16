import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    label: "OEM and ODM",
    title: "Manufacturing depth",
    text: "Custom production for academies and private labels, from supplied artwork to developed product systems.",
  },
  {
    label: "Low MOQ",
    title: "Smart entry runs",
    text: "Accessible quantities for gyms, coaches, and startup brands without losing premium finishing control.",
  },
  {
    label: "Worldwide",
    title: "Global dispatch",
    text: "Production from Sialkot with shipping support for academies, retailers, and fightwear brands worldwide.",
  },
  {
    label: "Academy",
    title: "Identity systems",
    text: "Ranked rashguards, team gis, shorts, apparel, and trim details built around consistent visual language.",
  },
  {
    label: "QC",
    title: "Premium control",
    text: "Print clarity, embroidery placement, stitching, sizing, labels, packing, and final inspection handled with care.",
  },
  {
    label: "Communication",
    title: "Fast decisions",
    text: "Clear feedback loops for artwork, approvals, production timing, and reorder planning.",
  },
];

export function WhyMaxprogears() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px editorial-rule" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Why MAXPROGEARS"
            title="Production muscle with fashion-level presentation."
            text="Trust is built in the small parts: communication, trims, samples, size consistency, packing, and the ability to repeat the same standard."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.035}>
              <article className="group min-h-72 rounded-[30px] border border-white/10 bg-zinc-950 p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white hover:text-black">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 transition group-hover:text-zinc-600">
                    {feature.label}
                  </p>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-sm text-zinc-500 transition group-hover:border-black/15 group-hover:text-black">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-12 text-3xl font-semibold tracking-tight text-white transition group-hover:text-black">
                  {feature.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400 transition group-hover:text-zinc-700">
                  {feature.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
