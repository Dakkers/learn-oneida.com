import {
  AnswerMultipleChoiceButtons,
  AnswerText,
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
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import {
  sanitizeIrregularCharacters
} from "/build/_shared/chunk-YNSSGAWD.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/practice/EnglishToOneidaQuiz.tsx
var import_react = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/practice/EnglishToOneidaQuiz.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/practice/EnglishToOneidaQuiz.tsx"
  );
  import.meta.hot.lastModified = "1716730031927.084";
}
function EnglishToOneidaQuiz({
  englishOptions,
  oneidaOptions
}) {
  _s();
  const [languageSetting, setLanguageSetting] = import_react.default.useState("both");
  const [answerSetting, setAnswerSetting] = import_react.default.useState("text");
  const [questionCountSetting, setQuestionCountSetting] = import_react.default.useState("5");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuizContainerContext.Provider, { value: {
    answerSetting,
    languageSetting,
    questionCountSetting,
    setAnswerSetting,
    setLanguageSetting,
    setQuestionCountSetting
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { englishOptions, oneidaOptions }, void 0, false, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(EnglishToOneidaQuiz, "m50+a9FJAG6P4uH79+Gm6Y83w68=");
_c = EnglishToOneidaQuiz;
function Content({
  englishOptions,
  oneidaOptions
}) {
  _s2();
  const [hasStarted, setHasStarted] = import_react.default.useState(false);
  const questions = useEnglishToOneidaQuestions({
    englishOptions,
    hasStarted,
    oneidaOptions
  });
  const getResultForQuestion = useEnglishToOneidaResultChecker({
    englishOptions,
    oneidaOptions,
    questions
  });
  const context = import_react.default.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: hasStarted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Quiz, { getResultForQuestion, numberOfQuestions: Number(context.questionCountSetting), onReset: () => setHasStarted(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", justify: "center", gap: 8, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Quiz.Questions, { children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StandardQuestion, { options: q.options, questionKey: q.key, text: q.text }, q.key, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 80,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextBtn, {}, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 84,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 78,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 77,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings, {}, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => setHasStarted(true), children: "Start" }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 87,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s2(Content, "+iFfLskDMXwFwPqtJa3J1U6i314=", false, function() {
  return [useEnglishToOneidaQuestions, useEnglishToOneidaResultChecker];
});
_c2 = Content;
function StandardQuestion({
  options,
  questionKey,
  text
}) {
  _s3();
  const context = import_react.default.useContext(QuizContainerContext);
  const quizContext = useQuizContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", gap: 8, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headlineS", children: text }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", gap: 4, children: context?.answerSetting === "multipleChoice" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnswerMultipleChoiceButtons, { isCorrect: quizContext.answer === questionKey, questionKey, options }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 113,
      columnNumber: 58
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnswerText, {}, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 113,
      columnNumber: 183
    }, this) }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/EnglishToOneidaQuiz.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_s3(StandardQuestion, "54BeTlEy1MwzC842zOeihY5n+8c=", false, function() {
  return [useQuizContext];
});
_c3 = StandardQuestion;
function useEnglishToOneidaQuestions({
  englishOptions,
  hasStarted = false,
  oneidaOptions
}) {
  _s4();
  const context = import_react.default.useContext(QuizContainerContext);
  const questions = import_react.default.useMemo(() => {
    if (!context || !hasStarted) {
      return [];
    }
    const numOptions = context.languageSetting === "both" ? englishOptions.length + oneidaOptions.length : context.languageSetting === "en" ? englishOptions.length : oneidaOptions.length;
    const result = new Array(Math.min(Number(context.questionCountSetting), numOptions));
    for (let i = 0; i < result.length; i++) {
      const langKey = determineLangKey(context.languageSetting);
      const list = langKey === "en" ? englishOptions : oneidaOptions;
      const oppositeList = langKey === "en" ? oneidaOptions : englishOptions;
      const questionDatum = import_lodash.default.sample(list.filter((datum) => !result.find((existingEntry) => existingEntry?.key === datum.key))) ?? list[0];
      const answerDatum = oppositeList.find((opt) => opt.key === questionDatum.key);
      const optionsForQuestion = [];
      if (answerDatum) {
        optionsForQuestion.push({
          key: answerDatum.key,
          text: answerDatum.text
        });
      }
      const sampledOptions = import_lodash.default.sampleSize(oppositeList, 5);
      for (const item of sampledOptions) {
        if (item.key !== questionDatum.key) {
          optionsForQuestion.push({
            key: item.key,
            text: item.text
          });
        }
        if (optionsForQuestion.length >= 4) {
          break;
        }
      }
      result[i] = {
        answer: answerDatum?.text ?? "",
        key: questionDatum.key,
        options: import_lodash.default.shuffle(optionsForQuestion),
        text: questionDatum.text,
        type: langKey === "en" ? "english_to_oneida" : "oneida_to_english"
      };
    }
    return result;
  }, [context, hasStarted, englishOptions, oneidaOptions]);
  return questions;
}
_s4(useEnglishToOneidaQuestions, "OPrbGAbYsPnizC6Y6RQTDN/13ao=");
function useEnglishToOneidaResultChecker({
  englishOptions,
  oneidaOptions,
  questions
}) {
  _s5();
  const context = import_react.default.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext");
  }
  return (index, userAnswer) => {
    const q = questions[index];
    const listToUse = q.type === "english_to_oneida" ? oneidaOptions : englishOptions;
    const correctAnswerObj = listToUse.find((obj) => obj.key === q.key);
    let isCorrect = false;
    let selectedAnswer = userAnswer;
    if (context.answerSetting === "text") {
      isCorrect = sanitizeIrregularCharacters(userAnswer) === sanitizeIrregularCharacters(correctAnswerObj?.text ?? "");
    } else {
      const selectedAnswerObj = listToUse.find((obj) => obj.key === userAnswer);
      isCorrect = q.key === selectedAnswer;
      selectedAnswer = selectedAnswerObj?.text ?? "";
    }
    return {
      correctAnswer: correctAnswerObj?.text ?? "",
      isCorrect,
      question: q.text,
      selectedAnswer
    };
  };
}
_s5(useEnglishToOneidaResultChecker, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function determineLangKey(languageSetting) {
  if (languageSetting === "en" || languageSetting === "on") {
    return languageSetting;
  }
  return Math.random() < 0.5 ? "en" : "on";
}
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "EnglishToOneidaQuiz");
$RefreshReg$(_c2, "Content");
$RefreshReg$(_c3, "StandardQuestion");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  EnglishToOneidaQuiz
};
//# sourceMappingURL=/build/_shared/chunk-FKG2ZWXU.js.map
