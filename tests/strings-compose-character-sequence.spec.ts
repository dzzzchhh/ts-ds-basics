import { FunctionalTestSuite } from ".";
import {
  composeCharacterSequence,
  ICharacterSequenceComposer
} from "../src/strings/character-repeat";

new FunctionalTestSuite<ICharacterSequenceComposer, string>(
  "strings-compose-character-sequence",
  composeCharacterSequence
)
  .addCase({
    expectedResult: "-----",
    testCaseLabel: "repeat dash 5 times",
    testInput: [{ sequence: "-", repeatCount: 5 }]
  })
  .addCase({
    expectedResult: "*-*-*-",
    testCaseLabel: "repeat *- 3 times",
    testInput: [{ sequence: "*-", repeatCount: 3 }]
  })
  .run();
