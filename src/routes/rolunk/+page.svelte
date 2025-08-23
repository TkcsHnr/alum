<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import TeacherCarousel from '$lib/components/TeacherCarousel.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1 class="text-2xl font-bold">Bemutatkozás</h1>
<p class="text-justify max-w-4xl px-4">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste atque cupiditate assumenda ea?
	Ad fugiat laboriosam ea voluptas doloremque dicta amet placeat expedita accusamus ratione suscipit
	in animi dolores consectetur nostrum, at laborum iste et ipsa officia aliquam voluptates voluptate
	non? Nisi eius quis, cumque temporibus voluptates a fugiat enim accusamus nesciunt laborum nihil
	ipsam, accusantium perferendis at. Quisquam omnis nemo sequi expedita ab voluptates at voluptate
	provident? Ullam et placeat optio expedita maiores ab voluptatibus similique modi ipsa iure
	commodi eveniet eligendi debitis, nemo obcaecati tenetur! Recusandae tempora veniam unde eum rerum
	dicta perferendis error sequi.
</p>

<TeacherCarousel />
