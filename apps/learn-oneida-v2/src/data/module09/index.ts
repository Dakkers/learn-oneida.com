import type { BreakdownArray } from "@ukwehuwehneke/language-components";
import {
  flattenVerbDatum,
  type Module6VerbDatum,
} from "../module06/activeVerbsList";
import eatCmdData from "./eat-CMD";
import eatDefData from "./eat-DEF";
import eatFutData from "./eat-FUT";
import eatHabData from "./eat-HAB";
import eatIfutData from "./eat-IFUT";
import eatPfvData from "./eat-PFV";
import type { StandardEntry } from "@/components";
import type { ModernEntry } from "@/utils/types";

export interface Module9FoodDatum extends ModernEntry {
  singular: StandardEntry | null;
  plural: StandardEntry | null;
}

export interface Module9FoodCharacteristicDatum extends ModernEntry {
  usage: StandardEntry;
}

export function createModule9FoodsList(): Module9FoodDatum[] {
  const objApple: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["apple"],
    key: "Apple",
    singular: [
      {
        one: ["swahyo·wáne"],
      },
    ],
    plural: [
      {
        one: ["swahyo·wánʌseʔ"],
      },
    ],
  };
  const objBreakfast: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["(eating) breakfast"],
    key: "Breakfast",
    singular: [
      {
        one: ["astetsi i·kéks"],
      },
    ],
    plural: null,
  };
  const objBagel: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["bagel"],
    key: "Bagel",
    singular: [
      {
        one: ["yonaʔtalaká·luteʔ"],
      },
    ],
    plural: [
      {
        one: ["yonaʔtlakalu·tú"],
      },
    ],
  };
  const objBanana: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["banana"],
    key: "Banana",
    singular: [
      {
        one: ["teyotahyá·ktu"],
      },
    ],
    plural: [
      {
        one: ["e·só· teyotahyá·ktu"],
      },
    ],
  };
  const objBean: Module9FoodDatum = {
    dict: [652, 902],
    root: ["-saheʔt-"],
    en: ["dried beans"],
    key: "Bean",
    singular: [
      {
        one: ["osahé·ta̲ʔ"],
      },
    ],
    plural: [
      {
        en: "Variety of beans",
        one: ["osahé·taʔshúha̲"],
      },
    ],
  };
  const objGreenBean: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["green string bean", "yellow wax bean"],
    key: "GreenBean",
    singular: [
      {
        one: ["ohyóhtsliʔ"],
      },
    ],
    plural: [
      {
        one: ["e·só· ohyóhtsliʔshúha̲"],
      },
    ],
  };
  const objBeanYellowEye: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["yellow eye bean"],
    key: "BeanYellowEye",
    singular: [
      {
        one: ["otsí·nkwalaʔ oká·laʔ osahé·ta̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["otsí·nkwalaʔ oká·laʔ osahe·taʔshúha̲"],
      },
    ],
  };
  const objBeanSoup: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["bean soup"],
    key: "BeanSoup",
    singular: [
      {
        one: ["osahé·taʔ ohnekákliʔ"],
      },
    ],
    plural: [
      {
        one: ["osahé·taʔ ohnekákliʔshúha"],
      },
    ],
  };
  const objBeet: Module9FoodDatum = {
    dict: [904],
    root: ["-htehl-"],
    en: ["beet"],
    key: "Beet",
    singular: [
      {
        one: ["onikwʌhtalaʔ nikahtehló·tʌ"],
      },
    ],
    plural: [
      {
        one: ["onikwʌhtalaʔ nikahtehló·tʌhse̲ʔ"],
      },
    ],
  };
  const objBlackberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["blackberry"],
    key: "Blackberry",
    singular: [
      {
        one: ["shá·yese̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["shá·yeseʔ kahikokúha̲"],
      },
    ],
  };
  const objBlackRaspberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["black raspberry", "black cap"],
    key: "BlackRaspberry",
    singular: [
      {
        one: ["teyothutá·ktu"],
      },
      {
        one: ["teyothʌtá·ktu"],
      },
    ],
    plural: [
      {
        one: ["teyothʌʔtaʔktúni"],
      },
    ],
  };
  const objBlueberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["blueberry"],
    key: "Blueberry",
    singular: [
      {
        one: ["otstókhwiʔ"],
      },
      {
        one: ["otstókwiʔ"],
      },
    ],
    plural: [
      {
        one: ["otstokhwiʔshúha̲"],
      },
    ],
  };
  const objBread: Module9FoodDatum = {
    dict: [915],
    root: ["-naʔtal-"],
    en: ["bread"],
    key: "Bread",
    singular: [
      {
        one: ["kaná·talok"],
      },
    ],
    plural: [
      {
        en: "Variety of breads",
        one: ["kaná·talokokúha̲"],
      },
    ],
  };
  const objBreadBaked: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["baked bread"],
    key: "BreadBaked",
    singular: [
      {
        one: ["watná·talute̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["watnaʔtalutʔthokúha̲"],
      },
    ],
  };
  const objBreadCrust: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["bread crust"],
    key: "BreadCrust",
    singular: [
      {
        one: ["oʔnuwa·tsíste̲ʔ"],
      },
      {
        one: ["oʔnowa·tsíste̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["oʔnuwatsistokúha̲"],
      },
    ],
  };
  const objBreadFried: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["frybread"],
    key: "BreadFried",
    singular: [
      {
        one: ["kʌyé·ke watnaʔtalu·tákwe̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["yaweʔtowanʌ́kʌyé·ke watnaʔtalu·tákwe̲ʔ"],
      },
    ],
  };
  const objBroccoli: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["broccoli"],
    key: "Broccoli",
    singular: [
      {
        one: ["otsiʔtsyakáhte̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["otsiʔtsyakaʔteʔshúha̲"],
      },
    ],
  };
  const objButter: Module9FoodDatum = {
    dict: [776],
    root: ["-wistohsl-"],
    en: ["butter"],
    key: "Butter",
    singular: [
      {
        one: ["owistóhseli̲ʔ"],
      },
      {
        one: ["owistóhsliʔ"],
      },
    ],
    plural: [
      {
        one: ["tsyohsó·kwes onuʔusliʔshúha̲"],
      },
    ],
  };
  const objButternutSquash: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["butternut squash"],
    key: "ButternutSquash",
    singular: [
      {
        one: ["tsyohsó·kwes onuʔúsliʔ"],
      },
    ],
    plural: [
      {
        one: ["tsyohsó·kwes onuʔusliʔshúha̲"],
      },
    ],
  };
  const objCabbage: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cabbage"],
    key: "Cabbage",
    singular: [
      {
        one: ["onlahtakáhtuʔ onu·tsi ̲́"],
      },
    ],
    plural: [
      {
        one: ["onlahtakáhtuʔ onutsiʔshúha̲"],
      },
    ],
  };
  const objCarrot: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["carrot"],
    key: "Carrot",
    singular: [
      {
        one: ["katsiʔnkwalaʔhúʔtsiʔ nikahtehló·tʌ̲"],
      },
    ],
    plural: [
      {
        one: ["katsiʔnkwalaʔhúʔtsiʔ nikahtehló·tʌhse̲ʔ"],
      },
    ],
  };
  const objCatFood: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cat food"],
    key: "CatFood",
    singular: [
      {
        one: ["takóhs a·ókhwa̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["takóhs aotikhwaʔshúha̲"],
      },
    ],
  };
  const objCelery: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["celery"],
    key: "Celery",
    singular: null,
    plural: [
      {
        one: ["ohstawinaʔshúha̲"],
      },
    ],
  };
  const objCheese: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cheese"],
    key: "Cheese",
    singular: [
      {
        one: ["yonekwalahnilú"],
      },
    ],
    plural: null,
  };
  const objCherry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cherry"],
    key: "Cherry",
    singular: [
      {
        one: ["é·li"],
      },
    ],
    plural: [
      {
        one: ["eliʔshúha̲"],
      },
    ],
  };
  const objCherryWildBlack: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["wild black cherry"],
    key: "CherryWildBlack",
    singular: [
      {
        one: ["elikkó·"],
      },
    ],
    plural: [
      {
        one: ["elikkowátshu"],
      },
    ],
  };
  const objChicken: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["chicken meat"],
    key: "Chicken",
    singular: [
      {
        one: ["kitkit oʔwálu̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["kitkit oʔwalaʔshúha̲"],
      },
    ],
  };
  const objChineseFood: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["chinese food"],
    key: "ChineseFood",
    singular: [
      {
        one: ["tehatikahlati·lúteʔ laotíkhwaʔ"],
      },
    ],
    plural: [
      {
        one: ["tehatikahlati·lúteʔ laotikhwaʔshúha̲"],
      },
    ],
  };
  const objCoffee: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["coffee"],
    key: "Coffee",
    singular: [
      {
        one: ["ohsaheʔtákliʔ"],
      },
    ],
    plural: [
      {
        one: ["ohsaheʔtakliʔokúha̲"],
      },
    ],
  };
  const objCookie: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cookie"],
    key: "Cookie",
    singular: [
      {
        one: ["khéksu·wé̲·"],
      },
    ],
    plural: [
      {
        one: ["kheksuweʔshúha̲"],
      },
    ],
  };
  const objEgg: Module9FoodDatum = {
    dict: [],
    root: ["-ʔnhuhs-"],
    en: ["egg"],
    key: "Egg",
    singular: [
      {
        one: ["oʔnhúhsaʔ"],
      },
    ],
    plural: [
      {
        one: ["oʔnhúhsaʔshúha̲"],
      },
    ],
  };
  const objFish: Module9FoodDatum = {
    dict: [],
    root: ["-itsy-"],
    en: ["fish"],
    key: "Fish",
    singular: [
      {
        one: ["kʌ́tsiʔ"],
      },
    ],
    plural: [
      {
        en: "Variety of fish",
        one: ["kʌtsyaʔshúha̲"],
      },
    ],
  };
  const objFood: Module9FoodDatum = {
    dict: [],
    root: ["-khw-"],
    en: ["food (ready to eat)"],
    key: "Food",
    singular: [
      {
        one: ["kákhwaʔ"],
      },
    ],
    plural: [
      {
        en: "Prepared meals",
        one: ["kákhwaʔshúha"],
      },
    ],
  };
  const objFruit: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["fruit", "berries"],
    key: "Fruit",
    singular: [
      {
        one: ["káhik"],
      },
    ],
    plural: [
      {
        one: ["káhikhokúha̲"],
      },
    ],
  };
  const objFruitCore: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["fruit core"],
    key: "FruitCore",
    singular: [
      {
        one: ["ohá·ta̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["ohataʔokúha̲"],
      },
    ],
  };
  const objCorn: Module9FoodDatum = {
    dict: [],
    root: ["-nʌhst-"],
    en: ["corn"],
    key: "Corn",
    singular: [
      {
        one: ["o·nʌ́hste̲ʔ"],
      },
    ],
    plural: [
      {
        en: "Variety of corn",
        one: ["o·nʌ́hste̲ʔshúha̲"],
      },
    ],
  };
  const objCornSoup: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["corn soup"],
    key: "CornSoup",
    singular: [
      {
        one: ["ola·ná̲·"],
      },
    ],
    plural: [
      {
        one: ["olanaʔshúha̲"],
      },
    ],
  };
  const objFlintCorn: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["flint corn"],
    key: "FlintCorn",
    singular: [
      {
        one: ["onʌstaʔu·wé·"],
      },
    ],
    plural: [
      {
        one: ["onʌstaʔuweʔokúha̲"],
      },
    ],
  };
  const objCornBread: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["corn bread"],
    key: "CornBread",
    singular: [
      {
        one: ["kanʌstóhale̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["kanʌstohaleʔokúha̲"],
      },
    ],
  };
  const objCornDried: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["dried corn"],
    key: "CornDried",
    singular: [
      {
        one: ["kanʌstaʔthá·tu"],
      },
      {
        one: ["kanʌhʌ·taʔ"],
      },
    ],
    plural: [
      {
        one: ["kanʌstaʔthaʔthokúha̲"],
      },
      {
        one: ["kanʌhʌtaʔokúha̲"],
      },
    ],
  };
  const objCornMeal: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["corn meal"],
    key: "CornMeal",
    singular: [
      {
        one: ["osekwálhaʔ"],
      },
    ],
    plural: [
      {
        one: ["osekwalhaʔshúha̲"],
      },
    ],
  };
  const objCornSweet: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sweet corn"],
    key: "CornSweet",
    singular: [
      {
        one: ["o·nʌ́steʔ"],
      },
    ],
    plural: [
      {
        one: ["onʌstaseʔshúha̲"],
      },
    ],
  };
  const objCracker: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cracker"],
    key: "Cracker",
    singular: [
      {
        one: ["yonaʔtalastáthʌ"],
      },
    ],
    plural: [
      {
        one: ["yonaʔtalastathʌ́hslu"],
      },
    ],
  };
  const objCucumber: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["cucumber", "squash"],
    key: "Cucumber",
    singular: [
      {
        one: ["onuʔúsliʔ"],
      },
    ],
    plural: [
      {
        one: ["onuʔúsliʔshúhaʔ"],
      },
    ],
  };
  const objDogFood: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["dog food"],
    key: "DogFood",
    singular: [
      {
        one: ["é·lhal a·ókhwa̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["é·lhal aotikhwaʔshúha"],
      },
    ],
  };
  const objDough: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["dough", "cream", "paste"],
    key: "Dough",
    singular: [
      {
        one: ["oshé·lhaʔ"],
      },
      {
        one: ["ohshé·lheʔ"],
      },
      {
        one: ["ohshé·lhiʔ"],
      },
    ],
    plural: [
      {
        one: ["ohshelhiʔshúha̲"],
      },
    ],
  };
  const objDoughnut: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["doughnut"],
    key: "Doughnut",
    singular: [
      {
        one: ["oyá·n"],
      },
    ],
    plural: [
      {
        one: ["yaweʔtowanʌ́oyá·n"],
      },
    ],
  };
  const objElderberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["elderberry"],
    key: "Elderberry",
    singular: [
      {
        one: ["ala·sék"],
      },
    ],
    plural: [
      {
        one: ["alasekokúha̲"],
      },
    ],
  };
  const objEggshell: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["eggshell"],
    key: "Eggshell",
    singular: [
      {
        one: ["ola·wísteʔ"],
      },
    ],
    plural: [
      {
        one: ["olawisteʔokúha̲"],
      },
    ],
  };
  const objFlour: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["flour"],
    key: "Flour",
    singular: [
      {
        one: ["othé·tsliʔ"],
      },
    ],
    plural: [
      {
        one: ["otheʔsliʔshúha̲"],
      },
    ],
  };
  const objFriedFood: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["fried food"],
    key: "FriedFood",
    singular: [
      {
        one: ["kʌyé·ke kalihtu kakhwaʔ"],
      },
    ],
    plural: [
      {
        one: ["kʌyé·ke kalihtu kakhwaʔshúha̲"],
      },
    ],
  };
  const objBakedPotato: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["baked potato", "fried potato"],
    key: "BakedPotato",
    singular: [
      {
        one: ["wathnanaʔtúta·kwe̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["wathnanaʔtutahkweʔokúha̲"],
      },
    ],
  };
  const objFruitJuice: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["fruit juice", "apple cider", "strawberry drink"],
    key: "FruitJuice",
    singular: [
      {
        one: ["tewahyolala·kú"],
      },
      {
        one: ["ohyákliʔ"],
      },
    ],
    plural: [
      {
        one: ["tewahyalolalakuʔokúha̲"],
      },
      {
        one: ["ohyakliʔshúha̲"],
      },
    ],
  };
  const objGrape: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["grape"],
    key: "Grape",
    singular: [
      {
        one: ["oʔnʌhalhkó·"],
      },
    ],
    plural: [
      {
        one: ["oʔnʌhalhkoʔwátshu"],
      },
    ],
  };
  const objGreenVegetable: Module9FoodDatum = {
    dict: [],
    root: ["-hut-"],
    en: ["greens", "vegetables"],
    key: "GreenVegetable",
    singular: [
      {
        one: ["ohu·tá·"],
      },
    ],
    plural: [
      {
        one: ["ohu·tá·shúha̲"],
      },
    ],
  };
  const objGroceries: Module9FoodDatum = {
    dict: [],
    root: ["-atʌnaʔtsl-"],
    en: ["groceries", "lunch"],
    key: "Groceries",
    singular: [
      {
        en: "(implied pluralization)",
        one: ["atʌná·tsliʔ"],
      },
    ],
    plural: null,
  };
  const objMeat: Module9FoodDatum = {
    dict: [],
    root: ["-ʔwahl-"],
    en: ["meat"],
    key: "Meat",
    singular: [
      {
        en: "(implied pluralization)",
        one: ["oʔwá·luʔ"],
      },
    ],
    plural: null,
  };
  const objGravy: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["gravy", "grease", "oil", "fat"],
    key: "Gravy",
    singular: [
      {
        one: ["kʌ·yé·"],
      },
    ],
    plural: null,
  };
  const objHamburger: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["hamburger", "ground meat"],
    key: "Hamburger",
    singular: [
      {
        one: ["tekaʔwahlahlíhtu"],
      },
    ],
    plural: [
      {
        one: ["awʌhetshaʔshúha̲"],
      },
    ],
  };
  const objHotdog: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["hotdog", "baloney", "sausage"],
    key: "Hotdog",
    singular: [
      {
        one: ["awʌhétsha̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["awʌhetshaʔshúha̲"],
      },
    ],
  };
  const objIceCream: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["ice cream"],
    key: "IceCream",
    singular: [
      {
        one: ["yosheʔlhawísto̲"],
      },
    ],
    plural: [
      {
        one: ["yoʔshelhawistoʔokúha̲"],
      },
    ],
  };
  const objJam: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["jam", "preserve"],
    key: "Jam",
    singular: [
      {
        one: ["watahyalíhtu"],
      },
    ],
    plural: [
      {
        one: ["watahyalihtáni"],
      },
    ],
  };
  const objJunkFood: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["junk food"],
    key: "JunkFood",
    singular: [
      {
        one: ["kakhwáksʌ"],
      },
    ],
    plural: [
      {
        one: ["kakhwaksʌʔokúha̲"],
      },
    ],
  };
  const objLard: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["lard", "animal fat"],
    key: "Lard",
    singular: [
      {
        one: ["oyá·taku"],
      },
      {
        one: ["oyaʔtakʌ·láteʔ"],
      },
    ],
    plural: [
      {
        one: ["oyaʔtakuʔshúha̲"],
      },
      {
        one: ["oyaʔtakʌlateʔokúha̲"],
      },
    ],
  };
  const objLasagna: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["lasagna"],
    key: "Lasagna",
    singular: [
      {
        one: ["tekalakwistá·sleʔ"],
      },
    ],
    plural: [
      {
        one: ["tekalakwistasleʔokúha̲"],
      },
    ],
  };
  const objLemon: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["lemon", "sour fruit"],
    key: "Lemon",
    singular: [
      {
        one: ["teyohyahyó·tsis"],
      },
    ],
    plural: [
      {
        one: ["teyohyahyoʔtsistáni"],
      },
    ],
  };
  const objLettuce: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["lettuce"],
    key: "Lettuce",
    singular: [
      {
        one: ["onlahtakáhtuʔ"],
      },
      {
        one: ["untlahtakáhtuʔ"],
      },
    ],
    plural: [
      {
        one: ["onlahtakahtuʔokúha̲"],
      },
    ],
  };
  const objLime: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["lime"],
    key: "Lime",
    singular: [
      {
        one: ["teyohyahyó·tsis awʌ·la"],
      },
    ],
    plural: [
      {
        one: ["teyohyahyoʔtsistáni awʌ·la"],
      },
    ],
  };
  const objLiquor: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["liquor", "wine", "beer"],
    key: "Liquor",
    singular: [
      {
        one: ["ohne·ká̲·"],
      },
    ],
    plural: [
      {
        one: ["ohnekaʔokúha̲"],
      },
    ],
  };
  const objMacaroni: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["macaroni"],
    key: "Macaroni",
    singular: null,
    plural: [
      {
        one: ["oholoʔtaʔshúha"],
      },
    ],
  };
  const objMapleSyrup: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["maple syrup"],
    key: "MapleSyrup",
    singular: [
      {
        one: ["wáhtaʔ ohsés"],
      },
    ],
    plural: null,
  };
  const objMilk: Module9FoodDatum = {
    dict: [],
    root: ["-nuʔt-"],
    en: ["milk"],
    key: "Milk",
    singular: [
      {
        one: ["onú·ta̲ʔ"],
      },
    ],
    plural: [
      {
        en: "lots of milk",
        one: ["kwah yaʔtekanútake̲ʔ"],
      },
    ],
  };
  const objMushroom: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["mushroom"],
    key: "Mushroom",
    singular: [
      {
        one: ["onláhsaʔ"],
      },
    ],
    plural: [
      {
        one: ["onláhsaʔshuha̲"],
      },
    ],
  };
  const objNut: Module9FoodDatum = {
    dict: [406, 1110],
    root: [],
    en: ["nut"],
    key: "Nut",
    singular: [
      {
        one: ["ohsó·kwaʔ"],
      },
    ],
    plural: [
      {
        one: ["ohsó·kwaʔshúha̲"],
      },
    ],
  };
  const objOatmeal: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["oatmeal", "cornmush", "pudding"],
    key: "Oatmeal",
    singular: [
      {
        one: ["onu·tála̲ʔ"],
      },
      {
        one: ["ohshélha̲"],
      },
    ],
    plural: [
      {
        one: ["onutalaʔshúhá̲"],
      },
      {
        one: ["ohshelhaʔshúha̲"],
      },
    ],
  };
  const objOnion: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["onion (bulb)"],
    key: "Onion",
    singular: [
      {
        one: ["á·nuk"],
      },
    ],
    plural: [
      {
        one: ["aʔnukokúha̲"],
      },
    ],
  };
  const objOnionLeek: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["onion", "leek"],
    key: "OnionLeek",
    singular: [
      {
        one: ["aʔnukkó·"],
      },
    ],
    plural: [
      {
        one: ["aʔnukkowátshu"],
      },
    ],
  };
  const objOrange: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["orange"],
    key: "Orange",
    singular: [
      {
        one: ["katsí·nkwalaʔhutsi niwahyó·tʌ̲"],
      },
    ],
    plural: [
      {
        one: ["katsí·nkwalaʔhutsi niwahyó·tʌhse̲ʔ"],
      },
    ],
  };
  const objPancake: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pancake"],
    key: "Pancake",
    singular: [
      {
        one: ["onikóksliʔ"],
      },
    ],
    plural: [
      {
        one: ["onikoksliʔshúha̲"],
      },
    ],
  };
  const objPea: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["green pea"],
    key: "Pea",
    singular: [
      {
        one: ["teyotshaheʔtakweʔnu·ni"],
      },
    ],
    plural: [
      {
        one: ["teyotshaheʔtakweʔnunyáni"],
      },
    ],
  };
  const objPeach: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["peach"],
    key: "Peach",
    singular: [
      {
        one: ["yonuhwé·lhoteʔ káhik"],
      },
    ],
    plural: [
      {
        one: ["yonuhwé·lhoteʔ kahikʔokúha̲"],
      },
    ],
  };
  const objPeanutButter: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["peanut butter"],
    key: "PeanutButter",
    singular: [
      {
        one: ["kashokwalíhtu"],
      },
      {
        one: ["ohsó·kwaʔ kaselhúni̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["kahsokwalihtuʔokúha̲"],
      },
    ],
  };
  const objPear: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pear"],
    key: "Pear",
    singular: [
      {
        one: ["yotsheʔtʌ́·tuhe̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["yotsheʔtʌtuheʔtáni"],
      },
    ],
  };
  const objPeeling: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["peeling (egg, potato, cucumber)"],
    key: "Peeling",
    singular: [
      {
        one: ["olá·wiste̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["olaʔwisteʔokúha̲"],
      },
    ],
  };
  const objPepper: Module9FoodDatum = {
    dict: [],
    root: ["-nuhkwaʔtsl-"],
    en: ["pepper", "medicine"],
    key: "Pepper",
    singular: [
      {
        one: ["onúhkwaʔt"],
      },
    ],
    plural: [
      {
        one: ["onúhkwaʔthokúha̲"],
      },
    ],
  };
  const objPickle: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pickle"],
    key: "Pickle",
    singular: [
      {
        one: ["teyonuʔuslahyó·tsis"],
      },
    ],
    plural: [
      {
        one: ["teyonuʔuslahyoʔtsistáni"],
      },
    ],
  };
  const objPie: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pie"],
    key: "Pie",
    singular: [
      {
        one: ["wá·yat"],
      },
    ],
    plural: [
      {
        one: ["wa·yathokúha̲"],
      },
    ],
  };
  const objPizza: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pizza"],
    key: "Pizza",
    singular: [
      {
        one: ["tekanaʔtalakwʌhtu"],
      },
    ],
    plural: [
      {
        one: ["tekanaʔtalakwʌhtutáni"],
      },
    ],
  };
  const objPlum: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["wild plum"],
    key: "Plum",
    singular: [
      {
        one: ["wíhsuʔ"],
      },
    ],
    plural: [
      {
        one: ["wihsuʔokúha̲"],
      },
    ],
  };
  const objPotato: Module9FoodDatum = {
    dict: [],
    root: ["-hnanaʔt-"],
    en: ["potatoes"],
    key: "Potato",
    singular: null,
    plural: [
      {
        en: "implied pluralization",
        one: ["ohnaná·ta̲ʔ"],
      },
    ],
  };
  const objPopcorn: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["popcorn"],
    key: "Popcorn",
    singular: null,
    plural: [
      {
        one: ["watnʌhstatákwas"],
      },
    ],
  };
  const objMashedPotato: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["mashed potato"],
    key: "MashedPotato",
    singular: [
      {
        one: ["tekahnanatahlíhtu"],
      },
    ],
    plural: [
      {
        one: ["tekahnanatahlihtáni"],
      },
    ],
  };
  const objPumpkin: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["pumpkin", "watermelon"],
    key: "Pumpkin",
    singular: [
      {
        one: ["onuʔuslaʔkó·"],
      },
    ],
    plural: [
      {
        one: ["onuʔuslaʔwátshu"],
      },
    ],
  };
  const objRadish: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["radish"],
    key: "Radish",
    singular: [
      {
        one: ["ohtehlakáhtuʔ"],
      },
    ],
    plural: [
      {
        one: ["ohtehlakahtaʔshúha̲"],
      },
    ],
  };
  const objRaspberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["raspberry"],
    key: "Raspberry",
    singular: [
      {
        one: ["tsyohtahkwaká·yu"],
      },
    ],
    plural: [
      {
        one: ["tsyohtahkwakayuʔshúha̲"],
      },
    ],
  };
  const objRhubarb: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["rhubarb"],
    key: "Rhubarb",
    singular: [
      {
        one: ["teyostawinahyó·tsis"],
      },
    ],
    plural: [
      {
        one: ["teyohstawinahyotsistáni"],
      },
    ],
  };
  const objRice: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["rice"],
    key: "Rice",
    singular: null,
    plural: [
      {
        one: ["watnʌʔú·kwas"],
      },
      {
        one: ["watnʌʔʌkwáts"],
      },
    ],
  };
  const objRootVegetable: Module9FoodDatum = {
    dict: [],
    root: ["-htehl-"],
    en: ["root vegetable"],
    key: "RootVegetable",
    singular: [
      {
        one: ["ohté·la̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["ohté·laʔshúha̲"],
      },
    ],
  };
  const objSaladBean: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["bean salad"],
    key: "SaladBean",
    singular: [
      {
        one: ["tekasaheʔtayéstu"],
      },
    ],
    plural: [
      {
        one: ["tekasaheʔtayestáni"],
      },
    ],
  };
  const objSaladEgg: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["egg salad"],
    key: "SaladEgg",
    singular: [
      {
        one: ["tekaʔnhuhsayéhstu"],
      },
    ],
    plural: [
      {
        one: ["tekaʔnhuhsayestáni"],
      },
    ],
  };
  const objSaladFruit: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["fruit salad"],
    key: "SaladFruit",
    singular: [
      {
        one: ["tewahyayéhstu"],
      },
    ],
    plural: [
      {
        one: ["tewahyayestáni"],
      },
    ],
  };
  const objSaladGarden: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["garden salad"],
    key: "SaladGarden",
    singular: [
      {
        one: ["tekanlahtayéhstu"],
      },
    ],
    plural: [
      {
        one: ["tekanlahtayestáni"],
      },
    ],
  };
  const objSaladPotato: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["potato salad"],
    key: "SaladPotato",
    singular: [
      {
        one: ["tekahnanaʔtayéhstu"],
      },
    ],
    plural: [
      {
        one: ["tekahnanaʔtayestáni"],
      },
    ],
  };
  const objSalt: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["salt"],
    key: "Salt",
    singular: null,
    plural: [
      {
        one: ["tyohyó·tsis"],
      },
    ],
  };
  const objSaltedPork: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["salted pork"],
    key: "SaltedPork",
    singular: [
      {
        one: ["teyoʔwahlahyó·tsis"],
      },
    ],
    plural: [
      {
        one: ["teyoʔwahlahyoʔtsistáni"],
      },
    ],
  };
  const objSandwich: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sandwich"],
    key: "Sandwich",
    singular: [
      {
        one: ["tekanaʔtalá·sleʔ"],
      },
    ],
    plural: [
      {
        one: ["tekanaʔtalasleʔokúha̲"],
      },
    ],
  };
  const objSandwichEgg: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["egg sandwich"],
    key: "SandwichEgg",
    singular: [
      {
        one: ["kaʔnhuhsó·lu"],
      },
    ],
    plural: [
      {
        one: ["kaʔnhuhsolókhu"],
      },
    ],
  };
  const objSconedog: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sconedog"],
    key: "Sconedog",
    singular: [
      {
        one: ["kahetsholu"],
      },
    ],
    plural: [
      {
        one: ["kahetsholókhu"],
      },
    ],
  };
  const objSoda: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["soda", "pop", "koolaid"],
    key: "Soda",
    singular: [
      {
        one: ["kahnekákuʔ"],
      },
    ],
    plural: [
      {
        one: ["kahnekakeʔshúha̲"],
      },
    ],
  };
  const objSoup: Module9FoodDatum = {
    dict: [388, 921],
    root: ["-hnekakliʔtsl-"],
    en: ["soup", "broth"],
    key: "Soup",
    singular: [
      {
        one: ["ohnekákeli̲ʔ"],
      },
      {
        one: ["ohnekákliʔ"],
      },
    ],
    plural: [
      {
        one: ["ohnekaklíʔshúha̲"],
      },
    ],
  };
  const objSpaghetti: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["spaghetti"],
    key: "Spaghetti",
    singular: null,
    plural: [
      {
        one: ["aʔahsliyetaʔshúha̲ʔ"],
      },
    ],
  };
  const objSpice: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["spice"],
    key: "Spice",
    singular: [
      {
        one: ["yutekhwakuʔuhstákhwaʔ"],
      },
    ],
    plural: [
      {
        one: ["yutekhwakuʔuhstakhwaʔshúha̲"],
      },
    ],
  };
  const objStrawberry: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["strawberry"],
    key: "Strawberry",
    singular: [
      {
        one: ["awʌ́hihte̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["awʌhihthokúha̲"],
      },
    ],
  };
  const objSquash: Module9FoodDatum = {
    dict: [],
    root: ["-nuʔusl-"],
    en: ["squash"],
    key: "Squash",
    singular: [
      {
        one: ["onuʔúsliʔ"],
      },
    ],
    plural: [
      {
        one: ["onuʔúsliʔshúha̲"],
      },
    ],
  };
  const objSugar: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sugar"],
    key: "Sugar",
    singular: null,
    plural: [
      {
        en: "implied pluralization",
        one: ["onuʔtakehli̲ʔ"],
      },
      {
        en: "implied pluralization",
        one: ["onuʔtákliʔ"],
      },
    ],
  };
  const objSugarSubstitute: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sugar substitute"],
    key: "SugarSubstitute",
    singular: [
      {
        one: ["teskyanutakliʔtslatyelʌ́"],
      },
    ],
    plural: [
      {
        one: ["teskyanutakliʔtslatyelʌʔshúha̲"],
      },
    ],
  };
  const objSweetTreat: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["sweet treat"],
    key: "SweetTreat",
    singular: [
      {
        one: ["teyonutaklíʔtslaleʔ"],
      },
    ],
    plural: [
      {
        one: ["teyonutakliʔtslaleʔshúha̲"],
      },
    ],
  };
  const objTea: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["tea"],
    key: "Tea",
    singular: null,
    plural: [
      {
        one: ["tí"],
      },
      {
        one: ["tekantlahtalihtu"],
      },
    ],
  };
  const objToast: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["toast"],
    key: "Toast",
    singular: [
      {
        one: ["watnaʔtalathsaʔáhtu"],
      },
    ],
    plural: [
      {
        one: ["watnaʔtalatshaʔahtáni"],
      },
    ],
  };
  const objTomato: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["tomato"],
    key: "Tomato",
    singular: null,
    plural: [
      {
        one: ["tewahyakhániʔ"],
      },
    ],
  };
  const objTurkey: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["turkey"],
    key: "Turkey",
    singular: [
      {
        one: ["skawilo·wáneʔ"],
      },
    ],
    plural: null,
  };
  const objTurkeyMeat: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["turkey meat"],
    key: "TurkeyMeat",
    singular: [
      {
        one: ["skawilo·wáneʔ oʔwálu̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["skawilo·wáneʔ oʔwalokuha̲"],
      },
    ],
  };
  const objTurnip: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["turnip"],
    key: "Turnip",
    singular: [
      {
        one: ["otsíhkwa̲ʔ"],
      },
    ],
    plural: [
      {
        one: ["otsihkwaʔshúha̲"],
      },
    ],
  };
  const objVegetables: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["vegetables"],
    key: "Vegetables",
    singular: null,
    plural: [
      {
        one: ["ohʌtaseʔshúha̲"],
      },
    ],
  };
  const objVinegar: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["vinegar", "lemonade"],
    key: "Vinegar",
    singular: [
      {
        one: ["teyohnekahyó·tsis"],
      },
    ],
    plural: [
      {
        one: ["teyohnekahyoʔtsistáni"],
      },
    ],
  };
  const objWalnut: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["walnut"],
    key: "Walnut",
    singular: [
      {
        one: ["teyotshoʔkwakweʔnúni"],
      },
    ],
    plural: [
      {
        one: ["teyotshoʔkwakweʔnunyáni"],
      },
    ],
  };
  const objWater: Module9FoodDatum = {
    dict: [387],
    root: [],
    en: ["water"],
    key: "Water",
    singular: [
      {
        one: ["ohne·kánus"],
      },
    ],
    plural: [
      {
        one: ["ohnekanuhsokúha̲"],
      },
    ],
  };
  const objWine: Module9FoodDatum = {
    dict: [],
    root: [],
    en: ["wine", "beer"],
    key: "Wine",
    singular: [
      {
        one: ["otsí·tsyaʔ"],
      },
    ],
    plural: [
      {
        one: ["otsiʔtsyaʔshúha̲"],
      },
      {
        one: ["otsiʔtsyaʔokúha̲"],
      },
    ],
  };

  const result = [
    objApple,
    objBreakfast,
    objBagel,
    objBanana,
    objBean,
    objGreenBean,
    objBeanYellowEye,
    objBeanSoup,
    objBeet,
    objBlackberry,
    objBlackRaspberry,
    objBlueberry,
    objBread,
    objBreadBaked,
    objBreadCrust,
    objBreadFried,
    objBroccoli,
    objButter,
    objButternutSquash,
    objCabbage,
    objCarrot,
    objCatFood,
    objCelery,
    objCheese,
    objCherry,
    objCherryWildBlack,
    objChicken,
    objChineseFood,
    objCoffee,
    objCookie,
    objEgg,
    objFish,
    objFood,
    objFruit,
    objFruitCore,
    objCorn,
    objCornSoup,
    objFlintCorn,
    objCornBread,
    objCornDried,
    objCornMeal,
    objCornSweet,
    objCracker,
    objCucumber,
    objDogFood,
    objDough,
    objDoughnut,
    objElderberry,
    objEggshell,
    objFlour,
    objFriedFood,
    objBakedPotato,
    objFruitJuice,
    objGrape,
    objGreenVegetable,
    objGroceries,
    objMeat,
    objGravy,
    objHamburger,
    objHotdog,
    objIceCream,
    objJam,
    objJunkFood,
    objLard,
    objLasagna,
    objLemon,
    objLettuce,
    objLime,
    objLiquor,
    objMacaroni,
    objMapleSyrup,
    objMilk,
    objMushroom,
    objNut,
    objOatmeal,
    objOnion,
    objOnionLeek,
    objOrange,
    objPancake,
    objPea,
    objPeach,
    objPeanutButter,
    objPear,
    objPeeling,
    objPepper,
    objPickle,
    objPie,
    objPizza,
    objPlum,
    objPotato,
    objPopcorn,
    objMashedPotato,
    objPumpkin,
    objRadish,
    objRaspberry,
    objRhubarb,
    objRice,
    objRootVegetable,
    objSaladBean,
    objSaladEgg,
    objSaladFruit,
    objSaladGarden,
    objSaladPotato,
    objSalt,
    objSaltedPork,
    objSandwich,
    objSandwichEgg,
    objSconedog,
    objSoda,
    objSoup,
    objSpaghetti,
    objSpice,
    objStrawberry,
    objSquash,
    objSugar,
    objSugarSubstitute,
    objSweetTreat,
    objTea,
    objToast,
    objTomato,
    objTurkey,
    objTurkeyMeat,
    objTurnip,
    objVegetables,
    objVinegar,
    objWalnut,
    objWater,
    objWine,
  ];
  result.sort((a, b) => a.en[0].localeCompare(b.en[0]));
  return result;
}

