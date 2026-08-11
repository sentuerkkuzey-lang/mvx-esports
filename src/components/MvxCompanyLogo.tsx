import logo from "@/assets/mvx-company-logo.png";

export function MvxCompanyLogo({
  className,
  alt = "MVX",
}: {
  className?: string;
  alt?: string;
}) {
  return <img src={logo} alt={alt} className={className} loading="eager" decoding="async" />;
}
