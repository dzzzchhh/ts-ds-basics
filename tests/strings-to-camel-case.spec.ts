import { FunctionalTestSuite } from ".";
import { toCamelCase } from "../src/strings/to-camel-case";

const camelCaseSuite = new FunctionalTestSuite(
  "strings-to-camel-case",
  toCamelCase
)
  .addCase({
    expectedResult: "aStringOfValues",
    testCaseLabel: "case-sensitive input",
    testInput: ["A string of values"]
  })
  .addCase({
    expectedResult: "anotherValue",
    testCaseLabel: "case-insensitive input",
    testInput: ["another value"]
  })
  .run();
