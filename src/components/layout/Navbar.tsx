"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { brand, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1800px] px-4 pt-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-full border border-white/10 bg-black/65 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white text-xs font-black text-black">
                MP
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                {brand.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-6 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white",
                    pathname === item.href && "text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/40 hover:bg-white/10"
              >
                WhatsApp
              </a>
              <Link
                href="/quote"
                className="rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200"
              >
                Start Quote
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white xl:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={cn("absolute left-0 top-0 h-px w-5 bg-current transition", open && "top-1.5 rotate-45")} />
                <span className={cn("absolute bottom-0 left-0 h-px w-5 bg-current transition", open && "bottom-1.5 -rotate-45")} />
              </span>
            </button>
          </div>

          {open ? (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden xl:hidden"
            >
              <div className="grid gap-2 pt-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-white px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black"
                >
                  Request Quote
                </Link>
              </div>
            </motion.nav>
          ) : null}
        </motion.div>
      </div>
    </header>
  );
}