export function createModule9FoodCharacteristics(): Module9FoodCharacteristicDatum[] {
  const objBaked: Module9FoodCharacteristicDatum = {
    root: ["-ateʔskut-"],
    dict: [174],
    en: ["baked", "fried", "BBQ", "roasted"],
    key: "Baked",
    usage: [
      {
        one: ["waté·skuteʔ"],
      },
    ],
  };
  const objBitter: Module9FoodCharacteristicDatum = {
    root: ["te...atskalaʔt-"],
    dict: [],
    en: ["bitter", "sour"],
    key: "Bitter",
    usage: [
      {
        one: [["te", "DUAL"], ["yo", "PO"], "tská·laht"],
      },
    ],
  };
  const objBoiled: Module9FoodCharacteristicDatum = {
    root: ["-liht-"],
    dict: [523],
    en: ["boiled"],
    key: "Boiled",
    usage: [
      {
        one: ["kalihá·tu"],
      },
    ],
  };
  const objBurnt: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["burnt"],
    key: "Burnt",
    usage: [
      {
        one: [["yo", "PO"], "tshaʔáhtu"],
      },
    ],
  };
  const objClean: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["clean"],
    key: "Clean",
    usage: [
      {
        one: [["te", "DUAL"], ["yo", "PO"], "htotálhu"],
      },
    ],
  };
  const objCooked: Module9FoodCharacteristicDatum = {
    root: ["-li-"],
    dict: [520],
    en: ["cooked", "riped"],
    key: "Cooked",
    usage: [
      {
        one: [["yo", "PO"], "·lí"],
      },
    ],
  };
  const objCool: Module9FoodCharacteristicDatum = {
    root: ["-wisto-"],
    dict: [776],
    en: ["cool", "cold"],
    key: "Cool",
    usage: [
      {
        one: [["yo", "PO"], "wísto"],
      },
    ],
  };
  const objDelicious: Module9FoodCharacteristicDatum = {
    root: ["-eku-", "-ekuʔu-", "-ku-", "-kuʔu"],
    dict: [334],
    en: ["tasty"],
    key: "Delicious",
    usage: [
      {
        en: "it tastes good",
        one: [["yaw", "PO"], "ékuʔ"],
      },
      {
        en: "it is delicious",
        one: ["tsiʔ ni", ["yaw", "PO"], "ékuʔ"],
      },
      {
        en: "it doesn't taste good",
        one: ["yáh te", ["yaw", "PO"], "ékuʔ"],
      },
    ],
  };
  const objFattening: Module9FoodCharacteristicDatum = {
    root: ["-aleʔsʌhsluni-"],
    dict: [99],
    en: ["fattening"],
    key: "Fattening",
    usage: [
      {
        one: [["yo", "PO"], "leʔsʌhsluní"],
      },
    ],
  };
  const objFried: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["fried", "deep-fried"],
    key: "Fried",
    usage: [
      {
        one: ["kʌ·yé·ke kalíhtu"],
      },
    ],
  };
  const objFrozen: Module9FoodCharacteristicDatum = {
    root: ["-wislat-", "-wislatu-"],
    dict: [775],
    en: ["frozen"],
    key: "Frozen",
    usage: [
      {
        one: [["yo", "PO"], "wislátuʔ"],
      },
    ],
  };
  const objAppetizing: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["appetizing"],
    key: "Appetizing",
    usage: [
      {
        en: "it looks good",
        one: ["watkathosliyó"],
      },
    ],
  };
  const objGreasy: Module9FoodCharacteristicDatum = {
    root: ["-yenal-"],
    dict: [815],
    en: ["greasy"],
    key: "Greasy",
    usage: [
      {
        one: [["yo", "PO"], "ye·náleʔ"],
      },
      {
        en: "???",
        one: [["yo", "PO"], "yenʌ́sku"],
      },
    ],
  };
  const objHot: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["hot"],
    key: "Hot",
    usage: [
      {
        one: [["yo", "PO"], "ʔtalíhʌ"],
      },
    ],
  };
  const objLeftovers: Module9FoodCharacteristicDatum = {
    root: ["-atatʌl-", "-at-N-atatʌl-"],
    dict: [137],
    en: ["leftovers"],
    key: "Leftovers",
    usage: [
      {
        en: "it is leftover",
        one: [["yo", "PO"], "tatʌlú"],
      },
    ],
  };
  const objMouldy: Module9FoodCharacteristicDatum = {
    root: ["-nuhweʔlhot-"],
    dict: [608],
    en: ["mouldy"],
    key: "Mouldy",
    usage: [
      {
        en: "it is covered in fuzz",
        one: [["yo", "PO"], "nuhwélhoteʔ"],
      },
      {
        one: ["oskʌ́·lha"],
      },
    ],
  };
  const objRaw: Module9FoodCharacteristicDatum = {
    root: ["-li-"],
    dict: [520],
    en: ["raw"],
    key: "Raw",
    usage: [
      {
        en: "it is not cooked",
        one: ["yáh teʔyolí"],
      },
    ],
  };
  const objRotten: Module9FoodCharacteristicDatum = {
    root: ["-ahetkʌʔ-"],
    dict: [61],
    en: ["rotten", "spoiled"],
    key: "Rotten",
    usage: [
      {
        one: [["yo", "PO"], "hetkwaʔú"],
      },
      {
        en: "it is not good",
        one: ["yáh teʔkakhwiyo"],
      },
    ],
  };
  const objSalty: Module9FoodCharacteristicDatum = {
    root: ["te...hyoʔtsistal-"],
    dict: [423],
    en: ["salty"],
    key: "Salty",
    usage: [
      {
        one: [["te", "DUAL"], ["yo", "PO"], "hyotsístaleʔ"],
      },
    ],
  };
  const objSmellingBad: Module9FoodCharacteristicDatum = {
    root: ["-asl-", "-sl-"],
    dict: [122],
    en: ["bad-smelling"],
    key: "SmellingBad",
    usage: [
      {
        one: ["waslákhsʌʔ"],
      },
    ],
  };
  const objSmellingGood: Module9FoodCharacteristicDatum = {
    root: ["-asl-", "-sl-"],
    dict: [122],
    en: ["good-smelling"],
    key: "SmellingGood",
    usage: [
      {
        one: ["wasláku"],
      },
      {
        one: ["wʌsliyó"],
      },
    ],
  };
  const objTheWayItSmells: Module9FoodCharacteristicDatum = {
    root: ["-asl-", "-sl-"],
    dict: [122],
    en: ["the way it smells"],
    key: "TheWayItSmells",
    usage: [
      {
        one: ["niwahsló·tʌ"],
      },
    ],
  };
  const objSpicy: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["spicy"],
    key: "Spicy",
    usage: [
      {
        one: [["te", "DUAL"], ["yo", "PO"], "thská·lat"],
      },
    ],
  };
  const objStrongSmell: Module9FoodCharacteristicDatum = {
    root: ["-asl-", "-sl-"],
    dict: [122],
    en: ["strong smell"],
    key: "StrongSmell",
    usage: [
      {
        one: ["waslaʔsátsteʔ"],
      },
    ],
  };
  const objStrongTaste: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["strong taste"],
    key: "StrongTaste",
    usage: [
      {
        one: ["kakuʔslaʔsátsteʔ"],
      },
    ],
  };
  const objSweet: Module9FoodCharacteristicDatum = {
    root: ["te...nutakliʔtslal-"],
    dict: [613],
    en: ["sweet", "sugary"],
    key: "Sweet",
    usage: [
      {
        one: [["te", "DUAL"], ["yo", "PO"], "nutaklí·tslaleʔ"],
      },
    ],
  };
  const objDisgusting: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["disgusting", "unappetizing"],
    key: "Disgusting",
    usage: [
      {
        one: [["yo", "PO"], "kwít"],
      },
    ],
  };
  const objWatery: Module9FoodCharacteristicDatum = {
    root: [],
    dict: [],
    en: ["watery"],
    key: "Watery",
    usage: [
      {
        one: [["te", "DUAL"], "kahnekayéstu"],
      },
    ],
  };
  return [
    objBaked,
    objBitter,
    objBoiled,
    objBurnt,
    objClean,
    objCooked,
    objCool,
    objDelicious,
    objFattening,
    objFried,
    objFrozen,
    objAppetizing,
    objGreasy,
    objHot,
    objLeftovers,
    objMouldy,
    objRaw,
    objRotten,
    objSalty,
    objSmellingBad,
    objSmellingGood,
    objTheWayItSmells,
    objSpicy,
    objStrongSmell,
    objStrongTaste,
    objSweet,
    objDisgusting,
    objWatery,
  ];
}

interface Module9VerbDatum extends Omit<Module6VerbDatum, "key"> {
  key: "eat";
}

export function createModule9VerbList(): Module9VerbDatum[] {
  return [
    {
      en: "eat something",
      key: "eat",
      root: "-ek-",
      cmd: eatCmdData,
      def: eatDefData,
      fut: eatFutData,
      hab: eatHabData,
      ifut: eatIfutData,
      pfv: eatPfvData,
    },
  ];
}

export function createModule9VerbListFlat() {
  const resultingList = createModule9VerbList();
  const flattenedResult = [];
  for (const v of resultingList) {
    flattenedResult.push(...flattenVerbDatum(v));
  }
  return flattenedResult;
}
