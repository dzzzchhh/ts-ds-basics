export const isPalindrome = (string: string): boolean => {
  const pristineString = string
    .toLowerCase()
    .match(/\w/g)
    .join("");
  const invertedPristineString = pristineString
    .split("")
    .reverse()
    .join("");
  return pristineString === invertedPristineString;
};
