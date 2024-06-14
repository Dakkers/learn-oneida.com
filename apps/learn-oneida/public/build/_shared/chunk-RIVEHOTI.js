import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  Link
} from "/build/_shared/chunk-IK2DEJ6J.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/TableOfContents.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TableOfContents.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TableOfContents.tsx"
  );
  import.meta.hot.lastModified = "1709498160893.9172";
}
function TableOfContents({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children }, void 0, false, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = TableOfContents;
function TableOfContentsItem({
  children,
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: `#${value}`, children: label }, void 0, false, {
      fileName: "app/components/TableOfContents.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = TableOfContentsItem;
TableOfContents.Item = TableOfContentsItem;
TableOfContents.Section = function TableOfContentsSection({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children }, void 0, false, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
};
TableOfContentsItem.Phrase = function TocItemPhrase({
  label,
  word,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContentsItem, { label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: word }, void 0, false, {
      fileName: "app/components/TableOfContents.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    " \u2014 ",
    label
  ] }, void 0, true, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 52,
    columnNumber: 38
  }, this), value }, void 0, false, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
var _c;
var _c2;
$RefreshReg$(_c, "TableOfContents");
$RefreshReg$(_c2, "TableOfContentsItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TableOfContents
};
//# sourceMappingURL=/build/_shared/chunk-RIVEHOTI.js.map
