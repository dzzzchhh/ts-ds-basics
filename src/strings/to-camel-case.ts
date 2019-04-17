/**
 * Converts string to camel case
 *
 * @export
 * @param {string} characterSequence
 * @returns {string}
 * @example
 *
 * toCamelCase("a string of values") -> "aStringOfValues"
 */
export function toCamelCase(characterSequence: string): string {
  return characterSequence
    .toLowerCase()
    .replace(/\s\w/g, match => match.trim().toUpperCase())
}
