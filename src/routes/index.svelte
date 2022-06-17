<script lang="ts">
  import { keyFeatureContents } from '../content/key-features.content'

  import { usageContents } from '../content/usages.content'
  import type { KeyFeature } from '../interfaces/key-feature.interface'
  import type { Usage } from '../interfaces/usage.interface'

  import { MetaTags } from 'svelte-meta-tags'

  let usages: Usage[] = usageContents
  let keyFeatures: KeyFeature[] = keyFeatureContents.filter((keyFeature: KeyFeature) =>
    keyFeature.usages.includes('home')
  )

  let activeKeyFeature: KeyFeature = keyFeatures[0]

  const metaTitle: string = `CASE, L'Application Métier des PME`
  const metaDescription: string = `Gérez toute l'activité de votre entreprise sur la même plateforme.`
</script>

<!-- TODO: add OG and TW cards images and alt texts-->
<MetaTags
  title={metaTitle}
  description={metaDescription}
  openGraph={{
    url: 'https://case.app',
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      }
    ],
    site_name: 'SiteName'
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    image: 'https://www.example.ie/twitter-image.jpg',
    imageAlt: 'Twitter image alt'
  }}
/>

<!-- Hero -->
<section class="hero is-primary is-large is-relative has-gradient">
  <div class="hero-body">
    <div class="container">
      <div class="columns  is-vcentered reverse-columns">
        <div
          class="column
        is-12-mobile 
        is-10-tablet 
        is-6-desktop"
        >
          <h1 class="title is-1">Et si votre activité avait son app personnalisée ?</h1>
          <p class="is-size-5">
            Gérez toute l'activité de votre PME sur la même plateforme avec CASE
          </p>
          <div class="is-flex is-align-items-center is-flex-wrap-wrap mt-4 mb-5">
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
            >
              <span class="icon mr-2">
                <i class="fas fa-layer-group has-text-warning" />
              </span>
              <span>Centralisez production, commercial et RH</span>
            </span>
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
            >
              <span class="  icon mr-2">
                <i class="fas fa-rocket has-text-warning" />
              </span>
              <span>Automatisez les tâches répétitives</span>
            </span>
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4 "
            >
              <span class="  icon mr-2">
                <i class="fas fa-shield-alt has-text-warning" />
              </span>
              <span>Prenez de meilleures décisions</span>
            </span>
          </div>

          <button class="button is-warning">Essayez CASE</button>
        </div>
      </div>
    </div>
  </div>

  <img
    class="hero-figure-wrapper"
    src="/img/case-hero-list.png"
    alt="Capture d'écran de l'application metier CASE"
  />
</section>
<!-- Hero -->

<div class="container content">
  <div class="columns">
    <div class="column is-10">
      <h2 class="title is-2 has-line mt-8">CASE est l’application métier des PME</h2>
      <p>
        CASE est l’outil qui centralise l’activité des petites et moyennes organisations. Immaginez
        une application à votre nom qui rassemble les documents, informations et communications
        néécessaires à la producitvité.
      </p>
      <p>Et vous, quels sont vos principaux challenges ?</p>
    </div>
  </div>
</div>

<!-- Usage list -->
<div class="container pb-8">
  <div class="columns is-multiline">
    {#each usages as usage}
      <div class="column usage-card">
        <a
          href="/usages/{usage.slug}"
          class="box is-relative content has-background-white-bis px-4 is-flex is-flex-direction-column is-justify-content-space-between is-clipped is-align-items-flex-start"
        >
          <img src="img/usages/{usage.image}" alt={usage.name} />

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

<!-- Key features -->
<section class="hero is-primary  is-relative pb-8">
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1 has-text-centered">
        <div class="content">
          <h2 class="title is-2 has-line mt-8">On travaille mieux quand on a les bons outils</h2>
          <p class="has-text-white-bis">
            CASE vous est livré avec un paquet de fonctionnalités prêtes à être employées pour votre
            cause.
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4">
        <div class="is-flex is-flex-direction-column key-features">
          {#each keyFeatures as keyFeature}
            <div
              class="box px-4 pointer mb-0"
              on:mouseover={() => (activeKeyFeature = keyFeature)}
              on:focus={() => (activeKeyFeature = keyFeature)}
              class:is-active={activeKeyFeature === keyFeature}
            >
              <strong>{keyFeature.name}</strong>
              <p>{keyFeature.description}</p>
            </div>
          {/each}
        </div>
      </div>
      <div class="column is-8">
        <div
          class="is-flex is-align-items-center is-justify-content-center key-features is-fullheight is-fullwidth"
        >
          <figure class=" has-object-fit-contain has-object-position-center-center">
            <img src="img/key-features/{activeKeyFeature.image}" alt={activeKeyFeature.name} />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="hero has-gradient-bis is-relative ">
  <div class="hero-body">
    <div class="container">
      <div class="card has-background-info p-8 card--cta is-shadowless">
        <div class="columns">
          <div class="column is-6">
            <h3 class="title is-3 has-text-dark">Essayez CASE en 2 clics</h3>
            <p class="has-text-grey-dark mb-4">
              Prenez en main CASE tout de suite grâce à la démo en ligne.
            </p>

            <button class="button is-warning">Essayez CASE</button>
          </div>
          <div class="column is-6">
            <div
              class="advantage-list is-flex is-flex-direction-column is-justify-content-space-between is-fullheight"
            >
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
              >
                <span class="icon mr-2">
                  <i class="fas fa-layer-group has-text-warning" />
                </span>
                <span>Sans création de compte</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container">
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">Comment ça marche ?</h2>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <p class="has-text-grey-dark">
        CASE est une application métier créée pour aider les PME dans leurs activités au quotidien.
        Comme votre entreprise ne fonctionne pas comme celle de votre voisin, CASE s’adapte à vous
        en se configurant avec vos processus et vos équipements.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <h3 class="title is-3">Ne changez pas votre façon de faire, boostez-la.</h3>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <p class="has-text-grey-dark">
        Plûtot que de vous imposer une façon de faire, CASE fait le choix de la flexibilité et du
        conseil. Ses différentes briques s’ajoutent de façon a créer une application à votre taille
        et faite pour votre activité. Notre équipe vous aide à mettre en place l’app dont vous avez
        besoin.
      </p>
    </div>
  </div>
</div>

<hr />

<style lang="scss">
  @import './../styles/variables.scss';
  @import './bulma/sass/utilities/all';

  .hero-figure-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 90%;
    width: auto;

    @include touch {
      opacity: 0.5;
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
  .key-features {
    .box {
      box-shadow: none;
      transition: all 0.18s ease-in-out;
      background-color: transparent;
      color: $white;

      &.is-active {
        box-shadow: $box-shadow;
        background-color: $info;
        color: $primary;
      }
    }
    figure {
      max-height: 695px;
    }
  }
</style>
