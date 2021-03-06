// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components/functions
import { BasicActionBtn } from "../atoms/Buttons";

// styles
import { heading_5, body_2 } from "../variables/font-sizes";
import { support } from "../variables/colors";
import { xs_space } from "../variables/spacing";
import { tablet_max_width } from "../variables/media-queries";
import Tabs from "./Tabs";

const PeopleList = props => {
  const {
    firstHeading,
    secondHeading,
    thirdHeading,
    listOfPeople,
    removePerson
  } = props;
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(0);
  }, [listOfPeople]);

  const renderPeople = () => {
    return listOfPeople.slice(tabIndex * 8, 8 * (tabIndex + 1)).map(person => {
      return (
        <div key={person.fullName} className="body">
          <p>{person.fullName}</p>
          <p className="center-align hide-item">{person.quizzes}</p>
          <p className="center-align">{person.score ? person.score : 0}%</p>
          <div>
            <BasicActionBtn onClick={() => removePerson(person.id)}>
              X
            </BasicActionBtn>
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
        <Tabs
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          arrayList={listOfPeople}
        />
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
