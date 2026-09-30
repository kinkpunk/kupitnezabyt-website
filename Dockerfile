# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@11.19.0

# Copy dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Set required environment variables for build
ENV PUBLIC_APP_URL=https://kupitnezabyt-webapp.vercel.app/
ENV PUBLIC_SITE_URL=https://kupitnezabyt.ru/

# Build static site
RUN pnpm build

# Serve stage
FROM node:22-alpine
WORKDIR /app

# Install simple HTTP server
RUN npm install -g http-server

# Copy built static files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start server
CMD ["http-server", "dist", "-p", "3000"]
