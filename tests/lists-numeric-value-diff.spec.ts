import { FunctionalTestSuite } from ".";
import { arrayValueDiff } from "../src/lists/numeric-value-diff";

new FunctionalTestSuite("lists-numeric-value-diff", arrayValueDiff)
  .addCase({
    expectedResult: 3,
    testCaseLabel: "With standard list",
    testInput: [1, 2, 3, 4]
  })
  .addCase({
    expectedResult: 6,
    testCaseLabel: "With negative values",
    testInput: [5, 2, 3, -1]
  })
  .addCase({
    expectedResult: 0,
    testCaseLabel: "With equal values",
    testInput: [5, 5, 5, 5]
  })
  .run();
