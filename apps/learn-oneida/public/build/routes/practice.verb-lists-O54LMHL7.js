import {
  MODULE_4_TENSE_LIST,
  createModule4Data
} from "/build/_shared/chunk-FASTNPWH.js";
import "/build/_shared/chunk-R4ERJN5D.js";
import "/build/_shared/chunk-L3DGB35L.js";
import "/build/_shared/chunk-QCCSMPHT.js";
import {
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap
} from "/build/_shared/chunk-ALRV36ZB.js";
import {
  MODULE_6_VERB_TENSE_LIST,
  createModule6VerbList,
  getPronounsForModule6Verb,
  module6VerbTenseMap
} from "/build/_shared/chunk-U2VTXW4J.js";
import {
  TableAsForm
} from "/build/_shared/chunk-YOV24XUM.js";
import {
  Select
} from "/build/_shared/chunk-K7EXP22E.js";
import "/build/_shared/chunk-T36NX3RM.js";
import {
  z
} from "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-VSCVEPQN.js";
import "/build/_shared/chunk-5ZKYN6D5.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import "/build/_shared/chunk-Z2WNLPTD.js";
import "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-CEX5NOEO.js";
import "/build/_shared/chunk-YUHBZFFF.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-KIXTCICO.js";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  pronouns,
  translatePhrase
} from "/build/_shared/chunk-KBT2IGLR.js";
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

// app/routes/practice.verb-lists.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.verb-lists.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.verb-lists.tsx"
  );
  import.meta.hot.lastModified = "1718241431872.5798";
}
var meta = () => {
  return [{
    title: "Practice Lists of Verbs"
  }, {
    name: "description",
    content: "Practice your knowledge of verbs in the Oneida language."
  }];
};
var tenseMap = {
  ...module5VerbTenseMap,
  ...module6VerbTenseMap
};
function PracticeTenseConjugation() {
  _s();
  const [selectedVerbList, setSelectedVerbList] = import_react.default.useState("m6");
  const [selectedPronoun, setSelectedPronoun] = import_react.default.useState("i");
  const [selectedTense, setSelectedTense] = import_react.default.useState("hab");
  const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
  const tenseOptions = (0, import_react.useMemo)(() => {
    return (selectedVerbList === "m4" ? MODULE_4_TENSE_LIST : selectedVerbList === "m5" ? MODULE_5_VERB_TENSE_LIST : selectedVerbList === "m6" ? MODULE_6_VERB_TENSE_LIST : []).map((t) => ({
      label: tenseMap[t],
      value: t
    }));
  }, [selectedVerbList]);
  const pronounsOptions = (0, import_react.useMemo)(() => {
    let result = [];
    if (selectedVerbList === "m4") {
      result = pronouns;
    } else if (selectedVerbList === "m5") {
      result = selectedTense === "cmd" ? ["u"] : ["i"];
    } else if (selectedVerbList === "m6") {
      result = selectedTense === "cmd" ? ["u", "u2", "yall"] : pronouns;
    }
    return result.map((p) => ({
      label: `${PRONOUN_MAP_ONEIDA[p]} (${PRONOUN_MAP_EN[p]})`,
      value: p
    }));
  }, [selectedVerbList, selectedTense]);
  const rows = (0, import_react.useMemo)(() => {
    if (selectedVerbList === "m4") {
      return createModule4Data().filter((v) => v.tense === selectedTense).map((v) => ({
        en: translatePhrase(v.data.translation, selectedPronoun),
        key: v.key,
        on: v.data.phrases.find((p) => p.pronoun === selectedPronoun).phrase
      }));
    } else if (selectedVerbList === "m5") {
      return createModule5VerbsList().map((v) => {
        return {
          en: translatePhrase(v[selectedTense].translation, selectedPronoun),
          key: v.key,
          on: v[selectedTense].phrases.find((p) => p.pronoun === selectedPronoun).phrase
        };
      }).filter(Boolean);
    } else if (selectedVerbList === "m6") {
      return createModule6VerbList().filter((v) => getPronounsForModule6Verb(v.key).includes(selectedPronoun)).map((v) => {
        return {
          en: translatePhrase(v[selectedTense].translation, selectedPronoun),
          key: v.key,
          on: v[selectedTense].phrases.find((p) => p.pronoun === selectedPronoun).phrase
        };
      });
    }
    return [];
  }, [selectedVerbList, selectedTense, selectedPronoun]);
  const formSchema = (0, import_react.useMemo)(() => {
    return z.object(Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])));
  }, [rows]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Practice Lists of Verbs" }, void 0, false, {
      fileName: "app/routes/practice.verb-lists.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Use this page to practice writing a list of verbs from a given module. You can pick a specific pronominal and tense to work with too." }, void 0, false, {
      fileName: "app/routes/practice.verb-lists.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Verb List", onChange: (value) => {
        setSelectedTense(value === "m4" ? "prs" : value === "m5" ? "prs" : "hab");
        setSelectedVerbList(value);
        setHasStarted(false);
      }, options: [{
        label: "Module 4",
        value: "m4"
      }, {
        label: "Module 5",
        value: "m5"
      }, {
        label: "Module 6",
        value: "m6"
      }], value: selectedVerbList }, void 0, false, {
        fileName: "app/routes/practice.verb-lists.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Tense", onChange: (value) => {
        setSelectedTense(value);
        setHasStarted(false);
      }, options: tenseOptions, value: selectedTense }, void 0, false, {
        fileName: "app/routes/practice.verb-lists.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Pronoun", onChange: (val) => {
        setSelectedPronoun(val);
        setHasStarted(false);
      }, options: pronounsOptions, value: selectedPronoun }, void 0, false, {
        fileName: "app/routes/practice.verb-lists.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: hasStarted, onClick: () => setHasStarted(true), children: "Start" }, void 0, false, {
        fileName: "app/routes/practice.verb-lists.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/practice.verb-lists.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.verb-lists.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    hasStarted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableAsForm, { bleed: 32, checkCorrectness: (key, val) => TableAsForm.defaultCheckCorrectness({
      key,
      val,
      rows
    }), formSchema, rows }, void 0, false, {
      fileName: "app/routes/practice.verb-lists.tsx",
      lineNumber: 142,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.verb-lists.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s(PracticeTenseConjugation, "SAq6q8Xuex2e3v7YT2vulX305lE=");
_c = PracticeTenseConjugation;
var _c;
$RefreshReg$(_c, "PracticeTenseConjugation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeTenseConjugation as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.verb-lists-O54LMHL7.js.map
