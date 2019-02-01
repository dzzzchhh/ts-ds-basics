import { expect } from "chai";
import "mocha";

/**
 * Defines general shape of a functional test case
 * @interface IFunctionalTestCase
 */
interface IFunctionalTestCase<T> {
  /**
   * Value to be used as 'this' argument for the test function be called with .apply
   * @type {*}
   * @memberof IFunctionalTestCase
   */
  testCaseContext?: any;
  /**
   * List of arguments to be passed to function being tested
   * @type {any[]}
   * @memberof IFunctionalTestCase
   */
  testInput: T[];
  testCaseLabel?: string;
  expectedResult: any;
}

/**
 * Compose dynamic test suites for single-arity functions
 * @export
 * @class FunctionalTestSuite
 */
export class FunctionalTestSuite<T> {
  /**
   * List of test cases for a suite
   * @private
   * @type {IFunctionalTestCase[]}
   * @memberof FunctionalTestSuite
   */
  private testCases: Array<IFunctionalTestCase<T>> = [];
  constructor(
    private suiteName: string,
    private testFunction: (...input: any) => any
  ) {}
  /**
   * Adds a new test case to a test suite
   * @param {IFunctionalTestCase} testCase
   * @returns
   * @memberof FunctionalTestSuite
   */
  public addCase(testCase: IFunctionalTestCase<T>) {
    this.testCases.push({
      ...testCase,
      testCaseLabel: testCase.testCaseLabel || testCase.testInput.toString()
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
          const context = testCase.testCaseContext || {};
          expect(this.testFunction.apply(context, testCase.testInput)).to.eql(
            testCase.expectedResult
          );
        });
      });
    });
  }
}
