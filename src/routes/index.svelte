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
      <div class="columns  is-vcentered ">
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
  <div class="hero-body py-0">
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

<!-- Why choose CASE ? -->
<div class="advantages">
  <div class="container my-8">
    <div class="columns">
      <div class="column is-8">
        <h2 class="title is-2 has-line">Comment ça marche ?</h2>
        <p class="has-text-grey-dark">
          CASE est une application métier créée pour aider les PME dans leurs activités au
          quotidien. Comme votre entreprise ne fonctionne pas comme celle de votre voisin, CASE
          s’adapte à vous en se configurant avec vos processus et vos équipements.
        </p>
      </div>
    </div>
  </div>

  <section class="hero is-white">
    <div class="hero-body py-4">
      <div class="container content">
        <div class="columns  is-vcentered ">
          <div class="column is-6 ">
            <span class="p-2 has-background-orange-light is-inline-flex">
              <i class="ci ci-settings_future is-size-4 has-text-link" />
            </span>
            <h3 class="title is-3 mt-4">On le configure pour vous</h3>
            <p>Vous êtes expert dans votre activité, pas dans la configuration d’outils.</p>
            <p>
              Pour cela, vous indiquez simplement votre besoin, nous proposons la solution
              technique.
            </p>
          </div>
          <div class="column is-6 py-0 pl-0">
            <figure class="image is-square mx-0">
              <img src="./img/case-features-01.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero is-rose">
    <div class="hero-body py-4">
      <div class="container content">
        <div class="columns  is-vcentered is-flex-direction-row-reverse">
          <div class="column is-6  py-6">
            <span class="p-2 has-background-info is-inline-flex">
              <i class="ci ci-devices is-size-4 has-text-primary" />
            </span>
            <h3 class="title is-3 mt-4">Toujours accessible depuis n’importe quel navigateur</h3>
            <ul>
              <li>Votre application métier CASE est accessible depuis votre navigateur web.</li>

              <li>
                Les données sont sécurisées en ligne (UE), avec copies de sauvegarde quotidiennes
              </li>

              <li>Mode hors-ligne et app mobile pour</li>
            </ul>
          </div>
          <div class="column is-6 py-0 pr-0">
            <figure class="image is-square mx-0">
              <img src="./img/case-features-02.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero is-white">
    <div class="hero-body py-4">
      <div class="container content">
        <div class="columns  is-vcentered ">
          <div class="column is-6  py-6">
            <span class="p-2 has-background-danger-light is-inline-flex">
              <i class="ci ci-Sketch is-size-4 has-text-success" />
            </span>
            <h3 class="title is-3 mt-4">Commencez tout de suite, sans engagement</h3>
            <p>
              Votre entreprise, vos données, vos choix. Nous aussi, nous pensons que les données
              appartiennent à ceux et celles qui les créent
            </p>
            <ul>
              <li>
                Si vous quittez le navire, faites le avec vos données,le code et la propriété
                intellectuelle
              </li>
              <li>Récupérez votre CASE à tout moment pour l’héberger et le modifier</li>
              <li>Forfait annuel sans engagement</li>
            </ul>
          </div>
          <div class="column is-6 py-0 pl-0">
            <figure class="image is-square mx-0">
              <img src="./img/case-features-03.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<!-- Competitors -->
<div class="container my-8">
  <div class="columns">
    <div class="column is-12 has-text-centered">
      <h2 class="title is-2 has-line">Et vous, qu’utilisez-vous ?</h2>
    </div>
  </div>
</div>
<div class="container is-overflow">
  <div class="competitors">
    <div class="columns is-mobile has-text-weight-bold	is-uppercase is-size-6">
      <div class="column is-4-mobile is-3-tablet is-4-desktop" />
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">CASE</div>
      <div class="column is-2 has-text-centered">Excel</div>
      <div class="column is-2 has-text-centered">ProChantier</div>
      <div class="column is-2 has-text-centered">Sage</div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- First line -->
    <div class="columns is-mobile">
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i class="ci ci-chevron_big_right" />
          </span>
          <div class="pl-2">
            <span>Données sécurisés</span>
            <!-- Sub content here -->
          </div>
        </span>
      </div>
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- Second line -->
    <div class="columns is-mobile">
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i class="ci ci-chevron_big_down" />
          </span>
          <div class="pl-2">
            <span>Notifications</span>
            <p class=" has-text-grey mt-2">
              Avec CASE, vous choisissez les niveaux d’accès de chaque utilisateur, et si le pire
              arrive quand même, nous pouvons rétablir les données précédentes grâce aux copies de
              sauvegarde effectuées quotidiennement.
            </p>
          </div>
        </span>
      </div>
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- Third line -->
    <div class="columns is-mobile">
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i class="ci ci-chevron_big_right" />
          </span>
          <div class="pl-2">
            <span>Ergonomie intéligente</span>
            <!-- Sub content here -->
          </div>
        </span>
      </div>
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- Fourth line -->
    <div class="columns is-mobile">
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i class="ci ci-chevron_big_right" />
          </span>
          <div class="pl-2">
            <span>Propriétaire de vos données</span>
            <!-- Sub content here -->
          </div>
        </span>
      </div>
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span class="icon">
          <i class="ci ci-close_big has-text-danger" />
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- CTA line -->
    <div class="columns is-mobile">
      <div class="column is-4-mobile is-3-tablet is-4-desktop" />
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered is-size-7">
        <p class="mb-1">Vous souhaitez implémenter CASE au sein de votre entreprise ?</p>
        <a href="" class="button is-small is-fullwidth is-success">Contactez-nous</a>
      </div>
    </div>
  </div>
