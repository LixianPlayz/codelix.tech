const prompts = [
  "Invent a room that changes based on what song is playing.",
  "Describe a marketplace where people trade shadows.",
  "Create a creature that protects forgotten websites.",
  "Imagine an elevator that stops at emotions instead of floors.",
  "Design a clock that counts down to a mystery instead of time.",
  "Write about a planet where every storm leaves behind a memory.",
  "Invent a museum where the exhibits are possible futures.",
  "Describe a vending machine that sells impossible objects.",
  "Create a city law that only exists during moonlight.",
  "Imagine a door that refuses to open unless you tell it the truth."
];

exports.handler = async () => {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  };
};
