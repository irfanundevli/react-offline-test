import { randomizer } from "./randomNumber";

const colorPalette = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey"
];

function pickColor() {
  const index = randomizer(colorPalette.length);
  return colorPalette[index];
}

export { pickColor };
