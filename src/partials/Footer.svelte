<script lang="ts">
	import { usageContents } from '../content/usages.content'
	import type { Usage } from '../interfaces/usage.interface'

	let usages: Usage[] = usageContents
</script>

<footer class="footer">
	<div class="columns">
		<div class="column is-3">
			<p><strong>CASE</strong></p>
		</div>
		<div class="column is-3">
			<p><strong>Usages</strong></p>
			<ul>
				{#each usages as usage}
					<li>
						<a href="/usages/{usage.slug}">{usage.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="column is-3">
			<p><strong>Communauté</strong></p>
			<ul>
				<li>Github</li>
				<li>Discord</li>
				<li>Stack overflow</li>
			</ul>
		</div>
		<div class="column is-3">
			<p><strong>Société</strong></p>
			<ul>
				<li>A propos</li>
				<li>Carrières</li>
				<li>Contact</li>
			</ul>
		</div>
	</div>
</footer>
