import Link from "next/link";
import { brand, navItems, productOptions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold uppercase tracking-[0.24em]">
            {brand.name}
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
            Premium combat sports manufacturing for BJJ academies, MMA gyms,
            private label founders, coaches, and team programs worldwide.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.26em] text-zinc-600">
            Manufactured in {brand.location}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Navigation
          </h3>
          <div className="mt-5 grid gap-3">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Products
          </h3>
          <div className="mt-5 grid gap-3">
            {productOptions.map((item) => (
              <Link key={item} href="/products" className="text-sm text-zinc-300 transition hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Contact
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-zinc-300">
            <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {brand.whatsapp}
            </a>
            <a href={`mailto:${brand.email}`} className="transition hover:text-white">
              {brand.email}
            </a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.22em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. All rights reserved.</p>
        <p>Private label combat sports manufacturing.</p>
      </div>
    </footer>
  );
}
