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
    .match(/\b[\w]/gi)
    .join("")
    .toUpperCase();
