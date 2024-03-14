# syntax = docker/dockerfile:1.2

FROM node:lts-alpine AS runtime
WORKDIR /app

ARG TURSO_DB_URL
ARG TURSO_DB_AUTH_TOKEN

COPY . .

SHELL ["/bin/ash", "-o", "pipefail", "-c"]
RUN --mount=type=secret,id=_env,target=/etc/secrets/.env TURSO_DB_URL=$(grep TURSO_DB_URL /etc/secrets/.env | cut -d '=' -f 2) \
    TURSO_DB_AUTH_TOKEN=$(grep TURSO_DB_AUTH_TOKEN /etc/secrets/.env | cut -d '=' -f 2) \
    DATABASE_URL=$(grep DATABASE_URL /etc/secrets/.env | cut -d '=' -f 2) \
    export TURSO_DB_URL && export TURSO_DB_AUTH_TOKEN && export DATABASE_URL \
    && npm install \
    && npm run prisma-generate \
    && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
