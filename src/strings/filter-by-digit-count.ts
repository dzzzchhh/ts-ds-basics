interface IDigitFilterProps {
  characterSequence: string;
  digits: number;
}

export function filterByDigitCount({
  characterSequence,
  digits
}: IDigitFilterProps) {
  // TODO: optimize regexp
  const replaceMatcher = new RegExp(`\\d{${digits},} | \\d{${digits},}`, "g");
  const res = characterSequence.replace(replaceMatcher, "");
  return res;
}
