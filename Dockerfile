# syntax = docker/dockerfile:1.2

FROM node:21.6.1-alpine AS runtime
WORKDIR /app

COPY . .

SHELL ["/bin/ash", "-o", "pipefail", "-c"]
RUN --mount=type=secret,id=env,dst=/etc/secrets/.env \
      RENDER_TOKEN=$(grep RENDER_TOKEN /etc/secrets/.env | cut -d '=' -f 2) \
      ASTRO_STUDIO_APP_TOKEN=$(grep ASTRO_STUDIO_APP_TOKEN /etc/secrets/.env | cut -d '=' -f 2) \
      export RENDER_TOKEN && export ASTRO_STUDIO_APP_TOKEN \
      && cp /etc/secrets/.env .env \
      && npm install \
      && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
