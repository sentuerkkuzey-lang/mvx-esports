import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxLogo } from "@/components/MvxLogo";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MVX Esports" },
      { name: "description", content: "The story, mission, and vision of MVX Esports." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { k: "Discipline", v: "Daily standards that compound into elite performance." },
  { k: "Excellence", v: "An obsession with the small details others overlook." },
  { k: "Integrity", v: "Honest with our players, our partners, and our community." },
  { k: "Vision", v: "Built to last — decisions made for the next decade." },
];

function AboutPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-32 md:pt-32 md:pb-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-4xl">
            Esports, reimagined with intention.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            MVX Esports was founded in 2026 with a clear purpose — to bring a level of professionalism, refinement, and long-term thinking to competitive gaming that mirrors the world's most respected sporting institutions.
          </p>
        </Reveal>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Mission</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl uppercase">Pure Class</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                To develop world-class teams, raise the standard of esports as a profession, and represent our community with humility, dedication, and unmistakable class.
              </p>
              <p>
                We treat performance like a craft. We treat people like family. We treat the brand like a legacy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Fun fact</p>
            <p className="mt-6 text-display-thin text-white/80">
              MVX was supposed to be the owner's personal brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Values</p>
            <h2 className="mt-6 text-display-lg uppercase">What we stand for.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 hairline-t hairline-b sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.k} delay={i * 80}>
                <div className="bg-background p-8 h-full">
                  <p className="font-display text-xl uppercase tracking-[0.06em]">{v.k}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 text-center">
          <Reveal>
            <MvxLogo className="mx-auto h-20 w-20 rounded-full ring-1 ring-white/15" />
            <h2 className="mt-10 text-display-lg uppercase">The long view.</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              MVX Esports is built to grow methodically — from Rocket League into Valorant, Counter-Strike, and Rainbow Six Siege — with patience, precision, and purpose.
            </p>
            <Link
              to="/teams"
              className="mt-10 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              See our teams
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
