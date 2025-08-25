<script lang="ts">
	import teachers from '$lib/teachers.json';
	import TeacherCard from './TeacherCard.svelte';

	let carouselElement: HTMLDivElement;
	const scrollAmount = 10;

	function scrollPrev() {
		carouselElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
	}

	function scrollNext() {
		carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
	}
</script>

<div class="flex flex-col items-center gap-2 w-full">
	<div
		class="indicator mt-4 w-full max-w-4xl flex justify-center [--rad:calc(var(--radius-box)+1.5rem)]"
	>
		<span class="indicator-item indicator-center badge badge-lg badge-primary">Tanáraink</span>
		<div
			class="absolute left-0 h-full w-[var(--rad)] z-10 rounded-l-[var(--rad)] bg-gradient-to-r from-base-300/50 to-transparent hidden lg:block"
		></div>
		<div
			class="carousel carousel-center w-full gap-6 bg-base-300 p-6 lg:rounded-[var(--rad)] relative"
			bind:this={carouselElement}
		>
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
			class="absolute right-0 h-full w-[var(--rad)] z-10 rounded-r-[var(--rad)] bg-gradient-to-r from-transparent to-base-300/50 hidden lg:block"
		></div>
	</div>

	<div class="join">
		<button class="btn join-item btn-square" aria-label="prev" onclick={scrollPrev}>
			<i class="fa-solid fa-arrow-left"></i>
		</button>
		<button class="btn join-item btn-square" aria-label="next" onclick={scrollNext}>
			<i class="fa-solid fa-arrow-right"></i>
		</button>
	</div>
</div>
