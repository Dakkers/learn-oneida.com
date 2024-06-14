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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/articles/EnglishNames.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/EnglishNames.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/EnglishNames.tsx"
  );
  import.meta.hot.lastModified = "1711838251926.8164";
}
var names = [{
  on: "Al\u028Ct",
  en: "Aaron"
}, {
  on: "\xC1\xB7kwilut",
  en: "Abraham"
}, {
  on: "Tsi\u0294tw\u028Clu",
  en: "Albert"
}, {
  on: "Tshyal\xE9",
  en: "Charlie"
}, {
  on: "T\xE1\xB7wet",
  en: "David"
}, {
  on: "Tys\xE1ts",
  en: "George"
}, {
  on: "Tsh\xE9le",
  en: "Jerry"
}, {
  on: "Sawat\xEDs",
  en: "John"
}, {
  on: "K\xE9nniha",
  en: "Kenny"
}, {
  on: "Mathyu",
  en: "Matthew"
}, {
  on: "Niklas",
  en: "Nicholas"
}, {
  on: "Kw\xEDtel",
  en: "Peter"
}, {
  on: "Litsyet",
  en: "Richard"
}, {
  on: "Tu\xB7w\xEDs",
  en: "Thomas"
}, {
  on: "W\xEDlo",
  en: "William"
}, {
  on: "Klist\xED\xB7n",
  en: ["Christine", "Kristin"]
}, {
  on: "Tsil\xF3\xB7s",
  en: "Delores"
}, {
  on: ["Aliskwe", "Al\xEDsakwe"],
  en: "Elizabeth"
}, {
  on: "Katl\xED\xB7n",
  en: "Katherine"
}, {
  on: ["Kw\xE1klit", "Kow\xE1klit"],
  en: "Margret"
}, {
  on: "Mahtih",
  en: "Martha"
}, {
  on: "W\xE1\xB7li",
  en: "Mary"
}, {
  on: "N\xED\xB7ki",
  en: ["Nellie", "Amelia"]
}, {
  on: "L\xE1\xB7kel",
  en: "Rachel"
}, {
  on: "S\xE1\xB7l",
  en: "Sara"
}, {
  on: "S\xF3\xB7s",
  en: "Susan"
}];
function EnglishNamesArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "english-names", level, children: "English Names" }, void 0, false, {
      fileName: "app/components/articles/EnglishNames.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: names }, void 0, false, {
      fileName: "app/components/articles/EnglishNames.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/EnglishNames.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_c = EnglishNamesArticle;
var _c;
$RefreshReg$(_c, "EnglishNamesArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  EnglishNamesArticle
};
//# sourceMappingURL=/build/_shared/chunk-6P7VUOZ3.js.map
