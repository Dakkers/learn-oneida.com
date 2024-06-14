import {
  EnglishToOneidaQuiz
} from "/build/_shared/chunk-FKG2ZWXU.js";
import "/build/_shared/chunk-M6PAF3NK.js";
import "/build/_shared/chunk-F6GD7EN2.js";
import {
  didnt_used_to_live_there_default,
  doesnt_live_there_default,
  is_at_home_default,
  is_here_default,
  is_not_at_home_default,
  is_not_here_default,
  is_not_there_default,
  is_there_default,
  lives_there_default,
  might_be_at_home_default,
  might_be_there_default,
  might_live_there_default,
  used_to_live_there_default,
  was_at_home_default,
  was_not_at_home_default,
  was_not_here_default,
  was_not_there_default,
  was_there_default,
  will_be_at_home_default,
  will_be_there_default,
  will_live_there_default,
  will_not_be_at_home_default,
  will_not_be_here_default,
  will_not_be_there_default,
  will_not_live_there_default
} from "/build/_shared/chunk-L3DGB35L.js";
import {
  might_be_here_default,
  was_here_default,
  will_be_here_default
} from "/build/_shared/chunk-QCCSMPHT.js";
import "/build/_shared/chunk-K7EXP22E.js";
import "/build/_shared/chunk-T36NX3RM.js";
import "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import "/build/_shared/chunk-EFPAQ3UL.js";
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
import "/build/_shared/chunk-KIXTCICO.js";
import {
  convertBreakdownToPlainText,
  translatePhrase
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

// app/routes/practice.being-somewhere.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice.being-somewhere.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice.being-somewhere.tsx"
  );
  import.meta.hot.lastModified = "1716333633627.058";
}
var meta = () => {
  return [{
    title: "Being somewhere"
  }, {
    name: "description",
    content: "Quiz your Oneida knowledge by picking the right translation!"
  }];
};
function PracticeBeingSomewhere() {
  _s();
  const [englishOptions, oneidaOptions] = import_react.default.useMemo(() => {
    const resultEn = [];
    const resultOn = [];
    for (const datum of [is_here_default, was_here_default, will_be_here_default, might_be_here_default, is_not_here_default, was_not_here_default, will_not_be_here_default, is_there_default, will_be_there_default, was_there_default, might_be_there_default, is_not_there_default, was_not_there_default, will_not_be_there_default, is_at_home_default, was_at_home_default, will_be_at_home_default, might_be_at_home_default, is_not_at_home_default, was_not_at_home_default, will_not_be_at_home_default, lives_there_default, used_to_live_there_default, will_live_there_default, might_live_there_default, doesnt_live_there_default, didnt_used_to_live_there_default, will_not_live_there_default]) {
      for (const phrase of datum.phrases) {
        const key = `${datum.translation}_${phrase.pronoun}`;
        resultEn.push({
          key,
          text: translatePhrase(datum.translation, phrase.pronoun)
        });
        resultOn.push({
          key,
          text: convertBreakdownToPlainText(phrase.breakdown)
        });
      }
    }
    return [resultEn, resultOn];
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Practice verbs for: being, living somewhere" }, void 0, false, {
      fileName: "app/routes/practice.being-somewhere.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnglishToOneidaQuiz, { englishOptions, oneidaOptions }, void 0, false, {
      fileName: "app/routes/practice.being-somewhere.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice.being-somewhere.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s(PracticeBeingSomewhere, "Vivlv4aCyBIVTj2Y4LRvAC1BiEM=");
_c = PracticeBeingSomewhere;
var _c;
$RefreshReg$(_c, "PracticeBeingSomewhere");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PracticeBeingSomewhere as default,
  meta
};
//# sourceMappingURL=/build/routes/practice.being-somewhere-M2DR57TN.js.map
