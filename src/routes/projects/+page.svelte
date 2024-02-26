<script lang="ts">
	import search from '$lib/images/search.svg';
	import add from '$lib/images/add.svg';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	// import { goto } from '$app/navigation';
	import sample_logo from '$lib/images/sample_logo.png';

	export let data;

	let expandedStates: Record<string, boolean> = {};

	function toggleDescription(slug: string) {
		expandedStates[slug] = !expandedStates[slug];
	}

	let searchTerm = '';
	let filteredResources = data.items;

	let selectedTag = '';

	$: filteredResources = data.items.filter(resource =>
		resource.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
		(selectedTag === '' || resource.tags.includes(selectedTag))
	);

	function getUniqueTags(data) {
		let uniqueTags = [];
		data.items.forEach(resource => {
			resource.tags.forEach(tag => {
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
		<h1 class="mt-4 text-4xl font-semibold">Projects</h1>
		<h4 class="px-4 mt-6 text-md md:text-lg">
			Get inspired by a showcase of groundbreaking projects developed by our vibrant community.		</h4>
	</div>
	<div class="flex flex-col w-full gap-8 px-4 lg:flex-row md:justify-between">
		<div class="flex flex-row items-center w-full gap-4 p-3 border shadow-lg border-white/30 rounded-2xl md:w-1/2">
			<img class="w-6 h-6" src={search} alt="Welcome" />
			<input
				bind:value={searchTerm}
				type="text"
				placeholder="Search"
				class="w-full text-gray-200 placeholder-gray-200 bg-transparent focus:outline-none"
			/>
		</div>
		<div class="flex flex-col items-start justify-start gap-4 lg:flex-row lg:items-center">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="px-3 py-2 text-black explore-saga-btn rounded-xl">
					{selectedTag || 'Select Category'}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="bg-[#010a23] text-white shadow-lg rounded mt-2">
					<DropdownMenu.Group>
						{#each getUniqueTags(data) as tag}
							<DropdownMenu.Item on:click={() => selectedTag = tag}>
								<span class="block px-4 py-2">{tag}</span>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<div
				class="flex items-center gap-2 p-3 border border-white/30 rounded-xl explore-saga-btn">
				<img class="w-6 h-6" src={add} alt="Load" />
				<button class="text-sm text-white sm:text-md ">Submit your project</button>
			</div>
		</div>
	</div>
	<div class="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-8">
		{#each filteredResources as choice}
			<div
				class="flex flex-col lg:flex-row gap-4 border border-gray-400/40 rounded-lg p-4 bg-[rgb(2,10,35)] cursor-pointer"
				aria-hidden="true" aria-label="View more about this project">
				<div
					class="flex items-center justify-center w-24 h-24 p-4 overflow-hidden border rounded-md bg-gradient-to-b from-blue-200/10 to-transparent border-gray-400/40"	>
					<img class="w-auto h-16" src={sample_logo} alt="Project Logo" />
				</div>
				<div class="flex flex-col gap-2">
					<a href={`/projects/${choice.slug}`} class="text-lg text-white md:text-xl">{choice.name}</a>
<!--					<h3 class="text-sm text-gray-300">{choice.description}</h3>-->
					<div class="description-container">
						<h3 class="overflow-hidden text-base text-gray-200 sm:w-80 md:w-72 xl:w-96" style="max-height: {!expandedStates[choice.slug] ? '24' : '9999'}px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: {!expandedStates[choice.slug] ? '2' : 'unset'}; -webkit-box-orient: vertical;">
							{choice.tagline}
						</h3>
						{#if !expandedStates[choice.slug]}
							<button on:click={() => toggleDescription(choice.slug)} class="mt-2 text-sm text-blue-400 hover:underline">Show More</button>
						{:else}
							<button on:click={() => toggleDescription(choice.slug)} class="mt-2 text-sm text-blue-400 hover:underline">Show Less</button>
						{/if}
					</div>
					<div class="flex flex-row gap-2">
						{#each choice.tags as tag, i}
							<div class="px-3 py-1 border rounded-md radial-gradient-bottom border-white/30"
									 style={`--gradient-color:${i % 2 === 1 ? "rgba(110,63,243,0.4)" : 'rgba(242,174,64,0.4)'}`}>
								<h5 class="text-xs text-white">{tag}</h5>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
