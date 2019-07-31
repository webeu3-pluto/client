// modules
import React from "react";
import styled from "styled-components";

// components/functions

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
import { LineInput } from "../../../~reusables/atoms/Inputs";
import { text } from "../../../~reusables/variables/colors";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const Profile = () => {
  return (
    <StyledProfile>
      <div className="wrapper">
        <p className="label">First name</p>
        <LineInput placeholder="Your first name" />
        <p className="label">Last name</p>
        <LineInput placeholder="Your last name" />
        <div className="buttons">
          <TextButton color="#DA2640">Delete Account</TextButton>
          <ButtonTertiary>Logout</ButtonTertiary>
          <ButtonPrimary>Save</ButtonPrimary>
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

  p {
    margin-bottom: ${small_space};
    font-weight: 500;
    color: ${text};
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

export default Profile;
