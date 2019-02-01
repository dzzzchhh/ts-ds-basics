import { composePagination, IListGroup } from "../src/lists/pagination";
import { FunctionalTestSuite } from "./index";

new FunctionalTestSuite<IListGroup>("lists-group-by", composePagination)
  .addCase({
    expectedResult: [],
    testCaseLabel: "empty list",
    testInput: [{ items: [], itemsPerPage: 100 }]
  })
  .addCase({
    expectedResult: [[1]],
    testCaseLabel: "list with 1 item",
    testInput: [{ items: [1], itemsPerPage: 1 }]
  })
  .addCase({
    expectedResult: [[1, 2], [3, 4]],
    testCaseLabel: "group items of 4 items by 2",
    testInput: [{ items: [1, 2, 3, 4], itemsPerPage: 2 }]
  })
  .addCase({
    expectedResult: [[1, 2], [3, 4], [5]],
    testCaseLabel: "group items of  5 items by 2",
    testInput: [{ items: [1, 2, 3, 4, 5], itemsPerPage: 2 }]
  })
  .addCase({
    expectedResult: [[1, 2, 3, 4], [5]],
    testCaseLabel: "group items of  5 items by 4",
    testInput: [{ items: [1, 2, 3, 4, 5], itemsPerPage: 4 }]
  })
  .addCase({
    expectedResult: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]],
    testCaseLabel: "group items of  10 items by 1",
    testInput: [{ items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], itemsPerPage: 1 }]
  })
  .run();
