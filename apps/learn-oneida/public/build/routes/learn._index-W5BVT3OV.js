import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import "/build/_shared/chunk-T7AJFEZW.js";
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

// app/routes/learn._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/learn._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/learn._index.tsx"
  );
  import.meta.hot.lastModified = "1716333633623.789";
}
var meta = () => {
  return [{
    title: "Learn"
  }, {
    name: "description",
    content: "Learn using a structured curriculum"
  }];
};
function Learn() {
  const modules = [1, 2, 3, 4, 5, 6];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Learn" }, void 0, false, {
      fileName: "app/routes/learn._index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Start learning from the curriculum:" }, void 0, false, {
      fileName: "app/routes/learn._index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: modules.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline text-blue-600", href: `/learn/module${m.toString().padStart(2, "0")}`, children: [
      "Module ",
      m
    ] }, void 0, true, {
      fileName: "app/routes/learn._index.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, m, false, {
      fileName: "app/routes/learn._index.tsx",
      lineNumber: 39,
      columnNumber: 27
    }, this)) }, void 0, false, {
      fileName: "app/routes/learn._index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/learn._index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = Learn;
var _c;
$RefreshReg$(_c, "Learn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Learn as default,
  meta
};
//# sourceMappingURL=/build/routes/learn._index-W5BVT3OV.js.map
