interface INthParameters {
  list: any[];
  th: number;
}

/**
 * Compose a list containing every n-th item of the original list
 *
 * @param {Array} list  List to process
 * @param {number} th Every "th" shall be selected
 * @returns {Array} List with every n-th element
 *
 * @example
 *
 * nth({list:[1,2,3,4,5,6,7,8],th:4}) -> [4,8]
 */
export const nth = ({ list, th }: INthParameters): any[] =>
  list.filter((item, index) => (index + 1) % th === 0);
