/**
 * Find out if first character of a string is in uppercase
 *
 * @export
 * @param {string} characterSequence
 * @returns
 */
export function isFirstCharacterUppercase(characterSequence: string) {
  return /^[A-Z]/.test(characterSequence);
}
