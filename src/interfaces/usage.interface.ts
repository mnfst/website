export interface Usage {
  name: string
  title: string
  image: string
  cover01: string
  cover02: string
  subtitle: string
  slug: string
  description: string
  shortDescription: string
  positionsInterested: {
    title: string
    subtitle: string
    positions: { name: string; image: string; benefits: string[] }[]
  }
  paragraphs: { title: string; content: string }[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}
