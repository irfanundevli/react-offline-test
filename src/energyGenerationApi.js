import axios from "axios";

function energyGenerationApi() {
  return axios.get("https://api.carbonintensity.org.uk/generation").then(
    response => {
      const { data } = response;
      return {
        data: data.data,
        message: "",
        success: true
      };
    },
    error => {
      const { status, data } = error.response;
      return {
        status,
        message: data
      };
    }
  );
}

export { energyGenerationApi };
