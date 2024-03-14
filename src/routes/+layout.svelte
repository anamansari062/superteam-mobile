<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
	import home_bg from '$lib/images/home_bg.png';
	import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Superteam Mobile"
  description="find resources, ideas, and projects related to mobile-based Solana development."
  canonical="https://mobile.superteam.fun"
  keywords="solana, mobile, saga, superteam"
  openGraph={{
    title: "Superteam Mobile",
    description:
      "find resources, ideas, and projects related to mobile-based Solana development.",
    image: "https://drive.google.com/file/d/1OfsGBlC85d-0DRd1YVSRGj7A3Uq7zd5R/view?usp=sharing",
    url: "https://mobile.superteam.fun",
    type: "website",
    images: [
      {
        url: "https://drive.google.com/file/d/1OfsGBlC85d-0DRd1YVSRGj7A3Uq7zd5R/view?usp=sharing",
        width: 2800,
        height: 1900,
        alt: "Preview",
      }
    ],
    site_name: "Home",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@superteam-mobile",
    title: "Superteam Mobile",
    description:
      "find resources, ideas, and projects related to mobile-based Solana development.",
    image: "https://drive.google.com/file/d/1OfsGBlC85d-0DRd1YVSRGj7A3Uq7zd5R/view?usp=sharing",
  }}
/>

<div class="app">
	<div>
        <img class="absolute top-0 right-0 h-[1175px] top-0 left-0 pointer-events-none -z-10 lg:w-full opacity-60" src={home_bg} alt="Star bg " />
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
