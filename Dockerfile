FROM oven/bun:latest as builder

WORKDIR /app

ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_ADMIN_PASSWORD

ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_ADMIN_PASSWORD=$NEXT_PUBLIC_ADMIN_PASSWORD

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

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
COPY --from=builder /app/next.config.ts ./next.config.ts

# Install only production dependencies
RUN bun install --production

# Set environment to production
ENV NODE_ENV production

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
