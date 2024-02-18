<script>
	import search from '$lib/images/search.svg';
	import down_arrow from '$lib/images/down_arrow.svg';
	import add from '$lib/images/add.svg';
	import sample_logo from '$lib/images/sample_logo.png';
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/project');
	}
</script>

<section class="flex flex-col items-center pt-24 pb-24 w-full max-w-6xl mx-auto gap-16">
	<div class="text-center">
		<h1 class="text-4xl mt-4">Projects</h1>
		<h4 class="mt-6 text-md md:text-lg px-4">
			Powerful for developers. Powering tools and integrations from companies all around the world
		</h4>
	</div>
	<div class="flex flex-col px-4 md:px-8 gap-8 w-full">
		<div class="flex flex-col md:flex-row gap-6 justify-between">
			<div class="flex flex-row gap-4 items-center border border-white/30 rounded-xl shadow-lg p-3 bg-[#020a23] w-full md:w-1/2">
				<img class="w-6 h-6" src={search} alt="Welcome" />
				<h3 class="text-white">Search</h3>
			</div>
			<div class="flex flex-row gap-6">
				<div class="flex flex-row justify-between items-center border border-white/30 rounded-xl p-3 bg-[#020a23] sm:w-full md:w-48">
					<h3 class="text-white text-sm md:text-base">Select Category</h3>
					<img class="w-4 h-4" src={down_arrow} alt="Down arrow" />
				</div>
				<div class="flex items-center gap-2 border border-white/30 rounded-xl p-3 bg-[#020a23] cursor-pointer">
					<img class="w-6 h-6" src={add} alt="Load" />
					<button class="text-white text-sm">Submit your project</button>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each Array(6) as _, i}
				<div class="flex flex-col lg:flex-row gap-4 border border-gray-400/40 rounded-lg p-4 bg-[#020a23] cursor-pointer" aria-hidden="true" aria-label="View more about this project" on:click={handleClick}>
					<div class="w-24 h-24 p-4 bg-gradient-to-b from-blue-200/10 to-transparent border border-gray-400/40 rounded-md flex justify-center items-center">
						<img class="w-16 h-16" src={sample_logo} alt="Project Logo" />
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="text-lg md:text-xl text-white">Mirror World Smart SDK</h2>
						<h3 class="text-sm text-gray-300">A Web3 infrastructure project aiming to help developers...</h3>
						<div class="flex flex-row gap-2">
							<div class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-1">
								<h5 class="text-xs sm:text-sm text-white">TOOLING</h5>
							</div>
							<div class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-1">
								<h5 class="text-xs sm:text-sm text-white">SAGANIZE</h5>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
