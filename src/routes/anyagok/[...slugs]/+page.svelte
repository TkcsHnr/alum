<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	let { currentResource, breadcrumbs } = $derived(data);

	let basePath = $derived(page.url.pathname);

	let classList = 'btn btn-lg grow join-item';
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
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each currentResource.children || [] as item}
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
					<a href="{basePath}/{item.id}" class={classList}>
						{item.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
