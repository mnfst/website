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
        is-10-mobile 
        is-10-tablet 
        is-6-desktop "
        >
          <h1 class="title is-1">Et si votre activité avait son app personnalisée ?</h1>
          <p class="is-size-5">
            Gérez toute l'activité de votre PME sur la même plateforme avec CASE
          </p>
          <div class="is-flex is-align-items-center is-flex-wrap-wrap mt-4 mb-6">
            <span
              class="icon-text is-flex is-align-items-center is-justify-content-flex-start mr-4"
            >
              <span class="  icon mr-2">
                <i class="fas fa-layer-group has-text-warning" />
              </span>
              <span>Centralisez production, commercial et RH</span>
            </span>
            <span
              class="icon-text is-flex is-align-items-center is-justify-content-flex-start mr-4"
            >
              <span class="  icon mr-2">
                <i class="fas fa-rocket has-text-warning" />
              </span>
              <span>Automatisez les tâches répétitives</span>
            </span>
            <span class="icon-text is-flex is-align-items-center is-justify-content-flex-start">
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

<div class="container">
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">CASE est l’application métier des PME</h2>
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
<div class="container">
  <div class="columns is-multiline is-mobile">
    {#each usages as usage}
      <a href="/usages/{usage.slug}" class="column is-6 notification is-info">
        <a href="/usages/{usage.slug}">{usage.name}</a>
        <p>{usage.description}</p>
        <img src="/usages/{usage.image}" alt={usage.name} style="height:100px" />
      </a>
    {/each}
  </div>
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
        <ul>
          {#each keyFeatures as keyFeature}
            <li
              on:mouseover={() => (activeKeyFeature = keyFeature)}
              on:focus={() => (activeKeyFeature = keyFeature)}
              class:is-active={activeKeyFeature === keyFeature}
            >
              <strong>{keyFeature.name}</strong>
              <p>{keyFeature.description}</p>
            </li>
          {/each}
        </ul>
      </div>
      <div class="column">
        <div class="box">
          <img src={activeKeyFeature.image} alt={activeKeyFeature.name} />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">Comment ça marche ?</h2>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <p>
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
      <p>
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
</style>
