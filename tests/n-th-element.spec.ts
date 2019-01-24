import { FunctionalTestSuite } from ".";
import { nth } from "../src/lists/n-th-element";

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const nthElementSuite = new FunctionalTestSuite("n-th list element", nth)
  .addCase({
    expectedResult: [3, 6],
    testCaseLabel: "should select 3rd element in the list",
    testInput: { list, th: 3 }
  })
  .addCase({
    expectedResult: [2, 4, 6, 8],
    testCaseLabel: "should select 2nd element in the list",
    testInput: { list, th: 2 }
  })
  .run();
