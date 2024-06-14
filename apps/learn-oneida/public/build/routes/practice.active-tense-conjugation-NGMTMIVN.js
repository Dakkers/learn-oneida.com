import {
  MODULE_6_VERB_TENSE_LIST,
  createModule6VerbList,
  findModule6Verb,
  getPronounsForModule6Verb,
  module6VerbTenseMap
} from "/build/_shared/chunk-U2VTXW4J.js";
import {
  Link
} from "/build/_shared/chunk-IK2DEJ6J.js";
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
import "/build/_shared/chunk-SB6J2XPB.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-KIXTCICO.js";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA
} from "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import {
  Heading
} from "/build/_shared/chunk-LU2G44XZ.js";
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

// app/routes/practice.active-tense-conjugation.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.active-tense-conjugation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.active-tense-conjugation.tsx"
  );
  import.meta.hot.lastModified = "1718240764416.355";
}
var meta = () => {
  return [{
    title: "Tenses Conjugation for Active Verbs"
  }, {
    name: "description",
    content: "Practice your knowledge and understanding of tenses for active verbs in the Oneida language."
  }];
};
function PracticeTenseConjugation() {
  _s();
  const [word, setWord] = import_react.default.useState("answer");
  const [pronoun, setPronoun] = import_react.default.useState("i");
  const [hasStarted, setHasStarted] = import_react.default.useState(false);
  const verbOptions = import_react.default.useMemo(() => createModule6VerbList().map((datum) => ({
    label: datum.en,
    value: datum.key
  })), []);
  const pronounOptions = import_react.default.useMemo(() => {
    return getPronounsForModule6Verb(word).map((pronoun2) => ({
      label: `${PRONOUN_MAP_ONEIDA[pronoun2]} (${PRONOUN_MAP_EN[pronoun2]})`,
      value: pronoun2
    }));
  }, [word]);
  const rows = (0, import_react.useMemo)(() => {
    const datum = findModule6Verb(word);
    if (!datum) {
      return [];
    }
    return MODULE_6_VERB_TENSE_LIST.filter((tense) => tense === "cmd" ? ["u", "u2", "yall"].includes(pronoun) : true).map((tense) => ({
      en: module6VerbTenseMap[tense],
      key: `${datum.key}_${tense}`,
      on: datum[tense].phrases.find((p) => p.pronoun === pronoun).phrase
    }));
  }, [pronoun, word]);
  const formSchema = (0, import_react.useMemo)(() => {
    return z.object(Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])));
  }, [rows]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Tense Conjugation for Active Verbs" }, void 0, false, {
      fileName: "app/routes/practice.active-tense-conjugation.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Use this page to practice conjugating the different tenses for a given active verb. These words come from",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/learn/module06", children: "module 6" }, void 0, false, {
        fileName: "app/routes/practice.active-tense-conjugation.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/practice.active-tense-conjugation.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: {
      sm: "end"
    }, direction: {
      xs: "column",
      sm: "row"
    }, gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Word", onChange: (value) => {
        setWord(value);
        setHasStarted(false);
        const allowedPronouns = getPronounsForModule6Verb(value);
        if (!allowedPronouns.includes(pronoun)) {
          setPronoun(allowedPronouns[0] ?? "");
        }
      }, options: verbOptions, value: word }, void 0, false, {
        fileName: "app/routes/practice.active-tense-conjugation.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Pronoun", onChange: (value) => {
        setPronoun(value);
        setHasStarted(false);
      }, options: pronounOptions, value: pronoun }, void 0, false, {
        fileName: "app/routes/practice.active-tense-conjugation.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !word || hasStarted, onClick: () => {
        setHasStarted(true);
      }, children: "Start" }, void 0, false, {
        fileName: "app/routes/practice.active-tense-conjugation.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/practice.active-tense-conjugation.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.active-tense-conjugation.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    hasStarted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableAsForm, { checkCorrectness: (key, val) => TableAsForm.defaultCheckCorrectness({
      key,
      val,
      rows
    }), formSchema, rows }, void 0, false, {
      fileName: "app/routes/practice.active-tense-conjugation.tsx",
      lineNumber: 110,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.active-tense-conjugation.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(PracticeTenseConjugation, "nsuzNj0g4Qgo10fUrpfW8IUXCR8=");
_c = PracticeTenseConjugation;
var _c;
$RefreshReg$(_c, "PracticeTenseConjugation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeTenseConjugation as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.active-tense-conjugation-NGMTMIVN.js.map
