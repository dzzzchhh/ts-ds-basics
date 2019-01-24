import { expect } from "chai";
import "mocha";
import { Stack } from "./index";

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
  it("should correctly pop items", () => {
    stack.push(2).push(3);
    stack.pop();
    expect(stack.getSize()).to.equal(2);
  });
  it("should correctly handle isEmpty() call", () => {
    expect(stack.isEmpty()).to.equal(false);
    stack.pop();
    expect(stack.isEmpty()).to.equal(true);
  });
  it("should peek correctly", () => {
    expect(
      stack
        .push(2)
        .push(3)
        .peek()
    ).to.have.property("value", 3);
  });
});
