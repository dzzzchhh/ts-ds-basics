import { FunctionalTestSuite } from ".";
import { queryStringComposer } from "../src/strings/query-string-composer";

const testObject = { name: "Mike", age: 24, country: "USA" };
const expectedOutput = "?name=Mike&age=24&country=USA";

const queryStringSuite = new FunctionalTestSuite(
  "Query string composer",
  queryStringComposer
)
  .addCase({
    expectedResult: expectedOutput,
    testCaseLabel: "Simple query string",
    testInput: testObject
  })
  .run();
