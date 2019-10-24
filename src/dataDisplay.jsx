import React from "react";
import PropTypes from "prop-types";
import { Header, Segment, Statistic } from "semantic-ui-react";
import { pickColor } from "./colorPalette";

const DataDisplay = ({ header, data, noDataMessage }) => {
  return (
    <>
      <Header as="h2" attached="top" color="red">
        {header}
      </Header>
      <Segment inverted>
        {data.generationmix && data.generationmix.length > 0 ? (
          data.generationmix.map((item, index) => {
            return (
              <Statistic key={index} inverted color={pickColor()}>
                <Statistic.Value>{item.perc}</Statistic.Value>
                <Statistic.Label>{item.fuel}</Statistic.Label>
              </Statistic>
            );
          })
        ) : (
          <div>{noDataMessage}</div>
        )}
      </Segment>
    </>
  );
};

DataDisplay.defaultProps = {
  noDataMessage: "No Data",
  data: {}
};

DataDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
    generationmix: PropTypes.arrayOf(
      PropTypes.shape({ fuel: PropTypes.string, perc: PropTypes.number })
    )
  }),
  noDataMessage: PropTypes.string
};

export { DataDisplay };
