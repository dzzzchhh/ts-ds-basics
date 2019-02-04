/**
 * Given a <string,number> map of values, return the key name of the pair with the highest property value
 * @param {object} hash
 */
export function findHighestHashValue(hash: object) {
  const highestValue = Math.max.apply(Math, Object.values(hash));
  for (const value in hash) {
    if (hash[value] === highestValue) {
      return value;
    }
  }
}
