import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { 
Outlet, 
Link, 
createRootRouteWithContext, 
useRouter, 
HeadContent, 
Scripts, 
} from "@tanstack/react-router"; 
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url"; 
import { reportLovableError } from "../lib/lovable-error-reporting"; 
import { SiteHeader } from "@/components/SiteHeader"; 
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() { 
return ( 
<div className="flex min-h-screen items-center justify-center bg-background px-4"> 
<div className="max-w-md text-center"> 
<h1 className="font-display text-display-lg">404</h1> 
<p className="mt-4 text-sm text-muted-foreground">This page doesn't exist.</p> 
<Link
to="/"
className="mt-8 inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-background transition-colors"
> 
Return Home 
</Link> 
</div> 
</div> 
); 
}




function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { 
console.error(error); 
const router = useRouter(); 
useEffect(() => { 
reportLovableError(error, { boundary: "tanstack_root_error_component" }); 
}, [error]);

return ( 
<div className="flex min-h-screen items-center justify-center bg-background px-4"> 
<div className="max-w-md text-center"> 
<h1 className="font-display text-2xl uppercase tracking-[0.08em]">Something went wrong</h1> 
<p className="mt-3 text-sm text-muted-foreground">Please try again.</p> 
<div className="mt-6 flex justify-center gap-3"> 
<button 
onClick={() => { router.invalidate(); reset(); }} 
className="rounded-full bg-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background" 
> 
Try again 
</button> 
<a href="/" className="rounded-full border border-white/20 px-5 py-2.5 text-xs uppercase tracking-[0.2em]"> 
Home 
</a> 
</div> 
</div> 
</div> 
); 
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({ 
head: () => ({ 
meta: [ 
{ charSet: "utf-8" }, 
{ name: "viewport", content: "width=device-width, initial-scale=1" }, 
{ title: "MVX Esports" }, 
{ name: "description", content: "MVX Esports — a modern esports organization built on professionalism, ambition, and competitive excellence." }, 
{ name: "theme-color", content: "#000000" }, 
{ property: "og:title", content: "MVX Esports" }, 
{ property: "og:description", content: "MVX Esports — a modern esports organization built on professionalism, ambition, and competitive excellence." }, 
{ property: "og:type", content: "website" }, 
{ name: "twitter:card", content: "summary_large_image" }, 
{ name: "twitter:title", content: "MVX Esports" }, 
{ name: "twitter:description", content: "MVX Esports — a modern esports organization built on professionalism, ambition, and competitive excellence." }, 
{ property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5b90091d-5cd7-4406-96e4-ebc4d2b52b43/id-preview-341fec9e--99d0cef1-40d3-4c32-b5dd-6111c6a026d2.lovable.app-1782386705733.png" }, 
{ name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5b90091d-5cd7-4406-96e4-ebc4d2b52b43/id-preview-341fec9e--99d0cef1-40d3-4c32-b5dd-6111c6a026d2.lovable.app-1782386705733.png" }, 
], 
links: [ 
{ rel: "stylesheet", href: appCss }, 
{ rel: "preconnect", href: "https://fonts.googleapis.com" }, 
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, 
{ 
rel: "stylesheet", 
href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Michroma&display=swap", 
}, 
], 
}), 
shellComponent: RootShell, 
component: RootComponent, 
notFoundComponent: NotFoundComponent, 
errorComponent: ErrorComponent, 
});

function RootShell({ children }: { children: ReactNode }) { 
return ( 
<html lang="en"> 
<head> 
<HeadContent /> 
<script type="application/ld+json"> 
{JSON.stringify({ 
"@context": "https://schema.org", 
"@type": "Organization", 
"name": "MVX Esports", 
"url": "https://mvx-esports.com", 
"logo": "https://mvx-esports.com/favicon.ico", 
"sameAs": [ 
"https://www.instagram.com/mvx.esports__?igsh=ZHJmMmU5cmM4eXF5&utm_source=qr", 
"https://www.tiktok.com/@mvx.esports__", 
"https://www.x.com/MVXEsports", 
"https://www.twitch.tv/mvxesports", 
"https://www.youtube.com/@mvxesports", 
"https://discord.gg/XkAnjVmTCE" 
] 
})} 
</script> 
</head> 
<body> 
{children} 
<Scripts /> 
</body> 
</html> 
); 
}

function RootComponent() { 
const { queryClient } = Route.useRouteContext();

return ( 
<QueryClientProvider client={queryClient}> 
<SiteHeader /> 
<main className="pt-16"> 
<Outlet /> 
</main> 
<SiteFooter /> 
</QueryClientProvider> 
); 
}