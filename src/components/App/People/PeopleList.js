// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { DeleteActionBtn } from "../../../~reusables/atoms/Buttons";

// styles
import { heading_5, body_2 } from "../../../~reusables/variables/font-sizes";
import { support } from "../../../~reusables/variables/colors";
import { xs_space } from "../../../~reusables/variables/spacing";

const PeopleList = props => {
  const { firstHeading, secondHeading, thirdHeading, listOfPeople } = props;

  const renderPeople = () => {
    return listOfPeople.map(person => {
      return (
        <div className="body">
          <p>{person.name}</p>
          <p className="center-align">{person.quizzes}</p>
          <p className="center-align">{person.score}%</p>
          <div>
            <DeleteActionBtn>X</DeleteActionBtn>
          </div>
        </div>
      );
    });
  };

  return (
    <StyledList>
      <div className="headers">
        <h4>{firstHeading}</h4>
        <h4 className="center-align">{secondHeading}</h4>
        <h4 className="center-align">{thirdHeading}</h4>
        <div />
      </div>
      {renderPeople()}
    </StyledList>
  );
};

const StyledList = styled.div`
  .headers {
    display: flex;
    align-items: center;
    h4 {
      font-size: ${heading_5};
      color: ${support};
      flex: 1 1 200px;
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
`;

export default PeopleList;
