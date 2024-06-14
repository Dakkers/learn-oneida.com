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
import {
  DATA_PLACES_IN_COMMUNITY
} from "/build/_shared/chunk-VDZ464QS.js";
import "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-KIXTCICO.js";
import {
  arrayify
} from "/build/_shared/chunk-KBT2IGLR.js";
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

// app/routes/practice.places.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.places.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.places.tsx"
  );
  import.meta.hot.lastModified = "1716730032014.9006";
}
var meta = () => {
  return [{
    title: "Places in the community"
  }, {
    name: "description",
    content: "Quiz your Oneida knowledge by picking the right translation!"
  }];
};
var DATA = DATA_PLACES_IN_COMMUNITY.filter(_c = (datum) => !["band_office", "community_centre", "health_centre", "longhouse", "drivein", "political_office", "radio_station", "reserve"].includes(datum.key));
_c2 = DATA;
function PracticePlaces() {
  _s();
  const [englishOptions, oneidaOptions] = import_react.default.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    for (const datum of DATA) {
      resultEn.push({
        key: datum.key,
        text: datum.en
      });
      resultOn.push({
        key: datum.key,
        text: arrayify(datum.on)[0]
      });
    }
    return [resultEn, resultOn];
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Practice your knowledge of places in the community" }, void 0, false, {
      fileName: "app/routes/practice.places.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnglishToOneidaQuiz, { englishOptions, oneidaOptions }, void 0, false, {
      fileName: "app/routes/practice.places.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.places.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(PracticePlaces, "sTzyXPhAYijPViLOVxFaDT6mklo=");
_c3 = PracticePlaces;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "DATA$DATA_PLACES_IN_COMMUNITY.filter");
$RefreshReg$(_c2, "DATA");
$RefreshReg$(_c3, "PracticePlaces");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticePlaces as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.places-PGXSBCFP.js.map
