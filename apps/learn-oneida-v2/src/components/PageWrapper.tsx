import { cn } from "@ukwehuwehneke/ohutsya";
import type { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={cn("flex", "flex-col", "gap-4", "mx-auto", "max-w-lg")}>
      {children}
    </div>
  );
}
