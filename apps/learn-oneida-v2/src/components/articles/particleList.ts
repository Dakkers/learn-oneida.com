export interface ParticleEntry {
  key: string;
  translation: string;
  en: string;
  examples?: Array<{
    translation: string;
    en: string;
  }>;
}

export const particleList: ParticleEntry[] = [
  {
    key: "just_like",
    translation: "kwáh tsiʔ niyot",
    en: "like, just like",
    examples: [
      {
        translation: "Kunú·wehseʔ kwáh tsiʔ niyot isé· sknú·wehseʔ niʔi",
        en: "I like you just like you like me.",
      },
    ],
  },
  {
    key: "very_much",
    translation: "kwáh ikʌ́· tsiʔ",
    en: "very much",
    examples: [
      {
        translation:
          "Kwáh i·kʌ́ tsiʔ kninú·wehseʔ kaʔi·kʌ́· né· Só·s khále Alísakwe",
        en: "Susan and Elizabeth like this very much.",
      },
    ],
  },
  {
    key: "everything",
    translation: "akwekú",
    en: "everyone, everybody, everything",
    examples: [
      {
        translation: "Yáh akwekú teʔsanúhte̲ʔ",
        en: "You don't know everything.",
      },
      {
        translation: "Akwekú lanú·wehse̲ʔ",
        en: "He likes everything.",
      },
      {
        translation: "Akwekú shukwanú·wehse̲ʔ",
        en: "He likes all of us.",
      },
    ],
  },
  {
    key: "a_lot",
    translation: "e·só·",
    en: "a lot",
    examples: [
      {
        translation: "Esó· yukhinú·wehseʔ thikʌ́ akokhstʌ́ha̲",
        en: "That old woman likes us a lot.",
      },
    ],
  },
  {
    key: "yes",
    translation: "ʌ́·",
    en: "yes",
    examples: [],
  },
  {
    key: "so_then_1",
    translation: "kátiʔ",
    en: "so then",
    examples: [
      {
        translation: "Oh káti niʔí·",
        en: "So then, what about me?",
      },
    ],
  },
  {
    key: "so_then_2",
    translation: "ok né·n",
    en: "so then",
    examples: [
      {
        translation: "Ok né·n niʔí·",
        en: "So then, what about me?",
      },
    ],
  },
  {
    key: "question_indicator",
    translation: "kʌ́",
    en: "Used to indicate a question",
    examples: [
      {
        translation: "Tshyalé kʌ́ luwa·yáts né·n laulhá·",
        en: "Is his name Charlie?",
      },
    ],
  },
  {
    key: "this",
    translation: "kaʔi·kʌ̲̲́·",
    en: "this",
    examples: [
      {
        translation: "Akwekú kʌ́ latinú·wehseʔ kaʔi·kʌ́· lotikhstʌʔokúha̲",
        en: "Do all of the old men like this?",
      },
    ],
  },
  {
    key: "what",
    translation: "náhteʔ",
    en: "what",
    examples: [
      {
        translation: "Knú·wehseʔ tsiʔ náhteʔ snú·wehse̲ʔ",
        en: "I like what (it is that) you like.",
      },
    ],
  },
  {
    key: "it_is",
    translation: "nʌʔ né·",
    en: "it is",
    examples: [
      {
        translation: "Wílo nʌʔ né·",
        en: "It's William.",
      },
    ],
  },
  {
    key: "but",
    translation: "nók tsiʔ",
    en: "but",
    examples: [
      {
        translation: "Laknú·wehseʔ niʔí· nók tsiʔ yáh né· tehinú·wehse̲ʔ",
        en: "He likes me but I don't like him.",
      },
    ],
  },
  {
    key: "and",
    translation: "kháleʔ",
    en: "and",
    examples: [
      {
        translation: "Lokhstʌ́ha kháleʔ né·n laksá· ninú·wehse̲ʔ",
        en: "The old man and the boy like it.",
      },
    ],
  },
  {
    key: "also",
    translation: "uní",
    en: "also, too, as well as, either",
    examples: [
      {
        translation: "Yeyaʔtaséha uní yesanú·wehse̲ʔ",
        en: "The young woman also likes you.",
      },
    ],
  },
  {
    key: "other",
    translation: "oyá",
    en: "other, else, another",
    examples: [
      {
        translation: "Lanú·wehseʔ kʌ́ né· oyá· laksá·",
        en: "Does the other boy like it?",
      },
    ],
  },
  {
    key: "question_what_how",
    translation: "oh",
    en: "a particle used to ask What? Why? and How? questions",
    examples: [
      {
        translation: "Oh náhte yesa·yáts",
        en: "What is your name?",
      },
    ],
  },
  {
    key: "how",
    translation: "oh ni·yót",
    en: "How?",
    examples: [
      {
        translation: "Oh ni·yót tsiʔ yakonúhteʔ né·n Wa·li",
        en: "How does Mary know that?",
      },
    ],
  },
  {
    key: "a_little_bit",
    translation: "ostú·ha̲",
    en: "a little bit",
    examples: [
      {
        translation: "Ostú·ha yakninú·wehse i· kháleʔ Kwítel",
        en: "Peter and I like it a little bit.",
      },
    ],
  },
  {
    key: "just",
    translation: "ok",
    en: "just, only",
    examples: [
      {
        translation: "Tá·wet ok linúwehse̲ʔ",
        en: "I only like David.",
      },
    ],
  },
  {
    key: "just_a_little_bit",
    translation: "ostúhaʔ ok",
    en: "just a little bit",
    examples: [
      {
        translation: "Ostúhaʔ ok khenú·wehseʔ né· thikʌ́ latinikʌhtluʔokuha̲",
        en: "I like those young men just a little bit.",
      },
    ],
  },
  {
    key: "who",
    translation: "úhkaʔ náhteʔ",
    en: "who",
    examples: [
      {
        translation: "Úhkaʔ náhteʔ thikʌ́ lú·kwe̲ʔ",
        en: "Who is that man?",
      },
      {
        translation: "Sanúhteʔ kʌ́ úhkaʔ náhteʔ thikʌ̲̲́",
        en: "Do you know who that is?",
      },
    ],
  },
  {
    key: "someone",
    translation: "úhkaʔ ok náhteʔ",
    en: "someone, somebody",
    examples: [
      {
        translation: "Úhkaʔ ok náhteʔ luwanú·wehse̲ʔ",
        en: "Someone likes him.",
      },
    ],
  },
  {
    key: "certainly",
    translation: "(kwah) otokú· tsiʔ",
    en: "certainly, for sure",
    examples: [
      {
        translation: "Kwah otokú· tsiʔ khenú·wehseʔ né· Só·s",
        en: "I certainly like Susan.",
      },
    ],
  },
  {
    key: "something",
    translation: "náhteʔ ok",
    en: "something, anything",
    examples: [
      {
        translation: "Náhteʔ ok kʌ́ yakonúhteʔ né· yeksá·",
        en: "Does the girl know anything?",
      },
    ],
  },
  {
    key: "something_else",
    translation: "náhteʔ oyá·",
    en: "something else, anything else",
    examples: [
      {
        translation: "Yáh náhteʔ ó·ya teyakonúhte̲ʔ",
        en: "She doesn't know anything else.",
      },
    ],
  },
  {
    key: "more",
    translation: "sʌ́haʔ",
    en: "more",
    examples: [
      {
        translation: "Sʌ́haʔ kʌ́ yenú·wehseʔ né· kaʔi·kʌ̲̲́",
        en: "Does she like this more?",
      },
    ],
  },
  {
    key: "more_than",
    translation: "sʌ́haʔ ... tsiʔ ni·yót",
    en: "more than",
    examples: [
      {
        translation: "Sʌ́haʔ linú·wehseʔ né· Tá·wet tsiʔ ni·yót né· Tshyalé",
        en: "I like David more than Charlie.",
      },
    ],
  },
  {
    key: "still",
    translation: "shekú",
    en: "still, yet, again",
    examples: [
      {
        translation: "Shekú yáh teʔkhenú·wehseʔ né· akaulhá·",
        en: "I still don't like her.",
      },
    ],
  },
  {
    key: "another_one",
    translation: "shekú o·yá·",
    en: "another one, yet another",
    examples: [
      {
        translation: "Shekú oyá· yakukwé yesanú·wehse̲ʔ",
        en: "Yet another woman likes you.",
      },
    ],
  },
  {
    key: "that",
    translation: "thikʌ̲̲́",
    en: "that, that one, that thing",
    examples: [
      {
        translation: "Swanú·wehseʔ kʌ́ thikʌ̲̲́",
        en: "Do you all like that?",
      },
    ],
  },
  {
    key: "i_dunno",
    translation: "to·káh",
    en: "I dunno",
    examples: [],
  },
  {
    key: "true",
    translation: "to·kʌśke̲ʔ",
    en: "true, it is true",
    examples: [
      {
        translation: "To·kʌ́skeʔ kʌ́ tsiʔ yáh teʔsknúwehse̲ʔ",
        en: "Is it true that you don't like me?",
      },
    ],
  },
  {
    key: "if",
    translation: "tá·t",
    en: "if",
    examples: [
      {
        translation: "Yáh teʔwakanúhteʔ tá·t Kwítel luwa·yáts né·n laulhá·",
        en: "I don't know if his name is Peter.",
      },
    ],
  },
  {
    key: "or",
    translation: "tá·thuni",
    en: "or",
    examples: [
      {
        translation:
          "Yáh teʔwakanúhteʔ tá·tkʌ Kwítel tá·thuni Tshyalé luwa·yáts",
        en: "I don't know if his name is Peter or Charlie.",
      },
    ],
  },
  {
    key: "tsi",
    translation: "tsiʔ",
    en: "that, there, when, to, at",
    examples: [
      {
        translation: "Sanúhteʔ kʌ́ tsiʔ yáh teʔyesanú·wehse̲ʔ",
        en: "Do you know that she doesn't like you?",
      },
      {
        translation: "Knú·wehseʔ tsiʔ isé· sknú·wehse̲ʔ.",
        en: "I like it that you like me.",
      },
    ],
  },
  {
    key: "what_it_is",
    translation: "tsiʔ náhteʔ",
    en: "what (it is)",
    examples: [
      {
        translation: "Yáh teʔwakanúhteʔ tsiʔ náhteʔ snú·wehse̲ʔ",
        en: "I don't know what you like.",
      },
    ],
  },
  {
    key: "isnt_it",
    translation: "wáhi̲",
    en: "Isn't it? Innit? Eh?",
    examples: [
      {
        translation: "Wá·li yutátyats né· akaulhá·, wáhi̲",
        en: "Her name is Mary, isn't it?",
      },
    ],
  },
  {
    key: "no",
    translation: "táh",
    en: "no",
    examples: [],
  },
  {
    key: "not_that_much",
    translation: "yáh kiʔ sótsi",
    en: "not that much, not so much",
    examples: [
      {
        translation: "Yáh kiʔ sótsi tehetshnú·wehseʔ, wáhi̲",
        en: "You don't like him that much, do you?",
      },
    ],
  },
  {
    key: "nobody",
    translation: "yáh úhkaʔ",
    en: "no one, nobody",
    examples: [
      {
        translation: "Yáh úhkaʔ tehuwanú·wehseʔ thikʌ́ lanikʌhtlúha̲",
        en: "No one likes that young man.",
      },
    ],
  },
  {
    key: "nothing",
    translation: "yáh náhteʔ",
    en: "nothing, not anything",
    examples: [],
  },
  {
    key: "not_true",
    translation: "Yáh ... té·kʌ",
    en: "not (a fact), not (true)",
    examples: [
      {
        translation: "Yáh to·kʌ́skeʔ té·kʌ",
        en: "That's not true.",
      },
      {
        translation: "Yáh Wali té·kʌ",
        en: "That's not Mary.",
      },
    ],
  },
  {
    key: "no_way",
    translation: "Ta·ím",
    en: "no way (slang)",
    examples: [],
  },
  {
    key: "again",
    translation: "á·leʔ",
    en: "again",
    examples: [
      {
        translation: "Tsyutatwʌni·yó á·leʔ",
        en: "She's single again.",
      },
    ],
  },
  {
    key: "and_then",
    translation: "kháleʔ nʌ́",
    en: "and then",
    examples: [
      {
        translation:
          "Yakonaskwayʌ·táhkweʔ takóhs kháleʔ nʌ́ yakonaskwayʌ·táhkweʔ é·lhal",
        en: "She had a cat and then she had a dog.",
      },
    ],
  },
  {
    key: "before",
    translation: "kaló· tsiʔ niyo·lé·",
    en: "before",
    examples: [
      {
        translation:
          "Yakonaskwayʌ·táhkweʔ takóhs kaló· tsiʔ niyo·lé· yakonaskwayʌ·táhkweʔ é·lhal",
        en: "She had a cat before she had a dog.",
      },
    ],
  },
  {
    key: "because",
    translation: "né· tsiʔ",
    en: "because",
    examples: [
      {
        translation: "Yáh tehotinya·kú né· tsiʔ yáh thaʔtehyatatnolúkhwa̲ʔ",
        en: "They're not married because they don't love one another.",
      },
    ],
  },
  {
    key: "a_length_of_time",
    translation: "tsiʔ náheʔ",
    en: "(a length of time)",
    examples: [
      {
        translation: "Tewáhsʌ niyohslaké tsiʔ náheʔ wakenyakú̲",
        en: "I've been married for twenty years.",
      },
    ],
  },
  {
    key: "a_short_length_of_time",
    translation: "kʌʔ naheʔ",
    en: "a short length of time",
    examples: [
      {
        translation: "Kʌʔ náheʔ yakonyakú·ne̲ʔ",
        en: "She was married for just a short time.",
      },
    ],
  },
  {
    key: "now",
    translation: "nuʔú·waʔ",
    en: "now, today",
    examples: [
      {
        translation: "Tehonatekháhsyu nuʔú·wa̲ʔ",
        en: "They're separated now.",
      },
    ],
  },
  {
    key: "never",
    translation: "yáh newʌ·tú",
    en: "never, impossible",
    examples: [
      {
        translation: "Yáh né· newʌ·tú tesanyakú̲",
        en: "You've never been married.",
      },
    ],
  },
  {
    key: "thanks",
    translation: "yawʌʔkó·",
    en: "Thank you",
    examples: [
      {
        translation: "Yawʌʔkó· tsiʔ wesake·tóte̲ʔ",
        en: "Thanks for coming.",
      },
    ],
  },
  {
    key: "hows_it_going",
    translation: "Oh niyotuháti",
    en: "How is it going?",
    examples: [
      {
        translation: "Oh niyotuháti neʔn sahsótha̲",
        en: "How's your grandmother doing?",
      },
    ],
  },
  {
    key: "together",
    translation: "oskánhe",
    en: "together, together with",
    examples: [
      {
        translation: "Oskánhe lotiwila·yʌ́· neʔn Sawatis kháleʔ Ní·ki",
        en: "John and Nellie have children together.",
      },
    ],
  },
  {
    key: "different",
    translation: "tekyattíhʌ̲",
    en: "different, two things are different",
    examples: [
      {
        translation: "Tekyattíhʌ né· tekniyáhse takós",
        en: "The two cats are different.",
      },
    ],
  },
  {
    key: "so",
    translation: "tsiʔ ni-",
    en: "so",
    examples: [
      {
        translation: "Tsiʔ nithoyʌ́ha né· thikʌ́ lú·kwe̲",
        en: "That man is so young.",
      },
    ],
  },
  {
    key: "until",
    translation: "tsiʔ niyo·lé·",
    en: "until, before",
    examples: [
      {
        translation: "Yáh úhkaʔ teyakonya·kú kaló· tsiʔ niyo·lé· né·n Sawatis",
        en: "She wasn't married to anyone before John.",
      },
    ],
  },
  {
    key: "yo",
    translation: "yo",
    en: "(an acknowledgement)",
    examples: [],
  },
  {
    key: "maybe",
    translation: "ta·t nuʔuwa",
    en: "maybe, possibly",
    examples: [],
  },
  {
    key: "all_over",
    translation: "kwáh ok tsyoʔk nú·",
    en: "all over",
    examples: [
      {
        translation: "Kwáh ok tsyoʔk nú· yehé·lehskwe kwaʔshu·té̲·",
        en: "He was all over last night.",
      },
    ],
  },
  {
    key: "all_over_town",
    translation: "kwáh ok tsyoʔk nú· kanatá·ke",
    en: "all over town",
    examples: [
      {
        translation: "Kwáh ok tsyoʔk nú· kanatá·ke yehé·lehskwe kwaʔshu·té̲·",
        en: "He was all over town last night.",
      },
    ],
  },
  {
    key: "wherever",
    translation: "áti kwáh tsyoʔk nú·",
    en: "anyplace, wherever",
    examples: [
      {
        translation:
          "Áti kwáh tsyoʔk nú· nʌhsé·shekeʔ, thó kyu ní· nú· sʌ́· thó yʌké·sheke̲ʔ",
        en: "Wherever you're going to be, I will be there too.",
      },
    ],
  },
  {
    key: "elsewhere",
    translation: "ákteʔ nú·",
    en: "elsewhere",
    examples: [
      {
        translation: "Ákte nú· yehé·lehse̲ʔ",
        en: "He's somewhere else.",
      },
    ],
  },
  {
    key: "here",
    translation: "kʌ́·tho",
    en: "here",
    examples: [
      {
        translation: "Kʌ́·tho kʌ́ í·lehse̲ʔ",
        en: "Is he here?",
      },
    ],
  },
  {
    key: "nowhere",
    translation: "yáh kánikeʔ",
    en: "no place, nowhere",
    examples: [
      {
        translation: "Yáh kánikʌ thyeyáknehskweʔ kwaʔshu·té̲·",
        en: "S.o. & I were not anywhere last night. (We didn't go anywhere.)",
      },
    ],
  },
  {
    key: "somewhere",
    translation: "kátshaʔ ok nú·",
    en: "somewhere",
    examples: [
      {
        translation: "Kátshaʔ ok nú· Ostohlonú·ke yʌhlé·shekeʔ swʌ·tát",
        en: "He will be somewhere in the United States next week.",
      },
    ],
  },
  {
    key: "there",
    translation: "thó",
    en: "there",
    examples: [
      {
        translation: "Thó kʌ́ yehélehseʔ tsiʔ thoyo·té̲·",
        en: "Is he at work?",
      },
    ],
  },
  {
    key: "when",
    translation: "kánke",
    en: "when?",
    examples: [
      {
        translation: "Kánke thó yʌhsé·sheke̲ʔ",
        en: "When will you be there?",
      },
    ],
  },
  {
    key: "when_prefix",
    translation: "tshi-",
    en: "when",
    examples: [
      {
        translation: "Kanaʔtsyohalé·ke· teknáklehkweʔ tshikeksá·",
        en: "I used to live in Ottawa when I was a kid.",
      },
    ],
  },
  {
    key: "when_nv",
    translation: "nʌ",
    en: "when",
    examples: [
      {
        translation: "Thó yʌké·shekeʔ nʌ thó yʌhsé·sheke̲ʔ",
        en: "I will be there when you get there.",
      },
    ],
  },
  {
    key: "where_2",
    translation: "tsha nú·",
    en: "where",
    examples: [
      {
        translation: "Yáh tewakanúhteʔ tsha nú· ní·lehse̲ʔ",
        en: "I don't know where he is.",
      },
    ],
  },
  {
    key: "where_3",
    translation: "tsiʔ nú·",
    en: "where",
  },
  {
    key: "where_4",
    translation: "thó nú·",
    en: "where",
  },
  {
    key: "where_5",
    translation: "kátshaʔ nú·",
    en: "where?",
    examples: [
      {
        translation: "Kátshaʔ nú· ní·lehseʔ né·n Tshyalé",
        en: "Where is Charlie?",
      },
    ],
  },
  {
    key: "hopefully",
    translation: "aya·wʌ́·s kwi",
    en: "hopefully",
    examples: [
      {
        translation: "Aya·wʌ́·s kwi Hawaiʔi yʌké·shekeʔ yʌswʌ́·tat",
        en: "Hopefully, I will be in Hawai'i next week.",
      },
    ],
  },
  {
    key: "it_is_important",
    translation: "yolihowanʌ́",
    en: "it is important",
    examples: [
      {
        translation: "Yolihowa·nʌ́ tsiʔ nok ʌwa·tú· kʌ́·tho ayʌ́·sheke̲ʔ",
        en: "It's important that someone has to be here.",
      },
    ],
  },
  {
    key: "must",
    translation: "nok ʌwa·tú·",
    en: "(it is a) must, have to",
    examples: [
      {
        translation: "Nok ʌwa·tú· thó yʌké·shekeʔ ʌyólhʌne̲ʔ",
        en: "I have to be there tomorrow.",
      },
    ],
  },
  {
    key: "necessary",
    translation: "teyotuhutsyúhu",
    en: "(it is) necessary, need to",
    examples: [
      {
        translation: "Yáh thaʔteyotuhutsyúhu thó yayʌ́·shekeʔ tsiʔ ʌyó·kalahwe̲ʔ",
        en: "She doesn't need to be there this evening.",
      },
    ],
  },
  {
    key: "how_many_things",
    translation: "Tó· ni·kú̲",
    en: "How many things, objects?",
    examples: [
      {
        translation: "Tó· ni·kú snú·wehseʔ thi·kʌ̲̲́",
        en: "How many of those do you like?",
      },
    ],
  },
  {
    key: "how_many_of_us",
    translation: "Tó· nitwatí̲",
    en: "How many of us? (all of you & I)",
    examples: [
      {
        translation: "Tó· nitwatí kʌ́·tho ítwehseʔ nuʔú·wa̲ʔ",
        en: "How many of us are here now?",
      },
    ],
  },
  {
    key: "how_many_of_they_and_i",
    translation: "Tó· niyakwatí̲",
    en: "How many of us? (they & I, not you)",
    examples: [
      {
        translation: "Sanúhte kʌ́ tó· niyakwatí tyakwʌʔtlu·táhkweʔ thé·tʌ̲",
        en: "Do you know how many of us were (at) home yesterday?",
      },
    ],
  },
  {
    key: "how_many_of_yall",
    translation: "Tó· niswatí̲",
    en: "How many of you all? (all of you)",
    examples: [
      {
        translation: "Tó· níswatí yáh kʌʔ thaeswé·sheke̲ʔ",
        en: "How many of you won't be here?",
      },
    ],
  },
  {
    key: "how_many_of_them_males",
    translation: "Tó· nihatí̲",
    en: "How many of them? (males, males and females)",
    examples: [
      {
        translation: "Tó· nihatí né· swalaʔsé·shuha Ostuhlonú·ke thatinakéhle̲ʔ",
        en: "How many of your cousins live in the States?",
      },
    ],
  },
  {
    key: "how_many_of_them_females",
    translation: "Tó· nikutí̲",
    en: "How many of them? (females)",
    examples: [
      {
        translation: "Tó· nikutí thikʌ́ otikstʌhokúha swatátnuhkwe̲ʔ",
        en: "How many of those old ladies are you related to?",
      },
    ],
  },
  {
    key: "everyone",
    translation: "akwekú̲",
    en: "everyone, everything",
    examples: [
      {
        translation: "Akwekú knú·wehse̲ʔ",
        en: "I like everything.",
      },
    ],
  },
  {
    key: "you_all_and_i",
    translation: "twakwekú̲",
    en: "you all and I",
    examples: [
      {
        translation: "Twakwekú yethiyʌtelí̲",
        en: "We all know her.",
      },
    ],
  },
  {
    key: "they_and_i",
    translation: "yakwakwekú̲",
    en: "they and I",
    examples: [
      {
        translation: "Yakwakwekú yakwanú·wehse̲ʔ",
        en: "They all & I like it.",
      },
    ],
  },
  {
    key: "all_of_you",
    translation: "swakwekú̲",
    en: "all of you",
    examples: [
      {
        translation: "Swakwekú swanú·wehse̲ʔ",
        en: "You all like it.",
      },
    ],
  },
  {
    key: "all_of_them_males",
    translation: "latikwekú̲",
    en: "all of them (males, males/females)",
    examples: [
      {
        translation: "Latikwekú yuknú·wehse̲ʔ",
        en: "They (males) all like me.",
      },
    ],
  },
  {
    key: "all_of_them_females",
    translation: "kutikwekú̲",
    en: "all of them (females)",
    examples: [
      {
        translation: "Kutikwekú kutinú·wehse̲ʔ",
        en: "They (females) all like it.",
      },
    ],
  },
  {
    key: "tho",
    translation: "thó",
    en: "that, there, that thing",
    examples: [
      {
        translation: "Thó ní· knú·wehse̲ʔ",
        en: "That's what I like.",
      },
      {
        translation: "Yáh thó tehokhstʌ́ha̲",
        en: "He's not that old.",
      },
    ],
  },
  {
    key: "anything",
    translation: "átiʔ náhte̲ʔ",
    en: "anything, whatever",
    examples: [
      {
        translation: "Áti náhteʔ ni·sé· snú·wehseʔ, né· ú·ni knú·wehse̲ʔ",
        en: "Whatever you like, I also like.",
      },
    ],
  },
  {
    key: "anyone",
    translation: "áti úhkaʔ",
    en: "anyone, anybody, whoever",
    examples: [
      {
        translation: "Khenú·wehseʔ kwáh áti úhkaʔ isé· shenú·wehse̲ʔ",
        en: "I like whoever you like.",
      },
    ],
  },
  {
    key: "greater_than",
    translation: "íhsi nú·",
    en: "on the other side (of something), more than",
    examples: [
      {
        translation: "Íhsi nú· oyé·li naʔtehaohsliyá·ku̲",
        en: "He's more than ten years old.",
      },
    ],
  },
  {
    key: "less_than",
    translation: "kaló",
    en: "on this side (of something), less than",
    examples: [
      {
        translation: "Kaló né· oyé·li naʔtehaohsliyá·ku̲",
        en: "He's less than ten years old.",
      },
    ],
  },
  {
    key: "just_only",
    translation: "né· ok",
    en: "just, only",
    examples: [
      {
        translation: "Né· ok oyé·li naʔtehaohsliyá·ku̲",
        en: "He's just ten years old.",
      },
    ],
  },
  {
    key: "it_is_the_same",
    translation: "né· tshá·kat",
    en: "it is the same, they are the same",
    examples: [
      {
        translation: "Né· kʌ́ tshá·kat kaʔi·kʌ̲̲́",
        en: "Are these (things) the same?",
      },
    ],
  },
  {
    key: "it_is_different",
    translation: "tekyattíhʌ̲",
    en: "it is different, it is uneven",
    examples: [
      {
        translation: "Tekyattihʌ tsiʔ ní·yot thikʌ̲",
        en: "They are different than that.",
      },
    ],
  },
  {
    key: "both",
    translation: "tetsyalú̲",
    en: "both, either, neither",
    examples: [
      {
        translation: "Tetsyalú ni· knú·wehseʔ kaʔi·kʌ̲̲́",
        en: "I like both of these.",
      },
    ],
  },
  {
    key: "almost",
    translation: "thóha",
    en: "almost",
    examples: [
      {
        translation: "Thóha oyé·li naʔtehaohsliyá·ku̲",
        en: "He's almost ten years old.",
      },
    ],
  },
  {
    key: "how_many",
    translation: "tó· ni",
    en: "How many/much?",
    examples: [
      {
        translation: "Tó· nisahwístayʌ̲ʔ",
        en: "How much money do you have?",
      },
    ],
  },
  {
    key: "why",
    translation: "náhteʔ aolí·waʔ (tsiʔ)",
    en: "why?",
    examples: [],
  },
  {
    key: "forever",
    translation: "(kwah) tsi nyʌhʌ́·weʔ",
    en: "forever",
    examples: [],
  },
  {
    key: "long_time",
    translation: "wahu·níse̲ʔ",
    en: "a long time",
    examples: [],
  },
  {
    key: "such_a_long_time",
    translation: "tsiʔ niwahu·níse̲ʔ",
    en: "it was such a long time",
    examples: [],
  },
  {
    key: "how_long_of_a_time",
    translation: "tó· náheʔ",
    en: "How long of a time?",
    examples: [],
  },
  {
    key: "long_time_ago",
    translation: "wahuniseʔkʌ́",
    en: "a long time ago",
    examples: [],
  },
  {
    key: "ago",
    translation: "tsiʔ náheʔ",
    en: "ago",
    examples: [],
  },
  {
    key: "sometimes",
    translation: "swatyelʌ́",
    en: "sometimes",
    examples: [],
  },
  {
    key: "in_a_while",
    translation: "atsyók",
    en: "in a while, after a while",
    examples: [],
  },
  // PLOP:ADD_PARTICLE
];
