<script lang="ts">
	import type { PageProps } from './$types';

	import TeacherCarousel from '$lib/components/TeacherCarousel.svelte';
	import BannerCarousel from '$lib/components/BannerCarousel.svelte';

	let { data }: PageProps = $props();
</script>

<BannerCarousel />
<TeacherCarousel />
