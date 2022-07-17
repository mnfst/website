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

  let extendedTableLine: number

  function toggleExtendedTableLine(lineNumber: number): void {
    if (extendedTableLine === lineNumber) {
      extendedTableLine = null
    } else {
      extendedTableLine = lineNumber
    }
  }
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
<section class="hero is-dark is-large is-relative has-gradient">
  <div class="hero-body">
    <div class="container">
      <div class="columns  is-vcentered ">
        <div
          class="column
        is-12-mobile 
        is-10-tablet 
        is-6-desktop"
        >
          <h1 class="title is-1">Pilotez votre PME sur une seule et même plateforme</h1>
          <p class="is-size-5">
            CASE est la seule application dont vous aurez besoin pour gérer votre activité
          </p>
          <div class="is-flex is-align-items-center is-flex-wrap-wrap mt-4 mb-5">
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap mb-4  mr-4"
            >
              <span class="icon mr-2">
                <i class="fas fa-layer-group has-text-warning" />
              </span>
              <span>Gérez la production, la planification et les ventes</span>
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
              <span>Prenez de meilleures décisions grâce à la data-visualisation</span>
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
      <h2 class="title is-2 has-line mt-8">CASE est l'application métier des PME</h2>
      <p>
        CASE est une application métier créée pour aider les PME dans leurs activités au quotidien.
        Comme votre entreprise ne fonctionne pas comme celle de votre voisin, CASE s'adapte à vos
        processus et à vos challenges.
      </p>
      <p>Quels sont vos challenges qui peuvent être optimisés par CASE ?</p>
    </div>
  </div>
</div>

