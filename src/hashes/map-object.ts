/**
 * Given an object and list of properties composes an object that contains
 * properties of target object that are present in fields list
 * @export
 * @param {object} entity
 * @param {string[]} fields
 * @returns {object}
 */
export const mapObject = (entity, fields) =>
  fields ? fields.reduce((a, c) => ({ ...a, [c]: entity[c] }), {}) : entity;
