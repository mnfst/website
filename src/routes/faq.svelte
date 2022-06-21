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

<div class="container mt-5">
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
</style>
