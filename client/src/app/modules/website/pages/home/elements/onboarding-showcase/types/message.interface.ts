export interface Message {
  content: string
  author: 'user' | 'assistant'
  isBackendFile?: boolean
  time: string
}
