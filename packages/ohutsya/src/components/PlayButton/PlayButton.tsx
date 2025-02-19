"use client";
import { PlayIcon } from "lucide-react";
import { arrayify } from "~/utils";
import { concatAudio } from "~/utils/audio";

export interface PlayButtonProps {
  "aria-label"?: string;
  filepath: string | string[];
  onClick?: () => void;
}

export function PlayButton({
  "aria-label": ariaLabel,
  filepath: _filepath,
  onClick,
}: PlayButtonProps) {
  const filepath = arrayify(_filepath);

  return (
    <button
      aria-label={ariaLabel ?? "Play audio"}
      className="border border-gray-500 rounded w-[24px] h-[24px] flex justify-center items-center shrink-0 inline-flex"
      onClick={() => {
        if (filepath.length > 1) {
          concatAudio(filepath).then(([result, instance]) => {
            instance.play(result);
          });
        } else {
          new Audio(filepath[0]).play();
        }
        onClick?.();
      }}
      type="button"
    >
      <PlayIcon size={16} />
    </button>
  );
}
