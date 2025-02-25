import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://manifest.build',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://manifest.build/playground',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://manifest.build/brand-assets',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: 'https://manifest.build/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.0
    },
    {
      url: 'https://manifest.build/integrations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: 'https://manifest.build/integrations/s3-storage',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    }
  ]
}
