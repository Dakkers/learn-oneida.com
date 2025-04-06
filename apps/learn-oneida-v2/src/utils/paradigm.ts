import {
  type BreakdownArray,
  type Pronoun,
  type PronounPurple,
  type PronounPurpleExtended,
  pronouns,
  pronounsPurple,
  whisperizeWord,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";

export interface ParadigmData {
  aspectClass?:
    | "A1"
    | "A2"
    | "A3"
    | "B1"
    | "B2"
    | "B3"
    | "C1"
    | "C2"
    | "C3"
    | "D1"
    | "D2"
    | "D3"
    | "E1"
    | "E2"
    | "E3"
    | "E4"
    | "E5"
    | "E6"
    | "F"
    | "G1"
    | "G2"
    | "H";
  audioFolder?: string;
  categories?: Array<"kinship">;
  phrases: ParadigmTableRow[];
  translation: string;
  translationFn?: (pronoun: Pronoun) => string;
  type: "PS" | "PO" | "PP" | "PI";
  whispered?: boolean;
}

export interface ParadigmTableRow {
  breakdown: BreakdownArray;
  phrase: string;
  pronoun: Pronoun;
  whispered?: boolean;
}

function createParadigmDataUtil(
  data: Pick<
    ParadigmData,
    | "aspectClass"
    | "audioFolder"
    | "categories"
    | "translation"
    | "translationFn"
    | "type"
    | "whispered"
  > & {
    phrases: Array<{ breakdown: BreakdownArray; whispered?: boolean }>;
  },
) {
  const result = _.cloneDeep(data) as ParadigmData;
  for (let i = 0; i < result.phrases.length; i++) {
    const element = result.phrases[i];
    const endIndex = element.breakdown.length - 1;
    if (element.whispered ?? data.whispered ?? true) {
      const lastElement = element.breakdown[endIndex];
      const lastPartOfBreakdown = getBreakdownTextPart(
        getBreakdownTextPart(lastElement),
      );
      const lastPartWhispered = whisperizeWord(lastPartOfBreakdown);
      element.breakdown[endIndex] =
        typeof lastElement === "string"
          ? lastPartWhispered
          : {
              text: lastPartWhispered,
              type: Array.isArray(lastElement)
                ? lastElement[1]
                : (lastElement.type ?? undefined),
            };
    }

    element.phrase = element.breakdown
      .map((part) => getBreakdownTextPart(part))
      .join("");
  }

  result.whispered = data.whispered ?? true;

  return result;
}

export function createInteractiveParadigmData(
  data: Omit<Parameters<typeof createParadigmDataUtil>[0], "translationFn"> & {
    translationFn?: (pronoun: PronounPurple | PronounPurpleExtended) => string;
  },
  allowedPronouns?: PronounPurple[] | PronounPurpleExtended[],
): ParadigmData {
  // @ts-expect-error Argh! ParadigmData expects Pronoun, not the purples
  const result = createParadigmDataUtil(data);

  const pronounsToUse = allowedPronouns ?? pronounsPurple;
  for (let i = 0; i < result.phrases.length; i++) {
    if (pronounsToUse) {
      // @ts-expect-error Argh! ParadigmData expects Pronoun, not the purples
      result.phrases[i].pronoun = pronounsToUse[i];
    }
  }
  return result;
}

export function createParadigmData(
  data: Parameters<typeof createParadigmDataUtil>[0],
  allowedPronouns?: Pronoun[],
): ParadigmData {
  const result = createParadigmDataUtil(data);
  const pronounsToUse = allowedPronouns ?? pronouns;
  for (let i = 0; i < result.phrases.length; i++) {
    if (pronounsToUse) {
      result.phrases[i].pronoun = pronounsToUse[i];
    }
  }
  return result;
}

const getBreakdownTextPart = (part: BreakdownArray[number]) =>
  typeof part === "string" ? part : Array.isArray(part) ? part[0] : part.text;
