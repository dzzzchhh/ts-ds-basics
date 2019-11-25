/**
 * Unwraps folded arrays of strings and finds the longest string
 * @param source Array of any depth
 */
export const longestString = (source: any[]): string =>
  source
    .reduce((a, c) => {
      if (Array.isArray(c)) {
        return a.concat(longestString(c));
      }
      return [...a, c];
    }, [])
    .reduce((a: string, c: string) => (c.length > a.length ? c : a), "");
