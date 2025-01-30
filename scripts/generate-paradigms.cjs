// @ts-check

const fs = require('fs');
const path = require('path');

function formatCommon (color, phrases) {
  return `import { createParadigmData } from "@/utils/paradigm";

export default createParadigmData(
  {
    translation: "{{pronoun}} VERB",
    type: "${color}",
    phrases: ${JSON.stringify(phrases.map((p) => ({ breakdown: p })), undefined, 2)},
  }
);
`
}

// red C-stem

function redCStemHabitual () {
  return formatCommon('PS', [
    [["k"], "ROOT"],
    [["s"], "ROOT"],
    [["la"], "ROOT"],
    [["ye"], "ROOT"],
    [["ka"], "ROOT"],
    [["tni"], "ROOT"],
    [["yakni"], "ROOT"],
    [["sni"], "ROOT"],
    [["h", "RPL"], ["ni"], "ROOT"],
    [["kni"], "ROOT"],
    [["twa"], "ROOT"],
    [["yakwa"], "ROOT"],
    [["swa"], "ROOT"],
    [["lati"], "ROOT"],
    [["kuti"], "ROOT"],
  ]);
}

function redCStemDefinite () {
  return formatCommon('PS', [
      [["waʔ", "DEF"], ["k"], "ROOT"],
      [["wa", "DEF"], ["hse"], "ROOT"],
      [["wa", "DEF"], ["ha"], "ROOT"],
      [["waʔ", "DEF"], ["e"], "ROOT"],
      [["waʔ", "DEF"], ["ka"], "ROOT"],
      [["we", "DEF"], ["tni"], "ROOT"],
      [["waʔ", "DEF"], ["akni"], "ROOT"],
      [["we", "DEF"], ["sni"], "ROOT"],
      [["wa", "DEF"], ["hni"], "ROOT"],
      [["waʔ", "DEF"], ["kni"], "ROOT"],
      [["we", "DEF"], ["twa"], "ROOT"],
      [["waʔ", "DEF"], ["akwa"], "ROOT"],
      [["we", "DEF"], ["swa"], "ROOT"],
      [["wa", "DEF"], ["hati"], "ROOT"],
      [["waʔ", "DEF"], ["kuti"], "ROOT"],

  ]);
}

function redCStemPerfective () {
  return formatCommon('PO', [
      [["wak"], "ROOT"],
      [["s"], "ROOT"],
      [["lo"], "ROOT"],
      [["yako"], "ROOT"],
      [["yo"], "ROOT"],
      [["yukni"], "ROOT"],
      [["yukni"], "ROOT"],
      [["sni"], "ROOT"],
      [["loti"], "ROOT"],
      [["yoti"], "ROOT"],
      [["yukwa"], "ROOT"],
      [["yukwa"], "ROOT"],
      [["swa"], "ROOT"],
      [["loti"], "ROOT"],
      [["yoti"], "ROOT"],

  ])
}

function redCStemIndefiniteFuture () {
  return formatCommon('PS', [
      [["a", "IFUT"], ["k"], "ROOT"],
      [["a", "IFUT"], ["hse"], "ROOT"],
      [["a", "IFUT"], ["ha"], "ROOT"],
      [["a", "IFUT"], ["ye"], "ROOT"],
      [["a", "IFUT"], ["ka"], "ROOT"],
      [["a·e", "IFUT"], ["tni"], "ROOT"],
      [["a", "IFUT"], ["yakni"], "ROOT"],
      [["a·e", "IFUT"], ["sni"], "ROOT"],
      [["a", "IFUT"], ["hni"], "ROOT"],
      [["a", "IFUT"], ["kni"], "ROOT"],
      [["a·e", "IFUT"], ["twa"], "ROOT"],
      [["a", "IFUT"], ["yakwa"], "ROOT"],
      [["a·e", "IFUT"], ["swa"], "ROOT"],
      [["a", "IFUT"], ["hati"], "ROOT"],
      [["a", "IFUT"], ["kuti"], "ROOT"],

  ])
}

function redCStemDefiniteFuture () {
  return formatCommon('PS', [
      [["ʌ", "FUT"], ["k"], "ROOT"],
      [["ʌ", "FUT"], ["hse"], "ROOT"],
      [["ʌ", "FUT"], ["ha"], "ROOT"],
      [["ʌ", "FUT"], ["ye"], "ROOT"],
      [["ʌ", "FUT"], ["ka"], "ROOT"],
      [["ʌ", "FUT"], ["tni"], "ROOT"],
      [["ʌ", "FUT"], ["yakni"], "ROOT"],
      [["ʌ", "FUT"], ["sni"], "ROOT"],
      [["ʌ", "FUT"], ["hni"], "ROOT"],
      [["ʌ", "FUT"], ["kni"], "ROOT"],
      [["ʌ", "FUT"], ["twa"], "ROOT"],
      [["ʌ", "FUT"], ["yakwa"], "ROOT"],
      [["ʌ", "FUT"], ["swa"], "ROOT"],
      [["ʌ", "FUT"], ["hati"], "ROOT"],
      [["ʌ", "FUT"], ["kuti"], "ROOT"],

  ])
}

function redCStemCommand () {
  return formatCommon('PS', [
      [["s"], "ROOT"],
      [["sni"], "ROOT"],
      [["swa"], "ROOT"],
  ])
}

// red A-stem

