export interface ICharacterSequenceComposer {
  sequence: string;
  repeatCount: number;
}

export function composeCharacterSequence({
  sequence,
  repeatCount
}: ICharacterSequenceComposer): string {
  return sequence.repeat(repeatCount);
}
