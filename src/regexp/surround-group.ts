interface IStringSurround {
  matcher: RegExp;
  inputString: string;
  startSurroundWith: string;
  endSurroundWith?: string;
}

function surroundSelection(params: IStringSurround): string {
  const surroundEnd = params.endSurroundWith || params.startSurroundWith; // in case when we need to wrap with quotation marks
  const replacementTemplate = `${params.startSurroundWith}$1${surroundEnd}`;
  return params.inputString.replace(params.matcher, replacementTemplate);
}

/**
 * A utility class for surrounding strings with provided set of parameters
 * @export
 * @class StringSurround
 */
export class StringSurround {
  /**
   * A showcase method
   * @static
   * @param {string} input
   * @returns {string}
   * @memberof StringSurround
   */
  public static surroundWithBraces(input: string): string {
    const matcher = /(\w*\_\w+)/gi; // simple matcher for valid snake case strings
    return surroundSelection({
      endSurroundWith: ")",
      inputString: input,
      matcher,
      startSurroundWith: "("
    });
  }
}
