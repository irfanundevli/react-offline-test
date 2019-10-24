import axios from "axios";
import { energyGenerationApi } from "./energyGenerationApi";

jest.mock("axios");

describe("energyGenerationApi should", () => {
  it("return success if api call operation is ended successfully", done => {
    const response = { data: { data: {} } };
    axios.get.mockReturnValue(Promise.resolve(response));

    energyGenerationApi().then(response => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(response.success).toBeTruthy();
      done();
    });
  });

  it("not return success if api call operation is failed", done => {
    const error = { response: { data: {}, status: 500 } };
    axios.get.mockReturnValue(Promise.reject(error));

    energyGenerationApi().then(response => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(response.success).toBeUndefined();
      done();
    });
  });
});
