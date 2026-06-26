import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Check, ArrowUpRight } from "lucide-react";
import spud2astro from "@/assets/spud2astro.jpg";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners — MVX Esports" },
      { name: "description", content: "Partnership opportunities with MVX Esports." },
    ],
  }),
  component: SponsorsPage,
});

const benefits = [
  "Premium brand placement across teams, jerseys, and broadcast assets",
  "Year-round content collaboration with a refined editorial voice",
  "Activation at events, tournaments, and community programs",
  "Dedicated partnership team and transparent reporting",
];

function SponsorsPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Partnerships</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-4xl">
            A platform brands are proud to stand beside.
          </h1>
        </Reveal>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Partners</p>
            <h2 className="mt-6 text-display-md uppercase">The people behind MVX.</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={80}>
              <Link
                to="/spud2astro"
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-elevated transition-all duration-500 hover:border-white/30 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={spud2astro}
                    alt="Spud2Astro"
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="font-display text-xl uppercase tracking-[0.05em]">Spud2Astro</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Content Creator & IT Partner
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Benefits</p>
            <h2 className="mt-6 text-display-lg uppercase">Why partner with MVX.</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-4 hairline-b pb-6">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base md:text-lg text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="text-display-lg uppercase">Let's talk.</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tailored partnership packages for brands aligned with our standards.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              Business inquiries
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
