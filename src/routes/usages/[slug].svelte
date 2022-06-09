<script context="module" lang="ts">
	import { usageContents } from '../../content/usages.content'
	import type { Usage } from '../../interfaces/usage.interface'

	export let usage: Usage

	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params }: { params: { slug: string } }) {
		const usage: Usage = usageContents.find((usage: Usage) => usage.slug === params.slug)

		return {
			props: {
				usage
			}
		}
	}
</script>

<script lang="ts">
	export let usage: Usage
</script>

<h1 class="title is-1">{usage.name}</h1>
