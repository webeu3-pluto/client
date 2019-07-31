// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";
import { connect } from "react-redux";
import { validateUser, updateUser } from "../../../store/actions/authActions";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3,
  small_space,
  xs_space
} from "../../../~reusables/variables/spacing";
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary
} from "../../../~reusables/atoms/Buttons";
import { support } from "../../../~reusables/variables/colors";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const Profile = ({ user, validateUser, updateUser }) => {
  const { id, role, cohort, email, password } = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const onButtonSubmit = event => {
    event.preventDefault();
    const userToUpdate = {
      id,
      firstName,
      lastName,
      role: role,
      cohort: cohort,
      email: email,
      password: password
    };

    updateUser(userToUpdate);
  };

  const logout = () => {
    localStorage.clear();
    validateUser();
  };

  return (
    <StyledProfile>
      <div className="wrapper">
        <p className="label">First name</p>
        <LineInput
          value={firstName}
          placeholder="Your first name"
          onChange={e => setFirstName(e.target.value)}
        />
        <p className="label">Last name</p>
        <LineInput
          value={lastName}
          placeholder="Your last name"
          onChange={e => setLastName(e.target.value)}
        />
        <div className="buttons">
          <TextButton color="#DA2640">Delete Account</TextButton>
          <ButtonTertiary onClick={logout}>Logout</ButtonTertiary>
          <ButtonPrimary onClick={onButtonSubmit}>Save</ButtonPrimary>
        </div>
      </div>
    </StyledProfile>
  );
};

const StyledProfile = styled.main`
  max-width: 600px;
  margin: ${medium_space_2} ${large_space};

  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  border-radius: 8px;

  .label {
    margin-bottom: ${small_space};
    font-weight: 500;
    color: ${support};
  }

  .wrapper {
    padding: ${medium_space_3} ${medium_space_2};
    display: flex;
    flex-direction: column;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    button {
      margin: ${small_space} ${xs_space} 0 ${xs_space};
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    margin: ${small_space};
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { validateUser, updateUser }
)(Profile);
