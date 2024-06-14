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

// app/components/articles/Nations.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Nations.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Nations.tsx"
  );
  import.meta.hot.lastModified = "1716730031922.263";
}
var allowedPronouns = ["i", "u", "m", "f"];
var NATIONS_LIST = [{
  en: "Mohawk",
  on: "Kany\u028C\u0294keha\xB7k\xE1\xB7",
  translation: "flint",
  key: "mohawk"
}, {
  en: "Oneida",
  on: "On\u028Cyo\u0294te\u0294a\xB7k\xE1\xB7",
  translation: "standing stone",
  key: "oneida"
}, {
  en: "Onondaga",
  on: "Onuta\u0294keha\xB7k\xE1\xB7",
  translation: "hills",
  key: "onondaga"
}, {
  en: "Cayuga",
  on: "Kayuke\u0294a\xB7k\xE1\xB7",
  translation: "great swamp / pipe",
  key: "cayuga"
}, {
  en: "Seneca",
  on: "Tsi\u0294twana\u0294a\xB7k\xE1\xB7",
  translation: "great hill / mountain",
  key: "seneca"
}, {
  en: "Tuscarora",
  on: "Taskal\xF3\xB7lu",
  translation: "hemp / shirt",
  key: "tuscarora"
}, {
  en: "Ojibway",
  on: "Latitwa\u0294k\xE1nha\u0294",
  translation: "(unknown)",
  key: "ojibway"
}, {
  en: "Algonquin",
  on: "Latilu\xB7t\xE1ks",
  translation: "They eat trees",
  key: "algonquin"
}, {
  en: "Cree",
  on: "Kalhakuhlon\xFA",
  translation: "People of the forest (?)",
  key: "cree"
}, {
  en: "Huron",
  on: "Thotinut\xE1the",
  translation: "They're making buttermilk",
  key: "huron"
}, {
  en: "Inuit",
  on: "Othole\u0294kehlo\xB7n\xFA",
  translation: "People of the north",
  key: "inuit"
}, {
  en: "American",
  on: "Ostohlonu\u0294keha\xB7k\xE1",
  translation: "(unknown)",
  key: "american"
}, {
  en: "French-Canadian",
  on: "Wal\xE9\xB7lu",
  translation: "(unknown)",
  key: "french-canadian"
}];
var dataNations = createParadigmData({
  phrases: [{
    breakdown: [`On\u028Cyote\u0294a\xB7k\xE1\xB7 ni`, {
      text: "wak"
    }, "uhutsy\xF3\xB7t\u028C\u0332\u0294"]
  }, {
    breakdown: [`On\u028Cyote\u0294a\xB7k\xE1\xB7 ni`, {
      text: "s"
    }, "uhutsy\xF3\xB7t\u028C\u0332\u0294"]
  }, {
    breakdown: [`On\u028Cyote\u0294a\xB7k\xE1\xB7 ni`, {
      text: "ha"
    }, "uhutsy\xF3\xB7t\u028C\u0332\u0294"]
  }, {
    breakdown: [`On\u028Cyote\u0294a\xB7k\xE1\xB7 ni`, {
      text: "yaka"
    }, "uhutsy\xF3\xB7t\u028C\u0332\u0294"]
  }],
  translation: "{{pronoun}} {{refVerb}} an Oneida",
  type: "PB"
}, allowedPronouns);
function NationsArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "nations", level, children: "Nations" }, void 0, false, {
      fileName: "app/components/articles/Nations.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Below is a list of nations and nationalities. These include nations part of the Haudenosaunee confederacy and others outside." }, void 0, false, {
      fileName: "app/components/articles/Nations.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [...TableWrapper.columnsEnglishOneida, {
      accessorKey: "translation",
      header: "Literal translation"
    }], data: NATIONS_LIST }, void 0, false, {
      fileName: "app/components/articles/Nations.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Here are a couple examples that you can use in sentences:" }, void 0, false, {
      fileName: "app/components/articles/Nations.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { allowedPronouns, data: dataNations }, void 0, false, {
      fileName: "app/components/articles/Nations.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Nations.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_c = NationsArticle;
var _c;
$RefreshReg$(_c, "NationsArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  NationsArticle
};
//# sourceMappingURL=/build/_shared/chunk-MWVREHAR.js.map
