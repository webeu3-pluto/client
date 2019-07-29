// modules
import React from "react";
import styled from "styled-components";

// components/functions
import { ButtonPrimary } from "../../../~reusables/atoms/Buttons";
import heroImage from "../../../~reusables/assets/hero-image.png";
import {
  large_space,
  medium_space_3
} from "../../../~reusables/variables/spacing";
import { heading_1, body_1 } from "../../../~reusables/variables/font-sizes";
import { headings, text } from "../../../~reusables/variables/colors";
import { Link } from "react-router-dom";

// styles

const LandingHero = () => {
  return (
    <StyledHero>
      <div className="left-hero">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <Link to="/signup">
            <ButtonPrimary>Sign up</ButtonPrimary>
          </Link>
        </div>
      </div>
      <div className="right-hero">
        <img src={heroImage} alt="Web application dashboard interface" />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  max-width: 1280px;
  padding: 0 ${medium_space_3};
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin: ${large_space} 0;

  h1 {
    font-size: ${heading_1};
    color: ${headings};
  }

  p {
    font-size: ${body_1};
    color: ${text};
  }

  .left-hero {
    width: 45%;
    margin-right: 5%;

    div {
      display: flex;
      align-items: center;
    }
  }

  .right-hero {
    width: 50%;

    img {
      width: 100%;
    }
  }
`;

export default LandingHero;
