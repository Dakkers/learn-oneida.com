import { type PaddingProps, usePadding } from "../../utils/usePadding";

export interface BoxProps extends PaddingProps {
  children: React.ReactNode;
}

export function Box({ children, p, px, py, pl, pt, pr, pb }: BoxProps) {
  const padding = usePadding({ p, px, py, pl, pt, pr, pb });
  return <div className={padding}>{children}</div>;
}
