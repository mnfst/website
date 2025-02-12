---
title: Deploy Manifest on Fly.io
name: Fly.io
excerpt: Deploy app servers close to your users.
coverImage: https://manifest.build/assets/images/logo-poc.svg
logo: https://manifest.build/assets/images/logo-poc.svg
slug: fly
type: DBaaS
link:
externalLink:
---

# Deploy with Fly.io

Fly.io lets you deploy your applications globally with ease. This guide will help you get started.

## Quick Start

### 1. Install Flyctl

```bash
curl -L https://fly.io/install.sh | sh
```

### 2. Authentication

```bash
fly auth login
```

### 3. Application Setup

Create a `fly.toml`:

```toml
app = "my-app"

[build]
  builder = "heroku/buildpacks:20"

[env]
  PORT = "8080"

[http_service]
  internal_port = 8080
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
```

## Key Features

### 🌍 Global Deployment

- Edge locations worldwide
- Automatic SSL
- HTTP/3 support
- WebSocket support

### 🔒 Security Features

```toml
[http_service.concurrency]
  type = "connections"
  hard_limit = 25
  soft_limit = 20

[[http_service.checks]]
  grace_period = "30s"
  interval = "15s"
  method = "GET"
  path = "/health"
  protocol = "http"
  timeout = "10s"
```

## Database Integration

### PostgreSQL Setup

1. Create database:

```bash
fly postgres create
```

2. Connect in your application:

```typescript
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

async function query(text: string, params: any[]) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}
```

## Monitoring & Metrics

### Dashboard Overview

Access metrics for:

- Request volume
- Error rates
- Response times
- Resource usage

### Logging

```bash
fly logs
```

## Scaling Strategies

### Horizontal Scaling

```bash
fly scale count 3
```

### Vertical Scaling

```bash
fly scale vm shared-cpu-1x
```

## Best Practices

### Security

1. Enable 2FA
2. Use secrets management
3. Regular updates
4. Implement firewalls

### Performance

```toml
[http_service]
  force_https = true
  auto_stop_machines = true
  min_machines_running = 1

  [[http_service.checks]]
    grace_period = "30s"
    interval = "15s"
    timeout = "10s"
    method = "GET"
    path = "/health"
```

## Deployment Workflow

1. **Initial Setup**

   ```bash
   fly launch
   ```

2. **Configuration**

   ```bash
   fly secrets set KEY=value
   ```

3. **Deployment**
   ```bash
   fly deploy
   ```

## Support Resources

Need help? Check out:

- [Documentation](https://fly.io/docs)
- [Community](https://community.fly.io)
- [Status](https://status.fly.io)
