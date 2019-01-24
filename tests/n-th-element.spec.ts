import { expect } from "chai";
import "mocha";

import { nth } from "../src/lists/n-th-element";

const list = [1, 2, 3, 4, 5, 6, 7, 8];
describe("nth", () => {
  it("should select 3rd element in the list", () => {
    expect(nth({ list, th: 3 })).to.eql([3, 6]);
  });
  it("should select 2nd element in the list", () => {
    expect(nth({ list, th: 2 })).to.eql([2, 4, 6, 8]);
  });
});
