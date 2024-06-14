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

// app/components/articles/Cities.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Cities.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Cities.tsx"
  );
  import.meta.hot.lastModified = "1711838251928.116";
}
var CITIES_LIST = [["Chippewa / Muncey", "Twak\u028Cnh\xE1\xB7ke\xB7"], ["London", "Kanat\xE1\xB7ke"], ["New York City", "Kanunol\xFA\xB7ke"], ["Niagara Falls", "Tsi\u0294 tetwa\u0294s\u028C\u0301tha\u0294"], ["Oneida, NY", ["Tsi\u0294tkana\u0294al\xF3hale\u0294", "Tkana\u0294lohale\u0294"]], ["Oneida, WI", "Talu\u0294kowane"], ["Ottawa", "Kanatsyohal\xE9\xB7ke\xB7"], ["Six Nations Grand River Territory", "Oshwe\xB7k\u028C\u0301"], ["St. Thomas", "Tsi\u0294 tkanat\xE1hele\u0294"], ["Strathroy", "Ohkwalihn\xE9\xB7"], ["Toronto", "Tsi\u0294 tkaluto"], ["Washington, D.C.", ["Kanatakaly\xE1hsne\u0294", "Lanatakalyashneke\u0294"]]].map(_c = ([en, on]) => ({
  en,
  on
}));
_c2 = CITIES_LIST;
function CitiesArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "cities", level, children: "Cities" }, void 0, false, {
      fileName: "app/components/articles/Cities.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Below is a list of cities. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Kanat\xE1\xB7ke" }, void 0, false, {
        fileName: "app/components/articles/Cities.tsx",
        lineNumber: 38,
        columnNumber: 36
      }, this),
      ' is the word for both "town" and "London" as it\u2018s a city near the Oneida of the Thames community.'
    ] }, void 0, true, {
      fileName: "app/components/articles/Cities.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: CITIES_LIST }, void 0, false, {
      fileName: "app/components/articles/Cities.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Cities.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c3 = CitiesArticle;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, 'CITIES_LIST$[\n  ["Chippewa / Muncey", "Twak\u028Cnh\xE1\xB7ke\xB7"],\n  ["London", "Kanat\xE1\xB7ke"],\n  ["New York City", "Kanunol\xFA\xB7ke"],\n  ["Niagara Falls", "Tsi\u0294 tetwa\u0294s\u028C\u0301tha\u0294"],\n  ["Oneida, NY", ["Tsi\u0294tkana\u0294al\xF3hale\u0294", "Tkana\u0294lohale\u0294"]],\n  ["Oneida, WI", "Talu\u0294kowane"],\n  ["Ottawa", "Kanatsyohal\xE9\xB7ke\xB7"],\n  ["Six Nations Grand River Territory", "Oshwe\xB7k\u028C\u0301"],\n  ["St. Thomas", "Tsi\u0294 tkanat\xE1hele\u0294"],\n  ["Strathroy", "Ohkwalihn\xE9\xB7"],\n  ["Toronto", "Tsi\u0294 tkaluto"],\n  ["Washington, D.C.", ["Kanatakaly\xE1hsne\u0294", "Lanatakalyashneke\u0294"]],\n].map');
$RefreshReg$(_c2, "CITIES_LIST");
$RefreshReg$(_c3, "CitiesArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CitiesArticle
};
//# sourceMappingURL=/build/_shared/chunk-ZPJW3X2W.js.map
