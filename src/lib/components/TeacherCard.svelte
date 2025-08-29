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
	class="carousel-item cursor-pointer card bg-base-100 shadow-sm border border-base-content/10 hover:bg-base-200 w-60 transition-all hover:scale-105 group"
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
	<div class="modal-box max-w-3xl gap-2 p-4">
		<div class="flex gap-2">
			<div class="flex flex-wrap gap-2 items-baseline grow">
				<h2 class="text-lg font-bold">
					{name}
				</h2>
				{#each subjects as subject}
					<span class="badge badge-outline">{subject}</span>
				{/each}
			</div>
			<form method="dialog">
				<button class="btn btn-sm btn-square" aria-label="close">
					<i class="fa-solid fa-xmark"></i>
				</button>
			</form>
		</div>
		<p class="mt-2 text-justify">{description}</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
