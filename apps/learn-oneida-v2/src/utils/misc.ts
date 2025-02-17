import type {
  BreakdownType,
  Pronoun,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";

export function getIndexSuffixforFile(
  filepath: string,
  items: unknown,
  index = 0,
) {
  if (
    !Array.isArray(items) ||
    items.length === 1 ||
    filepath.match(/_[0-9]+$/)
  ) {
    return "";
  }
  return `_${index + 1}`;
}

export function formatFileWithSuffix(
  filepath: string,
  items: unknown,
  index = 0,
) {
  const indexSuffix = getIndexSuffixforFile(filepath, items, index);
  if (!indexSuffix) {
    return filepath;
  }
  const fileSplit = filepath.split("/");
  const filenameFull = fileSplit[fileSplit.length - 1];
  const [filename, ...extensions] = filenameFull.split(".");
  const ext = extensions.join(".");
  return `${fileSplit.slice(0, fileSplit.length - 1).join("/")}/${filename}${indexSuffix}.${ext}`;
}

export function formatAudioFileWithSuffix(
  datum:
    | {
        audioFile: string;
        one: string | string[];
      }
    | {
        audioFile: string;
        translation: string | string[];
      },
  index = 0,
) {
  const content = "one" in datum ? datum.one : datum.translation;
  return formatFileWithSuffix(datum.audioFile, content, index);
}

export function standardizeAudioFileName(filepath: string) {
  return `/audio/${filepath.replace("/audio", "").replace(/^\//, "")}`;
}

export function getAudioFilenameForPronoun(
  pronoun: Pronoun,
  typeFallback?: BreakdownType,
) {
  return typeFallback !== "PO"
    ? pronoun
    : pronoun === "theyni"
      ? "us"
      : pronoun === "soni"
        ? "uni"
        : pronoun === "ms"
          ? "2m"
          : pronoun === "fs"
            ? "2f"
            : pronoun;
}
