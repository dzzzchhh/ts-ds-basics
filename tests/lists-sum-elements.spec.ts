import { FunctionalTestSuite } from ".";
import { sumElements } from "../src/lists/sum-elements";

new FunctionalTestSuite<number[], number>("list-sum-elements", sumElements)
  .addCase({ expectedResult: 0, testInput: [[]], testCaseLabel: "Empty" })
  .addCase({
    expectedResult: 10,
    testInput: [[1, 2, 3, 4]],
    testCaseLabel: "Standard"
  })
  .addCase({
    expectedResult: 1,
    testInput: [[1]],
    testCaseLabel: "Single element"
  })
  .run();
