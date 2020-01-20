/**
 * Simplest straight-forward implementation of quicksort
 * Able to handle duplicate entries
 * @param {Array<number>} list Source list
 * @returns {Array<number>} sorted list
 */
export function quickSort(list: number[]): number[] {
  if (list.length === 0) {
    return []; // stop the recursion for emtpy lists
  }

  // 1. Find root index (RI)
  const median = Math.floor(list.length / 2);
  // 2. Find root index element (RIE)
  const centerElement = list[median];

  // 3. Find all items that are greater and less then RIE
  const less = list.filter(i => i < centerElement);
  const more = list.filter(i => i > centerElement);
  // 4. Find all items that are duplicates of the RIE
  const equal = list.filter(i => i === centerElement);

  // 5. Sort all the items that are less or greater
  // as well as spread the duplicates of RIE
  return [...quickSort(less), ...equal, ...quickSort(more)];
}
