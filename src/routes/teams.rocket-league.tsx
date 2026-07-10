import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxLogo } from "@/components/MvxLogo";
import { RocketLeagueIcon } from "@/components/RankIcon";
import rankChampion from "@/assets/rank-champion.jpeg";
import rankGrandChampion from "@/assets/rank-grand-champion.jpeg";
import flagPl from "@/assets/flag-pl.png";
import flagGb from "@/assets/flag-gb.png";
import flagGr from "@/assets/flag-gr.png";

export const Route = createFileRoute("/teams/rocket-league")({
  head: () => ({
    meta: [
      { title: "Rocket League Roster — MVX Esports" },
      {
        name: "description",
        content:
          "Meet the MVX Esports Rocket League roster — our flagship competitive division.",
      },
      { property: "og:title", content: "Rocket League Roster — MVX Esports" },
      {
        property: "og:description",
        content: "The players representing MVX Esports in Rocket League.",
      },
    ],
  }),
  component: RocketLeagueRosterPage,
});

type Rank = "Champion" | "Grand Champion";

type Player = {
  flagUrl: string;
  country: string;
  name: string;
  rank: Rank;
  profileTo?: string;
};

const roster: Player[] = [
  { flagUrl: flagPl, country: "Poland", name: "Marcel", rank: "Champion" },
  { flagUrl: flagGb, country: "United Kingdom", name: "Jack", rank: "Champion" },
  {
    flagUrl: flagGb,
    country: "United Kingdom",
    name: "Ethan",
    rank: "Champion",
    profileTo: "/spud2astro",
  },
  { flagUrl: flagGr, country: "Germany", name: "Samuel", rank: "Champion" },
];

const rankImage: Record<Rank, string> = {
  Champion: rankGrandChampion,
  "Grand Champion": rankChampion,
};


function PlayerCard({ player }: { player: Player }) {
  const inner = (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-elevated p-8 transition-all duration-500 hover:border-white/30 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <img
          src={player.flagUrl}
          alt={player.country}
          className="h-6 w-9 rounded-[2px] object-cover ring-1 ring-white/10"
        />
        <MvxLogo className="h-9 w-9 rounded-full ring-1 ring-white/10 opacity-80" />
      </div>

      <div className="mt-14 flex items-end justify-between gap-6">
        <div className="min-w-0">
          <p className="font-display text-3xl uppercase tracking-[0.05em] truncate">
            {player.name}
          </p>
          {player.name === "Ethan" && (
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Spud2Astro
            </p>
          )}
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {player.rank}
          </p>
        </div>
        <img
          src={rankImage[player.rank]}
          alt={`${player.rank} rank`}
          className="h-20 w-20 shrink-0 object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-8 hairline-t pt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>Rocket League</span>
        <span>MVX Roster</span>
      </div>
    </article>
  );

  if (player.profileTo) {
    return (
      <Link to={player.profileTo} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}

function RocketLeagueRosterPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-12 md:pt-32">
        <Reveal>
          <Link
            to="/teams"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Teams
          </Link>
        </Reveal>
      </section>

      <section className="container-xl pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 items-end">
          <Reveal>
            <div className="flex items-center gap-6">
              <RocketLeagueIcon className="h-20 w-20 text-foreground" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Division
                </p>
                <h1 className="mt-3 text-display-lg uppercase">Rocket League</h1>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our flagship division — a roster built for precision, composure, and
              consistency. Three players. One standard. Pure Class on every stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
                Active Roster
              </h2>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {roster.length} Players
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roster.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <PlayerCard player={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
