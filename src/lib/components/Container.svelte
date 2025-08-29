<script>
	let { children, classes = '', style = '' } = $props();
</script>

<div class="w-full max-w-4xl p-4 flex flex-col gap-2 items-center {classes}" {style}>
	{@render children?.()}
</div>
