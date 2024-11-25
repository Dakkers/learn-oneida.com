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
    plural: ["swahyo·wánʌse’"],
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
    singular: ["yona’talaká·lute’"],
    plural: ["yona’tlakalu·tú"],
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
    singular: ["ohyóhtsli’"],
    plural: ["E·só· ohyóhtsli’shúha̲"],
  };
  const objBeanYellowEye = {
    en: ["bean yellow eye"],
    key: "BeanYellowEye",
    singular: ["otsí·nkwala’ oká·la’ osahé·ta̲’"],
    plural: ["otsí·nkwala’ oká·la’ osahe·ta’shúha̲"],
  };
  const objBeanSoup = {
    en: ["bean soup"],
    key: "BeanSoup",
    singular: ["osahé·ta’ ohnekákli’"],
    plural: ["osahé·ta’ ohnekákli’shúha"],
  };
  const objBeet = {
    en: ["beet"],
    key: "Beet",
    singular: ["onikwʌhtala’ nikahtehló·tʌ"],
    plural: ["onikwʌhtala’ nikahtehló·tʌhse̲’"],
  };
  const objBlackberry = {
    en: ["blackberry"],
    key: "Blackberry",
    singular: ["shá·yese̲’"],
    plural: ["shá·yese’ kahikokúha̲"],
  };
  const objBlackRaspberry = {
    en: ["black raspberry", "black cap"],
    key: "BlackRaspberry",
    singular: ["teyothutá·ktu", "teyothʌtá·ktu"],
    plural: ["teyothʌ’ta’ktúni"],
  };
  const objBlueberry = {
    en: ["blueberry"],
    key: "Blueberry",
    singular: ["otstókhwi’", "otstókwi’"],
    plural: ["otstokhwi’shúha̲"],
  };
  const objBreadBaked = {
    en: ["baked bread"],
    key: "BreadBaked",
    singular: ["watná·talute̲’"],
    plural: ["watna’talut’thokúha̲"],
  };
  const objBreadCrust = {
    en: ["bread crust"],
    key: "BreadCrust",
    singular: ["o’nuwa·tsíste̲’", "o’nowa·tsíste̲’"],
    plural: ["o’nuwatsistokúha̲"],
  };
  const objBreadFried = {
    en: ["frybread"],
    key: "BreadFried",
    singular: ["kʌyé·ke watna’talu·tákwe̲’"],
    plural: ["yawe’towanʌ́kʌyé·ke watna’talu·tákwe̲’"],
  };
  const objBroccoli = {
    en: ["broccoli"],
    key: "Broccoli",
    singular: ["otsi’tsyakáhte̲’"],
    plural: ["otsi’tsyaka’te’shúha̲"],
  };
  const objBroth = {
    en: ["broth", "watery soup"],
    key: "Broth",
    singular: ["ohnekákli’"],
    plural: ["ohnekakli’shúha̲"],
  };
  const objButternutSquash = {
    en: ["butternut", "squash"],
    key: "ButternutSquash",
    singular: ["tsyohsó·kwes onu’úsli’"],
    plural: ["tsyohsó·kwes onu’usli’shúha̲"],
  };
  const objCabbage = {
    en: ["cabbage"],
    key: "Cabbage",
    singular: ["onlahtakáhtu’ onu·tsi ̲́"],
    plural: ["onlahtakáhtu’ onutsi’shúha̲"],
  };
  const objCarrot = {
    en: ["carrot"],
    key: "Carrot",
    singular: ["katsi’nkwala’hú’tsi’ nikahtehló·tʌ̲"],
    plural: ["katsi’nkwala’hú’tsi’ nikahtehló·tʌhse̲’"],
  };
  const objCatFood = {
    en: ["cat food"],
    key: "CatFood",
    singular: ["takóhs a·ókhwa̲’"],
    plural: ["takóhs aotikhwa’shúha̲"],
  };
  const objCelery = {
    en: ["celery"],
    key: "Celery",
    singular: null,
    plural: ["ohstawina’shúha̲"],
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
    plural: ["eli’shúha̲"],
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
    singular: ["kitkit o’wálu̲’"],
    plural: ["kitkit o’wala’shúha̲"],
  };
  const objChineseFood = {
    en: ["chinese food"],
    key: "ChineseFood",
    singular: ["tehatikahlati·lúte’ laotíkhwa’"],
    plural: ["tehatikahlati·lúte’ laotikhwa’shúha̲"],
  };
  const objCoffee = {
    en: ["coffee"],
    key: "Coffee",
    singular: ["ohsahe’tákli’"],
    plural: ["ohsahe’takli’okúha̲"],
  };
  const objCookie = {
    en: ["cookie"],
    key: "Cookie",
    singular: ["khéksu·wé̲·"],
    plural: ["kheksuwe’shúha̲"],
  };
  const objFruitCore = {
    en: ["fruit core"],
    key: "FruitCore",
    singular: ["ohá·ta̲’"],
    plural: ["ohata’okúha̲"],
  };
  const objCornSoup = {
    en: ["corn soup"],
    key: "CornSoup",
    singular: ["ola·ná̲·"],
    plural: ["olana’shúha̲"],
  };
  const objCorn = {
    en: ["corn", "flint corn"],
    key: "Corn",
    singular: ["onʌsta’u·wé·"],
    plural: ["onʌsta’uwe’okúha̲"],
  };
  const objCornBread = {
    en: ["corn bread"],
    key: "CornBread",
    singular: ["kanʌstóhale̲’"],
    plural: ["kanʌstohale’okúha̲"],
  };
  const objCornDried = {
    en: ["dried corn"],
    key: "CornDried",
    singular: ["kanʌsta’thá·tu", "kanʌhʌ·ta’"],
    plural: ["kanʌsta’tha’thokúha̲", "kanʌhʌta’okúha̲"],
  };
  const objCornMeal = {
    en: ["corn meal"],
    key: "CornMeal",
    singular: ["osekwálha’"],
    plural: ["osekwalha’shúha̲"],
  };
  const objCornSweet = {
    en: ["sweet corn"],
    key: "CornSweet",
    singular: ["o·nʌ́ste’"],
    plural: ["onʌstase’shúha̲"],
  };
  const objCracker = {
    en: ["cracker"],
    key: "Cracker",
    singular: ["yona’talastáthʌ"],
    plural: ["yona’talastathʌ́hslu"],
  };
  const objCucumber = {
    en: ["cucumber", "squash"],
    key: "Cucumber",
    singular: ["onu’úsli’"],
    plural: ["onu’úsli’shúha’"],
  };
  const objDogFood = {
    en: ["dog food"],
    key: "DogFood",
    singular: ["é·lhal a·ókhwa̲’"],
    plural: ["é·lhal aotikhwa’shúha"],
  };
  const objDough = {
    en: ["dough", "cream", "paste"],
    key: "Dough",
    singular: ["oshé·lha’", "ohshé·lhe’", "ohshé·lhi’"],
    plural: ["ohshelhi’shúha̲"],
  };
  const objDoughnut = {
    en: ["doughnut"],
    key: "Doughnut",
    singular: ["oyá·n"],
    plural: ["yawe’towanʌ́oyá·n"],
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
    singular: ["ola·wíste’"],
    plural: ["olawiste’okúha̲"],
  };
  const objFlour = {
    en: ["flour"],
    key: "Flour",
    singular: ["othé·tsli’"],
    plural: ["othe’sli’shúha̲"],
  };
  const objFriedFood = {
    en: ["fried food"],
    key: "FriedFood",
    singular: ["kʌyé·ke kalihtu kakhwa’"],
    plural: ["kʌyé·ke kalihtu kakhwa’shúha̲"],
  };
  const objBakedPotato = {
    en: ["baked potato", "fried potato"],
    key: "BakedPotato",
    singular: ["wathnana’túta·kwe̲’"],
    plural: ["wathnana’tutahkwe’okúha̲"],
  };
  const objFruit = {
    en: ["fruit"],
    key: "Fruit",
    singular: null,
    plural: ["kahikhokúha̲’"],
  };
  const objFruitJuice = {
    en: ["fruit juice", "apple cider", "strawberry drink"],
    key: "FruitJuice",
    singular: ["tewahyolala·kú", "ohyákli’"],
    plural: ["tewahyalolalaku’okúha̲", "ohyakli’shúha̲"],
  };
  const objGrape = {
    en: ["grape"],
    key: "Grape",
    singular: ["o’nʌhalhkó·"],
    plural: ["o’nʌhalhko’wátshu"],
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
    singular: ["teka’wahlahlíhtu"],
    plural: ["awʌhetsha’shúha̲"],
  };
  const objHotdog = {
    en: ["hotdog", "baloney", "sausage"],
    key: "Hotdog",
    singular: ["awʌhétsha̲’"],
    plural: ["awʌhetsha’shúha̲"],
  };
  const objIceCream = {
    en: ["ice cream"],
    key: "IceCream",
    singular: ["yoshe’lhawísto̲"],
    plural: ["yo’shelhawisto’okúha̲"],
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
    plural: ["kakhwaksʌ’okúha̲"],
  };
  const objLard = {
    en: ["lard", "animal fat"],
    key: "Lard",
    singular: ["oyá·taku", "oya’takʌ·láte’"],
    plural: ["oya’taku’shúha̲", "oya’takʌlate’okúha̲"],
  };
  const objLasagna = {
    en: ["lasagna"],
    key: "Lasagna",
    singular: ["tekalakwistá·sle’"],
    plural: ["tekalakwistasle’okúha̲"],
  };
  const objLemon = {
    en: ["lemon", "sour fruit"],
    key: "Lemon",
    singular: ["teyohyahyó·tsis"],
    plural: ["teyohyahyo’tsistáni"],
  };
  const objLettuce = {
    en: ["lettuce"],
    key: "Lettuce",
    singular: ["onlahtakáhtu’", "untlahtakáhtu’"],
    plural: ["onlahtakahtu’okúha̲"],
  };
  const objLime = {
    en: ["lime"],
    key: "Lime",
    singular: ["teyohyahyó·tsis awʌ·la"],
    plural: ["teyohyahyo’tsistáni awʌ·la"],
  };
  const objLiquor = {
    en: ["liquor", "wine", "beer"],
    key: "Liquor",
    singular: ["ohne·káˍ·"],
    plural: ["ohneka’okúha̲"],
  };
  const objMacaroni = {
    en: ["macaroni"],
    key: "Macaroni",
    singular: null,
    plural: ["oholo’ta’shúha"],
  };
  const objMapleSyrup = {
    en: ["maple syrup"],
    key: "MapleSyrup",
    singular: ["wáhta’ ohsés"],
    plural: null,
  };
  const objMushroom = {
    en: ["mushroom"],
    key: "Mushroom",
    singular: ["onláhsa’"],
    plural: ["onláhsa’shuha̲"],
  };
  const objOatmeal = {
    en: ["oatmeal", "cornmush", "pudding"],
    key: "Oatmeal",
    singular: ["onu·tála̲’", "ohshélha̲"],
    plural: ["onutala’shúhá̲", "ohshelha’shúha̲"],
  };
  const objOnion = {
    en: ["onion (bulb)"],
    key: "Onion",
    singular: ["á·nuk"],
    plural: ["a’nukokúha̲"],
  };
  const objOnionLeek = {
    en: ["onion", "leek"],
    key: "OnionLeek",
    singular: ["a’nukkó·"],
    plural: ["a’nukkowátshu"],
  };
  const objOrange = {
    en: ["orange"],
    key: "Orange",
    singular: ["katsí·nkwala’hutsi niwahyó·tʌ̲"],
    plural: ["katsí·nkwala’hutsi niwahyó·tʌhse̲’"],
  };
  const objPancake = {
    en: ["pancake"],
    key: "Pancake",
    singular: ["onikóksli’"],
    plural: ["onikoksli’shúha̲"],
  };
  const objPea = {
    en: ["green pea"],
    key: "Pea",
    singular: ["teyotshahe’takwe’nu·ni"],
    plural: ["teyotshahe’takwe’nunyáni"],
  };
  const objPeach = {
    en: ["peach"],
    key: "Peach",
    singular: ["yonuhwé·lhote’ káhik"],
    plural: ["yonuhwé·lhote’ kahik’okúha̲"],
  };
  const objPeanutButter = {
    en: ["peanut butter"],
    key: "PeanutButter",
    singular: ["kashokwalíhtu", "ohsó·kwa’ kaselhúni’̲"],
    plural: ["kahsokwalihtu’okúha̲"],
  };
  const objPear = {
    en: ["pear"],
    key: "Pear",
    singular: ["yotshe’tʌ́·tuhe̲’"],
    plural: ["yotshe’tʌtuhe’táni"],
  };
  const objPeeling = {
    en: ["peeling (egg, potato, cucumber)"],
    key: "Peeling",
    singular: ["olá·wiste̲’"],
    plural: ["ola’wiste’okúha̲"],
  };
  const objPickle = {
    en: ["pickle"],
    key: "Pickle",
    singular: ["teyonu’uslahyó·tsis"],
    plural: ["teyonu’uslahyo’tsistáni"],
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
    singular: ["tekana’talakwʌhtu"],
    plural: ["tekana’talakwʌhtutáni"],
  };
  const objPlum = {
    en: ["wild plum"],
    key: "Plum",
    singular: ["wíhsu’"],
    plural: ["wihsu’okúha̲"],
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
    singular: ["onu’usla’kó·"],
    plural: ["onu’usla’wátshu"],
  };
  const objRadish = {
    en: ["radish"],
    key: "Radish",
    singular: ["ohtehlakáhtu’"],
    plural: ["ohtehlakahta’shúha̲"],
  };
  const objRaspberry = {
    en: ["raspberry"],
    key: "Raspberry",
    singular: ["tsyohtahkwaká·yu"],
    plural: ["tsyohtahkwakayu’shúha̲"],
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
    plural: ["watnʌ’ú·kwas", "watnʌ’ʌkwáts"],
  };
  const objSaladBean = {
    en: ["bean salad"],
    key: "SaladBean",
    singular: ["tekasahe’tayéstu"],
    plural: ["tekasahe’tayestáni"],
  };
  const objSaladEgg = {
    en: ["egg salad"],
    key: "SaladEgg",
    singular: ["teka’nhuhsayéhstu"],
    plural: ["teka’nhuhsayestáni"],
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
    singular: ["tekahnana’tayéhstu"],
    plural: ["tekahnana’tayestáni"],
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
    singular: ["teyo’wahlahyó·tsis"],
    plural: ["teyo’wahlahyo’tsistáni"],
  };
  const objSandwich = {
    en: ["sandwich"],
    key: "Sandwich",
    singular: ["tekana’talá·sle’"],
    plural: ["tekana’talasle’okúha̲"],
  };
  const objSandwichEgg = {
    en: ["egg sandwich"],
    key: "SandwichEgg",
    singular: ["ka’nhuhsó·lu"],
    plural: ["ka’nhuhsolókhu"],
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
    singular: ["kahnekáku’"],
    plural: ["kahnekake’shúha̲"],
  };
  const objSpaghetti = {
    en: ["spaghetti"],
    key: "Spaghetti",
    singular: null,
    plural: ["a’ahsliyeta’shúha̲’"],
  };
  const objSpice = {
    en: ["spice"],
    key: "Spice",
    singular: ["yutekhwaku’uhstákhwa’"],
    plural: ["yutekhwaku’uhstakhwa’shúha̲"],
  };
  const objStrawberry = {
    en: ["strawberry"],
    key: "Strawberry",
    singular: ["awʌ́hihte̲’"],
    plural: ["awʌhihthokúha̲"],
  };
  const objSugarSubstitute = {
    en: ["sugar substitute"],
    key: "SugarSubstitute",
    singular: ["teskyanutakli’tslatyelʌ́"],
    plural: ["teskyanutakli’tslatyelʌ’shúha̲"],
  };
  const objSweetTreat = {
    en: ["sweet treat"],
    key: "SweetTreat",
    singular: ["teyonutaklí’tslale’"],
    plural: ["teyonutakli’tslale’shúha̲"],
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
    singular: ["watna’talathsa’áhtu"],
    plural: ["watna’talatsha’ahtáni"],
  };
  const objTomato = {
    en: ["tomato"],
    key: "Tomato",
    singular: null,
    plural: ["tewahyakháni’"],
  };
  const objTurkey = {
    en: ["turkey meat"],
    key: "Turkey",
    singular: ["skawilo·wáne’ o’walu"],
    plural: ["skawilo·wáne’ o’walokuha̲"],
  };
  const objTurnip = {
    en: ["turnip"],
    key: "Turnip",
    singular: ["otsíhkwa̲’"],
    plural: ["otsihkwa’shúha̲"],
  };
  const objVegetables = {
    en: ["vegetables"],
    key: "Vegetables",
    singular: null,
    plural: ["ohʌtase’shúha̲"],
  };
  const objVinegar = {
    en: ["vinegar", "lemonade"],
    key: "Vinegar",
    singular: ["teyohnekahyó·tsis"],
    plural: ["teyohnekahyo’tsistáni"],
  };
  const objWalnut = {
    en: ["walnut"],
    key: "Walnut",
    singular: ["teyotsho’kwakwe’núni"],
    plural: ["teyotsho’kwakwe’nunyáni"],
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
    singular: ["otsí·tsya’"],
    plural: ["otsi’tsya’shúha̲", "otsi’tsya’okúha̲"],
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
    one: ["waté·skute’"],
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
    one: ["yotsha’áhtu"],
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
    one: ["yawéku’"],
  };
  const objFattening = {
    en: ["fattening"],
    key: "Fattening",
    one: ["yole’sʌhsluní"],
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
    one: ["yoye·nále’", "yoyenʌ́sku"],
  };
  const objHot = {
    en: ["hot"],
    key: "Hot",
    one: ["yo’talíhʌ"],
  };
  const objLeftovers = {
    en: ["leftovers"],
    key: "Leftovers",
    one: ["yotatʌlú"],
  };
  const objMouldy = {
    en: ["mouldy"],
    key: "Mouldy",
    one: ["yonuhwélhote’", "oskʌ́·lha"],
  };
  const objRaw = {
    en: ["raw"],
    key: "Raw",
    one: ["yáh te’yolí"],
  };
  const objRoasted = {
    en: ["roasted", "fried"],
    key: "Roasted",
    one: ["waté·skute’"],
  };
  const objRotten = {
    en: ["rotten", "spoiled"],
    key: "Rotten",
    one: ["yohetkwa’ú", "yáh te’kakhwiyo"],
  };
  const objSalty = {
    en: ["salty"],
    key: "Salty",
    one: ["teyohyotsístale’"],
  };
  const objSmellingBad = {
    en: ["bad-smelling"],
    key: "SmellingBad",
    one: ["waslákhsʌ’"],
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
    one: ["wasla’sátste’"],
  };
  const objStrongTaste = {
    en: ["strong taste"],
    key: "StrongTaste",
    one: ["kaku’sla’sátste’"],
  };
  const objSweet = {
    en: ["sweet", "sugary"],
    key: "Sweet",
    one: ["teyonutaklí·tslale’"],
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
