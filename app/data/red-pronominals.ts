import { ParadigmData } from "~/components/ParadigmTable"

const data: ParadigmData = {
  "i": {
    "default": ["k"],
    "c": [
      "k",
      {
        "excp": "4",
        "breakdown": [{ "text": "i", "type": "RPL" }, "k"]
      },
      {
        "excp": "3",
        "breakdown": ["ke"]
      }
    ]
  },
  "u": {
    "default": [
      {
        "excp": "2",
        "breakdown": [{ "text": "h", "type": "RPL" }, "s"]
      }
    ],
    "c": [
      "s",
      {
        "excp": "5",
        "text": "ts"
      },
      {
        "excp": "6",
        "breakdown": [{ "text": "i", "type": "RPL" }, "t"]
      },
      {
        "excp": ["3", "2"],
        "breakdown": [{ "text": "h", "type": "RPL" }, "se"]
      }
    ],
    "i": [
      "ts",
      {
        "excp": "2",
        "breakdown": [{ "text": "h", "type": "RPL" }, "s"]
      }
    ]
  },
  "m": {
    "default": [
      {
        "excp": "2",
        "breakdown": [{ "text": "h", "type": "RPL" }, "l"]
      }
    ],
    "c": ["la"],
    "a": ["l"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["l", { "text": "ʌ", "type": "OP" }]
      }
    ]
  },
  "f": {
    "default": ["yak"],
    "c": ["ye"],
    "a": [
      {
        "excp": "1",
        "breakdown": ["y", { "text": "u", "type": "OP" }]
      }
    ],
    "i": [
      {
        "excp": "1",
        "breakdown": ["y", { "text": "e", "type": "OP" }]
      }
    ]
  },
  "it": {
    "default": ["w"],
    "c": ["ka"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["k", { "text": "ʌ", "type": "OP" }]
      }
    ],
    "o": ["y"]
  },
  "uni": {
    "default": ["tn"],
    "c": ["tni"],
    "a": ["ty"]
  },
  "soni": {
    "default": ["yakn"],
    "c": ["yakni"]
  },
  "u2": {
    "default": ["sn"],
    "c": ["sni"]
  },
  "2m": {
    "default": [
      {
        "excp": "2",
        "breakdown": [{ "text": "h", "type": "RPL" }, "n"]
      }
    ],
    "c": ["hni"],
    "a": [
      {
        "excp": "2",
        "breakdown": [{ "text": "h", "type": "RPL" }, "y"]
      }
    ]
  },
  "2f": {
    "default": ["kn"],
    "c": ["kni"],
    "a": ["ky"]
  },
  "us": {
    "default": ["tw"],
    "c": ["twa"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["tw", { "text": "ʌ", "type": "OP" }]
      }
    ],
    "o": ["ty"]
  },
  "theyni": {
    "default": ["yakw"],
    "c": ["yakwa"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["yakw", { "text": "ʌ", "type": "OP" }]
      }
    ],
    "o": ["yaky"]
  },
  "yall": {
    "default": ["sw"],
    "c": ["swa"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["sw", { "text": "ʌ", "type": "OP" }]
      }
    ],
    "o": ["tsy"]
  },
  "ms": {
    "default": ["lʌn"],
    "c": ["lati"],
    "a": [
      {
        "excp": "1",
        "breakdown": ["l", { "text": "u", "type": "OP" }]
      }
    ],
    "i": ["lat", "lʌn"]
  },
  "fs": {
    "default": ["kun"],
    "c": ["kuti"],
    "a": [
      {
        "excp": "1",
        "breakdown": ["k", { "text": "u", "type": "OP" }]
      }
    ],
    "i": ["kut", "kun"]
  }
}

export default data;