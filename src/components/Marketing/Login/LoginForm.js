// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';

// components/functions
import { WhiteInput } from "../../../~reusables/atoms/Inputs";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import { logIn } from "../../../store/actions/authActions";
import ComponentLoader from "../../../~reusables/molecules/ComponentLoader";

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2, body_2 } from "../../../~reusables/variables/font-sizes";
import {
  medium_space_2,
  small_space
} from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";
import HasLoggedIn from "../../../~reusables/hoc/HasLoggedIn";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn, history, loginError, authLoader } = props;

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
          type="password"
        />
        <ButtonTertiary>Log In</ButtonTertiary>
        {authLoader && <ComponentLoader height="50px" color={white} />}
        {loginError && <p className="error">{loginError}</p>}
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

  .error {
    color: ${white};
    font-size: ${body_2};
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

function mapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
    authLoader: state.auth.authLoader
  }
}

export default compose(connect(
  mapStateToProps,
  { logIn }
), HasLoggedIn)(withRouter(LoginForm));
