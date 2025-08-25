<script>
	let { theme = '' } = $props();
</script>

<div
	class="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors"
    data-theme={theme}
>
	<div class="bg-base-content size-1 rounded-full"></div>
	<div class="bg-primary size-1 rounded-full"></div>
	<div class="bg-secondary size-1 rounded-full"></div>
	<div class="bg-accent size-1 rounded-full"></div>
</div>
