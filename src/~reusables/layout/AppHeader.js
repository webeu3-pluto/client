// modules
import React from "react";
import styled from "styled-components";

// components/functions

// styles
import { large_space, medium_space_2 } from "../variables/spacing";
import { support, secondary, white, text, headings } from "../variables/colors";
import { heading_4 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";

const AppHeader = () => {
  return (
    <StyledHeader>
      <div>
        <div className="info">
          <h4>Isaac Aderogba</h4>
          <p>Team Lead</p>
        </div>
        <div className="initials">IA</div>
        <div className="arrow-down" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > div {
    margin-right: ${large_space};
    display: flex;
    align-items: center;
  }

  h4, p {
    margin: 0;
  }

  h4 {
    color: ${headings};
    font-size: ${heading_4};
  }

  p {
    color: ${text};
  }

  .info {
    text-align: right;
  }

  .initials {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background: ${secondary};
    margin: 0 ${medium_space_2};
    font-weight: 500;

    color: ${white};
    font-size: ${heading_4};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${support};
    cursor: pointer;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    display: none;
  }
`;

export default AppHeader;
