const WHISPER_CHAR = "̲";
const WHISPER_REGEX = new RegExp(WHISPER_CHAR, "g");

export function whisperizeWord(word: string | undefined, shouldWhisper = true) {
  if (!word) {
    return '';
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
