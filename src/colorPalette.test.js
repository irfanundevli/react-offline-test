import { pickColor } from "./colorPalette";
import { randomizer } from "./randomNumber";

jest.mock("./randomNumber");

describe("color pallette should", () => {
  it("return yellow color for index 2 ", () => {
    randomizer.mockReturnValue(2);

    const result = pickColor();

    expect(result).toEqual("yellow");
  });
});
