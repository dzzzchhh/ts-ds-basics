import { FunctionalTestSuite } from ".";
import { toUppercase } from "../src/strings/to-uppercase";

const toUppercaseSuite = new FunctionalTestSuite("to-uppercase", toUppercase)
  .addCase({
    expectedResult: "AbC",
    testCaseLabel: "Simple string",
    testInput: [
      {
        characterSequence: "abc",
        charactersToUppercase: ["a", "c"]
      }
    ]
  })
  .addCase({
    expectedResult: "I haVe a TypeScrIpT coMpIler",
    testCaseLabel: "Phrase",
    testInput: [
      {
        characterSequence: "i have a typescript compiler",
        charactersToUppercase: ["i", "v", "m", "s", "t"]
      }
    ]
  })
  .run();
