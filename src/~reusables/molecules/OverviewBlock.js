// modules
import React from "react";
import styled from "styled-components";
import { support, headings } from "../variables/colors";
import { heading_1, heading_2 } from "../variables/font-sizes";
import { medium_space_1, small_space, xs_space } from "../variables/spacing";

// components/functions

// styles

const OverviewBlock = ({ heading, stat }) => {
  return (
    <StyledBlock>
          <h4>{heading}</h4>
      <p>{stat}</p>
    </StyledBlock>
  );
};

const StyledBlock = styled.div`
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
    padding: ${medium_space_1} ${small_space} 0 ${small_space};
    border-radius: 8px;


    h4, p {
      text-align: center;
    }

    h4 {
      margin-top: ${xs_space};
      margin-bottom: 0;
      color: ${support};
      letter-spacing: 0.25rem;
    }

    p {
      font-size: ${heading_2};
      color: ${headings};
      font-weight: 700;
    }
`;

export default OverviewBlock;
