FROM oven/bun:latest as builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:latest

WORKDIR /app

COPY --from=builder ./.next ./.next
COPY --from=builder ./public ./public
COPY --from=builder ./package.json ./package.json
COPY --from=builder ./bun.lock ./bun.lock
COPY --from=builder ./next.config.js ./next.config.js

# Install only production dependencies
RUN bun install --production

# Set environment to production
ENV NODE_ENV production

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
