import {
  flattenVerbDatum,
  Module6VerbDatum,
} from "../module06/activeVerbsList";
import eatCmdData from "./eat-CMD";
import eatDefData from "./eat-DEF";
import eatFutData from "./eat-FUT";
import eatHabData from "./eat-HAB";
import eatIfutData from "./eat-IFUT";
import eatPfvData from "./eat-PFV";

interface FoodDatum {
  en: string[];
  key: string;
  singular: string[] | null;
  plural: string[] | null;
}

interface CharacteristicDatum {
  en: string[];
  key: string;
  one: string[];
}

export function createModule9FoodLists(): FoodDatum[] {
  const objApple = {
    en: ["apple"],
    key: "Apple",
    singular: ["swahyo·wáne"],
    plural: ["swahyo·wánʌseʔ"],
  };
  const objBreakfast = {
    en: ["(eating) breakfast"],
    key: "Breakfast",
    singular: ["astetsi i·kéks"],
    plural: null,
  };
  const objBagel = {
    en: ["bagel"],
    key: "Bagel",
    singular: ["yonaʔtalaká·luteʔ"],
    plural: ["yonaʔtlakalu·tú"],
  };
  const objBanana = {
    en: ["banana"],
    key: "Banana",
    singular: ["teyotahyá·ktu"],
    plural: ["E·só· teyotahyá·ktu"],
  };
  const objBean = {
    en: ["bean"],
    key: "Bean",
    singular: ["ohyóhtsliʔ"],
    plural: ["E·só· ohyóhtsliʔshúha̲"],
  };
  const objBeanYellowEye = {
    en: ["bean yellow eye"],
    key: "BeanYellowEye",
    singular: ["otsí·nkwalaʔ oká·laʔ osahé·ta̲ʔ"],
    plural: ["otsí·nkwalaʔ oká·laʔ osahe·taʔshúha̲"],
  };
  const objBeanSoup = {
    en: ["bean soup"],
    key: "BeanSoup",
    singular: ["osahé·taʔ ohnekákliʔ"],
    plural: ["osahé·taʔ ohnekákliʔshúha"],
  };
  const objBeet = {
    en: ["beet"],
    key: "Beet",
    singular: ["onikwʌhtalaʔ nikahtehló·tʌ"],
    plural: ["onikwʌhtalaʔ nikahtehló·tʌhse̲ʔ"],
  };
  const objBlackberry = {
    en: ["blackberry"],
    key: "Blackberry",
    singular: ["shá·yese̲ʔ"],
    plural: ["shá·yeseʔ kahikokúha̲"],
  };
  const objBlackRaspberry = {
    en: ["black raspberry", "black cap"],
    key: "BlackRaspberry",
    singular: ["teyothutá·ktu", "teyothʌtá·ktu"],
    plural: ["teyothʌʔtaʔktúni"],
  };
  const objBlueberry = {
    en: ["blueberry"],
    key: "Blueberry",
    singular: ["otstókhwiʔ", "otstókwiʔ"],
    plural: ["otstokhwiʔshúha̲"],
  };
  const objBreadBaked = {
    en: ["baked bread"],
    key: "BreadBaked",
    singular: ["watná·talute̲ʔ"],
    plural: ["watnaʔtalutʔthokúha̲"],
  };
  const objBreadCrust = {
    en: ["bread crust"],
    key: "BreadCrust",
    singular: ["oʔnuwa·tsíste̲ʔ", "oʔnowa·tsíste̲ʔ"],
    plural: ["oʔnuwatsistokúha̲"],
  };
  const objBreadFried = {
    en: ["frybread"],
    key: "BreadFried",
    singular: ["kʌyé·ke watnaʔtalu·tákwe̲ʔ"],
    plural: ["yaweʔtowanʌ́kʌyé·ke watnaʔtalu·tákwe̲ʔ"],
  };
  const objBroccoli = {
    en: ["broccoli"],
    key: "Broccoli",
    singular: ["otsiʔtsyakáhte̲ʔ"],
    plural: ["otsiʔtsyakaʔteʔshúha̲"],
  };
  const objBroth = {
    en: ["broth", "watery soup"],
    key: "Broth",
    singular: ["ohnekákliʔ"],
    plural: ["ohnekakliʔshúha̲"],
  };
  const objButternutSquash = {
    en: ["butternut", "squash"],
    key: "ButternutSquash",
    singular: ["tsyohsó·kwes onuʔúsliʔ"],
    plural: ["tsyohsó·kwes onuʔusliʔshúha̲"],
  };
  const objCabbage = {
    en: ["cabbage"],
    key: "Cabbage",
    singular: ["onlahtakáhtuʔ onu·tsi ̲́"],
    plural: ["onlahtakáhtuʔ onutsiʔshúha̲"],
  };
  const objCarrot = {
    en: ["carrot"],
    key: "Carrot",
    singular: ["katsiʔnkwalaʔhúʔtsiʔ nikahtehló·tʌ̲"],
    plural: ["katsiʔnkwalaʔhúʔtsiʔ nikahtehló·tʌhse̲ʔ"],
  };
  const objCatFood = {
    en: ["cat food"],
    key: "CatFood",
    singular: ["takóhs a·ókhwa̲ʔ"],
    plural: ["takóhs aotikhwaʔshúha̲"],
  };
  const objCelery = {
    en: ["celery"],
    key: "Celery",
    singular: null,
    plural: ["ohstawinaʔshúha̲"],
  };
  const objCheese = {
    en: ["cheese"],
    key: "Cheese",
    singular: ["yonekwalahnilú"],
    plural: null,
  };
  const objCherry = {
    en: ["cherry"],
    key: "Cherry",
    singular: ["é·li"],
    plural: ["eliʔshúha̲"],
  };
  const objCherryWildBlack = {
    en: ["wild black cherry"],
    key: "CherryWildBlack",
    singular: ["elikkó·"],
    plural: ["elikkowátshu"],
  };
  const objChicken = {
    en: ["chicken meat"],
    key: "Chicken",
    singular: ["kitkit oʔwálu̲ʔ"],
    plural: ["kitkit oʔwalaʔshúha̲"],
  };
  const objChineseFood = {
    en: ["chinese food"],
    key: "ChineseFood",
    singular: ["tehatikahlati·lúteʔ laotíkhwaʔ"],
    plural: ["tehatikahlati·lúteʔ laotikhwaʔshúha̲"],
  };
  const objCoffee = {
    en: ["coffee"],
    key: "Coffee",
    singular: ["ohsaheʔtákliʔ"],
    plural: ["ohsaheʔtakliʔokúha̲"],
  };
  const objCookie = {
    en: ["cookie"],
    key: "Cookie",
    singular: ["khéksu·wé̲·"],
    plural: ["kheksuweʔshúha̲"],
  };
  const objFruitCore = {
    en: ["fruit core"],
    key: "FruitCore",
    singular: ["ohá·ta̲ʔ"],
    plural: ["ohataʔokúha̲"],
  };
  const objCornSoup = {
    en: ["corn soup"],
    key: "CornSoup",
    singular: ["ola·ná̲·"],
    plural: ["olanaʔshúha̲"],
  };
  const objCorn = {
    en: ["corn", "flint corn"],
    key: "Corn",
    singular: ["onʌstaʔu·wé·"],
    plural: ["onʌstaʔuweʔokúha̲"],
  };
  const objCornBread = {
    en: ["corn bread"],
    key: "CornBread",
    singular: ["kanʌstóhale̲ʔ"],
    plural: ["kanʌstohaleʔokúha̲"],
  };
  const objCornDried = {
    en: ["dried corn"],
    key: "CornDried",
    singular: ["kanʌstaʔthá·tu", "kanʌhʌ·taʔ"],
    plural: ["kanʌstaʔthaʔthokúha̲", "kanʌhʌtaʔokúha̲"],
  };
  const objCornMeal = {
    en: ["corn meal"],
    key: "CornMeal",
    singular: ["osekwálhaʔ"],
    plural: ["osekwalhaʔshúha̲"],
  };
  const objCornSweet = {
    en: ["sweet corn"],
    key: "CornSweet",
    singular: ["o·nʌ́steʔ"],
    plural: ["onʌstaseʔshúha̲"],
  };
  const objCracker = {
    en: ["cracker"],
    key: "Cracker",
    singular: ["yonaʔtalastáthʌ"],
    plural: ["yonaʔtalastathʌ́hslu"],
  };
  const objCucumber = {
    en: ["cucumber", "squash"],
    key: "Cucumber",
    singular: ["onuʔúsliʔ"],
    plural: ["onuʔúsliʔshúhaʔ"],
  };
  const objDogFood = {
    en: ["dog food"],
    key: "DogFood",
    singular: ["é·lhal a·ókhwa̲ʔ"],
    plural: ["é·lhal aotikhwaʔshúha"],
  };
  const objDough = {
    en: ["dough", "cream", "paste"],
    key: "Dough",
    singular: ["oshé·lhaʔ", "ohshé·lheʔ", "ohshé·lhiʔ"],
    plural: ["ohshelhiʔshúha̲"],
  };
  const objDoughnut = {
    en: ["doughnut"],
    key: "Doughnut",
    singular: ["oyá·n"],
    plural: ["yaweʔtowanʌ́oyá·n"],
  };
  const objElderberry = {
    en: ["elderberry"],
    key: "Elderberry",
    singular: ["ala·sék"],
    plural: ["alasekokúha̲"],
  };
  const objEggshell = {
    en: ["eggshell"],
    key: "Eggshell",
    singular: ["ola·wísteʔ"],
    plural: ["olawisteʔokúha̲"],
  };
  const objFlour = {
    en: ["flour"],
    key: "Flour",
    singular: ["othé·tsliʔ"],
    plural: ["otheʔsliʔshúha̲"],
  };
  const objFriedFood = {
    en: ["fried food"],
    key: "FriedFood",
    singular: ["kʌyé·ke kalihtu kakhwaʔ"],
    plural: ["kʌyé·ke kalihtu kakhwaʔshúha̲"],
  };
  const objBakedPotato = {
    en: ["baked potato", "fried potato"],
    key: "BakedPotato",
    singular: ["wathnanaʔtúta·kwe̲ʔ"],
    plural: ["wathnanaʔtutahkweʔokúha̲"],
  };
  const objFruit = {
    en: ["fruit"],
    key: "Fruit",
    singular: null,
    plural: ["kahikhokúha̲ʔ"],
  };
  const objFruitJuice = {
    en: ["fruit juice", "apple cider", "strawberry drink"],
    key: "FruitJuice",
    singular: ["tewahyolala·kú", "ohyákliʔ"],
    plural: ["tewahyalolalakuʔokúha̲", "ohyakliʔshúha̲"],
  };
  const objGrape = {
    en: ["grape"],
    key: "Grape",
    singular: ["oʔnʌhalhkó·"],
    plural: ["oʔnʌhalhkoʔwátshu"],
  };
  const objGravy = {
    en: ["gravy", "grease", "oil", "fat"],
    key: "Gravy",
    singular: ["kʌ·yé·"],
    plural: null,
  };
  const objHamburger = {
    en: ["hamburger", "ground meat"],
    key: "Hamburger",
    singular: ["tekaʔwahlahlíhtu"],
    plural: ["awʌhetshaʔshúha̲"],
  };
  const objHotdog = {
    en: ["hotdog", "baloney", "sausage"],
    key: "Hotdog",
    singular: ["awʌhétsha̲ʔ"],
    plural: ["awʌhetshaʔshúha̲"],
  };
  const objIceCream = {
    en: ["ice cream"],
    key: "IceCream",
    singular: ["yosheʔlhawísto̲"],
    plural: ["yoʔshelhawistoʔokúha̲"],
  };
  const objJam = {
    en: ["jam", "preserve"],
    key: "Jam",
    singular: ["watahyalíhtu"],
    plural: ["watahyalihtáni"],
  };
  const objJunkFood = {
    en: ["junk food"],
    key: "JunkFood",
    singular: ["kakhwáksʌ"],
    plural: ["kakhwaksʌʔokúha̲"],
  };
  const objLard = {
    en: ["lard", "animal fat"],
    key: "Lard",
    singular: ["oyá·taku", "oyaʔtakʌ·láteʔ"],
    plural: ["oyaʔtakuʔshúha̲", "oyaʔtakʌlateʔokúha̲"],
  };
  const objLasagna = {
    en: ["lasagna"],
    key: "Lasagna",
    singular: ["tekalakwistá·sleʔ"],
    plural: ["tekalakwistasleʔokúha̲"],
  };
  const objLemon = {
    en: ["lemon", "sour fruit"],
    key: "Lemon",
    singular: ["teyohyahyó·tsis"],
    plural: ["teyohyahyoʔtsistáni"],
  };
  const objLettuce = {
    en: ["lettuce"],
    key: "Lettuce",
    singular: ["onlahtakáhtuʔ", "untlahtakáhtuʔ"],
    plural: ["onlahtakahtuʔokúha̲"],
  };
  const objLime = {
    en: ["lime"],
    key: "Lime",
    singular: ["teyohyahyó·tsis awʌ·la"],
    plural: ["teyohyahyoʔtsistáni awʌ·la"],
  };
  const objLiquor = {
    en: ["liquor", "wine", "beer"],
    key: "Liquor",
    singular: ["ohne·ká̲·"],
    plural: ["ohnekaʔokúha̲"],
  };
  const objMacaroni = {
    en: ["macaroni"],
    key: "Macaroni",
    singular: null,
    plural: ["oholoʔtaʔshúha"],
  };
  const objMapleSyrup = {
    en: ["maple syrup"],
    key: "MapleSyrup",
    singular: ["wáhtaʔ ohsés"],
    plural: null,
  };
  const objMushroom = {
    en: ["mushroom"],
    key: "Mushroom",
    singular: ["onláhsaʔ"],
    plural: ["onláhsaʔshuha̲"],
  };
  const objOatmeal = {
    en: ["oatmeal", "cornmush", "pudding"],
    key: "Oatmeal",
    singular: ["onu·tála̲ʔ", "ohshélha̲"],
    plural: ["onutalaʔshúhá̲", "ohshelhaʔshúha̲"],
  };
  const objOnion = {
    en: ["onion (bulb)"],
    key: "Onion",
    singular: ["á·nuk"],
    plural: ["aʔnukokúha̲"],
  };
  const objOnionLeek = {
    en: ["onion", "leek"],
    key: "OnionLeek",
    singular: ["aʔnukkó·"],
    plural: ["aʔnukkowátshu"],
  };
  const objOrange = {
    en: ["orange"],
    key: "Orange",
    singular: ["katsí·nkwalaʔhutsi niwahyó·tʌ̲"],
    plural: ["katsí·nkwalaʔhutsi niwahyó·tʌhse̲ʔ"],
  };
  const objPancake = {
    en: ["pancake"],
    key: "Pancake",
    singular: ["onikóksliʔ"],
    plural: ["onikoksliʔshúha̲"],
  };
  const objPea = {
    en: ["green pea"],
    key: "Pea",
    singular: ["teyotshaheʔtakweʔnu·ni"],
    plural: ["teyotshaheʔtakweʔnunyáni"],
  };
  const objPeach = {
    en: ["peach"],
    key: "Peach",
    singular: ["yonuhwé·lhoteʔ káhik"],
    plural: ["yonuhwé·lhoteʔ kahikʔokúha̲"],
  };
  const objPeanutButter = {
    en: ["peanut butter"],
    key: "PeanutButter",
    singular: ["kashokwalíhtu", "ohsó·kwaʔ kaselhúniʔ̲"],
    plural: ["kahsokwalihtuʔokúha̲"],
  };
  const objPear = {
    en: ["pear"],
    key: "Pear",
    singular: ["yotsheʔtʌ́·tuhe̲ʔ"],
    plural: ["yotsheʔtʌtuheʔtáni"],
  };
  const objPeeling = {
    en: ["peeling (egg, potato, cucumber)"],
    key: "Peeling",
    singular: ["olá·wiste̲ʔ"],
    plural: ["olaʔwisteʔokúha̲"],
  };
  const objPickle = {
    en: ["pickle"],
    key: "Pickle",
    singular: ["teyonuʔuslahyó·tsis"],
    plural: ["teyonuʔuslahyoʔtsistáni"],
  };
  const objPie = {
    en: ["pie"],
    key: "Pie",
    singular: ["wá·yat"],
    plural: ["wa·yathokúha̲"],
  };
  const objPizza = {
    en: ["pizza"],
    key: "Pizza",
    singular: ["tekanaʔtalakwʌhtu"],
    plural: ["tekanaʔtalakwʌhtutáni"],
  };
  const objPlum = {
    en: ["wild plum"],
    key: "Plum",
    singular: ["wíhsuʔ"],
    plural: ["wihsuʔokúha̲"],
  };
  const objPopcorn = {
    en: ["popcorn"],
    key: "Popcorn",
    singular: null,
    plural: ["watnʌhstatákwas"],
  };
  const objMashedPotato = {
    en: ["mashed potato"],
    key: "MashedPotato",
    singular: ["tekahnanatahlíhtu"],
    plural: ["tekahnanatahlihtáni"],
  };
  const objPumpkin = {
    en: ["pumpkin", "watermelon"],
    key: "Pumpkin",
    singular: ["onuʔuslaʔkó·"],
    plural: ["onuʔuslaʔwátshu"],
  };
  const objRadish = {
    en: ["radish"],
    key: "Radish",
    singular: ["ohtehlakáhtuʔ"],
    plural: ["ohtehlakahtaʔshúha̲"],
  };
  const objRaspberry = {
    en: ["raspberry"],
    key: "Raspberry",
    singular: ["tsyohtahkwaká·yu"],
    plural: ["tsyohtahkwakayuʔshúha̲"],
  };
  const objRhubarb = {
    en: ["rhubarb"],
    key: "Rhubarb",
    singular: ["teyostawinahyó·tsis"],
    plural: ["teyohstawinahyotsistáni"],
  };
  const objRice = {
    en: ["rice"],
    key: "Rice",
    singular: null,
    plural: ["watnʌʔú·kwas", "watnʌʔʌkwáts"],
  };
  const objSaladBean = {
    en: ["bean salad"],
    key: "SaladBean",
    singular: ["tekasaheʔtayéstu"],
    plural: ["tekasaheʔtayestáni"],
  };
  const objSaladEgg = {
    en: ["egg salad"],
    key: "SaladEgg",
    singular: ["tekaʔnhuhsayéhstu"],
    plural: ["tekaʔnhuhsayestáni"],
  };
  const objSaladFruit = {
    en: ["fruit salad"],
    key: "SaladFruit",
    singular: ["tewahyayéhstu"],
    plural: ["tewahyayestáni"],
  };
  const objSaladGarden = {
    en: ["garden salad"],
    key: "SaladGarden",
    singular: ["tekanlahtayéhstu"],
    plural: ["tekanlahtayestáni"],
  };
  const objSaladPotato = {
    en: ["potato salad"],
    key: "SaladPotato",
    singular: ["tekahnanaʔtayéhstu"],
    plural: ["tekahnanaʔtayestáni"],
  };
  const objSalt = {
    en: ["salt"],
    key: "Salt",
    singular: null,
    plural: ["tyohyó·tsis"],
  };
  const objSaltedPork = {
    en: ["salted pork"],
    key: "SaltedPork",
    singular: ["teyoʔwahlahyó·tsis"],
    plural: ["teyoʔwahlahyoʔtsistáni"],
  };
  const objSandwich = {
    en: ["sandwich"],
    key: "Sandwich",
    singular: ["tekanaʔtalá·sleʔ"],
    plural: ["tekanaʔtalasleʔokúha̲"],
  };
  const objSandwichEgg = {
    en: ["egg sandwich"],
    key: "SandwichEgg",
    singular: ["kaʔnhuhsó·lu"],
    plural: ["kaʔnhuhsolókhu"],
  };
  const objSconedog = {
    en: ["sconedog"],
    key: "Sconedog",
    singular: ["kahetsholu"],
    plural: ["kahetsholókhu"],
  };
  const objSoda = {
    en: ["soda", "pop", "koolaid"],
    key: "Soda",
    singular: ["kahnekákuʔ"],
    plural: ["kahnekakeʔshúha̲"],
  };
  const objSpaghetti = {
    en: ["spaghetti"],
    key: "Spaghetti",
    singular: null,
    plural: ["aʔahsliyetaʔshúha̲ʔ"],
  };
  const objSpice = {
    en: ["spice"],
    key: "Spice",
    singular: ["yutekhwakuʔuhstákhwaʔ"],
    plural: ["yutekhwakuʔuhstakhwaʔshúha̲"],
  };
  const objStrawberry = {
    en: ["strawberry"],
    key: "Strawberry",
    singular: ["awʌ́hihte̲ʔ"],
    plural: ["awʌhihthokúha̲"],
  };
  const objSugarSubstitute = {
    en: ["sugar substitute"],
    key: "SugarSubstitute",
    singular: ["teskyanutakliʔtslatyelʌ́"],
    plural: ["teskyanutakliʔtslatyelʌʔshúha̲"],
  };
  const objSweetTreat = {
    en: ["sweet treat"],
    key: "SweetTreat",
    singular: ["teyonutaklíʔtslaleʔ"],
    plural: ["teyonutakliʔtslaleʔshúha̲"],
  };
  const objTea = {
    en: ["tea"],
    key: "Tea",
    singular: null,
    plural: ["tí", "tekantlahtalihtu"],
  };
  const objToast = {
    en: ["toast"],
    key: "Toast",
    singular: ["watnaʔtalathsaʔáhtu"],
    plural: ["watnaʔtalatshaʔahtáni"],
  };
  const objTomato = {
    en: ["tomato"],
    key: "Tomato",
    singular: null,
    plural: ["tewahyakhániʔ"],
  };
  const objTurkey = {
    en: ["turkey meat"],
    key: "Turkey",
    singular: ["skawilo·wáneʔ oʔwalu"],
    plural: ["skawilo·wáneʔ oʔwalokuha̲"],
  };
  const objTurnip = {
    en: ["turnip"],
    key: "Turnip",
    singular: ["otsíhkwa̲ʔ"],
    plural: ["otsihkwaʔshúha̲"],
  };
  const objVegetables = {
    en: ["vegetables"],
    key: "Vegetables",
    singular: null,
    plural: ["ohʌtaseʔshúha̲"],
  };
  const objVinegar = {
    en: ["vinegar", "lemonade"],
    key: "Vinegar",
    singular: ["teyohnekahyó·tsis"],
    plural: ["teyohnekahyoʔtsistáni"],
  };
  const objWalnut = {
    en: ["walnut"],
    key: "Walnut",
    singular: ["teyotshoʔkwakweʔnúni"],
    plural: ["teyotshoʔkwakweʔnunyáni"],
  };
  const objWater = {
    en: ["water"],
    key: "Water",
    singular: ["ohne·kánus"],
    plural: ["ohnekanuhsokúha̲"],
  };
  const objWine = {
    en: ["wine", "beer"],
    key: "Wine",
    singular: ["otsí·tsyaʔ"],
    plural: ["otsiʔtsyaʔshúha̲", "otsiʔtsyaʔokúha̲"],
  };

  return [
    objApple,
    objBreakfast,
    objBagel,
    objBanana,
    objBean,
    objBeanYellowEye,
    objBeanSoup,
    objBeet,
    objBlackberry,
    objBlackRaspberry,
    objBlueberry,
    objBreadBaked,
    objBreadCrust,
    objBreadFried,
    objBroccoli,
    objBroth,
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
    objFruitCore,
    objCornSoup,
    objCorn,
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
    objFruit,
    objFruitJuice,
    objGrape,
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
    objMushroom,
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
    objPickle,
    objPie,
    objPizza,
    objPlum,
    objPopcorn,
    objMashedPotato,
    objPumpkin,
    objRadish,
    objRaspberry,
    objRhubarb,
    objRice,
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
    objSpaghetti,
    objSpice,
    objStrawberry,
    objSugarSubstitute,
    objSweetTreat,
    objTea,
    objToast,
    objTomato,
    objTurkey,
    objTurnip,
    objVegetables,
    objVinegar,
    objWalnut,
    objWater,
    objWine,
  ];
}

