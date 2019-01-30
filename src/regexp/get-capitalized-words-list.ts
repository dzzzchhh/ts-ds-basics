/**
 * Given a string returns a list of all words that start with a capital letter
 * @param {string} words
 * @returns {string[]}
 * @example
 * getCapitalizedWordsList("Apple is located in California") // -> ["Apple","California"]
 */
export function getCapitalizedWordsList(words: string): string[] {
  return words.match(/[A-Z]\w+/g);
}
