import React from "react";
import { shallow } from "enzyme";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./app";
import { energyGenerationApi } from "./energyGenerationApi";

jest.mock("./energyGenerationApi");

describe("App should", () => {
  it("display a loading message when component mounted", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("div").text()).toEqual("Loading...");
  });

  it("display data retrieved from API", async () => {
    const header = "Current Mix Of Energy Generation In The UK";
    energyGenerationApi.mockReturnValue(
      Promise.resolve({
        data: {
          from: "2018-10-24T09:00Z",
          to: "2018-10-24T09:30Z",
          generationmix: [
            {
              fuel: "biomass",
              perc: 11
            },
            {
              fuel: "coal",
              perc: 1
            }
          ]
        },
        success: true
      })
    );

    const { queryByText } = render(<App />);
    await waitForElement(() => header);

    expect(queryByText(header)).toBeInTheDocument();
    expect(queryByText("biomass")).toBeInTheDocument();
    expect(queryByText("coal")).toBeInTheDocument();
  });

  it("display error message if an error occurs while fetching energy generation data", async () => {
    const errorMessage =
      "Unpected error occured while fetching data. Please try again!";
    energyGenerationApi.mockReturnValue(Promise.resolve({}));

    const { queryByText } = render(<App />);
    await waitForElement(() => queryByText(errorMessage));

    expect(queryByText(errorMessage)).toBeInTheDocument();
  });
});
