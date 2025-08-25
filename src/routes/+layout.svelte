<script lang="ts">
	import type { LayoutProps } from './$types';

	import { page } from '$app/state';

	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import ThemeChange from '$lib/components/ThemeChange.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children }: LayoutProps = $props();

	let drawerOpened = $state(false);
	function closeDrawer() {
		drawerOpened = false;
	}

	let routes = [
		{ path: '/', name: 'Kezdőlap' },
		{ path: '/rolunk', name: 'Rólunk' },
		{ path: '/szolgaltatasaink', name: 'Szolgáltatásaink' },
		{ path: '/jelentkezes', name: 'Jelentkezés' },
		{ path: '/anyagok', name: 'Anyagok' },
		{ path: '/kapcsolat', name: 'Kapcsolat' }
	];
</script>

<div class="drawer h-full">
	<input bind:checked={drawerOpened} id="drawer-menu" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-primary text-primary-content w-full">
			<label for="drawer-menu" aria-label="open sidebar" class="btn btn-square btn-ghost lg:hidden">
				<i class="fa-solid fa-bars text-xl"></i>
			</label>
			<a class="btn btn-ghost text-lg sm:text-2xl mx-auto lg:m-0" href="/">Alum Oktatási Központ</a>
			<ul class="hidden lg:flex menu menu-horizontal ml-auto">
				<!-- Navbar menu content here -->
				{#each routes as route}
					<li>
						<a
							href={route.path}
							class:font-bold={page.url.pathname === route.path ||
								page.url.pathname.startsWith(route.path + '/')}>{route.name}</a
						>
					</li>
				{/each}
			</ul>

			<ThemeChange />
		</div>

		<!-- Page content here -->
		<main class="flex flex-col items-center py-8 gap-4 h-full grow">
			{@render children()}
		</main>

		<Footer />
	</div>
	<div class="drawer-side">
		<label for="drawer-menu" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu menu-lg bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			{#each routes as route}
				<li>
					<a
						href={route.path}
						class:font-bold={page.url.pathname == route.path}
						onclick={closeDrawer}
					>
						{route.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
