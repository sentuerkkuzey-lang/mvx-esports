import type { SVGProps } from "react";

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.4v3.05a8.5 8.5 0 0 1-4.5-1.32v6.62a6.25 6.25 0 1 1-6.25-6.25c.26 0 .51.02.75.05v3.16a3.2 3.2 0 1 0 2.25 3.04V3h3.25Z" />
    </svg>
  );
}

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.6-.719 1.384-.984 2a18.27 18.27 0 0 0-5.486 0 12.6 12.6 0 0 0-1-2 .078.078 0 0 0-.08-.037 19.74 19.74 0 0 0-3.76 1.17.07.07 0 0 0-.032.027C2.07 8.045 1.39 11.61 1.72 15.13a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.1 13.1 0 0 1-1.873-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.06 0a.075.075 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.874.891.077.077 0 0 0-.04.106c.36.7.772 1.363 1.225 1.993a.077.077 0 0 0 .084.028 19.84 19.84 0 0 0 6.003-3.03.077.077 0 0 0 .032-.055c.5-4.07-.838-7.605-3.548-10.735a.06.06 0 0 0-.032-.028ZM8.02 14.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.42-2.157 2.42Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.42-2.157 2.42Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2.5 2.5 5 17.5 12 20 19 17.5 21.5 2.5H2.5Zm4.3 4.3h2.5v7.5H6.8V6.8Zm6.2 0h2.5v7.5H13V6.8Z" />
      <path d="M17.5 2.5v2.5h2.5v10l-5 2.5-5-2.5V2.5" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3.03 3.03 0 0 0-2.1-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3.03 3.03 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.1 2.2c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3.03 3.03 0 0 0 2.1-2.2A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.55 15.5V8.5l6.27 3.5L9.55 15.5Z" />
    </svg>
  );
}

export const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@mvx.esports__",
  instagram: "https://www.instagram.com/mvx.esports__?igsh=ZHJmMmU5cmM4eXF5&utm_source=qr",
  x: "https://x.com/MVXEsports",
  discord: "https://discord.gg/XkAnjVmTCE",
  twitch: "https://www.twitch.tv/mvxesports__",
  youtube: "https://www.youtube.com/@mvxesports",
} as const;
