<script lang="ts">
  import { Validators } from '../lib/validators'
  import type { ValidatorFn, ValidatorResult } from '../lib/validators'
  import { flashMessage } from '../stores'
  import { MessageType } from '../enums/message-type.enum'
  import { appConstants } from '../app.constants'

  import { MetaTags } from 'svelte-meta-tags'

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

<MetaTags
  title="Contact | CASE"
  description="Contactez-nous pour nous questionner, nous vous répondrons dans les plus brefs délais."
/>

<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-6-tablet is-7-desktop is-8-wisescreen is-8-fullhd has-text-left">
          <div class="mr-6">
            <h1 class="title is-1">Contact Us</h1>
            <p class="is-size-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
              voluptate facere molestiae consequatur.
            </p>
            <div class="">
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
              >
                <span class="icon mr-2">
                  <i class="fas fa-check has-text-primary" />
                </span>
                <span>Centralisez production, commercial et RH</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
              >
                <span class="  icon mr-2">
                  <i class="fas fa-check has-text-primary" />
                </span>
                <span>Automatisez les tâches répétitives</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4 "
              >
                <span class="  icon mr-2">
                  <i class="fas fa-check has-text-primary" />
                </span>
                <span>Prenez de meilleures décisions</span>
              </span>
            </div>
            <hr />
            <div class="content" itemscope itemtype="https://schema.org/Organization">
              <p class="has-text-weight-bold" itemprop="name">CASE</p>
              <p itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <span
                  class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
                >
                  <span class="icon has-text-grey mr-2">
                    <i class="ci ci-location" />
                  </span>
                  <span
                    ><span itemprop="streetAddress">171, quai de Valmy</span>
                    <span itemprop="postalCode">75010 </span><span itemprop="addressLocality"
                      >Paris, France</span
                    >
                  </span>
                </span>
              </p>
              <p />
              <p>
                <span
                  class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
                >
                  <span class="icon has-text-grey mr-2">
                    <i class="ci ci-phone" />
                  </span>
                  <span itemprop="telephone">01 40 38 76 08</span>
                </span>
              </p>

              <p>
                <span
                  class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
                >
                  <span class="icon has-text-grey mr-2">
                    <i class="ci ci-mail" />
                  </span>
                  <span itemprop="email">info@case.app</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6-tablet is-5-desktop is-4-wisescreen is-4-fullhd has-text-left">
          <div class="card p-6">
            <form novalidate on:submit|preventDefault={onSubmit}>
              <div class="field mb-4">
                <label for="name">Nom et prénom<span class="has-text-danger">*</span></label>

                <p class="control">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="input"
                    class:is-danger={errors?.name}
                  />
                </p>
              </div>
              <div class="field mb-4">
                <label for="company"
                  >Entreprise ou organisation<span class="has-text-danger">*</span></label
                >
                <div class="control">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    class="input"
                    class:is-danger={errors?.company}
                  />
                </div>
              </div>
              <div class="field mb-4">
                <label for="email">Email<span class="has-text-danger">*</span></label>
                <div class="control">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="input"
                    class:is-danger={errors?.email}
                  />
                  {#if errors?.email?.email?.error}
                    <p class="error-message">{errors.email.email.message}</p>
                  {/if}
                </div>
              </div>

              <div class="field mb-4">
                <label for="phone_number">Téléphone</label>
                <div class="control">
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    class="input"
                    class:is-danger={errors?.tel}
                  />
                </div>
              </div>
              <div class="field mb-4">
                <label for="comment">Message<span class="has-text-danger">*</span></label>
                <div class="control">
                  <textarea
                    name="comment"
                    id="comment"
                    class="textarea"
                    class:is-danger={errors?.comment}
                    cols="30"
                    rows="5"
                  />
                </div>
              </div>
              <button class="button is-primary" type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import './../styles/variables.scss';
  @import './bulma/sass/utilities/all';

  figure {
    height: 220px;
    border-radius: 15px;
    overflow: hidden;
  }
</style>
