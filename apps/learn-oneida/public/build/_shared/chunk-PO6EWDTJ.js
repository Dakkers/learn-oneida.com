import {
  Heading
} from "/build/_shared/chunk-LU2G44XZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/SectionHeading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SectionHeading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SectionHeading.tsx"
  );
  import.meta.hot.lastModified = "1716730031917.5088";
}
function SectionHeading({
  align,
  children,
  id,
  level
}) {
  const variantMap = {
    1: "headlineL",
    2: "headlineS",
    3: "titleM"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { align, id, level, variant: variantMap[level], children }, void 0, false, {
    fileName: "app/components/SectionHeading.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = SectionHeading;
var _c;
$RefreshReg$(_c, "SectionHeading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SectionHeading
};
//# sourceMappingURL=/build/_shared/chunk-PO6EWDTJ.js.map
