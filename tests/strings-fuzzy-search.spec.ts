import { FunctionalTestSuite } from ".";
import { fuzzySearch } from "../src/strings/fuzzy-search";

const sourceString = "cartwheel";

new FunctionalTestSuite<string, boolean>("strings-fuzzy-search", fuzzySearch)
  .addCase({
    expectedResult: true,
    testCaseLabel: "car",
    testInput: ["car", sourceString]
  })
  .addCase({
    expectedResult: true,
    testCaseLabel: "cwheel",
    testInput: ["cwheel", sourceString]
  })
  .addCase({
    expectedResult: false,
    testCaseLabel: "cwheeel -> false",
    testInput: ["cwheeel", sourceString]
  })
  .addCase({
    expectedResult: false,
    testCaseLabel: "lw->false",
    testInput: ["lw", sourceString]
  })
  .run();
