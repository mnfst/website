import { CompositeWidgetConfig } from './widget.models'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  widget?: CompositeWidgetConfig
}

export interface UseCase {
  id: string
  label: string
  icon: string
  excerpt: string
  messages: ChatMessage[]
}
