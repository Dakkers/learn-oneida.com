import { arrayify } from "@ukwehuwehneke/ohutsya";
import type { AudioQuizProps } from "./AudioQuiz";

export function createStandardAudioQuizEnglishOptions(
  list: Array<{
    key: string | number;
    en: string | string[];
  }>,
) {
  const result: AudioQuizProps["englishOptions"] = [];
  for (const datum of list) {
    const enArr = arrayify(datum.en);
    for (const en of enArr) {
      result.push({
        key: datum.key,
        text: en,
      });
    }
  }
  return result;
}
