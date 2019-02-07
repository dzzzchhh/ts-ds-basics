import {
  IStringSurroundPublic,
  surroundWithHTMLTag
} from "../src/regexp/surround-group";
import { FunctionalTestSuite } from "./";

const inputString =
  "a_snake_case_word followed by normal word and then snake_case_again";
const expectedResult =
  "<h1>a_snake_case_word</h1> followed by normal word and then <h1>snake_case_again</h1>";

new FunctionalTestSuite<IStringSurroundPublic, string>(
  "regexp-surround",
  surroundWithHTMLTag
)
  .addCase({
    expectedResult,
    testInput: [
      {
        inputString,
        matcher: /(\w*\_\w+)/gi,
        tagName: "h1"
      }
    ]
  })
  .run();
