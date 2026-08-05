import { Link } from "@tanstack/react-router";
import { TikTokIcon, InstagramIcon, XIcon, DiscordIcon, TwitchIcon, YouTubeIcon, SOCIAL_LINKS } from "./SocialIcons";
import { MvxLogo } from "./MvxLogo";

export function SiteFooter() {
  return (
    <footer className="hairline-t mt-32">
      <div className="container-xl py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <MvxLogo className="h-10 w-10" />
              <span className="font-display text-xs tracking-[0.25em] uppercase">
                MVX Esports
              </span>
            </div>
            <p className="mt-6 font-display text-3xl md:text-4xl uppercase tracking-[0.06em]">
              Pure Class
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A modern esports organization built on professionalism, ambition, and competitive excellence.
            </p>
          </div>

          <FooterCol title="Explore" items={[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Teams", to: "/teams" },
          ]} />
          <FooterCol title="Business" items={[
            { label: "Sponsors", to: "/sponsors" },
            { label: "Contact", to: "/contact" },
            { label: "Social", to: "/social" },
          ]} />


          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Connect</p>
            <div className="mt-5 flex gap-3">
              {([
                { Icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { Icon: XIcon, href: SOCIAL_LINKS.x, label: "X" },
                { Icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
                { Icon: YouTubeIcon, href: SOCIAL_LINKS.youtube, label: "YouTube" },
                { Icon: TwitchIcon, href: SOCIAL_LINKS.twitch, label: "Twitch" },
                { Icon: DiscordIcon, href: SOCIAL_LINKS.discord, label: "Discord" },
              ]).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white hover:text-background transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">contact@mvxesports.com</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 hairline-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 MVX Esports. All Rights Reserved.</p>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Est. 2026</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-sm hover:text-muted-foreground transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
