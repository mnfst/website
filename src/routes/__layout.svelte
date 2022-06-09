<script lang="ts">
	import '../styles/app.scss'

	import { usageContents } from '../content/usages.content'
	import type { Usage } from '../interfaces/usage.interface'

	let usages: Usage[] = usageContents
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
		</a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/"> Home </a>
			<a class="navbar-item" href="/faq"> FAQ </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<span class="navbar-link"> Usages </span>

				<div class="navbar-dropdown">
					{#each usages as usage}
						<a class="navbar-item" href="/usages/{usage.slug}">{usage.name}</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a class="button is-primary" href="/contact">
						<strong>Contactez-nous</strong>
					</a>
					<a class="button is-light" href="/demo"> Essayez CASE </a>
				</div>
			</div>
		</div>
	</div>
</nav>

<slot />
