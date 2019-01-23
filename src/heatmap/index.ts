interface IHeatmap {
  uniqueTokens: number;
  length: number;
  heatmap: object;
}

export function composeHeatmap(characterSequence: string): IHeatmap {
  let uniqueTokens = 0;
  const heatmap = characterSequence.split("").reduce((a, c) => {
    const currentKeyValue = a[c] ? a[c] + 1 : 1;
    if (currentKeyValue === 1) {
      uniqueTokens += 1;
    }
    return { ...a, [c]: currentKeyValue };
  }, {});
  return {
    heatmap,
    uniqueTokens,
    length: characterSequence.length
  };
}
