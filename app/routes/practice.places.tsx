import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_SEASONS } from "~/components/resources/Seasons";
import { Flower2Icon, LeafIcon, SnowflakeIcon, SunIcon } from "lucide-react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";

import BallParkImg from "../../public/images/places/ball_park.jpg";
import BankImg from "../../public/images/places/bank.jpg";
import BarImg from "../../public/images/places/bar.jpg";
import BridgeImg from "../../public/images/places/bridge.jpg";
import CasinoImg from "../../public/images/places/casino.jpg";
import CarRepairImg from "../../public/images/places/car_repair.jpg";
import CarWashImg from "../../public/images/places/car_wash.jpg";
import CemeteryImg from "../../public/images/places/cemetery.jpg";
import ChurchImg from "../../public/images/places/church.jpg";
import DentistImg from "../../public/images/places/dentist.jpg";
import DoctorImg from "../../public/images/places/doctor.jpg";
import DumpImg from "../../public/images/places/dump.jpg";
import FairgroundsImg from "../../public/images/places/fairground.jpg";
import FireStationImg from "../../public/images/places/fire_station.jpg";
import FitnessCentreImg from "../../public/images/places/gym.jpg";
import GasStationImg from "../../public/images/places/gas_station.jpg";
import HospitalImg from "../../public/images/places/hospital.jpg";
import HotelImg from "../../public/images/places/hotel.jpg";
import JailImg from "../../public/images/places/jail.jpg";
import LibraryImg from "../../public/images/places/library.jpg";
import MallImg from "../../public/images/places/mall.jpg";
import MovieTheatreImg from "../../public/images/places/movie_theater.jpg";
import PlaygroundImg from "../../public/images/places/playground.jpg";
import PoliceStationImg from "../../public/images/places/police_station.jpg";
import PostOfficeImg from "../../public/images/places/post_office.jpg";
import RestaurantImg from "../../public/images/places/restaurant.jpg";
import SchoolImg from "../../public/images/places/school.jpg";
import StoreImg from "../../public/images/places/store.jpg";
import TownImg from "../../public/images/places/town.jpg";
import { Button } from "@/design/primitives/button";
import { Box } from "@/design/components/box";
import _ from "lodash";
import { Notice } from "@/design/components/notice";
import { arrayify } from "~/utils";
import { DATA_PLACES_IN_COMMUNITY } from "~/components/resources/PlacesInTheCommunity";

export const meta: MetaFunction = () => {
  return [
    { title: "Places in the community" },
    {
      name: "description",
      content: "Pick the right Oneida word for the given picture.",
    },
  ];
};

const DATA = DATA_PLACES_IN_COMMUNITY.filter((datum) => ![
  'band_office',
  'community_centre',
  'health_centre',
  'longhouse',
  'drivein',
  'political_office',
  'radio_station',
  'reserve',
].includes(datum.key))

const IMAGE_MAP = {
  ball_park: BallParkImg,
  bank: BankImg,
  bar: BarImg,
  bridge: BridgeImg,
  casino: CasinoImg,
  car_repair: CarRepairImg,
  car_wash: CarWashImg,
  cemetery: CemeteryImg,
  church: ChurchImg,
  dentist: DentistImg,
  doctor: DoctorImg,
  dump: DumpImg,
  fairgrounds: FairgroundsImg,
  fire_station: FireStationImg,
  fitness_centre: FitnessCentreImg,
  gas_station: GasStationImg,
  hospital: HospitalImg,
  hotel: HotelImg,
  jail: JailImg,
  library: LibraryImg,
  mall: MallImg,
  movie_theatre: MovieTheatreImg,
  playground: PlaygroundImg,
  police_station: PoliceStationImg,
  post_office: PostOfficeImg,
  restaurant: RestaurantImg,
  school: SchoolImg,
  store: StoreImg,
  town: TownImg,
};

export default function PracticePlaces() {
  const [hasStarted, setHasStarted] = React.useState(false);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Places in the community
      </Heading>

      {hasStarted ? (
        <TheGame onFinish={() => setHasStarted(false)} />
      ) : (
        <Box>
          <Button onClick={() => setHasStarted(true)}>Start</Button>
        </Box>
      )}
    </Flex>
  );
}

function TheGame({ onFinish }) {
  const items = React.useMemo(() => _.shuffle(DATA).slice(0, 10), []);
  const [index, setIndex] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const currentItem = items[index];
  const isCorrect = selectedItem?.key === currentItem.key;
  const isFinalItem = index === 9;
  const thingsToShow = React.useMemo(() => {
    const result = [DATA.find((d) => d.key === currentItem.key)];
    for (const item of _.shuffle(DATA)) {
      if (item.key !== currentItem.key) {
        result.push(item);
      }
      if (result.length >= 4) {
        break;
      }
    }
    return _.shuffle(result);
  }, [currentItem]);
  const clickNext = React.useCallback(() => {
    if (isFinalItem) {
      onFinish();
    } else {
      setSelectedItem(null);
      setIndex(index + 1);
    }
  }, [index, isFinalItem, onFinish]);

  return (
    <Flex direction="column" gap={8}>
      <Flex align="center" gap={8}>
        <img
          src={IMAGE_MAP[currentItem.key]}
          alt={currentItem.en}
          style={{
            height: 600,
            width: 1000,
          }}
        />
        <Flex direction="column" gap={2}>
          {thingsToShow.map((item) => (
            <Button
              disabled={!!selectedItem}
              key={item.key}
              onClick={() => setSelectedItem(item)}
            >
              {arrayify(item.on)[0]}
            </Button>
          ))}
        </Flex>
      </Flex>

      {!!selectedItem && (
        <Flex align="center" gap={8}>
          <div
            style={{
              width: 1000,
            }}
          >
            <Notice intent={isCorrect ? "positive" : "negative"}>
              {isCorrect ? (
                <>
                  Correct! You selected <b>{arrayify(currentItem.on)[0]}</b>
                </>
              ) : (
                <>
                  Incorrect ☹️ The correct answer is{" "}
                  <b>{arrayify(currentItem.on)[0]}</b>
                </>
              )}
            </Notice>
          </div>

          <Button onClick={clickNext}>{isFinalItem ? "Exit" : "Next"}</Button>
        </Flex>
      )}
    </Flex>
  );
}
