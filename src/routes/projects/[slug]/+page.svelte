<script>
	import line_vertical from '$lib/images/line_features.png';
	import arrow_left from '$lib/images/arrow-left.svg';
	import external_link from '$lib/images/external-link.svg';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
	import telegram_logo from '$lib/images/telegram_logo.svg';
	import instagram_logo from '$lib/images/instagram_logo.svg';
	import linkedin_logo from '$lib/images/linkedin_logo.svg';
	import youtube_logo from '$lib/images/youtube_logo.svg';
	import appstore_logo from '$lib/images/appstore_logo.svg';
	import playstore_logo from '$lib/images/playstore_logo.svg';

	export let data;
</script>

<section class="text-white px-8 md:p-16 mb-36 xl:mb-0 md:px-36 rounded-lg xl:pb-32">
	<div class="flex flex-row">
		<div class="max-w-screen-2xl">
			<a class="flex items-center mb-4 cursor-pointer" href={'/projects'}>
				<img alt="Back" class="w-6 h-6 mr-2" src={arrow_left} />
				<h6 class="text-md md:text-lg font-normal">Back</h6>
			</a>

			<div class="flex flex-col lg:flex-row items-start gap-8">
				<div
					class="w-24 h-24 lg:w-28 lg:h-auto flex items-center justify-center rounded-lg bg-gradient-to-b from-blue-400/10 to-transparent p-3 border border-slate-600">
					<img alt="logo" class="rounded-full m-2 w-full h-full" src={data.logo}>
				</div>


				<div>
					<h2 class="text-2xl xl:text-3xl xl:w-80 font-semibold mb-2">{data.name}</h2>
					<p class="text-gray-400 mb-4 overflow-hidden">
						{data.tagline}
					</p>

					<div class="flex flex-wrap gap-2">
						{#if data.tags && data.tags.length > 0}
							<div class="flex flex-row gap-2">
								{#each data.tags as tag, i}
									<div class="radial-gradient-bottom border border-white/30 rounded-md px-3 py-1"
											 style={`--gradient-color:${i % 2 === 1 ? "rgba(110,63,243,0.4)" : 'rgba(242,174,64,0.4)'}`}>
										<h5 class="text-xs text-white">{tag}</h5>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					<div class="flex flex-row flex-wrap gap-4 justify-start items-end mt-4 lg:hidden">
						{#if data.socials.x}
							<a href={data.socials.x} rel="noopener noreferrer" target="_blank">
								<img alt="X" class="h-6 cursor-pointer" src={x_logo} />
							</a>
						{/if}

						{#if data.socials.discord}
							<a href={data.socials.discord} rel="noopener noreferrer" target="_blank">
								<img alt="Discord" class="h-6" src={discord_logo} />
							</a>
						{/if}

						{#if data.socials.github}
							<a href={data.socials.github} rel="noopener noreferrer" target="_blank">
								<img alt="Github" class="h-6" src={github_logo} />
							</a>
						{/if}

						{#if data.socials.telegram}
							<a href={data.socials.telegram} rel="noopener noreferrer" target="_blank">
								<img alt="Telegram" class="h-6" src={telegram_logo} />
							</a>
						{/if}

						{#if data.socials.instagram}
							<a href={data.socials.instagram} rel="noopener noreferrer" target="_blank">
								<img alt="Instagram" class="h-6" src={instagram_logo} />
							</a>
						{/if}

						{#if data.socials.youtube}
							<a href={data.socials.youtube} rel="noopener noreferrer" target="_blank">
								<img alt="Youtube" class="h-6" src={youtube_logo} />
							</a>
						{/if}

						{#if data.socials.linkedin}
							<a href={data.socials.linkedin} rel="noopener noreferrer" target="_blank">
								<img alt="Linkedin" class="h-6" src={linkedin_logo} />
							</a>
						{/if}

						{#if data.socials.appstore}
							<a href={data.socials.appstore} rel="noopener noreferrer" target="_blank">
								<img alt="Appstore" class="h-6" src={appstore_logo} />
							</a>
						{/if}

						{#if data.socials.playstore}
							<a href={data.socials.playstore} rel="noopener noreferrer" target="_blank">
								<img alt="Playstore" class="h-6" src={playstore_logo} />
							</a>
						{/if}
					</div>
				</div>
				<a href={data.view} rel="noopener noreferrer" target="_blank">
					<button
						class="xl:ml-44 2xl:ml-96 -mt-2 lg:mt-0 lg:mr-16 flex items-center gap-2 rounded-xl px-4 py-2 radial-gradient-blue border border-blue-50/20 transition duration-300">
						View
						<img alt="View" class="w-4 h-4 xl:mx-2 lg:mr-5 xl:mr-3" src={external_link} />
					</button>
				</a>
			</div>
			{#if data.about}
				<div class="mt-8 lg:mt-12 max-w-screen-2xl">
					<h2 class="text-2xl font-bold mb-2">About {data.name}</h2>
					<p class="text-gray-400 xl:pr-24 w-full lg:text-justify">
						{data.about}
					</p>
				</div>
			{/if}
		</div>
		<div class="flex w-auto items-start">
			<img alt="Line" class="hidden xl:block mx-6" src={line_vertical} />
			<div class="mt-8 hidden lg:block lg:w-48">
				<h2 class="text-base xl:text-xl font-medium ml-2">Links</h2>
				<div class="flex flex-row -mt-2 flex-wrap gap-4 items-end ml-2">
					{#if data.socials.x}
						<a href={data.socials.x} rel="noopener noreferrer" target="_blank">
							<img alt="X" class="h-12 w-8 cursor-pointer" src={x_logo} />
						</a>
					{/if}
					{#if data.socials.discord}
						<a href={data.socials.discord} rel="noopener noreferrer" target="_blank">
							<img alt="Discord" class="h-12 w-8 cursor-pointer" src={discord_logo} />
						</a>
					{/if}
					{#if data.socials.github}
						<a href={data.socials.github} rel="noopener noreferrer" target="_blank">
							<img alt="Github" class="h-12 w-8 cursor-pointer" src={github_logo} />
						</a>
					{/if}
					{#if data.socials.telegram}
						<a href={data.socials.telegram} rel="noopener noreferrer" target="_blank">
							<img alt="Telegram" class="h-12 w-8 cursor-pointer" src={telegram_logo} />
						</a>
					{/if}
					{#if data.socials.instagram}
						<a href={data.socials.instagram} rel="noopener noreferrer" target="_blank">
							<img alt="Instagram" class="h-12 w-8 cursor-pointer" src={instagram_logo} />
						</a>
					{/if}
					{#if data.socials.youtube}
						<a href={data.socials.youtube} rel="noopener noreferrer" target="_blank">
							<img alt="Youtube" class="h-12 w-8 cursor-pointer" src={youtube_logo} />
						</a>
					{/if}
					{#if data.socials.linkedin}
						<a href={data.socials.linkedin} rel="noopener noreferrer" target="_blank">
							<img alt="Linkedin" class="h-12 w-8 cursor-pointer" src={linkedin_logo} />
						</a>
					{/if}
					{#if data.socials.appstore}
						<a href={data.socials.appstore} rel="noopener noreferrer" target="_blank">
							<img alt="Appstore" class="h-12 w-8 cursor-pointer" src={appstore_logo} />
						</a>
					{/if}
					{#if data.socials.playstore}
						<a href={data.socials.playstore} rel="noopener noreferrer" target="_blank">
							<img alt="Playstore" class="h-12 w-8 cursor-pointer" src={playstore_logo} />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>