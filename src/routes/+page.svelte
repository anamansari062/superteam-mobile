<script>
	import arrow from '$lib/images/arrow.svg';
	import line from '$lib/images/line.svg';
	import left_lights from '$lib/images/left_lights.png';
	import right_lights from '$lib/images/right_lights.png';
	import Features from './Features.svelte';
	import News from './News.svelte';
	import MobileGrant from './MobileGrant.svelte';

	function scrollToGetStarted() {
		const getStartedSection = document.getElementById('get_started');
		if (getStartedSection) {
			getStartedSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Superteam Mobile</title>
	<meta content="Superteam Mobile" name="description" />
</svelte:head>

<div class="px-6 sm:px-12 md:px-24">
	<img alt="Left Spotlight" class="absolute top-0 left-0 z-10 pointer-events-none hidden sm:flex" src={left_lights} />
	<img alt="Right Spotlight" class="absolute top-0 right-0 z-10 pointer-events-none hidden sm:flex"
			 src={right_lights} />

	<section class="flex flex-col items-center pt-24 pb-24 ">
		<div class="flex items-center justify-center gap-2 border border-transparent test rounded-full py-1 px-4">
			<h5 class="text-xs md:text-sm text-[#FFFFFFB2]">Get exciting opportunities to earn</h5>
			<img alt="Line" class="hidden sm:block" src={line} />
			<a class="text-xs md:text-sm font-bold" href="https://earn.superteam.fun/">Explore Earn</a>
			<a href="https://earn.superteam.fun/"><img alt="Go" class="w-4 h-4" src={arrow} /></a>
		</div>
		<h1 class="mt-4 text-3xl lg:text-6xl font-medium text-center">All things Mobile</h1>
		<h4 class="mt-6 text-sm lg:text-xl text-center">find resources, ideas, and projects related to mobile-based Solana
			development.</h4>
		<div class="mt-12">
			<button class="btn w-36 h-12 px-5 py-3 border border-[#ffffff33] rounded-xl bg-[radial-gradient(ellipse_at_top,#ffffff33_0%,#ffffff00_70%)] text-white"
							on:click={scrollToGetStarted}>
				Get Started
			</button>
		</div>
	</section>

	<Features />
	<News />
	<MobileGrant />
</div>

<style>
    .btn {
        cursor: pointer;
    }

    .test {
        background: linear-gradient(90deg, rgba(51, 51, 51, 0.5) 0.09%, rgba(51, 51, 51, 0) 39.05%, rgba(51, 51, 51, 0.25) 99.93%);
    }
</style>
