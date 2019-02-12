import { FunctionalTestSuite } from ".";
import { mapObject } from "../src/hashes/map-object";

const baseObject = { xml: 4, http: 2, rest: 2, js: 10 };
const baseFields = ["xml", "js"];
const expectedObject = { xml: 4, js: 10 };

new FunctionalTestSuite<object, object>("hash-map-object", mapObject)
  .addCase({
    expectedResult: expectedObject,
    testCaseLabel: "Map object",
    testInput: [baseObject, baseFields]
  })
  .addCase({
    expectedResult: {},
    testCaseLabel: "Empty object",
    testInput: [{}]
  })
  .run();
