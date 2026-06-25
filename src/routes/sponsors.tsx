import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

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
        <div className="container-xl py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">Our Partners</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center bg-background py-14">
                  <span className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Your Brand
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
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
