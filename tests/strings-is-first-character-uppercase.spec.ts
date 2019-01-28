import { FunctionalTestSuite } from ".";
import { isFirstCharacterUppercase } from "../src/strings/is-first-character-uppercase";

new FunctionalTestSuite(
  "strings-is-first-character-uppercase",
  isFirstCharacterUppercase
)
  .addCase({
    expectedResult: true,
    testCaseLabel: "A valid case",
    testInput: "A valid case"
  })
  .addCase({
    expectedResult: false,
    testCaseLabel: "invalid case",
    testInput: "invalid case"
  })
  .addCase({
    expectedResult: false,
    testCaseLabel: "2nd invalid case",
    testInput: "2nd invalid case"
  })
  .run();
