<script lang="ts">
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { data } = $props();

	let { currentResource, breadcrumbs } = $derived(data);

	let basePath = $derived(page.url.pathname);

	let classList = 'btn btn-lg grow join-item';

	function viewTransitionName(words: string[]): string {
		return words
			.join('-')
			.normalize('NFD') // decompose accents
			.replace(/[\u0300-\u036f]/g, '') // strip combining marks
			.toLowerCase()
			.replace(/[^a-z0-9_-]/g, '-') // allow only letters, numbers, _, -
			.replace(/-+/g, '-') // collapse multiple hyphens
			.replace(/^-|-$/g, ''); // trim leading/trailing hyphens
	}

	function getLevel(path: string) {
		return path.split('/').filter(Boolean).length;
	}

	let transitionLevel = $state(1);
	beforeNavigate(({ from, to, cancel }) => {
		const fromLevel = getLevel(from?.url.pathname || '');
		const toLevel = getLevel(to?.url.pathname || '');

		if ((fromLevel == 2 && toLevel == 3) || (fromLevel == 3 && toLevel == 2)) {
			transitionLevel = 2;
		} else {
			transitionLevel = 1;
		}
	});
</script>

<svelte:head>
	<title>Anyagok</title>
</svelte:head>

<div class="px-4 max-w-4xl w-full flex flex-col gap-2 h-full">
	<div class="breadcrumbs pt-4 w-fit mx-auto">
		<ul>
			{#each breadcrumbs as r, i}
				<li>
					<a
						href={'/' +
							breadcrumbs
								.slice(0, i + 1)
								.map((r) => r.id)
								.join('/')}
						class:text-2xl={breadcrumbs.length == 1}
						class:font-bold={i == breadcrumbs.length - 1}
					>
						{r.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<ul
		class="resources grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
		style:--tr-parent-name={viewTransitionName(breadcrumbs.map((b) => b.name))}
	>
		{#each currentResource.children?.toReversed() || [] as item}
			<li class="join join-vertical h-full aspect-video">
				{#if item.url}
					<a href={item.url} target="_blank" class="{classList} btn-primary btn-soft">
						{item.name}
					</a>
				{:else if item.urls}
					<a href={item.urls[0]} target="_blank" class="{classList} btn-primary btn-soft">
						{item.name}
						<span>- tavasz</span>
					</a>
					<a href={item.urls[1]} target="_blank" class="{classList} btn-secondary btn-soft">
						{item.name}
						<span>- ősz</span>
					</a>
				{:else}
					<a
						href="{basePath}/{item.id}"
						class={classList}
						class:category={breadcrumbs.length == transitionLevel}
						style:--tr-child-name={viewTransitionName([
							...breadcrumbs.map((b) => b.name),
							item.name as string
						])}
					>
						{item.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	ul.resources {
		view-transition-name: var(--tr-parent-name);
	}
	ul.resources li a.category {
		view-transition-name: var(--tr-child-name);
	}
</style>
