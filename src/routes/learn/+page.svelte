<script>
	// import { onMount } from 'svelte';
	import search from '$lib/images/search.svg';
	import down_arrow from '$lib/images/down_arrow.svg';
	import arrow_up_right from '$lib/images/arrow-up-right.svg';
	// import reload from '$lib/images/reload.svg';
	import sample_resource from '$lib/images/sample_resource.png';
	import add from '$lib/images/add.svg';
	import data from './data.json';

	let searchTerm = '';
	let filteredResources = data;

	let selectedTag = '';

	$: filteredResources = data.filter(resource =>
		resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
		(selectedTag === '' || resource.tags.includes(selectedTag))
	);

	function getUniqueTags(data) {
		let uniqueTags = [];
		data.forEach(resource => {
			resource.tags.forEach(tag => {
				if (!uniqueTags.includes(tag)) {
					uniqueTags.push(tag);
				}
			});
		});
		return uniqueTags;
	}
</script>

<section class="flex flex-col items-center pt-24 pb-24 gap-16 w-full max-w-screen-xl mx-auto">
	<div class="text-center">
		<h1 class="text-4xl font-medium leading-tight mt-4">Resources</h1>
		<h4 class="mt-6 text-lg font-normal leading-relaxed text-gray-300 px-2">The latest industry news, interviews,
			technologies, and resources.</h4>
	</div>
	<div class="flex flex-col px-4 gap-8 w-full md:flex-row md:justify-between">
		<div class="flex flex-row gap-4 items-center border border-white/30 rounded-2xl shadow-lg p-3 w-full md:w-1/2">
			<img class="w-6 h-6" src={search} alt="Welcome" />
			<input
				bind:value={searchTerm}
				type="text"
				placeholder="Search"
				class="bg-transparent w-full text-gray-200 placeholder-gray-200 focus:outline-none"
			/>
		</div>
		<div class="flex flex-col justify-start items-start  lg:flex-row gap-4 lg:items-center">
			<select bind:value={selectedTag} class="hover:accent-[#010a23] border border-slate-200/30 rounded-xl p-3 bg-[#010a23] text-white">
				<option value="">Select Category </option>
				{#each getUniqueTags(data) as tag}
					<option style="background-color: #010a23;" value={tag}>{tag.toLowerCase()}</option>
				{/each}
			</select>
<!--			<div-->
<!--				class="flex items-center gap-2 border border-white/30 rounded-xl p-3 bg-gradient-to-r from-gray-700 to-gray-900">-->
<!--				<img class="w-6 h-6" src={add} alt="Load" />-->
<!--				<button class="text-white text-sm sm:text-md">Submit your project</button>-->
<!--			</div>-->
		</div>
	</div>
	<div class="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each filteredResources as { title, description, viewLink, tags }, i}
			<div class="flex flex-col border border-white/30 rounded-xl overflow-hidden">
				<img class="w-full h-56 object-cover" src={sample_resource} alt="Sample Resource" />
				<div class="flex flex-col w-full p-6 gap-2 bg-black/30 backdrop-blur-sm">
					<h2 class="text-xl font-medium">{title}</h2>
					<h3 class="text-gray-200">{description}</h3>
					<div class="flex lg:flex-row flex-col gap-4 mt-4 justify-between items-start">
						<button class="flex flex-row gap-1 items-center text-blue-400">
							<h6 class="text-white hover:text-blue-500 text-sm xl:text-lg">View</h6>
							<img src={arrow_up_right} alt="View" class="sm:w-5 sm:h-5" />
						</button>
						<div class="flex flex-row gap-2 text-center">
							{#each tags as tag}
								<div
									class="radial-gradient-bottom flex-grow border text-center flex items-center justify-center border-white/30 rounded-lg px-3 py-2 w-fit">
									<div class="text-xs font-medium">{tag}</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>