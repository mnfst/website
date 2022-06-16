<script context="module" lang="ts">
  import { usageContents } from '../../content/usages.content'
  import type { KeyFeature } from '../../interfaces/key-feature.interface'
  import type { Usage } from '../../interfaces/usage.interface'

  import { MetaTags } from 'svelte-meta-tags'

  /** @type {import('./__types/[slug]').Load} */
  export async function load({ params }: { params: { slug: string } }) {
    const usage: Usage = usageContents.find((usage: Usage) => usage.slug === params.slug)

    return {
      props: {
        usage
      }
    }
  }
</script>

<script lang="ts">
  import { keyFeatureContents } from '../../content/key-features.content'
  import type { Faq } from '../../interfaces/faq.interface'
  import { faqContents } from '../../content/faqs.content'

  export let usage: Usage

  const keyFeatures: KeyFeature[] = keyFeatureContents.filter((keyFeature: KeyFeature) =>
    keyFeature.usages.includes(usage.slug)
  )
  let activeKeyFeature: KeyFeature = keyFeatures[0]
  let otherUsages: Usage[] = usageContents.filter((u: Usage) => u.slug !== usage.slug)

  const faqs: Faq[] = faqContents.filter((faq: Faq) => faq.usages.includes(usage.slug))
  let activeFaq: Faq
</script>

<MetaTags title={usage.metaTitle} description={usage.metaDescription} />

<!-- Hero -->
<section class="hero is-info">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="subtitle">{usage.name}</p>
          <h1 class="title is-1">{usage.title}</h1>
          <p class="subtitle">{usage.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Paragraphs -->
<div class="container">
  {#each usage.paragraphs as paragraph}
    <div class="columns">
      <div class="column">
        <h2 class="title is-3">{paragraph.title}</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        {@html paragraph.content}
      </div>
    </div>
  {/each}
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
        <!-- TODO: Separate keyFeatures into 2 columns -->
        <ul>
          {#each keyFeatures as keyFeature, i}
            {#if i % 2 === 0}
              <li
                on:mouseover={() => (activeKeyFeature = keyFeature)}
                on:focus={() => (activeKeyFeature = keyFeature)}
                class:is-active={activeKeyFeature === keyFeature}
              >
                <strong>{keyFeature.name}</strong>
                <p>{keyFeature.description}</p>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <div class="column is-4">
        <div class="box">
          <img src="../../{activeKeyFeature.image}" alt={activeKeyFeature.name} />
        </div>
      </div>
      <div class="column is-4">
        <ul>
          {#each keyFeatures as keyFeature, i}
            {#if i % 2 !== 0}
              <li
                on:mouseover={() => (activeKeyFeature = keyFeature)}
                on:focus={() => (activeKeyFeature = keyFeature)}
                class:is-active={activeKeyFeature === keyFeature}
              >
                <strong>{keyFeature.name}</strong>
                <p>{keyFeature.description}</p>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Positions interested -->
<div class="container">
  <div class="columns">
    <div class="column is-4">
      <h2 class="title is-2">{usage.positionsInterested.title}</h2>
      <p>{usage.positionsInterested.subtitle}</p>
    </div>
    <div class="column">
      <div class="columns is-multiline">
        {#each usage.positionsInterested.positions as position}
          <div class="column is-4 card">
            <figure class="image is-128x128">
              <img class="is-rounded" src="/img/positions/{position.image}" alt={position.name} />
            </figure>
            <h3 class="title is-5">{position.name}</h3>
            <ul>
              {#each position.benefits as benefit}
                <li>{benefit}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- Faqs -->
<div class="container">
  <div class="columns">
    <div class="column">
      <ul>
        {#each faqs as faq}
          <li on:click={() => (activeFaq === faq ? (activeFaq = null) : (activeFaq = faq))}>
            <strong>{faq.question}</strong>
            <i class:is-open={activeFaq === faq} class:is-closed={activeFaq !== faq}
              >%% Icon chevron</i
            >
          </li>
          {#if activeFaq === faq}
            <p>{faq.answer}</p>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</div>

<!-- Other usages -->
<div class="container">
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">Regardez ce que CASE peut faire pour vous</h2>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      Lancez la digitalisation de votre activité grâce aux fonctionnalités de CASE.
    </div>
  </div>
  <div class="columns">
    {#each otherUsages as usage}
      <div class="column">
        <a href="/usages/{usage.slug}" class="column is-6 notification is-info">
          <a href="/usages/{usage.slug}">{usage.name}</a>
          <p>{usage.description}</p>
          <img src="/usages/{usage.image}" alt={usage.name} style="height:100px" />
        </a>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  li.is-active {
    background-color: #f5f5f5;
  }
</style>
