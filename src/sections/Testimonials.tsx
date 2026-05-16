import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
            Client signal
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white lg:text-7xl">
            Built for the people responsible for the whole team.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.05}>
              <figure className="min-h-72 rounded-[28px] border border-white/10 bg-black p-8">
                <blockquote className="text-xl leading-8 text-zinc-200">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-10">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-500">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
