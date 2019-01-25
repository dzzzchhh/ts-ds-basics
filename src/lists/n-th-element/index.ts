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
 */
export const nth = ({ list, th }: INthParameters): any[] =>
  list.filter((item, index) => (index + 1) % th === 0);
