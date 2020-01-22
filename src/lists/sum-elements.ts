export function sumElements(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumElements(list.slice(1, list.length));
}
