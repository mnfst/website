export type IntegrationType = 'deployment' | 'DBaaS' | 'Storage service'

export interface Integration {
  title: string
  name: string
  excerpt: string
  coverImage: string
  content: string
  logo: string
  slug: string
  type: IntegrationType
  website: string
  relatedLinks?: {
    title: string
    href: string
  }[]
}
