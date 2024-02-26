<script lang="ts">
	import search from '$lib/images/search.svg';
	import arrow_up_right from '$lib/images/arrow-up-right.svg';
	import add from '$lib/images/add.svg';
	import data from './data.json';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { queryParam } from 'sveltekit-search-params';

	let expandedStates: Record<string, boolean> = {};

	function toggleDescription(cardTitle: string) {
		expandedStates[cardTitle] = !expandedStates[cardTitle];
	}

	let selectedTag = queryParam('tag');
	let searchTerm = queryParam('query');

	let inputElement: HTMLInputElement;

	$: console.log('search term', $searchTerm);

	let taggedResources = data;

	let filteredResources = data;

	$: filteredResources = taggedResources.filter((resource) => {
		if (!$searchTerm || $searchTerm === '') return resource;
		if (resource.title?.toLowerCase().includes($searchTerm.toLowerCase())) {
			return resource;
		}
	});


	$: taggedResources = data.filter((resource) => {
		if (!$selectedTag || $selectedTag === 'all') return resource;
		if (resource.tags?.some((t) => t.toLowerCase() === $selectedTag?.toLowerCase()))
			return resource;
	});

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function getUniqueTags() {
		let uniqueTags: string[] = [];
		data.forEach((resource) => {
			resource.tags.forEach((tag) => {
				if (!uniqueTags.includes(tag.toLowerCase())) {
					uniqueTags.push(tag.toLowerCase());
				}
			});
		});
		return uniqueTags;
	}

</script>

<section class="flex flex-col items-center pt-24 pb-24 gap-16 w-full max-w-screen-xl mx-auto">
	<div class="text-center">
		<h1 class="text-4xl font-medium leading-tight mt-4">Resources</h1>
		<h4 class="mt-6 text-lg font-normal leading-relaxed text-gray-300 px-2">
			Dive into our comprehensive collection of resources, tailored to support your development journey at every
			stage. </h4>
	</div>
	<div class="flex flex-col px-4 gap-8 w-full md:flex-row md:justify-between">
		<button
			class="flex flex-row gap-4 items-center border border-white/30 rounded-2xl shadow-lg p-3 w-full md:w-1/2"
			data-sveltekit-keepfocus
			on:click={() => inputElement.focus()}
		>
			<img alt="Welcome" class="w-6 h-6" src={search} />
			<input
				bind:this={inputElement}
				bind:value={$searchTerm}
				class="bg-transparent w-full text-gray-200 placeholder-gray-200 focus:outline-none"
				id="search"
				placeholder="Search"
				type="text"
			/>
		</button>
		<div class="flex flex-col justify-start items-start lg:flex-row gap-4 lg:items-center">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="explore-saga-btn text-black px-3 py-2 rounded-xl">
					{#if !$selectedTag || $selectedTag === 'all'}
						Select Category
					{:else}
						{$selectedTag}
					{/if}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="bg-[#010a23] text-white shadow-lg rounded mt-2">
					<DropdownMenu.Group>
						<DropdownMenu.Item on:click={() => ($selectedTag = 'all')}>
							<span class="block px-4 py-2">All</span>
						</DropdownMenu.Item>
						{#each getUniqueTags() as tag}
							<DropdownMenu.Item on:click={() => ($selectedTag = tag)}>
								<span
									class="block px-4
									py-2">{capitalizeFirstLetter(tag)}</span
								>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<div class="flex items-center gap-2 border border-white/30 rounded-xl p-3 explore-saga-btn">
				<img alt="Load" class="w-6 h-6" src={add} />
				<button class="text-white text-sm sm:text-md">Submit a Resource</button>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each filteredResources as { title, description, tags, image }}
			<div
				class="flex flex-col border border-white/30 rounded-xl overflow-hidden backdrop-blur-lg bg-gradient-to-b from-gray-400/10 to-transparent/20">
				<img class="w-full h-56 object-fit" src={image} alt={title} />
				<div class="flex flex-col w-full p-6 gap-2">
					<h2 class="text-xl font-medium">{title}</h2>
					<div class="description-container">
						<h3 class="text-gray-200"
								style="max-height: {!expandedStates[title] ? '3' : '9999'}em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: {!expandedStates[title] ? '2' : 'unset'}; -webkit-box-orient: vertical;">
							{description}
						</h3>
						{#if !expandedStates[title]}
							<button on:click={() => toggleDescription(title)} class="text-blue-400 hover:underline text-sm mt-2">Show
								More
							</button>
						{:else}
							<button on:click={() => toggleDescription(title)} class="text-blue-400 hover:underline text-sm mt-2">Show
								Less
							</button>
						{/if}
					</div>
					<div class="flex lg:flex-row flex-col gap-4 mt-4 justify-between items-start">
						<button class="flex flex-row gap-1 items-center text-blue-400">
							<h6 class="text-white hover:text-blue-500 text-sm xl:text-md">View</h6>
							<img src={arrow_up_right} alt="View" class="sm:w-4 sm:h-4" />
						</button>
						<div class="flex gap-2 text-center flex-row flex-wrap">
							{#each tags as tag, i}
								<div
									class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-2"
									style={`--gradient-color:${i % 2 === 1 ? 'rgba(110,63,243,0.4)' : 'rgba(242,174,64,0.4)'}`}
								>
									<h5 class="text-xs text-white">{tag}</h5>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
