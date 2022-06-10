<script context="module" lang="ts">
	import { usageContents } from '../../content/usages.content'
	import type { KeyFeature } from '../../interfaces/key-feature.interface'
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
	import { keyFeaturesContents } from '../../content/key-features.content'

	export let usage: Usage

	const keyFeatures: KeyFeature[] = keyFeaturesContents.filter((keyFeature: KeyFeature) =>
		keyFeature.usages.includes(usage.slug)
	)
	let activeKeyFeature = keyFeatures[0]
</script>

<!-- Hero -->
<section class="hero is-info">
	<div class="hero-body">
		<p class="subtitle">{usage.name}</p>
		<h1 class="title is-1">{usage.title}</h1>
		<p class="subtitle">{usage.subtitle}</p>
	</div>
</section>

<!-- Key features -->
<div class="hero is-warning">
	<div class="container">
		<div class="columns">
			<div class="column is-10 is-offset-1">
				<h2 class="title is-2">On travaille mieux quand on a les bons outils</h2>
				<p>
					CASE vous est livré avec un paquet de fonctionnalités prêtes à être employées pour votre
					cause.
				</p>
			</div>
		</div>
		<div class="columns">
			<div class="column is-4">
				<!-- TODO: Separate keyFeatures into 2 columns -->
				<ul>
					{#each keyFeatures as keyFeature}
						<li
							on:mouseover={() => (activeKeyFeature = keyFeature)}
							on:focus={() => (activeKeyFeature = keyFeature)}
							class:is-active={activeKeyFeature === keyFeature}
						>
							<strong>{keyFeature.name}</strong>
							<p>{keyFeature.description}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div class="column is-4">
				<div class="box">
					<img src="../../{activeKeyFeature.image}" alt={activeKeyFeature.name} />
				</div>
			</div>
			<div class="column is-4">
				<ul>
					{#each keyFeatures as keyFeature}
						<li
							on:mouseover={() => (activeKeyFeature = keyFeature)}
							on:focus={() => (activeKeyFeature = keyFeature)}
							class:is-active={activeKeyFeature === keyFeature}
						>
							<strong>{keyFeature.name}</strong>
							<p>{keyFeature.description}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
