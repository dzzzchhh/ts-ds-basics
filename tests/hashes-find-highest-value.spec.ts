import { findHighestHashValue } from "../src/hashes/find-highest-value";
import { FunctionalTestSuite } from "./";

new FunctionalTestSuite("hashes-highest-value", findHighestHashValue)
  .addCase({
    expectedResult: undefined,
    testCaseLabel: "Empty map should return undefined",
    testInput: [{}]
  })
  .addCase({
    expectedResult: "Holly Jackson",
    testCaseLabel: "Valid map",
    testInput: [
      { "Holly Jackson": 250, "Jack Southerland": 100, "Peter Higgins": 50 }
    ]
  })
  .run();
