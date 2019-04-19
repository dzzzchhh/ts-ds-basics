interface IOccurenceCounterProps {
  list: any[];
  value: any;
}

/**
 * Count occurences of a value in a list
 *
 * @export
 * @param {IOccurenceCounterProps} {list,value}
 * @returns {number}
 * @see https://jsperf.com/simple-unique-detection
 * @see https://jsperf.com/count-the-occurrences More test cases including reduce and for
 */
export function occurence({ list, value }: IOccurenceCounterProps): number {
  let counter = 0;
  for (const i of list) {
    if (i === value) {
      counter += 1;
    }
  }
  return counter;
}
