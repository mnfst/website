export interface Integration {
  slug: string
  title: string
  name?: string
  excerpt: string
  category: string
  logo: string
  cover: string
  htmlContent: string
  relatedResources: { anchor: string; link: string }[]
}
