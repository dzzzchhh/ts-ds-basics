import { FunctionalTestSuite } from ".";
import { quickSort } from "../src/sorting/quicksort";

new FunctionalTestSuite<number[], number[]>("Quicksort", quickSort)
  .addCase({
    testInput: [[]],
    expectedResult: [],
    testCaseLabel: "Empty"
  })
  .addCase({
    testCaseLabel: "Simple even",
    testInput: [[5, 100, 2, 10]],
    expectedResult: [2, 5, 10, 100]
  })
  .addCase({
    testCaseLabel: "Simple odd",
    testInput: [[5, 100, 2, 10, 1]],
    expectedResult: [1, 2, 5, 10, 100]
  })
  .run();
