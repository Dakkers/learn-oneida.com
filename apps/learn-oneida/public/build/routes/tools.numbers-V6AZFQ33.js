import {
  translateNumber
} from "/build/_shared/chunk-CLFJRGXB.js";
import {
  Separator
} from "/build/_shared/chunk-DQR6F5KU.js";
import {
  Input
} from "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import {
  Heading
} from "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tools.numbers.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tools.numbers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tools.numbers.tsx"
  );
  import.meta.hot.lastModified = "1707278007000";
}
var meta = () => {
  return [{
    title: "Numbers"
  }, {
    name: "description",
    content: "Translate numbers from Oneida to English and vice versa"
  }];
};
function ToolsNumbers() {
  _s();
  const [value, setValue] = import_react.default.useState("");
  const [translatedValue, setTranslatedValue] = import_react.default.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Numbers" }, void 0, false, {
      fileName: "app/routes/tools.numbers.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-8 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "NOTE:" }, void 0, false, {
        fileName: "app/routes/tools.numbers.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      " This page is still under construction! Only numbers up to 9,999 are supported."
    ] }, void 0, true, {
      fileName: "app/routes/tools.numbers.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { onChange: (e) => {
          setValue(e.target.value);
          setTranslatedValue("");
        }, max: "9999", min: "0", type: "number", value }, void 0, false, {
          fileName: "app/routes/tools.numbers.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => setTranslatedValue(translateNumber(value)), children: "Translate" }, void 0, false, {
          fileName: "app/routes/tools.numbers.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tools.numbers.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
        fileName: "app/routes/tools.numbers.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Translation: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: translatedValue }, void 0, false, {
          fileName: "app/routes/tools.numbers.tsx",
          lineNumber: 65,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tools.numbers.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.numbers.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tools.numbers.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(ToolsNumbers, "gN69cnRBDbLytcsWPyaVVwZTaVc=");
_c = ToolsNumbers;
var _c;
$RefreshReg$(_c, "ToolsNumbers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ToolsNumbers as default,
  meta
};
//# sourceMappingURL=/build/routes/tools.numbers-V6AZFQ33.js.map
