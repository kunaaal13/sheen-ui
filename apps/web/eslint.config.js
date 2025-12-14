import { config } from '@sheen/eslint-config/index.js';

export default [
	...config,
	{
		ignores: ['.svelte-kit/*']
	}
];
