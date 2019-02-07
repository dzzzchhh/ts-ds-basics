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
   * @param {string} tagName
   * @returns {string}
   * @memberof StringSurround
   */
  public static surroundWithHTMLTag(input: string, tagName: string): string {
    const matcher = /(\w*\_\w+)/gi; // simple matcher for valid snake case strings
    return surroundSelection({
      endSurroundWith: `</${tagName}>`,
      inputString: input,
      matcher,
      startSurroundWith: `<${tagName}>`
    });
  }
}
