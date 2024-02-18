<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		/*min-height: 100vh;*/
	}

  @media screen and (min-width: 2560px) {
      .app {
          padding: 200px 200px;
      }
  }

	main {
		/*flex: 1;*/
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
