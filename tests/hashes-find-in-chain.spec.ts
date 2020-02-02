import { IChainSearchProps, searchInChain } from "../src/hashes/find-in-chain";
import { FunctionalTestSuite } from "./index";

const searchableObject = {
  account: {
    isProtected: true,
    name: "John",
    tags: {
      isVerified: false,
      values: ["functions", "strings"]
    }
  },
  payments: [{ id: 9593, amount: 190 }],
  version: "1.0"
};

const getTestData = (searchPath: string): IChainSearchProps[] => [
  { searchPath, searchableObject }
];

new FunctionalTestSuite<IChainSearchProps, any>(
  "object-chain-search",
  searchInChain
)
  .addCase({
    expectedResult: undefined,
    testCaseLabel: "Empty",
    testInput: getTestData("")
  })
  .addCase({
    expectedResult: undefined,
    testCaseLabel: "non-existing path",
    testInput: getTestData("level")
  })
  .addCase({
    expectedResult: searchableObject.version,
    testCaseLabel: "1st level primitive",
    testInput: getTestData("version")
  })
  .addCase({
    expectedResult: searchableObject.payments,
    testCaseLabel: "1st level list",
    testInput: getTestData("payments")
  })
  .addCase({
    expectedResult: searchableObject.account.isProtected,
    testCaseLabel: "2nd level primitive",
    testInput: getTestData("account.isProtected")
  })
  .addCase({
    expectedResult: searchableObject.account.tags.isVerified,
    testCaseLabel: "multi-level",
    testInput: getTestData("account.tags.isVerified")
  })
  .run();
