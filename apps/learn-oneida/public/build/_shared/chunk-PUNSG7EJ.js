import {
  cn
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Pronominal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Pronominal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Pronominal.tsx"
  );
  import.meta.hot.lastModified = "1717069385779.3079";
}
function Pronominal({
  color,
  children
}) {
  const textColorClass = ["red", "r"].includes(color ?? "") ? "text-red-500" : ["blue", "b"].includes(color ?? "") ? "text-blue-700" : ["purple", "p"].includes(color ?? "") ? "text-violet-700" : ["lightblue", "lb"].includes(color ?? "") ? "text-cyan-400" : "text-gray-700";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn(textColorClass, "font-bold"), children }, void 0, false, {
    fileName: "app/components/Pronominal.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Pronominal;
var _c;
$RefreshReg$(_c, "Pronominal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Pronominal
};
//# sourceMappingURL=/build/_shared/chunk-PUNSG7EJ.js.map
