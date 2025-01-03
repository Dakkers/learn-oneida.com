import {
  translatePhrase,
  convertBreakdownToPlainText,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { getParticlesForGroup } from "@/components/articles/ParticlesTable";
import { getTranslationExercisesForModule } from "@/components/practice/TranslationExercises";
import { createModule4Data } from "@/data/module04";
import { arrayify } from "@ukwehuwehneke/language-components";
import { getDialogueModule02 } from "~/data/module02/dialogue";
import type { DialogueTableData } from "@/components/DialogueTable";
import {
  getDialogueModule01,
  getAudioFileForEnglishName,
  getEnglishNames,
  getAllModule01Paradigms,
  getPeopleTerms,
} from "~/data/module01";
import {
  getAudioFilenameForPronoun,
  type ParadigmData,
} from "@/components/ParadigmTable";
import {
  getAboutSomeoneExamples,
  getAllModule02Paradigms,
  getDeceasedRelatives,
  getFamilyParadigms,
  getLastNameExamples,
  getThingsThatAreTheSameExamples,
} from "@/data/module02";
import { formatAudioFileWithSuffix } from "@/utils/misc";
import {
  getAllModule03Paradigms,
  getClanAnimalList,
  getCountingPeopleExamples,
  getCountingPeopleLists,
  getDialogueModule03,
  getDomesticatedAnimalList,
  getDomesticatedBabyAnimalList,
  getNationsList,
} from "@/data/module03";

export type ModuleNumber =
  | "module01"
  | "module02"
  | "module03"
  | "module04"
  | "module05"
  | "module06";

export type AudioFriendlyData = Array<{
  audioFile: string;
  en: string;
  translation: string;
}>;

export function formatParadigmDataAsAudioFiles(data: ParadigmData) {
  return data.phrases.map((val) => ({
    audioFile: `/${data.audioFolder}/${getAudioFilenameForPronoun(val.pronoun, data.type)}.mp3`,
    en: translatePhrase(data.translation, val.pronoun),
    translation: convertBreakdownToPlainText(val.breakdown),
  }));
}

export function setupModule4Data(keyGroups: string[]) {
  const mod4Data = createModule4Data();
  const isHereKeys = [
    "data-is-here",
    "data-was-here",
    "data-will-be-here",
    "data-might-be-here",
    "data-is-not-here",
    "data-was-not-here",
    "data-will-not-be-here",
  ];
  const thoughtKeys = ["data-thought"];
  const wantKeys = [
    "data-want",
    "data-doesnt-want",
    "data-used-to-want",
    // "data-didnt-used-to-want",
  ];

  const keysToUse: string[] = [];
  const someMap: Record<string, string[]> = {
    here: isHereKeys,
    thought: thoughtKeys,
    want: wantKeys,
  };
  for (const keyGroup of keyGroups) {
    keysToUse.push(...(someMap[keyGroup] ?? []));
  }

  const stuff = mod4Data.filter((group) => keysToUse.includes(group.key));

  const result: AudioFriendlyData = [];
  for (const group of stuff) {
    for (const datum of group.data.phrases) {
      const folder = group.key.replace("data-", "").replaceAll("-", "_");
      result.push({
        audioFile: `/module04/${folder}/${datum.pronoun}.mp3`,
        en: translatePhrase(group.data.translation, datum.pronoun),
        translation: datum.phrase,
      });
    }
  }
  return result;
}

export function formatDeceasedRelativesAudioFiles(): AudioFriendlyData {
  return getDeceasedRelatives();
}

export function formatPeopleAudioFiles(): AudioFriendlyData {
  return _.flattenDeep(
    Object.entries(getPeopleTerms()).map(([key, val]) => val),
  ).map((ppl) => ({
    ...ppl,
    en: arrayify(ppl.en).join("\n"),
    translation: convertBreakdownToPlainText(ppl.breakdown),
  }));
}

export function formatEnglishNamesAudioFiles(): AudioFriendlyData {
  const names = getEnglishNames();
  return _.flattenDeep(
    names.map((datum) =>
      arrayify(datum.translation).map((txt, i) => ({
        audioFile: formatAudioFileWithSuffix(datum, i),
        en: arrayify(datum.en)[0],
        translation: txt,
      })),
    ),
  );
}

export function formatTranslationExerciseAudioFiles(
  module: ModuleNumber,
): AudioFriendlyData {
  if (["module04", "module05"].includes(module)) {
    return [];
  }
  // @ts-expect-error TODO: module number shenanigans
  return getTranslationExercisesForModule(module).map((datum) => ({
    audioFile: `/translation_exercises/${module}/ex_${datum[0]}.mp3`,
    en: "",
    translation: datum[1],
  }));
}

export function formatParticleAudioFiles(
  module: ModuleNumber,
): AudioFriendlyData {
  // @ts-expect-error TODO: module number shenanigans
  return getParticlesForGroup(module).map((datum) => ({
    // @ts-expect-error TODO: Why is `datum` weird?
    audioFile: `/particles/${module}/${datum.key}.mp3`,
    // @ts-expect-error TODO: Why is `datum` weird?
    en: datum.en,
    // @ts-expect-error TODO: Why is `datum` weird?
    translation: datum.translation,
  }));
}

export function formatParticleExampleAudioFiles(module: ModuleNumber) {
  if (["module04", "module05", "module06"].includes(module)) {
    return [];
  }
  // @ts-expect-error TODO: module number shenanigans
  const data = getParticlesForGroup(module);
  const result = [];
  for (const datum of data) {
    // @ts-expect-error TODO: Why is `datum` weird?
    const examples = datum.examples ?? [];
    for (let i = 0; i < examples.length; i++) {
      // @ts-expect-error TODO: Why is `datum` weird?
      const filepath = `/particle_examples/${module}/${datum.key}${examples.length > 1 ? `_${i + 1}` : ""}.mp3`;
      result.push({
        audioFile: filepath,
        en: examples[i].en,
        translation: examples[i].translation,
      });
    }
  }
  return result;
}

export function formatDialogueAudioFiles(module: ModuleNumber) {
  const fn = {
    module01: getDialogueModule01,
    module02: getDialogueModule02,
    module03: getDialogueModule03,
    module04: null,
    module05: null,
    module06: null,
  }[module];

  const data = fn?.() ?? {};
  const result: AudioFriendlyData = [];
  for (const key in data) {
    // @ts-expect-error Not sure what to do atm
    const arr = data[key] as DialogueTableData;
    arr.forEach((item, i) => {
      if (!(item.hasAudio ?? true)) {
        return;
      }
      const sentences = arrayify(item.one);
      sentences.forEach((s, j) => {
        result.push({
          audioFile: `/${module}/dialogue/${key}/${i + 1}-${j + 1}.mp3`,
          en: arrayify(item.en ?? "")[0],
          translation: s,
        });
      });
    });
  }
  return result;
}

export function formatFamilyAudioFiles() {
  return _.flattenDeep(
    getFamilyParadigms().map((d) => formatParadigmDataAsAudioFiles(d)),
  );
}

export function formatCountingPeopleFiles(): AudioFriendlyData {
  const result: AudioFriendlyData = [];
  const data = getCountingPeopleLists();
  for (const val of Object.values(data)) {
    for (const row of val) {
      if (row.audioFile) {
        result.push({
          audioFile: row.audioFile,
          en: row.en as string,
          translation: row.translation as string,
        });
      }
    }
  }
  return result;
}

export function getParadigmAudioForModule(
  module: ModuleNumber,
): AudioFriendlyData {
  const fn = {
    module01: getAllModule01Paradigms,
    module02: getAllModule02Paradigms,
    module03: getAllModule03Paradigms,
    module04: null,
    module05: null,
    module06: null,
  }[module];
  if (!fn) {
    return [];
  }
  return _.flatten(
    fn()
      .filter((d) => d.audioFolder)
      .map((d) => formatParadigmDataAsAudioFiles(d)),
  );
}

export function getSentencesForModule(module: ModuleNumber): AudioFriendlyData {
  const result = [
    ...formatParticleExampleAudioFiles(module),
    ...formatTranslationExerciseAudioFiles(module),
    ...formatDialogueAudioFiles(module),
  ];
  if (module === "module01") {
  } else if (module === "module02") {
    result.push(...getAboutSomeoneExamples());
    result.push(...getLastNameExamples());
    result.push(...getThingsThatAreTheSameExamples());
  } else if (module === "module03") {
    result.push(...getCountingPeopleExamples());
  }
  return result;
}

export function getSingleWordsForModule(
  module: ModuleNumber,
): AudioFriendlyData {
  const result: AudioFriendlyData = [
    ...formatParticleAudioFiles(module),
    ...getParadigmAudioForModule(module),
  ];
  if (module === "module01") {
    result.push(...formatEnglishNamesAudioFiles());
    result.push(...formatPeopleAudioFiles());
  } else if (module === "module02") {
    result.push(...getDeceasedRelatives());
  } else if (module === "module03") {
    result.push(...getNationsList());
    result.push(...getClanAnimalList());
    result.push(...getDomesticatedAnimalList());
    result.push(...getDomesticatedBabyAnimalList());
    result.push(...formatCountingPeopleFiles());
  }
  return result;
}

export function getAllAudioForModule(module: ModuleNumber): AudioFriendlyData {
  const result = [
    ...getSingleWordsForModule(module),
    ...getSentencesForModule(module),
  ];
  return result;
}
