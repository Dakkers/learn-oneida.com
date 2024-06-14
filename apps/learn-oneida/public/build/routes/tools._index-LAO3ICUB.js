import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-LU2G44XZ.js";
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tools._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tools._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tools._index.tsx"
  );
  import.meta.hot.lastModified = "1718240747023.8074";
}
var meta = () => {
  return [{
    title: "Tools"
  }, {
    name: "description",
    content: "Tools provided by this website"
  }];
};
function Tools() {
  const tools = [{
    href: "/numbers",
    label: "Number Translator"
  }, {
    href: "/paradigm",
    label: "Paradigm Tester"
  }, {
    href: "/clock",
    label: "Clock Time Translator"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Tools" }, void 0, false, {
      fileName: "app/routes/tools._index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Check out some tools:" }, void 0, false, {
      fileName: "app/routes/tools._index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: tools.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline text-blue-600", href: `/tools${t.href}`, children: t.label }, void 0, false, {
      fileName: "app/routes/tools._index.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this) }, i, false, {
      fileName: "app/routes/tools._index.tsx",
      lineNumber: 48,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/tools._index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tools._index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = Tools;
var _c;
$RefreshReg$(_c, "Tools");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tools as default,
  meta
};
//# sourceMappingURL=/build/routes/tools._index-LAO3ICUB.js.map
