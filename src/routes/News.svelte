<script>
</script>

<section>
	<div class="flex flex-col px-8 gap-8">
		<h1>What's New</h1>
		<div class="flex flex-row w-full h-full gap-8">
			<div class="bigCard bg-[url('./lib/images/mobile_projects.png')]">
				<div class="bigCard">
					<div class="cardContent">
						<h2>Active Projects</h2>
						<h3>Mobile Projects killing it in the ecosystem</h3>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-full h-full gap-8">
				<div class="smallCard bg-[url('./lib/images/toly_img.png')]">
					<div class="cardContent">
						<h2>Saga</h2>
						<h3>Checkout first crypto phone ever</h3>
					</div>
				</div>
				<div class="smallCard bg-[url('./lib/images/hackathon.png')]">
					<div class="cardContent">
						<h2>Hackathon Winners</h2>
						<h3>Previous winner mobile projects</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 660px;
		padding-top: 6rem;
		padding-bottom: 6rem;
		gap: 4rem;
	}

	.bigCard {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 400px;
		border: 1px solid #ffffff33;
		border-radius: 16px;
		background-size: 100% 90%;
		background-position: center;
		background-clip: 80%;
	}

	.smallCard {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 184px;
		border: 1px solid #ffffff33;
		border-radius: 16px;
		background-size: cover;
		background-position: center;
	}

	.cardContent {
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 12px;
		padding-bottom: 12px;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;
		background-color: #00000033;
		backdrop-filter: blur(5px);
	}

	h1 {
		font-family: Inter;
		font-size: 30px;
		font-weight: 500;
		line-height: 36px;
		letter-spacing: 0em;
	}

	h2 {
		font-family: Inter;
		font-size: 24px;
		font-weight: 500;
		line-height: 38px;
		letter-spacing: 0em;
		text-align: left;
	}

	h3 {
		font-family: Inter;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
		color: #dddddd;
	}
</style>
