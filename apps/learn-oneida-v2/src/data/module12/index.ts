import {
  getPlainTextFromStandardEntryItem,
  type StandardEntry,
} from "@/components/StandardEntryDisplay";
import { formatFileWithSuffix, standardizeAudioFileName } from "@/utils/misc";
import type { ModernEntry } from "@/utils/types";
import { isWordWhispered } from "@ukwehuwehneke/language-components";

type AnimalDatumType = "m" | "i" | "b"; // mammal, insect, bird

export interface Module12AnimalDatum extends ModernEntry {
  singular: StandardEntry;
  plural: StandardEntry;
  type: AnimalDatumType;
}

type DatumNoType = Omit<Module12AnimalDatum, "type">;

export function createModule12MammalsList(): Module12AnimalDatum[] {
  const objBat: DatumNoType = {
    key: "bat",
    en: ["bat"],
    dict: [736, 901],
    root: [],
    singular: ["tsiʔklaʔwístal"],
    plural: [],
  };
  const objBear: DatumNoType = {
    key: "bear",
    en: ["bear"],
    dict: [],
    root: [],
    singular: "ohkwa·lí̲",
    plural: [],
  };
  const objBeaver: DatumNoType = {
    key: "beaver",
    en: ["beaver"],
    dict: [],
    root: [],
    singular: ["tsyoní·tu̲ʔ", "tsyoní·to̲ʔ"],
    plural: [],
  };
  const objBison: DatumNoType = {
    key: "bison",
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
  const objBuffalo: DatumNoType = {
    key: "buffalo",
    en: ["buffalo"],
    dict: [],
    root: [],
    singular: "tsyotanekliyá·ku",
    plural: [],
  };
  const objChipmunk: DatumNoType = {
    key: "chipmunk",
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
  const objCoyote: DatumNoType = {
    key: "coyote",
    en: ["coyote"],
    dict: [328],
    root: [],
    singular: [
      {
        lit: "the dog is just roaming around",
        one: ["kwáh ok thi", ["w", "PS"], "eseʔ é·lhal"],
      },
    ],
    plural: [],
  };
  const objDeer: DatumNoType = {
    key: "deer",
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
  const objFox: DatumNoType = {
    key: "fox",
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
  const objGroundhog: DatumNoType = {
    key: "groundhog",
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
  const objLynx: DatumNoType = {
    key: "lynx",
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
  const objMink: DatumNoType = {
    key: "mink",
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
  const objMole: DatumNoType = {
    key: "mole",
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
  const objMoose: DatumNoType = {
    key: "moose",
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
  const objMouse: DatumNoType = {
    key: "mouse",
    en: ["mouse"],
    dict: [],
    root: [],
    singular: [
      {
        one: "otsiʔno·wʌ̲́",
      },
    ],
    plural: [],
  };
  const objMuskrat: DatumNoType = {
    key: "muskrat",
    en: ["muskrat"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["anó·kiʔ"],
      },
    ],
    plural: [],
  };
  const objOpposum: DatumNoType = {
    key: "opposum",
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
  const objOtter: DatumNoType = {
    key: "otter",
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
  const objPorcupine: DatumNoType = {
    key: "porcupine",
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
  const objRabbit: DatumNoType = {
    key: "rabbit",
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
  const objJackrabbit: DatumNoType = {
    key: "jackrabbit",
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
  const objRaccoon: DatumNoType = {
    key: "raccoon",
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
  // const objRat: DatumNoType = {
  //   key: "rat",
  //   en: ["rat"],
  //   dict: [],
  //   root: [],
  //   singular: [
  //     {
  //       one: ["otsiʔnowʌhkó·"],
  //     },
  //   ],
  //   plural: [],
  // };
  const objSkunk: Omit<Module12AnimalDatum, "type"> = {
    key: "skunk",
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
  const objSquirrel: Omit<Module12AnimalDatum, "type"> = {
    key: "squirrel",
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
  const objFlyingSquirrel: Omit<Module12AnimalDatum, "type"> = {
    key: "flying_squirrel",
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
  const objRedSquirrel: Omit<Module12AnimalDatum, "type"> = {
    key: "red_squirrel",
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
  const objWeasel: Omit<Module12AnimalDatum, "type"> = {
    key: "weasel",
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
  const objWolf: Omit<Module12AnimalDatum, "type"> = {
    key: "wolf",
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
    // objRat,
    objSkunk,
    objSquirrel,
    objFlyingSquirrel,
    objRedSquirrel,
    objWeasel,
    objWolf,
  ].map((datum) => ({
    ...datum,
    type: "m" as const,
  }));
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}

export function createModule12BirdsList(): Module12AnimalDatum[] {
  const objBluejay: DatumNoType = {
    key: "bluejay",
    en: ["bluejay"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["klíkli"],
      },
    ],
    plural: [],
  };
  const objCardinal: DatumNoType = {
    key: "cardinal",
    en: ["cardinal"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["onikwʌhtala·kó·"],
      },
      {
        one: ["tsyotaku·kó·"],
      },
    ],
    plural: [],
  };
  const objChickadee: DatumNoType = {
    key: "chickadee",
    en: ["chickadee"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsiktsile·lé̲·"],
      },
    ],
    plural: [],
  };
  const objCrane: DatumNoType = {
    key: "crane",
    en: ["crane"],
    dict: [],
    root: [],
    singular: [
      {
        lit: "it has long legs",
        one: ["te", ["ka", "PS"], "hsineskó·"],
      },
    ],
    plural: [],
  };
  const objCrow: DatumNoType = {
    key: "crow",
    en: ["crow"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ká·kaʔ"],
      },
    ],
    plural: [],
  };
  const objDuck: DatumNoType = {
    key: "duck",
    en: ["duck"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["talʌʔkó·"],
      },
      {
        one: ["taluʔkó·"],
      },
    ],
    plural: [],
  };
  const objEagle: DatumNoType = {
    key: "eagle",
    en: ["eagle"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["atú·nyote̲ʔ"],
      },
      // {
      //   one: ["atú·nyute̲ʔ"],
      // },
    ],
    plural: [],
  };
  const objGoldfinch: DatumNoType = {
    key: "goldfinch",
    en: ["goldfinch"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otsiʔnkwalá·"],
      },
    ],
    plural: [],
  };
  const objWildGoose: DatumNoType = {
    key: "wild_goose",
    en: ["wild goose"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["káhuk"],
      },
    ],
    plural: [],
  };
  const objGrouse: DatumNoType = {
    key: "grouse",
    en: ["grouse", "partridge"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ohkwe·sʌ̲́·"],
      },
    ],
    plural: [],
  };
  const objHawk: DatumNoType = {
    key: "hawk",
    en: ["hawk"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["kalhakúha̲"],
      },
    ],
    plural: [],
  };
  const objHeron: DatumNoType = {
    key: "heron",
    en: ["heron"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ohakwalute̲"],
      },
    ],
    plural: [],
  };
  const objHummingbird: DatumNoType = {
    key: "hummingbird",
    en: ["hummingbird"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["lauláu"],
      },
    ],
    plural: [],
  };
  const objKilldeer: DatumNoType = {
    key: "killdeer",
    en: ["killdeer", "sandpiper"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tawístawiʔ"],
      },
    ],
    plural: [],
  };
  const objLoon: DatumNoType = {
    key: "loon",
    en: ["loon"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["ʌhó·wʌ"],
      },
    ],
    plural: [],
  };
  const objOwl: DatumNoType = {
    key: "owl",
    en: ["owl"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["kwalo·lʌ̲́·"],
      },
    ],
    plural: [],
  };
  const objParrot: DatumNoType = {
    key: "parrot",
    en: ["parrot"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ka", "PS"], "styaʔks"],
      },
    ],
    plural: [],
  };
  const objPelican: DatumNoType = {
    key: "pelican",
    en: ["pelican"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ka", "PS"], "nehkakhwa"],
      },
    ],
    plural: [],
  };
  const objPigeon: DatumNoType = {
    key: "pigeon",
    en: ["pigeon, dove"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["oli·té̲·"],
      },
    ],
    plural: [],
  };
  const objRobin: DatumNoType = {
    key: "robin",
    en: ["robin"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsiskó·koʔ"],
      },
    ],
    plural: [],
  };
  const objRooster: DatumNoType = {
    key: "rooster",
    en: ["rooster"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["kitkit lá·tsin"],
      },
    ],
    plural: [],
  };
  const objSeagull: DatumNoType = {
    key: "seagull",
    en: ["seagull"],
    dict: [333],
    root: [],
    singular: [
      {
        one: ["tsyohwʌ·tstakawe̲ʔ"],
      },
    ],
    plural: [],
  };
  const objSparrow: DatumNoType = {
    key: "sparrow",
    en: ["sparrow"],
    dict: [554],
    root: [],
    singular: [
      {
        one: ["kanataʔkékhá̲ʔ"],
      },
    ],
    plural: [],
  };
  const objStork: DatumNoType = {
    key: "stork",
    en: ["stork"],
    dict: [542],
    root: [],
    singular: [
      {
        lit: "it sees the sky",
        one: ["te", ["ka", "PS"], "luhyakahnélaʔ"],
      },
    ],
    plural: [],
  };
  const objBarnSwallow: DatumNoType = {
    key: "barn_swallow",
    en: ["barn swallow"],
    dict: [],
    root: [],
    singular: [
      {
        lit: "it's all muddy",
        one: ["onawaʔstohále̲ʔ"],
      },
    ],
    plural: [],
  };
  const objSwan: DatumNoType = {
    key: "swan",
    en: ["swan"],
    dict: [],
    root: [],
    singular: [
      {
        lit: "it has a long neck",
        one: [["ka", "PS"], "nyales"],
      },
    ],
    plural: [],
  };
  const objTurkey: DatumNoType = {
    key: "turkey",
    en: ["turkey"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["skawilo·wáne̲ʔ"],
      },
    ],
    plural: [],
  };
  const objTurkeyVulture: DatumNoType = {
    key: "turkey_vulture",
    en: ["turkey vulture"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["ka", "PS"], "hé·yʌ·taks"],
      },
      {
        lit: "it eats rotten carcass",
        one: [["ka", "PS"], "kalyʌtaks"],
      },
    ],
    plural: [],
  };
  const objWoodpecker: DatumNoType = {
    key: "woodpecker",
    en: ["woodpecker"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["la", "PS"], "lutastoʔokshá̲·"],
      },
    ],
    plural: [],
  };

  const result = [
    objBluejay,
    objCardinal,
    objChickadee,
    objCrane,
    objCrow,
    objDuck,
    objEagle,
    objGoldfinch,
    objWildGoose,
    objGrouse,
    objHawk,
    objHeron,
    objHummingbird,
    objKilldeer,
    objLoon,
    objOwl,
    objParrot,
    objPelican,
    objPigeon,
    objRobin,
    objRooster,
    objSeagull,
    objSparrow,
    objStork,
    objBarnSwallow,
    objSwan,
    objTurkey,
    objTurkeyVulture,
    objWoodpecker,
  ].map((datum) => ({
    ...datum,
    type: "b" as const,
  }));
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}

