import {
  ParadigmTable,
  createParadigmData
} from "/build/_shared/chunk-T36NX3RM.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
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

// app/components/articles/Clans.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Clans.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Clans.tsx"
  );
  import.meta.hot.lastModified = "1711838251927.936";
}
var allowedPronouns = ["i", "u", "m", "f", "uni", "u2", "us", "yall", "ms", "fs"];
var dataTurtles = magicThing({
  phrases: createPhrasesLol("a\u0294n\xF3\xB7w\xE1l"),
  translation: "{{pronoun}} {{refVerb}} Turtle Clan"
});
var dataBears = magicThing({
  phrases: createPhrasesLol("ohkwa\xB7l\xED"),
  translation: "{{pronoun}} {{refVerb}} Bear Clan"
});
var dataWolves = magicThing({
  phrases: createPhrasesLol("othayu\xB7n\xED"),
  translation: "{{pronoun}} {{refVerb}} Wolf Clan"
});
function ClansArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "clans", level, children: "Clans" }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Here, you can learn about clan animals and how to say someone is from a clan. The clans in Oneida are: bear, turtle, and wolf." }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: level + 1, children: "Clan Animals" }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: [["bear", "ohkwa\xB7l\xED\u02CD"], ["beaver", "tsyon\xED\xB7tu\u0294"], ["deer", "osk\u028Cnu\xB7t\xFA\xB7"], ["eel", "tawel\xFA\xB7ko"], ["hawk", "kalhak\xFAha\u0332"], ["heron", "oh\xE1\xB7kwalut"], ["snipe", "taw\xEDstawi\u0294"], ["turtle", "a\u0294no\xB7w\xE1l"], ["wolf", "othayu\xB7n\xED\u02CD"]].map(([en, on]) => ({
      en,
      on
    })) }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: level + 1, children: "Phrases" }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { allowedPronouns, data: dataBears }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { allowedPronouns, data: dataTurtles }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { allowedPronouns, data: dataWolves }, void 0, false, {
      fileName: "app/components/articles/Clans.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Clans.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c = ClansArticle;
function createPhrasesLol(animal) {
  return [{
    breakdown: [`${animal} ni`, {
      text: "waki"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "s\u028C"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "ho"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "yako"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "yukni"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "sni"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "yukw\u028C"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "sw\u028C"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "hoti"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }, {
    breakdown: [`${animal} ni`, {
      text: "yoti"
    }, "\u0294tal\xF3\xB7t\u028C\u0294"]
  }];
}
function magicThing(data) {
  const result = createParadigmData(data, allowedPronouns);
  result.type = "PB";
  return result;
}
var _c;
$RefreshReg$(_c, "ClansArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ClansArticle
};
//# sourceMappingURL=/build/_shared/chunk-5S4ZOOM4.js.map
