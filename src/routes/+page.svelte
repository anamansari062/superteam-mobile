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

<div class="px-6 sm:px-12 md:px-24">
	<img
		class="absolute top-0 left-0 z-10 pointer-events-none"
		src="/src/lib/images/left_lights.png"
		alt="Left Spotlight"
	/>
	<img
		class="absolute top-0 right-0 z-10 pointer-events-none"
		src="/src/lib/images/right_lights.png"
		alt="Right Spotlight"
	/>

	<section class="flex flex-col items-center pt-24 pb-24">
		<div class="flex items-center justify-center gap-2 border border-transparent bg-[linear-gradient(289.83deg,rgba(51,51,51,0.5)-0.09%,rgba(51,51,51,0)39.05%,rgba(51,51,51,0.25)99.93%)] rounded-full py-1 px-4">
			<h5 class="text-xs md:text-sm text-[#FFFFFFB2]">
				Get exciting opportunities to earn
			</h5>
			<img src={line} alt="Line" class="hidden sm:block" />
			<h5 class="text-xs md:text-sm font-bold">
				Explore Earn
			</h5>
			<img src={arrow} alt="Go" class="w-4 h-4" />
		</div>
		<h1 class="mt-4 text-3xl lg:text-6xl font-medium text-center">
			All things Mobile
		</h1>
		<h4 class="mt-6 text-sm lg:text-xl text-center">
			find resources, ideas and projects related to mobile based solana development.
		</h4>
		<div class="mt-12">
			<button class="w-36 h-12 px-5 py-3 border border-[#ffffff33] rounded-xl bg-[radial-gradient(ellipse_at_top,#ffffff33_0%,#ffffff00_70%)] text-white">
				Get Started
			</button>
		</div>
	</section>

	<Features />
	<News />
	<MobileGrant />
</div>
