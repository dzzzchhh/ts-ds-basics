/**
 * Given an object and list of properties composes an object that contains
 * properties of target object that are present in fields list
 * @export
 * @param {object} entity
 * @param {string[]} fields
 * @returns {object}
 */
export const mapObject = (entity: object, fields: string[]): object =>
  Object.keys(entity).reduce(
    (accumulator, currentEntityFiled) =>
      fields.includes(currentEntityFiled)
        ? { ...accumulator, [currentEntityFiled]: entity[currentEntityFiled] }
        : accumulator,
    {}
  );
