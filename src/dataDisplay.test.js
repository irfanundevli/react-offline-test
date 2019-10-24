import React from "react";
import { shallow } from "enzyme";
import { Header, Segment, Statistic } from "semantic-ui-react";
import { DataDisplay } from "./dataDisplay";

describe("list component should", () => {
  it("render a semantic header ", () => {
    const wrapper = shallow(<DataDisplay header="header" />);

    const headerWrapper = wrapper.find(Header);

    expect(headerWrapper).toHaveLength(1);
    expect(headerWrapper.props().as).toEqual("h2");
    expect(headerWrapper.props().attached).toEqual("top");
    expect(headerWrapper.props().color).toEqual("red");
  });

  it("render semantic attached segment which display message or data", () => {
    const wrapper = shallow(<DataDisplay header="header" />);

    const segmentWrapper = wrapper.find(Segment);
    expect(segmentWrapper).toHaveLength(1);
    expect(segmentWrapper.props().inverted).toBeTruthy();
  });

  it("render message if there is no data to show inside  segment", () => {
    const wrapper = shallow(
      <DataDisplay header="header" noDataMessage="There is no data" />
    );

    const messageWrapper = wrapper.find("div");
    expect(messageWrapper).toHaveLength(1);
    expect(messageWrapper.text()).toEqual("There is no data");
    expect(messageWrapper.parent().is(Segment)).toBeTruthy();
  });

  it("render semantic statistic component equals to generationmix list size inside segment", () => {
    const data = {
      generationmix: [
        { fuel: "fuel1", perc: 1 },
        { fuel: "fuel2", perc: 2 },
        { fuel: "fuel3", perc: 3 }
      ]
    };
    const wrapper = shallow(<DataDisplay header="header" data={data} />);

    const messageWrapper = wrapper.find(Statistic);
    expect(messageWrapper).toHaveLength(3);
    expect(
      messageWrapper
        .first()
        .parent()
        .is(Segment)
    ).toBeTruthy();
    expect(
      messageWrapper
        .last()
        .parent()
        .is(Segment)
    ).toBeTruthy();
  });
});
