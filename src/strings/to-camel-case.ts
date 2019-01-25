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
    .split(/\s/g)
    .map((captionGroup, index) =>
      index > 0
        ? captionGroup.replace(/\S/, match => match.toUpperCase())
        : captionGroup
    )
    .join("");
}
