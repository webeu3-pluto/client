// modules
import React from "react";
import styled from "styled-components";
import { tablet_max_width } from "../variables/media-queries";

// components/functions
import MobileNavItem from "../molecules/MobileNavItem";

// styles
import { white } from "../variables/colors";
import { small_space } from "../variables/spacing";

const AppFooter = () => {
  return (
    <StyledFooter>
      <MobileNavItem icon="home" text="Dashboard" path="/app" />
      <MobileNavItem
        icon="question_answer"
        text="Quizzes"
        path="/app/quizzes"
      />
      <MobileNavItem icon="people" text="People" path="/app/people" />
      <MobileNavItem icon="settings" text="Profile" path="/app/profile" />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: none;

  @media only screen and (max-width: ${tablet_max_width}) {
    background-color: ${white};
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: ${small_space};
    border-top: 1px solid rgba(74, 85, 104, 0.2);
    box-shadow: 0px -1px 5px rgba(151, 162, 185, 0.1),
      0px -3px 4px rgba(151, 162, 185, 0.06),
      0px -2px 4px rgba(151, 162, 185, 0.07);

    bottom: 0;
    position: fixed;
  }
`;

export default AppFooter;
