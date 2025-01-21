import { cn } from "@ukwehuwehneke/ohutsya";
import type { ReactNode } from "react";

export function PageWrapper({
  children,
  width,
}: { children: ReactNode; width?: "m" | "l" }) {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col gap-4 p-4 md:p-8",
        width === "l" ? "max-w-5xl" : "max-w-2xl",
      )}
    >
      {children}
    </div>
  );
}
