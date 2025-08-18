export interface PackageJson {
  name: string
  version: string
  description?: string
  keywords?: string[]
  homepage?: string
  bugs?: {
    url?: string
    email?: string
  }
  license?: string
  author?:
    | string
    | {
        name: string
        email?: string
        url?: string
      }
  contributors?: Array<
    | string
    | {
        name: string
        email?: string
        url?: string
      }
  >
  files?: string[]
  main?: string
  browser?: string
  bin?: string | Record<string, string>
  man?: string | string[]
  directories?: {
    lib?: string
    bin?: string
    man?: string
    doc?: string
    example?: string
    test?: string
  }
  repository?:
    | string
    | {
        type: string
        url: string
        directory?: string
      }
  scripts?: Record<string, string>
  config?: Record<string, any>
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  bundledDependencies?: string[]
  engines?: {
    node?: string
    npm?: string
  }
  os?: string[]
  cpu?: string[]
  private?: boolean
  publishConfig?: {
    registry?: string
    access?: 'public' | 'restricted'
    tag?: string
  }
  workspaces?:
    | string[]
    | {
        packages?: string[]
      }
  type?: 'module' | 'commonjs'
  exports?: string | Record<string, string | Record<string, string>>
  typings?: string
  types?: string
  sideEffects?: boolean | string[]
  [key: string]: any // For custom fields
}
