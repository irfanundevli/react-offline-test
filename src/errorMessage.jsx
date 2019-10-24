import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

const ErrorMessage = ({ message }) => {
  return (
    <Message negative>
      <Message.Header>Oops! Something went wrong.</Message.Header>
      <p>{message}</p>
    </Message>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export { ErrorMessage };
