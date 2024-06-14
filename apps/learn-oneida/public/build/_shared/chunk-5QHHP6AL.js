import {
  Letter
} from "/build/_shared/chunk-TYY7O7G2.js";
import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
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

// app/components/articles/Stress.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Stress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Stress.tsx"
  );
  import.meta.hot.lastModified = "1717069385784.7456";
}
function StressArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "stress", level, children: "Stress and Accents" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Stress is the term we use to describe the way we emphasize one part of a word when we say it aloud. An accent is the mark we place over the syllable that is being stressed / emphasized. The accent mark is always written over the vowel in the syllable being stressed. We never write accent marks over consonants. There are two kinds of stress:" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "short-stress", level: level + 1, children: "Short stress" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Short stress" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      " is indicated by an upstress mark \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: " \u0301" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      "\xA0 over the vowel being stressed. Vowels with short stress are pronounced slightly louder and with a rising tone of voice. The vowel is the same length as other vowels in the word."
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Examples:" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "k\xE1tshe\u0294" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "k\xE1khwa\u0332\u0294" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "k\xEDtkit" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "oh\u028Ct\xFA" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "ohutsyak\xFA" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "olihwiy\xF3" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "ohw\xEDsta\u0294" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "\xE1hta\u0294" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "long-stress", level: level + 1, children: "Long stress" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Long stress" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      " is indicated by an upstress mark \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: " \u0301" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      "\xA0 over the vowel followed by a middle dot",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      " or a colon ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: ":" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 67,
        columnNumber: 39
      }, this),
      ". Vowels with a long stress are pronounced slightly louder and noticeably longer than other vowels in the same word."
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Examples:" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "owi\xB7l\xE1\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "on\xFA\xB7ta" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "ola\xB7n\xE1\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "naht\xE9\xB7shu\u0294" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "keks\xE1\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "ni\u0294\xED\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "length", level: level + 1, children: "Length" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Length" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      " is indicated by a middle dot ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 85,
        columnNumber: 52
      }, this),
      " or a colon",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: ":" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      ". Vowels are noticeably longer than other vowels in the same word."
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: 'Although people from the southern U.S. use long vowels in their speech, English speakers in most of the U.S. and Canada do not. They speak using short stress on basically all their words. This contrasts with On\u028Cyote\u0294a\xB7k\xE1\xB7 which frequently uses long stress to properly say a word. This means that students will have to begin using long stress much more often. On\u028Cyote\u0294a\xB7k\xE1\xB7 spoken with only short, stressed vowels sounds "American."' }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: 'English speakers in this part of the country do use long stress, but usually for emphasis or to convey emotion. Being sarcastic they might say: "Well, excuuuuuse me." Expressing sorrow or empathy they might say: "I\u2018m sooo sorry."' }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      'Students should not stress or lengthen prefixes, roots, suffixes, particles, or whole words to convey emphasis or emotion because these are conveyed through word choice or word order. In English, speakers raise their inflection to change a statement into a question, as in: "He likes her." versus "He likes her?". On\u028Cyote\u0294a\xB7k\xE1\xB7 speakers should not raise their inflection when asking questions, as in: ',
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Shakon\xFA\xB7wehse\u0294 k\u028C\u0301 n\xE9\xB7 akaulh\xE1\xB7" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 111,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "where-stress", level: level + 1, children: "Where stress occurs" }, void 0, false, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "There are two rules regarding stress:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { ordered: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Every word that has more than one vowel / syllable has a stress (accent)." }, void 0, false, {
          fileName: "app/components/articles/Stress.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: "Only one vowel / syllable in a word can be stressed." }, void 0, false, {
          fileName: "app/components/articles/Stress.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "The most frequent placement for stress is on the second-to-last syllable of a word, for example ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "niw\xE1hs\u028C" }, void 0, false, {
        fileName: "app/components/articles/Stress.tsx",
        lineNumber: 131,
        columnNumber: 32
      }, this),
      ". However, there are many exceptions to this!"
    ] }, void 0, true, {
      fileName: "app/components/articles/Stress.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Stress.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = StressArticle;
var _c;
$RefreshReg$(_c, "StressArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StressArticle
};
//# sourceMappingURL=/build/_shared/chunk-5QHHP6AL.js.map
