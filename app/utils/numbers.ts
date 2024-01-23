import { unwhisperWord } from "./words";

export function translateNumber(value: string): string {
  if (!value) {
    return "";
  }
  const val = parseInt(value);

  const map = new Map([
    [1, "úska"],
    [2, "tékni"],
    [3, "áhsʌ̲"],
    [4, "kayé"],
    [5, "wisk"],
    [6, "yá·yak"],
    [7, "tsyá·tak"],
    [8, "tékluʔ"],
    [9, "wá·tluʔ"],
    [10, "oyé·li̲"],
    [20, "tewáhsʌ"],
  ]);

  const digit = val % 10;
  const digitWord = map.get(digit);

  if (val === 0) {
    return "???";
  } else if (map.has(val)) {
    return map.get(val) ?? "";
  } else if (val >= 11 && val <= 19) {
    return `${unwhisperWord(digitWord)} yawʌ·lé`;
  } else if (val >= 21 && val <= 29) {
    return `${map.get(20)} ${digitWord}`;
  } else if (val < 100) {
    const numTens = Math.floor(val / 10);
    return [
      unwhisperWord(map.get(numTens)),
      `niwáhsʌ`,
      digit === 0 ? "" : digitWord,
    ].join(" ");
  } else if (val < 10000) {
    const numHundreds = Math.floor(val / 100);
    const remainder = val % 100;
    return [
      unwhisperWord(translateNumber(numHundreds.toString())),
      `tewʌʔnyáweluʔ`,
      remainder === 0 ? "" : translateNumber(remainder.toString()),
    ]
      .join(" ")
      .trim();
  }

  return "TBD";
}
