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

// app/components/articles/CardinalDirections.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/CardinalDirections.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/CardinalDirections.tsx"
  );
  import.meta.hot.lastModified = "1711838251928.2803";
}
var DATA_CARDINAL_DIRECTIONS = [{
  en: "In the North",
  on: "othol\xE9\xB7ke",
  key: "north"
}, {
  en: "In the East",
  on: "tsi\u0294 tkak\xE9\xB7tohse\u0332\u0294",
  key: "east"
}, {
  en: "In the South",
  on: ["\u028C\u0301ty\u028C", "\u028Ct\xED nukw\xE1\xB7"],
  key: "south"
}, {
  en: "In the West",
  on: "tsi\u0294 tetwatsh\u028C\u0301thos",
  key: "west"
}];
function CardinalDirectionsArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "cardinal-directions", level, children: "Cardinal Directions" }, void 0, false, {
      fileName: "app/components/articles/CardinalDirections.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: DATA_CARDINAL_DIRECTIONS }, void 0, false, {
      fileName: "app/components/articles/CardinalDirections.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/CardinalDirections.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c = CardinalDirectionsArticle;
var _c;
$RefreshReg$(_c, "CardinalDirectionsArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DATA_CARDINAL_DIRECTIONS,
  CardinalDirectionsArticle
};
//# sourceMappingURL=/build/_shared/chunk-3H7SPMCN.js.map
