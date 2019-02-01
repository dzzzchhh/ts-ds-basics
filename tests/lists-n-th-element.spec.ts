import { FunctionalTestSuite } from ".";
import { IParityMatch, matchListByParity } from "../src/lists/n-th-element";

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const nthElementSuite = new FunctionalTestSuite<IParityMatch>(
  "n-th list element",
  matchListByParity
)
  .addCase({
    expectedResult: list,
    testCaseLabel:
      "should return original list when asked to select every 1st element",
    testInput: [{ list, matchIndex: 1 }]
  })
  .addCase({
    expectedResult: [3, 6],
    testCaseLabel: "should select 3rd element in the list",
    testInput: [{ list, matchIndex: 3 }]
  })
  .addCase({
    expectedResult: [4, 8],
    testCaseLabel: "should select 4th element in the list",
    testInput: [{ list, matchIndex: 4 }]
  })
  .addCase({
    expectedResult: [2, 4, 6, 8],
    testCaseLabel: "should select 2nd element in the list",
    testInput: [{ list, matchIndex: 2 }]
  })
  .run();
