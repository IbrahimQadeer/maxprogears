import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl",
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
