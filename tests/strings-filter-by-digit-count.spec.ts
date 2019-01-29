import { filterByDigitCount } from "../src/strings/filter-by-digit-count";
import { FunctionalTestSuite } from "./";

const sampleString1 = "200 2000 400 4000";
const sampleString2 = "8000 2009 4003 15";
const sampleString3 = "8000 2009 4003 30 2000 2000";
new FunctionalTestSuite("strings-filter-by-digit-count", filterByDigitCount)
  .addCase({
    expectedResult: "2000 4000",
    testCaseLabel: sampleString1,
    testInput: { characterSequence: sampleString1, digits: 4 }
  })
  .addCase({
    expectedResult: "8000 2009 4003",
    testCaseLabel: sampleString2,
    testInput: { characterSequence: sampleString2, digits: 4 }
  })
  .addCase({
    expectedResult: "8000 2009 4003 2000 2000",
    testCaseLabel: sampleString3,
    testInput: { characterSequence: sampleString3, digits: 4 }
  })
  .run();
