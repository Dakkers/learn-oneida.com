"use client";
import type { ParadigmData } from "@/utils/paradigm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ukwehuwehneke/ohutsya";
import { Settings } from "lucide-react";

export interface ColumnVisibility {
  pronounOneida: boolean;
  pronounEnglish: boolean;
  translation: boolean;
}

export function SettingsMenu({
  colVisibility,
  data,
  showBreakdown = false,
  toggleBreakdown,
  toggleColumn,
}: {
  colVisibility: ColumnVisibility;
  data: ParadigmData;
  showBreakdown?: boolean;
  toggleBreakdown: (value: boolean) => void;
  toggleColumn: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="print:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {data.type !== "PI" && (
          <DropdownMenuItem onClick={() => toggleColumn("pronounEnglish")}>
            {colVisibility.pronounEnglish
              ? "Hide Pronoun (EN) column"
              : "Show Pronoun (EN) column"}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => toggleColumn("pronounOneida")}>
          {colVisibility.pronounOneida
            ? "Hide Pronoun column"
            : "Show Pronoun column"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleColumn("translation")}>
          {colVisibility.translation
            ? "Hide Translation column"
            : "Show Translation column"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleBreakdown(!showBreakdown)}>
          {showBreakdown ? "Hide text colors" : "Show text colors"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
