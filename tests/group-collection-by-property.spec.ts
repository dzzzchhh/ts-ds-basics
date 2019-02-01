import { FunctionalTestSuite } from ".";
import { composeGroupsByProperty } from "../src/lists/group-collection-by-property";

new FunctionalTestSuite(
  "lists-group-collection-by-property",
  composeGroupsByProperty
)
  .addCase({
    expectedResult: {
      20: [{ name: "Mike", age: 20 }, { name: "Judy", age: 20 }],
      33: [{ name: "Paul", age: 33 }],
      50: [
        { name: "Angelo", age: 50 },
        { name: "Max", age: 50 },
        { name: "Peter", age: 50 }
      ]
    },
    testCaseLabel: "Group by age",
    testInput: [
      {
        collection: [
          { name: "Angelo", age: 50 },
          { name: "Max", age: 50 },
          { name: "Peter", age: 50 },
          { name: "Mike", age: 20 },
          { name: "Judy", age: 20 },
          { name: "Paul", age: 33 }
        ],
        property: "age"
      }
    ]
  })
  .run();
