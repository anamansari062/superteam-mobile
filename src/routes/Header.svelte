<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	import down_arrow from '$lib/images/down_arrow.svg';

	const navItems = [
		{ name: 'Home', url: '/' },
		{ name: 'Learn', url: '/learn' },
		{ name: 'Build', url: '/projects' },
		{ name: 'Earn', url: 'https://earn.superteam.fun/' }
	];

	const currentPath = $page.url.pathname;
</script>

<header>
	<div class="flex flex-row gap-2 self-center justify-center">
		<a class="self-center" href="/">
			<img src={logo} alt="Superteam" />
		</a>
		<h2>Mobile</h2>
	</div>

	<div class="navDiv">
		<nav>
			<ul>
				{#each navItems as item}
					<li>
						<a href={item.url} class:selected={item.url === currentPath}>
							{item.name}
						</a>
					</li>
				{/each}
				<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/"><button>Home</button></a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about"><button>Learn</button></a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a href="/sverdle"><button>Earn</button></a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a href="/sverdle"><button>Build</button></a>
				</li> -->
				<!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<div class="w-full h-full flex flex-row">
						<a href="/sverdle"><button>Resources</button></a>
						<img class="w-4 h-4 self-center" src={down_arrow} alt="Superteam" />
					</div>
				</li> -->
			</ul>
		</nav>
	</div>

	<div class="header-button">
		<button> Explore Saga </button>
	</div>
</header>

<style>
	header {
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1000;
		padding-left: 5rem;
		padding-right: 5rem;
		padding-top: 1.25rem;
	}

	h2 {
		font-family: Inter;
		font-size: 22px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	.header-button {
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

	.navDiv {
		padding-top: 0px;
		padding-bottom: 0px;
		padding-left: 146.25px;
		padding-right: 146.25px;
	}

	nav {
		display: flex;
		justify-content: center;
		border: 1px solid #ffffff1a;
		border-radius: 9999px;
		padding-top: 1px;
		padding-bottom: 1px;
		padding-left: 13px;
		padding-right: 13px;
	}

	ul {
		position: relative;
		border-radius: 6px;
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
	}

	/* li[aria-current='page']::before {
		--size: 1px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border-bottom: var(--size) solid transparent;
		color: #ffffff;
		border-bottom-width: 1px;
		border-color: #ffffff;
		border-bottom: 2px solid #fff;
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		color: #ffffff80;
		text-decoration: none;
		transition: color 0.2s linear;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: -0.1599999964237213px;
		text-align: left;
	}

	a:hover {
		color: #ffffff;
		border-bottom-width: 1px;
		border-color: #ffffff;
	}
</style>
