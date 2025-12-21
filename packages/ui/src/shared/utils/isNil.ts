/**
 * checks whether a value is null or undefined
 * @param value - A value to be checked
 * @returns boolean - Whether the value is null or undefined
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}
