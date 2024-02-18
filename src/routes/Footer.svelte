<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import mail_logo from '$lib/images/mail_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
</script>

<footer class="flex flex-col justify-center items-center sm:px-20 mt-16 mb-16 w-full relative px-4">
	<div class="flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center gap-8 text-center sm:text-left">
		<div class="flex flex-col gap-8 items-center sm:items-start">
			<div class="flex flex-row gap-2 items-center justify-center">
				<a href="/">
					<img src={logo} alt="Superteam" class="h-8" />
				</a>
				<h2 class="text-xl font-bold">Mobile</h2>
			</div>
			<h3 class="text-sm lg:text-lg xl:text-xl font-normal text-gray-300 text-center md:text-left">There’s never a better time to build consumer apps</h3>
			<nav class="flex gap-4 justify-center">
				<ul class="flex gap-4 items-center justify-center text-md">
					<li class="relative" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/" class="text-white font-medium  hover:text-white">Learn</a>
					</li>
					<li class="relative" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
						<a href="/about" class="text-white font-medium hover:text-white">Build</a>
					</li>
					<li class="relative" aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
						<a href="/sverdle" class="text-white font-medium hover:text-white">Earn</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex flex-col gap-16 justify-between items-center md:items-end">
			<div class="w-36 h-12 flex items-center justify-center">
				<button class="text-white text-sm font-medium explore-saga-btn">Explore Saga</button>
			</div>
			<div class="flex flex-row gap-4 justify-center">
				<img src={x_logo} alt="X" class="h-6" />
				<img src={discord_logo} alt="Discord" class="h-6" />
				<img src={mail_logo} alt="Mail" class="h-6" />
				<img src={github_logo} alt="Github" class="h-6" />
			</div>
		</div>
	</div>
</footer>

<style>
    .explore-saga-btn {
        background-image: radial-gradient(ellipse at top, #ffffff33 0%, #ffffff00 70%);
        color: #ffffff;
        border: 1px solid #ffffff33;
        padding: 12px 20px;
        border-radius: 8px;
        text-align: center;
        transition: background-color 0.2s, color 0.2s;
    }

    .explore-saga-btn:hover {
        background-image: radial-gradient(ellipse at top, #ffffff44 0%, #ffffff11 70%);
    }
</style>