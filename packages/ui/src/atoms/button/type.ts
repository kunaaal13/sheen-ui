import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

/**
 * Button Component
 * A component that can be rendered as a button element or a link element.
 */

export type OmitAttributes<T> = Omit<T, 'type' | 'href'> & {
  ref?: HTMLElement | null;
};

export type ButtonElement = OmitAttributes<HTMLButtonAttributes> & {
  type?: HTMLButtonAttributes['type'];
  href?: never;
  disabled?: boolean;
};

export type AnchorElement = OmitAttributes<HTMLAnchorAttributes> & {
  href: HTMLAnchorAttributes['href'];
  type?: never;
  disabled?: boolean;
};

export type ButtonProps = ButtonElement | AnchorElement;
