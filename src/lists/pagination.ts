interface IListGroup {
  items: any[];
  itemsPerPage: number;
}

/**
 * Given a list of items and size of chunk groups items by chunk size
 * @export
 * @param {IListGroup} params
 * @returns {any[]}
 * @example
 * composePagination([1,2,3,4,5],2) // -> [[1,2],[3,4],[5]]
 */
export function composePagination(params: IListGroup): any[] {
  const pages = [];
  let pageCount = 0;
  while (pageCount < params.items.length) {
    const rangeTopBoundary = pageCount + params.itemsPerPage;
    const page = params.items.slice(pageCount, rangeTopBoundary);
    pages.push(page);
    pageCount += params.itemsPerPage;
  }
  return pages;
}
