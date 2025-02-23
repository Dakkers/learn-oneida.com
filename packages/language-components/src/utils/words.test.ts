import { describe, it, expect } from "vitest";
import {
  whisperizeWord,
  unwhisperWord,
  removeAccents,
  removeWhisper,
  removeLongStress,
  sanitizeIrregularCharacters,
  replaceForCaret,
  replaceForGlottal,
  standardizeCharacters,
  isWordWhispered,
} from "./words";

describe("whisperizeWord", () => {
  it("should return an empty string if word is undefined", () => {
    expect(whisperizeWord(undefined)).toBe("");
  });

  it("should whisperize the last vowel in the word", () => {
    expect(whisperizeWord("hello!")).toBe("hello̲!");
    expect(whisperizeWord("helló!")).toBe("helló̲!");
    expect(whisperizeWord("helló·!")).toBe("helló̲·!");
  });

  it("should not change the word if it is already whispered", () => {
    expect(whisperizeWord("hello̲")).toBe("hello̲");
  });

  it("should remove whisper if shouldWhisper is false", () => {
    expect(whisperizeWord("hello̲", false)).toBe("hello");
  });
});

describe("unwhisperWord", () => {
  it("should remove whisper from the word", () => {
    expect(unwhisperWord("hello̲!")).toBe("hello!");
    expect(unwhisperWord("helló̲!")).toBe("helló!");
    expect(unwhisperWord("helló̲·!")).toBe("helló·!");
  });

  it("should return an empty string if word is undefined", () => {
    expect(unwhisperWord(undefined)).toBe("");
  });
});

describe("removeAccents", () => {
  it("should remove accents from the word", () => {
    expect(removeAccents("héllo")).toBe("hello");
    expect(removeAccents("ʌ́")).toBe("ʌ");
  });
});

describe("removeWhisper", () => {
  it("should remove whisper from the word", () => {
    expect(removeWhisper("hello̲")).toBe("hello");
  });
});

describe("removeLongStress", () => {
  it("should remove long stress from the word", () => {
    expect(removeLongStress("he·llo:")).toBe("hello");
  });
});

describe("sanitizeIrregularCharacters", () => {
  it("should sanitize irregular characters in the word", () => {
    expect(sanitizeIrregularCharacters("áéíóúʌ́·:ʔ")).toBe("aeiouʌʔ");
  });
});

describe("replaceForCaret", () => {
  it("should replace 'v' and '^' with 'ʌ'", () => {
    expect(replaceForCaret("v^")).toBe("ʌʌ");
  });
});

describe("replaceForGlottal", () => {
  it("should replace glottal characters with 'ʔ'", () => {
    expect(replaceForGlottal("ʼ'’")).toBe("ʔʔʔ");
  });
});

describe("standardizeCharacters", () => {
  it("should standardize characters in the word", () => {
    expect(standardizeCharacters("v^ʼ'’")).toBe("ʌʌʔʔʔ");
  });
});

describe("isWordWhispered", () => {
  it("should correctly determine if a word is whispered or not", () => {
    expect(isWordWhispered("hello̲")).toBe(true);
    expect(isWordWhispered("helló̲!")).toBe(true);
    expect(isWordWhispered("helló̲·!")).toBe(true);
    expect(isWordWhispered("hello!")).toBe(false);
    expect(isWordWhispered("helló!")).toBe(false);
    expect(isWordWhispered("helló·!")).toBe(false);
  });
});
