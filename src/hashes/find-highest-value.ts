/**
 * Given a <string,number> map of values
 * return the name of the key for the pair with the highest property value
 * @param {object} hash
 * @export
 * @example
 * findHighestHashValue({Jack:25,Suzan:30}) // -> "Suzan"
 */
export function findHighestHashValue(hash: object) {
  const highestValue = Math.max.apply(Math, Object.values(hash));
  for (const value in hash) {
    if (hash[value] === highestValue) {
      return value;
    }
  }
}
