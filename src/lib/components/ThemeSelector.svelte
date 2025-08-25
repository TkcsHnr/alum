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

<div class="dropdown dropdown-end block" title="Change theme">
	<div tabindex="0" role="button" class="btn group btn-ghost btn-sm px-1.5 gap-1.5" aria-label="Change theme">
		<ThemeTile />
		<i class="fa-solid fa-angle-down"></i>
	</div>
	<div
		class="dropdown-content h-[30.5rem] max-h-[calc(100vh-8.6rem)] mt-16 bg-base-200 top-px rounded-box z-1 p-2 shadow-sm overflow-y-auto overflow-x-hidden"
	>
		<ul class="menu w-56">
			<li class="menu-title text-xs">Téma</li>
			{#each daisyThemes as theme}
				<li>
					<button data-set-theme={theme}>
						<ThemeTile {theme} />
						<span>{theme}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
<!-- 
<li>
	<button class="gap-3 px-2" data-set-theme="luxury" data-act-class="[&amp;_svg]:visible"
		><div
			data-theme="luxury"
			class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
		>
			<div class="bg-base-content size-1 rounded-full"></div>
			<div class="bg-primary size-1 rounded-full"></div>
			<div class="bg-secondary size-1 rounded-full"></div>
			<div class="bg-accent size-1 rounded-full"></div>
		</div>
		<div class="w-32 truncate">luxury</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="invisible h-3 w-3 shrink-0"
			><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg
		></button
	>
</li> -->
