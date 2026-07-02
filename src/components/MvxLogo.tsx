import logo from "@/assets/mvx-logo.jpeg";

export function MvxLogo({ className, alt = "MVX Esports" }: { className?: string; alt?: string }) {
  return (
    <img
      src={logo}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
