"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
          className={cn(
            "border border-white/10 bg-black/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300",
            open ? "rounded-[28px]" : "rounded-full",
          )}
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

            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="hidden rounded-full bg-white px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black sm:inline-flex"
              >
                Quote
              </Link>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white hover:text-black"
              >
                <span className="relative block h-3 w-5">
                  <span className={cn("absolute left-0 top-0 h-px w-5 bg-current transition", open && "top-1.5 rotate-45")} />
                  <span className={cn("absolute bottom-0 left-0 h-px w-5 bg-current transition", open && "bottom-1.5 -rotate-45")} />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden xl:hidden"
              >
                <div className="pt-6">
                  <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between bg-black px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300 transition hover:bg-white hover:text-black",
                          pathname === item.href && "text-white",
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-zinc-600 transition group-hover:text-black">
                          0{index + 1}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Link
                      href="/quote"
                      onClick={() => setOpen(false)}
                      className="rounded-full bg-white px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black"
                    >
                      Start Quote
                    </Link>
                    <a
                      href={brand.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <p className="px-2 pt-5 text-xs leading-6 text-zinc-500">
                    Custom academy gear, private label production, and worldwide
                    manufacturing support from {brand.location}.
                  </p>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
