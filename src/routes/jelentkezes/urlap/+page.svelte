<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let parent = $state(false);
</script>

<div class="flex flex-col gap-2 px-4 w-full max-w-lg">
	<label class="label cursor-pointer ml-auto ">
			<span class="label-text">Szülőként jelentkezem</span>
			<input type="checkbox" bind:checked={parent} class="checkbox checkbox-sm" />
		</label>

	{#if parent}
		<input type="text" placeholder="Szülő neve" class="input w-full" />
		<input type="text" placeholder="Diák neve" class="input w-full" />
	{:else}
		<input type="text" placeholder="Teljes név" class="input w-full" />
	{/if}

	<input type="email" placeholder="Email cím" class="input w-full" />

	<select class="select w-full">
		<option disabled selected>Kategória</option>
		<option>Középiskolai felvételi</option>
		<option>Érettségi</option>
		<option>Korrepetálás</option>
	</select>

	<select class="select w-full" disabled>
		<option disabled selected></option>
	</select>

	<select class="select w-full" disabled>
		<option disabled selected></option>
	</select>
</div>
