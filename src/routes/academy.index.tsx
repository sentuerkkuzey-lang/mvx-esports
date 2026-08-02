import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MvxAcademyLogo } from "@/components/MvxAcademyLogo";
import { Reveal } from "@/components/Reveal";
import gameRL from "@/assets/game-rocket-league.jpeg";
import gameVal from "@/assets/game-valorant.jpeg";
import gameCS from "@/assets/game-csgo.png";
import gameR6 from "@/assets/game-r6.jpeg";
import gameFortnite from "@/assets/game-fortnite.jpeg";

export const Route = createFileRoute("/academy/")({
  head: () => ({
    meta: [
      { title: "MVX Academy — Pure Class" },
      { name: "description", content: "The development arm of MVX Esports. Building the next generation of competitive talent with discipline, structure, and Pure Class." },
    ],
  }),
  component: AcademyPage,
});

const academyTeams = [
  { game: "Rocket League Academy", status: "Coming Soon", to: null, logo: gameRL },
  { game: "Fortnite Academy", status: "Coming Soon", to: null, logo: gameFortnite },
  { game: "Valorant Academy", status: "Coming Soon", to: null, logo: gameVal },
  { game: "Counter-Strike Academy", status: "Coming Soon", to: null, logo: gameCS },
  { game: "Rainbow Six Siege Academy", status: "Coming Soon", to: null, logo: gameR6 },
];

const updates = [
  { tag: "Announcement", title: "MVX Academy officially established", date: "2026" },
  { tag: "Vision", title: "Development pipeline for Tier-1 talent", date: "2026" },
  { tag: "Program", title: "Structured coaching and player support", date: "2026" },
];

function AcademyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-xl pt-16 pb-32 md:pt-28 md:pb-40">
          <Reveal>
            <div className="flex justify-center">
              <MvxAcademyLogo className="h-32 w-32 md:h-44 md:w-44 rounded-full ring-1 ring-white/15 shadow-[0_30px_120px_-30px_rgba(255,255,255,0.25)]" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-12 text-center text-display-xl uppercase">Pure Class</h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-base md:text-lg text-muted-foreground leading-relaxed">
              The development arm of MVX Esports. Building the next generation of competitive talent with discipline, structure, and long-term vision.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/academy/about"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-all duration-300"
              >
                About the Academy
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/teams"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-background transition-colors duration-300"
              >
                MVX Esports
              </Link>
            </div>
          </Reveal>
        </div>

        {/* faint marquee-like ribbon */}
        <div aria-hidden className="hairline-t hairline-b overflow-hidden">
          <div className="container-xl flex items-center justify-between py-5 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span>Est. 2026</span>
            <span className="hidden sm:inline">Discipline</span>
            <span>Development</span>
            <span className="hidden sm:inline">Ambition</span>
            <span>Pure Class</span>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-xl py-32 md:py-40">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">01 — Academy</p>
            <h2 className="mt-6 text-display-lg uppercase">A pipeline for future champions.</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed md:pt-2">
              <p>
                MVX Academy is the development arm of the MVX ecosystem. It exists to identify, coach, and elevate the next generation of competitive players with the same standards that define MVX Esports.
              </p>
              <p>
                We focus on fundamentals, mentality, and sustainable growth. Academy players train within a structured environment that prepares them for the step up to the main roster.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAMS */}
      <section className="hairline-t">
        <div className="container-xl py-32 md:py-40">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">02 — Academy Rosters</p>
                <h2 className="mt-6 text-display-lg uppercase">The Academy Roster.</h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {academyTeams.map((t, i) => {
              const inner = (
                <div className="group relative h-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-elevated p-6 transition-all duration-500 hover:border-white/30 hover:-translate-y-1">
                  <div className="absolute top-6 right-6 z-10">
                    <span className={`text-[10px] uppercase tracking-[0.2em] ${t.status === "Active" ? "text-foreground" : "text-muted-foreground"}`}>
                      {t.status === "Active" ? "● Active" : "Soon"}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pb-20">
                    <img
                      src={t.logo}
                      alt={`${t.game} logo`}
                      className="h-40 w-40 md:h-44 md:w-44 object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <p className="font-display text-xl uppercase tracking-[0.05em]">{t.game}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {t.to ? "View roster →" : "Academy Division"}
                    </p>
                  </div>
                </div>
              );
              return (
                <Reveal key={t.game} delay={i * 100}>
                  {t.to ? (
                    <Link to={t.to} className="block h-full">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section className="hairline-t">
        <div className="container-xl py-32 md:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">03 — Latest</p>
            <h2 className="mt-6 text-display-lg uppercase">Academy Updates.</h2>
          </Reveal>

          <ul className="mt-16 divide-y divide-white/10 hairline-t hairline-b">
            {updates.map((u, i) => (
              <Reveal key={u.title} as="li" delay={i * 80}>
                <a href="#" className="group flex items-center justify-between gap-6 py-8 transition-colors hover:bg-white/[0.02]">
                  <div className="flex min-w-0 items-center gap-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-28 shrink-0">{u.tag}</span>
                    <p className="truncate text-lg md:text-2xl">{u.title}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline text-xs text-muted-foreground">{u.date}</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="hairline-t">
        <div className="container-xl py-32 md:py-44 text-center">
          <Reveal>
            <p className="font-display text-display-lg uppercase">Join the Academy.</p>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Recruitment, trials, and academy programme enquiries.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
