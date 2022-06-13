<script lang="ts">
	import { Validators } from '../lib/validators'
	import type { ValidatorFn, ValidatorResult } from '../lib/validators'
	import { flashMessage } from '../stores'
	import { MessageType } from '../enums/message-type.enum'

	let errors: { [inputName: string]: ValidatorResult } = {}

	let form: {
		[inputName: string]: {
			validators: ValidatorFn[]
		}
	} = {
		name: {
			validators: [Validators.required]
		},
		company: {
			validators: [Validators.required]
		},
		email: {
			validators: [Validators.required, Validators.email]
		},
		message: {
			validators: [Validators.required]
		}
	}

	function isFormValid(): boolean {
		return !Object.values(errors).some((field) =>
			Object.values(field).some((errorObject) => errorObject.error)
		)
	}

	function validateForm(data: { [inputName: string]: any }): void {
		Object.keys(data).forEach((field) => validateField(field, data[field]))
	}

	function validateField(field, value) {
		form[field]?.validators &&
			form[field].validators.forEach((fn) => {
				const error = fn(value)
				if (error) {
					errors[field] = { ...errors[field], ...error }
				}
			})
	}

	const onSubmit = (event: any) => {
		const formData: any = new FormData(event.target)

		const data: any = {}
		for (let field of formData) {
			const [key, value] = field
			data[key] = value
		}

		validateForm(data)

		if (isFormValid()) {
			console.log(data)
			// TODO: Send POST request to email API.
			$flashMessage = {
				type: MessageType.Success,
				message: 'Le message a bien été envoyé, nous reviendrons vers vous très prochainement.'
			}
		} else {
			$flashMessage = {
				type: MessageType.Error,
				message: 'Le formulaire est invalide, veuillez renseigner les champs obligatoires.'
			}
			console.log('Invalid Form', errors)
		}
	}
</script>

<div class="container">
	<div class="columns">
		<div class="column">
			<h1 class="title is-1">Contact</h1>
		</div>
	</div>

	<form novalidate on:submit|preventDefault={onSubmit}>
		<div class="columns">
			<div class="column">
				<label for="name">Nom et prénom<span class="has-text-danger">*</span></label><br />
				<input type="text" id="name" name="name" class="input" class:is-danger={errors?.name} />
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="company">Entreprise ou organisation<span class="has-text-danger">*</span></label
				><br />
				<input
					type="text"
					id="company"
					name="company"
					class="input"
					class:is-danger={errors?.company}
				/>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="email">Email<span class="has-text-danger">*</span></label><br />
				<input type="email" id="email" name="email" class="input" class:is-danger={errors?.email} />
				{#if errors?.email?.email?.error}
					<p class="error-message">{errors.email.email.message}</p>
				{/if}
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="message">Message<span class="has-text-danger">*</span></label><br />
				<textarea
					name="message"
					id="message"
					class="textarea"
					class:is-danger={errors?.message}
					cols="30"
					rows="10"
				/>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<label for="attachment">Pièce jointe</label><br />
				<div class="file has-name">
					<label class="file-label">
						<input class="file-input" type="file" name="resume" />
						<span class="file-cta">
							<span class="file-icon">
								<i class="fas fa-upload" />
							</span>
							<span class="file-label">
								Ajouter une pièce jointe (cahier des charges, specifications,etc.)</span
							>
						</span>
						<span class="file-name"> %% File name</span>
					</label>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<button class="button is-primary" type="submit">Envoyer</button>
			</div>
		</div>
	</form>
</div>
