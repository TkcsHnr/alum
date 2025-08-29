<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';
	import EmailCard from './EmailCard.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Kapcsolat</title>
</svelte:head>

<Container>
	<h1 class="text-2xl font-bold mb-4 mx-auto">Kapcsolat</h1>

	<div class="grid md:grid-cols-2 gap-4">
		<EmailCard title="Általános információk" description="" email="info@alumoktatas.hu" />
		<EmailCard title="Felvételi" description="" email="felveteli@alumoktatas.hu" />
		<EmailCard title="Érettségi" description="" email="erettsegi@alumoktatas.hu" />
		<EmailCard title="Korrepetálás" description="" email="korrepetalas@alumoktatas.hu" />
	</div>
</Container>
