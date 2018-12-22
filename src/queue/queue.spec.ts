import { ArrayQueue } from "./index";
import { expect } from "chai";
import "mocha";

let queue: ArrayQueue;
beforeEach(() => {
  queue = new ArrayQueue(1);
});

describe("Queue", function() {
  it("should correctly create queues", function() {
    queue.enqueue(2);
    expect(queue.size()).to.eq(2);
  });
  it("should correctly dequeue", function() {
    queue.enqueue(2).enqueue(3);
    expect(queue.dequeue()).to.eq(3);
    expect(queue.dequeue()).to.eq(2);
    expect(queue.dequeue()).to.eq(1);
    expect(queue.dequeue()).to.be.undefined;
  });
  it("should peek correctly", function() {
    queue.enqueue(2).enqueue(3);
    expect(queue.peek()).to.eq(1);
  });
  it("should correctly detect isEmpty()", function() {
    expect(queue.isEmpty()).to.be.false;
    queue.dequeue();
    expect(queue.isEmpty()).to.be.true;
  });
});
