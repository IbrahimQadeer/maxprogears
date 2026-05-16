import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.08)]",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
    ghost: "text-white/75 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
