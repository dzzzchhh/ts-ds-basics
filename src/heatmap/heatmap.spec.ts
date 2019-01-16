import { composeHeatmap } from "./";
import { expect } from "chai";
import "mocha";
const testString = "This_is_great";

describe("Heatmap testing", function() {
  const result = composeHeatmap(testString);
  it("should compose correct heatmap", function() {
    expect(result.heatmap).to.deep.equal({
      T: 1,
      h: 1,
      i: 2,
      s: 2,
      _: 2,
      g: 1,
      r: 1,
      e: 1,
      a: 1,
      t: 1
    });
  });
  it("should calculate string length", function() {
    expect(result.length).to.equal(13);
  });
  it("should calculate number of unique tokens", function() {
    expect(result.uniqueTokens).to.equal(10);
  });
});
