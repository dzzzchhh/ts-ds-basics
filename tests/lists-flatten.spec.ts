import { flatten } from "../src/lists/flatten";
import { FunctionalTestSuite } from "./";

const testInputValues = [[1, 2], [3, 4], [5, 6]];
const testOutputValues = [1, 2, 3, 4, 5, 6];
const testLabelValues = "flatten list of integers";

const testInputCollection = [[{ id: 0 }, { id: 1 }], [{ id: 2 }, { id: 3 }]];
const testOutputCollection = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
const testLabelCollection = "flatten collection of objects";

const flattenTestSuite = new FunctionalTestSuite("lists-flatten", flatten)
  .addCase({
    expectedResult: testOutputValues,
    testCaseLabel: testLabelValues,
    testInput: testInputValues
  })
  .addCase({
    expectedResult: testOutputCollection,
    testCaseLabel: testLabelCollection,
    testInput: testOutputCollection
  })
  .run();
