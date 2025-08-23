<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Container>
	<h1 class="text-2xl font-bold mb-4 mx-auto">Kapcsolat</h1>
</Container>
