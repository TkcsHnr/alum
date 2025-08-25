<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { services } = data;
</script>

<h1 class="text-2xl font-bold mb-4">Szolgáltatásaink</h1>
<div class="grid grid-cols-1 gap-4 max-w-4xl px-4">
	{#each services as service}
		<a
			href="/szolgaltatasaink/{service.id}"
			class="card group bg-base-200 border border-base-content/15 shadow-sm h-full hover:bg-base-300 hover:shadow-md hover:scale-[102.5%] transition-all cursor-pointer"
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
				<div class="card-actions justify-end hidden">
					<div class="btn btn-primary">Részletek</div>
				</div>
			</div>
		</a>
	{/each}
	<a href="/jelentkezes" class="btn btn-primary w-fit mx-auto btn-lg mt-4">Jelentkezés</a>
</div>
