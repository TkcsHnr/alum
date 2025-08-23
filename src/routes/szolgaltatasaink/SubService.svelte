<script lang="ts">
	let { name, description, email, email_description } = $props();
</script>

<div class="card bg-base-200 shadow-sm">
	<div class="card-body p-4">
		<h2 class="card-title text-left">{name}</h2>
		<p>
			<!-- {description} -->
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eum quibusdam? Tempora impedit
			iste deleniti amet ratione similique recusandae praesentium, sed minus voluptates doloribus dolorem
			iure eos doloremque, natus exercitationem.
		</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary btn-sm">Jelentkezés</button>
		</div>
	</div>
</div>
