import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxLogo } from "@/components/MvxLogo";

export const Route = createFileRoute("/coaches/rajtko")({
  head: () => ({
    meta: [
      { title: "Coach Rajtko — MVX Esports" },
      {
        name: "description",
        content:
          "Rajtko is MVX Esports' coach — a European specialist in 1v1 and 3v3 Rocket League with experience across larger organizations.",
      },
      { property: "og:title", content: "Coach Rajtko — MVX Esports" },
      {
        property: "og:description",
        content:
          "European 1v1 and 3v3 specialist, bringing top-tier coaching experience to MVX Esports.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoachRajtkoPage,
});

function CoachRajtkoPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-12 md:pt-32">
        <Reveal>
          <Link
            to="/teams/rocket-league"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Rocket League
          </Link>
        </Reveal>
      </section>

      <section className="container-xl pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 items-end">
          <Reveal>
            <div className="flex items-center gap-6">
              <MvxLogo className="h-20 w-20" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Coaching Staff
                </p>
                <h1 className="mt-3 text-display-lg uppercase">Rajtko</h1>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A European specialist in 1v1 and 3v3, Rajtko brings a level of
              tactical depth and structure that raises the standard of every
              roster he works with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-24 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
              Specialisation
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rajtko is recognised across the European scene as a specialist in
              1v1 and 3v3 play — two formats that demand entirely different
              instincts. In 1v1 he focuses on decision-making, control of the
              ball, and reading an opponent's habits under pressure. In 3v3 he
              builds rotations, kickoff structures, and communication patterns
              that let a roster play as a single unit rather than three
              individuals.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
              Experience
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Before joining MVX, Rajtko worked with a number of established
              esports organizations — several of them considerably larger than
              MVX Esports today. That experience at a higher operational level
              is exactly why he is here: he knows what a professional
              environment looks like, and he holds our players to that same
              standard from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["1v1 Specialist", "3v3 Specialist", "European Scene", "Head Coach"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
