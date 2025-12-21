import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
  HTMLImgAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLLiAttributes,
  HTMLSelectAttributes,
  HTMLTableAttributes,
  HTMLTdAttributes,
  HTMLThAttributes,
  SVGAttributes
} from 'svelte/elements';

/**
 * We override the `id` prop type to not allow it to be `null`. We rely on the
 * `id` heavily in the internals of Sheen UI for node references. We also override
 * children to allow for custom children snippet props. We extend `style` to allow
 * for either a `StyleProperties` object or a string of CSS properties.
 */
type SheenPrimitives<T> = Omit<T, 'style' | 'id' | 'children'> & { id?: string };

export type DivAttributes = HTMLAttributes<HTMLDivElement>;
export type SpanAttributes = HTMLAttributes<HTMLSpanElement>;
export type HeadingAttributes = HTMLAttributes<HTMLHeadingElement>;
export type UListAttributes = HTMLAttributes<HTMLUListElement>;
export type ElementAttributes = HTMLAttributes<HTMLElement>;
export type TableSectionAttributes = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowAttributes = HTMLAttributes<HTMLTableRowElement>;
export type SVGElementAttributes = SVGAttributes<SVGElement>;
export type SelectAttributes = HTMLSelectAttributes;

export type PrimitiveButtonAttributes = SheenPrimitives<HTMLButtonAttributes>;
export type PrimitiveDivAttributes = SheenPrimitives<DivAttributes>;
export type PrimitiveInputAttributes = SheenPrimitives<HTMLInputAttributes>;
export type PrimitiveSpanAttributes = SheenPrimitives<SpanAttributes>;
export type PrimitiveImgAttributes = SheenPrimitives<HTMLImgAttributes>;
export type PrimitiveHeadingAttributes = SheenPrimitives<HeadingAttributes>;
export type PrimitiveLabelAttributes = SheenPrimitives<HTMLLabelAttributes>;
export type PrimitiveSVGAttributes = SheenPrimitives<SVGElementAttributes>;
export type PrimitiveAnchorAttributes = SheenPrimitives<HTMLAnchorAttributes>;
export type PrimitiveLiAttributes = SheenPrimitives<HTMLLiAttributes>;
export type PrimitiveElementAttributes = SheenPrimitives<ElementAttributes>;
export type PrimitiveUListAttributes = SheenPrimitives<UListAttributes>;
export type PrimitiveTdAttributes = SheenPrimitives<HTMLTdAttributes>;
export type PrimitiveThAttributes = SheenPrimitives<HTMLThAttributes>;
export type PrimitiveTableAttributes = SheenPrimitives<HTMLTableAttributes>;
export type PrimitiveTbodyAttributes = SheenPrimitives<TableSectionAttributes>;
export type PrimitiveTrAttributes = SheenPrimitives<TableRowAttributes>;
export type PrimitiveTheadAttributes = SheenPrimitives<TableSectionAttributes>;
export type PrimitiveHeaderAttributes = SheenPrimitives<ElementAttributes>;
export type PrimitiveSelectAttributes = SheenPrimitives<SelectAttributes>;
