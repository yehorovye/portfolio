<script lang="ts">
	/** @type {any} */
	export let data;
	const { posts, repos } = data;

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
	<div
		class="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text font-mono text-xs leading-none text-transparent md:text-lg"
	>
		<pre>
    _________      _      _    __  __     __
   / ____/ (_)____(_)__  (_)   \ \/ /__  / /_  ____  _________ _   __
  / __/ / / / ___/ / _ \/ /     \  / _ \/ __ \/ __ \/ ___/ __ \ | / /
 / /___/ / (__  ) /  __/ /      / /  __/ / / / /_/ / /  / /_/ / |/ /
/_____/_/_/____/_/\___/_/      /_/\___/_/ /_/\____/_/   \____/|___/
  </pre>
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
	<p class="text-sm font-thin text-amber-400 italic">
		This is a website of someone who is not brainwashed. Since you are brainwashed (despite thinking
		you are not), everything written here will be in 100% conflict with everything you have ever
		learned or thought was just plain, unquestionable fact. Read on only if you can bear full
		cognitive dissonance, otherwise it's advised for you to leave.
	</p>
	<div class="grid grid-cols-1 gap-2">
		{#if posts}
			{#each posts as post}
				<a
					href={`/blog/${post.slug}`}
					class="flex cursor-pointer items-center justify-between gap-5 bg-zinc-900 p-3 duration-150 hover:scale-[1.02] hover:-rotate-[0.5deg] hover:text-purple-200! hover:underline"
				>
					<div class="flex flex-col">
						<h3>{post.title}</h3>
						<p class="max-w-md truncate text-xs">
							{post.description}
						</p>
					</div>
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
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</a>
			{/each}
		{/if}
	</div>
	<h1 class="text-xl">popular repos</h1>
	<div class="grid grid-cols-1 gap-2">
		{#if repos}
			{#each repos as repo}
				<a
					href={`https://github.com/${repo.repo}`}
					class="flex cursor-pointer items-center justify-between gap-5 bg-zinc-900 p-3 duration-150 hover:scale-[1.02] hover:-rotate-[0.5deg] hover:text-purple-200! hover:underline"
				>
					<div class="flex flex-col">
						<h3>{repo.name}</h3>
						<p class="max-w-md truncate text-xs">
							{repo.description}
						</p>
					</div>
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
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</a>
			{/each}
		{/if}
	</div>
	<div class="flex items-center justify-between py-5">
		<p
			class="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
		>
			Elisiei Yehorovye
		</p>
		<p class=" italic">this website does not rely in javascript</p>
	</div>
</div>
