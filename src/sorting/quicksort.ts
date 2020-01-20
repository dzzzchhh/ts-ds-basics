/**
 * Simplest straight-forward implementation of quicksort
 * @todo Handle duplicate list elements
 * @param list
 */
export function quickSort(list: number[]) {
  if (list.length === 0) {
    return [];
  }
  const median = Math.floor(list.length / 2);
  const centerElement = list[median];

  const less = list.filter(i => i < centerElement);
  const more = list.filter(i => i > centerElement);

  return [...quickSort(less), centerElement, ...quickSort(more)];
}
