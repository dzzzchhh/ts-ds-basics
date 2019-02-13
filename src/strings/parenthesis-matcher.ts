/**
 * Given a string input returns whether or not
 * all parenthesis pairs in the source string are valid
 * @param {string} source
 */
export const getParenthesisValidity = (source: string) => {
  const pattern = /(\(\w*\))/g;
  return pattern.test(source)
    ? getParenthesisValidity(source.replace(pattern, ""))
    : !source;
};
