<script lang="ts">
	let { data } = $props();

	let { service } = data;
</script>

{#if service}
	<div class="max-w-4xl flex justify-center relative w-full">
		<h1 class="text-2xl font-bold mb-4">{service.title}</h1>
	<a href="/szolgaltatasaink" class="btn btn-square absolute left-4" aria-label="back">
		<i class="fa-solid fa-arrow-left"></i>
	</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-4xl">
		{#each service.items as item}
			<div class="card bg-base-200 shadow-sm">
				<div class="card-body p-4 gap-0">
					<h2 class="card-title text-left">{item.title}</h2>
					<p class="text-justify mt-2">
						<!-- {item.description} -->
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis illo saepe dolorem
						consectetur nisi corrupti doloribus! Fuga sint ullam consequuntur tempora similique labore
						voluptatibus, aliquid facilis sit inventore magni nesciunt, pariatur saepe, error ex exercitationem
						consectetur? Et, illo iure.
					</p>
					<!-- <div class="divider mb-2">Jelentkezés</div>
					<span>
						<i class="fa-solid fa-envelope"></i>
						<a href="mailto:{item.email}" class="link link-info">{item.email}</a>
					</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore excepturi.</p> -->
				</div>
			</div>
		{/each}
	</div>
	<a href="/jelentkezes" class="btn btn-info w-fit mx-auto btn-lg mt-4">Jelentkezés</a>
{/if}
