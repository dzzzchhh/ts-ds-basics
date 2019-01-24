export const isPalindrome = (s: string): boolean => {
  const pristineString = s.toLowerCase().replace(/[^\w]/g, "");
  const invertedPristineString = pristineString
    .split("")
    .reverse()
    .join("");
  return pristineString === invertedPristineString;
};
