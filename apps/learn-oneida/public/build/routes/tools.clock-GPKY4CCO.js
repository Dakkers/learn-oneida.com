import {
  translateNumber
} from "/build/_shared/chunk-CLFJRGXB.js";
import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  Separator
} from "/build/_shared/chunk-DQR6F5KU.js";
import {
  Select
} from "/build/_shared/chunk-K7EXP22E.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-CEX5NOEO.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  unwhisperWord
} from "/build/_shared/chunk-YNSSGAWD.js";
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

// app/routes/tools.clock.tsx
var import_react = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);

// app/utils/time.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/time.ts"
  );
  import.meta.hot.lastModified = "1716730032017.3237";
}
var MIDNIGHT = "ahs\xFAtha";
var BEFORE = "tyono\xB7l\xFAhe";
var AFTER = "yotuk\xF3htu";
var MINUTES = "nikah\xED\xB7kalat";
var MORNING = "ast\xE9htsi\u0294";
var NOON = "\u028C\u0301ti";
var HOUR = "niyohwist\xE1\xB7e";
function doTheTranslate(hour, minute) {
  if (hour === 0 && minute === 0) {
    return [MIDNIGHT];
  } else if (hour === 12 && minute === 0) {
    return ["\u028C\u0301ty\u028C ni\xB7k\xE1le\u0294", "\u028C\u0301ti"];
  }
  const result = [];
  const hoursToConsider = minute >= 31 ? [hour + 1, hour] : [hour];
  for (const h of hoursToConsider) {
    const useBeforeHour = h > hour;
    const effectiveMinutes = useBeforeHour ? 60 - minute : minute;
    const effectiveHour = h % 24;
    const minutesText = (effectiveMinutes !== 0 ? [
      translateNumber(effectiveMinutes.toString()),
      MINUTES,
      useBeforeHour ? BEFORE : AFTER
    ] : []).join(" ").trim();
    const subresult = [minutesText];
    if (effectiveHour === 0) {
      subresult.push(MIDNIGHT);
    } else if (effectiveHour < 12) {
      subresult.push(translateNumber(effectiveHour.toString()), HOUR, MORNING);
    } else if (effectiveHour === 12) {
      subresult.push(NOON);
    } else {
      subresult.push(
        translateNumber((effectiveHour % 12).toString()),
        HOUR,
        AFTER,
        NOON
      );
    }
    result.push(unwhisperWord(subresult.join(" ")).trim());
  }
  return result;
}

// app/routes/tools.clock.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tools.clock.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tools.clock.tsx"
  );
  import.meta.hot.lastModified = "1718240764417.3572";
}
var meta = () => {
  return [{
    title: "Clock Time"
  }, {
    name: "description",
    content: "Translate clock time into Oneida"
  }];
};
function ToolsClock() {
  _s();
  const [hour, setHour] = import_react.default.useState("12");
  const [minute, setMinute] = import_react.default.useState("00");
  const [period, setPeriod] = import_react.default.useState("AM");
  const [translatedValue, setTranslatedValue] = import_react.default.useState([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Clock Time" }, void 0, false, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Hour", onChange: setHour, options: import_lodash.default.range(1, 13).map((value) => ({
        label: value,
        value: value.toString()
      })), value: hour }, void 0, false, {
        fileName: "app/routes/tools.clock.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Minute", onChange: setMinute, options: import_lodash.default.range(0, 60).map((v) => v.toString().padStart(2, "0")).map((value) => ({
        label: value,
        value
      })), value: minute }, void 0, false, {
        fileName: "app/routes/tools.clock.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "\xA0", onChange: setPeriod, options: [{
        label: "a.m.",
        value: "AM"
      }, {
        label: "p.m.",
        value: "PM"
      }], value: period }, void 0, false, {
        fileName: "app/routes/tools.clock.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => setTranslatedValue(doTheTranslate(parseInt(hour) % 12 + (period === "AM" ? 0 : 12), parseInt(minute))), children: "Translate" }, void 0, false, {
        fileName: "app/routes/tools.clock.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tools.clock.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Translations:" }, void 0, false, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: translatedValue.map((value, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: value }, i, false, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 76,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/routes/tools.clock.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tools.clock.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(ToolsClock, "70/lzxkdrntx13FJhvyh+JejmcY=");
_c = ToolsClock;
var _c;
$RefreshReg$(_c, "ToolsClock");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ToolsClock as default,
  meta
};
//# sourceMappingURL=/build/routes/tools.clock-GPKY4CCO.js.map
