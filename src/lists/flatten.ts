/**
 * Given an array of arrays produces a flattened 1-level list
 *
 * @export
 * @param {any[]} list
 * @returns {any[]}
 * @example
 *
 * flatten([[1,2],[3,4]]) -> [1,2,3,4]
 */
export function flatten(list: any[]): any[] {
  return list.reduce((acc, curr) => [...acc, ...curr], []);
}
