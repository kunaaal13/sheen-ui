export const ReadableBox = Symbol('ReadableBox');
export const WritableBox = Symbol('WritableBox');

/**
 * ReadonlyBox is a type that represents a box that can be read but not written to.
 * T is the type of the value stored in the box.
 */
export type ReadonlyBox<T = object> = {
  readonly [ReadableBox]: true;
  readonly current: T;
};

/**
 * WritableBox is a type that represents a box that can be read and written to.
 * T is the type of the value stored in the box.
 */
export type WritableBox<T = object> = {
  readonly [WritableBox]: true;
  current: T;
};

/**
 * Given a Record type T, returns a type that represents the same type, but with
 * all values wrapped in a `ReadOnlyBox`.
 */
export type ReadableBoxedValues<T> = {
  [K in keyof T]: ReadonlyBox<T[K]>;
};

/**
 * Given a Record type T, returns a type that represents the same type, but with
 * all values wrapped in a `WritableBox`.
 */
export type WritableBoxedValues<T> = {
  [K in keyof T]: WritableBox<T[K]>;
};
