<script>
	import teachers from '$lib/teachers.json';
	import TeacherCard from './TeacherCard.svelte';
</script>

<div class="indicator mt-4 w-full max-w-6xl flex justify-center">
	<span class="indicator-item indicator-center badge badge-lg badge-info">Tanáraink</span>
	<div
		class="absolute left-0 h-full w-6 z-10 rounded-l-3xl bg-gradient-to-r from-base-300 to-transparent hidden lg:block"
	></div>
	<div class="carousel carousel-center gap-6 bg-base-300 p-6 lg:rounded-3xl relative">
		{#each teachers as teacher}
			<TeacherCard
				name={teacher.name}
				imageUrl={teacher.imageUrl}
				subjects={teacher.subjects}
				description={teacher.description}
			/>
		{/each}
	</div>
	<div
		class="absolute right-0 h-full w-6 z-10 rounded-r-3xl bg-gradient-to-r from-transparent to-base-300 hidden lg:block"
	></div>
</div>

<div class="join">
	<button class="btn join-item btn-square" aria-label="prev">
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	<button class="btn join-item btn-square" aria-label="next">
		<i class="fa-solid fa-arrow-right"></i>
	</button>
</div>
