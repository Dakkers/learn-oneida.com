import { flattenVerbDatum, type Module5VerbDatum } from "../module05";
import eatCmdData from "./stand-CMD";
import eatPrsData from "./stand-PRS";
import eatFutData from "./stand-FUT";
import eatIfutData from "./stand-IFUT";
import eatPastData from "./stand-PAST";

interface EnvironmentNounDatum {
  en: string[];
  key: string;
  root: string[];
  dict: number[];
  standalone: string[];
  onNoun: string | null;
  inNoun: string | null;
  whereTheNoun: string[] | null;
}

export function createModule10EnvironmentNounsList(): EnvironmentNounDatum[] {
  const objBoat = {
    key: "Boat",
    en: ["boat"],
    root: ["-huw-"],
    dict: [410],
    standalone: ["kahuwe·yá·"],
    onNoun: "kahuweyá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkahu·wáyʌ"],
  };
  const objBoard = {
    key: "Board",
    en: ["board", "floor"],
    root: ["-shuʼkal-"],
    dict: [661, 910],
    standalone: ["oshú·kaleʔ"],
    onNoun: "oshuʔkalá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkashuʔka·láyʌ", "tsiʔ tkashú·kaloteʔ"],
  };
  const objBridge = {
    key: "Bridge",
    en: ["bridge"],
    root: ["-askw-"],
    dict: [121],
    standalone: ["waskóhu"],
    onNoun: "askwá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ twahskóhu"],
  };
  const objBush = {
    key: "Bush",
    en: ["bush", "shrub", "brushline"],
    root: ["-skaw-"],
    dict: [663],
    standalone: ["oska·wá·"],
    onNoun: "oskawá·ke",
    inNoun: "oskawá·ku",
    whereTheNoun: ["tsiʔ twaska·wáyʌʔ"],
  };
  const objCloud = {
    key: "Cloud",
    en: ["cloud"],
    root: ["-ahtsiʼkl-"],
    dict: [939],
    standalone: ["ohtsí·klaʔ"],
    onNoun: "ohtsiʔkla·ke",
    inNoun: "ohtsiʔklo·kú",
    whereTheNoun: ["tsiʔ tyotsí·kleʔ"],
  };
  const objDirt = {
    key: "Dirt",
    en: ["dirt", "dust", "ash", "soil"],
    root: ["-aʼkʌhl-"],
    dict: [315],
    standalone: ["oʔkʌ·láʔ"],
    onNoun: null,
    inNoun: "oʔkʌhlá·ke",
    whereTheNoun: ["tsiʔ twaʔkʌ·láyʌ̲ʔ"],
  };
  const objDitch = {
    key: "Ditch",
    en: ["ditch"],
    root: ["-naʼtsl-"],
    dict: [568],
    standalone: ["kaná·tsliʔ"],
    onNoun: null,
    inNoun: "kaná·tslaku",
    whereTheNoun: ["tsiʔ tkana·tsláyʌʔ"],
  };
  const objDoor = {
    key: "Door",
    en: ["door"],
    root: ["-nhoh-"],
    dict: [586],
    standalone: ["kanhóha̲ʔ"],
    onNoun: "kanhohá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tyonhoká·luteʔ"],
  };
  const objFence = {
    key: "Fence",
    en: ["fence"],
    root: ["-atʌʼʌhl-"],
    dict: [991],
    standalone: ["atʌʔʌ́·laʔ"],
    onNoun: "atʌʔʌhlá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ twatʌʔʌ·loteʔ"],
  };
  const objField = {
    key: "Field",
    en: ["field", "garden", "meadow", "grassland"],
    root: ["-hʌt-"],
    dict: [992],
    standalone: ["kahʌ·tá·yʌ·"],
    onNoun: null,
    inNoun: "kahʌtá·ke",
    whereTheNoun: ["tsiʔ tkahʌ·tá·yʌʔ"],
  };
  const objForest = {
    key: "Forest",
    en: ["forest", "woods"],
    root: ["-lh-"],
    dict: [517],
    standalone: ["kálhaʔ"],
    onNoun: null,
    inNoun: "kalhakú",
    whereTheNoun: ["tsiʔ tkalhá·yʌ"],
  };
  const objGrass = {
    key: "Grass",
    en: ["grass", "straw", "hay", "weeds"],
    root: ["-anekl-", "-ʌnekl-"],
    dict: [1026],
    standalone: ["onékliʔ"],
    onNoun: "oneklá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tyotaneklú·ni", "tsiʔtyoneklú·ni"],
  };
  const objHill = {
    key: "Hill",
    en: ["hill"],
    root: ["-nutahal-"],
    dict: [1040],
    standalone: ["onu·táhlha·"],
    onNoun: "onutahalá·keʔ",
    inNoun: null,
    whereTheNoun: ["tsiʔ tyonu·tóteʔ"],
  };
  const objLake = {
    key: "Lake",
    en: ["lake"],
    root: ["-nyatal-"],
    dict: [1065],
    standalone: ["kanya·táleʔ"],
    onNoun: "kanyatalá·ke",
    inNoun: "kanya·taláku",
    whereTheNoun: ["tsiʔ tkanyatalá·yʌ"],
  };
  const objLand = {
    key: "Land",
    en: ["land", "earth", "ground"],
    root: ["-hutsy-"],
    dict: [1066],
    standalone: ["ohútsyaʔ"],
    onNoun: "ohutsyá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tyohutsya·té·", "tsiʔ yuhwʌtsya·té·"],
  };
  const objLeaf = {
    key: "Leaf",
    en: ["leaf"],
    root: ["-nlaht-"],
    dict: [1069],
    standalone: ["ónlahteʔ"],
    onNoun: "onlahtá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkanlahtá·yʌʔ"],
  };
  const objMountain = {
    key: "Mountain",
    en: ["mountain", "rock"],
    root: ["-itstʌhl-"],
    dict: [1156],
    standalone: ["otstʌ́·laʔ"],
    onNoun: "otstʌhlá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkʌtstʌ·lóte"],
  };
  const objMud = {
    key: "Mud",
    en: ["mud"],
    root: ["-nawaʼtst-"],
    dict: [556],
    standalone: ["onawá·tstaʔ"],
    onNoun: null,
    inNoun: "onawaʔtstá·ke",
    whereTheNoun: ["tsiʔ tkanawatstá·yʌ"],
  };
  const objRafters = {
    key: "Rafters",
    en: ["rafters"],
    root: ["-nʌst-"],
    dict: [1145],
    standalone: ["kanʌ́staʔ"],
    onNoun: null,
    inNoun: "kanʌ́stoteʔ",
    whereTheNoun: ["tsiʔ tkanʌ́sto·teʔ"],
  };
  const objRapids = {
    key: "Rapids",
    en: ["rapids"],
    root: ["-hnaw-"],
    dict: [384],
    standalone: ["kahna·wá·"],
    onNoun: "kahnawá·ke",
    inNoun: "kahnawá·ku",
    whereTheNoun: ["tsiʔ tkahna·wá·yʌʔ"],
  };
  const objRiver = {
    key: "River",
    en: ["river"],
    root: ["-wyhuh-"],
    dict: [778, 1154],
    standalone: ["kawyhúhaʔ"],
    onNoun: "kawyhuhá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkawyhuhaté", "tsiʔ tkawyhuhatátiʔ"],
  };
  const objRoad = {
    key: "Road",
    en: ["road", "street"],
    root: ["-hah-"],
    dict: [1154],
    standalone: ["oháhaʔ"],
    onNoun: "owahá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tyohá·te·"],
  };
  const objRoof = {
    key: "Roof",
    en: ["roof", "porch", "deck", "shanty", "hut"],
    root: ["-askw-"],
    dict: [121],
    standalone: ["áskwaʔ"],
    onNoun: "askwá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ twahskwahé·leʔ"],
  };
  const objSand = {
    key: "Sand",
    en: ["sand"],
    root: ["-ʼnehsaluhkw-"],
    dict: [1162],
    standalone: ["oʔnehsalúhkwaʔ"],
    onNoun: "oʔnehsaluhkwá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkaʔnehsaluhkwá·yʌ"],
  };
  const objSky = {
    key: "Sky",
    en: ["sky", "heaven"],
    root: ["-luhy-"],
    dict: [541, 1183],
    standalone: ["kaluyá·ke"],
    onNoun: null,
    inNoun: "kaluhyá·ke",
    whereTheNoun: ["tsiʔ kaluhyá·ke·"],
  };
  const objSnow = {
    key: "Snow",
    en: ["snow"],
    root: ["-nyʌht-"],
    dict: [627],
    standalone: ["ónyʌhteʔ"],
    onNoun: "onyʌhtá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkanye·yʌ́·", "tsiʔ tkanyʌtá·yʌ"],
  };
  const objSnowflake = {
    key: "Snowflake",
    en: ["snowflake"],
    root: ["-aʼkl-"],
    dict: [317],
    standalone: ["ó·klaʔ"],
    onNoun: "oʔklá·keʔ",
    inNoun: null,
    whereTheNoun: null,
  };
  const objSwamp = {
    key: "Swamp",
    en: ["swamp", "marsh", "wetland"],
    root: ["-naw-"],
    dict: [555],
    standalone: ["kana·wá·"],
    onNoun: "kana·wáke",
    inNoun: "kana·wáku",
    whereTheNoun: ["tsiʔ tkanawá·yʌʔ"],
  };
  const objTown = {
    key: "Town",
    en: ["town", "village", "city", "place"],
    root: ["-nat-"],
    dict: [554],
    standalone: ["kana·tá·yʌ"],
    onNoun: null,
    inNoun: "kanatá·ke",
    whereTheNoun: ["tsiʔ tkanatá·yʌ̲·"],
  };
  const objTree = {
    key: "Tree",
    en: ["tree", "log", "tree trunk"],
    root: ["-lut-"],
    dict: [542],
    standalone: ["ka·lúteʔ"],
    onNoun: "kalutá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkalu·táyʌ̲ʔ"],
  };
  const objWall = {
    key: "Wall",
    en: ["wall"],
    root: ["-hsuht-"],
    dict: [1256],
    standalone: ["ahsúhtaʔ"],
    onNoun: "ahsuhtá·ke",
    inNoun: null,
    whereTheNoun: ["tsiʔ tkahsuhtó·te̲ʔ"],
  };
  const objWind = {
    key: "Wind",
    en: ["wind", "air"],
    root: ["-wel-"],
    dict: [1265],
    standalone: ["ówelaʔ"],
    onNoun: null,
    inNoun: "kawelá·ku",
    whereTheNoun: ["tsiʔ tyowe·lóte̲ʔ"],
  };

  return [
    objBoat,
    objBoard,
    objBridge,
    objBush,
    objCloud,
    objDirt,
    objDitch,
    objDoor,
    objFence,
    objField,
    objForest,
    objGrass,
    objHill,
    objLake,
    objLand,
    objLeaf,
    objMountain,
    objMud,
    objRafters,
    objRapids,
    objRiver,
    objRoad,
    objRoof,
    objSand,
    objSky,
    objSnow,
    objSnowflake,
    objSwamp,
    objTown,
    objTree,
    objWall,
    objWind,
  ];
}

interface Module10VerbDatum
  extends Omit<
    Module5VerbDatum,
    "key" | "dict" | "category" | "stem" | "root"
  > {
  key: "stand";
}

export function createModule10VerbList(): Module10VerbDatum[] {
  return [
    {
      en: "stand",
      key: "stand",
      cmd: eatCmdData,
      prs: eatPrsData,
      fut: eatFutData,
      ifut: eatIfutData,
      past: eatPastData,
    },
  ];
}

export function createModule10VerbListFlat() {
  const resultingList = createModule10VerbList();
  const flattenedResult = [];
  for (const v of resultingList) {
    flattenedResult.push(...flattenVerbDatum(v));
  }
  return flattenedResult;
}
