export class Stack {
  private head;
  private size;

  constructor(value: any) {
    this.head = null;
    this.size = 0;
    this.push(value);
  }

  public push(value): Stack {
    this.head = { value, next: this.head };
    this.size++;
    return this;
  }
  public pop(): Stack {
    if (this.size > 0) {
      this.head = this.head.next;
      this.size--;
    }
    return this;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public peek() {
    return this.head;
  }
}
