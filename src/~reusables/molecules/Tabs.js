// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { BasicActionBtn } from "../atoms/Buttons";

// styles
import { primary, light_support } from "../variables/colors";
import { xs_space } from "../variables/spacing";

const Tabs = ({ tabIndex, setTabIndex, arrayList }) => {
  let tabs = 1;
  if (arrayList.length > 8) {
    tabs = Math.ceil(arrayList.length / 8);
  }

  let leftGreyedOut;
  if (tabIndex < 1) {
    leftGreyedOut = "left-greyed-out";
  }

  let rightGreyedOut;
  if (tabIndex === tabs - 1) {
    rightGreyedOut = "right-greyed-out";
  }

  const onClickRightArrow = () => {
    if (tabIndex === tabs - 1) {
      // do nothing
    } else {
      setTabIndex(tabIndex + 1);
    }
  };

  const onClickLeftArrow = () => {
    if (tabIndex < 1) {
      // do nothing
    } else {
      setTabIndex(tabIndex - 1);
    }
  };

  const renderTabs = () => {
    let tabsDisplay = [];
    for (let i = 0; i < tabs; i++) {
      tabsDisplay.push(
        <BasicActionBtn
          onClick={e => setTabIndex(i)}
          className={tabIndex === i ? "active-button" : ""}
          key={i + 1}
        >
          {i + 1}
        </BasicActionBtn>
      );
    }
    return tabsDisplay;
  };

  return (
    <StyledTabs>
      <p className={`${leftGreyedOut}`} onClick={onClickLeftArrow}>
        <i className={`material-icons`}>keyboard_arrow_left</i>{" "}
        <span>Back</span>
      </p>
      {renderTabs()}
      <p className={`${rightGreyedOut}`} onClick={onClickRightArrow}>
        <span>Next</span>{" "}
        <i className={`material-icons`}>keyboard_arrow_right</i>
      </p>
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  margin: ${xs_space} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${primary};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  p:first-child {
    margin-right: ${xs_space};
  }

  .left-greyed-out,
  .right-greyed-out {
    color: ${light_support};
    cursor: not-allowed;
  }

  p:last-child {
    margin-left: ${xs_space};
  }

  button {
    margin: 0 ${xs_space};
  }

  .active-button {
    background-color: ${primary};
  }
`;

export default Tabs;
