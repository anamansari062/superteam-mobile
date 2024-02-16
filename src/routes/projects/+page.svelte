<script>
	import search from '$lib/images/search.svg';
	import down_arrow from '$lib/images/down_arrow.svg';
	import add from '$lib/images/add.svg';
	import sample_logo from '$lib/images/sample_logo.png';
	import { goto } from '$app/navigation';

	function handleClick() {
		// Navigate to the desired page
		goto('/project');
	}
</script>

<section>
	<div class="my-12">
		<h1 class="mt-4">Projects</h1>
		<h4 class="mt-6">
			Powerful for developers. Powering tools and integrations from companies all around the world
		</h4>
	</div>
	<div class="flex flex-col px-8 gap-8">
		<div class="flex flex-row gap-6 justify-between">
			<div style="width:592px; height: 48px" class="searchBar">
				<img class="w-6 h-6 self-center" src={search} alt="Welcome" />
				<h3>Search</h3>
			</div>
			<div class="flex flex-row gap-6">
				<div style="width:200px; height:48px" class="searchBar justify-between">
					<h3>Select Category</h3>
					<img class="w-4 h-4 self-center" src={down_arrow} alt="Down arrow" />
				</div>
				<div class="buttonDiv self-center">
					<img class="w-6 h-6 self-center" src={add} alt="Load" />
					<button> Submit your project </button>
				</div>
			</div>
		</div>
		<div class="resourcesGrid">
			{#each Array(6) as _, i}
				<div class="resourceCard" aria-hidden="true" aria-label="View more about this project" on:click={handleClick}>
					<div>
						<div class="logoBox">
							<img class="logo" src={sample_logo} alt="Project Logo" />
						</div>
					</div>
					<div class="contentCard flex flex-col w-full h-full">
						<div>
							<h2>Mirror World Smart SDK</h2>
							<h3>A Web3 infrastructure project aiming to help developers...</h3>
						</div>
						<div class="flex flex-row gap-2">
							<div class="tag">
								<h5>TOOLING</h5>
							</div>
							<div class="tag">
								<h5>SAGANIZE</h5>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding-top: 96px;
		padding-bottom: 96px;
		width: 1280px;
		gap: 64px;
		place-self: center;
	}

	.searchBar {
		display: flex;
		flex-direction: row;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		gap: 8px;
		border: 1px solid #ffffff4d;
		border-radius: 8px;
		box-shadow: 0px 20px 24px -4px #10182814;
		background-color: #020a23;
	}

	.resourcesGrid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		width: 100%;
		height: 100%;
		column-gap: 32px;
		row-gap: 32px;
	}

	.resourceCard {
		display: flex;
		flex-direction: row;
		border: 1px solid #ffffff33;
		border-radius: 16px;
		width: 100%;
		height: 100%;
		padding: 16px;
		gap: 16px;
		background-color: #020a23;
		/* justify-content: space-between; */
	}

	.logoBox {
		width: 100px;
		height: 100px;
		padding: 16px;
		border-radius: 8px;
		align-self: center;
		border: 1px solid #ffffff4d;
		background-image: radial-gradient(circle at top, #ffffff26 0%, #ffffff00 70%);
	}

	.logo {
		width: 68px;
		height: 68px;
	}

	.contentCard {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		/* padding-left: 24px;
		padding-right: 24px;
		padding-top: 12px;
		padding-bottom: 12px; */
		gap: 20px;
	}

	.tag {
		width: fit-content;
		height: 28px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-right: 12px;
		padding-left: 12px;
		background-image: radial-gradient(ellipse at bottom, #f2ae4066 0%, #f2ae4000 70%);
		border-radius: 6px;
		border: 1px solid;
		border-color: #ffffff33;
		background-position: bottom;
		background-size: 100% 60%;
		background-repeat: no-repeat;
	}

	.buttonDiv {
		display: flex;
		flex-direction: row;
		width: 224px;
		height: 48px;
		padding: 12px, 20px, 12px, 20px;
		border-radius: 8px;
		border: 1px solid #ffffff33;
		gap: 8px;
		color: #ffffff;
		text-align: center;
		justify-content: center;
		background-image: radial-gradient(ellipse at top, #ffffff33 0%, #ffffff00 70%);
		background-size: 100% 70%;
		background-repeat: no-repeat;
	}

	button {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	h1 {
		font-family: sans-serif;
		font-size: 36px;
		font-weight: 500;
		line-height: 44px;
		letter-spacing: -0.02em;
		text-align: center;
	}

	h2 {
		font-size: 24px;
		font-weight: 500;
		line-height: 29px;
		letter-spacing: 0em;
		text-align: left;
	}

	h3 {
		font-size: 16px;
		font-weight: 400;
		line-height: 19px;
		letter-spacing: 0em;
		text-align: left;

		color: #dddddd;
	}

	h4 {
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: 0em;
		text-align: center;
		color: #dddddd;
	}

	h5 {
		font-size: 12px;
		font-weight: 500;
		line-height: 12px;
		letter-spacing: 0.02em;
		text-align: center;
	}
</style>
