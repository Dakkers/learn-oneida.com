interface Options {
  characterSet?: string[];
  diagonals?: boolean;
  minLength?: number;
  maxLength?: number;
  size?: number;
}

const effort = 10000;

export const ONEIDA_CHAR_SET = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "ʌ",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "ʌ́",
  "h",
  "k",
  "l",
  "n",
  "s",
  "t",
  "w",
  "y",
  "ʔ",
];

export function generateWordsearch(
  words: string[],
  options?: Options,
): {
  grid: string[];
  used: string[];
} {
  const opts = options ?? {};
  const allowDiagonals = opts.diagonals ?? false;
  const minLength = opts.minLength ?? 3;
  const maxLength = opts.maxLength ?? 10;
  const size = opts.size ?? 10;

  const allowedWords = words.filter((w) => {
    const len = splitUtf8(w).length;
    return len >= minLength && len <= maxLength;
  });

  const grid: string[] = [];
  const used: string[] = [];
  const usedMap: { [word: string]: boolean } = {};
  for (let i = 0; i < size * size; i++) {
    grid[i] = " ";
  }

  const dxs = allowDiagonals ? [0, 1, 1, 1, 0, -1, -1, -1] : [0, 1, 0, -1];
  const dys = allowDiagonals ? [-1, -1, 0, 1, 1, 1, 0, -1] : [-1, 0, 1, 0];

  const rand = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const get = (x: number, y: number) => {
    return grid[y * size + x];
  };

  const set = (x: number, y: number, letter: string) => {
    grid[y * size + x] = letter;
  };

  const tryword = (
    x: number,
    y: number,
    dx: number,
    dy: number,
    word: string,
  ) => {
    let ok = false;
    const chars = splitUtf8(word);
    for (let i = 0; i < chars.length; i++) {
      const l = chars[i];
      if (x < 0 || y < 0 || x >= size || y >= size) {
        return false;
      }

      const cur = get(x, y);
      if (cur != " " && cur != l) {
        return false;
      }
      if (cur == " ") {
        ok = true;
      }

      x += dx;
      y += dy;
    }
    return ok;
  };

  const putword = (
    x: number,
    y: number,
    dx: number,
    dy: number,
    word: string,
  ) => {
    const chars = splitUtf8(word);
    for (let i = 0; i < chars.length; i++) {
      const l = chars[i];
      // const l = word[i].toUpperCase();
      set(x, y, l);
      x += dx;
      y += dy;
    }
    used.push(word);
    usedMap[word] = true;
  };

  for (let i = 0; i < size * size * effort; i++) {
    if (used.length == allowedWords.length) {
      break;
    }

    const word = allowedWords[rand(allowedWords.length)];
    if (usedMap[word]) {
      continue;
    }

    const x = rand(size);
    const y = rand(size);
    const d = rand(dxs.length);
    const dx = dxs[d];
    const dy = dys[d];
    if (tryword(x, y, dx, dy, word)) {
      putword(x, y, dx, dy, word);
    }
  }

  const characterSet = opts.characterSet
    ? opts.characterSet
    : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] == " ") {
      grid[i] = characterSet[rand(characterSet.length)];
    }
  }

  used.sort();

  return {
    grid,
    used,
  };
}

function splitUtf8(str: string) {
  const itr = new Intl.Segmenter("en", { granularity: "grapheme" }).segment(
    str,
  );
  return Array.from(itr, ({ segment }) => segment);
}
