import Image from "next/image";

export function ImagePanel({ src, alt, className = "", priority = false, label = "View" }: { src: string; alt: string; className?: string; priority?: boolean; label?: string }) {
  return (
    <div className={`image-panel ${className}`} data-cursor={label}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 90vw" />
    </div>
  );
}
