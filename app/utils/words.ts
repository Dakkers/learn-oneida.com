const WHISPER_CHAR = "̲";
const WHISPER_REGEX = new RegExp(WHISPER_CHAR, "g");

export function whisperizeWord(word: string | undefined, shouldWhisper = true) {
  if (!word) {
    return "";
  }

  const vowels = ["a", "e", "i", "o", "u", "ʌ"];
  const vowelsAccented = ["á", "é", "í", "ó", "ú", "ʌ́"];
  const vowelsWhispered = ["a̲", "e̲", "i̲", "o̲", "u̲", "ʌ̲"];
  const vowelsWhisperedAccented = ["á̲", "é̲", "í̲", "ó̲", "ú̲", "ʌ̲̲́"];
  const reversedIndex = word
    .split("")
    .reverse()
    .findIndex(
      (char) =>
        vowels.includes(char) ||
        vowelsAccented.includes(char) ||
        char === WHISPER_CHAR,
    );
  const index = word.length - reversedIndex - 1;
  const char = word.charAt(index);

  if (shouldWhisper) {
    if (
      vowelsWhispered.includes(char) ||
      vowelsWhisperedAccented.includes(char)
    ) {
      return word;
    }
    const index1 = vowels.indexOf(char);
    const index2 = vowelsAccented.indexOf(char);
    const lookupIndex = Math.max(index1, index2);
    const result = word.split("");
    result[index] =
      index1 >= 0
        ? vowelsWhispered[lookupIndex]
        : vowelsWhisperedAccented[lookupIndex];

    return result.join("");
  } else {
    return word.replace(WHISPER_REGEX, "");
  }
}

export function unwhisperWord(word: string | undefined) {
  return whisperizeWord(word, false);
}

export function removeAccents(value: string) {
  return value
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u")
    .replaceAll("ʌ́", "ʌ");
}

export function removeWhisper(value: string) {
  return value
    .replaceAll("a̲", "a")
    .replaceAll("e̲", "e")
    .replaceAll("i̲", "i")
    .replaceAll("o̲", "o")
    .replaceAll("u̲", "u")
    .replaceAll("ʌ̲", "ʌ")
    .replaceAll("ˍ", "");
}

export function removeLongStress(value: string) {
  return value.replaceAll("·", "").replaceAll(":", "");
}

export function sanitizeIrregularCharacters(value: string) {
  return [removeAccents, removeWhisper, removeLongStress].reduce(
    (result, fn) => fn(result),
    value.toLowerCase(),
  );
}

function replaceForCaret(value: string) {
  let result = value;
  for (const char of ["v", "^"]) {
    result = result.replaceAll(char, "ʌ");
  }
  return result;
}

function replaceForGlottal(value: string) {
  let result = value;
  for (const char of ["ʼ", "'", "’"]) {
    result = result.replaceAll(char, "ʔ");
  }
  return result;
}

export function standardizeCharacters(value: string) {
  return [replaceForCaret, replaceForGlottal].reduce(
    (result, fn) => fn(result),
    value.toLowerCase(),
  );
}
