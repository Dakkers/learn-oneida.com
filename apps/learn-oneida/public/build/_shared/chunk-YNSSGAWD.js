import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";

// app/utils/words.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/words.ts"
  );
  import.meta.hot.lastModified = "1718240757475.7546";
}
var WHISPER_CHAR = "\u0332";
var WHISPER_REGEX = new RegExp(WHISPER_CHAR, "g");
function whisperizeWord(word, shouldWhisper = true) {
  if (!word) {
    return "";
  }
  const vowels = ["a", "e", "i", "o", "u", "\u028C"];
  const vowelsAccented = ["\xE1", "\xE9", "\xED", "\xF3", "\xFA", "\u028C\u0301"];
  const vowelsWhispered = ["a\u0332", "e\u0332", "i\u0332", "o\u0332", "u\u0332", "\u028C\u0332"];
  const vowelsWhisperedAccented = ["\xE1\u0332", "\xE9\u0332", "\xED\u0332", "\xF3\u0332", "\xFA\u0332", "\u028C\u0332\u0332\u0301"];
  const reversedIndex = word.split("").reverse().findIndex(
    (char2) => vowels.includes(char2) || vowelsAccented.includes(char2) || char2 === WHISPER_CHAR
  );
  const index = word.length - reversedIndex - 1;
  const char = word.charAt(index);
  if (shouldWhisper) {
    if (vowelsWhispered.includes(char) || vowelsWhisperedAccented.includes(char)) {
      return word;
    }
    const index1 = vowels.indexOf(char);
    const index2 = vowelsAccented.indexOf(char);
    const lookupIndex = Math.max(index1, index2);
    const result = word.split("");
    result[index] = index1 >= 0 ? vowelsWhispered[lookupIndex] : vowelsWhisperedAccented[lookupIndex];
    return result.join("");
  } else {
    return word.replace(WHISPER_REGEX, "");
  }
}
function unwhisperWord(word) {
  return whisperizeWord(word, false);
}
function removeAccents(value) {
  return value.replaceAll("\xE1", "a").replaceAll("\xE9", "e").replaceAll("\xED", "i").replaceAll("\xF3", "o").replaceAll("\xFA", "u").replaceAll("\u028C\u0301", "\u028C");
}
function removeWhisper(value) {
  return value.replaceAll("a\u0332", "a").replaceAll("e\u0332", "e").replaceAll("i\u0332", "i").replaceAll("o\u0332", "o").replaceAll("u\u0332", "u").replaceAll("\u028C\u0332", "\u028C").replaceAll("\u02CD", "");
}
function removeLongStress(value) {
  return value.replaceAll("\xB7", "").replaceAll(":", "");
}
function sanitizeIrregularCharacters(value) {
  return [removeAccents, removeWhisper, removeLongStress].reduce(
    (result, fn) => fn(result),
    value.toLowerCase()
  );
}
function replaceForCaret(value) {
  let result = value;
  for (const char of ["v", "^"]) {
    result = result.replaceAll(char, "\u028C");
  }
  return result;
}
function replaceForGlottal(value) {
  let result = value;
  for (const char of ["\u02BC", "'", "\u2019"]) {
    result = result.replaceAll(char, "\u0294");
  }
  return result;
}
function standardizeCharacters(value) {
  return [replaceForCaret, replaceForGlottal].reduce(
    (result, fn) => fn(result),
    value.toLowerCase()
  );
}

export {
  whisperizeWord,
  unwhisperWord,
  sanitizeIrregularCharacters,
  standardizeCharacters
};
//# sourceMappingURL=/build/_shared/chunk-YNSSGAWD.js.map
