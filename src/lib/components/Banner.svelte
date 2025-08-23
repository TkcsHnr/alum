<script>
	let { children } = $props();
</script>

<div class="w-full px-4 py-16 bg-base-200 flex justify-center items-center">
	{@render children?.()}
</div>
