import { StringSurround } from "../src/regexp/surround-group";
import { FunctionalTestSuite } from "./";

new FunctionalTestSuite("regexp-surround", StringSurround.surroundWithBraces)
  .addCase({
    expectedResult:
      "(a_snake_case_word) followed by normal word and then (snake_case_again)",
    testInput: [
      "a_snake_case_word followed by normal word and then snake_case_again"
    ]
  })
  .run();
