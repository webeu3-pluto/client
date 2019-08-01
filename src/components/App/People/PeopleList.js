// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components/functions
import { BasicActionBtn } from "../../../~reusables/atoms/Buttons";

// styles
import { heading_5, body_2 } from "../../../~reusables/variables/font-sizes";
import {
  support,
  light_support,
  primary
} from "../../../~reusables/variables/colors";
import { xs_space } from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const PeopleList = props => {
  const { firstHeading, secondHeading, thirdHeading, listOfPeople } = props;
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(0);
  }, [listOfPeople]);

  let tabs = 1;
  if (listOfPeople.length > 8) {
    tabs = Math.ceil(listOfPeople.length / 8);
  }

  let leftGreyedOut;
  if (tabIndex < 1) {
    leftGreyedOut = "left-greyed-out";
  }

  let rightGreyedOut;
  if (tabIndex === tabs - 1) {
    rightGreyedOut = "right-greyed-out";
  }

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

  const renderPeople = () => {
    return listOfPeople.map(person => {
      return (
        <div key={person.name} className="body">
          <p>{person.name}</p>
          <p className="center-align hide-item">{person.quizzes}</p>
          <p className="center-align">{person.score}%</p>
          <div>
            <BasicActionBtn>X</BasicActionBtn>
          </div>
        </div>
      );
    });
  };

  return (
    <StyledList>
      <div className="headers">
        <h4>{firstHeading}</h4>
        <h4 className="center-align hide-item">{secondHeading}</h4>
        <h4 className="center-align">{thirdHeading}</h4>
        <div />
      </div>
      {renderPeople()}
      <div className="footer">
        <p className={`${leftGreyedOut}`}>
          <i className={`material-icons`}>keyboard_arrow_left</i>{" "}
          <span>Back</span>
        </p>
        {renderTabs()}
        <p className={`${rightGreyedOut}`} onClick={() => setTabIndex(1)}>
          <span>Next</span>{" "}
          <i className={`material-icons`}>keyboard_arrow_right</i>
        </p>
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  .headers {
    display: flex;
    align-items: center;
    h4 {
      font-size: ${heading_5};
      font-weight: 400;
      color: ${support};
      flex: 1 1 200px;
      margin-bottom: ${xs_space};
    }
    div {
      flex: 1 1 100px;
    }
  }

  .footer {
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
  }

  .center-align {
    text-align: center;
  }

  .body {
    display: flex;
    align-items: center;

    p {
      font-size: ${body_2};
      flex: 1 1 200px;
      margin-bottom: ${xs_space};
    }

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1 1 100px;
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    .hide-item {
      display: none;
    }
  }
`;

export default PeopleList;
