<script lang="ts">
	import TeacherCard from '$lib/components/TeacherCard.svelte';
	import type { PageProps } from './$types';

	import teachers from '$lib/teachers.json';
	import TeacherCarousel from '$lib/components/TeacherCarousel.svelte';
	import Banner from '$lib/components/Banner.svelte';

	let { data }: PageProps = $props();
</script>


<TeacherCarousel />