</div>
<!-- Clients -->
<div class="container-fluid has-background-white-bis py-9 mb-8 mt-9">
  <div class="container mt-8">
    <div class="mx-4 clients">
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-12-mobile is-8-tablet is-9-desktop is-6-widescreen is-3-fullhd pl-0 pt-0 "
        >
          <h3 class="title is-3 has-line">Ne changez pas votre façon de faire, boostez-la.</h3>
          <p class="has-text-grey-dark">
            Plûtot que de vous imposer une façon de faire, CASE fait le choix de la flexibilité et
            du conseil. Ses différentes briques s’ajoutent de façon a créer une application à votre
            taille et faite pour votre activité. Notre équipe vous aide à mettre en place l’app dont
            vous avez besoin.
          </p>
        </div>
        <div
          class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo is-offset-3-widescreen is-offset-0-fullhd"
        >
          <figure class="image is-square">
            <figure>
              <img src="./img/clients/wp-mail.svg" alt="" />
            </figure>
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/eu-flag.svg" alt="" />
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/neorhea.svg" alt="" />
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/neorhea.svg" alt="" />
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/eu-flag.svg" alt="" />
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/wp-mail.svg" alt="" />
          </figure>
        </div>
        <div class="column is-6-mobile is-4-tablet is-3-desktop p-0 has-client-logo">
          <figure class="image is-square">
            <img src="./img/clients/neorhea.svg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- CTA bottom -->
<section class="hero  is-relative  hero--cta-bottom">
  <div class="hero-body py-0">
    <div class="container">
      <div class="card has-background-info p-8 card--cta is-shadowless">
        <div class="columns">
          <div class="column is-6">
            <h3 class="title is-3 has-text-dark">Démo en ligne sur demande</h3>
            <p class="has-text-grey-dark mb-4">
              Integer legentibus erat a ante historiarum dapibus. Cum ceteris in veneratione tui
              montes, nascetur mus. Phasellus laoreet lorem vel dolor tempus vehicula.
            </p>

            <button class="button is-danger mb-4">Essayez CASE gratuitement</button>
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
            >
              <span class="icon mr-2">
                <i class="fas fa-layer-group has-text-danger" />
              </span>
              <span>Sans création de compte</span>
            </span>
          </div>
          <div class="column is-6 is-relative">
            <figure class=" cta-img cta-img--01">
              <img src="./img/case-sidemenu-example.png" />
            </figure>
            <figure
              class=" cta-img cta-img--02 is-flex is-justify-content-flex-end is-align-items-flex-end"
            >
              <img src="./img/case-login-example.png" />
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
        background-color: rgba($warning-light, 0.15);
      }
    }
    figure {
      max-height: 695px;
    }
  }
  .advantages {
    .column {
    }
    .is-flex-direction-row-reverse {
      .column:first-child {
        @include tablet {
          padding-left: #{$gap * 2};
        }
      }
    }
    .columns:not(.is-flex-direction-row-reverse) {
      .column:first-child {
        @include tablet {
          padding-right: #{$gap * 2};
        }
      }
    }
  }
  .competitors {
    @include mobile {
      min-width: 200%;
    }

    .is-expandable .icon {
      position: relative;
      top: 3px;
    }

    &:before {
      display: inline-block;
      position: absolute;
      content: '';
      top: 0;

      height: 100%;
      box-shadow: $shadow;

      @include mobile {
        left: calc(66.6666667% - 6px);
        width: calc(33.33333% + 6px);
      }
      @include tablet {
        left: calc(25% - 6px);
        width: calc(25% + 6px);
      }
      @include desktop {
        left: calc(33.33333% - 6px);
        width: calc(16.66666674% + 6px);
      }
    }
  }
  .is-overflow {
    @include mobile {
      overflow-x: auto;
      overflow-y: clip;
    }
  }
  .has-client-logo {
    border-top: 1px solid $grey-light;
    border-left: 1px solid $grey-light;
    @include mobile {
      &:last-child,
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(7) {
        border-right: 1px solid $grey-light;
      }
      &:last-child,
      &:nth-child(7) {
        border-bottom: 1px solid $grey-light;
      }
    }
    @include tablet-only {
      &:last-child,
      &:nth-child(2),
      &:nth-child(5) {
        border-right: 1px solid $grey-light;
      }
      &:last-child,
      &:nth-child(6),
      &:nth-child(7) {
        border-bottom: 1px solid $grey-light;
      }
    }
    @include desktop-only {
      &:last-child,
      &:nth-child(2),
      &:nth-child(6) {
        border-right: 1px solid $grey-light;
      }
      &:last-child,
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        border-bottom: 1px solid $grey-light;
      }
    }
    @include widescreen-only {
      &:last-child,
      &:nth-child(2),
      &:nth-child(6) {
        border-right: 1px solid $grey-light;
      }
      &:last-child,
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        border-bottom: 1px solid $grey-light;
      }
    }
    @include fullhd {
      &:last-child,
      &:nth-child(4) {
        border-right: 1px solid $grey-light;
      }
      &:last-child,
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        border-bottom: 1px solid $grey-light;
      }
    }
  }
  .clients {
    figure {
      margin: auto;
      width: 50%;
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
