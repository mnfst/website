<script>
	import '../styles/app.scss';
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
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
				<a class="navbar-link"> Usages </a>

				<div class="navbar-dropdown">
					<a class="navbar-item"> About </a>
					<a class="navbar-item"> Jobs </a>
					<a class="navbar-item"> Contact </a>
					<hr class="navbar-divider" />
					<a class="navbar-item"> Report an issue </a>
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
