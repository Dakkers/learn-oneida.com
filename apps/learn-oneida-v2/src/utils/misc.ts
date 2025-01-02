import _ from "lodash";

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
  if (!Array.isArray(content) || content.length === 1) {
    return datum.audioFile;
  }

  const fileSplit = datum.audioFile.split("/");
  const filenameFull = fileSplit[fileSplit.length - 1];
  const [filename, ...extensions] = filenameFull.split(".");
  const ext = extensions.join(".");
  return `${fileSplit.slice(0, fileSplit.length - 1).join("/")}/${filename}_${index + 1}.${ext}`;
}
