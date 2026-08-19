import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxCompanyLogo } from "@/components/MvxCompanyLogo";
import { TikTokIcon } from "@/components/SocialIcons";

const TIKTOK_URL = "https://tiktok.com/@maxverstappen__3";

export const Route = createFileRoute("/maxverstappen")({
  head: () => ({
    meta: [
      { title: "Maxverstappen__ — Founder of MVX" },
      {
        name: "description",
        content:
          "Maxverstappen__ established and founded MVX. TikTok editor, Max Verstappen fan, and the vision behind MVX Esports.",
      },
      { property: "og:title", content: "Maxverstappen__ — Founder of MVX" },
      {
        property: "og:description",
        content:
          "The founder of MVX: a TikTok editor turned esports builder, driven by precision, patience, and Pure Class.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maxverstappen__",
          alternateName: "Maxverstappen",
          jobTitle: "Founder — MVX",
          url: "https://mvx-esports.lovable.app/maxverstappen",
          sameAs: [TIKTOK_URL],
          worksFor: {
            "@type": "Organization",
            name: "MVX Esports",
            url: "https://mvx-esports.lovable.app",
          },
        }),
      },
    ],
  }),
  component: FounderPage,
});

const facts = [
  { k: "Role", v: "Founder — MVX" },
  { k: "Craft", v: "TikTok editing" },
  { k: "Fan of", v: "Max Verstappen" },
  { k: "Standard", v: "Pure Class" },
];

function FounderPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <Link
            to="/mvx"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← MVX
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Founder &amp; Establisher
          </p>
          <h1 className="mt-6 text-display-lg uppercase max-w-4xl break-words">Maxverstappen__</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            MVX was established and founded by Maxverstappen__ — the person behind the name, the
            standard, and the long-term plan. Everything the organisation stands for started as one
            idea: build something in esports that actually looks and feels premium.
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            He started MVX because he was tired of the recent uprise of AI-generated esports teams —
            faceless brands with no soul, no standards, and no willingness to do the work themselves.
            MVX exists to prove that real founders, real taste, and real patience still win.
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            He established MVX at the age of 13, making him one of Germany&apos;s youngest company
            founders — proof that the organisation was never built on shortcuts, but on early
            conviction and an unusual level of patience for the big leagues.
          </p>
        </Reveal>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The career</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl uppercase">Editor first</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Maxverstappen__ built his name as a TikTok editor — cutting, timing, and colouring
                short-form content until every frame earned its place. Years of editing taught him
                the discipline that now defines MVX: rhythm, restraint, and detail that most people
                only notice subconsciously.
              </p>
              <p>
                That editing background is why MVX does not look like a typical esports organisation.
                The brand, the pacing of every page, the typography and the silence around it are all
                the work of someone used to shaping how something feels in the first two seconds.
              </p>
              <p>
                He is also, unapologetically, a Max Verstappen fan. The name is a tribute — and so is
                the mentality behind it: obsessive preparation, cold execution, and a refusal to
                settle for second place.
              </p>
              <p>
                From editing timelines to building rosters, staff structures, and partnerships, the
                ambition has stayed the same — take MVX to the big leagues without ever losing the
                class it was founded on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-24">
          <div className="grid gap-px bg-white/10 hairline-t hairline-b sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.k} delay={i * 80}>
                <div className="bg-background p-8 h-full">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{f.k}</p>
                  <p className="mt-4 font-display text-lg uppercase tracking-[0.06em]">{f.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-24 md:py-32 text-center">
          <Reveal>
            <MvxCompanyLogo className="mx-auto h-24 w-24" />
            <h2 className="mt-10 text-display-lg uppercase">Pure Class.</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Founded on one standard, and held to it every day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/mvx"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
              >
                About MVX
              </Link>
              <a
                href="https://www.tiktok.com/@maxverstappen__3?_r=1&_t=ZG-98ozq6ZxSRE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                <TikTokIcon className="h-4 w-4" />
                Follow on TikTok
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
