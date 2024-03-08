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

	const features_block1 = [
		{
			id: 1,
			logo: sms_logo,
			title: 'SMS',
			subtitle: 'Solana Mobile Stack',
			tag: '',
			link: 'https://docs.solanamobile.com/getting-started/intro'
		},
		{ id: 2, logo: pwa_logo, title: 'Resources', subtitle: 'Technical mobile content', tag: 'All', link: '' },
		{
			id: 4,
			logo: mentor_logo,
			title: 'Mentor',
			subtitle: 'Learn by Experience',
			tag: '',
			link: 'https://discord.gg/dk4j95SDwB'
		}
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
			logo: sdk_logo,
			title: 'SDKs',
			subtitle: 'Accelerate Development',
			link: '/sms'
		},
		{
			id: 3,
			logo: earn_logo,
			title: 'Earn',
			subtitle: 'Earn your first Crypto',
			link: 'https://earn.superteam.fun/'
		},
		{
			id: 4,
			logo: grant_logo,
			title: 'Grants',
			subtitle: 'Get help to Build',
			link: 'https://earn.superteam.fun/grants/'
		},
		
	];

	const additionalFeaturesBlock1 = [
		{ id: 4, logo: kotlin, title: 'Kotlin', subtitle: '', tag: 'Kotlin' },
		{ id: 5, logo: flutter, title: 'Flutter', subtitle: '', tag: 'Flutter' },
		{ id: 6, logo: react_native, title: 'React Native', subtitle: '', tag: 'React Native' },
		{ id: 7, logo: swift, title: 'Swift', subtitle: '', tag: 'Swift' }
	];
</script>

<section
	class="flex flex-col flex-grow lg:pt-10 items-center pb-10 relative sm:pb-24 w-full bg-blue-900"
	id="get_started"
>
	<div class="relative searchBar w-72 sm:w-full">
		<img
			alt="Star bg"
			class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full hidden sm:flex"
			src={ellipse}
		/>
		<div class="search flex-row hidden md:flex">
			<img alt="Welcome" src={search} />
			<div class="text-md md:text-xl p-2 sm:p-3">App Library</div>
		</div>
	</div>
	<div class="flex flex-col sm:flex-row w-full h-full px-4 sm:px-8 py-0 gap-x-4 sm:gap-x-12">
		<!-- Learn Section -->
		<div class="w-full flex flex-col">
			<div class="flex flex-row justify-center items-center h-16 sm:h-20">
				<img alt="Left Arrow" class="sm:mt-5 arrow_left hidden xl:block" src={left_arrow} />
				<div class="featureButton flex items-center gap-2">
					<img alt="Welcome" class="w-6 h-6" src={bolt} />
					<a class="text-white z-30" href="learn/">Learn</a>
				</div>
				<img alt="Right Arrow" class="sm:mt-5 arrow_right hidden xl:block" src={right_arrow} />
			</div>
			<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-12">
				{#each features_block1 as { logo, title, subtitle, tag, link }}
					<a href={tag ? `learn/?tag=${tag.toLowerCase()}` : link} class="block featureCard">
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
				alt="Features Divider"
				class="h-full xl:h-[540px] xl:w-3 xl:mt-8 w-full"
				src={line_features}
			/>
		</div>
		<div class="flex flex-col flex-grow sm:flex-row w-full h-full mt-12 md:mt-0">
			<!-- Build Section -->
			<div class="w-full flex flex-col flex-grow">
				<div class="flex flex-row justify-center items-center h-16 sm:h-20">
					<img alt="Left Arrow" class="sm:mt-5 arrow_left hidden xl:block" src={left_arrow} />
					<div class="featureButton flex items-center gap-2">
						<img alt="Welcome" class="w-6 h-6" src={bolt} />
						<a class="text-white z-30" href="/projects">Build</a>
					</div>
					<img alt="Right Arrow" class="sm:mt-5 hidden arrow_right xl:block" src={right_arrow} />
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
        border: 1px solid #ffffff4d;
    }

    .additionalFeaturesBlock1:hover {
        background-color: #ffffff0d;
    }

    section {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 6rem;
        background-color: #010a23;
    }

    .logo {
        width: 60px;
        height: 60px;
        align-self: flex-start;
    }


    .featureCard {
        display: flex;
        flex-direction: column;
        border: 1px solid #ffffff4d;
        border-radius: 8px;
        width: 100%;
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
        border: 1px solid #ffffff4d;
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
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px #ffffff33;
        gap: 8px;
        box-shadow: 0 1px 2px 0;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        text-align: center;
        justify-content: center;
    }


    .search {
        width: 100%;
        gap: 24px;
        border: 1px solid #ffffff4d;
        border-radius: 8px;
        box-shadow: 0 20px 24px -4px #10182814;
        justify-content: center;
    }

    .searchBar {
        padding: 50px 60px;
        border-top: 1px solid;
        border-image: linear-gradient(
                to left,
                transparent,
                #ffffff01,
                #ffffff4d,
                #ffffff01,
                transparent
        );
    }
</style>

