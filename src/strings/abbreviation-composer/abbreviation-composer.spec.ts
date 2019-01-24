import { FunctionalTestSuite } from "../../../tests";
import { abbreviationComposer } from "./";

const abbreviationSuite = new FunctionalTestSuite(
  "Abbreviation",
  abbreviationComposer
);

abbreviationSuite
  .addCase({
    expectedResult: "UN",
    testCaseLabel: "UN abbreviation",
    testInput: "United Nations"
  })
  .addCase({
    expectedResult: "NASA",
    testCaseLabel: "NASA abbreviation",
    testInput: "National Aeronautics Space Administration"
  })
  .addCase({
    expectedResult: "DOS",
    testCaseLabel: "DOS abbreviation",
    testInput: "Denial of service"
  })
  .run();
