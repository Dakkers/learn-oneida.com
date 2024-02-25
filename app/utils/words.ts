const WHISPER_CHAR = "̲";
const WHISPER_REGEX = new RegExp(WHISPER_CHAR, "g");

export function whisperizeWord(word: string | undefined, shouldWhisper = true) {
  if (!word) {
    return "";
  }

  const vowels = ["a", "e", "i", "o", "u", "ʌ"];
  const vowelsWhispered = ["a̲", "e̲", "i̲", "o̲", "u̲", "ʌ̲"];
  const reversedIndex = word
    .split("")
    .reverse()
    .findIndex((char) => vowels.includes(char) || char === WHISPER_CHAR);
  const index = word.length - reversedIndex - 1;
  const char = word.charAt(index);

  if (shouldWhisper) {
    if (vowelsWhispered.includes(char)) {
      return word;
    }
    const lookupIndex = vowels.indexOf(char);
    const result = word.split("");
    result[index] = vowelsWhispered[lookupIndex];
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

export function removeGlottalStop(value: string) {
  return value
    .replaceAll("ʔ", "")
    .replaceAll("ʼ", "") // U+02bc
    .replaceAll("'", "")
    .replaceAll("’", ""); // U+2019
}

export function removeLongStress(value: string) {
  return value.replaceAll("·", "").replaceAll(":", "");
}

export function sanitizeIrregularCharacters(value: string) {
  return [
    removeAccents,
    removeWhisper,
    removeGlottalStop,
    removeLongStress,
  ].reduce((result, fn) => fn(result), value.toLowerCase());
}
