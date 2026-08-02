import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MvxAcademyLogo } from "@/components/MvxAcademyLogo";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/academy/about")({
  head: () => ({
    meta: [
      { title: "About MVX Academy — Pure Class" },
      {
        name: "description",
        content:
          "MVX Academy is the development arm of MVX Esports — structured coaching, player support, and a pathway into our main rosters.",
      },
      { property: "og:title", content: "About MVX Academy — Pure Class" },
      {
        property: "og:description",
        content:
          "How MVX Academy develops the next generation of competitive talent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademyAboutPage,
});

const pillars = [
  {
    title: "Structure",
    body: "Every academy player follows a clear development plan — scheduled scrims, review sessions, and measurable goals.",
  },
  {
    title: "Coaching",
    body: "Dedicated coaching and analysis, with direct access to the standards used by our main MVX Esports rosters.",
  },
  {
    title: "Support",
    body: "Mental performance, communication, and professionalism are treated with the same weight as mechanical skill.",
  },
  {
    title: "Pathway",
    body: "The academy is a genuine route into MVX Esports — a promotion path, not a placeholder.",
  },
];

function AcademyAboutPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-12 md:pt-32">
        <Reveal>
          <Link
            to="/academy"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Academy
          </Link>
        </Reveal>
      </section>

      <section className="container-xl pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20 items-center">
          <Reveal>
            <MvxAcademyLogo className="h-40 w-40 md:h-56 md:w-56 rounded-full ring-1 ring-white/15" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
            <h1 className="mt-6 text-display-lg uppercase">MVX Academy.</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              MVX Academy is the development arm of MVX Esports. It exists to
              find, develop, and prepare players for the standards of our main
              rosters — with the same discipline, presentation, and long-term
              thinking that defines Pure Class.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
              How the programme works
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="h-full rounded-3xl border border-white/10 bg-elevated p-8 transition-all duration-500 hover:border-white/30 hover:-translate-y-1">
                  <p className="font-display text-xl uppercase tracking-[0.05em]">
                    {p.title}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-lg uppercase">Want in?</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tryouts and academy enquiries are handled through our main
              contact channel.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
