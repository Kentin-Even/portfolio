# Portfolio

Site portfolio construit avec [TanStack Start](https://tanstack.com/start), Tailwind CSS, shadcn/ui, Drizzle (PostgreSQL) et Better Auth.

## Démarrage

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `pnpm dev` | serveur de développement |
| `pnpm build` | build de production (serveur Nitro dans `.output/`) |
| `pnpm check` | lint + format (Biome) |
| `pnpm test` | tests unitaires, composants, intégration et e2e |
| `pnpm db:push` / `db:migrate` | schéma Drizzle (`src/db/schema.ts`) |

Les tests d'intégration et e2e nécessitent `DATABASE_URL`.

## Better Auth

Générer `BETTER_AUTH_SECRET` dans `.env.local` :

```bash
pnpm dlx @better-auth/cli secret
```

## Déploiement

```bash
pnpm build
node .output/server/index.mjs
```

Un `Dockerfile` et un `docker-compose.yml` sont fournis.
