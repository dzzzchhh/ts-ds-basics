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
  .addCase({
    testCaseLabel: "With duplicates",
    testInput: [[5, 100, 2, 1, 10, 5, 1]],
    expectedResult: [1, 1, 2, 5, 5, 10, 100]
  })
  .addCase({
    testCaseLabel: "Duplicates only",
    testInput: [[1, 1, 1, 1, 1]],
    expectedResult: [1, 1, 1, 1, 1]
  })
  .run();
