import { cn, MarginProps, responsiveClassName } from "../../utils";

export interface BleedProps extends MarginProps {
  children: React.ReactNode;
}

export function Bleed({ children, m, mx, my, ml, mt, mr, mb }: BleedProps) {
  return (
    <div
      className={cn(
        m && responsiveClassName(m, "-m-"),
        mx && responsiveClassName(mx, "-mx-"),
        my && responsiveClassName(my, "-my-"),
        ml && responsiveClassName(ml, "-ml-"),
        mr && responsiveClassName(mr, "-mr-"),
        mb && responsiveClassName(mb, "-mb-"),
        mt && responsiveClassName(mt, "-mt-"),
      )}
    >
      {children}
    </div>
  );
}
