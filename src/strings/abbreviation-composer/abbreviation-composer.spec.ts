import { expect } from "chai";
import "mocha";

import { abbreviationComposer } from "./";

describe("Abbreviation composer", () => {
  it("should compose correct abbreviation for UN ", () => {
    const testString = "United Nations";
    const expectedTestResult = "UN";
    expect(abbreviationComposer(testString)).to.eq(expectedTestResult);
  });
  it("should compose correct abbreviation for NASA", () => {
    const testString = "National Aeronautics Space Administration";
    const expectedTestResult = "NASA";
    expect(abbreviationComposer(testString)).to.eq(expectedTestResult);
  });
  it("should compose correct abbreviation for DOS", () => {
    const testString = "Denial of service";
    const expectedTestResult = "DOS";
    expect(abbreviationComposer(testString)).to.eq(expectedTestResult);
  });
});
