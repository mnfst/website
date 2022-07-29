<script lang="ts">
  import type { Usage } from '../interfaces/usage.interface'

  export let usage: Usage
</script>

<div class="column is-12-mobile is-6-tablet is-3-widescreen usage-card">
  <a
    href="/usages/{usage.slug}"
    class="box is-relative content has-background-white-bis px-4 is-flex is-flex-direction-column is-justify-content-space-between is-clipped is-align-items-flex-start"
  >
    <img src="/img/usages/{usage.image}" alt={usage.name} />

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
              class:has-text-primary={usage.name === 'Reporting et analytique'}>{keyword}</span
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

<style lang="scss">
  @import './../styles/variables.scss';

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
</style>
