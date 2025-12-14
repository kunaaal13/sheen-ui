<script lang="ts">
  import type { ButtonProps } from './type';

  let {
    children,
    href,
    type,
    ref = $bindable(null),
    disabled,
    ...restProps
  }: ButtonProps = $props();
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  data-button-root
  data-button-variant={href ? 'link' : 'default'}
  bind:this={ref}
  type={href ? undefined : type}
  disabled={href ? undefined : disabled}
  aria-disabled={href ? undefined : disabled}
  role={href && !disabled ? 'link' : undefined}
  href={href && !disabled ? href : undefined}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
