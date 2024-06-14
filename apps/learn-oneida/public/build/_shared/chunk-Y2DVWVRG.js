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

// app/components/articles/Countries.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Countries.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Countries.tsx"
  );
  import.meta.hot.lastModified = "1711838251927.2507";
}
var LIST = [["Canada", "Kolahkow\xE1nhne\u0332"], ["United States of America", "Ost\u028Chlon\xFA\xB7ke"], ["Europe", "Ohutsyakay\xFA\xB7ke\u0332"], ["China, Japan, Korea", "Tehatikahlat\xED\xB7lut\xE9\xB7ke"], ["North America (Turtle Island)", "Anowal\xE9\xB7ke"], ["The whole world", "Ohutsyakwek\xFA"]].map(_c = ([en, on]) => ({
  en,
  on
}));
_c2 = LIST;
function CountriesArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "countries", level, children: "Countries" }, void 0, false, {
      fileName: "app/components/articles/Countries.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Some continents and other words are also included." }, void 0, false, {
      fileName: "app/components/articles/Countries.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: LIST }, void 0, false, {
      fileName: "app/components/articles/Countries.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Countries.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c3 = CountriesArticle;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, 'LIST$[\n  ["Canada", "Kolahkow\xE1nhne\u0332"],\n  ["United States of America", "Ost\u028Chlon\xFA\xB7ke"],\n  ["Europe", "Ohutsyakay\xFA\xB7ke\u0332"],\n  ["China, Japan, Korea", "Tehatikahlat\xED\xB7lut\xE9\xB7ke"],\n  ["North America (Turtle Island)", "Anowal\xE9\xB7ke"],\n  ["The whole world", "Ohutsyakwek\xFA"],\n].map');
$RefreshReg$(_c2, "LIST");
$RefreshReg$(_c3, "CountriesArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CountriesArticle
};
//# sourceMappingURL=/build/_shared/chunk-Y2DVWVRG.js.map
