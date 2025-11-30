# --- BUILD STAGE --- #
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y \
  python3 \
  build-essential \
  --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# --- PRODUCTION STAGE --- #
FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
