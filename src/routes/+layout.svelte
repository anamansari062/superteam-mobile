<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
	import home_bg from '$lib/images/home_bg.png';
</script>

<div class="app">
	<div>
		<img alt="Star bg "
				 class="absolute top-0 right-0 h-[1175px] top-0 left-0 pointer-events-none -z-10 lg:w-full opacity-60" src={home_bg} />
	</div>

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
