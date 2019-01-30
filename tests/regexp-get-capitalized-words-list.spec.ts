import { getCapitalizedWordsList } from "../src/regexp/get-capitalized-words-list";
import { FunctionalTestSuite } from "./";

new FunctionalTestSuite(
  "regexp-get-capitalized-words-list",
  getCapitalizedWordsList
)
  .addCase({
    expectedResult: ["Apple", "California"],
    testInput: "Apple is located in California"
  })
  .addCase({
    expectedResult: ["EA", "FIFA2019"],
    testInput: "EA releases FIFA2019 later this year"
  })
  .run();
