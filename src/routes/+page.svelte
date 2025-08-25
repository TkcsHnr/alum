<script lang="ts">
	import TeacherCard from '$lib/components/TeacherCard.svelte';
	import type { PageProps } from './$types';

	import teachers from '$lib/teachers.json';
	import TeacherCarousel from '$lib/components/TeacherCarousel.svelte';

	let { data }: PageProps = $props();
</script>


<TeacherCarousel />

