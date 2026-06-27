import type { SVGProps } from "react";

/**
 * Stylized Rocket League rank badges. Monochrome to match MVX styling
 * (the platform's official colors aren't used to keep the design
 * consistent with the black & white palette).
 */
export function ChampionRankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="champ-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 L58 18 L58 38 C58 50 46 58 32 60 C18 58 6 50 6 38 L6 18 Z"
        fill="url(#champ-g)"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.95"
      />
      <path
        d="M22 26 L32 18 L42 26 L42 38 L32 46 L22 38 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function GrandChampionRankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="gc-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Outer crown */}
      <path
        d="M8 22 L16 14 L24 22 L32 10 L40 22 L48 14 L56 22 L52 44 L12 44 Z"
        fill="url(#gc-g)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 48 L52 48 L50 54 L14 54 Z" fill="currentColor" opacity="0.85" />
      {/* Gems */}
      <circle cx="16" cy="20" r="2" fill="currentColor" />
      <circle cx="32" cy="16" r="2.5" fill="currentColor" />
      <circle cx="48" cy="20" r="2" fill="currentColor" />
      <circle cx="32" cy="32" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RocketLeagueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 32 L18 24 L26 32 L32 22 L38 32 L46 24 L54 32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 32 L18 40 L26 32 L32 42 L38 32 L46 40 L54 32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}
