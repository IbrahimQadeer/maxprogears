import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImagePanel({
  src,
  alt,
  className,
  imageClassName,
  priority,
}: ImagePanelProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn(
          "object-cover transition duration-700 group-hover:scale-105",
          imageClassName,
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.48))]" />
    </div>
  );
}