function redAStemHabitual () {
  return formatCommon('PS', [
    [["k"], "ROOT1"],
    [["s"], "ROOT1"],
    [["l"], "ROOT1"],
    [["yu"], "ROOT2"],
    [["w"], "ROOT1"],
    [["ty"], "ROOT1"],
    [["yaky"], "ROOT1"],
    [["tsy"], "ROOT1"],
    [["y"], "ROOT1"],
    [["ky"], "ROOT1"],
    [["tw"], "ROOT1"],
    [["yakw"], "ROOT1"],
    [["sw"], "ROOT1"],
    [["lu"], "ROOT2"],
    [["ku"], "ROOT2"],
  ]);
}

function redAStemDefinite () {
  return formatCommon('PS', [
    [["waʔ", "DEF"], ["k"], "ROOT1"],
      [["wa", "DEF"], ["hs"], "ROOT1"],
      [["wa", "DEF"], ["h"], "ROOT1"],
      [["waʔ", "DEF"], ["u"], "ROOT2"],
      [["waʔ", "DEF"], ["w"], "ROOT1"],
      [["we", "DEF"], ["ty"], "ROOT1"],
      [["waʔ", "DEF"], ["aky"], "ROOT1"],
      [["we", "DEF"], ["tsy"], "ROOT1"],
      [["wa", "DEF"], ["hy"], "ROOT1"],
      [["waʔ", "DEF"], ["ky"], "ROOT1"],
      [["we", "DEF"], ["tw"], "ROOT1"],
      [["waʔ", "DEF"], ["akw"], "ROOT1"],
      [["we", "DEF"], ["sw"], "ROOT1"],
      [["wa", "DEF"], ["hu"], "ROOT2"],
      [["waʔ", "DEF"], ["ku"], "ROOT2"],
  ]);
}

function redAStemPerfective () {
  return formatCommon('PO', [
    [["wak"], "ROOT1"],
    [["s"], "ROOT1"],
    [["lo"], "ROOT2"],
    [["yako"], "ROOT2"],
    [["yo"], "ROOT2"],
    [["yuky"], "ROOT1"],
    [["yuky"], "ROOT1"],
    [["tsy"], "ROOT1"],
    [["lon"], "ROOT1"],
    [["yon"], "ROOT1"],
    [["yukw"], "ROOT1"],
    [["yukw"], "ROOT1"],
    [["sw"], "ROOT1"],
    [["lon"], "ROOT1"],
    [["yon"], "ROOT1"],
  ])
}

function redAStemIndefiniteFuture () {
  return formatCommon('PS', [
      [["a", "IFUT"], ["k"], "ROOT1"],
      [["a", "IFUT"], ["hs"], "ROOT1"],
      [["a", "IFUT"], ["h"], "ROOT1"],
      [["a·", "IFUT"], ["yu"], "ROOT2"],
      [["a·", "IFUT"], ["u"], "ROOT2"],
      [["a·e", "IFUT"], ["ty"], "ROOT1"],
      [["a", "IFUT"], ["yaky"], "ROOT1"],
      [["a", "IFUT"], ["tsy"], "ROOT1"],
      [["a", "IFUT"], ["hy"], "ROOT1"],
      [["a", "IFUT"], ["ky"], "ROOT1"],
      [["a·e", "IFUT"], ["tw"], "ROOT1"],
      [["a", "IFUT"], ["yakw"], "ROOT1"],
      [["a·e", "IFUT"], ["sw"], "ROOT1"],
      [["a", "IFUT"], ["hu"], "ROOT2"],
      [["a", "IFUT"], ["ku"], "ROOT2"],
  ])
}

function redAStemDefiniteFuture () {
  return formatCommon('PS', [
      [["ʌ", "FUT"], ["k"], "ROOT1"],
      [["ʌ", "FUT"], ["hs"], "ROOT1"],
      [["ʌ", "FUT"], ["h"], "ROOT1"],
      [["ʌ", "FUT"], ["yu"], "ROOT2"],
      [["ʌ", "FUT"], ["w"], "ROOT1"],
      [["ʌ", "FUT"], ["ty"], "ROOT1"],
      [["ʌ", "FUT"], ["yaky"], "ROOT1"],
      [["ʌ", "FUT"], ["tsy"], "ROOT1"],
      [["ʌ", "FUT"], ["hy"], "ROOT1"],
      [["ʌ", "FUT"], ["ky"], "ROOT1"],
      [["ʌ", "FUT"], ["tw"], "ROOT1"],
      [["ʌ", "FUT"], ["yakw"], "ROOT1"],
      [["ʌ", "FUT"], ["sw"], "ROOT1"],
      [["ʌ", "FUT"], ["hu"], "ROOT2"],
      [["ʌ", "FUT"], ["ku"], "ROOT2"],
  ])
}

function redAStemCommand () {
  return formatCommon('PS', [
      [["s"], "ROOT1"],
      [["tsy"], "ROOT1"],
      [["sw"], "ROOT1"],
  ])
}

// export

module.exports = function generateParadigm (data) {
  const blah = ['HAB', 'DEF', 'PFV', 'IFUT', 'FUT', 'CMD']
  let fns = [];
  if (data.color === 'PS') {
    if (data.stem === 'C') {
      fns = [
        redCStemHabitual,
        redCStemDefinite,
        redCStemPerfective,
        redCStemIndefiniteFuture,
        redCStemDefiniteFuture,
        redCStemCommand,
      ]
    } else if (data.stem === 'A') {
      fns = [
        redAStemHabitual,
        redAStemDefinite,
        redAStemPerfective,
        redAStemIndefiniteFuture,
        redAStemDefiniteFuture,
        redAStemCommand,
      ]
    }
  }

  for (let i = 0; i < blah.length; i++) {
    const suffix = blah[i];
    fs.writeFileSync(path.join(__dirname, 'temp', `${data.verb}-${suffix}.ts`), fns[i]())
  }
}
