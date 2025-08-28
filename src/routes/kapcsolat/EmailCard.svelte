<script lang="ts">
	let { title, description, email } = $props();
</script>

<div class="card bg-base-200 border border-base-content/15 shadow-sm w-full max-w-md">
	<div class="card-body p-4">
		<h2 class="card-title">{title}</h2>
		<p>
			{#if description}
				{description}
			{:else}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus ad cumque
				blanditiis perferendis expedita alias nostrum enim possimus illo.
			{/if}
		</p>
		<div class="card-actions justify-end">
			<a class="btn btn-primary" href="mailto:{email}">{email}</a>
		</div>
	</div>
</div>
