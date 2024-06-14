import {
  AnswerMultipleChoiceButtons,
  NextBtn,
  Quiz,
  QuizContainerContext,
  Settings,
  useQuizContext
} from "/build/_shared/chunk-M6PAF3NK.js";
import {
  Box
} from "/build/_shared/chunk-F6GD7EN2.js";
import {
  createModule6VerbListFlat
} from "/build/_shared/chunk-U2VTXW4J.js";
import "/build/_shared/chunk-K7EXP22E.js";
import "/build/_shared/chunk-T36NX3RM.js";
import "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-VSCVEPQN.js";
import "/build/_shared/chunk-5ZKYN6D5.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import "/build/_shared/chunk-Z2WNLPTD.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-CEX5NOEO.js";
import "/build/_shared/chunk-YUHBZFFF.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import {
  Link
} from "/build/_shared/chunk-SB6J2XPB.js";
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

// app/routes/practice.active-tense-identification.tsx
var import_react = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.active-tense-identification.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.active-tense-identification.tsx"
  );
  import.meta.hot.lastModified = "1717069385816.7546";
}
var meta = () => {
  return [{
    title: "Tense Identification for Active Verbs"
  }, {
    name: "description",
    content: "Practice your knowledge of tenses in the Oneida language by identifying a tense conjugation on an active verb."
  }];
};
var TENSE_LIST = ["hab", "def", "fut", "ifut", "cmd", "pfv"];
function PracticeTenseIdentification() {
  _s();
  const [hasStarted, setHasStarted] = import_react.default.useState(false);
  const [languageSetting, setLanguageSetting] = import_react.default.useState("both");
  const [answerSetting, setAnswerSetting] = import_react.default.useState("multipleChoice");
  const [questionCountSetting, setQuestionCountSetting] = import_react.default.useState("5");
  const questions = import_react.default.useMemo(() => {
    const DATA_FULL_LIST = import_lodash.default.flattenDeep(createModule6VerbListFlat().map((v) => v.phrases.map((p) => ({
      tense: v.tense,
      value: p.phrase
    })) ?? []));
    if (!hasStarted) {
      return [];
    }
    const result = new Array(Number(questionCountSetting));
    for (let i = 0; i < result.length; i++) {
      const randomTense = TENSE_LIST[Math.floor(Math.random() * 5)];
      const datum = import_lodash.default.sample(DATA_FULL_LIST.filter((d) => d.tense === randomTense)) ?? DATA_FULL_LIST.find((d) => d.tense === randomTense);
      result[i] = {
        answer: randomTense,
        id: i.toString(),
        question: datum?.value || "",
        type: "given_word"
      };
    }
    return result;
  }, [hasStarted, questionCountSetting]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuizContainerContext.Provider, { value: {
    answerSetting,
    languageSetting,
    questionCountSetting,
    setAnswerSetting,
    setLanguageSetting,
    setQuestionCountSetting
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Tense Identification (Active Verbs)" }, void 0, false, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    hasStarted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Quiz, { getResultForQuestion: (index, selectedAnswer) => {
      const q = questions[index];
      return {
        correctAnswer: tenseMap[q.answer],
        isCorrect: q.answer === selectedAnswer,
        question: `What is the tense for: ${q.question}`,
        selectedAnswer: tenseMap[selectedAnswer]
      };
    }, numberOfQuestions: Number(questionCountSetting), onReset: () => setHasStarted(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", justify: "center", gap: 8, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Quiz.Questions, { children: questions.map((q, i) => /* @__PURE__ */ (0, import_react3.createElement)(QuestionLol, { ...q, key: i })) }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextBtn, {}, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 85,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
        "Use this page to practice identifying what tense conjugation an active verb contains. These words come from",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-blue-600 underline", to: "/learn/module06", children: "module 6" }, void 0, false, {
          fileName: "app/routes/practice.active-tense-identification.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings, { enableLanguageSetting: false, enableAnswerTypeSetting: false }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => setHasStarted(true), children: "Start" }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 103,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.active-tense-identification.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/practice.active-tense-identification.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(PracticeTenseIdentification, "AIV6of/lJrXmZ/Rp8ZVmP82AmeA=");
_c = PracticeTenseIdentification;
var tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite",
  def: "Definite",
  pfv: "Perfective",
  hab: "Habitual"
};
function QuestionLol({
  answer,
  id,
  question
}) {
  _s2();
  const quizContext = useQuizContext();
  console.log(quizContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "What is the tense in this word: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: question }, void 0, false, {
        fileName: "app/routes/practice.active-tense-identification.tsx",
        lineNumber: 142,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", gap: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnswerMultipleChoiceButtons, { isCorrect: quizContext.answer === answer, options: TENSE_LIST.map((t) => ({
      key: t,
      text: tenseMap[t]
    })), questionKey: id }, void 0, false, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 147,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/practice.active-tense-identification.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.active-tense-identification.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s2(QuestionLol, "Wd2GdEunSwOA6L0piZdlRPYBdTo=", false, function() {
  return [useQuizContext];
});
_c2 = QuestionLol;
var _c;
var _c2;
$RefreshReg$(_c, "PracticeTenseIdentification");
$RefreshReg$(_c2, "QuestionLol");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeTenseIdentification as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.active-tense-identification-E755CL5C.js.map
