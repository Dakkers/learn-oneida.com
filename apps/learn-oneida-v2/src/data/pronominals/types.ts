import { type BreakdownArray } from "@ukwehuwehneke/language-components";

type Excp = "1" | "2" | "3" | "4" | "5" | "6";

type StemData =
  | string
  | {
      excp: Excp | readonly Excp[];
      breakdown: BreakdownArray;
    }
  | {
      excp: Excp | readonly Excp[];
      text: string;
    };

interface Entry {
  default: StemData[];
  c?: StemData[];
  a?: StemData[];
  e?: StemData[];
  i?: StemData[];
  o?: StemData[];
}

export interface PronominalRules {
  i: Entry;
  u: Entry;
  m: Entry;
  f: Entry;
  it: Entry;
  uni: Entry;
  soni: Entry;
  u2: Entry;
  "2m": Entry;
  "2f": Entry;
  us: Entry;
  theyni: Entry;
  yall: Entry;
  ms: Entry;
  fs: Entry;
}

export interface PronominalRulesPurple {
  i_u: Entry;
  i_m: Entry;
  i_f: Entry;
  u_i: Entry;
  u_m: Entry;
  u_f: Entry;
  m_i: Entry;
  m_u: Entry;
  m_m: Entry;
  m_f: Entry;
  f_i: Entry;
  f_u: Entry;
  f_m: Entry;
  f_f: Entry;
  i_u2: Entry;
  i_yall: Entry;
  u_soni: Entry;
  u_theyni: Entry;
  m_uni: Entry;
  m_soni: Entry;
  m_u2: Entry;
  m_us: Entry;
  m_theyni: Entry;
  m_yall: Entry;
  f_uni: Entry;
  f_soni: Entry;
  f_u2: Entry;
  f_us: Entry;
  f_theyni: Entry;
  f_yall: Entry;
  uni_m: Entry;
  uni_f: Entry;
  soni_u: Entry;
  soni_m: Entry;
  soni_f: Entry;
  soni_u2: Entry;
  soni_yall: Entry;
  u2_i: Entry;
  u2_m: Entry;
  u2_f: Entry;
  u2_theyni: Entry;
  us_m: Entry;
  us_f: Entry;
  theyni_u: Entry;
  theyni_m: Entry;
  theyni_f: Entry;
  theyni_u2: Entry;
  theyni_yall: Entry;
  yall_i: Entry;
  yall_m: Entry;
  yall_f: Entry;
  yall_soni: Entry;
  yall_theyni: Entry;
  ms_them: Entry;
  fs_them: Entry;
  they_ms: Entry;
  they_fs: Entry;
  they_it: Entry;
  cmd_u_i: Entry;
  cmd_yall_i: Entry;
  cmd_u2_i: Entry;
}
