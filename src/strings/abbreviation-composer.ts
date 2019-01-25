/**
 * Create abbreviations from strings
 * @param {string} characterSequence
 * @return {string} String abbreviation
 * @example
 *
 * abbreviationComposer("United Nations") -> "UN"
 */
export const abbreviationComposer = (characterSequence: string): string =>
  characterSequence
    .split(" ")
    .map(i => i[0])
    .join("")
    .toUpperCase();
