<script lang="ts">
	import { keyFeaturesContents } from '../content/key-features.content'

	import { usageContents } from '../content/usages.content'
	import type { KeyFeature } from '../interfaces/key-feature.interface'
	import type { Usage } from '../interfaces/usage.interface'

	let usages: Usage[] = usageContents
	let keyFeatures: KeyFeature[] = keyFeaturesContents

	let activeKeyFeature: KeyFeature = keyFeatures[0]
</script>

<!-- Hero -->
<section class="hero is-primary">
	<div class="hero-body">
		<h1 class="title is-1">Et si votre activité avait son app personnalisée ?</h1>
		<p class="subtitle">Hero subtitle</p>
	</div>
</section>

<!-- Usage list -->
<div class="container">
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<div class="columns is-multiline is-mobile">
		{#each usages as usage}
			<div class="column is-6 notification is-info">
				<a href="/usages/{usage.slug}">{usage.name}</a>
			</div>
		{/each}
	</div>
</div>

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
				<ul>
					{#each keyFeatures as keyFeature}
						<li
							on:mouseover={() => (activeKeyFeature = keyFeature)}
							on:focus={() => (activeKeyFeature = keyFeature)}
							class:is-active={activeKeyFeature.name === keyFeature.name}
						>
							<strong>{keyFeature.name}</strong>
							<p>{keyFeature.description}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div class="column">
				<div class="box">
					<img src={activeKeyFeature.image} alt={activeKeyFeature.name} />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	li.is-active {
		background-color: #f5f5f5;
	}
</style>
