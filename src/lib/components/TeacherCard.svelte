<script lang="ts">
	let { name, imageUrl, subjects, description } = $props();

	let modal: HTMLDialogElement;
</script>

<button
	tabindex="0"
	onclick={(e) => {
		e.currentTarget.blur();
		modal.showModal();
	}}
	class="carousel-item cursor-pointer card bg-base-100 hover:bg-base-200 w-60 shadow-sm outline-error hover:shadow-md transition-all hover:scale-105 group"
>
	<figure class="px-6 pt-6">
		<img
			src={imageUrl}
			alt={name}
			class="rounded-full aspect-square object-cover group-hover:grayscale transition-all"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{name}
			<i
				class="fa-solid fa-circle-info ml-auto text-base transition-all opacity-0 group-hover:opacity-100"
			></i>
		</h2>
		<div class="flex gap-2">
			{#each subjects as subject}
				<span class="badge badge-outline">{subject}</span>
			{/each}
		</div>
	</div>
</button>

<dialog bind:this={modal} class="modal">
	<div class="modal-box max-w-3xl gap-2">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>

		<div class="flex flex-wrap gap-2 items-baseline mr-4">
			<h2 class="text-lg font-bold">
				{name}
			</h2>
			<div class="flex gap-2">
				{#each subjects as subject}
					<span class="badge badge-outline">{subject}</span>
				{/each}
			</div>
		</div>
		<p class="mt-2 text-justify">{description}</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
