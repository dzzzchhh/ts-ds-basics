export const isPalindrome = (string: string): boolean => {
  const pristineString = string.toLowerCase().replace(/[^\w]/g, "");
  const invertedPristineString = pristineString
    .split("")
    .reverse()
    .join("");
  return pristineString === invertedPristineString;
};
