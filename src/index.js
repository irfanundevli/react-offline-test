import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "semantic-ui-css/semantic.min.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("reactMountPoint"));
});
