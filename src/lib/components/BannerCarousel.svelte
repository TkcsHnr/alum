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
		{
			id: 'erettsegi',
			title: 'Érettségi felkészítés',
			description: 'blablabla',
			background: 'banner.jpeg'
		},
		{
			id: 'felveteli',
			title: 'Felvételi felkészítés',
			description: 'blablabla',
			background: 'banner.jpeg'
		},
		{
			id: 'oktatas',
			title: 'Online és személyes kurzusok',
			description: 'blablabla',
			background: 'banner.jpeg'
		},
		{
			id: 'tanarok',
			title: 'Lelkes egyetemista tanárok',
			description: 'blablabla',
			background: 'banner.jpeg'
		}
	];

	let carouselElement: HTMLDivElement;
	let autoScrollInterval: ReturnType<typeof setInterval>;
	const autoScrollDelay = 3000;
	let activeIndex = $state(0);

	function scrollToIndex(index: number) {
		activeIndex = index;
		const nextSlide = carouselElement.children[activeIndex] as HTMLElement;

		carouselElement.scrollTo({
			left: nextSlide.offsetLeft,
			behavior: 'smooth'
		});
	}

	function startAutoScroll() {
		autoScrollInterval = setInterval(() => {
			if (!carouselElement) return;

			let nextIndex = (activeIndex + 1) % slides.length;
			scrollToIndex(nextIndex);
		}, autoScrollDelay);
	}

	function resetAutoScroll() {
		clearInterval(autoScrollInterval);
		startAutoScroll();
	}

	let scrollTimeout: ReturnType<typeof setTimeout>;
	function updateActiveIndex() {
		if (!carouselElement) return;

		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			const slideWidth = carouselElement.scrollWidth / slides.length;
			activeIndex = Math.round(carouselElement.scrollLeft / slideWidth);
		}, 100); // 100ms after last scroll event
	}

	onMount(() => {
		startAutoScroll();

		return () => {
			clearInterval(autoScrollInterval);
		};
	});
</script>

<div
	class="flex flex-col items-center w-full lg:p-8 bg-base-200 border-b border-base-content/15 relative"
>
	<div
		class="carousel w-full max-w-5xl h-64 lg:rounded-box lg:h-full lg:aspect-[3/1]"
		bind:this={carouselElement}
		onscroll={() => {
			resetAutoScroll();
			updateActiveIndex();
		}}
	>
		{#each slides as slide, i (i)}
			<BannerSlide {...slide} />
		{/each}
	</div>

	<div class="flex gap-2 absolute bottom-3">
		{#each slides as _, i (i)}
			<button
				aria-label="{i}. slide"
				onclick={() => scrollToIndex(i)}
				class="rounded-full size-2 cursor-pointer {activeIndex == i
					? 'bg-base-content/100'
					: 'bg-base-content/25 hover:bg-base-content/50'}"
			></button>
		{/each}
	</div>
</div>
