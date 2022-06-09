<script lang="ts">
	import { usageContents } from '../content/usages.content'
	import type { Usage } from '../interfaces/usage.interface'

	let usages: Usage[] = usageContents
</script>

<div class="container">
	<h1 class="title is-1">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<div class="columns is-multiline is-mobile">
		{#each usages as usage}
			<div class="column is-6 notification is-info">
				<a href="/usages/{usage.slug}">{usage.name}</a>
			</div>
		{/each}
	</div>
</div>
