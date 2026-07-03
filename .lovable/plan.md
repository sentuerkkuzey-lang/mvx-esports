Deploy this TanStack Start app to Cloudflare Workers manually.

## Current setup
The project already builds for the Cloudflare preset via Nitro (`vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which targets Cloudflare Workers by default). The build produces a Worker bundle under `.output/`.

## Manual deploy commands

1. **Install Wrangler** (if not already global):
   ```bash
   bun add -d wrangler
   ```

2. **Build the project:**
   ```bash
   bun run build
   ```

3. **Deploy the Worker bundle:**
   ```bash
   npx wrangler deploy .output/server/index.mjs
   ```
   If the entry file is named differently inside `.output/server/`, adjust the path accordingly.

## What needs to be configured first
- A `wrangler.toml` file with `name`, `account_id`, `route` or `workers_dev = true`, and `compatibility_date`.
- Cloudflare API token with `Cloudflare Workers:Edit` permission, set as `CLOUDflare_API_TOKEN` env var or logged in via `npx wrangler login`.

## Optional convenience
Add a deploy script to `package.json` so the deploy command becomes:
```bash
bun run deploy
```

Would you like me to add Wrangler, create a `wrangler.toml`, and wire the `bun run deploy` script?