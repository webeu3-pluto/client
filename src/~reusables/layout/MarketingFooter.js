// modules
import React from "react";
import styled from "styled-components";

// functions/components

// styling
import { medium_space_1 } from "../variables/spacing";
import { text, headings, primary } from "../variables/colors";

const MarketingFooter = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          Made with{" "}
          <span role="img" aria-label="coffee">
            ☕️ {" "}
          </span>
          and {" "}
          <span role="img" aria-label="love">
            🤘🏼️
          </span>{" "}
          by <a href="https://github.com/IsaacAderogba">Isaac,</a>{" "}
          <a href="https://github.com/josenriagu">Josemaria </a> and{" "}
          <a href="https://github.com/OLORUNTOBI-LEVELUP">Toby </a>
        </p>
      </div>
    </StyledFooter>
  );
};

export default MarketingFooter;

const StyledFooter = styled.footer`
  height: 10vh;
  min-height: 60px;
  border: 1px solid green;

  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1280px;
  }

  p {
    height: inherit;
    padding: ${medium_space_1};
    color: ${text};

    a {
      text-decoration: none;
      color: ${headings};
      font-weight: 500;
    }

    a:hover {
      color: ${primary};
    }
  }
`;
