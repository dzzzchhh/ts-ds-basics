import { FunctionalTestSuite } from ".";
import { unique } from "../src/lists/unique";

const uniqueSuite = new FunctionalTestSuite("lists-unique", unique)
  .addCase({
    expectedResult: [1, 2, 3, 4],
    testCaseLabel: "list of integers",
    testInput: [[1, 2, 3, 4, 2, 3, 4, 1, 2, 3, 1, 2]]
  })
  .addCase({
    expectedResult: ["A", "B", "C"],
    testCaseLabel: "list of strings",
    testInput: [["A", "B", "C", "A"]]
  })
  .run();
