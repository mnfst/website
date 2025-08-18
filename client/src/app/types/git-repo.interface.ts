export interface GitRepo {
  name: string
  description: string
  url: string
  owner: {
    login: string
    avatar: string
    profileUrl: string
  }
  createdAt: string
  license: string
  content: {
    manifestFileContent: string
    handlers: { name: string; content: string }[]
    packageJsonContent: {
      templateVersion: string
      dependencies: { name: string; version: string }[]
    }
  }
}
