<script>
	import ThemeTile from './ThemeTile.svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});

	const daisyThemes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
</script>

<div title="Change Theme" class="dropdown dropdown-end block">
	<div
		tabindex="0"
		role="button"
		class="btn group btn-sm gap-1.5 px-1.5 btn-ghost"
		aria-label="Change Theme"
	>
		<ThemeTile />
		<svg
			width="12px"
			height="12px"
			class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
		>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- borrowed from daisyui page -->
	<div
		tabindex="0"
		class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto overflow-x-hidden border border-white/5 shadow-2xl outline-1 outline-black/5 mt-16"
	>
		<ul class="menu w-56">
			<li class="menu-title text-xs">Téma</li>
			{#each daisyThemes as theme}
				<li>
					<button class="gap-3 px-2" data-set-theme={theme} data-act-class="[&amp;_svg]:visible">
						<ThemeTile {theme} />
						<div class="w-32 truncate">{theme}</div>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
