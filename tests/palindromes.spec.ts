import { FunctionalTestSuite } from ".";
import { isPalindrome } from "../src/strings/is-palindrome";

const palindrome = "papap";
const complexPalindrome = "Dogma? I am God";
const invalidString = "An invalid string";

const palindromeSuite = new FunctionalTestSuite("Palindromes", isPalindrome)
  .addCase({
    expectedResult: true,
    testCaseLabel: "Simple one word palindrome",
    testInput: palindrome
  })
  .addCase({
    expectedResult: true,
    testCaseLabel: "Phrase palindrome",
    testInput: complexPalindrome
  })
  .addCase({
    expectedResult: false,
    testCaseLabel: "Invalid string should not pass",
    testInput: invalidString
  })
  .run();
