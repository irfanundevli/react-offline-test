import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { energyGenerationApi } from "./energyGenerationApi";
import { ErrorMessage } from "./errorMessage";
import { DataDisplay } from "./dataDisplay";

const App = () => {
  const [energyGenerationMix, setEnergyGenerationMix] = useState({
    data: {},
    isDataLoading: true,
    apiCallError: "",
    isApiCallFailed: false
  });

  useEffect(() => {
    energyGenerationApi().then(response => {
      setEnergyGenerationMix({
        data: response.data,
        isDataLoading: false,
        isApiCallFailed:
          response.success && response.success === true ? false : true,
        apiCallError:
          "Unpected error occured while fetching data. Please try again!"
      });
    });
  }, []);

  if (energyGenerationMix.isDataLoading === true) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid textAlign="center">
      {energyGenerationMix.isApiCallFailed ? (
        <ErrorMessage message={energyGenerationMix.apiCallError} />
      ) : (
        <DataDisplay
          header="Current Mix Of Energy Generation In The UK"
          noDataMessage="Data Not Found"
          data={energyGenerationMix.data}
        />
      )}
    </Container>
  );
};

export { App };
