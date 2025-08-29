<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { services } = data;
</script>

<svelte:head>
	<title>Szolgáltatásaink</title>
</svelte:head>

<h1 class="text-2xl font-bold mt-4">Szolgáltatásaink</h1>
<div class="grid grid-cols-1 gap-4 max-w-4xl px-4">
	{#each services as service}
		<a
			href="/szolgaltatasaink/{service.id}"
			class="service card group h-full bg-base-200 hover:bg-base-300 shadow-sm border border-base-content/10 hover:scale-[102.5%] transition-all"
			style:--service-btn-id={service.id}
		>
			<div class="card-body p-4">
				<h2 class="card-title text-left">
					{service.name}
					<i
						class="fa-solid fa-circle-info ml-auto text-base transition-all opacity-0 group-hover:opacity-100"
					></i>
				</h2>
				<p class="text-justify">
					<!-- {service.description} -->
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo necessitatibus porro, eius
					id esse doloremque eaque, exercitationem, tenetur possimus est veritatis distinctio suscipit
					quasi molestias ut dolores. Amet, sed? Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusantium, fuga et minima odit maiores cumque voluptates culpa optio quo aliquam?
				</p>
			</div>
		</a>
	{/each}
	<a
		href="/jelentkezes"
		class="btn btn-primary w-fit mx-auto btn-lg mt-4"
		style:view-transition-name="jelentkezes-gomb">Jelentkezés</a
	>
</div>

<style>
	.service {
		view-transition-name: var(--service-btn-id);
	}
</style>
