import { expect } from "chai";
import "mocha";

interface ITestCase {
  testCaseLabel: string;
  testInput: string;
  expectedResult: string;
}

const testCaseComposer = (
  testCaseLabel: string,
  testInput: string,
  expectedResult: string
): ITestCase => ({
  expectedResult,
  testCaseLabel,
  testInput
});

export class FunctionalTestSuite {
  private testCases: ITestCase[];
  constructor(
    private suiteName: string,
    private testFunction: (input: any) => any
  ) {
    this.testCases = [];
  }
  public addCase(testCase: ITestCase) {
    this.testCases.push(testCase);
    return this;
  }
  public run() {
    describe(this.suiteName, () => {
      this.testCases.forEach(testCase => {
        it(testCase.testCaseLabel, () => {
          expect(this.testFunction(testCase.testInput)).to.eq(
            testCase.expectedResult
          );
        });
      });
    });
  }
}
