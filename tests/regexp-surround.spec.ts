import { StringSurround } from "../src/regexp/surround-group";
import { FunctionalTestSuite } from "./";

new FunctionalTestSuite("regexp-surround", StringSurround.surroundWithHTMLTag)
  .addCase({
    expectedResult:
      "<h1>a_snake_case_word</h1> followed by normal word and then <h1>snake_case_again</h1>",
    testInput: [
      "a_snake_case_word followed by normal word and then snake_case_again",
      "h1"
    ]
  })
  .run();
