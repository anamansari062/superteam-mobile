<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	// import down_arrow from '$lib/images/down_arrow.svg';

	const navItems = [
		{ name: 'Home', url: "/" },
		{ name: 'Learn', url: "/learn" },
		{ name: 'Build', url: "/projects" },
		{ name: 'Earn', url: 'https://earn.superteam.fun/' }
	];

	const currentPath = $page.url.pathname;
</script>

<header class="flex justify-between items-center w-full h-20 px-5 py-1.5 md:px-10 lg:px-20">
	<div class="flex items-center gap-2">
		<a href="/" class="self-center">
			<img src={logo} alt="Superteam" />
		</a>
		<h2>Mobile</h2>
	</div>

	<div class="flex-grow hidden md:flex md:items-center md:justify-center z-30">
		<nav>
			<ul class="flex items-center justify-center gap-4 border px-8 py-3 rounded-3xl border-slate-600">
				{#each navItems as item}
					<li>
						<a href={item.url} class:selected={item.url === currentPath}>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="rounded-lg sm:rounded-2xl">
		<button class="explore-saga-btn text-xs md:text-lg">Explore Saga</button>
	</div>
</header>


<style>
    .explore-saga-btn {
        background-image: radial-gradient(ellipse at top, #ffffff33 0%, #ffffff00 70%);
        color: #ffffff;
        border: 1px solid #ffffff33;
        padding: 8px 16px;
        border-radius: 8px;
        text-align: center;
        transition: background-color 0.2s, color 0.2s;
    }

    .explore-saga-btn:hover {
        background-image: radial-gradient(ellipse at top, #ffffff44 0%, #ffffff11 70%);
    }
</style>