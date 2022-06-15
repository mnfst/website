export interface Usage {
  name: string
  title: string
  image: string
  subtitle: string
  slug: string
  description: string
  positionsInterested: {
    title: string
    subtitle: string
    positions: { name: string; benefits: string[] }[]
  }
  paragraphs: { title: string; content: string }[]
}
