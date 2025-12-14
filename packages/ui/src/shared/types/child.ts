import type { Snippet } from 'svelte';

export type WithChildren<T> = T & {
  children: Snippet;
};

export type WithoutChildren<T> = Omit<T, 'children'> & {
  children?: never;
};
