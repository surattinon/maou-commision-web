FROM oven/bun:latest as builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN echo "Starting build process..." && \
    bun --version && \
    ls -la && \
    cat package.json && \
    bun run build || (echo "Build failed" && cat .next/error.log || echo "No error log found")

FROM oven/bun:latest

WORKDIR /app

COPY --from=builder ./.next ./.next
COPY --from=builder ./public ./public
COPY --from=builder ./package.json ./package.json
COPY --from=builder ./bun.lock ./bun.lock
COPY --from=builder ./next.config.ts ./next.config.ts

# Install only production dependencies
RUN bun install --production

# Set environment to production
ENV NODE_ENV production

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
