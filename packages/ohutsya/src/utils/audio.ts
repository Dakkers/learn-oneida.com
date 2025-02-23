import Crunker from "crunker";

export async function concatAudio(
  filepath: string[],
  gap = 1,
): Promise<[AudioBuffer, Crunker]> {
  const crunker = new Crunker();

  return crunker
    .fetchAudio(...filepath)
    .then((buffers) =>
      crunker.concatAudio(
        buffers.map((buffer, i) =>
          i === 0 ? buffer : crunker.padAudio(buffer, 0, gap),
        ),
      ),
    )
    .then((result) => [result, crunker]);
}
