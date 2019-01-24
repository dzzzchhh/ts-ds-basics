import { expect } from "chai";
import "mocha";
import { BinarySearchTree } from "./index";

describe("BST", () => {
  it("should perform search", () => {
    const tree = new BinarySearchTree(50);
    tree
      .insertNode(76)
      .insertNode(21)
      .insertNode(4)
      .insertNode(32)
      .insertNode(100)
      .insertNode(64)
      .insertNode(52);
  });
});
