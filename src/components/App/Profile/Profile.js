// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";
import { connect } from "react-redux";
import { validateUser, updateUser, deleteUser } from "../../../store/actions/authActions";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3,
  small_space,
  xs_space,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary
} from "../../../~reusables/atoms/Buttons";
import { support } from "../../../~reusables/variables/colors";

const Profile = ({ user, validateUser, updateUser, deleteUser }) => {
  const { id, role, cohort, email, password } = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [modal, setModal] = useState(false);

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
      {modal && (
        <DeleteModal
          functionCb={deleteUser}
          closeModal={setModal}
          heading="Delete User Account"
          paragraph="Are you sure you wish to delete your user account? This action cannot be undone."
        />
      )}
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
          <TextButton color="#DA2640" onClick={() => setModal(true)}>
            Delete Account
          </TextButton>
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

  @media only screen and (max-width: 767px) {
    margin: ${small_space};

    .wrapper {
      padding: ${medium_space_1} ${small_space};
    }
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { validateUser, updateUser, deleteUser }
)(Profile);
