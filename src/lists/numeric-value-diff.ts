/**
 * Return difference between max and min values for array of numbers
 *
 * @export
 * @param {number[]} list
 * @returns
 * @example
 *
 * arrayValueDiff([1,2,3,4]) // -> 3
 */
export function arrayValueDiff(list: number[]) {
  return Math.max.apply(null, list) - Math.min.apply(null, list);
}
