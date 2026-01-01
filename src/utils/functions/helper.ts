export const recursivelySetData = (obj: any, segments: string[]): any => {
  if (segments.length === 0) {
    return obj;
  }
  const [first, ...rest] = segments;
  if (obj && obj[first]) {
    return recursivelySetData(obj[first], rest);
  }
  return null;
};

export const createTypeSequence = (
  words: string[] | null | undefined,
  pause = 1000
): (string | number)[] => {
  if (!words) return [];
  const seq: (string | number)[] = [];
  for (const w of words) {
    seq.push(w, pause);
  }
  return seq;
};
