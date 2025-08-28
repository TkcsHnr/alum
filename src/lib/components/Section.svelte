<script lang="ts">
	let { title, description = '', href = '', image, reverse = false } = $props();
</script>

<div class="grid md:grid-cols-2 md:gap-8 w-full">
	<img
		class="bg-base-200 aspect-[16/9] hidden md:block rounded-box"
		src={image}
		alt={title}
		class:order-1={reverse}
	/>
	<div class="flex flex-col gap-4 justify-center relative p-4 md:p-0">
		<img
			src={image}
			alt={title}
			class="absolute w-full h-full left-0 top-0 object-cover md:hidden -z-10 opacity-25 rounded-box"
		/>
		<h2 class="font-bold text-3xl">{title}</h2>
		{#if description}
			<p>{description}</p>
		{:else}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam nulla eius
				eaque voluptatibus temporibus accusantium autem excepturi!
			</p>
		{/if}
		{#if href}
			<a {href} class="btn btn-wide btn-primary ml-auto md:ml-0">További információ</a>
		{/if}
	</div>
</div>
