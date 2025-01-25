import { BreakdownArray } from "@ukwehuwehneke/language-components";

export interface BodyPartNounData {
  en: string[];
  key: string;
  root: string[];
  dict: number[];
  standalone: string[];
  onNoun: Array<{
    en?: string;
    one: BreakdownArray;
  }>;
}

export function createModule11BodyPartNounList(): BodyPartNounData[] {
  const objAnkle: BodyPartNounData = {
    key: "ankle",
    en: ["ankle", "ankles"],
    dict: [404],
    root: ["-hsiniko’t-"],
    standalone: ["ohsinikó·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["kh", "PS"], "siniko’tá·ke’"],
      },
    ],
  };
  const objArm: BodyPartNounData = {
    key: "arm",
    en: ["arm", "arms"],
    dict: [580],
    root: ["-nʌtsh-"],
    standalone: ["onʌ́tsha’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "nʌtshá·ke’"],
      },
    ],
  };
  const objBack: BodyPartNounData = {
    key: "back",
    en: ["back"],
    dict: [662],
    root: ["-shw-", "-shwʌ-", "-shu-"],
    standalone: ["óshwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "shwʌ́·ne’"],
      },
      {
        one: [["ke", "PS"], "shú·ne’"],
      },
    ],
  };
  const objBeard: BodyPartNounData = {
    key: "beard",
    en: ["beard", "moustache"],
    dict: [493, 902],
    root: ["-kustu’lh-"],
    standalone: ["okustú·lha’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "kustulhá·ke’"],
      },
    ],
  };
  const objBelly: BodyPartNounData = {
    key: "belly",
    en: ["belly"],
    dict: [592],
    root: ["-nikwʌ’t-"],
    standalone: ["onikwʌ́·ta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nikwʌ’té·ne"],
      },
      {
        one: [["k", "PS"], "nikwʌ’tá·ke’"],
      },
    ],
  };
  const objBellybutton: BodyPartNounData = {
    key: "bellybutton",
    en: ["belly button"],
    dict: [905],
    root: ["-nli’tst-"],
    standalone: ["onlí·tsta’", "ontlí·tsta’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "n", ["t", "RPL"], "li’tstá·ke’"],
      },
    ],
  };
  const objBirthMark: BodyPartNounData = {
    key: "birthmark",
    en: ["birth mark"],
    dict: [],
    root: ["-atshistokwale"],
    standalone: ["atshistokwale"],
    onNoun: [
      {
        en: "my",
        one: [["wak", "PO"], "atshistokwale"],
      },
    ],
  };
  const objBladder: BodyPartNounData = {
    key: "bladder",
    en: ["bladder"],
    dict: [585, 504, 909],
    root: ["-nhʌhalakhwa’"],
    standalone: ["yenhʌhalakhwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "nhʌhalákhwa’"],
      },
    ],
  };
  const objBlood: BodyPartNounData = {
    key: "blood",
    en: ["blood"],
    dict: [591, 910],
    root: ["-nikwʌhs-"],
    standalone: ["onikwʌ́hsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "nikwʌ́hsa̲"],
      },
    ],
  };
  const objBody: BodyPartNounData = {
    key: "body",
    en: ["body"],
    dict: [911],
    root: ["-ya’t-"],
    standalone: ["oyá·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "ya’té·ne"],
      },
    ],
  };
  const objBone: BodyPartNounData = {
    key: "bone",
    en: ["bone"],
    dict: [912],
    root: ["-styʌ’t-"],
    standalone: ["óstyʌ’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "styʌ’tá·ke’"],
      },
    ],
  };
  const objBraid: BodyPartNounData = {
    key: "braid",
    en: ["braid"],
    dict: [512, 915],
    root: ["-latskʌ-"],
    standalone: ["olátskʌ’", "olátskʌ’·ta"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "latskʌtá·ke’"],
      },
    ],
  };
  const objBrain: BodyPartNounData = {
    key: "brain",
    en: ["brain"],
    dict: [559],
    root: ["-na’alatsl-"],
    standalone: ["ona’alátsla’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "na’alatsla’"],
      },
    ],
  };
  const objBreast: BodyPartNounData = {
    key: "breast",
    en: ["breast"],
    dict: [618],
    root: ["-nu’t-"],
    standalone: ["onú·ta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nu’tá·ke’"],
      },
    ],
  };
  const objCheek: BodyPartNounData = {
    key: "cheek",
    en: ["cheek"],
    dict: [589],
    root: ["-nho’kw-"],
    standalone: ["onhó·kwa’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "nho’kwá·ke’"],
      },
    ],
  };
  const objButt: BodyPartNounData = {
    key: "butt",
    en: ["butt"],
    dict: [386, 926],
    root: ["-hna’tsh-"],
    standalone: ["ohná·tsha’", "ohtnusa"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hna’tshí·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hna’tshá·ke’"],
      },
    ],
  };
  const objChest: BodyPartNounData = {
    key: "chest",
    en: ["chest"],
    dict: [934],
    root: ["-utskwe’n-"],
    standalone: ["utskwé·na’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "utskwe’ná·ke’"],
      },
    ],
  };
  const objChin: BodyPartNounData = {
    key: "chin",
    en: ["chin"],
    dict: [422, 935],
    root: ["-hyo’tsh-"],
    standalone: ["ohyó·tsha’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "hyo’tshé·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hyo’tshá·ke’"],
      },
    ],
  };
  const objEar: BodyPartNounData = {
    key: "ear",
    en: ["ear", "ears"],
    dict: [977],
    root: ["-ahuht-"],
    standalone: ["ohúhta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "ahuhtá·ke’"],
      },
    ],
  };
  const objElbow: BodyPartNounData = {
    key: "elbow",
    en: ["elbow"],
    dict: [980],
    root: ["-hyo’lh-", "-lhyo’lh-", "-whyo’lh-"],
    standalone: ["ohyó·lha’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "hyo’lhá·ke’"],
      },
      {
        en: "on my",
        one: [["ke", "PS"], "lhyo’lhá·ke’"],
      },
    ],
  };
  const objEye: BodyPartNounData = {
    key: "eye",
    en: ["eye", "eyes"],
    dict: [985],
    root: ["-kahl-"],
    standalone: ["oká·la’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "kahlá·ke’"],
      },
    ],
  };
  const objEyebrow: BodyPartNounData = {
    key: "eyebrow",
    en: ["eyebrow"],
    dict: [985],
    root: ["-na’was-"],
    standalone: ["ona’wa·sé·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "na’wasá·ke"],
      },
    ],
  };
  const objEyelash: BodyPartNounData = {
    key: "eyelash",
    en: ["eyelash", "strawberry top"],
    dict: [985],
    root: ["-’nekʌhtal-"],
    standalone: ["o’nekʌhtala’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "ne’kʌhtalá·ke’"],
      },
    ],
  };
  const objEyelid: BodyPartNounData = {
    key: "eyelid",
    en: ["eyelid"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["okahkwilo’ókta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "ONNOUN"],
      },
    ],
  };
  const objFace: BodyPartNounData = {
    key: "face",
    en: ["face", "mask"],
    dict: [492],
    root: ["-kuhs-", "-kuks-"],
    standalone: ["okúhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "kukhsá·ke’"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "kúksne"],
      },
    ],
  };
  const objNail: BodyPartNounData = {
    key: "nail",
    en: ["fingernail", "toenail", "claw"],
    dict: [995],
    root: ["-tsye’el-"],
    standalone: ["otsye’e·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "tsye’elá·ke"],
      },
    ],
  };
  const objFoot: BodyPartNounData = {
    key: "foot",
    en: ["foot", "feet"],
    dict: [71, 1004],
    root: ["-ahsi’t-", "-ahsi-"],
    standalone: ["ohsí·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "ahsí·ke"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "ahsi’tá·ke’"],
      },
    ],
  };
  const objForehead: BodyPartNounData = {
    key: "forehead",
    en: ["forehead"],
    dict: [495, 1006],
    root: ["-ku’kwal-"],
    standalone: ["okú·kwala’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "ku’kwalá·ke’"],
      },
    ],
  };
  const objGenitals: BodyPartNounData = {
    key: "genitals",
    en: ["genitals", "vagina", "penis"],
    dict: [850],
    root: ["-’n-"],
    standalone: ["ó·na’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "e’ná·ke’"],
      },
    ],
  };
  const objHair: BodyPartNounData = {
    key: "hair",
    en: ["hair"],
    dict: [601, 1029],
    root: ["-nuhkwis-", "-nuhkwisl-"],
    standalone: ["onúhkwis"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "núhkwis"],
      },
    ],
  };
  const objHand: BodyPartNounData = {
    key: "hand",
    en: ["hand", "fingers"],
    dict: [658, 1030],
    root: ["-shnuhs-", "-hsnu-"],
    standalone: ["oshnúhsa’"],
    onNoun: [
      {
        en: "my hand",
        one: [["ke", "PS"], "shnú·ke’"],
      },
    ],
  };
  const objHead: BodyPartNounData = {
    key: "head",
    en: ["head"],
    dict: [615, 1035],
    root: ["-nutsi-", "-nutsist-"],
    standalone: ["onutsí"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nutsí·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "nutsihstá·ke’"],
      },
    ],
  };
  const objHeart: BodyPartNounData = {
    key: "heart",
    en: ["heart"],
    dict: [1037],
    root: ["-el-", "-ely-", "-elyahs-"],
    standalone: ["awe·lá·", "awelyáhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PP"], "elyá·ne"],
      },
    ],
  };
  const objHeel: BodyPartNounData = {
    key: "heel",
    en: ["heel"],
    dict: [509, 1038],
    root: ["-lat-"],
    standalone: ["ola·tá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "latá·ke’"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "laté·ne"],
      },
    ],
  };
  const objHip: BodyPartNounData = {
    key: "hip",
    en: ["hip"],
    dict: [589, 1041],
    root: ["-nhuskal-"],
    standalone: ["onhúskala’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "nhuskalá·ke’"],
      },
    ],
  };
  const objIntestines: BodyPartNounData = {
    key: "intestines",
    en: ["intestines", "guts", "innards"],
    dict: [450],
    root: ["-kahlost-"],
    standalone: ["okahlósta’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "kahlostá·ke’"],
      },
    ],
  };
  const objJoint: BodyPartNounData = {
    key: "joint",
    en: ["joint"],
    dict: [671, 1331],
    root: ["tsi’ te...stutel-", "tsi’ te...stutl-"],
    standalone: ["ostutla’shúha’"],
    onNoun: [
      {
        en: "my",
        one: ["tsi’ t", ["wak", "PO"], "estu·téle"],
      },
    ],
  };
  const objKnee: BodyPartNounData = {
    key: "knee",
    en: ["knee"],
    dict: [760, 1062],
    root: ["-utsh-"],
    standalone: ["útsha’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "utshá·ke’"],
      },
    ],
  };
  const objLeg: BodyPartNounData = {
    key: "leg",
    en: ["leg"],
    dict: [403],
    root: ["-hsin-"],
    standalone: ["ohsi·ná·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "hsiná·ke’"],
      },
      // {
      //   en: "???",
      //   one: [["ak", "PP"], "hsiná·ke’"],
      // },
    ],
  };
  const objLiver: BodyPartNounData = {
    key: "liver",
    en: ["liver"],
    dict: [1080],
    root: ["-athwʌhs-"],
    standalone: ["othwʌ́hsa’"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PP"], "athwʌ́hsa’"],
      },
    ],
  };
  const objLung: BodyPartNounData = {
    key: "lung",
    en: ["lung"],
    dict: [768, 1088],
    root: ["-wela-"],
    standalone: ["yewelalákhwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "welalá·khwa̲’"],
      },
    ],
  };
  const objMouth: BodyPartNounData = {
    key: "mouth",
    en: ["mouth", "opening"],
    dict: [399],
    root: ["-hsakahlute’-"],
    standalone: ["ohsaká·la"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "sá·ke’"],
      },
    ],
  };
  const objMuscles: BodyPartNounData = {
    key: "muscles",
    en: ["muscles"],
    dict: [408, 1102],
    root: ["-htil-"],
    standalone: ["ohti·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "hti·lá’"],
      },
    ],
  };
  const objLips: BodyPartNounData = {
    key: "lips",
    en: ["lips"],
    dict: [399, 1077],
    root: ["-hs-"],
    standalone: ["ohsé·ne"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "sé·ne"],
      },
    ],
  };
  const objNeck: BodyPartNounData = {
    key: "neck",
    en: ["neck"],
    dict: [621, 1105],
    root: ["-nyal-"],
    standalone: ["onya·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "nyalá·ke’"],
      },
    ],
  };
  const objNipple: BodyPartNounData = {
    key: "nipple",
    en: ["nipple"],
    dict: [390, 1107],
    root: ["-hnihsy-"],
    standalone: ["ohníhsya’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hnihsyá·ke’"],
      },
    ],
  };
  const objNose: BodyPartNounData = {
    key: "nose",
    en: ["nose"],
    dict: [866, 1108],
    root: ["-’nyuhs-"],
    standalone: ["o’nyúhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "’nyú·ke’"],
      },
      {
        en: "on my",
        one: [["ke", "PS"], "’nyuhsá·ke’"],
      },
    ],
  };
  const objPalm: BodyPartNounData = {
    key: "palm",
    en: ["palm"],
    dict: [83],
    root: ["-ahtsy-"],
    standalone: ["óhtsyana"],
    onNoun: [
      {
        en: "on my",
        one: [["akw", "PP"], "ahtsyaná·ke"],
      },
    ],
  };
  const objRibs: BodyPartNounData = {
    key: "ribs",
    en: ["ribs"],
    dict: [559, 1152],
    root: ["-na’aht-"],
    standalone: ["ona’áhta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "na’ahtá·ke’"],
      },
      {
        en: "my",
        one: [["k", "PS"], "na’ahté·ne"],
      },
    ],
  };
  const objRib: BodyPartNounData = {
    key: "rib",
    en: ["rib"],
    dict: [408],
    root: ["-htehkal-"],
    standalone: ["ohtéhkala’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "tehkalá·ke’"],
      },
    ],
  };
  const objShin: BodyPartNounData = {
    key: "shin",
    en: ["shin"],
    dict: [629, 1173],
    root: ["-nyʌt-"],
    standalone: ["onyʌ·tá·"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "nyʌ’tá·ke’"],
      },
    ],
  };
  const objShoulder: BodyPartNounData = {
    key: "shoulder",
    en: ["shoulder"],
    dict: [389, 1175],
    root: ["-hnʌhs-", "-hnʌks-"],
    standalone: ["ohnʌ́hsa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hnʌ́ksne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hnʌhsá·ke’"],
      },
    ],
  };
  const objSkin: BodyPartNounData = {
    key: "skin",
    en: ["skin"],
    dict: [424, 1159],
    root: ["-ihna-", "-hnakwal-"],
    standalone: ["ohna·kwále’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "hná·kwale’"],
      },
    ],
  };
  const objSkull: BodyPartNounData = {
    key: "skull",
    en: ["skull", "head"],
    dict: [559],
    root: ["-na’al-"],
    standalone: ["ona’a·lá·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "na’alá·ke’"],
      },
      {
        en: "in my",
        one: [["k", "PS"], "na’alakú"],
      },
    ],
  };
  const objSoul: BodyPartNounData = {
    key: "soul",
    en: ["soul"],
    dict: [],
    root: ["-atunhetsl-"],
    standalone: ["atunhétsla’"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PP"], "atunhetsla’"],
      },
    ],
  };
  const objSpine: BodyPartNounData = {
    key: "spine",
    en: ["spine"],
    dict: [541, 1195],
    root: ["-luhkwe’n-"],
    standalone: ["oluhkwé·na’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "luhkwehná·ke’"],
      },
    ],
  };
  const objStomachOrgan: BodyPartNounData = {
    key: "stomachorgan",
    en: ["stomach (organ)"],
    dict: [484, 1206],
    root: ["-khwalakhwa’-"],
    // standalone: ["yekhwalákhwa’"],
    standalone: [],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "khwalákhwa’"],
      },
    ],
  };
  const objTesticles: BodyPartNounData = {
    key: "testicles",
    en: ["testicles"],
    dict: [583, 1227],
    root: ["-nʌya’ke-"],
    standalone: ["onʌ·yá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nʌyá·ke’"],
      },
    ],
  };
  const objThigh: BodyPartNounData = {
    key: "thigh",
    en: ["thigh"],
    dict: [393, 1228],
    root: ["-hnitsh-"],
    standalone: ["ohnítsha’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "hnitshá·ke’"],
      },
    ],
  };
  const objThroat: BodyPartNounData = {
    key: "throat",
    en: ["throat"],
    dict: [411, 1230],
    root: ["-hu’kw-"],
    standalone: ["ohú·kwa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hu’kwé·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hu’kwá·ke"],
      },
    ],
  };
  // const objThroat2: BodyPartNounData = {
  //   key: "KEY",
  //   en: ["key"],
  //   dict: [384],
  //   root: ["-nya’t-"],
  //   standalone: ["onyá·ta’", 'onyáhta̲'],
  // onNoun: [
  //   {
  //     en: "my",
  //     one: [["k", "PS"], "enya’tá·ke"],
  //   },
  // ],
  // };
  const objThumb: BodyPartNounData = {
    key: "thumb",
    en: ["thumb"],
    dict: [771, 1231],
    root: ["-whyuhkal-"],
    standalone: ["owhyúhkala’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "whyuhkalá·ke’"],
      },
    ],
  };
  const objToe: BodyPartNounData = {
    key: "toe",
    en: ["toe"],
    dict: [88, 1235],
    root: ["-ahyakwil-", "-ahyakwi-"],
    standalone: ["ohyakwi·lá·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "ahyakwí·ke’"],
      },
    ],
  };
  const objTongue: BodyPartNounData = {
    key: "tongue",
    en: ["tongue"],
    dict: [353, 1235],
    root: ["-ʌ’nahs-"],
    standalone: ["awʌ’náhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "wʌ’náhsa’"],
      },
    ],
  };
  const objTeeth: BodyPartNounData = {
    key: "teeth",
    en: ["teeth"],
    dict: [557, 1236],
    root: ["-nawil-"],
    standalone: ["onawi·lá·"],
    onNoun: [
      {
        en: "on my teeth",
        one: [["k", "PS"], "nawilashuha"],
      },
    ],
  };
  const objTooth: BodyPartNounData = {
    key: "tooth",
    en: ["tooth"],
    dict: [557, 1236],
    root: ["-nawil-"],
    standalone: ["onawi·lá·"],
    onNoun: [
      {
        en: "on my tooth",
        one: [["k", "PS"], "nawilá·ke’"],
      },
      {
        en: "my tooth (in my mouth)",
        one: [["k", "PS"], "nawí·ke’"],
      },
      {
        en: "my tooth (not in my mouth)",
        one: [["ak", "PP"], "nawi·lá·"],
      },
    ],
  };
  const objVein: BodyPartNounData = {
    key: "vein",
    en: ["vein"],
    dict: [],
    root: [],
    standalone: ["otsinuhyáhta’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "tsinuhyáhta’"],
      },
    ],
  };
  const objWomb: BodyPartNounData = {
    key: "womb",
    en: ["womb", "uterus"],
    dict: [],
    root: [],
    standalone: ["kawilalákhwa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "wilalakhwa"],
      },
    ],
  };

  const result = [
    objAnkle,
    objArm,
    objBack,
    objBeard,
    objBelly,
    objBellybutton,
    // objBirthMark,
    objBladder,
    objBlood,
    objBody,
    objBone,
    objBraid,
    objBrain,
    objBreast,
    objCheek,
    objButt,
    objChest,
    objChin,
    objEar,
    objElbow,
    objEye,
    objEyebrow,
    objEyelash,
    // objEyelid,
    objFace,
    objNail,
    objFoot,
    objForehead,
    objGenitals,
    objHair,
    objHand,
    objHead,
    objHeart,
    objHeel,
    objHip,
    objIntestines,
    objJoint,
    objKnee,
    objLeg,
    objLiver,
    objLung,
    // objMouth,
    objMuscles,
    objLips,
    objNeck,
    objNipple,
    objNose,
    objPalm,
    // objRibs,
    objRib,
    objShin,
    objShoulder,
    objSkin,
    objSkull,
    objSoul,
    objSpine,
    objStomachOrgan,
    objTesticles,
    objThigh,
    objThroat,
    // objThroat2,
    objThumb,
    objToe,
    objTongue,
    // objTeeth,
    objTooth,
    objVein,
    objWomb,
  ];
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}
