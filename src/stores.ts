import { writable, type Writable } from 'svelte/store'
import type { FlashMessage } from './interfaces/flash-message.interface'

export const flashMessage: Writable<FlashMessage> = writable()
