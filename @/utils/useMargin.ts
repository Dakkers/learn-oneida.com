import { cn } from "@/lib/utils";
import { SpacingToken } from "../design/primitives/types";
import { Responsive, responsiveClassName } from "@/utils/responsive";

export type MarginToken = Exclude<SpacingToken, "1px" | "2px"> | 16 | 32;

export type MarginProp = MarginToken | Responsive<MarginToken>;

export interface MarginProps {
  m?: MarginProp;
  mx?: MarginProp;
  my?: MarginProp;
  ml?: MarginProp;
  mr?: MarginProp;
  mb?: MarginProp;
  mt?: MarginProp;
}

export function useMargin({ m, mx, my, ml, mr, mb, mt }: MarginProps) {
  return cn(
    m && responsiveClassName(m, "m-"),
    mx && responsiveClassName(mx, "mx-"),
    my && responsiveClassName(my, "my-"),
    ml && responsiveClassName(ml, "ml-"),
    mr && responsiveClassName(mr, "mr-"),
    mb && responsiveClassName(mb, "mb-"),
    mt && responsiveClassName(mt, "mt-"),
  );
}

// For tailwind:

// m-0 sm:m-0 md:m-0 lg:m-0 xl:m-0
// m-1 sm:m-1 md:m-1 lg:m-1 xl:m-1
// m-2 sm:m-2 md:m-2 lg:m-2 xl:m-2
// m-3 sm:m-3 md:m-3 lg:m-3 xl:m-3
// m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4
// m-5 sm:m-5 md:m-5 lg:m-5 xl:m-5
// m-6 sm:m-6 md:m-6 lg:m-6 xl:m-6
// m-7 sm:m-7 md:m-7 lg:m-7 xl:m-7
// m-8 sm:m-8 md:m-8 lg:m-8 xl:m-8
// m-16 sm:m-16 md:m-16 lg:m-16 xl:m-16
// m-32 sm:m-32 md:m-32 lg:m-32 xl:m-32

// mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0
// mx-1 sm:mx-1 md:mx-1 lg:mx-1 xl:mx-1
// mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2
// mx-3 sm:mx-3 md:mx-3 lg:mx-3 xl:mx-3
// mx-4 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4
// mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5
// mx-6 sm:mx-6 md:mx-6 lg:mx-6 xl:mx-6
// mx-7 sm:mx-7 md:mx-7 lg:mx-7 xl:mx-7
// mx-8 sm:mx-8 md:mx-8 lg:mx-8 xl:mx-8
// mx-16 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16
// mx-32 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-32

// my-0 sm:my-0 md:my-0 lg:my-0 xl:my-0
// my-1 sm:my-1 md:my-1 lg:my-1 xl:my-1
// my-2 sm:my-2 md:my-2 lg:my-2 xl:my-2
// my-3 sm:my-3 md:my-3 lg:my-3 xl:my-3
// my-4 sm:my-4 md:my-4 lg:my-4 xl:my-4
// my-5 sm:my-5 md:my-5 lg:my-5 xl:my-5
// my-6 sm:my-6 md:my-6 lg:my-6 xl:my-6
// my-7 sm:my-7 md:my-7 lg:my-7 xl:my-7
// my-8 sm:my-8 md:my-8 lg:my-8 xl:my-8
// my-16 sm:my-16 md:my-16 lg:my-16 xl:my-16
// my-32 sm:my-32 md:my-32 lg:my-32 xl:my-32

// ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0
// ml-1 sm:ml-1 md:ml-1 lg:ml-1 xl:ml-1
// ml-2 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2
// ml-3 sm:ml-3 md:ml-3 lg:ml-3 xl:ml-3
// ml-4 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4
// ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5
// ml-6 sm:ml-6 md:ml-6 lg:ml-6 xl:ml-6
// ml-7 sm:ml-7 md:ml-7 lg:ml-7 xl:ml-7
// ml-8 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8
// ml-16 sm:ml-16 md:ml-16 lg:ml-16 xl:ml-16
// ml-32 sm:ml-32 md:ml-32 lg:ml-32 xl:ml-32

// mr-0 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0
// mr-1 sm:mr-1 md:mr-1 lg:mr-1 xl:mr-1
// mr-2 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-2
// mr-3 sm:mr-3 md:mr-3 lg:mr-3 xl:mr-3
// mr-4 sm:mr-4 md:mr-4 lg:mr-4 xl:mr-4
// mr-5 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5
// mr-6 sm:mr-6 md:mr-6 lg:mr-6 xl:mr-6
// mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-7
// mr-8 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8
// mr-16 sm:mr-16 md:mr-16 lg:mr-16 xl:mr-16
// mr-32 sm:mr-32 md:mr-32 lg:mr-32 xl:mr-32

// mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0
// mt-1 sm:mt-1 md:mt-1 lg:mt-1 xl:mt-1
// mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2
// mt-3 sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3
// mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4
// mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5
// mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6
// mt-7 sm:mt-7 md:mt-7 lg:mt-7 xl:mt-7
// mt-8 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8
// mt-16 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16
// mt-32 sm:mt-32 md:mt-32 lg:mt-32 xl:mt-32

// mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0
// mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1
// mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2
// mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3
// mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4
// mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5
// mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6
// mb-7 sm:mb-7 md:mb-7 lg:mb-7 xl:mb-7
// mb-8 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8
// mb-16 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16
// mb-32 sm:mb-32 md:mb-32 lg:mb-32 xl:mb-32
