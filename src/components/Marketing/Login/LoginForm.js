// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import { WhiteInput } from "../../../~reusables/atoms/Inputs";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logIn } from "../../../store/actions/authActions";

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2 } from "../../../~reusables/variables/font-sizes";
import {
  medium_space_2,
  small_space
} from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn, history } = props;

  const onFormSubmit = event => {
    event.preventDefault();

    const user = {
      email,
      password
    };

    logIn(user, history);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <div className="form-wrapper">
        <h2>Log In</h2>
        <WhiteInput
          onChange={e => setEmail(e.target.value)}
          required
          margin={medium_space_2}
          placeholder="Your email address"
        />
        <WhiteInput
          onChange={e => setPassword(e.target.value)}
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

export default connect(
  null,
  { logIn }
)(withRouter(LoginForm));
