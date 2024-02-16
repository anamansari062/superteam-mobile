<script>
	import search from '$lib/images/search.svg';
	import down_arrow from '$lib/images/down_arrow.svg';
	import arrow_up_right from '$lib/images/arrow-up-right.svg';
	import reload from '$lib/images/reload.svg';
	import sample_resource from '$lib/images/sample_resource.png';
	import add from '$lib/images/add.svg';
</script>

<section>
	<div class="my-12">
		<h1 class="mt-4">Resources</h1>
		<h4 class="mt-6">The latest industry news, interviews, technologies, and resources.</h4>
	</div>
	<div class="flex flex-col px-8 gap-8">
		<div class="flex flex-row gap-6 justify-between">
			<div style="width:592px;" class="searchBar">
				<img class="w-6 h-6 self-center" src={search} alt="Welcome" />
				<h3>Search</h3>
			</div>
			<div class="flex flex-row gap-6">
				<div style="width:200px; height:48px" class="searchBar justify-between">
					<h3>Select Category</h3>
					<img class="w-4 h-4 self-center" src={down_arrow} alt="Down arrow" />
				</div>
				<div style="width:224px;" class="buttonDiv self-center">
					<img class="w-6 h-6 self-center" src={add} alt="Load" />
					<button> Submit your project </button>
				</div>
			</div>
		</div>
		<div class="resourcesGrid">
			{#each Array(6) as _, i}
				<div class="resourceCard">
					<img class="thumbnail" src={sample_resource} alt="Sample Resource" />
					<div class="contentCard flex flex-col w-full h-full px-6 py-3 gap-2">
						<h2>UX review presentation</h2>
						<h3>How do you create compelling presentations that wow your colleagues a...</h3>
						<div class="flex flex-row justify-between">
							<button class="flex flex-row gap-2 self-center">
								<h6>View</h6>
								<img
									style="width: 20px; height: 20px; align-self: center;"
									src={arrow_up_right}
									alt="View"
								/>
							</button>
							<div class="flex flex-row gap-2">
								<div class="tag">
									<h5>REACT NATIVE</h5>
								</div>
								<div class="tag"><h5>KOTLIN</h5></div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div style="width:140px;" class="buttonDiv self-center">
		<img class="w-5 h-5 self-center" src={reload} alt="Load" />
		<button> Load More </button>
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
	}

	.resourcesGrid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		width: 100%;
		height: 100%;
		/* margin-top: 48px; */
		column-gap: 2rem;
		row-gap: 2rem;
		/* width: 536px;
		height: 556px; */
	}

	.resourceCard {
		display: flex;
		flex-direction: column;
		border: 1px solid;
		border-color: #ffffff33;
		border-radius: 16px;
		width: 100%;
		height: 100%;
		padding-bottom: 32px;
		/* justify-content: space-between; */
	}

	.thumbnail {
		position: absolute;
		height: 220px;
		object-fit: cover;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		z-index: -10;
	}

	.contentCard {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 12px;
		padding-bottom: 12px;
		margin-top: 156px;
		gap: 8px;
		background-color: #00000033;
		backdrop-filter: blur(5px);
	}

	.tag {
		padding-top: 8px;
		padding-bottom: 8px;
		padding-right: 12px;
		padding-left: 12px;
		background-image: radial-gradient(ellipse at bottom, #f2ae4066 0%, #f2ae4000 70%);
		border: 1px solid;
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
		width: 140px;
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
		line-height: 38px;
		letter-spacing: 0em;
		text-align: left;
	}

	h3 {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
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

	h6 {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}
</style>
