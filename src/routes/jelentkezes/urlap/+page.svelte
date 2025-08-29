<script lang="ts">
	import services from '$lib/services.json';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	let parent = $state(false);

	let parentName = $state('');
	let studentName = $state('');
	let email = $state('');
	let serviceId = $state();
	let schoolType = $state();
	let message = $state('');

	let service = $derived(services.find((s) => s.id == serviceId));

	let subjects: string[] = $state([]);
	function subjectFormat(subject: string, level: string) {
		return `${subject} - ${level}`;
	}
	function toggleSubject(optionName: string, level: string) {
		let checked = subjects.includes(subjectFormat(optionName, level));
		subjects = subjects.filter((s) => !s.startsWith(optionName));
		if (!checked) {
			subjects.push(subjectFormat(optionName, level));
		}
	}
</script>

<svelte:head>
	<title>Jelentkezési űrlap</title>
</svelte:head>

<div class="p-4 pb-0 flex flex-col items-center gap-2 max-w-4xl">
	{#if form && form.received}
		<div role="alert" class="alert alert-success">
			<i class="fa-solid fa-check"></i>
			<span>
				A jelentkezésed sikeresen elküldve!
				{#if form.email}
					Ellenőrizd a visszaigazoló emailt a(z) <i>{form.email}</i> címen.
				{/if}
			</span>
		</div>
	{/if}
	{#if form && form.error}
		<div role="alert" class="alert alert-error w-fit">
			<i class="fa-solid fa-circle-exclamation"></i>
			<span>{form.error}</span>
		</div>
	{/if}
</div>

<form method="POST" class="w-full px-4 flex justify-center" style:view-transition-name="jelentkezes">
	<input type="text" hidden name="subjects" value={subjects} />
	{#if service}
		<input type="email" hidden name="service_email" value={service.email} />
	{/if}
	<fieldset
		class="fieldset bg-base-200 border border-base-content/15 shadow-sm rounded-box max-w-lg w-full p-4 pt-2 gap-0"
	>
		<legend class="fieldset-legend">Jelentkezés</legend>

		<label class="label">
			<span class="label-text">Szülőként jelentkezem</span>
			<input type="checkbox" bind:checked={parent} class="checkbox checkbox-sm" />
		</label>

		{#if parent}
			<label class="label mt-2 mb-1" for="parent_name">Szülő neve</label>
			<input
				type="text"
				name="parent_name"
				placeholder="Szülő neve"
				class="input w-full"
				bind:value={parentName}
				required
			/>
		{/if}
		<label class="label mt-2 mb-1" for="student_name">Diák neve</label>
		<input
			type="text"
			name="student_name"
			placeholder="Diák neve"
			class="input w-full"
			bind:value={studentName}
			required
		/>

		<label class="label mt-2 mb-1" for="email">Email</label>
		<input
			type="email"
			name="email"
			class="input w-full"
			placeholder="Email cím"
			bind:value={email}
			required
		/>

		<label class="label mt-2 mb-1" for="service_name">Szolgáltatás</label>
		<select
			class="select w-full"
			name="service_name"
			bind:value={serviceId}
			onchange={() => (subjects = [])}
			required
		>
			<option disabled selected value="">Szolgáltatások</option>
			{#each services as service}
				<option value={service.id}>{service.name}</option>
			{/each}
		</select>

		{#if service}
			{#if service.id == 'felveteli'}
				<label class="label mt-2 mb-1" for="school_type">Középiskola típusa</label>
				<select class="select w-full" name="school_type" bind:value={schoolType} required>
					<option disabled selected value="">Középiskola típusa</option>
					{#each service.options as option}
						<option value={option.name}>{option.name}</option>
					{/each}
				</select>
				{#if schoolType}
					<span class="label mt-2 mb-1">Tantárgyak</span>
					<div class="flex gap-2">
						{#each ['Matematika', 'Magyar nyelv'] as subject}
							<input
								type="checkbox"
								class="btn border border-base-content/15"
								aria-label={subject}
								value={subject}
								bind:group={subjects}
								required={subjects.length == 0}
							/>
						{/each}
					</div>
				{/if}
			{:else if service.id == 'erettsegi'}
				<div class="grid grid-cols-2 gap-x-2">
					{#each service.options as option}
						<div class="grid grid-cols-2 gap-x-2 pt-2">
							<label class="label col-span-2" for={option.name}>{option.name}</label>
							{#each ['Közép', 'Emelt'] as level}
								<input
									type="checkbox"
									class="btn border border-base-content/15"
									aria-label={level}
									checked={subjects.includes(subjectFormat(option.name, level))}
									onchange={() => toggleSubject(option.name, level)}
									required={subjects.length == 0}
								/>
							{/each}
						</div>
					{/each}
				</div>
			{:else if service.id == 'korrepetalas'}
				<span class="label mt-2 mb-1">Tantárgyak</span>
				<div class="grid grid-cols-2 gap-2">
					{#each service.options as option}
						<input
							type="checkbox"
							class="btn border border-base-content/15"
							aria-label={option.name}
							value={option.name}
							bind:group={subjects}
							required={subjects.length == 0}
						/>
					{/each}
				</div>
			{/if}
		{/if}

		<label class="label mt-2 mb-1" for="message">Üzenet</label>
		<textarea class="textarea w-full" name="message" placeholder="Üzenet" bind:value={message}
		></textarea>

		<input type="submit" class="btn btn-primary mt-4" value="Küldés"/>
	</fieldset>
</form>
