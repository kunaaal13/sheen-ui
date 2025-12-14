<script lang="ts">
	import { Button } from '@sheen/ui';

	let count = $state(0);
</script>

<h1>Web</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button onclick={() => count++} class="bg-blue-500 text-white p-2 rounded-md">Click me</Button>

<p class="my-10">Count: {count}</p>
