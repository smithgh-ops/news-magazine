# Docker Deployment Guide

This guide explains how to deploy the News Magazine application using Docker for production.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+ (optional, but recommended)

## Quick Start

### Using Docker Compose (Recommended)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/smithgh-ops/news-magazine.git
   cd news-magazine
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.docker.example .env
   ```

   Edit `.env` and set your configuration:

   ```env
   PUBLIC_API_BASE_URL=https://api.bepress.com
   PUBLIC_TENANT_SLUG=your-tenant-slug
   PUBLIC_SITE_NAME=Your Site Name
   PUBLIC_API_KEY=your-api-key-if-needed
   PORT=80
   ```

3. **Build and run:**

   ```bash
   docker-compose up -d
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:80`

### Using Docker CLI

1. **Build the Docker image:**

   ```bash
   docker build \
     --build-arg PUBLIC_API_BASE_URL=https://api.bepress.com \
     --build-arg PUBLIC_TENANT_SLUG=news1 \
     --build-arg PUBLIC_SITE_NAME="News Magazine" \
     --build-arg PUBLIC_API_KEY="" \
     -t news-magazine:latest .
   ```

2. **Run the container:**

   ```bash
   docker run -d \
     --name news-magazine \
     -p 80:80 \
     --restart unless-stopped \
     news-magazine:latest
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:80`

## Environment Variables

| Variable              | Description                          | Required | Default                   |
| --------------------- | ------------------------------------ | -------- | ------------------------- |
| `PUBLIC_API_BASE_URL` | Base URL for the BePress API         | Yes      | `https://api.bepress.com` |
| `PUBLIC_TENANT_SLUG`  | Tenant identifier for API requests   | Yes      | `news1`                   |
| `PUBLIC_SITE_NAME`    | Display name for the website         | Yes      | `News Magazine`           |
| `PUBLIC_API_KEY`      | API authentication key (if required) | No       | -                         |
| `PORT`                | Port to expose the application       | No       | `80`                      |

## Container Management

### View logs:

```bash
docker-compose logs -f news-magazine
# or
docker logs -f news-magazine
```

### Stop the container:

```bash
docker-compose down
# or
docker stop news-magazine
```

### Restart the container:

```bash
docker-compose restart
# or
docker restart news-magazine
```

### Remove the container:

```bash
docker-compose down -v
# or
docker rm -f news-magazine
```

## Health Check

The container includes a built-in health check that runs every 30 seconds:

```bash
# Check container health status
docker inspect --format='{{.State.Health.Status}}' news-magazine
```

You can also access the health endpoint directly:

```bash
curl http://localhost:80/health
```

## Production Deployment

### Security Best Practices

1. **Use HTTPS**: Deploy behind a reverse proxy (nginx, Traefik, Caddy) with SSL/TLS
2. **Environment Variables**: Never commit `.env` files with sensitive data
3. **Updates**: Regularly update the base images and dependencies
4. **Resource Limits**: Configure appropriate CPU and memory limits
5. **Network Isolation**: Use Docker networks to isolate containers

### Example with Traefik (Reverse Proxy)

```yaml
version: '3.8'

services:
  news-magazine:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        PUBLIC_API_BASE_URL: ${PUBLIC_API_BASE_URL}
        PUBLIC_TENANT_SLUG: ${PUBLIC_TENANT_SLUG}
        PUBLIC_SITE_NAME: ${PUBLIC_SITE_NAME}
        PUBLIC_API_KEY: ${PUBLIC_API_KEY}
    container_name: news-magazine
    restart: unless-stopped
    networks:
      - traefik-public
    labels:
      - 'traefik.enable=true'
      - 'traefik.http.routers.news-magazine.rule=Host(`news.example.com`)'
      - 'traefik.http.routers.news-magazine.entrypoints=websecure'
      - 'traefik.http.routers.news-magazine.tls.certresolver=letsencrypt'

networks:
  traefik-public:
    external: true
```

### CI/CD Integration

Add to your GitHub Actions workflow:

```yaml
- name: Build and push Docker image
  uses: docker/build-push-action@v4
  with:
    context: .
    push: true
    tags: your-registry/news-magazine:latest
    build-args: |
      PUBLIC_API_BASE_URL=${{ secrets.API_BASE_URL }}
      PUBLIC_TENANT_SLUG=${{ secrets.TENANT_SLUG }}
      PUBLIC_SITE_NAME=${{ secrets.SITE_NAME }}
      PUBLIC_API_KEY=${{ secrets.API_KEY }}
```

## Troubleshooting

### Container won't start

1. Check logs: `docker logs news-magazine`
2. Verify environment variables are set correctly
3. Ensure port 80 is not already in use

### Health check failing

1. Check if nginx is running: `docker exec news-magazine ps aux | grep nginx`
2. Verify the health endpoint: `docker exec news-magazine wget -O- http://localhost:80/health`

### Build fails

1. Ensure you have enough disk space
2. Check Docker daemon status: `docker info`
3. Clear Docker cache: `docker builder prune`

## Performance Optimization

The Docker image includes several optimizations:

- **Multi-stage build**: Reduces final image size
- **Alpine base**: Minimal footprint (~50MB)
- **Nginx caching**: Static assets cached for 1 year
- **Gzip compression**: Reduces bandwidth usage
- **Security headers**: Enhanced security posture

## Support

For issues or questions:

- Open an issue on [GitHub](https://github.com/smithgh-ops/news-magazine/issues)
- Check the main [README.md](README.md) for general documentation

---

Built with 🐳 Docker | Secured with 🔒 best practices
