import logo from "@/assets/mvx-academy-logo.png";

export function MvxAcademyLogo({ className, alt = "MVX Academy" }: { className?: string; alt?: string }) {
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
