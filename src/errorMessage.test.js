import React from "react";
import { shallow } from "enzyme";
import { Message as SemanticMessage } from "semantic-ui-react";
import { ErrorMessage } from "./errorMessage";

describe("errorMessage component should", () => {
  it("render semantic Message component", () => {
    const wrapper = shallow(<ErrorMessage message="Error" />);

    expect(wrapper.find(SemanticMessage)).toHaveLength(1);
  });

  it("display message prop", () => {
    const wrapper = shallow(<ErrorMessage message="Error" />);

    const messageWrapper = wrapper.find("p");

    expect(messageWrapper.text()).toEqual("Error");
    expect(messageWrapper.parent().is(SemanticMessage)).toBeTruthy();
  });
});
