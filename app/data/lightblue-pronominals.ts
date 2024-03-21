import { ParadigmData } from "~/components/ParadigmTable"

const data: ParadigmData = {
  "i": {
    "default": ["akw"],
    "c": [
      "ak",
      {
        "excp": "3",
        "text": "ake"
      }
    ],
    "i": ["ak"],
    "o": ["ak"]
  },
  "u": {
    "default": ["s"],
    "c": ["sa"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["s", { "text": "ʌ", "type": "OP" }]
      }
    ]
  },
  "m": {
    "default": [
      {
        "excp": "1",
        "breakdown": ["la", { "text": "o", "type": "OP" }]
      }
    ],
    "c": ["lao"],
    "e": ["law"],
    "o": ["la"]
  },
  "f": {
    "default": [
      {
        "excp": "1",
        "breakdown": ["ak", { "text": "o", "type": "OP" }]
      }
    ],
    "c": ["ako"],
    "e": ["akaw"],
    "o": ["ak"]
  },
  "it": {
    "default": [
      {
        "excp": "1",
        "breakdown": ["a", { "text": "o", "type": "OP" }]
      }
    ],
    "c": ["ao"],
    "e": ["aw"],
    "o": ["y"]
  },
  "uni": {
    "default": ["ukn"],
    "c": ["ukni"],
    "a": ["uky"]
  },
  "u2": {
    "default": ["sn"],
    "c": ["sni"],
    "a": ["tsy"]
  },
  "us": {
    "default": ["ukw"],
    "c": ["ukwa"],
    "i": [
      {
        "excp": "1",
        "breakdown": ["ukw", { "text": "ʌ", "type": "OP" }]
      }
    ],
    "o": ["uky"]
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
    "default": ["laon"],
    "c": ["laoti"],
    "i": ["laon", "laot"]
  },
  "fs": {
    "default": ["aon"],
    "c": ["aoti"],
    "i": ["aon", "aot"]
  }
}
export default data;