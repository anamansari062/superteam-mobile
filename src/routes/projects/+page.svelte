<script>
	import search from '$lib/images/search.svg';
	import add from '$lib/images/add.svg';
	import { goto } from '$app/navigation';
	import data from './data.json';
	import sample_logo from '$lib/images/sample_logo.png';

	function handleClick() {
		goto('/project');
	}

	let searchTerm = '';
	let filteredResources = data;

	let selectedTag = '';

	$: filteredResources = data.filter(resource =>
		resource.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
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

<section class="flex flex-col items-center pt-24 pb-24 w-full max-w-6xl mx-auto gap-16">
	<div class="text-center">
		<h1 class="text-4xl mt-4">Projects</h1>
		<h4 class="mt-6 text-md md:text-lg px-4">
			Powerful for developers. Powering tools and integrations from companies all around the world
		</h4>
	</div>
	<div class="flex flex-col px-4 gap-8 w-full lg:flex-row md:justify-between">
		<div class="flex flex-row gap-4 items-center border border-white/30 rounded-2xl shadow-lg p-3 w-full md:w-1/2">
			<img class="w-6 h-6" src={search} alt="Welcome" />
			<input
				bind:value={searchTerm}
				type="text"
				placeholder="Search"
				class="bg-transparent w-full text-gray-200 placeholder-gray-200 focus:outline-none"
			/>
		</div>
		<div class="flex flex-col justify-start items-start lg:flex-row gap-4 lg:items-center">
			<select bind:value={selectedTag} class="border border-slate-200/30 rounded-xl p-3 bg-[#010a23] text-white">
				<option value="">Select Category</option>
				{#each getUniqueTags(data) as tag}
					<option style="background-color: #010a23; color: #fff;" value={tag}>{tag.toLowerCase()}</option>
				{/each}
			</select>
			<div
				class="flex items-center gap-2 border border-white/30 rounded-xl p-3 bg-gradient-to-r from-gray-700 to-gray-900">
				<img class="w-6 h-6" src={add} alt="Load" />
				<button class="text-white text-sm sm:text-md ">Submit your project</button>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-2 w-full">
		{#each filteredResources as { name, description, tags}}
			<div class="flex flex-col lg:flex-row gap-4 border border-gray-400/40 rounded-lg p-4 bg-[rgb(2,10,35)] cursor-pointer" aria-hidden="true" aria-label="View more about this project" on:click={handleClick}>
				<div class="w-24 h-24 p-4 bg-gradient-to-b from-blue-200/10 to-transparent border border-gray-400/40 rounded-md flex justify-center items-center">
					<img class="w-16 h-16" src={sample_logo} alt="Project Logo" />
				</div>
				<div class="flex flex-col gap-2">
					<h2 class="text-lg md:text-xl text-white">{name}</h2>
					<h3 class="text-sm text-gray-300">{description}</h3>
					<div class="flex flex-row gap-2">
						{#each tags as tag,i}
							<div class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-1" style={`--gradient-color:${i%2===1?"rgba(110,63,243,0.4)":'rgba(242,174,64,0.4)'}`}>
								<h5 class="text-xs text-white">{tag}</h5>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
