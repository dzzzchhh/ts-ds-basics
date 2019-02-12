/**
 * @export
 * Fuzzy search implementation -> given a search pattern checks for consistency
 * and order of input against source string
 * @param {string} pattern String to be used as search pattern
 * @param {string} source String being searched in
 */
export const fuzzySearch = (pattern: string, source: string): boolean => {
  const fuzzyMatcher = new RegExp(`[^${pattern}]`, "g");
  return source.replace(fuzzyMatcher, "") === pattern;
};
