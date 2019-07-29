// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { light_grey } from "../../../~reusables/variables/colors";
import { medium_space_3, xl_space } from "../../../~reusables/variables/spacing";

// styles

const LandingMain = () => {
  return (<StyledMain>
  <div className="left-main">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur.</p>
  </div>
  <div className="right-main">

  </div>

  </StyledMain>);
};

const StyledMain = styled.section`
  max-width: 1280px;
  padding: ${xl_space} ${medium_space_3};
  margin: 0 auto;
  background: ${light_grey};
`;

export default LandingMain;
