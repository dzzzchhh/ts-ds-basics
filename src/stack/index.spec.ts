import { Stack } from "./index";
import { expect } from "chai";
import "mocha";

let stack: Stack;
beforeEach(() => {
  stack = new Stack(1);
});

describe("Stacks", () => {
  it("Should correctly perform pushing", () => {
    expect(stack.getSize()).to.equal(1);
    stack.push(2);
    expect(stack.getSize()).to.equal(2);
  });
  it("should correctly pop items", function() {
    stack.push(2).push(3);
    stack.pop();
    expect(stack.getSize()).to.equal(2);
  });
  it("should correctly handle isEmpty() call", function() {
    expect(stack.isEmpty()).to.be.false;
    stack.pop();
    expect(stack.isEmpty()).to.be.true;
  });
  it("should peek correctly", function() {
    expect(
      stack
        .push(2)
        .push(3)
        .peek()
    ).to.have.property("value", 3);
  });
});