export function createModule9FoodCharacteristics(): CharacteristicDatum[] {
  const objBaked = {
    en: ["baked", "fried", "BBQ", "roasted"],
    key: "Baked",
    one: ["waté·skuteʔ"],
  };
  const objBitter = {
    en: ["bitter", "sour"],
    key: "Bitter",
    one: ["teyotská·laht"],
  };
  const objBoiled = {
    en: ["boiled"],
    key: "Boiled",
    one: ["kalihá·tu"],
  };
  const objBurnt = {
    en: ["burnt"],
    key: "Burnt",
    one: ["yotshaʔáhtu"],
  };
  const objClean = {
    en: ["clean"],
    key: "Clean",
    one: ["teyohtotálhu"],
  };
  const objCooked = {
    en: ["cooked"],
    key: "Cooked",
    one: ["yo·lí"],
  };
  const objCool = {
    en: ["cool", "cold"],
    key: "Cool",
    one: ["yowísto"],
  };
  const objDelicious = {
    en: ["delicious"],
    key: "Delicious",
    one: ["yawékuʔ"],
  };
  const objFattening = {
    en: ["fattening"],
    key: "Fattening",
    one: ["yoleʔsʌhsluní"],
  };
  const objFried = {
    en: ["fried", "deep-fried"],
    key: "Fried",
    one: ["kʌ·yé·ke kalíhtu"],
  };
  const objFrozen = {
    en: ["frozen"],
    key: "Frozen",
    one: ["yowislatú"],
  };
  const objAppetizing = {
    en: ["appetizing"],
    key: "Appetizing",
    one: ["watkathosliyó"],
  };
  const objGreasy = {
    en: ["greasy"],
    key: "Greasy",
    one: ["yoye·náleʔ", "yoyenʌ́sku"],
  };
  const objHot = {
    en: ["hot"],
    key: "Hot",
    one: ["yoʔtalíhʌ"],
  };
  const objLeftovers = {
    en: ["leftovers"],
    key: "Leftovers",
    one: ["yotatʌlú"],
  };
  const objMouldy = {
    en: ["mouldy"],
    key: "Mouldy",
    one: ["yonuhwélhoteʔ", "oskʌ́·lha"],
  };
  const objRaw = {
    en: ["raw"],
    key: "Raw",
    one: ["yáh teʔyolí"],
  };
  const objRoasted = {
    en: ["roasted", "fried"],
    key: "Roasted",
    one: ["waté·skuteʔ"],
  };
  const objRotten = {
    en: ["rotten", "spoiled"],
    key: "Rotten",
    one: ["yohetkwaʔú", "yáh teʔkakhwiyo"],
  };
  const objSalty = {
    en: ["salty"],
    key: "Salty",
    one: ["teyohyotsístaleʔ"],
  };
  const objSmellingBad = {
    en: ["bad-smelling"],
    key: "SmellingBad",
    one: ["waslákhsʌʔ"],
  };
  const objSmellingGood = {
    en: ["good-smelling"],
    key: "SmellingGood",
    one: ["wasláku", "wʌsliyó"],
  };
  const objTheWayItSmells = {
    en: ["the way it smells"],
    key: "TheWayItSmells",
    one: ["niwahsló·tʌ"],
  };
  const objSpicy = {
    en: ["spicy"],
    key: "Spicy",
    one: ["teyothská·lat"],
  };
  const objStrongSmell = {
    en: ["strong smell"],
    key: "StrongSmell",
    one: ["waslaʔsátsteʔ"],
  };
  const objStrongTaste = {
    en: ["strong taste"],
    key: "StrongTaste",
    one: ["kakuʔslaʔsátsteʔ"],
  };
  const objSweet = {
    en: ["sweet", "sugary"],
    key: "Sweet",
    one: ["teyonutaklí·tslaleʔ"],
  };
  const objDisgusting = {
    en: ["disgusting", "unappetizing"],
    key: "Disgusting",
    one: ["yokwít"],
  };
  const objWatery = {
    en: ["watery"],
    key: "Watery",
    one: ["tekahnekayéstu"],
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
    objRoasted,
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
