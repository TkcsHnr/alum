<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Jelentkezés</title>
</svelte:head>

<Container style="view-transition-name: jelentkezes;">
	<h1 class="text-2xl font-bold">Jelentkezés</h1>
	<p class="text-justify">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur accusamus debitis
		dolor, quia nobis possimus quis ratione explicabo obcaecati, esse, voluptas totam quidem
		similique. Provident consectetur pariatur vel ipsum excepturi, saepe a, aliquam iure veritatis
		dolore ad. Corrupti, animi.
		<a
			href="mailto:info@alumoktatas.hu"
			class="link link-hover link-primary inline-flex items-baseline gap-1"
		>
			<i class="fa-solid fa-envelope"></i>
			info@alumoktatas.hu
		</a>
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem odit amet
		accusantium incidunt error obcaecati animi tempora similique minima!
	</p>

	<a href="/jelentkezes/urlap" class="btn btn-lg btn-primary mt-8 py-6 w-full max-w-xs">
		Jelentkezési lap kitöltése
	</a>
</Container>
