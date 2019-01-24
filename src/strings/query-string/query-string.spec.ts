import { expect } from "chai";
import "mocha";

import { queryStringComposer } from "./";

describe("Query string composer", () => {
  it("should compose correct query string", () => {
    const testObject = { name: "Mike", age: 24, country: "USA" };
    const expectedOutput = "?name=Mike&age=24&country=USA";
    expect(queryStringComposer(testObject)).to.eq(expectedOutput);
  });
});
