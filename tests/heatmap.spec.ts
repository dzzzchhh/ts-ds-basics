import { expect } from "chai";
import "mocha";
import { composeHeatmap } from "../src/heatmap";
const testString = "abcdeabc";

describe("Heatmap testing", () => {
  const result = composeHeatmap(testString);
  it("should compose correct heatmap", () => {
    expect(result.heatmap).to.deep.equal({
      a: 2,
      b: 2,
      c: 2,
      d: 1,
      e: 1
    });
  });
  it("should calculate string length", () => {
    expect(result.length).to.equal(8);
  });
  it("should calculate number of unique tokens", () => {
    expect(result.uniqueTokens).to.equal(5);
  });
});
