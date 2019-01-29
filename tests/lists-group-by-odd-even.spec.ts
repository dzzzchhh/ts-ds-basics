import { FunctionalTestSuite } from ".";
import { groupByOddEven } from "../src/lists/group-by-odd-event";

new FunctionalTestSuite("lists-group-by-odd-even", groupByOddEven)
  .addCase({
    expectedResult: [1, 3, 5, 21, 2, 4, 6, 20],
    testCaseLabel: "Default case",
    testInput: [1, 2, 3, 4, 5, 6, 20, 21]
  })
  .run();
