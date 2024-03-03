// import { BreakdownArray, TextBreakdownSuffix } from "~/components/TextBreakdown";
// import { type Pronoun } from "./index";

// interface ConjugatorParams {
//   root: string;
//   colour: 'blue' | 'red' | 'purple';
//   fake?: boolean;
// }

// class Conjugator  {
//   #root: string;
//   #stem: string;
//   #colour: string;

//   constructor(params: ConjugatorParams) {
//     this.#root = params.root;
//     this.#colour = params.colour;
//     const letter = this.#root.at(0) as string;
//     this.#stem = ['a', 'e', 'i', 'o', 'u', 'ʌ'].includes(letter) ? letter : 'c';
//   }

//   conjugate (pronoun: Pronoun): BreakdownArray {
//     if (this.#colour === 'blue') {
//       return this.#conjugateBlue(pronoun)
//     }
//   }

//   #conjugateBlue (pronoun: Pronoun): BreakdownArray {
//     if (this.#stem === 'c') {
//       return this.#conjugateBlueCStem(pronoun);
//     }
//   }

//   #conjugateBlueCStem (pronoun: Pronoun) {
//     if (pronoun === 'i') {
//       return []
//     }
//   }
// }

// const example = new Conjugator({
//   colour: 'blue',
//   root: 'atkanuní',
// })

// console.log(example.conjugate('i'))
