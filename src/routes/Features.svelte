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
	import kotlin from '$lib/images/kotlin.png';
	import flutter from '$lib/images/flutter.png';
	import react_native from '$lib/images/react-native.png';
	import swift from '$lib/images/swift.png';
</script>

<section>
	<div class="searchBar">
		<img
			style="width: 780px; left:50%; transform: translateX(-50%);"
			class="absolute top-0"
			src="/src/lib/images/ellipse.png"
			alt="Star bg"
		/>
		<div class="search flex flex-row">
			<img src={search} alt="Welcome" />
			<h2>App Library</h2>
		</div>
	</div>
	<div class="flex flex-row w-full h-full px-8 py-0 gap-x-12">
		<div class="w-full h-full flex flex-col">
			<div class="flex flex-row justify-center h-20">
				<img class="mt-5" src={left_arrow} alt="Left Arrow" />
				<div class="featureButton">
					<img src={bolt} alt="Welcome" />
					<h5>Learn</h5>
				</div>
				<img class="mt-5" src={right_arrow} alt="Right Arrow" />
			</div>
			<div class="features">
				<div class="featureCard">
					<img class="logo" src={sms_logo} alt="Solana Mobile Stack" />
					<div class="gap-0.5">
						<h3>SMS</h3>
						<h4>Solana Mobile Stack</h4>
					</div>
				</div>
				<div class="featureCard">
					<img class="logo" src={pwa_logo} alt="Progressive Web Apps" />
					<div class="gap-0.5">
						<h3>PWAs</h3>
						<h4>Progressive Web Apps</h4>
					</div>
				</div>
				<div class="featureCard">
					<img class="logo" src={sdk_logo} alt="SDK" />
					<div class="gap-0.5">
						<h3>SDKs</h3>
						<h4>Accelerate Development</h4>
					</div>
				</div>
				<div class="specialBox">
					<div class="specialCard">
						<img style="width: 64.9px; height: 64px;" src={kotlin} alt="Kotlin" />
					</div>
					<div class="specialCard">
						<img style="width: 53.48px; height: 64px;" src={flutter} alt="Flutter" />
					</div>
					<div class="specialCard">
						<img style="width: 64px; height: 64px;" src={react_native} alt="React Native" />
					</div>
					<div class="specialCard">
						<img style="width: 68.68px; height: 64px;" src={swift} alt="Swift" />
					</div>
				</div>
			</div>
		</div>
		<div class="h-full">
			<img class="h-full" src="/src/lib/images/line_features.png" alt="Features Divider" />
		</div>
		<div class="w-full h-full flex flex-col">
			<div class="flex flex-row justify-center h-20">
				<img class="mt-5" src={left_arrow} alt="Left Arrow" />
				<div class="featureButton">
					<img src={bolt} alt="Welcome" />
					<h5>Build</h5>
				</div>
				<img class="mt-5" src={right_arrow} alt="Right Arrow" />
			</div>
			<div class="features">
				<div class="featureCard">
					<img class="logo" src={idea_logo} alt="Idea Logo" />
					<div class="gap-0.5">
						<h3>Idea Bank</h3>
						<h4>Curated Ideas by founder</h4>
					</div>
				</div>
				<div class="featureCard">
					<img class="logo" src={earn_logo} alt="Earn Logo" />
					<div class="gap-0.5">
						<h3>Earn</h3>
						<h4>Earn your first crypto</h4>
					</div>
				</div>
				<div class="featureCard">
					<img class="logo" src={grant_logo} alt="Grant Logo" />
					<div class="gap-0.5">
						<h3>Grants</h3>
						<h4>Get help to build</h4>
					</div>
				</div>
				<div class="featureCard">
					<img class="logo" src={mentor_logo} alt="Mentor Logo" />
					<div class="gap-0.5">
						<h3>Mentor</h3>
						<h4>Learn by experience</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 913px;
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: #010a23;
	}

	.logo {
		width: 80px;
		height: 80px;
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
		height: 100%;
		padding: 20px;
		justify-content: space-between;
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
	}

	.featureButton {
		display: flex;
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
		height: 65px;
		border-top: 1px;
		gap: 24px;
		border: 1px solid #ffffff4d;
		border-radius: 8px;
		padding: 18px;
		box-shadow: 0px 20px 24px -4px #10182814;
		justify-content: center;
	}

	.searchBar {
		position: relative;
		width: 100%;
		height: 165px;
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
