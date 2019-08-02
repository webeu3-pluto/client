// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";

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

      <LineInput
        // value={firstName}
        placeholder="Your first name"
        // onChange={e => setFirstName(e.target.value)}
      />
      <h4 className="label">Choose sub-category</h4>
      <LineInput
        // value={lastName}
        placeholder="Your last name"
        // onChange={e => setLastName(e.target.value)}
      />
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
    color: ${headings}
  }
`;

export default QuizDetails;
