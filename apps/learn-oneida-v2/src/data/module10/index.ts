import { flattenVerbDatum, Module5VerbDatum } from "../module05";
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
    whereTheNoun: ["tsi’ tkahu·wáyʌ"],
  };
  const objBoard = {
    key: "Board",
    en: ["board", "floor"],
    root: ["-shuʼkal-"],
    dict: [661, 910],
    standalone: ["oshú·kale’"],
    onNoun: "oshu’kalá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkashu’ka·láyʌ", "tsi’ tkashú·kalote’"],
  };
  const objBridge = {
    key: "Bridge",
    en: ["bridge"],
    root: ["-askw-"],
    dict: [121],
    standalone: ["waskóhu"],
    onNoun: "askwá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ twahskóhu"],
  };
  const objBush = {
    key: "Bush",
    en: ["bush", "shrub", "brushline"],
    root: ["-skaw-"],
    dict: [663],
    standalone: ["oska·wá·"],
    onNoun: "oskawá·ke",
    inNoun: "oskawá·ku",
    whereTheNoun: ["tsi’ twaska·wáyʌ’"],
  };
  const objCloud = {
    key: "Cloud",
    en: ["cloud"],
    root: ["-ahtsiʼkl-"],
    dict: [939],
    standalone: ["ohtsí·kla’"],
    onNoun: "ohtsi’kla·ke",
    inNoun: "ohtsi’klo·kú",
    whereTheNoun: ["tsi’ tyotsí·kle’"],
  };
  const objDirt = {
    key: "Dirt",
    en: ["dirt", "dust", "ash", "soil"],
    root: ["-aʼkʌhl-"],
    dict: [315],
    standalone: ["o’kʌ·lá’"],
    onNoun: null,
    inNoun: "o’kʌhlá·ke",
    whereTheNoun: ["tsi’ twa’kʌ·láyʌ̲’"],
  };
  const objDitch = {
    key: "Ditch",
    en: ["ditch"],
    root: ["-naʼtsl-"],
    dict: [568],
    standalone: ["kaná·tsli’"],
    onNoun: null,
    inNoun: "kaná·tslaku",
    whereTheNoun: ["tsi’ tkana·tsláyʌ’"],
  };
  const objDoor = {
    key: "Door",
    en: ["door"],
    root: ["-nhoh-"],
    dict: [586],
    standalone: ["kanhóha̲’"],
    onNoun: "kanhohá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tyonhoká·lute’"],
  };
  const objFence = {
    key: "Fence",
    en: ["fence"],
    root: ["-atʌʼʌhl-"],
    dict: [991],
    standalone: ["atʌ’ʌ́·la’"],
    onNoun: "atʌ’ʌhlá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ twatʌ’ʌ·lote’"],
  };
  const objField = {
    key: "Field",
    en: ["field", "garden", "meadow", "grassland"],
    root: ["-hʌt-"],
    dict: [992],
    standalone: ["kahʌ·tá·yʌ·"],
    onNoun: null,
    inNoun: "kahʌtá·ke",
    whereTheNoun: ["tsi’ tkahʌ·tá·yʌ’"],
  };
  const objForest = {
    key: "Forest",
    en: ["forest", "woods"],
    root: ["-lh-"],
    dict: [517],
    standalone: ["kálha’"],
    onNoun: null,
    inNoun: "kalhakú",
    whereTheNoun: ["tsi’ tkalhá·yʌ"],
  };
  const objGrass = {
    key: "Grass",
    en: ["grass", "straw", "hay", "weeds"],
    root: ["-anekl-", "-ʌnekl-"],
    dict: [1026],
    standalone: ["onékli’"],
    onNoun: "oneklá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tyotaneklú·ni", "tsi’tyoneklú·ni"],
  };
  const objHill = {
    key: "Hill",
    en: ["hill"],
    root: ["-nutahal-"],
    dict: [1040],
    standalone: ["onu·táhlha·"],
    onNoun: "onutahalá·ke’",
    inNoun: null,
    whereTheNoun: ["tsi’ tyonu·tóte’"],
  };
  const objLake = {
    key: "Lake",
    en: ["lake"],
    root: ["-nyatal-"],
    dict: [1065],
    standalone: ["kanya·tále’"],
    onNoun: "kanyatalá·ke",
    inNoun: "kanya·taláku",
    whereTheNoun: ["tsi’ tkanyatalá·yʌ"],
  };
  const objLand = {
    key: "Land",
    en: ["land", "earth", "ground"],
    root: ["-hutsy-"],
    dict: [1066],
    standalone: ["ohútsya’"],
    onNoun: "ohutsyá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tyohutsya·té·", "tsi’ yuhwʌtsya·té·"],
  };
  const objLeaf = {
    key: "Leaf",
    en: ["leaf"],
    root: ["-nlaht-"],
    dict: [1069],
    standalone: ["ónlahte’"],
    onNoun: "onlahtá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkanlahtá·yʌ’"],
  };
  const objMountain = {
    key: "Mountain",
    en: ["mountain", "rock"],
    root: ["-itstʌhl-"],
    dict: [1156],
    standalone: ["otstʌ́·la’"],
    onNoun: "otstʌhlá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkʌtstʌ·lóte"],
  };
  const objMud = {
    key: "Mud",
    en: ["mud"],
    root: ["-nawaʼtst-"],
    dict: [556],
    standalone: ["onawá·tsta’"],
    onNoun: null,
    inNoun: "onawa’tstá·ke",
    whereTheNoun: ["tsi’ tkanawatstá·yʌ"],
  };
  const objRafters = {
    key: "Rafters",
    en: ["rafters"],
    root: ["-nʌst-"],
    dict: [1145],
    standalone: ["kanʌ́sta’"],
    onNoun: null,
    inNoun: "kanʌ́stote’",
    whereTheNoun: ["tsi’ tkanʌ́sto·te’"],
  };
  const objRapids = {
    key: "Rapids",
    en: ["rapids"],
    root: ["-hnaw-"],
    dict: [384],
    standalone: ["kahna·wá·"],
    onNoun: "kahnawá·ke",
    inNoun: "kahnawá·ku",
    whereTheNoun: ["tsi’ tkahna·wá·yʌ’"],
  };
  const objRiver = {
    key: "River",
    en: ["river"],
    root: ["-wyhuh-"],
    dict: [778, 1154],
    standalone: ["kawyhúha’"],
    onNoun: "kawyhuhá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkawyhuhaté", "tsi’ tkawyhuhatáti’"],
  };
  const objRoad = {
    key: "Road",
    en: ["road", "street"],
    root: ["-hah-"],
    dict: [1154],
    standalone: ["oháha’"],
    onNoun: "owahá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tyohá·te·"],
  };
  const objRoof = {
    key: "Roof",
    en: ["roof", "porch", "deck", "shanty", "hut"],
    root: ["-askw-"],
    dict: [121],
    standalone: ["áskwa’"],
    onNoun: "askwá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ twahskwahé·le’"],
  };
  const objSand = {
    key: "Sand",
    en: ["sand"],
    root: ["-ʼnehsaluhkw-"],
    dict: [1162],
    standalone: ["o’nehsalúhkwa’"],
    onNoun: "o’nehsaluhkwá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tka’nehsaluhkwá·yʌ"],
  };
  const objSky = {
    key: "Sky",
    en: ["sky", "heaven"],
    root: ["-luhy-"],
    dict: [541, 1183],
    standalone: ["kaluyá·ke"],
    onNoun: null,
    inNoun: "kaluhyá·ke",
    whereTheNoun: ["tsi’ kaluhyá·ke·"],
  };
  const objSnow = {
    key: "Snow",
    en: ["snow"],
    root: ["-nyʌht-"],
    dict: [627],
    standalone: ["ónyʌhte’"],
    onNoun: "onyʌhtá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkanye·yʌ́·", "tsi’ tkanyʌtá·yʌ"],
  };
  const objSnowflake = {
    key: "Snowflake",
    en: ["snowflake"],
    root: ["-aʼkl-"],
    dict: [317],
    standalone: ["ó·kla’"],
    onNoun: "o’klá·ke’",
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
    whereTheNoun: ["tsi’ tkanawá·yʌ’"],
  };
  const objTown = {
    key: "Town",
    en: ["town", "village", "city", "place"],
    root: ["-nat-"],
    dict: [554],
    standalone: ["kana·tá·yʌ"],
    onNoun: null,
    inNoun: "kanatá·ke",
    whereTheNoun: ["tsi’ tkanatá·yʌ̲·"],
  };
  const objTree = {
    key: "Tree",
    en: ["tree", "log", "tree trunk"],
    root: ["-lut-"],
    dict: [542],
    standalone: ["ka·lúte’"],
    onNoun: "kalutá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkalu·táyʌ̲’"],
  };
  const objWall = {
    key: "Wall",
    en: ["wall"],
    root: ["-hsuht-"],
    dict: [1256],
    standalone: ["ahsúhta’"],
    onNoun: "ahsuhtá·ke",
    inNoun: null,
    whereTheNoun: ["tsi’ tkahsuhtó·te̲’"],
  };
  const objWind = {
    key: "Wind",
    en: ["wind", "air"],
    root: ["-wel-"],
    dict: [1265],
    standalone: ["ówela’"],
    onNoun: null,
    inNoun: "kawelá·ku",
    whereTheNoun: ["tsi’ tyowe·lóte̲’"],
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
