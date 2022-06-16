<script lang="ts">
  import { usageContents } from '../content/usages.content'
  import type { Usage } from '../interfaces/usage.interface'

  let usages: Usage[] = usageContents
</script>

<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <p><strong>CASE</strong></p>
        <p>
          CASE est une plateforme de gestion d'activité personnalisable pour gérer la production, la
          gestion et la commercialisation de produits et de services. Elle gère votre activité de
          bout en bout.
        </p>
      </div>
      <div class="column is-3">
        <p><strong>Usages</strong></p>
        <ul>
          {#each usages as usage}
            <li>
              <a href="/usages/{usage.slug}">{usage.name}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="column is-3">
        <p><strong>Communauté</strong></p>
        <ul>
          <li>
            <a href="https://github.com/case-app" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://case-app.github.io/docs/#/" target="_blank">Documentation</a>
          </li>
        </ul>
      </div>
      <div class="column is-3">
        <p><strong>Société</strong></p>
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
