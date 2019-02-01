interface ICollectionGroup {
  collection: object[];
  property: string;
}

/**
 * Given a collection of objects and a parameter name composes a map of entities grouped by parameter value
 * @export
 * @param {ICollectionGroup} parameters
 * @returns {object}
 * @example
 * composeGroupsByProperty([{age:20,name:"Peter"},{age:30,name:"Mike"}]) // -> {20:[{age:20,name:"Peter"}],30:[{age:30,name:"Mike"}]}
 */
export function composeGroupsByProperty(parameters: ICollectionGroup): object {
  return parameters.collection.reduce((acc, currentItem) => {
    const parameterValue = currentItem[parameters.property];
    if (acc[parameterValue] && acc[parameterValue].length > 0) {
      return {
        ...acc,
        [parameterValue]: [...acc[parameterValue], currentItem]
      };
    }
    return { ...acc, [parameterValue]: [currentItem] };
  }, {});
}
