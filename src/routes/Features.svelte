<script>
	import search from '$lib/images/search.svg';
	import bolt from '$lib/images/Bolt.svg';
	import sms_logo from '$lib/images/sms_logo.png';
	import pwa_logo from '$lib/images/pwa_logo.png';
	import sdk_logo from '$lib/images/sdk_logo.png';
	import idea_logo from '$lib/images/idea_logo.png';
	import earn_logo from '$lib/images/earn_logo.png';
	import grant_logo from '$lib/images/grant_logo.png';
	import mentor_logo from '$lib/images/mentor_logo.png';
	import left_arrow from '$lib/images/left_arrow.png';
	import right_arrow from '$lib/images/right_arrow.png';
	import ellipse from '$lib/images/ellipse.png';
	import line_features from '$lib/images/line_features.png';
	import kotlin from '$lib/images/kotlin.png';
	import flutter from '$lib/images/flutter.png';
	import react_native from '$lib/images/react-native.png';
	import swift from '$lib/images/swift.png';

	import { navigate } from 'svelte-routing';

	// let selectedCategory = '';
	//
	// function handleComponentClick(tags) {
	// 	selectedCategory = tags;
	// 	console.log('Selected Category:', selectedTag);
	//
	// 	navigate(`/learn?tag=${selectedTag}`);
	// }
	const features_block1 = [
		{ id: 1, logo: sms_logo, title: 'SMS', subtitle: 'Solana Mobile Stack', tag: 'SMS' },
		{ id: 2, logo: pwa_logo, title: 'PWAs', subtitle: 'Progressive Web Apps', tag: 'PWA' },
		{ id: 3, logo: sdk_logo, title: 'SDKs', subtitle: 'Accelerate Development', tag: 'SDK' }
	];

	const features_block2 = [
		{
			id: 1,
			logo: idea_logo,
			title: 'Idea Bank',
			subtitle: 'Curated Ideas by Founder',
			link: 'https://build.superteam.fun/ideas?category=Mobile'
		},
		{
			id: 2,
			logo: earn_logo,
			title: 'Earn',
			subtitle: 'Earn your first Crypto',
			link: 'https://earn.superteam.fun/'
		},
		{
			id: 3,
			logo: grant_logo,
			title: 'Grants',
			subtitle: 'Get help to Build',
			link: 'https://earn.superteam.fun/grants/'
		},
		{
			id: 4,
			logo: mentor_logo,
			title: 'Mentor',
			subtitle: 'Learn by Experience',
			link: 'https://earn.superteam.fun/mentor/'
		}
	];

	const additionalFeaturesBlock1 = [
		{ id: 4, logo: kotlin, title: 'Kotlin', subtitle: '', tag: 'Kotlin' },
		{ id: 5, logo: flutter, title: 'Flutter', subtitle: '', tag: 'Flutter' },
		{ id: 6, logo: react_native, title: 'React Native', subtitle: '', tag: 'React Native' },
		{ id: 7, logo: swift, title: 'Swift', subtitle: '', tag: 'Swift' }
	];
</script>

<section
	id="get_started"
	class="flex flex-col flex-grow lg:pt-10 items-center pb-10 relative sm:pb-24 w-full bg-blue-900"
