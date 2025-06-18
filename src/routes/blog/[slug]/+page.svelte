<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	const component = data.component;
	const { title, description, date } = data.frontmatter;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<div class="flex flex-col gap-4">
	<a href="/" class="flex items-center gap-2 underline">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
		Go back
	</a>
	<h1 class="text-3xl">{title}</h1>
	<p class="text-sm text-zinc-300 italic">{description}</p>
	<p class="flex items-center gap-2 text-zinc-300">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
			<path
				fill-rule="evenodd"
				d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
				clip-rule="evenodd"
			/>
		</svg>
		{date.split('T')[0]}
	</p>
	<article class="prose prose-invert prose-lg">
		<svelte:component this={component} />
	</article>
</div>
