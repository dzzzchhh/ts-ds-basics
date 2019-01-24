import { expect } from "chai";
import "mocha";

interface ITestCase {
  testCaseLabel?: string;
  testInput: any;
  expectedResult: any;
}

export class FunctionalTestSuite {
  private testCases: ITestCase[] = [];
  constructor(
    private suiteName: string,
    private testFunction: (input: any) => any
  ) {}
  public addCase(testCase: ITestCase) {
    this.testCases.push(testCase);
    return this;
  }
  public run() {
    describe(this.suiteName, () => {
      this.testCases.forEach(testCase => {
        it(testCase.testCaseLabel, () => {
          expect(this.testFunction(testCase.testInput)).to.eql(
            testCase.expectedResult
          );
        });
      });
    });
  }
}
