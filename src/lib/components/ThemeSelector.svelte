<script lang="ts">
	import ThemeTile from './ThemeTile.svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

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

	const getPrimaryColor = () => {
		return getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#eee';
	};

	const updateFavicon = () => {
		const color = getPrimaryColor();

		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="${color}"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"/></svg>`;

		const url = `data:image/svg+xml;base64,${btoa(svg)}`;

		let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}
		link.href = url;
	};

	onMount(() => {
		themeChange(false);
		updateFavicon();

		const observer = new MutationObserver(() => updateFavicon());
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => observer.disconnect();
	});
</script>

<div title="Change Theme" class="dropdown dropdown-end block">
	<div
		tabindex="0"
		role="button"
		class="btn group btn-sm gap-1.5 p-1.5 btn-ghost"
		aria-label="Change Theme"
	>
		<ThemeTile />
		<i class="fa-solid fa-angle-down text-xs opacity-60 !hidden sm:!inline-block"></i>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		tabindex="0"
		aria-label="Theme selection dropdown"
		class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto overflow-x-hidden border border-white/5 shadow-2xl outline-1 outline-black/5 mt-12"
	>
		<ul class="menu w-56">
			<li class="menu-title text-xs">Téma</li>
			{#each daisyThemes as theme}
				<li>
					<button class="gap-3 px-2" data-set-theme={theme} data-act-class="[&_i]:!visible">
						<ThemeTile {theme} />
						<div class="w-32 truncate">{theme}</div>
						<i class="invisible fa-solid fa-check"></i>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
