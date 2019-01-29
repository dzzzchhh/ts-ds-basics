/**
 * Given a list of numbers returns a new list where all even values come after odd ones
 *
 * @export
 * @param {number[]} list
 * @returns
 * @example
 * groupByOddEven([1, 2, 3, 4, 5, 6, 20, 21]); // -> [1,3,5,21,2,4,6,20]
 */
export function groupByOddEven(list: number[]) {
  const { evens, odds } = list.reduce(
    (acc, curr) =>
      curr % 2 === 0
        ? { ...acc, evens: [...acc.evens, curr] }
        : { ...acc, odds: [...acc.odds, curr] },
    { odds: [], evens: [] }
  );
  return odds.concat(evens);
}
