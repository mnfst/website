<script lang="ts">
  import { Validators } from '../lib/validators'
  import type { ValidatorFn, ValidatorResult } from '../lib/validators'
  import { flashMessage } from '../stores'
  import { MessageType } from '../enums/message-type.enum'
  import { appConstants } from '../app.constants'

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
    phone_number: {
      validators: []
    },
    comment: {
      validators: [Validators.required]
    }
  }
  let errors: { [inputName: string]: ValidatorResult } = {}

  function isFormValid(): boolean {
    return !Object.values(errors).some((field) =>
      Object.values(field).some((errorObject) => errorObject.error)
    )
  }

  function validateForm(formData: any): void {
    errors = {}
    const data: any = {}
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }

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

  const onSubmit = async (event: any) => {
    const formData: any = new FormData(event.target)

    validateForm(formData)

    if (isFormValid()) {
      const res: Response = await fetch(appConstants.contactEndpointUrl, {
        method: 'POST',
        body: new FormData(event.target)
      })

      if (res.status === 200) {
        $flashMessage = {
          type: MessageType.Success,
          message: 'Le message a bien été envoyé, nous reviendrons vers vous très prochainement.'
        }
      } else {
        $flashMessage = {
          type: MessageType.Error,
          message: `Une erreur s'est passée lors de l'envoi du message. Veuillez essayer de nous contacter d'une autre façon.`
        }
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
      <div class="column">
        <label for="phone_number">Téléphone</label><br />
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          class="input"
          class:is-danger={errors?.tel}
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <label for="comment">Message<span class="has-text-danger">*</span></label><br />
        <textarea
          name="comment"
          id="comment"
          class="textarea"
          class:is-danger={errors?.comment}
          cols="30"
          rows="10"
        />
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <button class="button is-primary" type="submit">Envoyer</button>
      </div>
    </div>
  </form>
</div>
