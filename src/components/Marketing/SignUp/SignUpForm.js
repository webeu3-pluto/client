// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import { WhiteInput } from "../../../~reusables/atoms/Inputs";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import { WhiteSelect } from "../../../~reusables/atoms/Select";
import { signUp } from "../../../store/actions/authActions";
import { withRouter } from 'react-router-dom'
import ComponentLoader from "../../../~reusables/molecules/ComponentLoader";

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2, body_2 } from "../../../~reusables/variables/font-sizes";
import {
  medium_space_2,
  small_space
} from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";
import cohorts from "../../../~reusables/data/cohorts";

const SignUpForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [cohort, setCohort] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, history, signupError, authLoader } = props;

  const onFormSubmit = event => {
    event.preventDefault();

    const user = {
      firstName,
      lastName,
      role,
      cohort,
      email,
      password
    }

    signUp(user, history);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <div className="two-column">
          <WhiteInput
            onChange={e => setFirstName(e.target.value)}
            required
            margin={medium_space_2}
            placeholder="Your first name"
          />
          <WhiteInput
            onChange={e => setLastName(e.target.value)}
            required
            margin={medium_space_2}
            placeholder="Your last name"
          />
        </div>
        <div className="two-column">
          <WhiteSelect
            onChange={e => setRole(e.target.value)}
            required
            margin={medium_space_2}
          >
            <option value="" disabled selected hidden>
              Select role
            </option>
            <option value="Student">Student</option>
            <option value="Team Lead">Team Lead</option>
          </WhiteSelect>
          <WhiteSelect
            onChange={e => setCohort(e.target.value)}
            required
            margin={medium_space_2}
          >
            <option value="" disabled selected hidden>
              Select cohort
            </option>
            {cohorts.map(cohort => <option value={cohort}>{cohort}</option>)}
          </WhiteSelect>
        </div>
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
          placeholder="Choose a password"
          type="password"
        />
        <ButtonTertiary>Sign Up</ButtonTertiary>
        {authLoader && <ComponentLoader height="50px" color={white} />}
        {signupError && <p className="error">{signupError}</p>}
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

function mapStateToProps(state) {
  return {
    signupError: state.auth.signupError,
    authLoader: state.auth.authLoader
  }
}

export default connect(
  mapStateToProps,
  { signUp }
)(withRouter(SignUpForm));
