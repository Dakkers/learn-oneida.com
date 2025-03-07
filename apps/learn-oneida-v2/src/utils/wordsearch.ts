interface Options {
  characterSet?: string[];
  diagonals?: boolean;
  minLength?: number;
  maxLength?: number;
  size?: number;
}

class WordSearch {
  readonly width: number;
  readonly height: number;
  readonly grid: string[];
  readonly words: string[];

  constructor(width: number, height: number, grid: string[], words: string[]) {
    this.width = width;
    this.height = height;
    this.grid = grid;
    this.words = words;
  }

  get(x: number, y: number) {
    return this.grid[y * this.width + x];
  }

  toString() {
    let result = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        result += this.get(x, y) + " ";
      }
      result += "\n";
    }
    return result;
  }
}

const effort = 10000;

export function generateWordsearch(words: string[], options?: Options): {
  grid: string[]
  used: string[]
} {
  const opts = options ?? {};
  const allowDiagonals = opts.diagonals ?? false;
  const minLength = opts.minLength ?? 3;
  const maxLength = opts.maxLength ?? 10;
  const size = opts.size ?? 10;

  const allowedWords = words
    .filter((w) => w.length >= minLength && w.length <= maxLength)
  // console.info(`${words.length} words`);
  // console.info(`size: ${options.width} x ${options.height}`);
  // console.info(`diagonals: ${options.diagonals}`);
  // console.info(`minimum word length: ${options.minLength}`);
  // console.info(`maximum word length: ${options.maxLength}`);
  // console.info(`effort: ${effort}`);

  const grid: string[] = [];
  const used: string[] = [];
  const usedMap: { [word: string]: boolean } = {};
  for (let i = 0; i < size * size; i++) {
    grid[i] = " ";
  }

  const dxs = allowDiagonals ? [0, 1, 1, 1, 0, -1, -1, -1] : [0, 1, 0, -1];
  const dys = allowDiagonals ?  [-1, -1, 0, 1, 1, 1, 0, -1] : [-1, 0, 1, 0];

  const rand = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const get = (x: number, y: number) => {
    return grid[y * size + x];
  }

  const set = (x: number, y: number, letter: string) => {
    grid[y * size + x] = letter;
  }

  const tryword = (x: number, y: number, dx: number, dy: number, word: string) => {
    let ok = false;
    for (let i = 0; i < word.length; i++) {
      // const l = word[i].toUpperCase();
      const l = word[i];
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
  }

  const putword = (x: number, y: number, dx: number, dy: number, word: string) => {
    for (let i = 0; i < word.length; i++) {
      const l = word[i];
      // const l = word[i].toUpperCase();
      set(x, y, l);
      x += dx;
      y += dy;
    }
    used.push(word);
    usedMap[word] = true;
  }

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

  //const fillage = grid.reduce((t, c) => t + (c == ' ' ? 0 : 1), 0);

  const characterSet = opts.characterSet ? opts.characterSet : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] == " ") {
      grid[i] = characterSet[rand(characterSet.length)];
    }
  }

  used.sort();

  //console.info(`${used.length} words`);
  //console.info(`${fillage}/${width * height} filled (${(fillage*100/width/height).toFixed(1)}%)`);
  //print();
  //console.info(used.join(','));

  return {
    grid,
    used,
  }
}
