/**
 * Checks whether the occurence of item is the first in the list
 *
 * @param {*} item
 * @param {number} index
 * @param {any[]} list
 * @returns
 */
function uniqueComparator(item: any, index: number, list: any[]) {
  return list.indexOf(item) === index;
}

/**
 * Remove duplicating records from list
 *
 * @param {any[]} list
 * @returns {any[]}
 * @export
 * @example
 *
 * uniqe([1,2,3,1,2,3,4]) -> [1,2,3,4]
 *
 */
export function unique(list: any[]): any[] {
  return list.filter(uniqueComparator);
}
