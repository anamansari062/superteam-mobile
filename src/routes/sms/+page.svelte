<script lang="ts">
	import search from '$lib/images/search.svg';
	import add from '$lib/images/add.svg';
	import arrow_up_right from '$lib/images/arrow-up-right.svg';

	export let data;

	let searchTerm = '';
	let filteredResources = data.items;

	let selectedTag = '';

	$: filteredResources = data.items.filter(
		(resource) =>
			resource.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedTag === '' || resource.tags.includes(selectedTag))
	);

	function getUniqueTags(data) {
		let uniqueTags = [];
		data.items.forEach((resource) => {
			resource.tags.forEach((tag) => {
				if (!uniqueTags.includes(tag)) {
					uniqueTags.push(tag);
				}
			});
		});
		return uniqueTags;
	}
</script>

<section class="flex flex-col w-full max-w-6xl gap-16 pt-24 pb-24 mx-auto xl:pb-64">
	<div class="text-center">
		<h1 class="mt-4 text-4xl font-semibold">SDKs</h1>
		<h4 class="px-4 mt-6 text-md md:text-lg">
			Get inspired by a showcase of groundbreaking projects developed by our vibrant community.
		</h4>
	</div>
	<div class="flex flex-col w-full gap-8 px-4 lg:flex-row md:justify-between">
		<div
			class="flex flex-row items-center w-full gap-4 p-3 border shadow-lg border-white/30 rounded-2xl md:w-1/2"
		>
			<img alt="Welcome" class="w-6 h-6" src={search} />
			<input
				bind:value={searchTerm}
				class="w-full text-gray-200 placeholder-gray-200 bg-transparent focus:outline-none"
				placeholder="Search"
				type="text"
			/>
		</div>
		<div class="flex flex-col items-start justify-start gap-4 lg:flex-row lg:items-center">
			<div class="flex items-center gap-2 p-3 border border-white/30 rounded-xl explore-saga-btn">
				<img alt="Load" class="w-6 h-6" src={add} />
				<a href="https://github.com/anamansari062/superteam-mobile/blob/main/README.md">
					<button class="text-sm text-white sm:text-md">Submit your project</button>
				</a>
			</div>
		</div>
	</div>
	<div class="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-8">
		{#each filteredResources as choice}
			<div
				class="flex flex-col lg:flex-row gap-4 border border-gray-400/40 rounded-lg p-4 bg-[rgb(2,10,35)] cursor-pointer"
				aria-hidden="true"
				aria-label="View more about this project"
			>
				<div
					class="flex items-center justify-center w-24 h-24 p-4 overflow-hidden border rounded-md bg-gradient-to-b from-blue-200/10 to-transparent border-gray-400/40"
				>
					<img class="rounded-full" src={choice.logo} alt="Project Logo" />
				</div>
				<div class="flex flex-col gap-2">
					{choice.name}
					<div class="description-container">
						<h3 class="overflow-hidden text-sm lg:text-base text-gray-200 sm:w-80 md:w-72 xl:w-96">
							{choice.tagline}
						</h3>
					</div>
					{#if choice.tags && choice.tags.length > 0}
						<div class="flex flex-row gap-2">
							{#each choice.tags as tag, i}
								<div
									class="px-3 py-1 border rounded-md radial-gradient-bottom border-white/30"
									style={`--gradient-color:${i % 2 === 1 ? 'rgba(110,63,243,0.4)' : 'rgba(242,174,64,0.4)'}`}
								>
									<h5 class="text-xs text-white">{tag}</h5>
								</div>
							{/each}
							<a href={choice.view}
								 class="flex flex-row gap-1 items-center text-blue-400 px-3">
								<div class="text-white hover:text-blue-500 text-sm xl:text-md">View</div>
								<img src={arrow_up_right} alt="View" class="sm:w-4 sm:h-4" />
							</a>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
