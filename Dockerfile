# ---- Base ----
FROM node:22-alpine AS base

RUN corepack enable && corepack prepare pnpm@10.23.0 --activate
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env vars (provide via Dokploy env settings or --build-arg)
ARG APP_URL
ARG REGISTRY_NAMESPACE
ARG REGISTRY_NAMESPACE_URL
ARG GITHUB_API_TOKEN
ARG GITHUB_CONTRIBUTIONS_API_URL
ARG NEXT_PUBLIC_DMCA_URL
ARG NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST
ARG NEXT_PUBLIC_POSTHOG_UI_HOST
ARG NEXT_PUBLIC_OPENPANEL_CLIENT_ID

ENV APP_URL=$APP_URL
ENV REGISTRY_NAMESPACE=$REGISTRY_NAMESPACE
ENV REGISTRY_NAMESPACE_URL=$REGISTRY_NAMESPACE_URL
ENV GITHUB_API_TOKEN=$GITHUB_API_TOKEN
ENV GITHUB_CONTRIBUTIONS_API_URL=$GITHUB_CONTRIBUTIONS_API_URL
ENV NEXT_PUBLIC_DMCA_URL=$NEXT_PUBLIC_DMCA_URL
ENV NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY
ENV NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST
ENV NEXT_PUBLIC_POSTHOG_UI_HOST=$NEXT_PUBLIC_POSTHOG_UI_HOST
ENV NEXT_PUBLIC_OPENPANEL_CLIENT_ID=$NEXT_PUBLIC_OPENPANEL_CLIENT_ID

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

# ---- Runner ----
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy the standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
