import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxCompanyLogo } from "@/components/MvxCompanyLogo";

export const Route = createFileRoute("/mvx")({
  head: () => ({
    meta: [
      { title: "MVX — The Company Behind MVX Esports" },
      {
        name: "description",
        content:
          "MVX is the parent company that established and built MVX Esports — an esports specialised organisation made for the big leagues.",
      },
      { property: "og:title", content: "MVX — The Company Behind MVX Esports" },
      {
        property: "og:description",
        content:
          "The parent company behind MVX Esports: structure, standards, and long-term vision built for the big leagues.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MvxPage,
});

const pillars = [
  { k: "Structure", v: "Corporate discipline applied to competitive gaming — clear roles, clear accountability." },
  { k: "Performance", v: "Coaching, analysis, and infrastructure designed for the highest tiers of play." },
  { k: "Brand", v: "One identity, one standard: Pure Class across every division and platform." },
  { k: "Longevity", v: "Every decision measured against the next decade, not the next season." },
];

const divisions = [
  {
    name: "MVX Esports",
    desc: "The competitive arm — active rosters in Rocket League, Fortnite, and Rainbow Six Siege, with further titles in development.",
    to: "/teams" as const,
  },
  {
    name: "Partnerships",
    desc: "Commercial collaborations and creator partnerships that extend the MVX name beyond the server.",
    to: "/sponsors" as const,
  },
];

function MvxPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-32 md:pt-32 md:pb-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">MVX</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-4xl">
            The company behind the class.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            MVX is the parent company that established and built MVX Esports — an esports specialised
            organisation built and made for the big leagues. Everything that carries the MVX name is
            designed, financed, and governed here.
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            MVX was established and founded by{" "}
            <Link
              to="/maxverstappen"
              className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
            >
              Maxverstappen__
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Who we are</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl uppercase">Built to compete</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                MVX operates as an esports specialist: we build competitive programmes, develop players,
                and run the operational backbone that lets them focus on winning — management, coaching,
                logistics, brand, and technology under one roof.
              </p>
              <p>
                We are not built for the hobby scene. Every structure we put in place assumes the big
                leagues, so that when the opportunity arrives, nothing has to be rebuilt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Pillars</p>
            <h2 className="mt-6 text-display-lg uppercase">How we operate.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 hairline-t hairline-b sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.k} delay={i * 80}>
                <div className="bg-background p-8 h-full">
                  <p className="font-display text-xl uppercase tracking-[0.06em]">{p.k}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The ecosystem</p>
            <h2 className="mt-6 text-display-lg uppercase">Under the MVX name.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <Link to={d.to} className="block h-full">
                  <article className="group h-full rounded-3xl border border-white/10 bg-elevated p-8 md:p-10 transition-all duration-500 hover:border-white/30 hover:-translate-y-1">
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
                      {d.name}
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                      {d.desc}
                    </p>
                    <div className="mt-10 hairline-t pt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Explore →
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 text-center">
          <Reveal>
            <MvxCompanyLogo className="mx-auto h-24 w-24" />
            <h2 className="mt-10 text-display-lg uppercase">Work with MVX.</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Partnership, sponsorship, or player enquiries — the company handles every conversation
              directly.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
