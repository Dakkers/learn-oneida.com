module.exports = function (plop) {
  plop.setGenerator("particle", {
    description: "Particle generator",

    async prompts(inquirer) {
      return getParticlePrompts(inquirer);
    },

    actions: [
      function customAction(data) {
        console.log(
          "\n\n",
          JSON.stringify(
            {
              key: data.key,
              oneida: formatOneida(data.oneida),
              en: data.english,
              examples: [
                {
                  oneida: data.example_0_oneida,
                  english: data.example_0_english,
                },
              ],
            },
            null,
            2
          )
        );
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
            obj[lang] = lang === "oneida" ? formatOneida(data[key]) : data[key];
            examples[num] = obj;
          }
        }

        console.log(
          "\n\n",
          JSON.stringify(
            {
              key: data.key,
              oneida: formatOneida(data.oneida),
              en: data.english,
              examples: Object.values(examples),
            },
            null,
            2
          )
        );
      },
    ],
  });
};

const formatOneida = (x) => x.replaceAll("’", "ʔ");

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
          name: `example_${i}_english`,
          message: `Example ${i + 1} English`,
        });
      }
    }
    allAnswers = { ...allAnswers, ...nextAnswer };
  }
  return allAnswers;
}
