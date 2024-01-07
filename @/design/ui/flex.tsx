import { cn } from "@/lib/utils";

type Gap =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8

type JustifyContent =
  | 'around'
  | 'between'
  | 'center'
  | 'end'
  | 'evenly'
  | 'start'
  | 'stretch'

type AlignItems =
  | 'baseline'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch'

interface FlexProps {
  align?: AlignItems;
  as?: 'div' | 'span';
  children: React.ReactNode;
  direction?: 'row' | 'column'
  gap?: Gap;
  justify?: JustifyContent;
}

export function Flex ({
  align,
  as: Tag = 'div',
  children,
  direction = 'row',
  gap,
  justify,
}: FlexProps) {
  return (
    <Tag className={cn(
      'flex',
      align && alignItemsMap[align],
      direction === 'column' ? 'flex-col' : 'flex-row',
      gap && gapMap.get(gap),
      justify && justifyContentMap[justify],
    )}>
      {children}
    </Tag>
  )
}

const gapMap = new Map([
  [0, 'gap-0'],
  [1, 'gap-1'],
  [2, 'gap-2'],
  [3, 'gap-3'],
  [4, 'gap-4'],
  [5, 'gap-5'],
  [6, 'gap-6'],
  [7, 'gap-7'],
  [8, 'gap-8'],
])

const justifyContentMap: Record<JustifyContent, string> = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
  stretch: 'justify-stretch',
} as const;

const alignItemsMap: Record<AlignItems, string> = {
  baseline: 'items-baseline',
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
  stretch: 'items-stretch',
} as const
