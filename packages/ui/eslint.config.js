import { config } from '@sheen-ui/eslint-config/index.js';

export default [
  ...config,
  {
    ignores: ['.svelte-kit/**', 'dist/**']
  }
];
