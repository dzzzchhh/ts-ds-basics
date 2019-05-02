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
  return Array.prototype.concat.apply([], list);
}

/* another variant:
export function flatten(list: any[]): any[] {
  return [].concat(...list);
}
*/
