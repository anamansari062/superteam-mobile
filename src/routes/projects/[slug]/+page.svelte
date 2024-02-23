<script>
	import line_vertical from '$lib/images/line_features.png';

	import sample_logo_1 from '$lib/images/sample_logo_1.png';
	import arrow_left from '$lib/images/arrow-left.svg';
	import external_link from '$lib/images/external-link.svg';
	// import { goto } from '$app/navigation';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
	// function handleClick() {
	//
	// 	goto('/projects');
	// }
	export let data;
</script>

<section class="text-white px-8 md:p-16 md:px-36 rounded-lg xl:pb-32 min-h-screen">
	<div class="flex flex-row">
		<div class="max-w-7xl mx-auto">
			<a class="flex items-center mb-4 cursor-pointer" href={'/projects'}>
				<img alt="Back" class="w-6 h-6 mr-2" src={arrow_left} />
				<h6 class="text-md md:text-lg font-normal">Back</h6>
			</a>

			<div class="flex flex-col lg:flex-row items-start gap-8">
				<img
					alt="Project Logo"
					class="w-24 h-24 lg:w-28 lg:h-28 rounded-lg bg-gradient-to-b from-blue-400/10 to-transparent p-3 border border-slate-600" src={sample_logo_1} />

				<div class="">
					<h2 class="text-3xl font-bold mb-2">{data.name}</h2>
					<p class="text-gray-400 mb-4">
						{data.sub_title}
					</p>

					<div class="flex flex-wrap gap-2 md:mb-4">
						<div class="flex flex-row gap-2">
							{#each data.tags as tag, i}
								<div class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-1"
										 style={`--gradient-color:${i % 2 === 1 ? "rgba(110,63,243,0.4)" : 'rgba(242,174,64,0.4)'}`}>
									<h5 class="text-xs text-white">{tag}</h5>
								</div>
							{/each}
						</div>
					</div>
					<div class="flex flex-row gap-4 justify-start items-end mt-4 lg:hidden">
						<a href={data.socials.x} rel="noopener noreferrer" target="_blank">
							<img alt="X" class="h-6 cursor-pointer" src={x_logo} />
						</a>
						<a href={data.socials.discord} rel="noopener noreferrer" target="_blank">
							<img alt="Discord" class="h-6" src={discord_logo} />
						</a>
						<a href={data.socials.github} rel="noopener noreferrer" target="_blank">
							<img alt="Github" class="h-6" src={github_logo} />
						</a>
					</div>
				</div>
				<a href={data.view} rel="noopener noreferrer" target="_blank">
					<button
						class="xl:ml-36 lg:mr-24 flex items-center gap-2  rounded-xl px-4 py-2 radial-gradient-blue border border-blue-50/20 transition duration-300">
						View
						<img alt="View" class="w-4 h-4 xl:mx-2 md:mr-5" src={external_link} />
					</button>
				</a>
			</div>
			<div class="mt-16">
				<h2 class="text-2xl font-bold mb-2">About {data.name}</h2>
				<p class="text-gray-400 md:pr-24 lg:text-justify">
					{data.post_description}
				</p>
			</div>
		</div>
		<div class="flex flex-grow items-start flex-row">
			<img alt="Line" class="hidden xl:block mx-6" src={line_vertical} />
			<div class="mt-8 hidden lg:block">
				<h2 class="text-xl ml-2">Links</h2>
				<div class="flex flex-row -mt-5 gap-4 justify-center items-end ml-2">
					<!--				<div class="flex flex-row gap-4 mx-24 justify-center items-end mt-4 ">-->
					<a href={data.socials.x} rel="noopener noreferrer" target="_blank">
						<img alt="X" class="h-20 cursor-pointer" src={x_logo} />
					</a>
					<a href={data.socials.discord} rel="noopener noreferrer" target="_blank">
						<img alt="Discord" class="h-20 cursor-pointer" src={discord_logo} />
					</a>
					<a href={data.socials.github} rel="noopener noreferrer" target="_blank">
						<img alt="Github" class="h-20 cursor-pointer" src={github_logo} />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
