<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	import x_logo from '$lib/images/x_logo.svg';
	import discord_logo from '$lib/images/discord_logo.svg';
	import mail_logo from '$lib/images/mail_logo.svg';
	import github_logo from '$lib/images/github_logo.svg';
</script>

<footer class="flex flex-col justify-center items-center px-4 sm:px-20 mt-16 mb-16 w-full relative">
	<div class="flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center gap-8 text-center sm:text-left">
		<div class="flex flex-col gap-8 items-center sm:items-start">
			<div class="flex flex-row gap-2 items-center justify-center">
				<a href="/">
					<img src={logo} alt="Superteam" class="h-8" />
				</a>
				<h2 class="text-xl font-bold">Mobile</h2>
			</div>
			<h3 class="text-sm font-normal text-gray-300 text-center md:text-left">There’s never a better time to build consumer apps</h3>
		</div>
		<nav class="flex gap-4 justify-center">
			<ul class="flex gap-4 items-center justify-center">
				<li class="relative" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" class="text-white text-sm font-medium py-2 px-4 hover:text-white">Learn</a>
				</li>
				<li class="relative" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about" class="text-white text-sm font-medium py-2 px-4 hover:text-white">Build</a>
				</li>
				<li class="relative" aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a href="/sverdle" class="text-white text-sm font-medium py-2 px-4 hover:text-white">Earn</a>
				</li>
			</ul>
		</nav>
		<div class="flex flex-col gap-4 justify-between items-center md:items-end">
			<div class="w-36 h-12 flex items-center justify-center rounded-xl border border-white/20 bg-gradient-to-t from-white/20 to-transparent">
				<button class="text-white text-sm font-medium">Explore Saga</button>
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
