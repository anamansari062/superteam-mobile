<script>
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
	import sample_logo_1 from '$lib/images/sample_logo_1.png';
	import arrow_left from '$lib/images/arrow-left.svg';
	import external_link from '$lib/images/external-link.svg';
	import { goto } from '$app/navigation';

	function handleClick() {
		// Navigate to the desired page
		goto('/projects');
	}
</script>

<section>
	<div class="contentSection flex flex-col gap-8 h-full">
		<div class="flex flex-row gap-2" aria-hidden="true" aria-label="Go back to project section" on:click={handleClick}>
			<img src={arrow_left} alt="Back" />
			<h6>Back</h6>
		</div>
		<div class="resourceCard">
			<div>
				<div class="logoBox">
					<img class="logo" src={sample_logo_1} alt="Project Logo" />
				</div>
			</div>
			<div class="contentCard flex flex-col w-full h-full">
				<div class="flex flex-col gap-1">
					<h2>Helium</h2>
					<h3>
						The Helium Network represents a paradigm shift for decentralized wireless infrastructure
					</h3>
				</div>
				<div class="flex flex-row gap-2">
					<div class="tag">
						<h5>Tooling</h5>
					</div>
					<div class="tag">
						<h5>Saganize</h5>
					</div>
				</div>
			</div>
			<div class="buttonDiv">
				<button>View</button>
				<img style="width:24px; height:24px;" class="self-center" src={external_link} alt="View" />
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<h2>About Helium</h2>
			<h3>
				The Helium Network is a decentralized, blockchain-based wireless infrastructure project that
				allows individuals and organizations to deploy and operate wireless networks through token
				incentivization. It leverages the Solana Blockchain for its foundation. The primary token
				powering the network is HNT, while IOT and MOBILE tokens are used to facilitate the LoRaWAN
				and 5G networks, respectively. Proof-of-Coverage (PoC) is a unique consensus algorithm
				employed by the subnetworks.
			</h3>
		</div>
	</div>
	<div class="links flex flex-col gap-2 h-full">
		<h5>Links</h5>
		<div class="flex flex-row gap-4">
			<img class="logoLinks" src={x_logo} alt="Sms Logo" />
			<img class="logoLinks" src={discord_logo} alt="Sms Logo" />
			<img class="logoLinks" src={github_logo} alt="Sms Logo" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		padding-top: 50px;
		padding-bottom: 96px;
		padding-left: 32px;
		padding-right: 32px;
		width: 1280px;
		height: 100%;
		gap: 64px;
		place-self: center;
	}

	.resourceCard {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid;
		border-image: radial-gradient(ellipse, #ffffff00, #ffffff7e, #ffffff00) 1;
		border-radius: 16px;
		width: 100%;
		height: 100%;
		padding: 16px;
		gap: 32px;
		background-color: #020a23;
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

	.contentSection {
		border-right: 1px solid;
		padding-right: 64px;
		border-image: radial-gradient(ellipse, #ffffff0f, #ffffff7e, #ffffff0f) 1;
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
		width: 110px;
		height: 48px;
		padding-top: 12px;
		padding-bottom: 12px;
		padding-left: 24px;
		padding-right: 24px;
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

	h5 {
		font-size: 12px;
		font-weight: 500;
		line-height: 12px;
		letter-spacing: 0.02em;
		text-align: center;
	}

	h6 {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	button {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}
</style>
