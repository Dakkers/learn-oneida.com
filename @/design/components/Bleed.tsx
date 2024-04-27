import { cn } from "@/lib/utils";
import { SpacingToken } from "../primitives/types";

type MarginToken = Exclude<SpacingToken, "1px" | "2px">;

interface BleedProps {
  children: React.ReactNode;
  m?: MarginToken;
  mx?: MarginToken;
  my?: MarginToken;
  ml?: MarginToken;
  mr?: MarginToken;
  mb?: MarginToken;
  mt?: MarginToken;
}

export function Bleed({ children, m, mx, my, ml, mt, mr, mb }: BleedProps) {
  return (
    <div
      className={cn(
        m && mMap.get(m),
        mx && mxMap.get(mx),
        my && myMap.get(my),
        ml && mlMap.get(ml),
        mr && mrMap.get(mr),
        mb && mbMap.get(mb),
        mt && mtMap.get(mt),
      ) }
    >
      {children}
    </div>
  );
}

const mMap = new Map<MarginToken, string>([
  [0, "-m-0"],
  [1, "-m-1"],
  [2, "-m-2"],
  [3, "-m-3"],
  [4, "-m-4"],
  [5, "-m-5"],
  [6, "-m-6"],
  [7, "-m-7"],
  [8, "-m-8"],
]);

const mxMap = new Map<MarginToken, string>([
  [0, "-mx-0"],
  [1, "-mx-1"],
  [2, "-mx-2"],
  [3, "-mx-3"],
  [4, "-mx-4"],
  [5, "-mx-5"],
  [6, "-mx-6"],
  [7, "-mx-7"],
  [8, "-mx-8"],
]);

const myMap = new Map<MarginToken, string>([
  [0, "-my-0"],
  [1, "-my-1"],
  [2, "-my-2"],
  [3, "-my-3"],
  [4, "-my-4"],
  [5, "-my-5"],
  [6, "-my-6"],
  [7, "-my-7"],
  [8, "-my-8"],
]);

const mlMap = new Map<MarginToken, string>([
  [0, "-ml-0"],
  [1, "-ml-1"],
  [2, "-ml-2"],
  [3, "-ml-3"],
  [4, "-ml-4"],
  [5, "-ml-5"],
  [6, "-ml-6"],
  [7, "-ml-7"],
  [8, "-ml-8"],
]);

const mrMap = new Map<MarginToken, string>([
  [0, "-mr-0"],
  [1, "-mr-1"],
  [2, "-mr-2"],
  [3, "-mr-3"],
  [4, "-mr-4"],
  [5, "-mr-5"],
  [6, "-mr-6"],
  [7, "-mr-7"],
  [8, "-mr-8"],
]);

const mtMap = new Map<MarginToken, string>([
  [0, "-mt-0"],
  [1, "-mt-1"],
  [2, "-mt-2"],
  [3, "-mt-3"],
  [4, "-mt-4"],
  [5, "-mt-5"],
  [6, "-mt-6"],
  [7, "-mt-7"],
  [8, "-mt-8"],
]);

const mbMap = new Map<MarginToken, string>([
  [0, "-mb-0"],
  [1, "-mb-1"],
  [2, "-mb-2"],
  [3, "-mb-3"],
  [4, "-mb-4"],
  [5, "-mb-5"],
  [6, "-mb-6"],
  [7, "-mb-7"],
  [8, "-mb-8"],
]);
