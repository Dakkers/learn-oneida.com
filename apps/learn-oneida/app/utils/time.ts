import { translateNumber } from "./numbers";
import { unwhisperWord } from "./words";

const MIDNIGHT = "ahsútha";
const BEFORE = "tyono·lúhe";
const AFTER = "yotukóhtu";
const MINUTES = "nikahí·kalat";
const MORNING = "astéhtsiʔ";
const NOON = "ʌ́ti";
const HOUR = "niyohwistá·e";

export function doTheTranslate(hour: number, minute: number): string[] {
  if (hour === 0 && minute === 0) {
    return [MIDNIGHT];
  } else if (hour === 12 && minute === 0) {
    return ["ʌ́tyʌ ni·káleʔ", "ʌ́ti"];
  }

  const result = [];

  const hoursToConsider = minute >= 31 ? [hour + 1, hour] : [hour];
  for (const h of hoursToConsider) {
    const useBeforeHour = h > hour;
    const effectiveMinutes = useBeforeHour ? 60 - minute : minute;
    const effectiveHour = h % 24;

    const minutesText = (
      effectiveMinutes !== 0
        ? [
            translateNumber(effectiveMinutes.toString()),
            MINUTES,
            useBeforeHour ? BEFORE : AFTER,
          ]
        : []
    )
      .join(" ")
      .trim();

    const subresult = [minutesText];

    if (effectiveHour === 0) {
      subresult.push(MIDNIGHT);
    } else if (effectiveHour < 12) {
      subresult.push(translateNumber(effectiveHour.toString()), HOUR, MORNING);
    } else if (effectiveHour === 12) {
      subresult.push(NOON);
    } else {
      subresult.push(
        translateNumber((effectiveHour % 12).toString()),
        HOUR,
        AFTER,
        NOON,
      );
    }
    result.push(unwhisperWord(subresult.join(" ")).trim());
  }

  return result;

  // if (effectiveHour === 0) {
  //   if (effectiveMinutes === 0) {
  //     return MIDNIGHT
  //   } else {
  //     return [
  //       translateNumber(effectiveMinutes.toString()),
  //       MINUTES,
  //       (useBeforeHour ? BEFORE : AFTER),
  //       MIDNIGHT
  //     ].join(' ')
  //   }
  // }

  // if (hour === "12" && minute === "00") {
  //   return period === "AM" ? ["ahsútha"] : ['ʌ́tyʌ ni·káleʔ', "ʌ́ti"];
  // }

  // const hourPart = `${translateNumber(hour)} niyohwistá·e`;
  // const minutePart =
  //   minutesVal === 0 ? "" : `${translateNumber(minute)} nikahí·kalat yotukóhtu`;
  // const periodPart = period === "AM" ? "astéhtsiʔ" : "yotukóhtu ʌ́ti";

  // const result = [`${minutePart} ${hourPart} ${periodPart}`];

  // if (minutesVal >= 30) {
  //   const minutesDiff = 60 - minutesVal;
  //   const hourPart = `${translateNumber(
  //     (parseInt(hour) + 1).toString()
  //   )} niyohwistá·e`;
  //   const minutePart = `${translateNumber(
  //     minutesDiff.toString()
  //   )} nikahí·kalat tyono·lúhe`;
  //   const periodPart = period === "AM" ? "astéhtsiʔ" : "yotukóhtu ʌ́ti";
  //   result.push(`${minutePart} ${hourPart} ${periodPart}`);
  // }

  // return result.map((v) => unwhisperWord(v).trim());
}
