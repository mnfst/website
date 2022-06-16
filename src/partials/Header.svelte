<script lang="ts">
  import { usageContents } from '../content/usages.content'
  import type { Usage } from '../interfaces/usage.interface'

  import { page } from '$app/stores'

  let usages: Usage[] = usageContents
  let path: string

  function getPath(currentPath: string) {
    path = currentPath
  }

  $: getPath($page.url.pathname)
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="CASE logo" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/" class:is-active={path === '/'}> Home </a>
      <a class="navbar-item" href="/faq" class:is-active={path === '/faq'}> FAQ </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link" class:is-active={path.includes('/usages/')}> Usages </span>

        <div class="navbar-dropdown">
          {#each usages as usage}
            <a
              class="navbar-item"
              href="/usages/{usage.slug}"
              class:is-active={path === '/usages/' + usage.slug}>{usage.name}</a
            >
          {/each}
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/contact">
            <strong>Contactez-nous</strong>
          </a>
          <a class="button is-light" href="/demo"> Essayez CASE </a>
        </div>
      </div>
    </div>
  </div>
</nav>
