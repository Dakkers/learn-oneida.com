import type { BreakdownArray } from "@ukwehuwehneke/language-components";

type ListOfBreakdowns = Array<{
  en?: string;
  one: BreakdownArray;
}>;

interface ModernEntry {
  en: string[];
  key: string;
  root: string[];
  dict: number[];
}

export interface BodyPartNounData extends ModernEntry {
  standalone: string[];
  onNoun: ListOfBreakdowns;
}

export interface Module11AilmentEntry extends ModernEntry {
  usage: ListOfBreakdowns;
}

export function createModule11BodyPartNounList(): BodyPartNounData[] {
  const objAnkle: BodyPartNounData = {
    key: "ankle",
    en: ["ankle", "ankles"],
    dict: [404],
    root: ["-hsinikoʔt-"],
    standalone: ["ohsinikó·taʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["kh", "PS"], "sinikoʔtá·keʔ"],
      },
    ],
  };
  const objArm: BodyPartNounData = {
    key: "arm",
    en: ["arm", "arms"],
    dict: [580],
    root: ["-nʌtsh-"],
    standalone: ["onʌ́tshaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "nʌtshá·keʔ"],
      },
    ],
  };
  const objBack: BodyPartNounData = {
    key: "back",
    en: ["back"],
    dict: [662],
    root: ["-shw-", "-shwʌ-", "-shu-"],
    standalone: ["óshwaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "shwʌ́·neʔ"],
      },
      {
        one: [["ke", "PS"], "shú·neʔ"],
      },
    ],
  };
  const objBeard: BodyPartNounData = {
    key: "beard",
    en: ["beard", "moustache"],
    dict: [493, 902],
    root: ["-kustuʔlh-"],
    standalone: ["okustú·lhaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "kustulhá·keʔ"],
      },
    ],
  };
  const objBelly: BodyPartNounData = {
    key: "belly",
    en: ["belly"],
    dict: [592],
    root: ["-nikwʌʔt-"],
    standalone: ["onikwʌ́·taʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nikwʌʔté·ne"],
      },
      {
        one: [["k", "PS"], "nikwʌʔtá·keʔ"],
      },
    ],
  };
  const objBellybutton: BodyPartNounData = {
    key: "bellybutton",
    en: ["belly button"],
    dict: [905],
    root: ["-nliʔtst-"],
    standalone: ["onlí·tstaʔ", "ontlí·tstaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "n", ["t", "RPL"], "liʔtstá·keʔ"],
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
    root: ["-nhʌhalakhwaʔ"],
    standalone: ["yenhʌhalakhwaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "nhʌhalákhwaʔ"],
      },
    ],
  };
  const objBlood: BodyPartNounData = {
    key: "blood",
    en: ["blood"],
    dict: [591, 910],
    root: ["-nikwʌhs-"],
    standalone: ["onikwʌ́hsaʔ"],
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
    root: ["-yaʔt-"],
    standalone: ["oyá·taʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "yaʔté·ne"],
      },
    ],
  };
  const objBone: BodyPartNounData = {
    key: "bone",
    en: ["bone"],
    dict: [912],
    root: ["-styʌʔt-"],
    standalone: ["óstyʌʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "styʌʔtá·keʔ"],
      },
    ],
  };
  const objBraid: BodyPartNounData = {
    key: "braid",
    en: ["braid"],
    dict: [512, 915],
    root: ["-latskʌ-"],
    standalone: ["olátskʌʔ", "olátskʌʔ·ta"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "latskʌtá·keʔ"],
      },
    ],
  };
  const objBrain: BodyPartNounData = {
    key: "brain",
    en: ["brain"],
    dict: [559],
    root: ["-naʔalatsl-"],
    standalone: ["onaʔalátslaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "naʔalatslaʔ"],
      },
    ],
  };
  const objBreast: BodyPartNounData = {
    key: "breast",
    en: ["breast"],
    dict: [618],
    root: ["-nuʔt-"],
    standalone: ["onú·taʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nuʔtá·keʔ"],
      },
    ],
  };
  const objCheek: BodyPartNounData = {
    key: "cheek",
    en: ["cheek"],
    dict: [589],
    root: ["-nhoʔkw-"],
    standalone: ["onhó·kwaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "nhoʔkwá·keʔ"],
      },
    ],
  };
  const objButt: BodyPartNounData = {
    key: "butt",
    en: ["butt"],
    dict: [386, 926],
    root: ["-hnaʔtsh-"],
    standalone: ["ohná·tshaʔ", "ohtnusa"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hnaʔtshí·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hnaʔtshá·keʔ"],
      },
    ],
  };
  const objChest: BodyPartNounData = {
    key: "chest",
    en: ["chest"],
    dict: [934],
    root: ["-utskweʔn-"],
    standalone: ["utskwé·naʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "utskweʔná·keʔ"],
      },
    ],
  };
  const objChin: BodyPartNounData = {
    key: "chin",
    en: ["chin"],
    dict: [422, 935],
    root: ["-hyoʔtsh-"],
    standalone: ["ohyó·tshaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "hyoʔtshé·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hyoʔtshá·keʔ"],
      },
    ],
  };
  const objEar: BodyPartNounData = {
    key: "ear",
    en: ["ear", "ears"],
    dict: [977],
    root: ["-ahuht-"],
    standalone: ["ohúhtaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "ahuhtá·keʔ"],
      },
    ],
  };
  const objElbow: BodyPartNounData = {
    key: "elbow",
    en: ["elbow"],
    dict: [980],
    root: ["-hyoʔlh-", "-lhyoʔlh-", "-whyoʔlh-"],
    standalone: ["ohyó·lhaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "hyoʔlhá·keʔ"],
      },
      {
        en: "on my",
        one: [["ke", "PS"], "lhyoʔlhá·keʔ"],
      },
    ],
  };
  const objEye: BodyPartNounData = {
    key: "eye",
    en: ["eye", "eyes"],
    dict: [985],
    root: ["-kahl-"],
    standalone: ["oká·laʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "kahlá·keʔ"],
      },
    ],
  };
  const objEyebrow: BodyPartNounData = {
    key: "eyebrow",
    en: ["eyebrow"],
    dict: [985],
    root: ["-naʔwas-"],
    standalone: ["onaʔwa·sé·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "naʔwasá·ke"],
      },
    ],
  };
  const objEyelash: BodyPartNounData = {
    key: "eyelash",
    en: ["eyelash", "strawberry top"],
    dict: [985],
    root: ["-ʔnekʌhtal-"],
    standalone: ["oʔnekʌhtalaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "neʔkʌhtalá·keʔ"],
      },
    ],
  };
  const objEyelid: BodyPartNounData = {
    key: "eyelid",
    en: ["eyelid"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["okahkwiloʔóktaʔ"],
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
    standalone: ["okúhsaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "kukhsá·keʔ"],
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
    root: ["-tsyeʔel-"],
    standalone: ["otsyeʔe·lá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "tsyeʔelá·ke"],
      },
    ],
  };
  const objFoot: BodyPartNounData = {
    key: "foot",
    en: ["foot", "feet"],
    dict: [71, 1004],
    root: ["-ahsiʔt-", "-ahsi-"],
    standalone: ["ohsí·taʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "ahsí·ke"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "ahsiʔtá·keʔ"],
      },
    ],
  };
  const objForehead: BodyPartNounData = {
    key: "forehead",
    en: ["forehead"],
    dict: [495, 1006],
    root: ["-kuʔkwal-"],
    standalone: ["okú·kwalaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "kuʔkwalá·keʔ"],
      },
    ],
  };
  const objGenitals: BodyPartNounData = {
    key: "genitals",
    en: ["genitals", "vagina", "penis"],
    dict: [850],
    root: ["-ʔn-"],
    standalone: ["ó·naʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "eʔná·keʔ"],
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
    standalone: ["oshnúhsaʔ"],
    onNoun: [
      {
        en: "my hand",
        one: [["ke", "PS"], "shnú·keʔ"],
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
        one: [["k", "PS"], "nutsihstá·keʔ"],
      },
    ],
  };
  const objHeart: BodyPartNounData = {
    key: "heart",
    en: ["heart"],
    dict: [1037],
    root: ["-el-", "-ely-", "-elyahs-"],
    standalone: ["awe·lá·", "awelyáhsaʔ"],
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
        one: [["k", "PS"], "latá·keʔ"],
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
    standalone: ["onhúskalaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "nhuskalá·keʔ"],
      },
    ],
  };
  const objIntestines: BodyPartNounData = {
    key: "intestines",
    en: ["intestines", "guts", "innards"],
    dict: [450],
    root: ["-kahlost-"],
    standalone: ["okahlóstaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "kahlostá·keʔ"],
      },
    ],
  };
  const objJoint: BodyPartNounData = {
    key: "joint",
    en: ["joint"],
    dict: [671, 1331],
    root: ["tsiʔ te...stutel-", "tsiʔ te...stutl-"],
    standalone: ["ostutlaʔshúhaʔ"],
    onNoun: [
      {
        en: "my",
        one: ["tsiʔ t", ["wak", "PO"], "estu·téle"],
      },
    ],
  };
  const objKnee: BodyPartNounData = {
    key: "knee",
    en: ["knee"],
    dict: [760, 1062],
    root: ["-utsh-"],
    standalone: ["útshaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "utshá·keʔ"],
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
        one: [["k", "PS"], "hsiná·keʔ"],
      },
      // {
      //   en: "???",
      //   one: [["ak", "PP"], "hsiná·keʔ"],
      // },
    ],
  };
  const objLiver: BodyPartNounData = {
    key: "liver",
    en: ["liver"],
    dict: [1080],
    root: ["-athwʌhs-"],
    standalone: ["othwʌ́hsaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PP"], "athwʌ́hsaʔ"],
      },
    ],
  };
  const objLung: BodyPartNounData = {
    key: "lung",
    en: ["lung"],
    dict: [768, 1088],
    root: ["-wela-"],
    standalone: ["yewelalákhwaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "welalá·khwa̲ʔ"],
      },
    ],
  };
  const objMouth: BodyPartNounData = {
    key: "mouth",
    en: ["mouth", "opening"],
    dict: [399],
    root: ["-hsakahluteʔ-"],
    standalone: ["ohsaká·la"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "sá·keʔ"],
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
        one: [["ak", "PP"], "hti·láʔ"],
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
        one: [["ke", "PS"], "nyalá·keʔ"],
      },
    ],
  };
  const objNipple: BodyPartNounData = {
    key: "nipple",
    en: ["nipple"],
    dict: [390, 1107],
    root: ["-hnihsy-"],
    standalone: ["ohníhsyaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hnihsyá·keʔ"],
      },
    ],
  };
  const objNose: BodyPartNounData = {
    key: "nose",
    en: ["nose"],
    dict: [866, 1108],
    root: ["-ʔnyuhs-"],
    standalone: ["oʔnyúhsaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "ʔnyú·keʔ"],
      },
      {
        en: "on my",
        one: [["ke", "PS"], "ʔnyuhsá·keʔ"],
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
    root: ["-naʔaht-"],
    standalone: ["onaʔáhtaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "naʔahtá·keʔ"],
      },
      {
        en: "my",
        one: [["k", "PS"], "naʔahté·ne"],
      },
    ],
  };
  const objRib: BodyPartNounData = {
    key: "rib",
    en: ["rib"],
    dict: [408],
    root: ["-htehkal-"],
    standalone: ["ohtéhkalaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "tehkalá·keʔ"],
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
        one: [["ke", "PS"], "nyʌʔtá·keʔ"],
      },
    ],
  };
  const objShoulder: BodyPartNounData = {
    key: "shoulder",
    en: ["shoulder"],
    dict: [389, 1175],
    root: ["-hnʌhs-", "-hnʌks-"],
    standalone: ["ohnʌ́hsaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "hnʌ́ksne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "hnʌhsá·keʔ"],
      },
    ],
  };
  const objSkin: BodyPartNounData = {
    key: "skin",
    en: ["skin"],
    dict: [424, 1159],
    root: ["-ihna-", "-hnakwal-"],
    standalone: ["ohna·kwáleʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "hná·kwaleʔ"],
      },
    ],
  };
  const objSkull: BodyPartNounData = {
    key: "skull",
    en: ["skull", "head"],
    dict: [559],
    root: ["-naʔal-"],
    standalone: ["onaʔa·lá·"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "naʔalá·keʔ"],
      },
      {
        en: "in my",
        one: [["k", "PS"], "naʔalakú"],
      },
    ],
  };
  const objSoul: BodyPartNounData = {
    key: "soul",
    en: ["soul"],
    dict: [],
    root: ["-atunhetsl-"],
    standalone: ["atunhétslaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["akw", "PP"], "atunhetslaʔ"],
      },
    ],
  };
  const objSpine: BodyPartNounData = {
    key: "spine",
    en: ["spine"],
    dict: [541, 1195],
    root: ["-luhkweʔn-"],
    standalone: ["oluhkwé·naʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "luhkwehná·keʔ"],
      },
    ],
  };
  const objStomachOrgan: BodyPartNounData = {
    key: "stomachorgan",
    en: ["stomach (organ)"],
    dict: [484, 1206],
    root: ["-khwalakhwaʔ-"],
    // standalone: ["yekhwalákhwaʔ"],
    standalone: [],
    onNoun: [
      {
        en: "my",
        one: [["ke", "PS"], "khwalákhwaʔ"],
      },
    ],
  };
  const objTesticles: BodyPartNounData = {
    key: "testicles",
    en: ["testicles"],
    dict: [583, 1227],
    root: ["-nʌyaʔke-"],
    standalone: ["onʌ·yá·"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "nʌyá·keʔ"],
      },
    ],
  };
  const objThigh: BodyPartNounData = {
    key: "thigh",
    en: ["thigh"],
    dict: [393, 1228],
    root: ["-hnitsh-"],
    standalone: ["ohnítshaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["k", "PS"], "hnitshá·keʔ"],
      },
    ],
  };
  const objThroat: BodyPartNounData = {
    key: "throat",
    en: ["throat"],
    dict: [411, 1230],
    root: ["-huʔkw-"],
    standalone: ["ohú·kwaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PS"], "huʔkwé·ne"],
      },
      {
        en: "on my",
        one: [["k", "PS"], "huʔkwá·ke"],
      },
    ],
  };
  // const objThroat2: BodyPartNounData = {
  //   key: "KEY",
  //   en: ["key"],
  //   dict: [384],
  //   root: ["-nyaʔt-"],
  //   standalone: ["onyá·taʔ", 'onyáhta̲'],
  // onNoun: [
  //   {
  //     en: "my",
  //     one: [["k", "PS"], "enyaʔtá·ke"],
  //   },
  // ],
  // };
  const objThumb: BodyPartNounData = {
    key: "thumb",
    en: ["thumb"],
    dict: [771, 1231],
    root: ["-whyuhkal-"],
    standalone: ["owhyúhkalaʔ"],
    onNoun: [
      {
        en: "on my",
        one: [["ke", "PS"], "whyuhkalá·keʔ"],
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
        one: [["k", "PS"], "ahyakwí·keʔ"],
      },
    ],
  };
  const objTongue: BodyPartNounData = {
    key: "tongue",
    en: ["tongue"],
    dict: [353, 1235],
    root: ["-ʌʔnahs-"],
    standalone: ["awʌʔnáhsaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "wʌʔnáhsaʔ"],
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
        one: [["k", "PS"], "nawilá·keʔ"],
      },
      {
        en: "my tooth (in my mouth)",
        one: [["k", "PS"], "nawí·keʔ"],
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
    standalone: ["otsinuhyáhtaʔ"],
    onNoun: [
      {
        en: "my",
        one: [["ak", "PP"], "tsinuhyáhtaʔ"],
      },
    ],
  };
  const objWomb: BodyPartNounData = {
    key: "womb",
    en: ["womb", "uterus"],
    dict: [],
    root: [],
    standalone: ["kawilalákhwaʔ"],
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
export function createModule11BodyAilmentsList(): Module11AilmentEntry[] {
  const objAgony: Module11AilmentEntry = {
    key: "agony",
    en: ["agony", "suffering", "hardship"],
    dict: [542],
    root: ["-luhyakʌ-"],
    usage: [
      {
        en: "I'm suffering",
        one: [["wak", "PO"], "luhyakʌ̲́"],
      },
    ],
  };
  const objBellyache: Module11AilmentEntry = {
    key: "bellyache",
    en: ["bellyache"],
    dict: [72, 905],
    root: ["-N-nuhwak-", "-yaʔtanuhwak-"],
    usage: [
      {
        en: "my belly hurts",
        one: [["wak", "PO"], ["nikwʌʔt", "NOUN"], "anú·waks"],
      },
    ],
  };
  const objBleeding: Module11AilmentEntry = {
    key: "bleeding",
    en: ["bleeding"],
    dict: [575, 909],
    root: ["-nekhwa-"],
    usage: [
      {
        en: "it is bleeding",
        one: [["yo", "PO"], "nekhwʌ·u"],
      },
      {
        en: "it is bleeding",
        one: [["yo", "PO"], "nekhwá·u"],
      },
      {
        en: "my knee is bleeding",
        one: ["t", ["yo", "PO"], "nekwʌ·u ", ["k", "PS"], "utshá·ke"],
      },
    ],
  };
  const objBlind: Module11AilmentEntry = {
    key: "blind",
    en: ["blind"],
    dict: [909],
    root: ["ROOT"],
    usage: [
      {
        en: "I am blind",
        one: [["te", "DUAL"], ["k", "PS"], "akahkwekú̲"],
      },
    ],
  };
  const objBreak: Module11AilmentEntry = {
    key: "break",
    en: ["break"],
    dict: [916],
    root: ["te...atyaʔk-"],
    usage: [
      {
        en: "it is broken",
        one: [["te", "DUAL"], ["yo", "PO"], "tyá·ku"],
      },
      {
        en: "I have a broken arm",
        one: [["te", "DUAL"], ["wak", "PO"], "atnʌtshyá·ku"],
      },
      {
        en: "I have a broken arm",
        one: [["te", "DUAL"], ["yo", "PO"], "atnutshyá·ku"],
      },
    ],
  };
  const objBruise: Module11AilmentEntry = {
    key: "bruise",
    en: ["bruise"],
    dict: [921],
    root: ["te...atahsatu-"],
    usage: [
      {
        en: "I have a bruise",
        one: [["te", "DUAL"], ["wak", "PO"], "atahsa·tó·"],
      },
      {
        en: "I have a bruise",
        one: [["te", "DUAL"], ["wak", "PO"], "atahsa·tú·"],
      },
    ],
  };
  const objCancer: Module11AilmentEntry = {
    key: "cancer",
    en: ["cancer"],
    dict: [],
    root: [],
    usage: [
      {
        one: [["ka", "PS"], "ʔwaláks"],
      },
    ],
  };
  const objHave: Module11AilmentEntry = {
    key: "have",
    en: ["have a cold"],
    dict: [940],
    root: ["-atholyahsluʔse-", "-atholyahsluʔs-"],
    usage: [
      {
        en: "I have a cold",
        one: [["wak", "PO"], "atholyahslú·se"],
      },
    ],
  };
  const objCough: Module11AilmentEntry = {
    key: "cough",
    en: ["cough"],
    dict: [948],
    root: ["-ahsaʔk-"],
    usage: [
      {
        en: "I'm coughing",
        one: [["k", "PS"], "ahsá·khaʔ"],
      },
    ],
  };
  const objDeaf: Module11AilmentEntry = {
    key: "deaf",
    en: ["deaf"],
    dict: [958],
    root: ["te...ahuhtakwek-"],
    usage: [
      {
        en: "ENGLISH2",
        one: [["te", "DUAL"], ["k", "PS"], "ahuhtakwekú̲"],
      },
    ],
  };
  const objDiabetes: Module11AilmentEntry = {
    key: "diabetes",
    en: ["diabetes"],
    dict: [612],
    root: ["te...nutakli'tslal-"],
    usage: [
      {
        en: "I am diabetic (lit. I have sugar, I am sweet)",
        one: [["te", "DUAL"], ["wak", "PO"], ["nutaklí", "NOUN"], "·tslaleʔ"],
      },
    ],
  };
  const objDiarrhea: Module11AilmentEntry = {
    key: "diarrhea",
    en: ["diarrhea"],
    dict: [961],
    root: ["te...atya?tukoht-"],
    usage: [
      {
        en: "I have diarrhea (lit. it's going through me)",
        one: [["te", "DUAL"], ["wak", "PO"], "atyaʔtukóthaʔ"],
      },
    ],
  };
  const objDisease: Module11AilmentEntry = {
    key: "disease",
    en: ["disease"],
    dict: [585],
    root: ["-nhlayʌ-"],
    usage: [
      {
        en: "I have a disease",
        one: [["wak", "PO"], "énhlayʌʔ"],
      },
    ],
  };
  const objDizzy: Module11AilmentEntry = {
    key: "dizzy",
    en: ["dizzy"],
    dict: [729, 967],
    root: ["-tsihalateny-"],
    usage: [
      {
        en: "I am dizzy",
        one: [["wak", "PO"], "tsiʔhalatenyé·sé̲ʔ"],
      },
      {
        en: "I am dizzy",
        one: [["wak", "PO"], "tsihalatényehseʔ"],
      },
    ],
  };
  const objEarache: Module11AilmentEntry = {
    key: "earache",
    en: ["earache"],
    dict: [977],
    root: ["-N-nuhwak-", "-yaʔtanuhwak-"],
    usage: [
      {
        en: "I have an earache",
        one: [["wak", "PO"], ["ahuht", "NOUN"], "anú·waks"],
      },
    ],
  };
  const objFever: Module11AilmentEntry = {
    key: "fever",
    en: ["fever"],
    dict: [799, 992],
    root: ["-yaʔtatalihaʔt-"],
    usage: [
      {
        en: "I have a fever (lit. my body is heating up)",
        one: [["wak", "PO"], ["yaʔt", "NOUN"], "atalihá·tu"],
      },
    ],
  };
  const objHurt: Module11AilmentEntry = {
    key: "hurt",
    en: ["hurt", "pain"],
    dict: [607],
    root: ["nuhwakt(e)-"],
    usage: [
      {
        en: "it hurts",
        one: [["yo", "PO"], "nuhwákteʔ"],
      },
    ],
  };
  const objHurtInjured: Module11AilmentEntry = {
    key: "injured",
    en: ["hurt", "injured"],
    dict: [601],
    root: ["-nuhlyaʔk-"],
    usage: [
      {
        en: "I am injured, I am in pain",
        one: [["wak", "PO"], "nu·lyá·ku"],
      },
    ],
  };
  const objItchy: Module11AilmentEntry = {
    key: "itchy",
    en: ["itchy"],
    dict: [1057],
    root: ["-luhkwani-"],
    usage: [
      {
        en: "I am itchy",
        one: [["wak", "PO"], "lúhkwanihé̲ʔ"],
      },
    ],
  };
  const objNaked: Module11AilmentEntry = {
    key: "naked",
    en: ["naked"],
    dict: [1103],
    root: ["-hetkwal-"],
    usage: [
      {
        en: "I am naked",
        one: [["wak", "PO"], "hétkwaleʔ"],
      },
    ],
  };
  const objScar: Module11AilmentEntry = {
    key: "scar",
    en: ["scar"],
    dict: [771, 1163],
    root: ["-wihlal-"],
    usage: [
      {
        en: "I have a scar",
        one: [["wak", "PO"], "wí·laleʔ"],
      },
      {
        en: "I have a scar",
        one: [["wak", "PO"], ["at", "SRFL"], "wi·lale"],
      },
    ],
  };
  const objSneeze: Module11AilmentEntry = {
    key: "sneeze",
    en: ["sneeze"],
    dict: [445, 1189],
    root: ["te...i'tsyuhkw-"],
    usage: [
      {
        en: "I sneezed",
        one: [["waʔ", "DEF"], ["t", "DUAL"], ["wak", "PO"], "í·tsyuhkweʔ"],
      },
      {
        en: "he will sneeze",
        one: [["t", "DUAL"], ["ʌ", "FUT"], ["hó", "PO"], "·tsyuhkweʔ"],
      },
    ],
  };
  const objSnotty: Module11AilmentEntry = {
    key: "snotty",
    en: ["snotty"],
    dict: [1189],
    root: ["-tsi’nyuhklot-"],
    usage: [
      {
        en: "I have a snotty nose",
        one: [["wak", "PO"], "tsi’nyúhklote’"],
      },
    ],
  };
  const objStuffy: Module11AilmentEntry = {
    key: "stuffy",
    en: ["stuffy nose"],
    dict: [867],
    root: ["te...’nyukwek-"],
    usage: [
      {
        en: "My nose is stuffed up",
        one: [["te", "DUAL"], ["ke", "PO"], "’nyukwekú"],
      },
    ],
  };
  const objSuffering: Module11AilmentEntry = {
    key: "suffering",
    en: ["suffering"],
    dict: [1212],
    root: ["te...atunhukaly-"],
    usage: [
      {
        en: "I am suffering",
        one: [["te", "DUAL"], ["wak", "PO"], ["at", "SRFL"], "unhukáli"],
      },
    ],
  };
  const objSweating: Module11AilmentEntry = {
    key: "sweating",
    en: ["sweating"],
    dict: [1214],
    root: ["te...ate’tukhwal-"],
    usage: [
      {
        en: "I am sweating",
        one: [["te", "DUAL"], ["wak", "PO"], "ate’túkhwale’"],
      },
    ],
  };
  const objToothache: Module11AilmentEntry = {
    key: "toothache",
    en: ["toothache"],
    dict: [557],
    root: ["-N-nuhwak-", "-yaʔtanuhwak-"],
    usage: [
      {
        en: "I have a toothache",
        one: [["wak", "PO"], ["nawil", "NOUN"], "anú·waks"],
      },
    ],
  };
  const objVomit: Module11AilmentEntry = {
    key: "vomit",
    en: ["vomit"],
    dict: [270],
    root: ["-atstik-"],
    usage: [
      {
        en: "I am vomiting",
        one: [["k", "PS"], "atsti·kús"],
      },
    ],
  };
  return [
    objAgony,
    objBellyache,
    objBleeding,
    objBlind,
    objBreak,
    objBruise,
    objCancer,
    objHave,
    objCough,
    objDeaf,
    objDiabetes,
    objDiarrhea,
    objDisease,
    objDizzy,
    objEarache,
    objFever,
    objHurt,
    objHurtInjured,
    objItchy,
    objNaked,
    objScar,
    objSneeze,
    objSnotty,
    objStuffy,
    objSuffering,
    objSweating,
    objToothache,
    objVomit,
  ];
}
