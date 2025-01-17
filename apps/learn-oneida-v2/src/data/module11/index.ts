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
    key: "Ankle",
    en: ["ankle", "ankles"],
    dict: [404],
    root: ["-hsiniko’t-"],
    standalone: ["ohsinikó·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["kh", "PR"], "siniko’tá·ke’"],
      },
    ],
  };
  const objArm: BodyPartNounData = {
    key: "Arm",
    en: ["arm", "arms"],
    dict: [580],
    root: ["-nʌtsh-"],
    standalone: ["onʌtsha’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "nʌtshá·ke’"],
      },
    ],
  };
  const objBack: BodyPartNounData = {
    key: "Back",
    en: ["back"],
    dict: [662],
    root: ["-shw-", "-shwʌ-", "-shu-"],
    standalone: ["óshwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "shwʌ·ne’"],
      },
      {
        one: [["ke", "PR"], "shú·ne’"],
      },
      {
        one: [["k", "PR"], "swʌ·ne’"],
      },
      {
        one: [["k", "PR"], "swá·ke’"],
      },
    ],
  };
  const objBeard: BodyPartNounData = {
    key: "Beard",
    en: ["beard"],
    dict: [493, 902],
    root: ["-kustu’lh-"],
    standalone: ["okustú·lha’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "kustulhá·ke’"],
      },
    ],
  };
  const objBelly: BodyPartNounData = {
    key: "Belly",
    en: ["belly"],
    dict: [592],
    root: ["-nikwʌ’t-"],
    standalone: ["onikwʌ·ta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "nikwʌ’té·ne"],
      },
      {
        one: [["k", "PR"], "nikwʌ’tá·ke’"],
      },
    ],
  };
  const objBellybutton: BodyPartNounData = {
    key: "Bellybutton",
    en: ["belly button"],
    dict: [905],
    root: ["-nli’tst-"],
    standalone: ["onlí·tsta’", "ontlí·tsta’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "ntli’tstá·ke’"],
      },
    ],
  };
  const objBirthMark: BodyPartNounData = {
    key: "BirthMark",
    en: ["birth mark"],
    dict: [],
    root: ["-atshistokwale"],
    standalone: ["atshistokwale"],
    onNoun: [
      {
        en: "my",
        one: [["wak", "PB"], "atshistokwale"],
      },
    ],
  };
  const objBladder: BodyPartNounData = {
    key: "Bladder",
    en: ["bladder"],
    dict: [585, 504, 909],
    root: ["-nhʌhalakhwa’"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "nhʌhalákhwa’"],
      },
    ],
  };
  const objBlood: BodyPartNounData = {
    key: "Blood",
    en: ["blood"],
    dict: [591, 910],
    root: ["-nikwʌhs-"],
    standalone: ["onikwʌhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "nikwʌhśa̲"],
      },
    ],
  };
  const objBody: BodyPartNounData = {
    key: "Body",
    en: ["body"],
    dict: [911],
    root: ["-ya’t-"],
    standalone: ["oyá·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "ya’té·ne"],
      },
    ],
  };
  const objBone: BodyPartNounData = {
    key: "Bone",
    en: ["bone"],
    dict: [912],
    root: ["-styʌ’t-"],
    standalone: ["óstyʌ’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "styʌ’tá·ke’"],
      },
    ],
  };
  const objBraid: BodyPartNounData = {
    key: "Braid",
    en: ["braid"],
    dict: [512, 915],
    root: ["-latskʌ-"],
    standalone: ["olátskʌ’", "olátskʌ’·ta"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "latskʌtá·ke’"],
      },
    ],
  };
  const objBreast: BodyPartNounData = {
    key: "Breast",
    en: ["breast"],
    dict: [618],
    root: ["-nu’t-"],
    standalone: ["onú·ta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "nu’tá·ke’"],
      },
    ],
  };
  const objCheek: BodyPartNounData = {
    key: "Cheek",
    en: ["cheek"],
    dict: [589],
    root: ["-nho’kw-"],
    standalone: ["onhó·kwa’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PR"], "nho’kwá·ke’"],
      },
    ],
  };
  const objButt: BodyPartNounData = {
    key: "Butt",
    en: ["butt"],
    dict: [386, 926],
    root: ["-hna’tsh-"],
    standalone: ["ohná·tsha’", "ohtnusa"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "hna’tshí·ne"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "hna’tshá·ke’"],
      },
    ],
  };
  const objChest: BodyPartNounData = {
    key: "Chest",
    en: ["chest"],
    dict: [934],
    root: ["-utskwe’n-"],
    standalone: ["utskwé·na’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "utskwe’ná·ke’"],
      },
    ],
  };
  const objChin: BodyPartNounData = {
    key: "Chin",
    en: ["chin"],
    dict: [422, 935],
    root: ["-hyo’tsh-"],
    standalone: ["ohyó·tsha’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "hyo’tshé·ne"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "hyo’tshá·ke’"],
      },
    ],
  };
  const objEar: BodyPartNounData = {
    key: "Ear",
    en: ["ear", "ears"],
    dict: [977],
    root: ["-ahuht-"],
    standalone: ["ohúhta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ahuhtá·ke’"],
      },
    ],
  };
  const objElbow: BodyPartNounData = {
    key: "Elbow",
    en: ["elbow"],
    dict: [980],
    root: ["-hyo’lh-", "-lhyo’lh-", "-whyo’lh-"],
    standalone: ["ohyó·lha’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PR"], "hyo’lhá·ke’"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "hyo’lhá·ke’"],
      },
    ],
  };
  const objEye: BodyPartNounData = {
    key: "Eye",
    en: ["eye", "eyes"],
    dict: [985],
    root: ["-kahl-"],
    standalone: ["oká·la’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "kahlá·ke’"],
      },
    ],
  };
  const objEyebrow: BodyPartNounData = {
    key: "Eyebrow",
    en: ["eyebrow"],
    dict: [985],
    root: ["-na’was-"],
    standalone: ["ona’wa·sé·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "na’wasé·ne"],
      },
    ],
  };
  const objEyelash: BodyPartNounData = {
    key: "Eyelash",
    en: ["eyelash", "strawberry top"],
    dict: [985],
    root: ["-’nekʌhtal-"],
    standalone: ["o’nekʌhtala’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "’nekʌhtalá·ke’"],
      },
    ],
  };
  const objEyelid: BodyPartNounData = {
    key: "Eyelid",
    en: ["eyelid"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["okahkwilo’ókta’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objFace: BodyPartNounData = {
    key: "Face",
    en: ["face", "mask"],
    dict: [492],
    root: ["-kuhs-", "-kuks-"],
    standalone: ["okúhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "kúksne"],
      },
      {
        en: "my",
        one: [["k", "PR"], "kukhsá·ke’"],
      },
    ],
  };
  const objNail: BodyPartNounData = {
    key: "Nail",
    en: ["fingernail", "toenail", "claw"],
    dict: [995],
    root: ["-tsye’el-"],
    standalone: ["otsye’e·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "tsye’elá·ke"],
      },
    ],
  };
  const objFoot: BodyPartNounData = {
    key: "Foot",
    en: ["foot", "feet"],
    dict: [71, 1004],
    root: ["-ahsi’t-", "-ahsi-"],
    standalone: ["ohsí·ta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "ahsí·ke"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "ahsi’tá·ke’"],
      },
    ],
  };
  const objForehead: BodyPartNounData = {
    key: "Forehead",
    en: ["forehead"],
    dict: [495, 1006],
    root: ["-ku’kwal-"],
    standalone: ["okú·kwala’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "ku’kwalá·ke’"],
      },
    ],
  };
  const objGenitals: BodyPartNounData = {
    key: "Genitals",
    en: ["genitals", "vagina", "penis"],
    dict: [850],
    root: ["-’n-"],
    standalone: ["ó·na’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "e’ná·ke’"],
      },
    ],
  };
  const objHair: BodyPartNounData = {
    key: "Hair",
    en: ["hair"],
    dict: [601, 1029],
    root: ["-nuhkwis-", "-nuhkwisl-"],
    standalone: ["onúhkwis"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "núhkwis"],
      },
    ],
  };
  const objHand: BodyPartNounData = {
    key: "Hand",
    en: ["hand", "fingers"],
    dict: [658, 1030],
    root: ["-shnuhs-", "-hsnu-"],
    standalone: ["oshnúhsa’"],
    onNoun: [
      {
        en: "my hand",
        one: [["ke", "PR"], "shnú·ke’"],
      },
    ],
  };
  const objHead: BodyPartNounData = {
    key: "Head",
    en: ["head"],
    dict: [615, 1035],
    root: ["-nutsi-", "-nutsist-"],
    standalone: ["onutsí"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "nutsí·ne"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "nutsihstá·ke’"],
      },
    ],
  };
  const objHeart: BodyPartNounData = {
    key: "Heart",
    en: ["heart"],
    dict: [1037],
    root: ["-el-", "-ely-", "-elyahs-"],
    standalone: ["awe·lá·", "awelyáhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PLB"], "elyá·ne"],
      },
    ],
  };
  const objHeel: BodyPartNounData = {
    key: "Heel",
    en: ["heel"],
    dict: [509, 1038],
    root: ["-lat-"],
    standalone: ["ola·tá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "latá·ke’"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "laté·ne"],
      },
    ],
  };
  const objHip: BodyPartNounData = {
    key: "Hip",
    en: ["hip"],
    dict: [589, 1041],
    root: ["-nhuskal-"],
    standalone: ["onhúskala’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "nhuskalá·ke’"],
      },
    ],
  };
  const objIntestines: BodyPartNounData = {
    key: "Intestines",
    en: ["intestines", "guts", "innards"],
    dict: [450],
    root: ["-kahlost-"],
    standalone: ["okahlósta’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "kahlósta·ke’"],
      },
    ],
  };
  const objJoint: BodyPartNounData = {
    key: "Joint",
    en: ["joint"],
    dict: [],
    root: [],
    standalone: [],
    onNoun: [
      {
        en: "my",
        one: ["tsi’ t", ["wak", "PB"], "estu·tele"],
      },
    ],
  };
  const objKnee: BodyPartNounData = {
    key: "Knee",
    en: ["knee"],
    dict: [760, 1062],
    root: ["-utsh-"],
    standalone: ["útsha’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "utshá·ke’"],
      },
    ],
  };
  const objLeg: BodyPartNounData = {
    key: "Leg",
    en: ["leg"],
    dict: [403],
    root: ["-hsin-"],
    standalone: ["ohsi·ná·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "hsiná·ke’"],
      },
      {
        en: "???",
        one: [["ak", "PLB"], "hsiná·ke’"],
      },
    ],
  };
  const objLiver: BodyPartNounData = {
    key: "Liver",
    en: ["liver"],
    dict: [1080],
    root: ["-athwʌhs-"],
    standalone: ["othwʌhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PR"], "athwʌhsa’"],
      },
    ],
  };
  const objLung: BodyPartNounData = {
    key: "Lung",
    en: ["lung"],
    dict: [768, 1088],
    root: ["-wela-"],
    standalone: ["yewelalákhwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "welalá·khwa̲"],
      },
    ],
  };
  const objMouth: BodyPartNounData = {
    key: "Mouth",
    en: ["mouth", "opening"],
    dict: [399],
    root: ["-hsakahlute’-"],
    standalone: ["ohsaká·la"],
    onNoun: [
      {
        en: "my",
        one: ["tsi’", ["k", "PR"], "hsaká·lute’"],
      },
      {
        en: "???",
        one: [["k", "PR"], "sá·ke’"],
      },
    ],
  };
  const objMuscles: BodyPartNounData = {
    key: "Muscles",
    en: ["muscles"],
    dict: [408],
    root: ["-htil-"],
    standalone: ["ohti·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "htila’"],
      },
    ],
  };
  const objLips: BodyPartNounData = {
    key: "Lips",
    en: ["lips"],
    dict: [399, 1077],
    root: ["-hs-"],
    standalone: ["ohsé·ne"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "sé·ne"],
      },
    ],
  };
  const objNeck: BodyPartNounData = {
    key: "Neck",
    en: ["neck"],
    dict: [621, 1105],
    root: ["-nyal-"],
    standalone: ["onya·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "nyalá·ke’"],
      },
    ],
  };
  const objNipple: BodyPartNounData = {
    key: "Nipple",
    en: ["nipple"],
    dict: [390, 1107],
    root: ["-hnihsy-"],
    standalone: ["ohníhsya’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "hnihsyá·ke’"],
      },
    ],
  };
  const objNose: BodyPartNounData = {
    key: "Nose",
    en: ["nose"],
    dict: [866, 1108],
    root: ["-’nyuhs-"],
    standalone: ["o’nyúhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "’nyú·ke’"],
      },
      {
        en: "on my",
        one: [["ke", "PR"], "’nyuhsá·ke’"],
      },
    ],
  };
  const objPalm: BodyPartNounData = {
    key: "Palm",
    en: ["palm"],
    dict: [83],
    root: ["-ahtsy-"],
    standalone: ["óhtsyana"],
    onNoun: [
      {
        en: "on my",
        one: [["ak", "PLB"], "htsyanake"],
      },
    ],
  };
  const objRibs: BodyPartNounData = {
    key: "Ribs",
    en: ["ribs"],
    dict: [559, 1152],
    root: ["-na’aht-"],
    standalone: ["ona’áhta’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "na’ahtá·ke’"],
      },
      {
        en: "my",
        one: [["k", "PR"], "na’ahté·ne"],
      },
    ],
  };
  const objRib: BodyPartNounData = {
    key: "Rib",
    en: ["rib"],
    dict: [408],
    root: ["-htehkal-"],
    standalone: ["ohtéhkala’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "tehkalá·ke’"],
      },
    ],
  };
  const objShin: BodyPartNounData = {
    key: "Shin",
    en: ["shin"],
    dict: [629, 1173],
    root: ["-nyʌt-"],
    standalone: ["onyʌ·tá·"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PR"], "nyʌ’tá·ke’"],
      },
    ],
  };
  const objShoulder: BodyPartNounData = {
    key: "Shoulder",
    en: ["shoulder"],
    dict: [389, 1175],
    root: ["-hnʌhs-", "-hnʌks-"],
    standalone: ["ohnʌ́hsa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "hnʌksne"],
      },
      {
        en: "on my",
        one: [["k", "PR"], "hnʌhsá·ke’"],
      },
    ],
  };
  const objSkin: BodyPartNounData = {
    key: "Skin",
    en: ["skin"],
    dict: [424, 1159],
    root: ["-ihna-", "-hnakwal-"],
    standalone: ["ohna·kwále’"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "ihná·ke"],
      },
      {
        en: "???",
        one: [["ak", "PLB"], "ná·kwale’"],
      },
    ],
  };
  const objSkull: BodyPartNounData = {
    key: "Skull",
    en: ["skull", "head"],
    dict: [559],
    root: ["-na’al-"],
    standalone: ["ona’a·lá·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "na’alá·ke’"],
      },
      {
        en: "in my",
        one: [["k", "PR"], "na’alakú"],
      },
    ],
  };
  const objSoul: BodyPartNounData = {
    key: "Soul",
    en: ["soul"],
    dict: [1234123412341234],
    root: ["-atunhetsl-"],
    standalone: ["atunhétsla’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "atunhetsla’"],
      },
    ],
  };
  const objSpine: BodyPartNounData = {
    key: "Spine",
    en: ["spine"],
    dict: [541, 1195],
    root: ["-luhkwe’n-"],
    standalone: ["oluhkwé·na’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "luhkwehná·ke’"],
      },
    ],
  };
  const objStomachOrgan: BodyPartNounData = {
    key: "StomachOrgan",
    en: ["stomach (organ)"],
    dict: [484, 1206],
    root: ["-khwalakhwa’-"],
    standalone: ["yekhwalákhwa’"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PR"], "khwalákhwa’"],
      },
    ],
  };
  const objTesticles: BodyPartNounData = {
    key: "Testicles",
    en: ["testicles"],
    dict: [583, 1227],
    root: ["-nʌya’ke-"],
    standalone: ["onʌ·yá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "nʌyá·ke’"],
      },
    ],
  };
  const objThigh: BodyPartNounData = {
    key: "Thigh",
    en: ["thigh"],
    dict: [393, 1228],
    root: ["-hnitsh-"],
    standalone: ["ohnítsha’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "hnitshá·ke’"],
      },
    ],
  };
  const objThroat: BodyPartNounData = {
    key: "Throat",
    en: ["throat"],
    dict: [411, 1230],
    root: ["-hu’kw-"],
    standalone: ["ohú·kwa’"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "hu’kwé·ne"],
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
  //     one: [["k", "PR"], "enya’tá·ke"],
  //   },
  // ],
  // };
  const objThumb: BodyPartNounData = {
    key: "Thumb",
    en: ["thumb"],
    dict: [771, 1231],
    root: ["-whyuhkal-"],
    standalone: ["owhyúhkala’"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PR"], "whyuhkalá·ke’"],
      },
    ],
  };
  const objToe: BodyPartNounData = {
    key: "Toe",
    en: ["toe"],
    dict: [88, 1235],
    root: ["-ahyakwil-", "-ahyakwi-"],
    standalone: ["ohyakwi·lá·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PR"], "ahyakwí·ke’"],
      },
    ],
  };
  const objTongue: BodyPartNounData = {
    key: "Tongue",
    en: ["tongue"],
    dict: [353, 1235],
    root: ["-ʌ’nahs-"],
    standalone: ["awʌ’náhsa’"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "wʌ’náhsa’"],
      },
    ],
  };
  const objTooth: BodyPartNounData = {
    key: "Tooth",
    en: ["tooth", "teeth"],
    dict: [557, 1236],
    root: ["-nawil-"],
    standalone: ["onawi·lá·"],
    onNoun: [
      {
        en: "on my tooth",
        one: [["k", "PR"], "nawilá·ke’"],
      },
      {
        en: "on my teeth",
        one: [["k", "PR"], "nawilashuha"],
      },
      {
        en: "my tooth (in my mouth)",
        one: [["k", "PR"], "nawí·ke’"],
      },
      {
        en: "my tooth (not in my mouth)",
        one: [["ak", "PLB"], "nawi·lá·"],
      },
    ],
  };
  const objVein: BodyPartNounData = {
    key: "Vein",
    en: ["vein"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["ostsinuhya’htu"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PLB"], "tsinuhya’hta"],
      },
    ],
  };
  const objWomb: BodyPartNounData = {
    key: "Womb",
    en: ["womb"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["kawilalakhwa"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "wilalakhwa"],
      },
    ],
  };

  return [
    objAnkle,
    objArm,
    objBack,
    objBeard,
    objBelly,
    objBellybutton,
    objBirthMark,
    // objBladder,
    objBlood,
    objBody,
    objBone,
    objBraid,
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
    objMouth,
    // objMuscles,
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
    // objSoul,
    objSpine,
    objStomachOrgan,
    objTesticles,
    objThigh,
    objThroat,
    // objThroat2,
    objThumb,
    objToe,
    objTongue,
    objTooth,
    // objVein,
    // objWomb,
  ];
}
