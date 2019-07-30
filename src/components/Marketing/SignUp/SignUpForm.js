// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { WhiteInput } from "../../../~reusables/atoms/Inputs";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import { WhiteSelect } from "../../../~reusables/atoms/Select";

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2 } from "../../../~reusables/variables/font-sizes";
import { medium_space_2, small_space } from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const SignUpForm = () => {
  return (
    <StyledForm>
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <div className="two-column">
          <WhiteInput
            required
            margin={medium_space_2}
            placeholder="Your first name"
          />
          <WhiteInput
            required
            margin={medium_space_2}
            placeholder="Your last name"
          />
        </div>
        <div className="two-column">
          <WhiteSelect required margin={medium_space_2}>
            <option value="" disabled selected hidden>
              Select role
            </option>
            <option value="student">Student</option>
            <option value="team_lead">Team Lead</option>
          </WhiteSelect>
          <WhiteSelect required margin={medium_space_2}>
            <option value="" disabled selected hidden>
              Select cohort
            </option>
            <option value="WEBEU1">WEBEU1</option>
          </WhiteSelect>
        </div>
        <WhiteInput
          required
          margin={medium_space_2}
          placeholder="Your email address"
        />
        <WhiteInput
          required
          margin={medium_space_2}
          placeholder="Choose a password"
        />
        <ButtonTertiary>Sign Up</ButtonTertiary>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 0 auto;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  .two-column {
    display: flex;
    justify-content: space-between;
    input {
      width: 42.5%;
    }

    select {
      width: 45%;
    }
  }

  input {
    width: 98%;
  }

  h2 {
    color: ${white};
    font-size: ${heading_2};
  }

  button {
    float: right;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    padding: 0 ${small_space};
    height: 80%;
  }
`;

export default SignUpForm;
