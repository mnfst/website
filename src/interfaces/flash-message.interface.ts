import type { MessageType } from '../enums/message-type.enum'

export interface FlashMessage {
	type: MessageType
	message: string
}
