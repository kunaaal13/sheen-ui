import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@sheen/ui': path.resolve(__dirname, '../../packages/ui/src')
		},
		conditions: ['svelte', 'import', 'module', 'browser', 'default']
	},
	server: {
		fs: {
			allow: ['..']
		},
		port: 3000
	},
	optimizeDeps: {
		include: ['@sheen/ui']
	}
});
