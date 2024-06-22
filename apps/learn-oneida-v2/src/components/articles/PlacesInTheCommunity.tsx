"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

export const DATA_PLACES_IN_COMMUNITY: Array<{
  key: string;
  en: string;
  on: string | string[];
}> = [
  { key: "ball_park", en: "at the ball park", on: "tsiʔ tehuttsihkwaʔéktaʔ" },
  {
    key: "band_office",
    en: "at the band office",
    on: "tsiʔ thatihashʌtákhwaʔ",
  },
  { key: "bank", en: "at the bank", on: "tsiʔ tyehwistayʌtákhwaʔ" },
  { key: "bar", en: "at the bar", on: "tsiʔ thatihnekila·thaʔ" },
  { key: "bridge", en: "at the bridge", on: "twaskó·huʔ" },
  {
    key: "casino",
    en: "at the casino / bingo",
    on: "tsiʔ tethatihyatuslayʌ́takhwaʔ",
  },
  {
    key: "car_repair",
    en: "at the car repair",
    on: "tsiʔ thuteʔslehtunyá·tha",
  },
  {
    key: "car_wash",
    en: "at the car wash",
    on: "tsiʔ tyuteʔslehtohaleʔtákhwa",
  },
  { key: "cemetery", en: "at the cemetery", on: "tsiʔ thuwatiyaʔtataʔastha" },
  { key: "church", en: "at the church", on: "tsiʔ tyutlʌnayʌtákhwaʔ" },
  {
    key: "community_centre",
    en: "community centre",
    on: "tsiʔ thutyaʔtaló·loks",
  },
  {
    key: "dentist",
    en: "at the dentist's office",
    on: "tsiʔ thuwatinawilotákhwaʔ",
  },
  { key: "doctor", en: "at the doctor's office", on: "latetsyʌ́htne·" },
  {
    key: "dump",
    en: "at the dump / landfill",
    on: ["tsiʔ yeyakotyéhtha", "tsiʔ yeyakotyéhtákhwaʔ"],
  },
  { key: "fairgrounds", en: "at the fairgrounds", on: "tsiʔ tethutkʌnyé·thaʔ" },
  { key: "fire_station", en: "at the fire station", on: "luhswaʔtné·ke" },
  {
    key: "fitness_centre",
    en: "at the fitness centre",
    on: "tsiʔ thutyaʔtahnilátsta",
  },
  {
    key: "gas_station",
    en: "at the gas station",
    on: "tsiʔ tyutye nahní·nuheʔ",
  },
  {
    key: "health_centre",
    en: "at the health centre",
    on: "tsiʔ thuwatitsyʌtákhwa",
  },
  { key: "hospital", en: "at the hospital", on: "tsiʔ teyutateshnyé·thaʔ" },
  { key: "hotel", en: "at the hotel", on: "tsiʔ teyetástaʔ" },
  { key: "jail", en: "at the jail", on: "tsiʔ tyutatenhotú·khwaʔ" },
  {
    key: "library",
    en: "at the library",
    on: ["tsiʔ tyewʌnahnótakhwaʔ", "tsiʔ thatihyatuslayʌtakhwaʔ"],
  },
  { key: "longhouse", en: "at the longhouse", on: "kanuhséhsneʔ" },
  { key: "mall", en: "at the mall", on: "tsiʔ tyutʌhninuheʔkó·" },
  { key: "drivein", en: "at the drive in", on: "tsiʔ twatasatálhaʔ" },
  {
    key: "movie_theatre",
    en: "at the movie theatre",
    on: "tsiʔ twatasatálhaʔ",
  },
  {
    key: "playground",
    en: "at the playground",
    on: "tsiʔ thutnutolyaʔ tákhwaʔ",
  },
  {
    key: "police_station",
    en: "at the police station",
    on: "shakotiyé·nahsne̲ʔ",
  },
  {
    key: "political_office",
    en: "at the political office",
    on: "tsiʔ tethatilihutá·kwas",
  },
  {
    key: "post_office",
    en: "at the post office",
    on: "tsiʔ tyehyatuhslayʌtakhwaʔ",
  },
  { key: "radio_station", en: "at the radio station", on: "tsiʔ thutlʌnóthaʔ" },
  { key: "reserve", en: "on the reserve", on: "ukwehuwé·ne" },
  { key: "restaurant", en: "at the restaurant", on: "tsiʔ tyutekhunyá·thaʔ" },
  { key: "school", en: "at the school", on: "tsiʔ tyutatlihunyʌní·thaʔ" },
  { key: "store", en: "at the store", on: "tsiʔ tyutʌhní·nuheʔ" },
  { key: "town", en: "in town", on: "kanatá·ke" },
];

export function PlacesInTheCommunityArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="places-in-community" level={level}>
        Places in the community
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_PLACES_IN_COMMUNITY}
      />
    </Flex>
  );
}
