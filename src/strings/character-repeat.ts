export interface ICharacterSequenceComposer {
  sequence: string;
  repeatCount: number;
}

/**
 * Given a string and a (n) number of repetitions
 * composes a string where original string
 * is repeated (n) times
 * @export
 * @param {ICharacterSequenceComposer} {
 *   sequence,
 *   repeatCount
 * }
 * @returns {string}
 */
export function composeCharacterSequence({
  sequence,
  repeatCount
}: ICharacterSequenceComposer): string {
  return sequence.repeat(repeatCount);
}
