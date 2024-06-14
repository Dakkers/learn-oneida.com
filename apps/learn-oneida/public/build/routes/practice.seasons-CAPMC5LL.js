import {
  DATA_SEASONS
} from "/build/_shared/chunk-OQFTH5W3.js";
import {
  MatchingGamePage
} from "/build/_shared/chunk-LCMWGKKS.js";
import "/build/_shared/chunk-DQR6F5KU.js";
import "/build/_shared/chunk-Z7H33W4S.js";
import {
  Flower2,
  Leaf,
  Snowflake,
  Sun
} from "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-KIXTCICO.js";
import "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import {
  Heading
} from "/build/_shared/chunk-LU2G44XZ.js";
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

// app/routes/practice.seasons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.seasons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.seasons.tsx"
  );
  import.meta.hot.lastModified = "1716730032015.2527";
}
var meta = () => {
  return [{
    title: "Seasons"
  }, {
    name: "description",
    content: "Match the Oneida words with the English words."
  }];
};
function PracticeSeasons() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Seasons" }, void 0, false, {
      fileName: "app/routes/practice.seasons.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MatchingGamePage, { data: DATA_SEASONS, getIcon: (key) => key === "spring" ? Flower2 : key === "summer" ? Sun : key === "fall" ? Leaf : key === "winter" ? Snowflake : void 0 }, void 0, false, {
      fileName: "app/routes/practice.seasons.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.seasons.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = PracticeSeasons;
var _c;
$RefreshReg$(_c, "PracticeSeasons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeSeasons as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.seasons-CAPMC5LL.js.map
