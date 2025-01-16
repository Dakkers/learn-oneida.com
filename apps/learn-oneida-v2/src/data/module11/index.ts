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
    en: ["foot"],
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
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objGenitals: BodyPartNounData = {
    key: "Genitals",
    en: ["genitals"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHair: BodyPartNounData = {
    key: "Hair",
    en: ["hair"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHand: BodyPartNounData = {
    key: "Hand",
    en: ["hand"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHead: BodyPartNounData = {
    key: "Head",
    en: ["head"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHeart: BodyPartNounData = {
    key: "Heart",
    en: ["heart"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHeel: BodyPartNounData = {
    key: "Heel",
    en: ["heel"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objHip: BodyPartNounData = {
    key: "Hip",
    en: ["hip"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objIntestines: BodyPartNounData = {
    key: "Intestines",
    en: ["intestines"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objJoint: BodyPartNounData = {
    key: "Joint",
    en: ["joint"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objKnee: BodyPartNounData = {
    key: "Knee",
    en: ["knee"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objLeg: BodyPartNounData = {
    key: "Leg",
    en: ["leg"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objLiver: BodyPartNounData = {
    key: "Liver",
    en: ["liver"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objLung: BodyPartNounData = {
    key: "Lung",
    en: ["lung"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objMouth: BodyPartNounData = {
    key: "Mouth",
    en: ["mouth"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objMuscles: BodyPartNounData = {
    key: "Muscles",
    en: ["muscles"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objLips: BodyPartNounData = {
    key: "Lips",
    en: ["lips"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objNeck: BodyPartNounData = {
    key: "Neck",
    en: ["neck"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objNipple: BodyPartNounData = {
    key: "Nipple",
    en: ["nipple"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objNose: BodyPartNounData = {
    key: "Nose",
    en: ["nose"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objPalm: BodyPartNounData = {
    key: "Palm",
    en: ["palm"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objRibs: BodyPartNounData = {
    key: "Ribs",
    en: ["ribs"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objRib: BodyPartNounData = {
    key: "Rib",
    en: ["rib"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objShin: BodyPartNounData = {
    key: "Shin",
    en: ["shin"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objShoulder: BodyPartNounData = {
    key: "Shoulder",
    en: ["shoulder"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objSkin: BodyPartNounData = {
    key: "Skin",
    en: ["skin"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objSkull: BodyPartNounData = {
    key: "Skull",
    en: ["skull"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objSoul: BodyPartNounData = {
    key: "Soul",
    en: ["soul"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objSpine: BodyPartNounData = {
    key: "Spine",
    en: ["spine"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objStomachOrgan: BodyPartNounData = {
    key: "StomachOrgan",
    en: ["stomachorgan"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objTesticles: BodyPartNounData = {
    key: "Testicles",
    en: ["testicles"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objThigh: BodyPartNounData = {
    key: "Thigh",
    en: ["thigh"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objThroat: BodyPartNounData = {
    key: "Throat",
    en: ["throat"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  // const objThroat2: BodyPartNounData = {
  //   key: "KEY",
  //   en: ["key"],
  //   root: ["ROOTWORD"],
  //   dict: [1234123412341234],
  //   standalone: ["STANDALONE"],
  //   onNoun: [['k', 'PR'], 'ONNOUN'],
  // };
  const objThumb: BodyPartNounData = {
    key: "Thumb",
    en: ["thumb"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objToe: BodyPartNounData = {
    key: "Toe",
    en: ["toe"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objTongue: BodyPartNounData = {
    key: "Tongue",
    en: ["tongue"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objTooth: BodyPartNounData = {
    key: "Tooth",
    en: ["tooth"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "on my tooth",
        one: [["k", "PR"], "ONNOUN"],
      },
      {
        en: "on my teeth",
        one: [["k", "PR"], "ONNOUN"],
      },
      {
        en: "my tooth (in my mouth)",
        one: [["k", "PR"], "ONNOUN"],
      },
      {
        en: "my tooth (not in my mouth)",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objVein: BodyPartNounData = {
    key: "Vein",
    en: ["vein"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
      },
    ],
  };
  const objWomb: BodyPartNounData = {
    key: "Womb",
    en: ["womb"],
    dict: [1234123412341234],
    root: ["ROOTWORD"],
    standalone: ["STANDALONE"],
    onNoun: [
      {
        en: "my",
        one: [["k", "PR"], "ONNOUN"],
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
