<script lang="ts">
	/** @type {any} */
	export let data;
	const { posts } = data;

	const findMe = [
		{
			name: 'github',
			href: 'https://github.com/yehorovye'
		},
		{
			name: 'mail',
			href: 'mailto:yehorovye@envs.net'
		},
		{
			name: 'discord',
			href: 'https://discord.com/users/774288670605574145'
		}
	];
</script>

<svelte:head>
	<title>Elisiei Yehorovye</title>
</svelte:head>
<div class="flex h-screen flex-col gap-3">
	<div class="flex gap-2">
		<h1 class="text-2xl font-semibold">Elisiei Yehorov</h1>
		<h1 class="text-xl font-normal text-zinc-500 italic">~yehorovye</h1>
	</div>
	<div class="flex items-center gap-1">
		<p>Software developer from Minsk.</p>
		<img alt="Belarus" src="https://flagsapi.com/BY/flat/32.png" />
	</div>
	<p>
		Currently <em>working</em> at
		<a href="https://obiente.com" class="text-purple-300 underline">Obiente</a>
		as backend developer
	</p>
	<h1 class="text-xl">find me</h1>
	<ul class="flex flex-col gap-2">
		{#each findMe as social}
			<li
				class="flex items-center gap-2 duration-150 hover:text-purple-300 hover:italic hover:underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-3"
				>
					<path
						fill-rule="evenodd"
						d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>

				<a href={social.href}>
					{social.name}
				</a>
			</li>
		{/each}
	</ul>
	<h1 class="text-xl">blog posts</h1>
	<div class="grid grid-cols-1 gap-2">
		{#if posts}
			{#each posts as post}
				<a
					href={`/blog/${post.slug}`}
					class="flex cursor-pointer items-center justify-between gap-5 bg-zinc-900 p-3 duration-150 hover:scale-[1.02] hover:-rotate-1 hover:text-purple-200! hover:underline"
				>
					<div class="flex flex-col">
						<h3>{post.title}</h3>
						<p class="text-xs">
							{post.description}
						</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mx-auto size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</a>
			{/each}
		{/if}
	</div>
</div>
