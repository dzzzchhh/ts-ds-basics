export const multiplyElements = (list: number[]): number =>
  isEmpty(list) ? 0 : multi(list);

const multi = (list: number[]): number =>
  list.length === 0 ? 1 : list[0] * multi(list.slice(1, list.length));

const isEmpty = (list: number[]): boolean => list.length === 0;
