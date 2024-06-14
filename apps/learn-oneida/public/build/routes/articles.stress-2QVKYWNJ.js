import {
  StressArticle
} from "/build/_shared/chunk-5QHHP6AL.js";
import "/build/_shared/chunk-TYY7O7G2.js";
import "/build/_shared/chunk-VKR6BTYO.js";
import "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-LU2G44XZ.js";
import "/build/_shared/chunk-24GQRLNU.js";
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

// app/routes/articles.stress.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles.stress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles.stress.tsx"
  );
  import.meta.hot.lastModified = "1711838251918.9292";
}
var meta = () => {
  return [{
    title: "Stress and Accents"
  }, {
    name: "description",
    content: "Stress and accents in Oneida"
  }];
};
function ArticlesStress() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StressArticle, {}, void 0, false, {
    fileName: "app/routes/articles.stress.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = ArticlesStress;
var _c;
$RefreshReg$(_c, "ArticlesStress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ArticlesStress as default,
  meta
};
//# sourceMappingURL=/build/routes/articles.stress-2QVKYWNJ.js.map
