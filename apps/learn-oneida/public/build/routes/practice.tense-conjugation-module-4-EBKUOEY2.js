import {
  createModule4Data
} from "/build/_shared/chunk-FASTNPWH.js";
import "/build/_shared/chunk-R4ERJN5D.js";
import "/build/_shared/chunk-L3DGB35L.js";
import "/build/_shared/chunk-QCCSMPHT.js";
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

// app/routes/practice.tense-conjugation-module-4.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.tense-conjugation-module-4.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.tense-conjugation-module-4.tsx"
  );
  import.meta.hot.lastModified = "1718240764417.0222";
}
var meta = () => {
  return [{
    title: "Tenses Conjugation for Verbs from Module 4"
  }, {
    name: "description",
    content: "Practice your knowledge and understanding of tenses for verbs from module 4 in the Oneida language."
  }];
};
function PracticeTenseConjugation() {
  _s();
  const [word, setWord] = import_react.default.useState("here");
  const [pronoun, setPronoun] = import_react.default.useState("i");
  const [hasStarted, setHasStarted] = import_react.default.useState(false);
  const pronounOptions = import_react.default.useMemo(() => {
    return pronouns.map((pronoun2) => ({
      label: `${PRONOUN_MAP_ONEIDA[pronoun2]} (${PRONOUN_MAP_EN[pronoun2]})`,
      value: pronoun2
    }));
  }, []);
  const datumKeys = (0, import_react.useMemo)(() => {
    if (word === "here") {
      return ["data-is-here", "data-was-here", "data-will-be-here", "data-might-be-here", "data-is-not-here", "data-was-not-here", "data-will-not-be-here"];
    } else if (word === "there") {
      return ["data-is-there", "data-was-there", "data-will-be-there", "data-might-be-there", "data-is-not-there", "data-was-not-there", "data-will-not-be-there"];
    } else if (word === "home") {
      return ["data-is-at-home", "data-was-at-home", "data-will-be-at-home", "data-might-be-at-home", "data-is-not-at-home", "data-was-not-at-home", "data-will-not-be-at-home"];
    } else if (word === "lives") {
      return ["data-lives-there", "data-used-to-live-there", "data-will-live-there", "data-might-live-there", "data-doesnt-live-there", "data-didnt-used-to-live-there", "data-will-not-live-there"];
    } else if (word === "want-think") {
      return ["data-want", "data-dont-want", "data-used-to-want", "data-didnt-used-to-want", "data-thought"];
    }
    return [];
  }, [word]);
  const rows = (0, import_react.useMemo)(() => {
    const data = createModule4Data();
    return datumKeys.map((key) => {
      const datum = data.find((d) => d.key === key);
      return {
        en: translatePhrase(datum.data.translation, pronoun),
        key,
        on: datum.data.phrases.find((p) => p.pronoun === pronoun).phrase
      };
    });
  }, [datumKeys, pronoun]);
  const formSchema = (0, import_react.useMemo)(() => {
    return z.object(Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])));
  }, [rows]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Tense Conjugation for Module 4" }, void 0, false, {
      fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Use this page to practice conjugating the different tenses for a given verb from ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/learn/module04", children: "module 4" }, void 0, false, {
        fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
        lineNumber: 85,
        columnNumber: 19
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "end", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Word", onChange: (value) => {
        setWord(value);
        setHasStarted(false);
      }, options: [{
        label: "Being here",
        value: "here"
      }, {
        label: "Being there",
        value: "there"
      }, {
        label: "Living there",
        value: "lives"
      }, {
        label: "At home",
        value: "home"
      }, {
        label: "Want / Think",
        value: "want-think"
      }], value: word }, void 0, false, {
        fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Pronoun", onChange: (value) => {
        setPronoun(value);
        setHasStarted(false);
      }, options: pronounOptions, value: pronoun }, void 0, false, {
        fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !word || hasStarted, onClick: () => setHasStarted(true), children: "Start" }, void 0, false, {
        fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    hasStarted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableAsForm, { bleed: 32, checkCorrectness: (key, val) => TableAsForm.defaultCheckCorrectness({
      key,
      val,
      rows
    }), formSchema, rows }, void 0, false, {
      fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
      lineNumber: 119,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.tense-conjugation-module-4.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(PracticeTenseConjugation, "S8qnrijJg1xRbOxnwJ5kgFEpIp0=");
_c = PracticeTenseConjugation;
var _c;
$RefreshReg$(_c, "PracticeTenseConjugation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeTenseConjugation as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.tense-conjugation-module-4-EBKUOEY2.js.map
