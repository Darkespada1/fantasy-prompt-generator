const characters = [
  "a rogue elf",
  "a cursed prince",
  "an orphan witch",
  "a talking wolf",
  "a dragonborn mercenary"
];

const settings = [
  "in a dying forest",
  "inside a floating kingdom",
  "at the edge of time",
  "under a blood moon",
  "in a realm forgotten by gods"
];

const quests = [
  "must retrieve a lost artifact",
  "is hunted for a crime they didn’t commit",
  "has the power to save or destroy the world",
  "is forced into an ancient prophecy",
  "must confront their true origin"
];

function generatePrompt() {
  const char = characters[Math.floor(Math.random() * characters.length)];
  const setting = settings[Math.floor(Math.random() * settings.length)];
  const quest = quests[Math.floor(Math.random() * quests.length)];

  const prompt = `Your story: ${char}, ${setting}, who ${quest}.`;

  document.getElementById("output").innerText = prompt;
}