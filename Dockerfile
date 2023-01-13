# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

# Copy and build
COPY . .
RUN npm run build

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage - webpack put build out into dist - so copy this folder
COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]