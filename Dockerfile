# syntax = docker/dockerfile:1.2

FROM node:lts-alpine AS runtime
WORKDIR /app

ARG TURSO_DB_URL
ARG TURSO_DB_AUTH_TOKEN

COPY . .

# RUN --mount=type=secret,id=_env,required=true TURSO_DB_URL=$(cat /run/secrets/_env | grep TURSO_DB_URL | cut -d '=' -f 2) \
#     TURSO_DB_URL=$(cat /run/secrets/_env | grep TURSO_DB_AUTH_TOKEN | cut -d '=' -f 2) \
#     DATABASE_URL=$(cat /run/secrets/_env | grep DATABASE_URL | cut -d '=' -f 2) \
# RUN --mount=type=secret,id=env,required=true $(cat /run/secrets/env) \
RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /etc/secrets/.env \
    && npm install \
    && npm run prisma-generate \
    && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
