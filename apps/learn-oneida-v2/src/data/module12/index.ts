import {
  formatFileWithSuffix,
  getIndexSuffixforFile,
  standardizeAudioFileName,
} from "@/utils/misc";
import {
  convertBreakdownToPlainText,
  isWordWhispered,
  type BreakdownArray,
} from "@ukwehuwehneke/language-components";

type ListOfBreakdowns = Array<{
  en?: string;
  one: BreakdownArray | string;
}>;

interface ModernEntry {
  en: string[];
  key: string;
  root: string[];
  dict: number[];
}

type AnimalDatumType = "m" | "i" | "b"; // mammal...

export interface Module12AnimalDatum extends ModernEntry {
  singular: ListOfBreakdowns;
  plural: ListOfBreakdowns;
  type: AnimalDatumType;
}

export function createModule12MammalsList(): Module12AnimalDatum[] {
  const objBat: Module12AnimalDatum = {
    key: "bat",
    type: "m",
    en: ["bat"],
    dict: [736, 901],
    root: [],
    singular: [
      {
        one: ["tsiʔklaʔwístal"],
      },
    ],
    plural: [],
  };
  const objBear: Module12AnimalDatum = {
    key: "bear",
    type: "m",
    en: ["bear"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ohkwa·lí̲"],
      },
    ],
    plural: [],
  };
  const objBeaver: Module12AnimalDatum = {
    key: "beaver",
    type: "m",
    en: ["beaver"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsyoní·tu̲ʔ"],
      },
      {
        one: ["tsyoní·to̲ʔ"],
      },
    ],
    plural: [],
  };
  const objBison: Module12AnimalDatum = {
    key: "bison",
    type: "m",
    en: ["bison"],
    dict: [921, 1281],
    root: [],
    singular: [
      {
        one: ["tsyotekliyá·ku"],
      },
      {
        one: ["tsyonekliyá·ku"],
      },
    ],
    plural: [],
  };
  const objBuffalo: Module12AnimalDatum = {
    key: "buffalo",
    type: "m",
    en: ["buffalo"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsyotanekliyá·ku"],
      },
    ],
    plural: [],
  };
  const objChipmunk: Module12AnimalDatum = {
    key: "chipmunk",
    type: "m",
    en: ["chipmunk"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsyohlyóhkwa̲ʔ"],
      },
    ],
    plural: [],
  };
  const objCoyote: Module12AnimalDatum = {
    key: "coyote",
    type: "m",
    en: ["coyote"],
    dict: [328],
    root: [],
    singular: [
      {
        en: "the dog is wandering around",
        one: ["kwáh ok thi", ["w", "PS"], "eseʔ é·lhal"],
      },
    ],
    plural: [],
  };
  const objDeer: Module12AnimalDatum = {
    key: "deer",
    type: "m",
    en: ["deer"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["oskanu·tú̲·"],
      },
      {
        one: ["oskʌnu·tú̲·"],
      },
    ],
    plural: [],
  };
  const objFox: Module12AnimalDatum = {
    key: "fox",
    type: "m",
    en: ["fox"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["skʌhnáksʌ̲ʔ"],
      },
    ],
    plural: [],
  };
  const objGroundhog: Module12AnimalDatum = {
    key: "groundhog",
    type: "m",
    en: ["groundhog"],
    dict: [1027],
    root: [],
    singular: [
      {
        one: ["ona·kʌ́t"],
      },
    ],
    plural: [],
  };
  const objLynx: Module12AnimalDatum = {
    key: "lynx",
    type: "m",
    en: ["lynx", "cougar", "lion"],
    dict: [930],
    root: [],
    singular: [
      {
        one: ["takoʔskó·"],
      },
    ],
    plural: [],
  };
  const objMink: Module12AnimalDatum = {
    key: "mink",
    type: "m",
    en: ["mink"],
    dict: [438],
    root: [],
    singular: [
      {
        one: ["tsyotsya·káwe̲ʔ"],
      },
    ],
    plural: [],
  };
  const objMole: Module12AnimalDatum = {
    key: "mole",
    type: "m",
    en: ["mole"],
    dict: [1282],
    root: [],
    singular: [
      {
        one: ["tsiʔnyu·kále̲ʔ"],
      },
    ],
    plural: [],
  };
  const objMoose: Module12AnimalDatum = {
    key: "moose",
    type: "m",
    en: ["moose"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["s", ["ka", "PS"], "ʔnyúhsá̲ʔ"],
      },
    ],
    plural: [],
  };
  const objMouse: Module12AnimalDatum = {
    key: "mouse",
    type: "m",
    en: ["mouse"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otsiʔno·wʌ̲́"],
      },
    ],
    plural: [],
  };
  const objMuskrat: Module12AnimalDatum = {
    key: "muskrat",
    type: "m",
    en: ["muskrat"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["anó·ki̲ʔ"],
      },
    ],
    plural: [],
  };
  const objOpposum: Module12AnimalDatum = {
    key: "opposum",
    type: "m",
    en: ["opposum"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["shako", "PI"], "yelúheʔ otsiʔnowʌhkó·"],
      },
    ],
    plural: [],
  };
  const objOtter: Module12AnimalDatum = {
    key: "otter",
    type: "m",
    en: ["otter"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tawí·nu̲"],
      },
    ],
    plural: [],
  };
  const objPorcupine: Module12AnimalDatum = {
    key: "porcupine",
    type: "m",
    en: ["porcupine"],
    dict: [1129],
    root: [],
    singular: [
      {
        one: ["onhéhtaʔ"],
      },
    ],
    plural: [],
  };
  const objRabbit: Module12AnimalDatum = {
    key: "rabbit",
    type: "m",
    en: ["rabbit"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["kwaʔyʌ́ha̲"],
      },
    ],
    plural: [],
  };
  const objJackrabbit: Module12AnimalDatum = {
    key: "jackrabbit",
    type: "m",
    en: ["jackrabbit"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tshuʔkalo·lu̲·"],
      },
    ],
    plural: [],
  };
  const objRaccoon: Module12AnimalDatum = {
    key: "raccoon",
    type: "m",
    en: ["raccoon"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ʌti·lú̲"],
      },
    ],
    plural: [],
  };
  const objRat: Module12AnimalDatum = {
    key: "rat",
    type: "m",
    en: ["rat"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otsiʔnowʌhkó·"],
      },
    ],
    plural: [],
  };
  const objSkunk: Module12AnimalDatum = {
    key: "skunk",
    type: "m",
    en: ["skunk"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["aní·tas"],
      },
    ],
    plural: [],
  };
  const objSquirrel: Module12AnimalDatum = {
    key: "squirrel",
    type: "m",
    en: ["black squirrel", "grey squirrel"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsikwilʌ́·tu̲ʔ"],
      },
      {
        one: ["tsyokwilʌ́·tu̲ʔ"],
      },
    ],
    plural: [],
  };
  const objFlyingSquirrel: Module12AnimalDatum = {
    key: "flying_squirrel",
    type: "m",
    en: ["flying squirrel"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ka", "PS"], "hwa·súte̲ʔ"],
      },
    ],
    plural: [],
  };
  const objRedSquirrel: Module12AnimalDatum = {
    key: "red_squirrel",
    type: "m",
    en: ["red squirrel"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsyohsoʔkwaka·yú̲"],
      },
      {
        one: ["tsyohsoʔkwaka·nʌ̲́"],
      },
    ],
    plural: [],
  };
  const objWeasel: Module12AnimalDatum = {
    key: "weasel",
    type: "m",
    en: ["weasel"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["onu·kót"],
      },
    ],
    plural: [],
  };
  const objWolf: Module12AnimalDatum = {
    key: "wolf",
    type: "m",
    en: ["wolf"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["othahyu·ní̲"],
      },
    ],
    plural: [],
  };

  const result = [
    objBat,
    objBear,
    objBeaver,
    objBison,
    objBuffalo,
    objChipmunk,
    objCoyote,
    objDeer,
    objFox,
    objGroundhog,
    objLynx,
    objMink,
    objMole,
    objMoose,
    objMouse,
    objMuskrat,
    objOpposum,
    objOtter,
    objPorcupine,
    objRabbit,
    objJackrabbit,
    objRaccoon,
    objRat,
    objSkunk,
    objSquirrel,
    objFlyingSquirrel,
    objRedSquirrel,
    objWeasel,
    objWolf,
  ];
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}

export function createModule12AnimalsList(): Module12AnimalDatum[] {
  return [...createModule12MammalsList()];
}

export function getAudioFiles(
  datum: Module12AnimalDatum,
  key: "singular" | "plural",
  index = 0,
) {
  const t =
    datum.type === "b"
      ? "birds"
      : datum.type === "i"
        ? "insects"
        : datum.type === "m"
          ? "mammals"
          : "";

  const base = standardizeAudioFileName(`module12/${t}/${key}/${datum.key}`);

  const wordList = datum[key];
  const word = wordList[index];
  const oneidaTxt =
    typeof word.one === "string"
      ? word.one
      : convertBreakdownToPlainText(word.one);

  const result = [formatFileWithSuffix(`${base}.mp3`, wordList, index)];

  if (isWordWhispered(oneidaTxt)) {
    const suffix = getIndexSuffixforFile(`${base}.mp3`, wordList, index);
    result.unshift(standardizeAudioFileName(`${base}${suffix}_pp.mp3`));
  }
  return result;
}
