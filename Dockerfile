# syntax = docker/dockerfile:1.2

FROM node:lts-alpine AS runtime
WORKDIR /app

# ARG TURSO_DB_URL
# ARG TURSO_DB_AUTH_TOKEN

COPY . .

RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env npm install \
    && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
