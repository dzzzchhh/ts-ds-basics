import { expect } from "chai";
import "mocha";
import { ArrayQueue } from "./index";

let queue: ArrayQueue;
beforeEach(() => {
  queue = new ArrayQueue(1);
});

describe("Queue", () => {
  it("should correctly create queues", () => {
    queue.enqueue(2);
    expect(queue.size()).to.eq(2);
  });
  it("should correctly dequeue", () => {
    queue.enqueue(2).enqueue(3);
    expect(queue.dequeue()).to.eq(3);
    expect(queue.dequeue()).to.eq(2);
    expect(queue.dequeue()).to.eq(1);
    expect(queue.dequeue()).to.eq(undefined);
  });
  it("should peek correctly", () => {
    queue.enqueue(2).enqueue(3);
    expect(queue.peek()).to.eq(1);
  });
  it("should correctly detect isEmpty()", () => {
    expect(queue.isEmpty()).to.eq(false);
    queue.dequeue();
    expect(queue.isEmpty()).to.eq(true);
  });
});
