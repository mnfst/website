import { GitRepo } from '../types/git-repo.interface'
import { OpenAPIDocument } from '../types/open-api.interface'

export interface Template {
  id: number
  name: string
  slug: string
  excerpt: string
  description: string
  tags: string[]
  features: string[]
  useCases: string[]
  diagram: string
  apiDoc?: OpenAPIDocument
  gitHubOwner: string
  gitHubSlug: string
  gitHubAvatar: string
  repo?: GitRepo
}
