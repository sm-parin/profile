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

export const shuffleCompanies = (data: Record<string, any>) => {
  
  const entries = Object.entries(data);

  // Fisher-Yates shuffle
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }

  // Reconstruct object with shuffled order
  const shuffled: Record<string, any> = {};
  for (const [key, value] of entries) {
    shuffled[key] = value;
  }

  return shuffled;
};

export const hash = (string: string) => {
  if (!string) return "";

  return `#${string.toLowerCase().replaceAll(" ", "_")}`;
};

export const unhash = (hash: string) => {
  if (!hash) return "";

  return hash.replace(/^#/, "").replaceAll("_", " ");
};
