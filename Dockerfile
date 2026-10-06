# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.16.0
ARG STATIC_SERVER_IMAGE=nginx:1.30.5-alpine

FROM node:${NODE_VERSION}-bookworm-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM ${STATIC_SERVER_IMAGE} AS site
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
