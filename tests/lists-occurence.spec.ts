import { FunctionalTestSuite } from ".";
import { occurence } from "../src/lists/occurence";

const occurenceTestSuite = new FunctionalTestSuite("lists-occurence", occurence)
  .addCase({
    expectedResult: 4,
    testCaseLabel: "Simple occurence counter",
    testInput: [{ list: [2, 2, 2, 2, 3], value: 2 }]
  })
  .run();
