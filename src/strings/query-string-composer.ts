/**
 * Compose a URL query string
 * @param {object} parameters
 * @example
 *
 * queryStringComposer({user:Mike,age:24}) -> "?user=Mike&age=24"
 */
export const queryStringComposer = (parameters: object): string =>
  `?${Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join("&")}`;
