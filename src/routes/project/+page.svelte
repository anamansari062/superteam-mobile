<script>
	import line_vertical from '$lib/images/line_features.png';
	import sample_logo_1 from '$lib/images/sample_logo_1.png';
	import arrow_left from '$lib/images/arrow-left.svg';
	import external_link from '$lib/images/external-link.svg';
	import { goto } from '$app/navigation';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';

	function handleClick() {
		goto('/projects');
	}
</script>

<section class="text-white px-8 md:p-16 md:px-36 rounded-lg xl:pb-48 min-h-screen">
	<div class="flex flex-row">
		<div class="max-w-7xl mx-auto">
			<div class="flex items-center mb-4 cursor-pointer" on:click={handleClick}>
				<img src={arrow_left} alt="Back" class="w-6 h-6 mr-2" />
				<h6 class="text-md md:text-lg font-normal">Back</h6>
			</div>

			<div class="flex flex-col lg:flex-row items-start gap-8">
				<img
					class="w-24 h-24 lg:w-28 lg:h-28 rounded-lg bg-gradient-to-b from-blue-400/10 to-transparent p-3 border border-slate-600"
					src={sample_logo_1} alt="Project Logo" />

				<div class="">
					<h2 class="text-3xl font-bold mb-2">Helium</h2>
					<p class="text-gray-400 mb-4">
						The Helium Network represents a paradigm shift for decentralized wireless infrastructure
					</p>

					<div class="flex flex-wrap gap-2 md:mb-4">
						<span class="px-4 py-1 border border-yellow-400/20 radial-gradient-bottom rounded-lg text-sm">Tooling</span>
						<span
							class="px-4 py-1 border border-blue-500 bg-gradient-to-t from-blue-400/40 to-transparent rounded-lg text-sm">Saganize</span>
					</div>
				</div>
				<button
					class="xl:ml-36 lg:mr-24 flex items-center gap-2  rounded-xl px-4 py-2 radial-gradient-blue border border-blue-50/20 transition duration-300">
					View
					<img src={external_link} alt="View" class="w-4 h-4 xl:mx-2" />
				</button>
			</div>
			<div class="mt-16">
				<h2 class="text-2xl font-bold mb-2">About Helium</h2>
				<p class="text-gray-400 md:pr-24 lg:text-justify">
					The Helium Network is a decentralized, blockchain-based wireless infrastructure project that allows
					individuals and organizations to deploy and operate wireless networks through token incentivization. It
					leverages the Solana Blockchain for its foundation. The primary token powering the network is HNT, while IOT
					and MOBILE tokens are used to facilitate the LoRaWAN and 5G networks, respectively. Proof-of-Coverage (PoC) is
					a unique consensus algorithm employed by the subnetworks.
				</p>
			</div>
		</div>
		<div class="flex flex-grow items-start flex-row">
			<img src={line_vertical} alt="Line" class="hidden lg:block" />
			<div class="mt-8 hidden lg:block ">
				<h2 class="text-xl text-center font-semibold mb-2">Links</h2>
				<div class="flex flex-row gap-4 mx-24 justify-center items-end mt-4 ">
					<img src={x_logo} alt="X" class="h-6" />
					<img src={discord_logo} alt="Discord" class="h-6" />
					<img src={github_logo} alt="Github" class="h-6" />
				</div>
			</div>
		</div>
	</div>
</section>
