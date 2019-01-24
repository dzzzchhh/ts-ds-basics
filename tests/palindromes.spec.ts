import { expect } from "chai";
import "mocha";

import { isPalindrome } from "../src/palindromes";

const palindrome = "papap";
const complexPalindrome = "Dogma? I am God";
const invalidString = "An invalid string";

describe("Palindromes", () => {
  it("should correctly detect one-word palindromes", () => {
    expect(isPalindrome(palindrome)).to.eq(true);
  });
  it("should correctly detect phrase palindromes", () => {
    expect(isPalindrome(complexPalindrome)).to.eq(true);
  });
  it("should correctly detect non-palindromes", () => {
    expect(isPalindrome(invalidString)).to.eq(false);
  });
});
