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

<nav class="navbar is-fixed-top has-shadow has-centered-menu" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo-case.svg" width="117" alt="CASE logo" />
      </a>

      <a
        role="button"
        class="navbar-burger is-hidden-desktop"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/" class:is-active={path === '/'}> Accueil </a>
        <a class="navbar-item" href="/faq" class:is-active={path === '/faq'}> FAQ </a>

        <div class="navbar-item has-dropdown is-hoverable is-mega">
          <span class="navbar-link" class:is-active={path.includes('/usages/')}>
            Votre besoin
          </span>

          <div class="navbar-dropdown">
            <div class="container">
              <div class="columns is-multiline columns--fullwidth">
                <div class="column is-12-touch is-4-desktop has-separator">
                  <p class="title is-3 has-line is-hidden-touch">Votre besoin</p>
                  <p>En quoi est-ce CASE peut améliorer votre organisation et vos performances ?</p>
                </div>
                <div class="column is-12-touch is-8-desktop">
                  <div class="columns is-multiline">
                    {#each usages as usage}
                      <div class="column is-12-touch is-6-desktop navbar-column p-0">
                        <a
                          class="navbar-item is-flex is-flex-direction-column is-align-items-flex-start is-justify-content-flex-start"
                          href="/usages/{usage.slug}"
                          class:is-active={path === '/usages/' + usage.slug}
                        >
                          <span class="p-2 has-background-danger is-inline-flex">
                            <i class="ci ci-settings_future is-size-4 has-text-warning" />
                          </span>
                          <span class="py-1"> {usage.name}</span>
                          <p class="has-text-grey">{usage.shortDescription}</p>
                        </a>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end ">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-warning" href="/contact"> Essayez CASE </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
  @import './../styles/variables.scss';
  @import './bulma/sass/utilities/all';

  .navbar-brand {
    @include touch {
      width: 100%;
      justify-content: space-between;
    }
  }
  .navbar-item.is-mega {
    @include desktop {
      position: static;
    }

    .navbar-dropdown {
      left: 0;
      top: 0;
      width: 100%;
      border: 0;
      font-size: inherit;

      @include desktop {
        position: fixed;
        padding-top: 7.2rem;
        padding-bottom: 7.2rem;
        top: $navbar-height;
      }
      @include touch {
        position: relative;
        padding-top: 2.4rem;
        padding-bottom: 2.4rem;
        background-color: $white-bis;
      }

      .navbar-column {
        &:hover {
          background-color: $white-bis;
          color: $warning;
        }
        > .navbar-item {
          padding: $column-gap;
        }
      }
    }
  }
  .has-separator {
    @include touch {
      padding-bottom: 0;
      > p {
        font-size: $size-3-touch;
      }
    }
    @include desktop {
      position: relative;
      padding-right: #{$gap};
      &:before {
        position: absolute;
        display: inline-block;
        content: '';
        right: #{$column-gap};
        top: #{$column-gap};
        width: 1px;
        height: calc(100% - #{$gap});
        background-color: $grey-light;
      }
    }
  }

  .navbar-menu .navbar-item {
    @include touch {
      border-bottom: 1px solid $border;

      .navbar-item:not(.has-dropdown) {
        padding: 1.6rem 0;
      }
    }

    p {
      @include touch {
        font-size: $size-3-touch;
      }
    }

    &:not(.has-dropdown),
    .navbar-link {
      @include touch {
        padding: 2.4rem;
      }
    }

    .navbar-dropdown & {
      border-bottom: 0;
    }
  }

  .navbar-link {
    @include touch {
      padding: 0;
    }
  }
  .navbar-start > .navbar-item {
    @include desktop {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

  .navbar-end .button {
    @include touch {
      font-size: $size-3-touch;
    }
    @include mobile {
      width: 100%;
    }
  }
  .navbar.is-fixed-top .navbar-menu {
    @include touch {
      min-height: calc(100vh - #{$navbar-height});
    }
  }
  .navbar {
    @include touch {
      font-size: $size-1-touch;
    }
  }
</style>
