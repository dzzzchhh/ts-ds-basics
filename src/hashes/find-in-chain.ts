export interface IChainSearchProps {
  searchPath: string;
  searchableObject: object;
}

/**
 * Iterate through a chain or properties
 * and extract the value for a given key
 * @param props
 */
export function searchInChain(props: IChainSearchProps) {
  if (!props.searchPath) {
    return;
  }
  for (const key of props.searchPath.split(".")) {
    if (!props.searchableObject.hasOwnProperty(key)) {
      return;
    }
    props.searchableObject = props.searchableObject[key];
  }
  return props.searchableObject;
}
