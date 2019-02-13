import { FunctionalTestSuite } from ".";
import { getParenthesisValidity } from "../src/strings/parenthesis-matcher";

new FunctionalTestSuite<string, boolean>(
  "strings-parenthesis-matching",
  getParenthesisValidity
)
  .addCase({ expectedResult: true, testCaseLabel: "empty", testInput: [""] })
  .addCase({ expectedResult: true, testCaseLabel: "()", testInput: ["()"] })
  .addCase({ expectedResult: true, testCaseLabel: "()()", testInput: ["()"] })
  .addCase({
    expectedResult: true,
    testCaseLabel: "(()())()(())",
    testInput: ["()"]
  })
  .addCase({ expectedResult: false, testCaseLabel: ")()", testInput: [")()"] })
  .addCase({ expectedResult: false, testCaseLabel: ")(", testInput: [")("] })
  .run();
