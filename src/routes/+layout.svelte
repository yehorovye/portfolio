<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto w-full md:px-0 px-4 max-w-3xl py-5">
	{@render children()}
</main>
