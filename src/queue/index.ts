export class ArrayQueue {
  private list = [];
  constructor(value) {
    if (value) {
      this.enqueue(value);
    }
  }
  public enqueue(value): ArrayQueue {
    this.list.unshift(value);
    return this;
  }
  public dequeue(): ArrayQueue {
    return this.list.shift();
  }
  public peek() {
    return this.list[this.list.length - 1];
  }
  public size(): number {
    return this.list.length;
  }
  public isEmpty(): boolean {
    return this.list.length === 0;
  }
}
