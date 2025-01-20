"use client";
import { PlayIcon } from "lucide-react";

export interface PlayButtonProps {
  "aria-label"?: string;
  filepath: string;
}

export function PlayButton({
  "aria-label": ariaLabel,
  filepath,
}: PlayButtonProps) {
  return (
    <button
      aria-label={ariaLabel ?? "Play audio"}
      className="border border-gray-500 rounded w-[24px] h-[24px] flex justify-center items-center shrink-0 inline-flex"
      onClick={() => new Audio(filepath).play()}
      type="button"
    >
      <PlayIcon size={16} />
    </button>
  );
}
