import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import gameRL from "@/assets/game-rocket-league.jpeg";
import gameVal from "@/assets/game-valorant.jpeg";
import gameCS from "@/assets/game-csgo.png";
import gameR6 from "@/assets/game-r6.jpeg";
import gameFortnite from "@/assets/game-fortnite.jpeg";

export const Route = createFileRoute("/teams/")({
  head: () => ({
    meta: [
      { title: "Teams — MVX Esports" },
      { name: "description", content: "The competitive divisions of MVX Esports." },
    ],
  }),
  component: TeamsPage,
});

type Team = {
  game: string;
  status: "Active" | "Coming Soon";
  desc: string;
  to: "/teams/rocket-league" | "/teams/fortnite" | "/teams/rainbow-six-siege" | null;
  logo: string;
};

const teams: Team[] = [
  {
    game: "Rocket League",
    status: "Active",
    desc: "Our flagship division, competing at the highest level with a roster built for precision and consistency.",
    to: "/teams/rocket-league",
    logo: gameRL,
  },
  {
    game: "Fortnite",
    status: "Active",
    desc: "A new MVX chapter — building a Fortnite program with the same standard that defines every division.",
    to: "/teams/fortnite",
    logo: gameFortnite,
  },
  {
    game: "Rainbow Six Siege",
    status: "Active",
    desc: "A tactical, disciplined division built for the demands of Rainbow Six Siege — Pure Class under pressure.",
    to: "/teams/rainbow-six-siege",
    logo: gameR6,
  },
  {
    game: "Valorant",
    status: "Coming Soon",
    desc: "A tactical FPS program in development — a deliberate expansion into one of esports' most demanding titles.",
    to: null,
    logo: gameVal,
  },
  {
    game: "Counter-Strike",
    status: "Coming Soon",
    desc: "Returning to the roots of competitive FPS. We're building with patience and respect for the title's legacy.",
    to: null,
    logo: gameCS,
  },
];

function TeamsPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-20 md:pt-32 md:pb-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Teams</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-3xl">Our divisions.</h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Every team carries the same standard. Built methodically. Held accountable. Pure Class on every stage.
          </p>
        </Reveal>
      </section>

      <section className="container-xl pb-32">
        <div className="grid gap-6 sm:grid-cols-2">
          {teams.map((t, i) => {
            const card = (
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-elevated p-8 md:p-10 transition-all duration-500 hover:border-white/30 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <img src={t.logo} alt={`${t.game} logo`} className="h-14 w-14 object-contain" loading="lazy" />
                  <span
                    className={`text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full border ${
                      t.status === "Active"
                        ? "border-white/40 text-foreground"
                        : "border-white/15 text-muted-foreground"
                    }`}
                  >
                    {t.status}
                  </span>
                </div>
                <h2 className="mt-12 font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
                  {t.game}
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {t.desc}
                </p>
                <div className="mt-10 hairline-t pt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{t.to ? "View roster →" : "MVX Division"}</span>
                  <span>Est. 2026</span>
                </div>
              </article>
            );
            return (
              <Reveal key={t.game} delay={i * 100}>
                {t.to ? (
                  <Link to={t.to} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
