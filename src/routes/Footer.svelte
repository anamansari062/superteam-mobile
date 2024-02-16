<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import mail_logo from '$lib/images/mail_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
</script>

<footer>
	<div class="w-full h-full flex flex-row px-8 justify-between">
		<div class="flex flex-col w-fit h-full">
			<div class="flex flex-col gap-8">
				<div class="flex flex-row gap-2">
					<a class="self-center" href="/">
						<img src={logo} alt="Superteam" />
					</a>
					<h2>Mobile</h2>
				</div>
				<h3>There’s never a better time to build consumer apps</h3>
			</div>
			<nav class="flex flex-row">
				<ul class="gap-4">
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/"><button>Learn</button></a>
					</li>
					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
						<a href="/about"><button>Build</button></a>
					</li>
					<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
						<a href="/sverdle"><button>Earn</button></a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex flex-col w-fit h-full justify-between">
			<div class="buttonDiv">
				<button> Explore Saga </button>
			</div>
			<div class="flex flex-row gap-4">
				<img class="logo" src={x_logo} alt="X" />
				<img class="logo" src={discord_logo} alt="Discord" />
				<img class="logo" src={mail_logo} alt="Mail" />
				<img class="logo" src={github_logo} alt="Github" />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 5rem;
		padding-right: 5rem;
		margin-bottom: 4rem;
		height: 112px;
		width: 100%;
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

	h2 {
		font-size: 22px;
		font-weight: 700;
		line-height: 24px;
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

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		gap: 32px;
	}

	li[aria-current='page']::before {
		/* --size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size)); */
		/* border: var(--size) solid transparent; */
		color: #ffffff;
		border-bottom-width: 1px;
		border-color: #ffffff;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: #DDDDDD;
		text-decoration: none;
		transition: color 0.2s linear;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	a:hover {
		color: #ffffff;
		border-bottom-width: 1px;
	}
</style>
