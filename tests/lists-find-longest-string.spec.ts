import { longestString } from "../src/lists/longest-string";
import { FunctionalTestSuite } from "./";

new FunctionalTestSuite<any, string>(
  "find longest string in a multi-level array",
  longestString
)
  .addCase({
    testCaseLabel: "Simple one level",
    testInput: [["a", "b", "c", "dd"]],
    expectedResult: "dd"
  })
  .addCase({
    testCaseLabel: "Simple two level",
    testInput: [[["a"], "b", "c", "dd"]],
    expectedResult: "dd"
  })
  .addCase({
    testCaseLabel: "1 in 1  array",
    testInput: [[["a", "b", "c", "dd"]]],
    expectedResult: "dd"
  })
  .addCase({
    testCaseLabel: "Crazy case 1",
    testInput: [[["a", "b", [["ccccc"]], [[["dd"]]]]]],
    expectedResult: "ccccc"
  })
  .addCase({
    testCaseLabel: "Crazy case 2",
    testInput: [[["a", [[[["b"]]]], [["ccccc"]], [[["dd"]]]], "000"]],
    expectedResult: "ccccc"
  })
  .addCase({
    testCaseLabel: "Crazy case 3",
    testInput: [
      [
        ["O", [[["404040404040"]]]],
        ["a", [[[["b"]]]], [["ccccc"]], [[["dd"]]]],
        "000"
      ]
    ],
    expectedResult: "404040404040"
  })
  .addCase({
    testCaseLabel: "Empty case",
    testInput: [[]],
    expectedResult: ""
  })
  .run();
