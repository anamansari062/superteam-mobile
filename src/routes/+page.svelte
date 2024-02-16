<script>
	import arrow from '$lib/images/arrow.svg';
	import line from '$lib/images/line.svg';
	import Features from './Features.svelte';
	import News from './News.svelte';
	import MobileGrant from './MobileGrant.svelte';
</script>

<svelte:head>
	<title>Superteam Mobile</title>
	<meta name="description" content="Superteam Mobile" />
</svelte:head>

<div class="px-24">
	<img
		class="absolute top-0 left-0 z-10"
		src=" /src/lib/images/left_lights.png "
		alt="Left Spotlight"
	/>
	<img
		class="absolute top-0 right-0 z-10"
		src="/src/lib/images/right_lights.png "
		alt="Right Spotlight"
	/>

	<section>
		<div class="badge">
			<h5 class="ms-2 sm:ms-3 md:ms-4 text-xs md:text-sm text-[#FFFFFFB2]">
				Get exciting opportunities to earn
			</h5>
			<img src={line} alt="Line" />
			<h5 class="text-xs md:text-sm">
				<b>Explore Earn</b>
			</h5>
			<img class="me-4" src={arrow} alt="Go" />
		</div>
		<h1 class="mt-4 text-3xl lg:text-6xl">All things Mobile</h1>
		<h4 class="mt-6 text-sm lg:text-xl">
			find resources, ideas and projects related to mobile based solana development.
		</h4>
		<div class="button-main mt-12">
			<button> Get Started </button>
		</div>
	</section>

	<Features />
	<News />
	<MobileGrant />
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding-top: 6rem;
		padding-bottom: 6rem;
	}

	div {
		align-self: center;
	}

	h1 {
		font-size: 60px;
		font-weight: 500;
		line-height: 72px;
		letter-spacing: -0.02em;
		text-align: center;
	}

	h4 {
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: 0em;
		text-align: center;
	}

	h5 {
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
	}

	.button-main {
		display: flex;
		flex-direction: row;
		width: 140px;
		height: 48px;
		padding: 12px, 20px, 12px, 20px;
		border-radius: 8px;
		border: 1px solid #ffffff33;
		gap: 8px;
		color: #ffffff;
		text-align: center;
		justify-content: center;
		background-image: radial-gradient(ellipse at top, #ffffff33 0%, #ffffff00 70%);
		background-size: 100% 70%;
		background-repeat: no-repeat;
	}

	.badge {
		border: 1px solid;
		border-color: #ffffff1a;
		background-image: linear-gradient(
			289.83deg,
			rgba(51, 51, 51, 0.5) -0.09%,
			rgba(51, 51, 51, 0) 39.05%,
			rgba(51, 51, 51, 0.25) 99.93%
		);
		display: flex;
		flex-direction: flex-row;
		border-radius: 200px;
		padding-top: 1px;
		padding-bottom: 1px;
		gap: 5px;
		width: fit-content;
		align-self: center;
	}
</style>
