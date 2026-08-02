import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import spud2astro from "@/assets/spud2astro.png";
import { TikTokIcon, InstagramIcon, XIcon } from "@/components/SocialIcons";

const spudSocials = [
  {
    label: "TikTok",
    handle: "@spud2astro",
    href: "https://www.tiktok.com/@spud2astro?_r=1&_t=ZG-97YHeUrK7Ae",
    Icon: TikTokIcon,
  },
  {
    label: "Instagram",
    handle: "@spud2astro",
    href: "https://www.instagram.com/spud2astro",
    Icon: InstagramIcon,
  },
  {
    label: "X",
    handle: "@Spud2Astro",
    href: "https://x.com/Spud2Astro?s=20",
    Icon: XIcon,
  },
];

export const Route = createFileRoute("/spud2astro")({
  head: () => ({
    meta: [
      { title: "Spud2Astro — Partner of MVX Esports" },
      { name: "description", content: "Ethan 'Spud2Astro' — Co-Founder of MVX, the ecosystem behind MVX Esports. IT infrastructure, content creator, and brand leader." },
      { property: "og:title", content: "Spud2Astro — Partner of MVX Esports" },
      { property: "og:description", content: "Co-founder of MVX and the technical and creative force behind the MVX ecosystem." },
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
              Ethan "Spud2Astro" is the co-founder of MVX — the ecosystem behind MVX Esports. He shapes the organisation's technical infrastructure, brand voice, and community-first content strategy.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Co-Founder</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">IT & Infrastructure</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Content Creator</span>
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
              Ethan "Spud2Astro" began his career in IT support, where he developed the technical discipline that now underpins the entire MVX ecosystem. Under the alias Spud2Astro, he built a live-streaming channel rooted in community, sports discussion, and gaming. His on-camera presence and behind-the-scenes expertise have made him both a creator and a builder — equally comfortable in front of a stream as he is maintaining the infrastructure that keeps MVX running.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">Role at MVX</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              As co-founder of MVX, Ethan leads the technical and creative backbone of the organisation. He is responsible for the platforms, infrastructure, and partner-facing technology that power MVX Esports, while also shaping the brand's voice through content and community engagement. His role sits at the intersection of engineering, brand, and culture — making him one of the defining forces behind the MVX ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">Social Media</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-3">
              {spudSocials.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-elevated p-5 transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-white/40">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm">{handle}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>


      <section className="hairline-t">
        <div className="container-xl py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-lg uppercase">Partner with MVX.</h2>
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