<!-- Usage list -->
<div class="container pb-8">
  <div class="columns is-multiline">
    {#each usages as usage}
      <div class="column is-12-mobile is-6-tablet is-3-widescreen usage-card">
        <a
          href="/usages/{usage.slug}"
          class="box is-relative content has-background-white-bis px-4 is-flex is-flex-direction-column is-justify-content-space-between is-clipped is-align-items-flex-start"
        >
          <img src="img/usages/{usage.image}" alt={usage.name} />

          <div>
            <h3 class="title is-5 mb-3">{usage.name}</h3>
            <p class="has-text-grey-dark">{usage.description}</p>
            <div class="tags are-small">
              {#each usage.keywords as keyword}
                <span class="tag is-white"
                  ><span
                    class:has-text-link-dark={usage.name === 'Opérationnel'}
                    class:has-text-danger={usage.name === 'Planification'}
                    class:has-text-success-dark={usage.name === 'Devis et factures'}
                    class:has-text-primary={usage.name === 'Reporting et analytique'}
                    >{keyword}</span
                  ></span
                >
              {/each}
            </div>
          </div>
          <a href="/usages/{usage.slug}" class="icon-text has-text-primary">
            <span> En savoir plus </span>
            <span class="icon ml-1">
              <i class="ci ci-long_up_right" />
            </span>
          </a>
        </a>
      </div>
    {/each}
  </div>
</div>

<!-- Key features -->
<section class="hero is-dark  is-relative pb-8">
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1 has-text-centered">
        <div class="content">
          <h2 class="title is-2 has-line mt-8">On travaille mieux quand on a les bons outils</h2>
          <p class="has-text-white-bis">
            CASE inclut une multitude de fonctionnalités prêtes à fonctionner pour optimiser vos
            processus.
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
      <div class="card has-background-warning-light p-8 card--cta  has-case-pattern">
        <div class="columns">
          <div class="column is-6">
            <h3 class="title is-3 has-text-dark">Essayez CASE en 2 clics</h3>
            <p class="has-text-grey-dark mb-4">
              Prenez en main CASE tout de suite grâce à la démo en ligne.
            </p>

            <button class="button is-warning has-shadow">Essayez CASE</button>
          </div>
          <div class="column is-6">
            <div
              class="advantage-list is-flex is-flex-direction-column is-justify-content-space-between is-fullheight"
            >
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
              >
                <span class="icon mr-2">
                  <i class="fas fa-layer-group" />
                </span>
                <span>Sans création de compte</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
              >
                <span class="  icon mr-2">
                  <i class="fas fa-rocket" />
                </span>
                <span>Aucune information à donner</span>
              </span>
              <span
                class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap "
              >
                <span class="  icon mr-2">
                  <i class="fas fa-shield-alt" />
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
  <section class="hero is-white">
    <div class="hero-body py-4">
      <div class="container content mt-6">
        <div class="columns is-multiline">
          <div class="column is-4 ">
            <span class="p-2 has-background-primary-light is-inline-flex">
              <i class="ci ci-settings_future is-size-4 has-text-primary" />
            </span>
            <h3 class="title is-3 mt-4">On le configure pour vous</h3>
            <p>Vous êtes expert dans votre activité, pas dans la configuration d'outils.</p>
            <p>
              Pour cela, vous indiquez simplement votre besoin, nous proposons la solution
              technique.
            </p>
          </div>
          <div class="column is-4">
            <span class="p-2 has-background-primary-light is-inline-flex">
              <i class="ci ci-devices is-size-4 has-text-primary" />
            </span>
            <h3 class="title is-3 mt-4">Toujours accessible depuis n'importe quel navigateur</h3>
            <ul>
              <li>Votre application métier CASE est accessible depuis votre navigateur web.</li>

              <li>
                Les données sont sécurisées en ligne (UE), avec copies de sauvegarde quotidiennes
              </li>

              <li>Mode hors-ligne et app mobile pour usage dans toutes les conditions</li>
            </ul>
          </div>
          <div class="column is-4">
            <span class="p-2 has-background-primary-light is-inline-flex">
              <i class="ci ci-Sketch is-size-4 has-text-primary" />
            </span>
            <h3 class="title is-3 mt-4">Commencez tout de suite, sans engagement</h3>
            <p>
              Votre entreprise, vos données, vos choix. Nous aussi, nous pensons que les données
              appartiennent à ceux et celles qui les créent
            </p>
            <ul>
              <li>Export des donnés simplifié</li>
              <li>Forfait annuel sans engagement</li>
              <li>
                Si vous quittez le navire, faites le avec vos données,le code et la propriété
                intellectuelle
              </li>
            </ul>
          </div>
        </div>
        <hr class="mt-6 mb-0" />
      </div>
    </div>
  </section>
</div>
<!-- Competitors -->
<div class="container mt-6 mb-8">
  <div class="columns">
    <div class="column is-12 has-text-centered">
      <h2 class="title is-2 has-line">
        Comment se positionne CASE par rapport aux solutions alternatives ?
      </h2>
      <p>Un comparatif de CASE avec d'autres solutions digitales disponibles sur le marché.</p>
    </div>
  </div>
</div>
<div class="container is-overflow">
  <div class="competitors">
    <div class="columns is-mobile has-text-weight-bold	is-uppercase is-size-6">
      <div class="column is-4-mobile is-3-tablet is-4-desktop" />
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">CASE</div>
      <div class="column is-2 has-text-centered">Excel</div>
      <div
        class="column is-2 has-text-centered has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
        data-tooltip="Logiciel de niche créé uniquement pour un secteur d'activité. Généralement des logiciels fermés et destinés à un usage restreint"
      >
        Progiciel niche
      </div>
      <div
        class="column is-2 has-text-centered has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
        data-tooltip="Des logiciels tout-en-un développés par de gros éditeurs. Conviennent au très grosses organisations (avec beaucoup de configuration) mais peu adapté pour une PME."
      >
        Logiciel ERP
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>
    <!-- First line -->
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(1)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 1}
              class:ci-chevron_big_down={extendedTableLine === 1}
            />
          </span>
          <div class="pl-2">
            <span>Données sécurisées</span>
            {#if extendedTableLine === 1}
              <p class=" has-text-grey mt-2">
                Avec CASE vous choisissez vos utilisateurs et leur niveau d'accès. Si jamais une
                erreur survient, nous pouvons rétablir les données précédentes grâce aux copies de
                sauvegarde effectuées quotidiennement.
              </p>
            {/if}
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
        <span
          class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
          data-tooltip="Souvent opaque et au bon vouloir de l'éditeur du logiciel."
        >
          <i class="ci ci-warning has-text-warning" />
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
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(2)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 2}
              class:ci-chevron_big_down={extendedTableLine === 2}
            />
          </span>
          <div class="pl-2">
            <span>Propriétaire de vos données</span>
            {#if extendedTableLine === 2}
              <p class=" has-text-grey mt-2">
                Avec CASE vous êtes et resterez toujours le propriétaire de vos données et du
                code-source de votre application.
              </p>
            {/if}
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
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(3)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 3}
              class:ci-chevron_big_down={extendedTableLine === 3}
            />
          </span>
          <div class="pl-2">
            <span>Adapté à votre activité</span>
            {#if extendedTableLine === 3}
              <p class=" has-text-grey mt-2">
                Chaque installation CASE est unique car configurée pour votre besoin uniqument.
                C'est CASE s'adapte à votre activité et non l'inverse.
              </p>
            {/if}
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
        <span
          class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
          data-tooltip="Adapté à votre secteur d'activité mais pas à votre façon de faire"
        >
          <i class="ci ci-warning has-text-warning" />
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
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(4)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 4}
              class:ci-chevron_big_down={extendedTableLine === 4}
            />
          </span>
          <div class="pl-2">
            <span>Evolutif</span>
            {#if extendedTableLine === 4}
              <p class=" has-text-grey mt-2">
                Une application en bonne santé est une application qui évolue dans le temps.
                Nouvelles fonctionnalités, nouveaux usages, nouvelle ergonomie… CASE avance dans la
                même direction que votre entreprise.
              </p>
            {/if}
          </div>
        </span>
      </div>
      <div class="column is-2-mobile is-3-tablet is-2-desktop has-text-centered">
        <span class="icon">
          <i class="ci ci-check_big has-text-success" />
        </span>
      </div>
      <div class="column is-2 has-text-centered">
        <span
          class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
          data-tooltip="Avec quelques compétences en tableur, vous pouvez adapter vos tableaux à votre activité… Mais attention à ne pas tout détruire !"
        >
          <i class="ci ci-warning has-text-warning" />
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

    <!-- 5th line -->
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(5)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 5}
              class:ci-chevron_big_down={extendedTableLine === 5}
            />
          </span>
          <div class="pl-2">
            <span>Intégrations</span>
            {#if extendedTableLine === 5}
              <p class=" has-text-grey mt-2">
                CASE est ouvert et se connecte à tous vos appareils qui le permettent. Aucune
                restriction logicielle ou légale ne peut l'empêcher.
              </p>
            {/if}
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
        <span
          class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-text-left"
          data-tooltip="Dans la limite de ce que l'éditeur vous autorise à intégrer"
        >
          <i class="ci ci-warning has-text-warning" />
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr class="my-0" />
      </div>
    </div>

    <!-- 6th line -->
    <div class="columns is-mobile" on:click={() => toggleExtendedTableLine(6)}>
      <div class="column is-4-mobile is-3-tablet is-4-desktop is-expandable">
        <span class="is-flex is-align-items-flex-start is-justify-content-flex-start pointer">
          <span class="icon">
            <i
              class="ci"
              class:ci-chevron_big_right={extendedTableLine !== 6}
              class:ci-chevron_big_down={extendedTableLine === 6}
            />
          </span>
          <div class="pl-2">
            <span>Open source</span>
            {#if extendedTableLine === 6}
              <p class=" has-text-grey mt-2">
                CASE est un logiciel Open Source qui se configure et s'adapte à votre besoin. Le
                code-source est donc ouvert et peut être personnalisé ou modifié par des
                développeurs tiers.
              </p>
            {/if}
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
        <p class="mb-1">Vous souhaitez implémenter CASE pour votre entreprise ?</p>
        <a href="/contact" class="button is-small is-fullwidth is-warning">Contactez-nous</a>
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
            du conseil. Ses différentes briques s'ajoutent de façon a créer une application à votre
            taille et faite pour votre activité. Notre équipe vous aide à mettre en place l'app dont
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

            <button class="button is-warning ">Essayez CASE gratuitement</button>
            <span
              class="icon-text is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-wrap-nowrap"
            />
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
  @import './@creativebulma/bulma-tooltip/src/sass/index';

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
      height: 417px;
      transition: all 0.18s ease-in-out;
      box-shadow: none;
      &:hover {
        box-shadow: $shadow;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='3' stroke-dasharray='8%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      }
    }
    img {
      position: absolute;
      mix-blend-mode: multiply;
      bottom: 0;
      right: 0;
      width: 61.8%;
      height: auto;
    }

    &:first-child {
      img {
        bottom: -14px;
        right: -14px;
      }
    }
    &:nth-child(2) {
      img {
        bottom: -23px;
        right: -23px;
        width: 69%;
      }
    }
    &:nth-child(3) {
      img {
        bottom: -10px;
        right: -2px;
      }
    }
    &:last-child {
      img {
        bottom: -14px;
        right: 3px;
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
    .card {
      background-image: url(./img/pattern-info.svg);
      background-repeat: repeat;
      background-color: $info;
    }
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
