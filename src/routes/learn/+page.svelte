<script>
	import search from '$lib/images/search.svg';
	import down_arrow from '$lib/images/down_arrow.svg';
	import arrow_up_right from '$lib/images/arrow-up-right.svg';
	import reload from '$lib/images/reload.svg';
	import sample_resource from '$lib/images/sample_resource.png';
	import add from '$lib/images/add.svg';
</script>

<section class="flex flex-col items-center pt-24 pb-24 gap-16 w-full max-w-screen-xl mx-auto">
	<div class="text-center">
		<h1 class="text-4xl font-medium leading-tight mt-4">Resources</h1>
		<h4 class="mt-6 text-lg font-normal leading-relaxed text-gray-300 px-2">The latest industry news, interviews, technologies, and resources.</h4>
	</div>
	<div class="flex flex-col px-4 gap-8 w-full md:flex-row md:justify-between">
		<div class="flex flex-row gap-4 items-center border border-white/30 rounded-2xl shadow-lg p-3 w-full md:w-1/2">
			<img class="w-6 h-6" src={search} alt="Welcome" />
			<h3 class="text-gray-200">Search</h3>
		</div>
		<div class="flex flex-row gap-4 items-center">
			<div class="flex flex-row justify-between items-center border border-white/30 rounded-xl p-3 w-36 md:w-48">
				<h3 class="text-sm md:text-md text-gray-200">Select Category</h3>
				<img class="w-4 h-4" src={down_arrow} alt="Down arrow" />
			</div>
			<div class="flex items-center gap-2 border border-white/30 rounded-xl p-3 bg-gradient-to-r from-gray-700 to-gray-900">
				<img class="w-6 h-6" src={add} alt="Load" />
				<button class="text-white text-sm sm:text-md">Submit your project</button>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each Array(6) as _, i}
			<div class="flex flex-col border border-white/30 rounded-xl overflow-hidden">
				<img class="w-full h-56 object-cover" src={sample_resource} alt="Sample Resource" />
				<div class="flex flex-col w-full p-6 gap-2 bg-black/30 backdrop-blur-sm">
					<h2 class="text-xl font-medium">UX review presentation</h2>
					<h3 class="text-gray-200">How do you create compelling presentations that wow your colleagues a...</h3>
					<div class="flex flex-row justify-between items-center">
						<button class="flex flex-row gap-1 items-center text-blue-400">
							<h6 class="text-white hover:text-blue-500 text-sm md:text-lg">View</h6>
							<img src={arrow_up_right} alt="View" class="sm:w-5 sm:h-5" />
						</button>
						<div class="flex flex-row gap-2">
							<div class="radial-gradient-bottom border border-white/30 rounded-lg px-2 py-1 w-20 sm:w-full">
								<div class="text-xs xl:text-lg text-center">REACT NATIVE</div>
							</div>
							<div class="radial-gradient-bottom border border-white/30 rounded-lg px-2 py-1 w-20">
								<div class="text-sm xl:text-lg text-center mt-1 sm:mt-0">KOTLIN</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex items-center gap-2 border border-white/30 rounded-xl p-3 bg-gradient-to-r from-gray-700 to-gray-900 mt-8">
		<img class="w-5 h-5" src={reload} alt="Load" />
		<button class="text-white">Load More</button>
	</div>
</section>
