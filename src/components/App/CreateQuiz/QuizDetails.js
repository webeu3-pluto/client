// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { LineSelect } from "../../../~reusables/atoms/Select";

// styles
import {
  medium_space_2,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { headings } from "../../../~reusables/variables/colors";

const QuizDetails = () => {
  return (
    <StyledQuizDetails>
      <h4 className="label">Choose category</h4>
      <LineSelect>
        <option value="WEBEU1">Web Development</option>
      </LineSelect>
      <h4 className="label">Choose sub-category</h4>
      <LineSelect>
        <option value="WEBEU1">User Interface and Git</option>
      </LineSelect>
    </StyledQuizDetails>
  );
};

const StyledQuizDetails = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  padding: ${medium_space_2} ${medium_space_1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 80%;

  h4 {
    color: ${headings};
  }
`;

export default QuizDetails;
