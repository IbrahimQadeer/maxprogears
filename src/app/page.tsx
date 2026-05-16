const products = [
  ["Custom BJJ Gis", "MOQ 20–25 pcs", "/gallery/m1.PNG"],
  ["Team Rashguards", "MOQ 30–35 pcs", "/gallery/m2.PNG"],
  ["Fight Shorts", "MOQ 30–35 pcs", "/gallery/m3.PNG"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Top Bar */}
      <div className="bg-black px-6 py-3 text-center text-sm text-white">
        Custom BJJ academy gear • Low MOQ • Worldwide shipping • WhatsApp: +92 336 5203279
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-black tracking-[0.18em]">
            MAXPROGEARS
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-zinc-700 md:flex">
            <a href="#products" className="hover:text-black">Products</a>
            <a href="#academy" className="hover:text-black">Academy Program</a>
            <a href="#process" className="hover:text-black">How It Works</a>
            <a href="#quote" className="hover:text-black">Quote</a>
          </nav>

          <a
            href="https://wa.me/923365203279"
            target="_blank"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
              Custom BJJ Academy Gear
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Build Your Academy’s Custom Gear.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Premium custom gis, rashguards, fight shorts, belts, and team apparel made for BJJ academies, coaches, and fight teams worldwide.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-full bg-black px-8 py-4 text-center text-sm font-bold text-white"
              >
                Request Custom Quote
              </a>

              <a
                href="#products"
                className="rounded-full border border-zinc-300 px-8 py-4 text-center text-sm font-bold"
              >
                View Products
              </a>
            </div>
          </div>

          <div className="rounded-[32px] bg-zinc-100 p-4">
            <img
              src="/gallery/m1.PNG"
              alt="Custom BJJ Gi"
              className="h-[520px] w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center text-sm font-bold uppercase tracking-widest text-zinc-600 md:grid-cols-4">
          <p>Low MOQ</p>
          <p>Design Support</p>
          <p>Custom Labels</p>
          <p>Worldwide Shipping</p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                Custom Products
              </p>

              <h2 className="text-4xl font-black md:text-6xl">
                Academy Gear Range.
              </h2>
            </div>

            <p className="max-w-md text-zinc-600">
              Start with your academy logo, colors, and quantity. We help turn it into production-ready gear.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map(([title, moq, img]) => (
              <div key={title} className="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="h-[360px] overflow-hidden rounded-[22px] bg-zinc-100">
                  <img
                    src={img}
                    alt={title}
                    className={`h-full w-full ${title.includes("Rash") ? "object-contain bg-white" : "object-cover"}`}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-2 font-semibold text-zinc-500">{moq}</p>
                  <a
                    href="#quote"
                    className="mt-5 inline-block rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Program */}
      <section id="academy" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
              Academy Program
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Complete Custom Sets For Your Team.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Create matching academy gear for adults, kids, competitors, and coaches — including gis, rashguards, shorts, belts, and apparel.
            </p>

            <p>
              We focus on custom branding, clean production, durable materials, and repeatable orders for long-term academy supply.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
              How It Works
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Simple Custom Order Process.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {["Send Logo", "Get Mockup", "Approve Sample", "Bulk Production", "Ship Worldwide"].map((step, i) => (
              <div key={step} className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <p className="mb-8 text-sm font-bold text-zinc-400">0{i + 1}</p>
                <h3 className="text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[36px] bg-black p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
              Request Quote
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Ready To Build Your Academy Gear?
            </h2>

            <p className="mt-6 text-zinc-300">
              Send your logo, quantity, product type, and deadline. We’ll help prepare a custom quote.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 text-black">
            <div className="grid gap-4">
              <input className="rounded-xl border border-zinc-200 p-4" placeholder="Your Name" />
              <input className="rounded-xl border border-zinc-200 p-4" placeholder="Email" />
              <input className="rounded-xl border border-zinc-200 p-4" placeholder="WhatsApp" />
              <input className="rounded-xl border border-zinc-200 p-4" placeholder="Academy / Gym Name" />
              <textarea className="min-h-32 rounded-xl border border-zinc-200 p-4" placeholder="What products and quantity do you need?" />

              <a
                href="mailto:info@maxprogears.com"
                className="rounded-full bg-black px-6 py-4 text-center text-sm font-bold text-white"
              >
                Email Quote Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-black tracking-[0.18em]">MAXPROGEARS</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Custom BJJ academy gear manufacturer based in Sialkot, Pakistan.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-semibold text-zinc-600">
            <a href="https://www.instagram.com/maxprogears" target="_blank">Instagram</a>
            <a href="https://wa.me/923365203279" target="_blank">WhatsApp</a>
            <a href="mailto:info@maxprogears.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}