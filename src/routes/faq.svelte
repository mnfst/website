<script lang="ts">
  import { faqContents } from '../content/faqs.content'

  import type { Faq } from '../interfaces/faq.interface'
  import { MetaTags } from 'svelte-meta-tags'

  let faqs: Faq[] = faqContents
  let activeFaq: Faq

  const groups: { name: string; faqs: Faq[] }[] = faqs.reduce(
    (acc: { name: string; faqs: Faq[] }[], faq: Faq) => {
      const group = acc.find((group) => group.name === faq.group)
      if (group) {
        group.faqs.push(faq)
      } else {
        acc.push({
          name: faq.group,
          faqs: [faq]
        })
      }
      return acc
    },
    []
  )
</script>

<MetaTags title="FAQ | CASE" description="Questions récurrentes sur l'application CASE." />

<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-6 is-uppercase">FAQ</h1>
          <h2 class="title is-2">Hello! Comment pouvons-nous vous aider ?</h2>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container mt-6">
  {#each groups as group}
    <div class="columns groups">
      <div class="column is-3 group-names">
        <h2 class=" group-name title is-3 has-line">{group.name}</h2>
      </div>
      <div class="column questions">
        <div class="accordion">
          {#each group.faqs as faq}
            <div
              class="accordion-item is-flex is-justify-content-space-between is-fullwidth  pointer"
              on:click={() => (activeFaq === faq ? (activeFaq = null) : (activeFaq = faq))}
            >
              <h3 class="title is-5 mb-0">{faq.question}</h3>
              <i
                class="ci"
                class:ci-chevron_big_up={activeFaq === faq}
                class:ci-chevron_big_down={activeFaq !== faq}
              />
            </div>
            {#if activeFaq === faq}
              <p class="mt-2">{faq.answer}</p>
            {/if}
            <hr />
          {/each}
        </div>
      </div>
    </div>
    <hr class="has-background-grey-darker group-separator is-hidden-mobile mb-6 mt-5" />
  {/each}
</div>
<!-- CTA  -->
<section class="hero is-success-light is-relative">
  <div class="hero-body py-0">
    <div class="container">
      <div class="card  py-8 card--cta is-shadowless has-background-success-light">
        <div class="columns">
          <div class="column is-6">
            <h3 class="title is-3 has-text-dark">Démo en ligne sur demande</h3>
            <p class="has-text-grey-dark mb-4">
              Integer legentibus erat a ante historiarum dapibus. Cum ceteris in veneratione tui
              montes, nascetur mus. Phasellus laoreet lorem vel dolor tempus vehicula.
            </p>
            <div class="advantage-list mb-4">
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4"
              >
                <span class="icon mr-2">
                  <i class="fas fa-layer-group has-text-warning" />
                </span>
                <span>Sans création de compte</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4"
              >
                <span class="  icon mr-2">
                  <i class="fas fa-rocket has-text-warning" />
                </span>
                <span>Aucune information à donner</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap "
              >
                <span class="  icon mr-2">
                  <i class="fas fa-shield-alt has-text-warning" />
                </span>
                <span>Choisissez parmi 2 exemples</span>
              </span>
            </div>
            <button class="button is-warning mb-4">Essayez CASE gratuitement</button>
          </div>
          <div class="column is-6 is-relative">
            <figure
              class=" cta-img cta-img--01 is-flex is-justify-content-flex-end is-align-items-flex-end"
            >
              <img src="./img/case-list-view.png" />
            </figure>
            <figure class=" cta-img cta-img--02">
              <img src="./img/case-history-activity.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import './../styles/variables.scss';
  @import './bulma/sass/utilities/all';

  .group-names {
    @include mobile {
      padding-bottom: 1rem;
    }
  }
  .accordion-item {
    margin-top: 2rem;
  }
  .questions {
    @include mobile {
      padding-top: 0;
    }
    @include desktop {
      margin-top: 0.5rem;
    }
  }
  .groups {
    &:nth-last-child(2) {
      margin-bottom: 4.8rem;
    }
  }
  .group-separator:last-child {
    display: none;
  }

  .cta-img {
    img {
      box-shadow: $shadow;
    }
    &--01 {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
    }
    &--02 {
      position: absolute;
      width: 80%;
      bottom: -24px;
      left: -24px;
    }
  }
  .hero--cta-bottom {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;

    @include widescreen {
      margin-top: 15rem;
      margin-bottom: 22.8rem;
    }
    @include fullhd {
      margin-top: 18.4rem;
      margin-bottom: 20.8rem;
    }
  }
</style>
