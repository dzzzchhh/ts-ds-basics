import { expect } from "chai";
import "mocha";

/**
 * Defines general shape of a functional test case
 * @interface IFunctionalTestCase
 */
interface IFunctionalTestCase {
  testCaseLabel?: string;
  testInput: any;
  expectedResult: any;
}

/**
 * Compose dynamic test suites for single-arity functions
 * @export
 * @class FunctionalTestSuite
 */
export class FunctionalTestSuite {
  /**
   * List of test cases for a suite
   * @private
   * @type {IFunctionalTestCase[]}
   * @memberof FunctionalTestSuite
   */
  private testCases: IFunctionalTestCase[] = [];
  constructor(
    private suiteName: string,
    private testFunction: (input: any) => any
  ) {}
  /**
   * Adds a new test case to a test suite
   * @param {IFunctionalTestCase} testCase
   * @returns
   * @memberof FunctionalTestSuite
   */
  public addCase(testCase: IFunctionalTestCase) {
    this.testCases.push({
      ...testCase,
      testCaseLabel: testCase.testCaseLabel || testCase.testInput
    });
    return this;
  }
  /**
   * Register and initiate test suite making it visible for test executor
   * @memberof FunctionalTestSuite
   */
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
