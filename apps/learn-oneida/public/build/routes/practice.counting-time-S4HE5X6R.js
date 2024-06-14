import {
  createCountingTimeData
} from "/build/_shared/chunk-F32CMF4W.js";
import {
  Link
} from "/build/_shared/chunk-IK2DEJ6J.js";
import {
  TableAsForm
} from "/build/_shared/chunk-YOV24XUM.js";
import {
  z
} from "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-Z2WNLPTD.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-SB6J2XPB.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-KIXTCICO.js";
import "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/practice.counting-time.tsx
var import_lodash = __toESM(require_lodash(), 1);
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.counting-time.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.counting-time.tsx"
  );
  import.meta.hot.lastModified = "1718240764416.6638";
}
var meta = () => {
  return [{
    title: "Practice Counting Time"
  }, {
    name: "description",
    content: "Test your Oneida knowledge on counting lengths of time!"
  }];
};
function PracticeMonths() {
  _s();
  const rows = (0, import_react.useMemo)(() => {
    const [firstTable, secondTable] = createCountingTimeData();
    const result = [];
    for (const item of firstTable) {
      for (const key of ["minutes", "hours", "days", "nights"]) {
        result.push({
          en: `${item.num} ${item.num === 1 ? key.slice(0, key.length - 1) : key}`,
          key: `${key}_${item.num}`,
          on: item[key]
        });
      }
    }
    for (const item of secondTable) {
      for (const key of ["weeks", "months", "years"]) {
        result.push({
          en: `${item.num} ${item.num === 1 ? key.slice(0, key.length - 1) : key}`,
          key: `${key}_${item.num}`,
          on: item[key]
        });
      }
    }
    return (0, import_lodash.shuffle)(result);
  }, []);
  const formSchema = (0, import_react.useMemo)(() => {
    return z.object(Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])));
  }, [rows]);
  const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Practice counting time" }, void 0, false, {
      fileName: "app/routes/practice.counting-time.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Here you can practice the terminology on the",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/articles/counting-time", children: "Counting Time article" }, void 0, false, {
        fileName: "app/routes/practice.counting-time.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      " which is part of ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/learn/module04", children: "Module 4" }, void 0, false, {
        fileName: "app/routes/practice.counting-time.tsx",
        lineNumber: 74,
        columnNumber: 20
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/practice.counting-time.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    hasStarted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableAsForm, { checkCorrectness: (key, val) => TableAsForm.defaultCheckCorrectness({
      key,
      val,
      rows
    }), formSchema, rows }, void 0, false, {
      fileName: "app/routes/practice.counting-time.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "end", gap: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: hasStarted, onClick: () => setHasStarted(true), children: "Start" }, void 0, false, {
      fileName: "app/routes/practice.counting-time.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/practice.counting-time.tsx",
      lineNumber: 81,
      columnNumber: 50
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.counting-time.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(PracticeMonths, "Na4lIFEM11n4GaMApxbLjPfmXy4=");
_c = PracticeMonths;
var _c;
$RefreshReg$(_c, "PracticeMonths");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeMonths as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.counting-time-S4HE5X6R.js.map
