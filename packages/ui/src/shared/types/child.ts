import type { Snippet } from 'svelte';
import type { ReadableBoxedValues, WritableBoxedValues } from './box';

/**
 * Constructs a new type by adding properties to type 'T'.
 *
 * @template T - The base object type to which properties will be added.
 * @example
 * type Result = WithChildren<{ a: number; }>;
 * // Result type will be { a: number; children: Snippet; }
 */
export type WithChildren<T = object> = T & {
  children: Snippet;
};

/**
 * Constructs a new type by omitting children from type 'T'.
 *
 * @template T - The base object type to which properties will be ommited
 * @example
 * type Result = WithChildren<{ a: number; }>;
 * // Result type will be { a: number; children?: never; }
 */
export type WithoutChildren<T = object> = Omit<T, 'children'> & {
  children?: never;
};

/**
 * Constructs a new type by omitting properties from type
 * 'T' that exist in type 'U'.
 *
 * @template T - The base object type from which properties will be omitted.
 * @template U - The object type whose properties will be omitted from 'T'.
 * @example
 * type Result = Without<{ a: number; b: string; }, { b: string; }>;
 * // Result type will be { a: number; }
 */
export type Without<T extends object, U extends object> = Omit<T, keyof U>;

/**
 * Constructs a new type by adding properties to `T`.
 * Adds ReadOnly `id` and Writable `ref` properties.
 *
 */
export type WithRefOpts<T = object> = T &
  ReadableBoxedValues<{ id: string }> &
  WritableBoxedValues<{ ref: HTMLElement | null }>;
