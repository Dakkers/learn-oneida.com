import {
  Pronominal
} from "/build/_shared/chunk-PUNSG7EJ.js";
import {
  Letter
} from "/build/_shared/chunk-TYY7O7G2.js";
import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  $d08ef79370b62062$export$1ff3c3f08ae963c0
} from "/build/_shared/chunk-VSCVEPQN.js";
import {
  Notice
} from "/build/_shared/chunk-Z2WNLPTD.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  Bleed,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TextBreakdown,
  arrayify,
  pronouns
} from "/build/_shared/chunk-KBT2IGLR.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/data/red-pronominals.json
var red_pronominals_default = {
  i: {
    default: ["k"],
    c: [
      "k",
      {
        excp: "4",
        breakdown: [{ text: "i", type: "RPL" }, "k"]
      },
      {
        excp: "3",
        breakdown: ["ke"]
      }
    ]
  },
  u: {
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "s"]
      }
    ],
    c: [
      "s",
      {
        excp: "5",
        text: "ts"
      },
      {
        excp: "6",
        breakdown: [{ text: "i", type: "RPL" }, "t"]
      },
      {
        excp: ["3", "2"],
        breakdown: [{ text: "h", type: "RPL" }, "se"]
      }
    ],
    i: [
      "ts",
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "s"]
      }
    ]
  },
  m: {
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "l"]
      }
    ],
    c: ["la"],
    a: ["l"],
    i: [
      {
        excp: "1",
        breakdown: ["l", { text: "\u028C", type: "OP" }]
      }
    ]
  },
  f: {
    default: ["yak"],
    c: ["ye"],
    a: [
      {
        excp: "1",
        breakdown: ["y", { text: "u", type: "OP" }]
      }
    ],
    i: [
      {
        excp: "1",
        breakdown: ["y", { text: "e", type: "OP" }]
      }
    ]
  },
  it: {
    default: ["w"],
    c: ["ka"],
    i: [
      {
        excp: "1",
        breakdown: ["k", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["y"]
  },
  uni: {
    default: ["tn"],
    c: ["tni"],
    a: ["ty"]
  },
  soni: {
    default: ["yakn"],
    c: ["yakni"]
  },
  u2: {
    default: ["sn"],
    c: ["sni"],
    a: ["tsy"]
  },
  "2m": {
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "n"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "ni"]
      }
    ],
    a: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "y"]
      }
    ]
  },
  "2f": {
    default: ["kn"],
    c: ["kni"],
    a: ["ky"]
  },
  us: {
    default: ["tw"],
    c: ["twa"],
    i: [
      {
        excp: "1",
        breakdown: ["tw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["ty"]
  },
  theyni: {
    default: ["yakw"],
    c: ["yakwa"],
    i: [
      {
        excp: "1",
        breakdown: ["yakw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["yaky"]
  },
  yall: {
    default: ["sw"],
    c: ["swa"],
    i: [
      {
        excp: "1",
        breakdown: ["sw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["tsy"]
  },
  ms: {
    default: ["l\u028Cn"],
    c: ["lati"],
    a: [
      {
        excp: "1",
        breakdown: ["l", { text: "u", type: "OP" }]
      }
    ],
    i: ["lat", "l\u028Cn"]
  },
  fs: {
    default: ["kun"],
    c: ["kuti"],
    a: [
      {
        excp: "1",
        breakdown: ["k", { text: "u", type: "OP" }]
      }
    ],
    i: ["kut", "kun"]
  }
};

// app/data/blue-pronominals.json
var blue_pronominals_default = {
  i: {
    default: ["wak"],
    c: [
      "wak",
      {
        excp: "3",
        breakdown: ["wake"]
      }
    ]
  },
  u: {
    default: ["s"],
    c: ["sa"],
    i: [
      {
        excp: "1",
        breakdown: ["s", { text: "\u028C", type: "OP" }]
      }
    ]
  },
  m: {
    default: [
      {
        excp: "1",
        breakdown: ["l", { text: "o", type: "OP" }]
      }
    ],
    c: ["lo"],
    e: ["law"],
    o: ["la"]
  },
  f: {
    default: [
      {
        excp: "1",
        breakdown: ["yak", { text: "o", type: "OP" }]
      }
    ],
    c: ["yako"],
    e: ["yakaw"],
    o: ["yaka"]
  },
  it: {
    default: [
      {
        excp: "1",
        breakdown: ["y", { text: "o", type: "OP" }]
      }
    ],
    c: ["yo"],
    e: ["yaw"],
    o: ["ya"]
  },
  uni: {
    default: ["yukn"],
    c: ["yukni"],
    a: ["yuky"]
  },
  soni: {
    default: ["yukn"],
    c: ["yukni"],
    a: ["yuky"]
  },
  u2: {
    default: ["sn"],
    c: ["sni"],
    a: ["tsy"]
  },
  "2m": {
    default: ["lon"],
    c: ["loti"],
    i: ["lot"]
  },
  "2f": {
    default: ["yon"],
    c: ["yoti"],
    i: ["yot"]
  },
  us: {
    default: ["yukw"],
    c: ["yukwa"],
    i: [
      {
        excp: "1",
        breakdown: ["yukw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["yuky"]
  },
  theyni: {
    default: ["yukw"],
    c: ["yukwa"],
    i: [
      {
        excp: "1",
        breakdown: ["yukw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["yuky"]
  },
  yall: {
    default: ["sw"],
    c: ["swa"],
    i: [
      {
        excp: "1",
        breakdown: ["sw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["tsy"]
  },
  ms: {
    default: ["lon"],
    c: ["loti"],
    i: ["lot"],
    a: ["lon"]
  },
  fs: {
    default: ["yon"],
    c: ["yoti"],
    i: ["yot"],
    a: ["yon"]
  }
};

// app/data/purple-pronominals.json
var purple_pronominals_default = [
  {
    default: ["kuy"],
    label: "I \u2192 you",
    c: ["ku"],
    i: [
      {
        excp: "1",
        breakdown: ["k", { text: "u", type: "OP" }]
      }
    ]
  },
  {
    default: ["liy"],
    label: "I \u2192 him",
    c: ["li"],
    i: ["l"]
  },
  {
    default: ["khey"],
    label: ["I \u2192 her", "I \u2192 someone", "I \u2192 them"],
    c: ["khe"],
    i: [
      {
        excp: "1",
        breakdown: ["kh", { text: "e", type: "OP" }]
      }
    ]
  },
  {
    default: ["kn"],
    label: "I \u2192 you two",
    c: ["kni"],
    a: ["ky"]
  },
  {
    default: ["kw"],
    label: ["I \u2192 all of you", "They & I \u2192 you"],
    c: ["kwa"],
    i: [
      {
        excp: "1",
        breakdown: ["kw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["ky"]
  },
  {
    default: ["tak"],
    label: ["You \u2192 me (command form)"],
    c: [
      "tak",
      {
        excp: "3",
        text: "take"
      }
    ],
    a: ["takw"]
  },
  {
    default: ["sk"],
    label: ["You \u2192 me"],
    c: [
      "sk",
      {
        excp: "3",
        text: "ske"
      }
    ],
    a: ["skw"]
  },
  {
    label: ["You \u2192 him"],
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etsh"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etsh"]
      },
      {
        excp: ["2", "3"],
        breakdown: [{ text: "h", type: "RPL" }, "etshe"]
      }
    ]
  },
  {
    default: ["shey"],
    label: ["You \u2192 her", "You \u2192 someone", "You \u2192 them"],
    c: ["she"],
    i: [
      {
        excp: "1",
        breakdown: ["sh", { text: "e", type: "OP" }]
      }
    ]
  },
  {
    default: ["takw"],
    label: ["You \u2192 them & I", "All of you \u2192 me"],
    c: ["takwa"],
    i: [
      {
        excp: "1",
        breakdown: ["takw", { text: "\u028C", type: "OP" }]
      }
    ]
  },
  {
    default: ["takw"],
    label: ["All of you \u2192 me (command form)"],
    c: ["takwa"],
    i: [
      {
        excp: "1",
        breakdown: ["takw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["taky"]
  },
  {
    label: ["You and I \u2192 him"],
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etn"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etni"]
      }
    ],
    a: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "ety"]
      }
    ]
  },
  {
    label: [
      "You and I \u2192 her",
      "You all and I \u2192 her",
      "You and I \u2192 someone",
      "You all and I \u2192 someone",
      "You and I \u2192 them",
      "You all and I \u2192 them"
    ],
    default: ["yethiy"],
    c: ["yethi"],
    i: ["yeth"]
  },
  {
    label: ["You two \u2192 me (command form)"],
    default: ["takn"],
    c: ["takni"],
    a: ["taky"]
  },
  {
    label: ["You two \u2192 me"],
    default: ["skn"],
    c: ["skni"],
    a: ["sky"]
  },
  {
    label: ["You two \u2192 him", "He \u2192 you two"],
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etsn"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etsni"]
      }
    ],
    a: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etsy"]
      }
    ]
  },
  {
    label: ["You all & I \u2192 him"],
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etw"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "etwa"]
      }
    ],
    i: [
      {
        excp: ["1", "2"],
        breakdown: [
          { text: "h", type: "RPL" },
          "etw",
          { text: "\u028C", type: "OP" }
        ]
      }
    ],
    o: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "ety"]
      }
    ]
  },
  {
    default: ["skw"],
    label: ["All of you \u2192 me"],
    c: ["skwa"],
    i: [
      {
        excp: "1",
        breakdown: ["skw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["sky"]
  },
  {
    default: ["hetsw"],
    label: ["All of you \u2192 him", "He \u2192 all of you"],
    c: ["hetswa"],
    i: [
      {
        excp: "1",
        breakdown: ["hetsw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["hetsy"]
  },
  {
    default: ["lak"],
    label: ["He \u2192 me"],
    c: [
      "lak",
      {
        excp: "3",
        text: "lake"
      }
    ],
    a: ["lakw"],
    e: ["lakw"]
  },
  {
    label: ["He \u2192 you"],
    default: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "yay"]
      }
    ],
    c: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "ya"]
      }
    ],
    a: [
      {
        excp: "2",
        breakdown: [{ text: "h", type: "RPL" }, "y"]
      }
    ],
    i: [
      {
        excp: ["1", "2"],
        breakdown: [
          { text: "h", type: "RPL" },
          "y",
          { text: "\u028C", type: "OP" }
        ]
      }
    ]
  },
  {
    label: ["He \u2192 him"],
    default: [
      {
        excp: "1",
        breakdown: ["l", { text: "o", type: "OP" }]
      }
    ],
    c: ["lo"],
    e: ["law"],
    o: ["la"]
  },
  {
    label: ["He \u2192 her", "He \u2192 someone", "He \u2192 them"],
    default: [
      {
        excp: "1",
        breakdown: ["shak", { text: "o", type: "OP" }]
      }
    ],
    c: ["shako"],
    e: ["shakaw"],
    o: ["shaka"]
  },
  {
    label: ["He \u2192 you and I"],
    default: ["shukn"],
    c: ["shukni"],
    a: ["shuky"]
  },
  {
    label: ["He \u2192 you all and I"],
    default: ["shukw"],
    i: [
      {
        excp: "1",
        breakdown: ["shukw", { text: "\u028C", type: "OP" }]
      }
    ],
    c: ["shukwa"],
    o: ["shuky"]
  },
  {
    default: ["yukw"],
    label: ["She \u2192 me", "They \u2192 me"],
    c: [
      {
        excp: "1",
        breakdown: ["yuk", { text: "e", type: "OP" }]
      }
    ],
    i: ["yuk"],
    o: ["yuk"]
  },
  {
    default: ["yes"],
    label: ["She \u2192 you", "They \u2192 you"],
    c: ["yesa"],
    i: [
      {
        excp: "1",
        breakdown: ["yes", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["yesay"]
  },
  {
    default: ["luw"],
    label: ["She \u2192 him", "They \u2192 him"],
    c: ["luwa"],
    i: [
      {
        excp: "1",
        breakdown: ["luw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["luway"]
  },
  {
    default: ["yutat"],
    label: ["She \u2192 her", "They \u2192 her"],
    c: [
      "yutat",
      {
        excp: "3",
        text: "yutate"
      }
    ]
  },
  {
    default: ["kuw"],
    label: ["She \u2192 it"],
    c: ["kuwa"],
    i: [
      {
        excp: "1",
        breakdown: ["kuw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["kuway"]
  },
  {
    default: ["yetshiy"],
    label: [
      "She \u2192 you two",
      "She \u2192 all of you",
      "They \u2192 you two",
      "They \u2192 all of you",
      "You two \u2192 her",
      "You two \u2192 them",
      "All of you \u2192 her",
      "All of you \u2192 them"
    ],
    c: ["yetshi"],
    i: ["yetshi"]
  },
  {
    default: ["luwat"],
    label: ["She \u2192 them (males, mix)", "They \u2192 them (males, mix)"],
    c: ["luwati"],
    a: ["luwan"],
    o: ["luwan"]
  },
  {
    default: ["kuwat"],
    label: ["She \u2192 them (females)", "They \u2192 them (females)"],
    c: ["kuwati"],
    a: ["kuwan"],
    o: ["kuwan"]
  },
  {
    default: ["shakn"],
    label: ["Someone and I \u2192 him"],
    c: ["shakni"],
    a: ["shaky"]
  },
  {
    default: ["shakw"],
    label: ["They and I \u2192 him"],
    c: ["shakwa"],
    i: [
      {
        excp: "1",
        breakdown: ["shakw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["shaky"]
  },
  {
    default: ["yakhiy"],
    label: [
      "Someone and I \u2192 her",
      "Someone and I \u2192 them",
      "They and I \u2192 her",
      "They and I \u2192 them"
    ],
    c: ["yakhi"],
    i: ["yakh"]
  },
  {
    default: ["yukhiy"],
    label: ["They \u2192 you and I", "They \u2192 them and I"],
    c: ["yukhi"],
    i: ["yukh"]
  },
  {
    default: ["shakon"],
    label: ["They (males, mix) \u2192 her", "They (males, mix) \u2192 them"],
    c: ["shakoti"],
    i: ["shakot"]
  },
  {
    default: ["yakon"],
    label: ["They (males, mix) \u2192 her", "They (males, mix) \u2192 them"],
    c: ["yakoti"],
    i: ["yakot"]
  }
];

// app/data/lightblue-pronominals.json
var lightblue_pronominals_default = {
  i: {
    default: ["akw"],
    c: [
      "ak",
      {
        excp: "3",
        text: "ake"
      }
    ],
    i: ["ak"],
    o: ["ak"]
  },
  u: {
    default: ["s"],
    c: ["sa"],
    i: [
      {
        excp: "1",
        breakdown: ["s", { text: "\u028C", type: "OP" }]
      }
    ]
  },
  m: {
    default: [
      {
        excp: "1",
        breakdown: ["la", { text: "o", type: "OP" }]
      }
    ],
    c: ["lao"],
    e: ["law"],
    o: ["la"]
  },
  f: {
    default: [
      {
        excp: "1",
        breakdown: ["ak", { text: "o", type: "OP" }]
      }
    ],
    c: ["ako"],
    e: ["akaw"],
    o: ["ak"]
  },
  it: {
    default: [
      {
        excp: "1",
        breakdown: ["a", { text: "o", type: "OP" }]
      }
    ],
    c: ["ao"],
    e: ["aw"],
    o: ["y"]
  },
  uni: {
    default: ["ukn"],
    c: ["ukni"],
    a: ["uky"]
  },
  u2: {
    default: ["sn"],
    c: ["sni"],
    a: ["tsy"]
  },
  us: {
    default: ["ukw"],
    c: ["ukwa"],
    i: [
      {
        excp: "1",
        breakdown: ["ukw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["uky"]
  },
  yall: {
    default: ["sw"],
    c: ["swa"],
    i: [
      {
        excp: "1",
        breakdown: ["sw", { text: "\u028C", type: "OP" }]
      }
    ],
    o: ["tsy"]
  },
  ms: {
    default: ["laon"],
    c: ["laoti"],
    i: ["laon", "laot"]
  },
  fs: {
    default: ["aon"],
    c: ["aoti"],
    i: ["aon", "aot"]
  }
};

// app/components/articles/Pronominals.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Pronominals.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Pronominals.tsx"
  );
  import.meta.hot.lastModified = "1716730031924.1755";
}
function PronominalsArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "pronominals", level, children: "Pronominals" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "english-pronouns", level: level + 1, children: "English Pronouns" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "English gets by with just 21 pronouns that stand alone and are separate words:" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnglishPronounsTable, {}, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Oneida has two kinds of pronouns: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "standalone" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 70,
        columnNumber: 43
      }, this),
      " and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "bound" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 70,
        columnNumber: 65
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "standalone-pronouns", level: level + 1, children: "Standalone Pronouns" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Standalone pronouns are words you\u2018ll find that stand alone in a sentence. The standalone pronouns are:" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FreestandingPronounsSection, {}, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "bound-pronouns", level: level + 1, children: "Bound Pronouns" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Bound pronouns must be attached to a word. There are roughly 80 of these, which can be broken down into four groups:" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { ordered: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Subjective (Red)" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Objective (Blue)" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Possessive (Light Blue)" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: '"The Purples"' }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: '"The Purples" refers to a group of pronouns that do not have an English counterpart.' }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { children: [
      "From here on, we will refer to pronouns as ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "pronominals" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 100,
        columnNumber: 52
      }, this),
      ', which is an abbreviation of "pronominal prefix".'
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "red-pronominals", level: level + 1, children: "Subjective (Red) Pronominals" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      'The table below displays the full list of subjective (red) pronominals. Each column represents a different "stem", which is the first letter in a root word. For example, the root word ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "nuwehse\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 110,
        columnNumber: 59
      }, this),
      " ",
      '("to like") starts with the letter "N" which is a consonant, so we use the "C-stem" column. The root word',
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "attokha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      ' ("to be wise") starts with the letter "A", so we use the "A-stem" column.'
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      'Attaching "k" to the start of the root word ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "nuwehse\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 117,
        columnNumber: 63
      }, this),
      " ",
      "results in ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "kn\xFA\xB7wehse\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 118,
        columnNumber: 20
      }, this),
      ' which means "I like it". Attaching "l" to the start of the root word ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "attokha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 119,
        columnNumber: 63
      }, this),
      " ",
      "gives us ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "latt\xF3kha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 120,
        columnNumber: 18
      }, this),
      ' wich means "he is wise".'
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The small numbers in the table cells represent exceptions \u2014 Oneida is full of them!" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronominalsTable, { color: "red", data: red_pronominals_default }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 1" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The vowel with a squiggly underline replaces the leading vowel of the root word." }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "As an example, let\u2018s look at the A-stem column, where the root word is ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "attokha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this),
      '. The translation for "she is wise" without this replacement rule would be ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yuattokha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 137,
        columnNumber: 48
      }, this),
      ".",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "yua" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      " is not a sound in Oneida so we instead change it to",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "yu" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      ". Therefore the translation is ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yutt\xF3kha\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 139,
        columnNumber: 59
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 2" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "h" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      " is not written or pronounced when nothing is attached in front of the pronominal. However, when anything is attached to the front of the pronominal, the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "h" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 146,
        columnNumber: 45
      }, this),
      " is written and pronounced. Example: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "sn\xFA\xB7wehse\u0332\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 147,
        columnNumber: 30
      }, this),
      " and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yah tehsn\xFA\xB7wehse\u0332\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 147,
        columnNumber: 53
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 3" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The letter ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "e" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 152,
        columnNumber: 20
      }, this),
      " only appears on root words that begin with a double consonant."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { intent: "warning", children: "Examples are needed for this exception." }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 4" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "ik" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this),
      " prefix is attached to most (but not all) single syllable roots. The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "i" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 160,
        columnNumber: 29
      }, this),
      " in ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "ik" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 160,
        columnNumber: 51
      }, this),
      " is used only occasionally. The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "i" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 161,
        columnNumber: 32
      }, this),
      " disappears when anything is attached in front of the prefix. Example: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\xEDky\u028Che\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 162,
        columnNumber: 51
      }, this),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yah t\xE9\xB7ky\u028Che\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 5" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The prefix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "ts" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 168,
        columnNumber: 20
      }, this),
      " is attached to all roots beginning with",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "y" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      "and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "i" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this),
      ". The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "t" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 170,
        columnNumber: 37
      }, this),
      " disappears and is replaced by ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "h" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 171,
        columnNumber: 21
      }, this),
      " when anything is attached in front of the prefix. Example:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "tsy\u028Ctel\xED\u02CD" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      " and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yah tehsy\u028Ctel\xED\u02CD" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 173,
        columnNumber: 30
      }, this),
      "; ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "ts\xED\xB7tlu\u0332\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 173,
        columnNumber: 54
      }, this),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yah tehs\xED\xB7tlu\u0332\u0294" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "labelL", children: "Exception 6" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The prefix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "it" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 179,
        columnNumber: 20
      }, this),
      " is attached to all roots beginning with",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "hs" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      " and the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "i" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 180,
        columnNumber: 37
      }, this),
      "disappears when anything is attached in front of the prefix. Example:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\xEDthsa\u0294as" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      " and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yah teths\xE1\u0294as" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 182,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$1ff3c3f08ae963c0, {}, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "blue-pronominals", level: level + 1, children: "Objective (blue) Pronominals" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The table below displays the full list of objective (blue) pronominals." }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronominalsTable, { color: "blue", data: blue_pronominals_default }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "purple-pronominals", level: level + 1, children: "Purple Pronominals" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The table below displays the full list of purple pronominals. These do not have an English counterpart." }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronominalsTable, { color: "purple", data: purple_pronominals_default }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "lightblue-pronominals", level: level + 1, children: "Possessive (light blue) Pronominals" }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      PronominalsTable,
      {
        allowedPronouns: ["i", "u", "m", "f", "it", "uni", "u2", "us", "yall", "ms", "fs"],
        color: "lightblue",
        data: lightblue_pronominals_default
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 209,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c = PronominalsArticle;
function EnglishPronounsTable() {
  const data = [["I", "me", "my"], ["you", "you", "your"], ["he", "him", "his"], ["she", "her", "her"], ["it", "it", "its"], ["we", "us", "our"], ["they", "them", "their"]];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Subjective Set" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Objective Set" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Possessive Set" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: row[0] }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: row[1] }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: row[2] }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 229,
        columnNumber: 13
      }, this)
    ] }, i, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 226,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 217,
    columnNumber: 10
  }, this);
}
_c2 = EnglishPronounsTable;
function FreestandingPronounsSection() {
  const data = [["\xED\xB7", "I / Me"], ["is\xE9\xB7", "You"], ["n\xE9\xB7", "It"], ["laulh\xE1\xB7", "He / Him"], ["akaulh\xE1\xB7", "She / Her"], ["aulh\xE1\xB7", "It"], ["lonulh\xE1\xB7", "They / Them (males, mix of males and females)"], ["onulh\xE1\xB7", "They / Them (females)"]];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: row[0] }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 241,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: row[1] }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 242,
      columnNumber: 15
    }, this)
  ] }, i, true, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 240,
    columnNumber: 33
  }, this)) }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 239,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 238,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
}
_c3 = FreestandingPronounsSection;
function PronominalsTable({
  allowedPronouns,
  color,
  data = []
}) {
  const stems = ["c", "a", "i", "e", "o"];
  const isPurple = color === "purple";
  const rowsToUse = isPurple ? data : allowedPronouns ?? pronouns;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bleed, { mx: 32, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      !isPurple && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {}, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 261,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "EN" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 262,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "C-stem" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 263,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "A-stem" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 264,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "I-stem" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "E-stem / \u039B-stem" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "O-stem / U-stem" }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 267,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 260,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 259,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: rowsToUse.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
      !isPurple && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: PRONOUN_MAP_ONEIDA[row] }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 273,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: !isPurple ? (
        // @ts-expect-error To be addressed in LO-17
        PRONOUN_MAP_EN[row]
      ) : (
        // @ts-expect-error To be addressed in LO-17
        arrayify(row.label).map((label, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: label }, j, false, {
          fileName: "app/components/articles/Pronominals.tsx",
          lineNumber: 279,
          columnNumber: 51
        }, this))
      ) }, void 0, false, {
        fileName: "app/components/articles/Pronominals.tsx",
        lineNumber: 274,
        columnNumber: 15
      }, this),
      stems.map((stem) => {
        const datum = isPurple ? row : data[row];
        const content = datum[stem] ?? datum.default;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", children: content.map((prefixArr, i2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronominalTableText, { color, entry: prefixArr }, i2, false, {
          fileName: "app/components/articles/Pronominals.tsx",
          lineNumber: 288,
          columnNumber: 54
        }, this)) }, void 0, false, {
          fileName: "app/components/articles/Pronominals.tsx",
          lineNumber: 286,
          columnNumber: 21
        }, this) }, stem, false, {
          fileName: "app/components/articles/Pronominals.tsx",
          lineNumber: 285,
          columnNumber: 20
        }, this);
      })
    ] }, i, true, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 271,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 270,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 258,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 257,
    columnNumber: 10
  }, this);
}
_c4 = PronominalsTable;
function PronominalTableText({
  entry,
  color
}) {
  if (typeof entry === "string") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pronominal, { color, children: entry }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 303,
      columnNumber: 12
    }, this);
  }
  const typeFallback = color === "red" ? "PR" : color === "blue" ? "PB" : color === "purple" ? "PP" : color === "lightblue" ? "PLB" : void 0;
  const textContent = !entry.breakdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pronominal, { color, children: entry.text }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 306,
    columnNumber: 42
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    TextBreakdown,
    {
      breakdown: entry.breakdown.map((b) => {
        if (typeof b === "string") {
          return {
            text: b,
            type: typeFallback
          };
        }
        const type = arrayify(b.type ?? []);
        return {
          ...b,
          type: type.includes("RPL") ? type : [...type, typeFallback]
        };
      }),
      typeFallback
    },
    void 0,
    false,
    {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 306,
      columnNumber: 96
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 1, children: [
    textContent,
    !!entry.excp && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footnotes, { nums: entry.excp }, void 0, false, {
      fileName: "app/components/articles/Pronominals.tsx",
      lineNumber: 324,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 322,
    columnNumber: 10
  }, this);
}
_c5 = PronominalTableText;
function Footnotes({
  nums: _nums
}) {
  const nums = arrayify(_nums).map((n) => parseInt(n));
  nums.sort();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 1, children: nums.map((num) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("sup", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { contrast: "mid", intent: "secondary", variant: "footnote", children: num }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 335,
    columnNumber: 11
  }, this) }, num, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 334,
    columnNumber: 24
  }, this)) }, void 0, false, {
    fileName: "app/components/articles/Pronominals.tsx",
    lineNumber: 333,
    columnNumber: 10
  }, this);
}
_c6 = Footnotes;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "PronominalsArticle");
$RefreshReg$(_c2, "EnglishPronounsTable");
$RefreshReg$(_c3, "FreestandingPronounsSection");
$RefreshReg$(_c4, "PronominalsTable");
$RefreshReg$(_c5, "PronominalTableText");
$RefreshReg$(_c6, "Footnotes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PronominalsArticle
};
//# sourceMappingURL=/build/_shared/chunk-TCWJC2TC.js.map
