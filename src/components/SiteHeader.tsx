import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { MvxLogo } from "./MvxLogo";
import { MvxAcademyLogo } from "./MvxAcademyLogo";


const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/social", label: "Social" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass hairline-b" : "bg-transparent"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between">
        <Link to={isAcademy ? "/academy" : "/"} className="flex items-center gap-3 group">
          {isAcademy ? (
            <MvxAcademyLogo className="h-9 w-9 rounded-full ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <MvxLogo className="h-9 w-9 rounded-full ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105" />
          )}
          <span className="font-display text-xs tracking-[0.25em] uppercase opacity-90">
            {isAcademy ? "MVX Academy" : "MVX Esports"}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-white hover:text-background transition-colors duration-300"
          >
            Inquire
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-t">
          <nav className="container-xl flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-2xl font-display tracking-[0.06em] uppercase"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
