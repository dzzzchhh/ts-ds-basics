import { expect } from "chai";
import "mocha";

import { isPalindrome } from "./";

const palindrome = "papap";
const complexPalindrome = "Dogma? I am God";
const invalidString = "An invalid string";

describe("Palindromes", function() {
  it("should correctly detect one-word palindromes", function() {
    expect(isPalindrome(palindrome)).to.be.true;
  });
  it("should correctly detect phrase palindromes", function() {
    expect(isPalindrome(complexPalindrome)).to.be.true;
  });
  it("should correctly detect non-palindromes", function() {
    expect(isPalindrome(invalidString)).to.be.false;
  });
});
