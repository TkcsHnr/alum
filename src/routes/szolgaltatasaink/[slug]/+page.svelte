<script lang="ts">
	let { data } = $props();

	let { service } = data;
</script>

<svelte:head>
	<title>{service ? service.name : 'Szolgáltatásaink'}</title>
</svelte:head>

{#if service}
	<div class="max-w-4xl flex w-full mt-4 px-4">
		<a href="/szolgaltatasaink" class="btn btn-sm aspect-square min-w-0 w-auto" aria-label="back">
			<i class="fa-solid fa-arrow-left"></i>
		</a>
		<h1 class="text-2xl font-bold justify-self-center text-center grow">{service.name}</h1>
		<div class="aspect-square h-full"></div>
	</div>
	<div
		class="service grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-4xl"
		style:--service-div-id={service.id}
	>
		{#each service.options as option}
			<div class="card bg-base-200 border border-base-content/10 shadow-sm h-full">
				<div class="card-body p-4 gap-0">
					<h2 class="card-title text-left">{option.name}</h2>
					<p class="text-justify mt-2">
						<!-- {option.description} -->
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis illo saepe dolorem
						consectetur nisi corrupti doloribus! Fuga sint ullam consequuntur tempora similique labore
						voluptatibus, aliquid facilis sit inventore magni nesciunt, pariatur saepe, error ex exercitationem
						consectetur? Et, illo iure.
					</p>
				</div>
			</div>
		{/each}
	</div>
	<a
		href="/jelentkezes"
		class="btn btn-primary w-fit mx-auto btn-lg mt-4"
		style:view-transition-name="jelentkezes-gomb">Jelentkezés</a
	>
{/if}

<style>
	div.service {
		view-transition-name: var(--service-div-id);
	}
</style>
