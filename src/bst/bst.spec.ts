import { BinarySearchTree } from "./index";
import { expect } from "chai";
import "mocha";

describe("BST", function() {
  it("should perform search", function() {
    const tree = new BinarySearchTree(50);
    tree
      .insertNode(76)
      .insertNode(21)
      .insertNode(4)
      .insertNode(32)
      .insertNode(100)
      .insertNode(64)
      .insertNode(52);
    debugger;
  });
});
