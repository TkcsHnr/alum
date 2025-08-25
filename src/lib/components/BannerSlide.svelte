<script lang="ts">
	let { id, background = 'banner.jpeg', title = '', description = '' } = $props();
</script>

<div {id} class="carousel-item bg-base-200 w-full shrink-0 relative">
	<img src={background} alt="Background" class="w-full h-full object-cover" />
	<div class="absolute w-full h-full flex flex-col justify-end gap-4 p-8">
		{#if title}
			<h1 class="text-lg bg-primary/75 text-primary-content w-fit p-4">{title}</h1>
		{/if}

		{#if description}
			<h2
				class="text-base bg-secondary/75 text-secondary-content w-fit whitespace-normal wrap-break-word p-4"
			>
				{description}
			</h2>
		{/if}
	</div>
</div>
