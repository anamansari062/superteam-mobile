<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/st-logo.svg';

	const navItems = [
		{ name: 'Home', url: "/" },
		{ name: 'Learn', url: "/learn" },
		{ name: 'Build', url: "/projects" },
		{ name: 'Earn', url: 'https://earn.superteam.fun/' }
	];

	let path;

	$: path = $page.url.pathname;
</script>

<header class="flex justify-between items-center w-full h-20 px-5 py-1.5 md:px-10 lg:px-20">
	<div class="flex items-center gap-2">
		<a href="/" class="self-center">
			<img src={logo} alt="Superteam" />
		</a>
		<h2 class="mb-3">Mobile</h2>
	</div>

	<div class="flex-grow hidden md:flex md:items-center md:justify-center z-30">
		<nav>
			<ul class="flex items-center justify-center gap-4 border px-8 py-3 rounded-3xl border-slate-600 text-white/50">
				{#each navItems as item}
					<li>
						<a href={item.url} class:active={path === item.url} class="text-white/50">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="rounded-lg sm:rounded-2xl">
		<button class="explore-saga-btn text-xs md:text-base">Explore Saga</button>
	</div>
</header>

<style>
    .explore-saga-btn {
        background-image: radial-gradient(ellipse at top, #ffffff33  0%, #ffffff00  70%);
        color: #ffffff;
        border:  1px solid #ffffff33;
        padding:  8px  16px;
        border-radius:  8px;
        text-align: center;
        transition: background-color  0.2s, color  0.2s;
    }

    .explore-saga-btn:hover {
        background-image: radial-gradient(ellipse at top, #ffffff44  0%, #ffffff11  70%);
    }

    a {
        position: relative;
        transition: color  0.3s ease;
				padding-bottom: 14px;
    }

    a::after {
        content: '';
        position: absolute;
        left:  0;
        bottom:  0;
        width:  100%;
        height:  2px;
        background-color: #ffffff;
        opacity:  0;
        transition: opacity  0.3s ease-in, transform  0.3s ease;
        transform: translateY(100%);
				border-radius: 5px;
    }

    a.active::after {
        opacity:  1;
        transform: translateY(0);
				box-shadow: white 0px 0px 10px 0px;
    }

		.active{
			color: #ffffff;
		}

</style>
