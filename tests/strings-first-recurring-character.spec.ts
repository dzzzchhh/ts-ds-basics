import { FunctionalTestSuite } from ".";
import { getFirstRecurringCharacter } from "../src/strings/first-recurring-character";

const firstRecurringCharacterSuite = new FunctionalTestSuite(
  "strings-first-recurring-character",
  getFirstRecurringCharacter
)
  .addCase({ expectedResult: "a", testCaseLabel: "abca->a", testInput: "abca" })
  .addCase({
    expectedResult: undefined,
    testCaseLabel: "abc->undefined",
    testInput: "abc"
  })
  .run();
