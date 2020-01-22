import { FunctionalTestSuite } from ".";
import { multiplyElements } from "../src/lists/multiply-elements";

new FunctionalTestSuite<number[], number>(
  "list-multiply-elements",
  multiplyElements
)
  .addCase({ expectedResult: 0, testInput: [[]], testCaseLabel: "Empty" })
  .addCase({
    expectedResult: 24,
    testInput: [[1, 2, 3, 4]],
    testCaseLabel: "Standard"
  })
  .addCase({
    expectedResult: 1,
    testInput: [[1]],
    testCaseLabel: "Single element"
  })
  .run();
