interface IDigitFilterProps {
  characterSequence: string;
  digits: number;
}

/**
 * Given a string and number of digits removes all numbers that have more digits than required
 *
 * @param {string} characterSequence
 * @param {number} digits
 * @export
 * @example
 *
 * filterByDigitCount({characterSequence:"100 200 2000 3000",digits:4}) // -> "100 200"
 */
export function filterByDigitCount({
  characterSequence,
  digits
}: IDigitFilterProps) {
  // TODO: optimize regexp
  const replaceMatcher = new RegExp(`\\d{${digits},} | \\d{${digits},}`, "g");
  return characterSequence.replace(replaceMatcher, "");
}
