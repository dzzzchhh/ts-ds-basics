export function getCapitalizedWordsList(words: string): string[] {
  return words.match(/[A-Z]\w+/g);
}
