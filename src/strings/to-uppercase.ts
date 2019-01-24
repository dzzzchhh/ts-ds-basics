interface IToUppercase {
  characterSequence: string;
  charactersToUppercase: string[];
}

export const toUppercase = ({
  characterSequence,
  charactersToUppercase
}: IToUppercase): string => {
  const matcher = new RegExp(`[${charactersToUppercase}]`, "ig"); // create a matcher dynamicaly
  return characterSequence.replace(matcher, match => match.toUpperCase());
};
