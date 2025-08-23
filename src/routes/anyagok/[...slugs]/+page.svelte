<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	let { currentResource, breadcrumbs } = $derived(data);

	let basePath = $derived(page.url.pathname);
</script>

<div class="px-4 max-w-4xl w-full flex flex-col gap-4 h-full">
	<div class="breadcrumbs hidden sm:flex items-end pb-4 pt-0">
		<ul class={breadcrumbs.length == 1 ? 'mx-auto' : 'mx-auto'}>
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
					<a
						href={item.url}
						target="_blank"
						class="btn btn-lg grow join-item hover:scale-105 transition-all"
					>
						{item.name}
					</a>
				{:else if item.urls}
					<a
						href={item.urls[0]}
						target="_blank"
						class="btn btn-lg grow join-item hover:scale-105 hover:rounded-b-sm transition-all"
					>
						{item.name}
						<span>- tavasz</span>
					</a>
					<a
						href={item.urls[1]}
						target="_blank"
						class="btn btn-lg grow join-item hover:scale-105 hover:rounded-t-sm transition-all"
					>
						{item.name}
						<span>- ősz</span>
					</a>
				{:else}
					<a
						href="{basePath}/{item.id}"
						class="btn btn-lg grow join-item hover:scale-105 transition-all"
					>
						{item.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
