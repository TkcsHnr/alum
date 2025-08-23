<script>
	let { children, classes = "" } = $props();
</script>

<div class="w-full max-w-4xl px-4 flex flex-col {classes}">
	{@render children?.()}
</div>
