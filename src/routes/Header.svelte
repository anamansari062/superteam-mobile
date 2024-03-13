<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';

	const navItems = [
		{ name: 'Home', url: '/' },
		{ name: 'Resources', url: '/learn' },
		{ name: 'SDKs', url: '/sdks' },
		{ name: 'Projects', url: '/projects' }
		// { name: 'Earn', url: 'https://earn.superteam.fun/' }
	];

	let path = '';

	$: path = $page.url.pathname;
</script>

<header class="flex justify-between items-center w-full h-20 px-5 py-1.5 md:px-10 lg:px-20">
	<div class="flex items-center gap-2">
		<a class="self-center" href="/">
			<img alt="Superteam" src={logo} />
		</a>
		<h2 class="">Mobile</h2>
	</div>

	<div class="flex-grow hidden md:flex md:items-center md:justify-center z-30">
		<nav>
			<ul class="flex items-center justify-center gap-6 border px-8 py-3 rounded-3xl border-slate-600 text-white/50">
				{#each navItems as item}
					<li>
						<a href={item.url} class:active={path === item.url} class="text-white/50 pb-3.5">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="rounded-lg sm:rounded-2xl hidden md:block">
		<a href="https://solanamobile.com/hardware">
			<button class="explore-saga-btn text-xs md:text-base">Explore Saga</button>
		</a>
	</div>

	<div class="md:hidden">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Menu />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="bg-[#010a23]">
				<DropdownMenu.Group class="bg-[#010a23]">
					{#each navItems as item}
						<DropdownMenu.Item class="text-white">
							<a href={item.url} class:active={path === item.url} class="pb-2">
								{item.name}
							</a>
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
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

    a {
        position: relative;
        transition: color 0.3s ease;
        /*padding-bottom: 14px;*/
    }

    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        opacity: 0;
        transition: opacity 0.3s ease-in, transform 0.3s ease;
        transform: translateY(100%);
        border-radius: 5px;
    }

    a.active::after {
        opacity: 1;
        transform: translateY(0);
        box-shadow: white 0px 0px 10px 0px;
    }

    .active {
        color: #ffffff;
    }

</style>