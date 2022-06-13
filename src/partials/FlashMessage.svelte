<script lang="ts">
	import { onDestroy } from 'svelte'

	import { MessageType } from '../enums/message-type.enum'
	import type { FlashMessage } from '../interfaces/flash-message.interface'

	import { flashMessage } from '../stores'

	let visible: boolean
	let timeout: NodeJS.Timeout

	const onMessageChange = (flashMessage: FlashMessage, ms: number) => {
		clearTimeout(timeout)
		if (!flashMessage) {
			// hide Alert if message is empty
			visible = false
		} else {
			visible = true // show alert
			timeout = setTimeout(() => (visible = false), ms) // and hide it after ms milliseconds
		}
	}
	$: onMessageChange($flashMessage, 3000)

	onDestroy(() => clearTimeout(timeout))
</script>

{#if $flashMessage && visible}
	<div
		class="container notification"
		class:is-danger={$flashMessage.type === MessageType.Error}
		class:is-warning={$flashMessage.type === MessageType.Warning}
		class:is-success={$flashMessage.type === MessageType.Success}
	>
		<div class="columns">
			<div class="column">{$flashMessage.message}</div>
			<div class="column" on:click={() => (visible = false)}>Close</div>
		</div>
	</div>
{/if}
