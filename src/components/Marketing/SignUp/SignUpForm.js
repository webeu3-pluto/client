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

// styles
import { white } from "../../../~reusables/variables/colors";
import { heading_2 } from "../../../~reusables/variables/font-sizes";
import {
  medium_space_2,
  small_space
} from "../../../~reusables/variables/spacing";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const SignUpForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [cohort, setCohort] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, history } = props;

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
            <option value="WEBEU1">WEBEU1</option>
            <option value="WEBEU1">WEBEU2</option>
            <option value="WEBEU1">WEBEU3</option>
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

export default connect(
  null,
  { signUp }
)(withRouter(SignUpForm));
