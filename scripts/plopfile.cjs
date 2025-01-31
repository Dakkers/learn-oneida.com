const fs = require('fs');
const path = require('path');
const generateParadigm = require('./generate-paradigms.cjs');

const PATH_PARTICLE_LIST = path.join(__dirname, '..', 'app', 'components', 'resources', 'particleList.ts')

module.exports = function (plop) {
  plop.setGenerator("particle", {
    description: "Particle generator",

    async prompts(inquirer) {
      return getParticlePrompts(inquirer);
    },

    actions: [
      function customAction(data) {
        updateParticleListFile(data, [{
          oneida: formatOneida(data.example_0_oneida),
          en: formatEnglish(data.example_0_en),
        }]);
      },
    ],
  });
  plop.setGenerator("particle-multi", {
    description: "Particle generator",

    async prompts(inquirer) {
      return getParticlePrompts(inquirer, true);
    },

    actions: [
      function customAction(data) {
        const examples = {};
        for (const key in data) {
          if (key.startsWith("example_")) {
            const [num, lang] = key.split("_").slice(1);
            const obj = num in examples ? examples[num] : {};
            obj[lang] = lang === "oneida" ? formatOneida(data[key]) : formatEnglish(data[key]);
            examples[num] = obj;
          }
        }
        updateParticleListFile(data, examples);
      },
    ],
  });
  plop.setGenerator('paradigm-active', {
    description: 'Generate paradigms for active verbs',

     prompts: [{
        type: 'list',
        name: 'color',
        message: 'Color',
        choices: [
          { value: 'PO', name: 'objective (blue)' },
          { value: 'PS', name: 'subjective (red)' },
          { value: 'PI', name: 'interactive (purple)' },
          { value: 'PP', name: 'possessive (light blue)' },
        ]
    }, {
      type: 'list',
      name: 'stem',
      message: 'Stem',
      choices: ['C','A','E','I','O','U','V','CE']
    }, {
      type: 'input',
      name: 'verb',
      message: 'Verb',
    }],

    actions: [
      function customAction(data) {
        generateParadigm(data);
      },
    ],
  })
};

const formatOneida = (x) => x.replaceAll("’", "ʔ");
const formatEnglish = (x) => x.replaceAll("’", "'");

async function getParticlePrompts(inquirer, isMultiple = false) {
  const promptQueue = [
    {
      type: "input",
      name: "key",
      message: "Key?",
    },
    {
      type: "input",
      name: "oneida",
      message: "Oneida translation?",
    },
    {
      type: "input",
      name: "english",
      message: "English translation?",
    },
  ];
  if (isMultiple) {
    promptQueue.push({
      type: "input",
      name: "numExamples",
      message: "How many examples are there?",
    });
  }
  let allAnswers = {};
  while (promptQueue.length > 0) {
    const nextPrompt = promptQueue.shift();
    const nextAnswer = await inquirer.prompt(nextPrompt);
    if (
      (isMultiple && nextPrompt.name === "numExamples") ||
      (!isMultiple && nextPrompt.name === "english")
    ) {
      const numExamples = parseInt(isMultiple ? nextAnswer.numExamples : 1);
      for (let i = 0; i < numExamples; i++) {
        promptQueue.push({
          type: "input",
          name: `example_${i}_oneida`,
          message: `Example ${i + 1} Oneida`,
        });
        promptQueue.push({
          type: "input",
          name: `example_${i}_en`,
          message: `Example ${i + 1} English`,
        });
      }
    }
    allAnswers = { ...allAnswers, ...nextAnswer };
  }
  return allAnswers;
}

function updateParticleListFile (data, examples) {
  console.log('updateParticleListFile()', data, examples)
  const MARKER = '// PLOP:ADD_PARTICLE'
  let particleListFileContent = fs.readFileSync(PATH_PARTICLE_LIST, 'utf8')
  particleListFileContent = particleListFileContent.replace(MARKER, `\n ${
    JSON.stringify(
      {
        key: data.key,
        translation: formatOneida(data.oneida),
        en: formatEnglish(data.english),
        examples: Array.isArray(examples) ? examples : Object.values(examples),
      },
      null,
      2
    )
  },\n${MARKER}`)
  fs.writeFileSync(PATH_PARTICLE_LIST, particleListFileContent)
}

