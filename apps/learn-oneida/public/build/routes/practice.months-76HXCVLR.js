import {
  DATA_MONTHS
} from "/build/_shared/chunk-N5LDB4AV.js";
import {
  EnglishToOneidaQuiz
} from "/build/_shared/chunk-FKG2ZWXU.js";
import "/build/_shared/chunk-M6PAF3NK.js";
import "/build/_shared/chunk-F6GD7EN2.js";
import "/build/_shared/chunk-K7EXP22E.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-5ZKYN6D5.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-CEX5NOEO.js";
import "/build/_shared/chunk-YUHBZFFF.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/practice.months.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.months.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.months.tsx"
  );
  import.meta.hot.lastModified = "1716730032014.1506";
}
var meta = () => {
  return [{
    title: "Months"
  }, {
    name: "description",
    content: "Quiz your Oneida knowledge by picking the right translation!"
  }];
};
function PracticeMonths() {
  _s();
  const [englishOptions, oneidaOptions] = import_react.default.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    for (const datum of DATA_MONTHS) {
      resultEn.push({
        key: datum.key,
        text: datum.en
      });
      resultOn.push({
        key: datum.key,
        text: datum.on
      });
    }
    return [resultEn, resultOn];
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Practice months" }, void 0, false, {
      fileName: "app/routes/practice.months.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnglishToOneidaQuiz, { englishOptions, oneidaOptions }, void 0, false, {
      fileName: "app/routes/practice.months.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.months.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(PracticeMonths, "sTzyXPhAYijPViLOVxFaDT6mklo=");
_c = PracticeMonths;
var _c;
$RefreshReg$(_c, "PracticeMonths");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeMonths as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.months-76HXCVLR.js.map
