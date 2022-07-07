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
<section class="hero has-background-white-bis is-medium is-relative mb-8">
  <div class="hero-body">
    <div class="container">
      <div class="columns  is-vcentered ">
        <div
          class="column
        is-12-mobile 
        is-6-tablet "
        >
          <div class="hero-content">
            <p class="is-size-5 is-bold is-uppercase has-text-weight-bold has-text-primary mb-2">
              {usage.name}
            </p>
            <h1 class="title is-1">{usage.title}</h1>
            <p class="is-size-5">
              {usage.subtitle}
            </p>
          </div>
        </div>
        <div
          class="column hero-images
        is-12-mobile
        is-6-tablet
        is-5-widescreen"
        >
          <figure class="cover-01">
            <img src="./../img/usages/{usage.cover01}" alt={usage.name} class="has-shadow" />
          </figure>
          <figure class="cover-02">
            <img src="./../img/usages/{usage.cover02}" alt={usage.name} class="has-shadow" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Key features -->
<div class="container">
  {#each usage.paragraphs as paragraph}
    <div class="columns">
      <div class="column">
        <h2 class="title is-2 has-line">{paragraph.title}</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        {@html paragraph.content}
      </div>
    </div>
  {/each}
</div>

<!-- Key feature tabs-->
<div class="hero is-white my-8">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <!-- TODO: Separate keyFeatures into 2 columns -->
        <div class="is-flex is-flex-direction-column key-features">
          {#each keyFeatures as keyFeature, i}
            {#if i % 2 === 0}
              <div
                class="box px-4 pointer mb-0"
                on:mouseover={() => (activeKeyFeature = keyFeature)}
                on:focus={() => (activeKeyFeature = keyFeature)}
                class:is-active={activeKeyFeature === keyFeature}
              >
                <strong>{keyFeature.name}</strong>
                <p>{keyFeature.description}</p>
              </div>
            {/if}
          {/each}
        </div>
      </div>
      <div class="column is-9">
        <div class="columns">
          <div class="column is-8">
            <div
              class="is-flex is-align-items-center is-justify-content-center key-features is-fullheight is-fullwidth"
            >
              <figure class=" has-object-fit-contain has-object-position-center-center">
                <img
                  src="./../img/key-features/{activeKeyFeature.image}"
                  alt={activeKeyFeature.name}
                />
              </figure>
            </div>
          </div>

          <div class="column is-4">
            <div class="is-flex is-flex-direction-column key-features">
              {#each keyFeatures as keyFeature, i}
                {#if i % 2 !== 0}
                  <div
                    class="box px-4 pointer mb-0"
                    on:mouseover={() => (activeKeyFeature = keyFeature)}
                    on:focus={() => (activeKeyFeature = keyFeature)}
                    class:is-active={activeKeyFeature === keyFeature}
                  >
                    <strong>{keyFeature.name}</strong>
                    <p>{keyFeature.description}</p>
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Positions interested -->
<div class="container">
  <div class="columns">
    <div class="column is-3">
      <h2 class="title is-2 has-line">{usage.positionsInterested.title}</h2>
      <p>{usage.positionsInterested.subtitle}</p>
    </div>
    <div class="column is-9">
      <div class="columns is-multiline is-flex is-flex-wrap-wrap">
        {#each usage.positionsInterested.positions as position}
          <div class="column is-4 is-flex">
            <div class="box is-fullheight is-fullwidth p-4 is-shadowless has-background-white-bis">
              <figure class="image is-128x128">
                <img class="is-rounded" src="/img/positions/{position.image}" alt={position.name} />
              </figure>
              <h3 class="title is-5 mt-4">{position.name}</h3>

              {#each position.benefits as benefit}
                <span
                  class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-3"
                >
                  <span class="icon mr-2">
                    <i class="ci ci-checkbox_checked has-text-success" />
                  </span>
                  <span>{benefit}</span>
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
<section class="hero  is-relative  hero--cta-bottom ">
  <div class="hero-body py-0">
    <div class="container">
      <div class="card has-background-primary has-text-light p-8 card--cta is-shadowless">
        <div class="columns">
          <div class="column is-6">
            <h3 class="title is-3  has-text-light">Démo en ligne sur demande</h3>
            <p class=" mb-4">
              Integer legentibus erat a ante historiarum dapibus. Cum ceteris in veneratione tui
              montes, nascetur mus. Phasellus laoreet lorem vel dolor tempus vehicula.
            </p>

            <button class="button is-warning mb-4">Essayez CASE gratuitement</button>
          </div>
          <div class="column is-6 is-relative">
            <figure class=" cta-img cta-img--01">
              <img src="./../img/case-sidemenu-example.png" />
            </figure>
            <figure
              class=" cta-img cta-img--02 is-flex is-justify-content-flex-end is-align-items-flex-end"
            >
              <img src="./../img/case-login-example.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Faqs -->
<div class="container">
  <div class="columns groups">
    <div class="column is-3 group-names">
      <h2 class=" group-name title is-3 has-line">Questions fréquentes au sujet de CASE</h2>
    </div>
    <div class="column questions">
      <div class="accordion">
        {#each faqs as faq}
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
            <p class="mt-2" />{/if}
          <hr />
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- Other usages -->
<div class="container mb-8 mt-5">
  <div class="columns ">
    <div class="column">
      <h2 class="title is-2 has-line">
        Quels sont vos challenges qui peuvent être optimisés par CASE ?
      </h2>
      <p>
        Passez au niveau supérieur en digitalisant votre activité grâce aux fonctionnalités de CASE.
      </p>
    </div>
  </div>
  <div class="columns is-multiline">
    {#each otherUsages as usage}
      <div class="column usage-card">
        <a
          href="/usages/{usage.slug}"
          class="box is-relative content has-background-white-bis px-4 is-flex is-flex-direction-column is-justify-content-space-between is-clipped is-align-items-flex-start"
        >
          <img src="./../img/usages/{usage.image}" alt={usage.name} />

          <div>
            <h3 class="title is-5 mb-3">{usage.name}</h3>
            <p class="has-text-grey-dark">{usage.description}</p>
            <div class="tags are-small">
              <span class="tag is-dark">Managers</span>
              <span class="tag is-dark">Commerciaux</span>
            </div>
          </div>
          <a href="/usages/{usage.slug}" class="button is-small is-primary">
            <span class="icon is-small">
              <i class="ci ci-long_up_right" />
            </span>
            <span> En savoir plus </span>
          </a>
        </a>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import './../../styles/variables.scss';
  @import './bulma/sass/utilities/all';

  li.is-active {
    background-color: #f5f5f5;
  }
  .hero-content {
    @include desktop {
      padding-right: $column-gap;
    }
    @include widescreen {
      padding-right: $gap;
    }
  }
  .hero-images {
    @include tablet {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .cover-01 {
    @include mobile {
      width: 600px;
    }
    @include tablet {
      width: 800px;
    }

    @include widescreen {
      width: 100%;
    }
  }
  .cover-02 {
    position: absolute;
    bottom: 0;
    @include mobile {
      width: 150px;
      left: 12px;
      bottom: 12px;
    }
    @include tablet {
      right: 0;
      width: 200px;
    }

    @include widescreen {
      top: 25%;
      bottom: unset;
      width: unset;
    }
  }
  .key-features {
    .box {
      box-shadow: none;
      transition: all 0.18s ease-in-out;
      background-color: transparent;

      &.is-active {
        background-color: $warning-light;
        color: $primary;
      }
    }
    figure {
      max-height: 424px;
    }
  }

  .usage-card {
    .box {
      height: 457px;
      transition: all 0.18s ease-in-out;
      box-shadow: none;
      &:hover {
        box-shadow: $shadow;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='3' stroke-dasharray='8%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      }
    }
    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 61.8%;
      height: auto;
    }

    &:first-child {
      img {
        bottom: -14px;
        right: -2px;
      }
    }
    &:nth-child(2) {
      img {
        bottom: -14px;
        right: -2px;
      }
    }
    &:nth-child(3) {
      img {
        bottom: -14px;
        right: -2px;
      }
    }
    &:last-child {
      img {
        bottom: -14px;
        right: -2px;
      }
    }
  }

  .icon-text {
    span.icon {
      margin-top: 4px;

      + span {
        line-height: 1.5;
      }
    }
  }
  .cta-img {
    img {
      box-shadow: $shadow;
    }
    &--01 {
      position: absolute;
      width: 75%;
      left: 0;

      @include mobile {
        position: relative;
        top: 0;
      }

      @include tablet {
        transform: translateY(-50%);
        top: 50%;
      }
      @include tablet-only {
        left: 24px;
      }
      @include widescreen-only {
        width: 95%;
      }
    }
    &--02 {
      position: absolute;

      @include mobile {
        width: 46%;
        bottom: 0;
        right: 24px;
      }
      @include tablet-only {
        right: 0;
        transform: translateY(-50%);
        top: 50%;
        width: 60%;
      }
      @include desktop {
        right: 0;
        bottom: -24px;
        width: 60%;
      }
      @include widescreen {
        width: 80%;
        bottom: -70%;
      }
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
