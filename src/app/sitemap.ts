import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://manifest.build',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://manifest.build/playground',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://manifest.build/brand-assets',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: 'https://manifest.build/privacy',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.0
    },
    {
      url: 'https://manifest.build/integrations',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/s3-storage',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/digital-ocean-spaces',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/render',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/digital-ocean',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/fly-io',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/partnerships',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.6
    },
    {
      url: 'https://manifest.build/sponsors',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.6
    }
  ]
}
