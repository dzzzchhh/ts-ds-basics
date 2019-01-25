/**
 * Get first recurring character of a string
 *
 * @export
 * @param {string} characterSequence
 * @returns {string}
 * @example
 *
 * getFirstRecurringCharacter("abca") -> "a"
 */
export function getFirstRecurringCharacter(characterSequence: string): string {
  const occurrenceMap = {};
  for (const char of characterSequence) {
    if (occurrenceMap[char]) {
      return char;
    }
    occurrenceMap[char] = true;
  }
}