export function createModule12InsectsList(): Module12AnimalDatum[] {
  const objAnt: DatumNoType = {
    key: "ant",
    en: ["ant"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsiʔnhutstókhwiʔ"],
      },
    ],
    plural: [],
  };
  const objBee: DatumNoType = {
    key: "bee",
    en: ["bee"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsinuhnéhklis"],
      },
      {
        one: ["tsyonuhnéhklis"],
      },
    ],
    plural: [],
  };
  const objBedbug: DatumNoType = {
    key: "bedbug",
    en: ["bedbug"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["ka", "PS"], "sehtáklahse̲ʔ"],
      },
    ],
    plural: [],
  };
  const objLeech: DatumNoType = {
    key: "leech",
    en: ["leech", "bloodsucker"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ka", "PS"], "yaʔtakwʌhtʌ̲ʔ"],
      },
    ],
    plural: [],
  };
  const objButterfly: DatumNoType = {
    key: "butterfly",
    en: ["butterfly", "moth"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["kana·wʌ̲́·"],
      },
    ],
    plural: [],
  };
  const objCaterpillar: DatumNoType = {
    key: "caterpillar",
    en: ["caterpillar"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["onhwalá·ne̲ʔ"],
      },
    ],
    plural: [],
  };
  const objCicada: DatumNoType = {
    key: "cicada",
    en: ["cicada"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["onʌstókli"],
      },
    ],
    plural: [],
  };
  const objCricket: DatumNoType = {
    key: "cricket",
    en: ["cricket"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["slíkslik"],
      },
    ],
    plural: [],
  };
  const objFirefly: DatumNoType = {
    key: "firefly",
    en: ["firefly"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsistálak"],
      },
    ],
    plural: [],
  };
  const objLice: DatumNoType = {
    key: "lice",
    en: ["flea", "lice"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otawé·tsla"],
      },
    ],
    plural: [],
  };
  const objFly: DatumNoType = {
    key: "fly",
    en: ["fly"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsí·ks"],
      },
    ],
    plural: [],
  };
  const objHorsefly: DatumNoType = {
    key: "horsefly",
    en: ["horsefly"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["yakohsa·tʌs tsí·ksko"],
      },
    ],
    plural: [],
  };
  const objGrasshopper: DatumNoType = {
    key: "grasshopper",
    en: ["grasshopper"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsístalak"],
      },
    ],
    plural: [],
  };
  const objLadybug: DatumNoType = {
    key: "ladybug",
    en: ["ladybug"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["oʔno·wá̲·"],
      },
    ],
    plural: [],
  };
  const objMosquito: DatumNoType = {
    key: "mosquito",
    en: ["mosquito"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["okalyahtá·ne̲ʔ"],
      },
    ],
    plural: [],
  };
  const objNits: DatumNoType = {
    key: "nits",
    en: ["nits"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otsiʔnéhtalaʔ"],
      },
    ],
    plural: [],
  };
  const objGnat: DatumNoType = {
    key: "gnat",
    en: ["gnat"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["lati", "PS"], "slanú·wehse̲ʔ"],
      },
    ],
    plural: [],
  };
  const objPrayingMantis: DatumNoType = {
    key: "praying_mantis",
    en: ["praying mantis"],
    dict: [],
    root: [],
    singular: [
      {
        one: [["wa", "PS"], "tlʌ·náyʌhe̲ʔ"],
      },
      {
        one: [["la", "PS"], "hwistu·níhe̲"],
      },
    ],
    plural: [],
  };
  const objSnail: DatumNoType = {
    key: "snail",
    en: ["snail", "slug"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsyonisklo·lú̲·"],
      },
    ],
    plural: [],
  };
  const objSpider: DatumNoType = {
    key: "spider",
    en: ["spider"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsinaʔtsyakéhtu̲ʔ"],
      },
    ],
    plural: [],
  };
  const objDaddyLonglegs: DatumNoType = {
    key: "daddy_long_legs",
    en: ["daddy longlegs"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ha", "PS"], "sinehsú·se̲ʔ"],
      },
    ],
    plural: [],
  };
  const objTarantula: DatumNoType = {
    key: "tarantula",
    en: ["tarantula"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["tsinaʔtsyakéhtu·kó·"],
      },
    ],
    plural: [],
  };
  const objWasp: DatumNoType = {
    key: "wasp",
    en: ["wasp", "hornet"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["te", ["ha", "PS"], "lutaweʔésta̲ʔ"],
      },
    ],
    plural: [],
  };
  const objWoodtick: DatumNoType = {
    key: "woodtick",
    en: ["woodtick"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["oséhtu̲ʔ"],
      },
    ],
    plural: [],
  };
  const objEarthworm: DatumNoType = {
    key: "earthworm",
    en: ["earthworm"],
    dict: [],
    root: [],
    singular: [
      {
        one: ["otsiʔnuwahé·ta̲ʔ"],
      },
    ],
    plural: [],
  };
  const result = [
    objAnt,
    objBee,
    objBedbug,
    objLeech,
    objButterfly,
    objCaterpillar,
    objCicada,
    objCricket,
    objFirefly,
    objLice,
    objFly,
    objHorsefly,
    objGrasshopper,
    objLadybug,
    objMosquito,
    objNits,
    objGnat,
    objPrayingMantis,
    objSnail,
    objSpider,
    objDaddyLonglegs,
    objTarantula,
    objWasp,
    objWoodtick,
    objEarthworm,
  ].map((datum) => ({
    ...datum,
    type: "i" as const,
  }));
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}

export function createModule12AnimalsList(): Module12AnimalDatum[] {
  return [
    ...createModule12MammalsList(),
    ...createModule12BirdsList(),
    ...createModule12InsectsList(),
  ];
}

export function getAudioFileForModule12AnimalDatum(
  datum: Module12AnimalDatum,
  key: "singular" | "plural",
  index = 0,
): string {
  const base = getAudioFileBaseForModule12AnimalDatum(datum, key).replace('.mp3', '');
  const wordList = datum[key];
  const oneidaTxt = getPlainTextFromStandardEntryItem(wordList[index]);

  if (isWordWhispered(oneidaTxt)) {
    return formatFileWithSuffix(`${base}_merged.mp3`, wordList, index);
  } else {
    return formatFileWithSuffix(`${base}.mp3`, wordList, index);
  }
}

export function getAudioFileBaseForModule12AnimalDatum(
  datum: Module12AnimalDatum,
  key: "singular" | "plural",
): string {
  const t =
    datum.type === "b"
      ? "birds"
      : datum.type === "i"
        ? "insects"
        : datum.type === "m"
          ? "mammals"
          : "";

  const base = standardizeAudioFileName(
    `module12/${t}/${key}/${datum.key}.mp3`,
  );
  return base;
}
