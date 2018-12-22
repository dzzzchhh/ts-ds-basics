export class BinarySearchTree {
  private readonly value;
  private leftChild: BinarySearchTree;
  private rightChild: BinarySearchTree;
  constructor(value) {
    this.leftChild = null;
    this.rightChild = null;
    this.value = value;
  }
  public insertNode(value): BinarySearchTree {
    if (value > this.value) {
      if (this.rightChild) {
        this.rightChild.insertNode(value);
      } else {
        this.rightChild = new BinarySearchTree(value);
      }
    } else if (value < this.value) {
      if (this.leftChild) {
        this.leftChild.insertNode(value);
      } else {
        this.leftChild = new BinarySearchTree(value);
      }
    }
    return this;
  }
  public findNode(value) {
    if (value < this.value && this.leftChild) {
      return this.leftChild.findNode(value);
    }
    if (value > this.value && this.rightChild) {
      return this.rightChild.findNode(value);
    }
    return value === this.value;
  }
}