>
	<div class="relative searchBar w-72 sm:w-full">
		<img
			class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full hidden md:flex"
			src={ellipse}
			alt="Star bg"
		/>
		<div class="search flex-row hidden md:flex">
			<img src={search} alt="Welcome" />
			<div class="text-md md:text-xl p-2 sm:p-3">App Library</div>
		</div>
	</div>
	<div class="flex flex-col sm:flex-row w-full h-full px-4 sm:px-8 py-0 gap-x-4 sm:gap-x-12">
		<!-- Learn Section -->
		<div class="w-full flex flex-col">
			<div class="flex flex-row justify-center items-center h-16 sm:h-20">
				<img class="sm:mt-5 arrow_left hidden xl:block" src={left_arrow} alt="Left Arrow" />
				<div class="featureButton flex items-center gap-2">
					<img src={bolt} alt="Welcome" class="w-6 h-6" />
					<a href="learn/" class="text-white z-30">Learn</a>
				</div>
				<img class="sm:mt-5 arrow_right hidden xl:block" src={right_arrow} alt="Right Arrow" />
			</div>
			<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-12">
				{#each features_block1 as { logo, title, subtitle, tag }}
					<a href={`learn/?tag=${tag.toLowerCase()}`} class="block featureCard">
						<img class="logo" src={logo} alt={title} />
						<div class="gap-8 mt-6">
							<div class="text-xl md:text-2xl font-semibold">{title}</div>
							<div class="text-slate-200">{subtitle}</div>
						</div>
					</a>
				{/each}
				<div class="w-full flex flex-col">
					<div
						class="grid grid-cols-2 justify-center items-center place-content-center gap-4 sm:gap-4"
					>
						{#each additionalFeaturesBlock1 as { logo, title, tag }}
							<a href={`learn/?tag=${tag.toLowerCase()}`}>
								<div
									class="featureCardLogo border p-1 rounded-lg flex-col cursor-pointer additionalFeaturesBlock1"
								>
									<img class="logo mx-auto scale-75" src={logo} alt={title} />
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- Line Divider -->
		<div class="h-full hidden xl:block">
			<img
				class="h-full xl:h-[540px] xl:w-3 xl:mt-8 w-full"
				src={line_features}
				alt="Features Divider"
			/>
		</div>
		<div class="flex flex-col flex-grow sm:flex-row w-full h-full mt-12 md:mt-0">
			<!-- Build Section -->
			<div class="w-full flex flex-col flex-grow">
				<div class="flex flex-row justify-center items-center h-16 sm:h-20">
					<img class="sm:mt-5 arrow_left hidden xl:block" src={left_arrow} alt="Left Arrow" />
					<div class="featureButton flex items-center gap-2">
						<img src={bolt} alt="Welcome" class="w-6 h-6" />
						<a href="/projects" class="text-white z-30">Build</a>
					</div>
					<img class="sm:mt-5 hidden arrow_right xl:block" src={right_arrow} alt="Right Arrow" />
				</div>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-12">
					{#each features_block2 as { link, logo, title, subtitle }}
						<a href={link}>
							<div class="featureCard">
								<img class="logo" src={logo} alt={title} />
								<div class="gap-8 md:mt-6 mt-3">
									<div class="text-xl md:text-2xl font-semibold">{title}</div>
									<div class="text-slate-200">{subtitle}</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@media screen and (min-width: 2560px) {
		.arrow_left {
			margin-left: 300px;
		}
	}

	@media screen and (min-width: 2560px) {
		.arrow_right {
			margin-right: 400px;
		}
	}

	.featureCardLogo {
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
		justify-content: space-between;
		border: 1px solid;
		border-color: #ffffff4d;
	}

	.additionalFeaturesBlock1:hover {
		background-color: #ffffff0d;
	}

	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		/*height: 913px;*/
		/*padding-top: 6rem;*/
		padding-bottom: 6rem;
		background-color: #010a23;
	}

	.logo {
		width: 60px;
		height: 60px;
		align-self: flex-start;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		width: 100%;
		height: 100%;
		column-gap: 2rem;
		row-gap: 1.75rem;
	}

	.featureCard {
		display: flex;
		flex-direction: column;
		border: 1px solid;
		border-color: #ffffff4d;
		border-radius: 8px;
		width: 100%;
		/*height: 100%;*/
		padding: 20px;
		justify-content: space-between;
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
	}

	.featureCard:hover {
		background-color: #ffffff0d;
	}

	.featureCardLogo {
		display: flex;
		flex-direction: column;
		border: 1px solid;
		border-color: #ffffff4d;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		padding: 12px;
		justify-content: space-between;
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
	}

	.featureButton {
		display: flex;
		margin-bottom: 24px;
		flex-direction: row;
		width: fit-content;
		height: 48px;
		padding: 12px, 20px, 12px, 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 12px;
		padding-bottom: 12px;
		border-radius: 8px;
		border-color: #ffffff33;
		border: 1px;
		gap: 8px;
		box-shadow: 0px 1px 2px 0px;
		color: #ffffff;
		font-family: Inter;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
		justify-content: center;
	}

	.specialBox {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 12px;
		row-gap: 12px;
	}

	.specialCard {
		display: flex;
		justify-content: center;
		border: 1px solid;
		border-color: #ffffff33;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		padding: 12px;
		place-items: center;
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
	}

	.search {
		width: 100%;
		/*height: 65px;*/
		gap: 24px;
		border: 1px solid #ffffff4d;
		border-radius: 8px;
		/*padding: 18px;*/
		box-shadow: 0px 20px 24px -4px #10182814;
		justify-content: center;
	}

	.searchBar {
		/*position: relative;*/
		/*width: 100%;*/
		/*height: 165px;*/
		padding-left: 60px;
		padding-right: 60px;
		padding-top: 50px;
		padding-bottom: 50px;
		border-top: 1px solid;
		border-image: linear-gradient(
				to left,
				transparent,
				#ffffff01,
				#ffffff4d,
				#ffffff01,
				transparent
			)
			1;
	}

	h3 {
		font-size: 32px;
		font-weight: 600;
		line-height: 40px;
		letter-spacing: 0px;
		text-align: left;
	}

	h4 {
		font-size: 16px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0px;
		color: #dddddd;
		margin-block-start: 0rem;
	}

	h5 {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	h2 {
		font-size: 24px;
		font-weight: 400;
		line-height: 29px;
		letter-spacing: 0em;
		text-align: center;
	}
</style>

