import {
  nuwehse_red_default
} from "/build/_shared/chunk-EEL3FWDX.js";
import {
  didnt_used_to_want_default,
  dont_want_default,
  thought_default,
  used_to_want_default,
  want_default
} from "/build/_shared/chunk-R4ERJN5D.js";
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
import {
  createModule6VerbListFlat
} from "/build/_shared/chunk-U2VTXW4J.js";
import {
  Select
} from "/build/_shared/chunk-K7EXP22E.js";
import {
  ParadigmTable
} from "/build/_shared/chunk-T36NX3RM.js";
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
import {
  dualicPronouns,
  pluralPronouns,
  singlePronouns
} from "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import "/build/_shared/chunk-LU2G44XZ.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/lodash/_baseRandom.js
var require_baseRandom = __commonJS({
  "node_modules/lodash/_baseRandom.js"(exports, module) {
    var nativeFloor = Math.floor;
    var nativeRandom = Math.random;
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }
    module.exports = baseRandom;
  }
});

// node_modules/lodash/_arraySample.js
var require_arraySample = __commonJS({
  "node_modules/lodash/_arraySample.js"(exports, module) {
    var baseRandom = require_baseRandom();
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : void 0;
    }
    module.exports = arraySample;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseValues.js
var require_baseValues = __commonJS({
  "node_modules/lodash/_baseValues.js"(exports, module) {
    var arrayMap = require_arrayMap();
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    module.exports = baseValues;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol = root.Symbol;
    module.exports = Symbol;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/values.js
var require_values = __commonJS({
  "node_modules/lodash/values.js"(exports, module) {
    var baseValues = require_baseValues();
    var keys = require_keys();
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    module.exports = values;
  }
});

// node_modules/lodash/_baseSample.js
var require_baseSample = __commonJS({
  "node_modules/lodash/_baseSample.js"(exports, module) {
    var arraySample = require_arraySample();
    var values = require_values();
    function baseSample(collection) {
      return arraySample(values(collection));
    }
    module.exports = baseSample;
  }
});

// node_modules/lodash/sample.js
var require_sample = __commonJS({
  "node_modules/lodash/sample.js"(exports, module) {
    var arraySample = require_arraySample();
    var baseSample = require_baseSample();
    var isArray = require_isArray();
    function sample2(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }
    module.exports = sample2;
  }
});

// app/routes/tools.paradigm.tsx
var import_react = __toESM(require_react(), 1);

// app/data/attokha.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/attokha.ts"
  );
  import.meta.hot.lastModified = "1711838251867.5105";
}
var data = {
  translation: "{{pronoun}} {{refVerb}} wise",
  type: "PR",
  phrases: [
    {
      pronoun: "i",
      phrase: "katt\xF3kha\u0294",
      breakdown: [{ text: "k" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "u",
      phrase: "satt\xF3kha\u0294",
      breakdown: [{ text: "s" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "m",
      phrase: "latt\xF3kha\u0294",
      breakdown: [{ text: "l" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "f",
      phrase: "yutt\xF3kha\u0294",
      breakdown: [{ text: "yu" }, "tt\xF3kha\u0294"]
    },
    {
      pronoun: "it",
      phrase: "watt\xF3kha\u0294",
      breakdown: [{ text: "w" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "uni",
      phrase: "tyatt\xF3kha\u0294",
      breakdown: [{ text: "ty" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "soni",
      phrase: "yakyatt\xF3kha\u0294",
      breakdown: [{ text: "yaky" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "u2",
      phrase: "tsyatt\xF3kha\u0294",
      breakdown: [{ text: "tsy" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "2m",
      phrase: "hyatt\xF3kha\u0294",
      breakdown: [{ text: "hy" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "2f",
      phrase: "kyatt\xF3kha\u0294",
      breakdown: [{ text: "ky" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "us",
      phrase: "twatt\xF3kha\u0294",
      breakdown: [{ text: "tw" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "theyni",
      phrase: "yakwatt\xF3kha\u0294",
      breakdown: [{ text: "yakw" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "yall",
      phrase: "swatt\xF3kha\u0294",
      breakdown: [{ text: "sw" }, "att\xF3kha\u0294"]
    },
    {
      pronoun: "ms",
      phrase: "lutt\xF3kha\u0294",
      breakdown: [{ text: "lu" }, "tt\xF3kha\u0294"]
    },
    {
      pronoun: "fs",
      phrase: "kutt\xF3kha\u0294",
      breakdown: [{ text: "ku" }, "tt\xF3kha\u0294"]
    }
  ]
};
var attokha_default = data;

// app/data/ehsak.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/ehsak.ts"
  );
  import.meta.hot.lastModified = "1711838251868.6313";
}
var data2 = {
  translation: "{{pronoun}} {{refVerb}} looking for it",
  type: "PR",
  phrases: [
    {
      pronoun: "i",
      phrase: "k\xE9hsaks",
      breakdown: [{ text: "k" }, "\xE9hsaks"]
    },
    {
      pronoun: "u",
      phrase: "s\xE9hsaks",
      breakdown: [{ text: "s" }, "\xE9hsaks"]
    },
    {
      pronoun: "m",
      phrase: "l\xE9hsaks",
      breakdown: [{ text: "l" }, "\xE9hsaks"]
    },
    {
      pronoun: "f",
      phrase: "yak\xE9hsaks",
      breakdown: [{ text: "yak" }, "\xE9hsaks"]
    },
    {
      pronoun: "it",
      phrase: "w\xE9hsaks",
      breakdown: [{ text: "w" }, "\xE9hsaks"]
    },
    {
      pronoun: "uni",
      phrase: "tn\xE9hsaks",
      breakdown: [{ text: "tn" }, "\xE9hsaks"]
    },
    {
      pronoun: "soni",
      phrase: "yakn\xE9hsaks",
      breakdown: [{ text: "yakn" }, "\xE9hsaks"]
    },
    {
      pronoun: "u2",
      phrase: "sn\xE9hsaks",
      breakdown: [{ text: "sn" }, "\xE9hsaks"]
    },
    {
      pronoun: "2m",
      phrase: "n\xE9hsaks",
      breakdown: [{ text: "n" }, "\xE9hsaks"]
    },
    {
      pronoun: "2f",
      phrase: "kn\xE9hsaks",
      breakdown: [{ text: "kn" }, "\xE9hsaks"]
    },
    {
      pronoun: "us",
      phrase: "tw\xE9hsaks",
      breakdown: [{ text: "tw" }, "\xE9hsaks"]
    },
    {
      pronoun: "theyni",
      phrase: "yakw\xE9hsaks",
      breakdown: [{ text: "yakw" }, "\xE9hsaks"]
    },
    {
      pronoun: "yall",
      phrase: "sw\xE9hsaks",
      breakdown: [{ text: "sw" }, "\xE9hsaks"]
    },
    {
      pronoun: "ms",
      phrase: "l\u028Cn\xE9hsaks",
      breakdown: [{ text: "l\u028Cn" }, "\xE9hsaks"]
    },
    {
      pronoun: "fs",
      phrase: "kun\xE9hsaks",
      breakdown: [{ text: "kun" }, "\xE9hsaks"]
    }
  ]
};
var ehsak_default = data2;

// app/data/ʌtole.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/\u028Ctole.ts"
  );
  import.meta.hot.lastModified = "1711838251884.5786";
}
var data3 = {
  translation: "{{pronoun}} {{refVerb}} hard to please",
  phrases: [
    {
      pronoun: "i",
      phrase: "k\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "k",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "u",
      phrase: "s\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "s",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "m",
      phrase: "l\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "l",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "f",
      phrase: "yak\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "yak",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "it",
      phrase: "w\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "w",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "uni",
      phrase: "tn\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "tn",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "soni",
      phrase: "yakn\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "yakn",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "u2",
      phrase: "sn\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "sn",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "2m",
      phrase: "n\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "n",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "2f",
      phrase: "kn\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "kn",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "us",
      phrase: "tw\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "tw",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "theyni",
      phrase: "yakw\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "yakw",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "yall",
      phrase: "sw\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "sw",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "ms",
      phrase: "l\u028Cn\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "l\u028Cn",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    },
    {
      pronoun: "fs",
      phrase: "kun\u028Cto\xB7l\xE9\xB7",
      breakdown: [
        {
          text: "kun",
          type: "PR"
        },
        { text: "\u028Cto\xB7l\xE9\xB7" }
      ]
    }
  ]
};
var tole_default = data3;

// app/data/itlu.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/itlu.ts"
  );
  import.meta.hot.lastModified = "1717069385787.2932";
}
var data4 = {
  translation: "{{pronoun}} {{verb}} some place",
  type: "PR",
  phrases: [
    {
      pronoun: "i",
      phrase: "k\xED\xB7tlu\u0294",
      breakdown: [["k"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "u",
      phrase: "ts\xED\xB7tlu\u0294",
      breakdown: [["ts"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "m",
      phrase: "l\u028C\u0301\xB7tlu\u0294",
      breakdown: [["l\u028C\u0301"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "f",
      phrase: "y\xE9\xB7tlu\u0294",
      breakdown: [["y\xE9"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "it",
      phrase: "k\u028C\u0301\xB7tlu\u0294",
      breakdown: [["k\u028C\u0301"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "uni",
      phrase: "tn\xED\xB7tlu\u0294",
      breakdown: [["tn"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "soni",
      phrase: "yakn\xED\xB7tlu\u0294",
      breakdown: [["yakn"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "u2",
      phrase: "sn\xED\xB7tlu\u0294",
      breakdown: [["sn"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "2m",
      phrase: "hn\xED\xB7tlu\u0294",
      breakdown: [["hn"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "2f",
      phrase: "kn\xED\xB7tlu\u0294",
      breakdown: [["kn"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "us",
      phrase: "tw\u028C\u0301\xB7tlu\u0294",
      breakdown: [["tw\u028C\u0301"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "theyni",
      phrase: "yakw\u028C\u0301\xB7tlu\u0294",
      breakdown: [["yakw\u028C\u0301"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "yall",
      phrase: "sw\u028C\u0301\xB7tlu\u0294",
      breakdown: [["sw\u028C\u0301"], "\xB7tlu\u0294"]
    },
    {
      pronoun: "ms",
      phrase: "lat\xED\xB7tlu\u0294",
      breakdown: [["lat"], "\xED\xB7tlu\u0294"]
    },
    {
      pronoun: "fs",
      phrase: "kut\xED\xB7tlu\u0294",
      breakdown: [["kut"], "\xED\xB7tlu\u0294"]
    }
  ]
};
var itlu_default = data4;

// app/data/otshyus.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/otshyus.ts"
  );
  import.meta.hot.lastModified = "1711838251883.1545";
}
var data5 = {
  translation: "{{pronoun}} {{refVerb}} pulling it out",
  phrases: [
    {
      pronoun: "i",
      phrase: "k\xF3tshyus",
      breakdown: [
        {
          text: "k",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "u",
      phrase: "s\xF3tshyus",
      breakdown: [
        {
          text: "s",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "m",
      phrase: "l\xF3tshyus",
      breakdown: [
        {
          text: "l",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "f",
      phrase: "yak\xF3tshyus",
      breakdown: [
        {
          text: "yak",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "it",
      phrase: "y\xF3tshyus",
      breakdown: [
        {
          text: "y",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "uni",
      phrase: "tn\xF3tshyus",
      breakdown: [
        {
          text: "tn",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "soni",
      phrase: "yakn\xF3tshyus",
      breakdown: [
        {
          text: "yakn",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "u2",
      phrase: "sn\xF3tshyus",
      breakdown: [
        {
          text: "sn",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "2m",
      phrase: "n\xF3tshyus",
      breakdown: [
        {
          text: "n",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "2f",
      phrase: "kn\xF3tshyus",
      breakdown: [
        {
          text: "kn",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "us",
      phrase: "ty\xF3tshyus",
      breakdown: [
        {
          text: "ty",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "theyni",
      phrase: "yaky\xF3tshyus",
      breakdown: [
        {
          text: "yaky",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "yall",
      phrase: "tsy\xF3tshyus",
      breakdown: [
        {
          text: "tsy",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "ms",
      phrase: "l\u028Cn\xF3tshyus",
      breakdown: [
        {
          text: "l\u028Cn",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    },
    {
      pronoun: "fs",
      phrase: "kun\xF3tshyus",
      breakdown: [
        {
          text: "kun",
          type: "PR"
        },
        { text: "\xF3tshyus" }
      ]
    }
  ]
};
var otshyus_default = data5;

// app/routes/tools.paradigm.tsx
var import_sample = __toESM(require_sample(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tools.paradigm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tools.paradigm.tsx"
  );
  import.meta.hot.lastModified = "1718240764418.3003";
}
var meta = () => {
  return [{
    title: "Paradigm Tester"
  }, {
    name: "description",
    content: "Test a root word's paradigm!"
  }];
};
function ToolsParadigm() {
  _s();
  const module4Options = (0, import_react.useMemo)(() => [["is-here", is_here_default, "is here"], ["was-here", was_here_default, "was here"], ["will-be-here", will_be_here_default, "will be here"], ["might-be-here", might_be_here_default, "might be here"], ["is-not-here", is_not_here_default, "is not here"], ["was-not-here", was_not_here_default, "was not here"], ["will-not-be-here", will_not_be_here_default, "will not be here"], ["is-there", is_there_default, "is there"], ["will-be-there", will_be_there_default, "will be there"], ["was-there", was_there_default, "was there"], ["might-be-there", might_be_there_default, "might be there"], ["is-not-there", is_not_there_default, "is not there"], ["was-not-there", was_not_there_default, "was not there"], ["will-not-be-there", will_not_be_there_default, "will not be there"], ["is-at-home", is_at_home_default, "is at home"], ["was-at-home", was_at_home_default, "was at home"], ["will-be-at-home", will_be_at_home_default, "will be at home"], ["might-be-at-home", might_be_at_home_default, "might be at home"], ["is-not-at-home", is_not_at_home_default, "is not at home"], ["was-not-at-home", was_not_at_home_default, "was not at home"], ["will-not-be-at-home", will_not_be_at_home_default, "will not be at home"], ["lives-there", lives_there_default, "lives there"], ["used-to-live-there", used_to_live_there_default, "used to live there"], ["will-live-there", will_live_there_default, "will live there"], ["might-live-there", might_live_there_default, "might live there"], ["doesnt-live-there", doesnt_live_there_default, "doesn't live there"], ["didnt-used-to-live-there", didnt_used_to_live_there_default, "didn't used to live there"], ["will-not-live-there", will_not_live_there_default, "will not live there"], ["want", want_default, "want"], ["dont-want", dont_want_default, "don't want"], ["used-to-want", used_to_want_default, "used to want"], ["didnt-used-to-want", didnt_used_to_want_default, "didn't used to want"], ["thought", thought_default, "thought"]], []);
  const dataToUse = Object.fromEntries([["attokha", attokha_default], ["ehsaks", ehsak_default], ["i_tlu", itlu_default], ["like-red", nuwehse_red_default], ["otshyus", otshyus_default], ["\u028Ctole", tole_default], ...createModule6VerbListFlat().map((v) => [v.key, v]), ...module4Options.map((item) => [item[0], item[1]])]);
  const translatorFns = {
    i_tlu: ({
      pronoun
    }) => ({
      verb: ["it", "m", "f"].includes(pronoun) ? "resides" : "reside"
    }),
    "like-red": ({
      pronoun
    }) => ({
      verb: ["it", "m", "f"].includes(pronoun) ? "likes" : "like"
    })
  };
  const [word, setWord] = import_react.default.useState("like-red");
  const [paradigm, setParadigm] = import_react.default.useState("all");
  const [hasStarted, setHasStarted] = import_react.default.useState(false);
  const [allowedPronouns, setAllowedPronouns] = import_react.default.useState([]);
  const wordOptions = (0, import_react.useMemo)(() => [{
    label: "be hard to please",
    value: "\u028Ctole"
  }, {
    label: "be wise",
    value: "attokha"
  }, {
    label: "like (something)",
    value: "like-red"
  }, {
    label: "look for (something)",
    value: "ehsaks"
  }, {
    label: "pull someting out",
    value: "otshyus"
  }, {
    label: "reside some place",
    value: "i_tlu"
  }, ...createModule6VerbListFlat().map((datum) => ({
    label: datum.en,
    value: datum.key
  })), ...module4Options.map((item) => ({
    label: item[2],
    value: item[0]
  }))].sort((opt1, opt2) => opt1.label.localeCompare(opt2.label)), [module4Options]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "Paradigm Tester" }, void 0, false, {
      fileName: "app/routes/tools.paradigm.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: {
      sm: "end"
    }, direction: {
      xs: "column",
      sm: "row"
    }, gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Select,
        {
          label: "Word",
          onChange: (value) => {
            setWord(value);
            setHasStarted(false);
          },
          options: wordOptions,
          value: word
        },
        void 0,
        false,
        {
          fileName: "app/routes/tools.paradigm.tsx",
          lineNumber: 132,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Type", onChange: (value) => {
        setParadigm(value);
        setHasStarted(false);
      }, options: [{
        label: "All",
        value: "all"
      }, {
        label: "Singles only",
        value: "singles"
      }, {
        label: "Dualics only",
        value: "dualics"
      }, {
        label: "Plurals only",
        value: "plurals"
      }, {
        label: "One of each",
        value: "one"
      }], value: paradigm }, void 0, false, {
        fileName: "app/routes/tools.paradigm.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !word || hasStarted, onClick: () => {
        setAllowedPronouns(paradigm === "all" ? [] : paradigm === "singles" ? singlePronouns : paradigm === "dualics" ? dualicPronouns : paradigm === "plurals" ? pluralPronouns : paradigm === "one" ? [(0, import_sample.default)(singlePronouns), (0, import_sample.default)(dualicPronouns), (0, import_sample.default)(pluralPronouns)] : []);
        setHasStarted(true);
      }, children: "Start" }, void 0, false, {
        fileName: "app/routes/tools.paradigm.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tools.paradigm.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.paradigm.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    hasStarted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ParadigmTable,
      {
        allowedPronouns,
        columnVisibility: {
          pronounEnglish: false
        },
        data: dataToUse[word],
        isTesting: true,
        translationFn: translatorFns[word]
      },
      void 0,
      false,
      {
        fileName: "app/routes/tools.paradigm.tsx",
        lineNumber: 169,
        columnNumber: 22
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/tools.paradigm.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
_s(ToolsParadigm, "sZdMCQ/argEQXA+x3SnvtqkxjjQ=");
_c = ToolsParadigm;
var _c;
$RefreshReg$(_c, "ToolsParadigm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ToolsParadigm as default,
  meta
};
//# sourceMappingURL=/build/routes/tools.paradigm-FXTQGPPC.js.map
