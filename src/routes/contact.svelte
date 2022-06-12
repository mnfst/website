<script lang="ts">
	const onSubmit = (event: any) => {
		const formData: any = new FormData(event.target)

		const data: any = {}
		for (let field of formData) {
			const [key, value] = field
			data[key] = value
		}
		console.log(data)
		// TODO: Send POST request to email API.
	}
</script>

<div class="container">
	<div class="columns">
		<div class="column">
			<h1 class="title is-1">Contact</h1>
		</div>
	</div>

	<form on:submit|preventDefault={onSubmit}>
		<div class="columns">
			<div class="column">
				<label for="name">Nom et prénom<span class="has-text-danger">*</span></label><br />
				<input type="text" id="name" name="name" />
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="company">Entreprise ou organisation<span class="has-text-danger">*</span></label
				><br />
				<input type="text" id="company" name="company" />
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="email">Email<span class="has-text-danger">*</span></label><br />
				<input type="email" id="email" name="email" />
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="message">Message<span class="has-text-danger">*</span></label><br />
				<textarea name="message" id="message" cols="30" rows="10" />
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="attachment">Pièce jointe</label><br />
				<input type="file" id="attachement" name="attachement" />
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<button class="button is-primary" type="submit">Envoyer</button>
			</div>
		</div>
	</form>
</div>
