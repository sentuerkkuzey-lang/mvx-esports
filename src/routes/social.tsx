import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { TikTokIcon, InstagramIcon, XIcon, DiscordIcon, TwitchIcon, SOCIAL_LINKS } from "@/components/SocialIcons";
import twitchIcon from "@/assets/twitch-icon.png";
import discordIcon from "@/assets/discord-icon.png";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social — MVX Esports" },
      { name: "description", content: "Follow MVX Esports across every platform." },
    ],
  }),
  component: SocialPage,
});

const socials: { name: string; handle: string; icon?: ComponentType<SVGProps<SVGSVGElement>>; image?: string; href: string }[] = [
  { name: "Instagram", handle: "@mvx.esports__", icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { name: "X / Twitter", handle: "@MVXEsports", icon: XIcon, href: SOCIAL_LINKS.x },
  { name: "TikTok", handle: "@mvx.esports__", icon: TikTokIcon, href: SOCIAL_LINKS.tiktok },
  { name: "Twitch", handle: "@mvxesports__", image: twitchIcon, href: SOCIAL_LINKS.twitch },
  { name: "Discord", handle: "Join the server", image: discordIcon, href: SOCIAL_LINKS.discord },
];

function SocialIcon({ social }: { social: typeof socials[number] }) {
  if (social.image) {
    return <img src={social.image} alt={social.name} className="h-6 w-6 object-contain" loading="lazy" width={512} height={512} />;
  }
  const Icon = social.icon;
  return Icon ? <Icon className="h-6 w-6" /> : null;
}

function SocialPage() {
  return (
    <>
      <section className="container-xl pt-20 pb-20 md:pt-32 md:pb-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Social</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-3xl">Follow the journey.</h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Inside the organization — competition, content, and culture. One brand, every platform.
          </p>
        </Reveal>
      </section>

      <section className="container-xl pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-elevated p-8 md:p-10 transition-all duration-500 hover:border-white/30 hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15">
                    <SocialIcon social={s} />
                  </span>
                  <div>
                    <p className="font-display text-xl uppercase tracking-[0.06em]">{s.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl pb-32">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-elevated p-10 md:p-14 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Community</p>
            <h2 className="mt-4 text-display-lg uppercase">Join the Discord.</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Live updates, watch parties, and direct access to the MVX community.
            </p>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
            >
              <DiscordIcon className="h-4 w-4" />
              Join Discord
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
