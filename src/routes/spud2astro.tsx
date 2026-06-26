import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import spud2astro from "@/assets/spud2astro.jpg";

export const Route = createFileRoute("/spud2astro")({
  head: () => ({
    meta: [
      { title: "Spud2Astro — MVX Esports Partner" },
      { name: "description", content: "Ethan 'Spud2Astro' — IT support technician, content creator, and official MVX Esports partner." },
      { property: "og:title", content: "Spud2Astro — MVX Esports Partner" },
      { property: "og:description", content: "Brand ambassador and technical backbone of MVX Esports." },
      { property: "og:image", content: spud2astro },
    ],
  }),
  component: Spud2AstroPage,
});

function Spud2AstroPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-12 md:pt-32">
        <Reveal>
          <Link to="/sponsors" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
            ← Partners
          </Link>
        </Reveal>
      </section>

      <section className="container-xl pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20 items-start">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-elevated">
              <img
                src={spud2astro}
                alt="Ethan 'Spud2Astro' portrait"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Official Partner</p>
            <h1 className="mt-6 text-display-lg uppercase">Spud2Astro</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ethan — content creator, IT support technician, and MVX Esports partner.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Brand Ambassador</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">IT & Infrastructure</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Streamer</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">Background and Streaming Career</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ethan "Spud2Astro" is an IT support technician, content creator, and official partner at MVX Esports.
              Ethan works in the IT support sector, which informs the technical setup of his streams. Under the alias
              Spud2Astro, he runs a live-streaming channel centered on community interaction, gaming, and sports
              discussion. He is well-known in his community for inside jokes, including his habit of drinking from a
              large glass jar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">Role at MVX Esports</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ethan is a formal partner within MVX Esports. He acts as a brand ambassador by representing the
              organization on his streams, and he uses his IT background to maintain the club's technical
              infrastructure and backend operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-md uppercase">Partner with MVX.</h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              Business inquiries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
