<script lang="ts">
	import type { PageProps } from './$types';

	import TeacherCarousel from '$lib/components/TeacherCarousel.svelte';
	import BannerCarousel from '$lib/components/BannerCarousel.svelte';
	import Section from '$lib/components/Section.svelte';

	let { data }: PageProps = $props();
</script>

<BannerCarousel />

<div class="grid gap-4 md:gap-8 w-full max-w-5xl p-4 pt-0 md:pt-4">
	<Section title="Rólunk" href="/rolunk" image="placeholder.jpg" reverse />
	<Section
		title="Szolgáltatásaink"
		href="/szolgaltatasaink"
		image="placeholder.jpg"
	/>
	<Section title="Online oktatás" image="placeholder.jpg" reverse />
	<Section title="Személyes oktatás" image="placeholder.jpg" />

	<Section
		title="Jelentkezés"
		href="/jelentkezes"
		image="placeholder.jpg"
		reverse
	/>
</div>

<TeacherCarousel />

<p class="p-4 pb-0 text-lg">
	<b>Kérdés esetén</b> keressen minket bizalommal az
	<a href="mailto:info@alumoktatas.hu" class="link link-hover link-primary">info@alumoktatas.hu</a>
	email címen!
</p>
