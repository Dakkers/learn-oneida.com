import type { PronominalRulesInteractive } from "./types";

const data = {
  i_u: {
    default: ["kuy"],
    c: ["ku"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["k", ["u", "OP"]],
      },
    ],
  },
  i_m: {
    default: [
      {
        excp: "2" as const,
        text: "liy",
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "li",
      },
    ],
    i: [
      {
        excp: "2" as const,
        text: "l",
      },
    ],
  },
  i_f: {
    default: ["khey"],
    c: ["khe"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["kh", ["e", "OP"]],
      },
    ],
  },
  i_u2: {
    default: ["kn"],
    c: ["kni"],
    a: ["ky"],
  },
  i_yall: {
    default: ["kw"],
    c: ["kwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["kw", ["ʌ", "OP"]],
      },
    ],
    o: ["ky"],
  },

  u_i: {
    default: ["sk"],
    c: [
      "sk",
      {
        excp: "4" as const,
        text: "ske",
      },
    ],
    a: ["skw"],
  },
  u_m: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsh"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsh"],
      },
      {
        excp: ["3", "4"] as const,
        breakdown: [["h", "RPL"], "etshe"],
      },
    ],
  },
  u_f: {
    default: ["shey"],
    c: ["she"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["sh", ["e", "OP"]],
      },
    ],
  },
  u_theyni: {
    default: ["skw"],
    c: ["skwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["skw", ["ʌ", "OP"]],
      },
    ],
    o: [
      {
        excp: "3" as const,
        breakdown: ["sky"],
      },
    ],
  },

  m_i: {
    default: ["lak"],
    c: [
      "lak",
      {
        excp: "4" as const,
        text: "lake",
      },
    ],
    a: ["lakw"],
    e: ["lakw"],
  },
  m_u: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "yay"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ya"],
      },
    ],
    a: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "y"],
      },
    ],
    i: [
      {
        excp: ["1", "3"] as const,
        breakdown: [["h", "RPL"], "y", ["ʌ", "OP"]],
      },
    ],
  },
  m_m: {
    default: [
      {
        excp: ["1", "2"] as const,
        breakdown: ["l", ["o", "OP"]],
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "lo",
      },
    ],
    e: [
      {
        excp: "2" as const,
        text: "law",
      },
    ],
    o: [
      {
        excp: "2" as const,
        text: "la",
      },
    ],
  },
  m_f: {
    default: [
      {
        excp: "1" as const,
        breakdown: ["shak", ["o", "OP"]],
      },
    ],
    c: ["shako"],
    e: ["shakaw"],
    o: ["shaka"],
  },
  m_uni: {
    default: ["shukn"],
    c: ["shukni"],
    a: ["shuky"],
  },
  m_us: {
    default: ["shukw"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["shukw", ["ʌ", "OP"]],
      },
    ],
    c: ["shukwa"],
    o: ["shuky"],
  },

  f_i: {
    default: ["yukw"],
    c: [
      "yuk",
      {
        excp: "4" as const,
        text: "yuke",
      },
    ],
    i: ["yuk"],
    o: ["yuk"],
  },
  f_u: {
    default: ["yes"],
    c: ["yesa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["yes", ["ʌ", "OP"]],
      },
    ],
    o: ["yesay"],
  },
  f_m: {
    default: ["luw"],
    c: ["luwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["luw", ["ʌ", "OP"]],
      },
    ],
    o: ["luway"],
  },
  f_f: {
    default: ["yutat"],
    c: [
      "yutat",
      {
        excp: "4" as const,
        text: "yutate",
      },
    ],
  },
  f_uni: {
    default: ["yukhiy"],
    label: ["They → you and I", "They → them and I"],
    c: ["yukhi"],
    i: ["yukh"],
  },
  f_u2: {
    default: ["yetshiy"],
    c: ["yetshi"],
    i: ["yetshi"],
  },

  uni_m: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ethn"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ethni"],
      },
    ],
    a: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ety"],
      },
    ],
  },
  uni_f: {
    default: ["yethiy"],
    c: ["yethi"],
    i: ["yeth"],
  },

  soni_m: {
    default: ["shakn"],
    c: ["shakni"],
    a: ["shaky"],
  },
  soni_f: {
    default: ["yakhiy"],
    c: ["yakhi"],
    i: ["yakh"],
  },

  u2_i: {
    default: ["skn"],
    c: ["skni"],
    a: ["sky"],
  },
  u2_m: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsn"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsni"],
      },
    ],
    a: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsy"],
      },
    ],
  },

  us_m: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ethw"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ethwa"],
      },
    ],
    i: [
      {
        excp: ["1", "3"] as const,
        breakdown: [["h", "RPL"], "ethw", ["ʌ", "OP"]],
      },
    ],
    o: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "ety"],
      },
    ],
  },

  theyni_m: {
    default: ["shakw"],
    c: ["shakwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["shakw", ["ʌ", "OP"]],
      },
    ],
    o: ["shaky"],
  },

  yall_i: {
    default: ["skw"],
    c: ["skwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["skw", ["ʌ", "OP"]],
      },
    ],
    o: ["sky"],
  },
  yall_m: {
    default: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsw"],
      },
    ],
    c: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etswa"],
      },
    ],
    i: [
      {
        excp: ["1", "3"] as const,
        breakdown: ["hetsw", ["ʌ", "OP"]],
      },
    ],
    o: [
      {
        excp: "3" as const,
        breakdown: [["h", "RPL"], "etsy"],
      },
    ],
  },

  ms_them: {
    default: ["shakon"],
    c: ["shakoti"],
    i: ["shakot"],
  },

  fs_them: {
    default: ["yakon"],
    c: ["yakoti"],
    i: ["yakot"],
  },

  they_ms: {
    default: [
      {
        excp: "2" as const,
        text: "luwʌn",
      },
    ],
    c: [
      {
        excp: "2" as const,
        text: "luwati",
      },
    ],
    i: [
      {
        excp: "2" as const,
        text: "luwat",
      },
    ],
  },
  they_fs: {
    default: ["kuwat"],
    c: ["kuwati"],
    a: ["kuwʌn"],
    e: ["kuwʌn"],
    o: ["kuwʌn"],
  },
  they_it: {
    default: ["kuw"],
    c: ["kuwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["kuw", ["ʌ", "OP"]],
      },
    ],
    o: ["kuway"],
  },

  cmd_u_i: {
    default: ["tak"],
    c: [
      "tak",
      {
        excp: "4" as const,
        text: "take",
      },
    ],
    a: ["takw"],
  },
  cmd_u2_i: {
    default: ["takn"],
    c: ["takni"],
    a: ["taky"],
  },
  cmd_yall_i: {
    default: ["takw"],
    c: ["takwa"],
    i: [
      {
        excp: "1" as const,
        breakdown: ["takw", ["ʌ", "OP"]],
      },
    ],
    o: ["taky"],
  },
};

const fullData: PronominalRulesInteractive = {
  ...data,
  soni_u: data.i_u2,
  soni_u2: data.i_u2,
  // @ts-expect-error IDK
  soni_yall: data.i_yall,
  // @ts-expect-error IDK
  theyni_u: data.i_yall,
  // @ts-expect-error IDK
  theyni_u2: data.i_yall,
  // @ts-expect-error IDK
  theyni_yall: data.i_yall,
  u_soni: data.u2_i,
  // @ts-expect-error IDK
  m_theyni: data.m_us,
  m_soni: data.m_uni,
  // @ts-expect-error IDK
  m_u2: data.u2_m,
  // @ts-expect-error IDK
  m_yall: data.yall_m,
  f_soni: data.f_uni,
  f_us: data.f_uni,
  f_theyni: data.f_uni,
  f_yall: data.f_u2,
  u2_f: data.f_u2,
  // @ts-expect-error IDK
  u2_theyni: data.yall_i,
  us_f: data.f_u2,
  theyni_f: data.soni_f,
  yall_f: data.f_u2,
  // @ts-expect-error IDK
  yall_soni: data.u_theyni,
  // @ts-expect-error IDK
  yall_theyni: data.u_theyni,
};

export default fullData;
