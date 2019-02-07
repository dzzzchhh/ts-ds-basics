interface IStringSurround {
  matcher: RegExp;
  inputString: string;
}

interface IStringSurroundPrivate extends IStringSurround {
  startSurroundWith: string;
  endSurroundWith?: string;
}

export interface IStringSurroundPublic extends IStringSurround {
  tagName: string;
}

const surroundSelection = ({
  endSurroundWith,
  inputString,
  matcher,
  startSurroundWith
}: IStringSurroundPrivate): string => {
  const surroundEnd = endSurroundWith || startSurroundWith;
  const replacementTemplate = `${startSurroundWith}$1${surroundEnd}`;
  return inputString.replace(matcher, replacementTemplate);
};

export const surroundWithHTMLTag = ({
  inputString,
  matcher,
  tagName
}: IStringSurroundPublic): string =>
  surroundSelection({
    endSurroundWith: `</${tagName}>`,
    inputString,
    matcher,
    startSurroundWith: `<${tagName}>`
  });
