<script lang="ts">
	import BannerSlide from './BannerSlide.svelte';
	import { onMount } from 'svelte';

	const slides = [
		{
			id: 'osszefoglalo',
			title: 'Alum Oktatási Központ',
			description:
				'Érettségi felkészítés, Középiskolai felkészítés, Korrepetálás, Online és személyes kurzusok, Lelkes egyetemista tanárok',
			background: 'banner.jpeg'
		},
		{ id: 'erettsegi', title: 'Érettségi felkészítés', description: 'blablabla', background: 'banner.jpeg' },
		{ id: 'felveteli', title: 'Felvételi felkészítés', description: 'blablabla', background: 'banner.jpeg' },
		{ id: 'oktatas', title: 'Online és személyes kurzusok', description: 'blablabla', background: 'banner.jpeg' },
		{ id: 'tanarok', title: 'Lelkes egyetemista tanárok', description: 'blablabla', background: 'banner.jpeg' }
	];

	let carouselElement: HTMLDivElement;
	const scrollAmount = 10;

	let autoScrollInterval: number;
	const autoScrollDelay = 3000;
	let activeIndex = 0;
	function startAutoScroll() {
		autoScrollInterval = setInterval(() => {
			if (!carouselElement) return;

			const maxScrollLeft = carouselElement.scrollWidth - carouselElement.clientWidth;

			if (carouselElement.scrollLeft + scrollAmount >= maxScrollLeft) {
				carouselElement.scrollTo({ left: 0, behavior: 'smooth' });
			} else {
				carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
			}
		}, autoScrollDelay);
	}
	function resetAutoScroll() {
		clearInterval(autoScrollInterval);
		startAutoScroll();
	}
	function updateActiveIndex() {
		if (!carouselElement) return;
		const slideWidth = carouselElement.scrollWidth / slides.length;
		activeIndex = Math.round(carouselElement.scrollLeft / slideWidth);
	}

	onMount(() => {
		startAutoScroll();

		return () => {
			clearInterval(autoScrollInterval);
		};
	});
</script>

<div class="flex flex-col items-center w-full lg:p-8 bg-base-200 border-b border-base-content/15 relative">
	<div
		class="carousel w-full max-w-5xl h-64 lg:rounded-box lg:h-full lg:aspect-[3/1]"
		bind:this={carouselElement}
		onscroll={() => {resetAutoScroll(); updateActiveIndex();}}
	>
		{#each slides as slide, i (i)}
			<BannerSlide {...slide} />
		{/each}
	</div>

	<div class="flex gap-2 absolute bottom-3">
		{#each slides as _, i (i)}
			<span class="rounded-full size-2 {activeIndex == i ? 'bg-base-content/50' : 'bg-base-content/25'}"></span>
		{/each}
	</div>
</div>
