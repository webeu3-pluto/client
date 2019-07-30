// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { WhiteInput } from "../../../~reusables/atoms/Inputs";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2 } from "../../../~reusables/variables/font-sizes";
import { medium_space_2, small_space } from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const LoginForm = () => {
  return (
    <StyledForm>
      <div className="form-wrapper">
        <h2>Log In</h2>
        <WhiteInput
          required
          margin={medium_space_2}
          placeholder="Your email address"
        />
        <WhiteInput
          required
          margin={medium_space_2}
          placeholder="Your password"
        />
        <ButtonTertiary>Log In</ButtonTertiary>
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

export default LoginForm;
