import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "/build/_shared/chunk-WQWVDU7L.js";
import {
  TranslationExercisesSection
} from "/build/_shared/chunk-IRURW2ZL.js";
import {
  TableOfContents
} from "/build/_shared/chunk-RIVEHOTI.js";
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
  Box
} from "/build/_shared/chunk-F6GD7EN2.js";
import {
  createModule6VerbList
} from "/build/_shared/chunk-U2VTXW4J.js";
import {
  Link
} from "/build/_shared/chunk-IK2DEJ6J.js";
import {
  ParadigmTable
} from "/build/_shared/chunk-T36NX3RM.js";
import "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-VSCVEPQN.js";
import "/build/_shared/chunk-5ZKYN6D5.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import {
  Notice
} from "/build/_shared/chunk-Z2WNLPTD.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-YUHBZFFF.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-SB6J2XPB.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper,
  TextArray
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  Bleed,
  TextBreakdown,
  pronouns
} from "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/learn.module06.tsx
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/learn.module06.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/learn.module06.tsx"
  );
  import.meta.hot.lastModified = "1718240764415.6802";
}
var TENSE_LIST = ["cmd", "hab", "pfv", "def", "ifut", "fut"];
var tenseMap = {
  cmd: "Command",
  def: "Definite",
  fut: "Future",
  hab: "Habitual",
  ifut: "Indefinite",
  pfv: "Perfective"
};
var tenseBreakdownMap = {
  cmd: ["tsi\u0294 ", ["n", "PTV"], ["a", "IFUT"], ["hs"], "\xE1tyel"],
  def: [["n", "PTV"], ["a\u0294", "DEF"], ["k"], "\xE1tyele\u0332\u0294"],
  fut: [["n", "PTV"], ["\u028C", "FUT"], ["k"], "\xE1tyele\u0332\u0294"],
  hab: ["tsi\u0294 ", ["ni", "PTV"], ["k"], "aty\xE9lha\u0294"],
  ifut: [["n", "PTV"], ["a", "IFUT"], ["k"], "\xE1tyele\u0332\u0294"],
  pfv: [["ni", "PTV"], ["wak", "PB"], "\xE1tyele\u0332\u0294"]
};
var columnVisibility = {
  pronounEnglish: false,
  pronounOneida: false
};
var verbsWithParadigms = [{
  key: "answer",
  prefix: "t/te",
  root: "-lihwa\u0294slakw",
  stem: "C"
}, {
  key: "beginToDoSomething",
  prefix: "t",
  root: "t-...-atahsawh",
  stem: "A"
}, {
  key: "cook",
  root: "-khuni",
  stem: "CC"
}, {
  key: "doSomething",
  prefix: "ni",
  root: "ni-...-atyel",
  stem: "A"
}, {
  key: "getSelfUp",
  root: "-atkekskw",
  stem: "A"
}, {
  key: "saySomething",
  root: "atu",
  stem: "irregular"
}, {
  key: "goToSleep",
  colour: "blue",
  root: "ita",
  stem: "I"
}, {
  key: "getTired",
  prefix: "te",
  root: "te-...-hwish\u028Cheyu",
  stem: "C"
}, {
  key: "work",
  colour: "blue",
  root: "-yo\u0294t\u028C-",
  stem: "C"
}];
var meta = () => {
  return [{
    title: "Module 6"
  }, {
    name: "description",
    content: "Module 6 of the Oneida curriculum"
  }];
};
function LearnModule06() {
  const list = createModule6VerbList();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Module 6" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { py: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { intent: "warning", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "NOTE:" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      " This page is still under construction!"
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Introduction", value: "intro" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Oneida Terms for Tenses", value: "oneida-terms-for-tenses" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "How Active Verbs Are Constructed", value: "how-its-constructed" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Active Verb Examples", value: "examples" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Daily Activities", value: "daily-activities", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Section, { children: createModule6VerbList().map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: v.en, value: import_lodash.default.kebabCase(v.key) }, v.key, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 132,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Paradigms for Select Active Verbs", value: "paradigms", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Section, { children: verbsWithParadigms.map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: v.root, value: formatVerbParadigmSectionId(list.find((v2) => v2.key === v.key)) }, v.key, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 138,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents.Item, { label: "Translation exercises", value: "translation-exercises" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StativeVsActiveSection, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OneidaTermsForTenses, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HowConstructedSection, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExamplesSection, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DailyActivitiesSection, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerbsParadigmsSection, {}, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TranslationExercisesSection, { group: "module06" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_c = LearnModule06;
function StativeVsActiveSection() {
  const cookVerbDatum = createModule6VerbList().find((v) => v.key === "cook");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "intro", level: 2, children: "Introduction" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/learn/module05", children: "Module 5" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      " covered",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "stative verbs" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      " which describe the",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "state or condition of someone or something" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      ". They have 5 possible tenses:"
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        ...TableWrapper.englishColumn,
        accessorKey: "tense"
      },
      // @ts-expect-error LO-12
      TableWrapper.createTextBreakdownColumn("PB"),
      TableWrapper.englishColumn
    ], data: [{
      tense: "Present",
      en: "I am lucky",
      breakdown: [["wak"], "atla\u0294swiy\xF3"]
    }, {
      tense: "Past",
      en: "I was lucky",
      breakdown: [["wak"], "atla\u0294swiyo\xB7", ["hn\xE9\xB7", "PAST"]]
    }, {
      tense: "Future",
      en: "I will be lucky",
      breakdown: [["\u028C", "FUT"], ["wak"], "atla\u0294swiy\xF3", ["hake\u0294", "FUT"]]
    }, {
      tense: "Conditional (Indefinite Future)",
      en: "I might be lucky",
      breakdown: [["a", "IFUT"], ["\xB7ukw"], "atla\u0294swiy\xF3", ["hake\u0294", "IFUT"]]
    }, {
      tense: "Command",
      en: "Be lucky!",
      breakdown: [["s"], "atla\u0294swiy\xF3", ["hak", "FUT"]]
    }] }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The verbs in module 6 are ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "active verbs" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 199,
        columnNumber: 35
      }, this),
      " which decribe",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "actions, events, or activities" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      ". They have as many as 14 possible forms. The 11 that will be covered by this curriculum are the following:"
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        ...TableWrapper.englishColumn,
        accessorKey: "tense"
      },
      // @ts-expect-error LO-12
      TableWrapper.createTextBreakdownColumn("PR"),
      TableWrapper.englishColumn
    ], data: [{
      tense: "Habitual",
      en: "I cook",
      breakdown: cookVerbDatum.hab.phrases[0].breakdown
    }, {
      tense: "Habitual Past",
      en: "I used to cook",
      breakdown: [["ke"], "khu\xB7n\xED", ["hahkwe\u0294", "PAST"]]
    }, {
      tense: "Habitual Future",
      en: "I will keep on cooking",
      breakdown: [["\u028C", "FUT"], ["ke"], "khu\xB7n\xED", ["heke\u0294", "FUT"]]
    }, {
      tense: "Definite Past",
      en: "I cooked",
      breakdown: cookVerbDatum.def.phrases[0].breakdown
    }, {
      tense: "Indefinite Future",
      en: "I might cook",
      breakdown: cookVerbDatum.ifut.phrases[0].breakdown
    }, {
      tense: "Definite Future",
      en: "I will cook",
      breakdown: cookVerbDatum.fut.phrases[0].breakdown
    }, {
      tense: "Perfective",
      en: "I have cooked",
      breakdown: [["wake", "PB"], "khun\xED"]
    }, {
      tense: "Progressive",
      en: "I am going along cooking",
      breakdown: [["wake", "PB"], "khuni", ["h\xE1ti", "PAST"]]
    }, {
      tense: "Perfective Past",
      en: "I had cooked",
      breakdown: [["wake", "PB"], "khuni\xB7", ["hn\xE9\xB7", "PAST"]]
    }, {
      tense: "Perfective Indefinite",
      en: "I should have cooked",
      breakdown: [["a", "IFUT"], ["\xB7uk", "PB"], "khuni\xB7", ["ke\u0294", "PAST"]]
    }, {
      tense: "Command",
      en: "Cook!",
      breakdown: cookVerbDatum.cmd.phrases[0].breakdown
    }] }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "This module will cover these 6:" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 255,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Habitual" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Definite Past" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Indefinite Future" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Definite Future" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Perfective" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Command" }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 257,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { children: "If you are confused by the differences between these tenses, that is okay! While some of the tenses may look redundant, they are used in different contexts. This will be demonstrated later." }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 159,
    columnNumber: 10
  }, this);
}
_c2 = StativeVsActiveSection;
function OneidaTermsForTenses() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "oneida-terms-for-tenses", level: 2, children: "Oneida Terms for Tenses" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "At this point in the program\u2018s lectures, more Oneida should be incorporated to create a more immersive classroom. Below shows the Oneida terms to describe the different tenses." }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 280,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 3, children: "It is happening" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        ...TableWrapper.englishColumn,
        accessorKey: "tense"
      },
      // @ts-expect-error LO-12
      TableWrapper.createTextBreakdownColumn("PB"),
      TableWrapper.englishColumn
    ], data: [{
      breakdown: ["th\xF3 ni", ["ya\xB7w"], "\u028C\u0301\xB7se\u0294"],
      en: ["That is what happens", "It's the way it happens"],
      tense: "Habitual"
    }, {
      breakdown: ["th\xF3 n", ["a\u0294", "DEF"], ["a\xB7w"], "\u028C\u0301", ["ne\u0294", "DEF"]],
      en: "That happened",
      tense: "Definite"
    }, {
      breakdown: ["th\xF3 n", ["a", "IFUT"], ["ya\xB7w"], "\u028C\u0301", ["ne\u0294", "IFUT"]],
      en: "That would happen",
      tense: "Indefinite"
    }, {
      breakdown: ["th\xF3 n", ["\u028C", "FUT"], ["ya\xB7w"], "\u028C\u0301", ["ne\u0294", "FUT"]],
      en: "That will happen",
      tense: "Future"
    }, {
      breakdown: ["th\xF3 ni", ["yaw"], "\u028C\u0301\xB7", ["u", "PAST"]],
      en: "That has happened",
      tense: "Perfective"
    }, {
      breakdown: ["th\xF3 ni", ["yaw"], "\u028C\u0294u", ["h\xE1ti", "DEF"]],
      en: "That is happening now",
      tense: ["Progressive", "Stative"]
    }, {
      breakdown: ["th\xF3 ni\u0294y", ["a\xB7w"], "\u028C\u0301n"],
      en: "Let it happen",
      tense: "Command"
    }] }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 3, children: "That is what I am doing" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        ...TableWrapper.englishColumn,
        accessorKey: "tense"
      },
      // @ts-expect-error LO-12
      TableWrapper.createTextBreakdownColumn("PR"),
      TableWrapper.englishColumn
    ], data: [{
      breakdown: ["th\xF3 ni", ["k"], "aty\xE9lha\u0294"],
      en: ["That is what I do", "That is what I am doing now"],
      tense: ["Habitual", "Stative"]
    }, {
      breakdown: ["th\xF3 n", ["a\u0294", "DEF"], ["k"], "\xE1tyele\u0294"],
      en: "That is what I did",
      tense: "Definite Past"
    }, {
      breakdown: ["th\xF3 n", ["a", "IFUT"], ["k"], "\xE1tyele\u0294"],
      en: "That is what I would do",
      tense: "Indefinite Future"
    }, {
      breakdown: ["th\xF3 n", ["\u028C", "FUT"], ["k"], "\xE1tyele\u0294"],
      en: "That is what I will do",
      tense: "Definite Future"
    }, {
      breakdown: ["th\xF3 ni", ["wak", "PB"], "atyel", ["\u028C\u0301", "PFV"]],
      en: ["That is what I have done", "That is what I'm doing right now"],
      tense: "Perfective"
    }, {
      breakdown: ["th\xF3 ni", ["wak", "PB"], "atyel\u028Ch\xE1ti\u0294"],
      en: "That is what I am going along doing right now",
      tense: ["Progressive", "Stative"]
    }, {
      breakdown: ["th\xF3 n", ["a", "IFUT"], ["hs"], "\xE1tyel"],
      en: "Do that!",
      tense: "Command"
    }] }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 325,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 275,
    columnNumber: 10
  }, this);
}
_c3 = OneidaTermsForTenses;
function HowConstructedSection() {
  const data = [{
    key: "cmd"
  }, {
    key: "hab",
    ending: "habitual"
  }, {
    key: "def",
    ending: "punctual",
    prepronominal: ["wa\u0294", "wa", "we"]
  }, {
    key: "ifut",
    ending: "punctual",
    prepronominal: ["a", "ae"]
  }, {
    key: "fut",
    ending: "punctual",
    prepronominal: ["\u028C"]
  }, {
    key: "pfv",
    ending: "perfective",
    colors: ["blue", "purple"]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "how-its-constructed", level: 2, children: "How Active Verbs Are Constructed" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 386,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
      accessorKey: "key",
      // @ts-expect-error To be addressed
      cell: (key, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: [
        tenseMap[key],
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: tenseBreakdownMap[row.key], typeFallback: "PR" }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 395,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 393,
        columnNumber: 27
      }, this),
      header: "Tense"
    }, {
      accessorKey: "prepronominal",
      // @ts-expect-error To be addressed
      cell: (prepronominal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: prepronominal ?? [] }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 401,
        columnNumber: 30
      }, this),
      header: "Prepronominal"
    }, {
      accessorKey: "colors",
      // @ts-expect-error To be addressed
      cell: (colors) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: (colors ?? ["red", "blue", "purple"]).map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pronominal, { color: name, children: name }, name, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 407,
        columnNumber: 68
      }, this)) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 406,
        columnNumber: 23
      }, this),
      header: "Colours"
    }, {
      accessorKey: "root",
      cell: () => "root",
      header: ""
    }, {
      accessorKey: "ending",
      // @ts-expect-error To be addressed
      cell: (ending) => ending ? `${ending} ending` : "",
      header: "Ending"
    }], data }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 390,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Examples of habitual, punctual, and perfective endings can be found on page 20 of the Oneida-English dictionary." }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 423,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 385,
    columnNumber: 10
  }, this);
}
_c4 = HowConstructedSection;
function ExamplesSection() {
  const cookVerbDatum = createModule6VerbList().find((v) => v.key === "cook");
  const data = [{
    key: "cmd",
    tense: "Command",
    en: "Cook!",
    breakdown: cookVerbDatum.cmd.phrases[0].breakdown,
    negation: ["T\xE1k\u028C\u0294 ", ["\u028C", "FUT"], ["se"], "khuni"],
    negationEn: "Don't cook!",
    desc: ["Used to tell someone to do something right now."]
  }, {
    key: "hab",
    tense: "Habitual",
    en: "I cook",
    breakdown: cookVerbDatum.hab.phrases[0].breakdown,
    negation: ["Y\xE1h te\u0294", ["ke"], "khu\xB7n\xEDhe\u0294"],
    negationEn: "I do not cook",
    desc: ["Describes events that happen regularly, whether once an hour or once a year. There is an expectation that the event will occur again.", 'Describes "what people do" or "what they are."', "Sometimes describes actions that are happening right now."]
  }, {
    key: "def",
    tense: "Definite Past",
    en: "I cooked",
    breakdown: cookVerbDatum.def.phrases[0].breakdown,
    negation: ["Y\xE1h te\u0294", ["wake", "PB"], "khu\xB7n\xED\xB7"],
    negationEn: "I did not cook",
    desc: ["Describes a completed event (verbs that end in -ed in English)", "Describes an event in which someone is en route or going to do something"]
  }, {
    key: "ifut",
    tense: "Indefinite Future",
    en: "I might cook",
    breakdown: cookVerbDatum.ifut.phrases[0].breakdown,
    negation: ["Y\xE1h th", ["a", "IFUT"], ["ke"], "khu\xB7n\xED\xB7"],
    negationEn: "I will not cook",
    desc: ["Describes an event that might or could happen in the future", "Describes an event that might or could have happened in the past"]
  }, {
    key: "fut",
    tense: "Definite Future",
    en: "I will cook",
    breakdown: cookVerbDatum.fut.phrases[0].breakdown,
    negation: ["Y\xE1h th", ["a", "IFUT"], ["ke"], "khu\xB7n\xED\xB7"],
    negationEn: "I might not cook",
    desc: ["Describes an event that likely will occur in the future"]
  }, {
    key: "pfv",
    tense: "Perfective",
    en: "I have cooked",
    negation: ["Y\xE1h te\u0294", ["wake", "PB"], "khu\xB7n\xED\xB7"],
    negationEn: "I have not cooked",
    desc: ["Describes one (or many) events that have been completed, either recently or long ago", "Describes a change that has occurred", "Describes an event that is happening right now"]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "examples", level: 2, children: "Active Verb Examples" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 481,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Below is a table with each of the six tenses we\u2018re looking at, their negations, and descriptions as to how they\u2018re used." }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 485,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
      accessorKey: "key",
      // @ts-expect-error To be addressed
      cell: (key, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "underline", children: tenseMap[key] }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 494,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: tenseBreakdownMap[key], typeFallback: "PR", wrap: "nowrap" }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 495,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 496,
          columnNumber: 17
        }, this),
        row.en
      ] }, void 0, true, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 493,
        columnNumber: 27
      }, this),
      header: "Tense"
    }, {
      accessorKey: "desc",
      // @ts-expect-error To be addressed
      cell: (desc) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: desc }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 504,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 503,
        columnNumber: 21
      }, this),
      header: "Description"
    }, {
      accessorKey: "negation",
      // @ts-expect-error To be addressed
      cell: (negation, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: negation, typeFallback: "PR", wrap: "nowrap" }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 511,
          columnNumber: 17
        }, this),
        row.negationEn
      ] }, void 0, true, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 510,
        columnNumber: 32
      }, this),
      header: "Negation"
    }], data }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 490,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "There are two things to note here:" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 517,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { ordered: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: 'The "Indefinite Future" and "Future" negations are the same, just like in previous modules' }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 519,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: 'The "Perfective" and "Definite" negations are the same, and use blue pronominals (the Perfective form)' }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 523,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 518,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 480,
    columnNumber: 10
  }, this);
}
_c5 = ExamplesSection;
function DailyActivitiesSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "daily-activities", level: 2, children: "Daily Activities" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 533,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bleed, { mx: {
      xs: 0,
      md: 16,
      lg: 32
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, { type: "multiple", children: createModule6VerbList().map((v) => {
      const data = TENSE_LIST.filter((tense) => !!v[tense]).map((tense) => ({
        colour: v[tense].type,
        tense,
        text: (tense === "cmd" ? v[tense].phrases.find((p) => p.pronoun === "u") : v[tense].phrases.find((p) => p.pronoun === "i") ?? v[tense].phrases.find((p) => p.pronoun === "it")).breakdown
      }));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { id: import_lodash.default.kebabCase(v.key), value: v.key, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { children: v.en }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 550,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { children: [
          v.exceptions?.includes(1) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: 'This uses the "it" pronominals.' }, void 0, false, {
            fileName: "app/routes/learn.module06.tsx",
            lineNumber: 552,
            columnNumber: 48
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { bleed: 0, columns: [{
            accessorKey: "tense",
            // @ts-expect-error To be fixed in LO-12
            cell: (value) => tenseMap[value],
            header: "Tense"
          }, {
            accessorKey: "text",
            // @ts-expect-error To be fixed in LO-12
            cell: (value, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback: row.colour }, void 0, false, {
              fileName: "app/routes/learn.module06.tsx",
              lineNumber: 562,
              columnNumber: 39
            }, this),
            header: ""
          }], data }, void 0, false, {
            fileName: "app/routes/learn.module06.tsx",
            lineNumber: 554,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 551,
          columnNumber: 17
        }, this)
      ] }, v.key, true, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 549,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 542,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 537,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 532,
    columnNumber: 10
  }, this);
}
_c6 = DailyActivitiesSection;
function VerbsParadigmsSection() {
  const list = createModule6VerbList();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "paradigms", level: 2, children: "Paradigms for Select Active Verbs" }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 576,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "This section covers paradigms for a select number of verbs from the previous section." }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 580,
      columnNumber: 7
    }, this),
    verbsWithParadigms.map((datum) => /* @__PURE__ */ (0, import_react.createElement)(VerbParadigms, { ...datum, key: datum.key, verbDatum: list.find((v) => v.key === datum.key) }))
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 575,
    columnNumber: 10
  }, this);
}
_c7 = VerbsParadigmsSection;
function VerbParadigms({
  colour,
  prefix,
  root,
  stem,
  verbDatum
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: formatVerbParadigmSectionId(verbDatum), level: 3, children: [
      root,
      " \u2014 ",
      verbDatum.en
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 597,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: stem === "irregular" ? "This word is irregular, and its conjugations depend on context." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "This word has ",
      stem.includes("C") ? "a" : "an",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pronominal, { color: colour || "r", children: stem }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 604,
        columnNumber: 13
      }, this),
      " stem",
      prefix && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        " ",
        "with a ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: prefix }, void 0, false, {
          fileName: "app/routes/learn.module06.tsx",
          lineNumber: 607,
          columnNumber: 24
        }, this),
        " prefix"
      ] }, void 0, true, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 605,
        columnNumber: 24
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 602,
      columnNumber: 101
    }, this) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 601,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bleed, { mx: {
      xs: 0,
      md: 16,
      lg: 32
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, { type: "multiple", children: TENSE_LIST.map((tense) => verbDatum[tense] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { value: tense, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { children: tenseMap[tense] }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 620,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { bleed: 0, columnVisibility, data: verbDatum[tense], allowedPronouns: verbDatum.pronouns ?? pronouns }, tense, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 622,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/learn.module06.tsx",
        lineNumber: 621,
        columnNumber: 17
      }, this)
    ] }, tense, true, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 619,
      columnNumber: 55
    }, this) : null) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 618,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/learn.module06.tsx",
      lineNumber: 613,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn.module06.tsx",
    lineNumber: 596,
    columnNumber: 10
  }, this);
}
_c8 = VerbParadigms;
var formatVerbParadigmSectionId = (verbDatum) => `paradigm-${import_lodash.default.kebabCase(verbDatum.key)}`;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "LearnModule06");
$RefreshReg$(_c2, "StativeVsActiveSection");
$RefreshReg$(_c3, "OneidaTermsForTenses");
$RefreshReg$(_c4, "HowConstructedSection");
$RefreshReg$(_c5, "ExamplesSection");
$RefreshReg$(_c6, "DailyActivitiesSection");
$RefreshReg$(_c7, "VerbsParadigmsSection");
$RefreshReg$(_c8, "VerbParadigms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LearnModule06 as default,
  meta
};
//# sourceMappingURL=/build/routes/learn.module06-KBVDXJ6M.js.map
