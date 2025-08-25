<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Container>
	<h1 class="text-2xl font-bold mb-4 mx-auto">Jelentkezés</h1>
	<p class="text-justify">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur accusamus debitis
		dolor, quia nobis possimus quis ratione explicabo obcaecati, esse, voluptas totam quidem
		similique. Provident consectetur pariatur vel ipsum excepturi, saepe a, aliquam iure veritatis
		dolore ad. Corrupti, animi.
		<br />
		<i class="fa-solid fa-envelope"></i>
		<a href="mailto:info@alum.hu" class="link link-info">info@alum.hu</a>
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem odit amet
		accusantium incidunt error obcaecati animi tempora similique minima!
	</p>

	<a href="/jelentkezes/urlap" class="btn btn-lg btn-primary mt-8 py-6 w-full max-w-xs mx-auto"
		>Jelentkezési lap kitöltése</a
	>
</Container>


