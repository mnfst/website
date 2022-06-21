<script lang="ts">
  import { usageContents } from '../content/usages.content'
  import type { Usage } from '../interfaces/usage.interface'

  let usages: Usage[] = usageContents
</script>

<footer class="footer">
  <div class="container content is-small">
    <div class="columns pb-5">
      <div class="column is-3-tablet is-4-widescreen">
        <a href="/">
          <img src="/img/logo-case-white.svg" width="117" alt="CASE logo" />
        </a>
        <p class="pt-4">
          CASE est une plateforme de gestion d'activité personnalisable pour gérer la production, la
          gestion et la commercialisation de produits et de services. Elle gère votre activité de
          bout en bout.
        </p>
      </div>
      <div class="column is-3-tablet is-2-widescreen is-offset-2-widescreen">
        <p class="title is-6 is-uppercase has-text-light mt-2 mb-4">Usages</p>

        {#each usages as usage}
          <p class="mb-1">
            <a class="has-text-light" href="/usages/{usage.slug}">{usage.name}</a>
          </p>
        {/each}
      </div>
      <div class="column is-3-tablet is-2-widescreen">
        <p class="title is-6 is-uppercase has-text-light mt-2 mb-4">Communauté</p>

        <p class="mb-1">
          <a class="has-text-light" href="https://github.com/case-app" target="_blank">Github</a>
        </p>
        <p class="mb-1">
          <a class="has-text-light" href="https://case-app.github.io/docs/#/" target="_blank"
            >Documentation</a
          >
        </p>
      </div>
      <div class="column is-3-tablet is-2-widescreen">
        <p class="title is-6 is-uppercase has-text-light mt-2 mb-4">Société</p>

        <p class="mb-1">
          <a class="has-text-light" href="/contact">Contact</a>
        </p>
      </div>
    </div>
    <hr />
    <div class="level py-4 is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p>© 2022 CASE</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p>Politique de confidentialité</p>
        </div>
        <div class="level-item">
          <p>CGV</p>
        </div>
      </div>
    </div>
  </div>
</footer>
