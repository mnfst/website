<script lang="ts">
  import '../styles/app.scss'

  import Footer from '../partials/Footer.svelte'
  import Header from '../partials/Header.svelte'
  import FlashMessage from '../partials/FlashMessage.svelte'
</script>

<Header />
<FlashMessage />

<slot />

<Footer />
