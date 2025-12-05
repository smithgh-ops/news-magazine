# Multi-stage Dockerfile for News Magazine production deployment
# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with longer timeout
RUN npm config set fetch-timeout 600000 && \
    npm config set fetch-retries 5 && \
    npm install

# Copy source code
COPY . .

# Build arguments for environment variables
ARG PUBLIC_API_BASE_URL
ARG PUBLIC_TENANT_SLUG
ARG PUBLIC_SITE_NAME
ARG PUBLIC_API_KEY

# Set environment variables for build
ENV PUBLIC_API_BASE_URL=${PUBLIC_API_BASE_URL}
ENV PUBLIC_TENANT_SLUG=${PUBLIC_TENANT_SLUG}
ENV PUBLIC_SITE_NAME=${PUBLIC_SITE_NAME}
ENV PUBLIC_API_KEY=${PUBLIC_API_KEY}

# Build the application
RUN npm run build

# Stage 2: Production server with nginx
FROM nginx:alpine AS production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
