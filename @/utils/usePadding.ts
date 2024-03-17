import { SpacingToken } from "@/design/primitives/types";
import { cn } from "@/lib/utils";

type PaddingToken = Exclude<SpacingToken, "1px" | "2px">;

export interface PaddingProps {
  p?: PaddingToken;
  px?: PaddingToken;
  py?: PaddingToken;
  pl?: PaddingToken;
  pr?: PaddingToken;
  pb?: PaddingToken;
  pt?: PaddingToken;
}

export function usePadding ({
  p,
  px,
  py,
  pl,
  pr,
  pb,
  pt,
}: PaddingProps) {
  return cn(
    p && pMap.get(p),
    px && pxMap.get(px),
    py && pyMap.get(py),
    pl && plMap.get(pl),
    pr && prMap.get(pr),
    pb && pbMap.get(pb),
    pt && ptMap.get(pt)
  )
}

const pMap = new Map<PaddingToken, string>([
  [0, "p-0"],
  [1, "p-1"],
  [2, "p-2"],
  [3, "p-3"],
  [4, "p-4"],
  [5, "p-5"],
  [6, "p-6"],
  [7, "p-7"],
  [8, "p-8"],
]);

const pxMap = new Map<PaddingToken, string>([
  [0, "px-0"],
  [1, "px-1"],
  [2, "px-2"],
  [3, "px-3"],
  [4, "px-4"],
  [5, "px-5"],
  [6, "px-6"],
  [7, "px-7"],
  [8, "px-8"],
]);

const pyMap = new Map<PaddingToken, string>([
  [0, "py-0"],
  [1, "py-1"],
  [2, "py-2"],
  [3, "py-3"],
  [4, "py-4"],
  [5, "py-5"],
  [6, "py-6"],
  [7, "py-7"],
  [8, "py-8"],
]);

const plMap = new Map<PaddingToken, string>([
  [0, "pl-0"],
  [1, "pl-1"],
  [2, "pl-2"],
  [3, "pl-3"],
  [4, "pl-4"],
  [5, "pl-5"],
  [6, "pl-6"],
  [7, "pl-7"],
  [8, "pl-8"],
]);

const prMap = new Map<PaddingToken, string>([
  [0, "pr-0"],
  [1, "pr-1"],
  [2, "pr-2"],
  [3, "pr-3"],
  [4, "pr-4"],
  [5, "pr-5"],
  [6, "pr-6"],
  [7, "pr-7"],
  [8, "pr-8"],
]);

const ptMap = new Map<PaddingToken, string>([
  [0, "pt-0"],
  [1, "pt-1"],
  [2, "pt-2"],
  [3, "pt-3"],
  [4, "pt-4"],
  [5, "pt-5"],
  [6, "pt-6"],
  [7, "pt-7"],
  [8, "pt-8"],
]);

const pbMap = new Map<PaddingToken, string>([
  [0, "pb-0"],
  [1, "pb-1"],
  [2, "pb-2"],
  [3, "pb-3"],
  [4, "pb-4"],
  [5, "pb-5"],
  [6, "pb-6"],
  [7, "pb-7"],
  [8, "pb-8"],
]);
