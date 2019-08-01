// modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components/functions
import { ButtonPrimary } from "../../../~reusables/atoms/Buttons";
import heroImage from "../../../~reusables/assets/hero-image.png";

// styles
import {
  large_space,
  medium_space_3,
  medium_space_1,
  small_space,
  xs_space
} from "../../../~reusables/variables/spacing";
import {
  heading_1,
  body_1,
  heading_3,
  body_2
} from "../../../~reusables/variables/font-sizes";
import { headings, text } from "../../../~reusables/variables/colors";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";

const LandingHero = () => {
  return (
    <StyledHero>
      <div className="wrapper">
        <div className="left-hero">
          <h1>The quiz platform you'll enjoy using</h1>
          <div>
            <p>
              Built for Team Leads and Students, Pluto helps you create and
              complete quizzes for different modules.
            </p>
            <Link to="/signup">
              <ButtonPrimary>Sign up</ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="right-hero">
          <img src={heroImage} alt="Web application dashboard interface" />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  .wrapper {
    align-items: center;
    margin: ${large_space} auto;
    display: flex;
    padding: 0 ${medium_space_3};
    max-width: 1280px;

    h1 {
      font-size: ${heading_1};
      color: ${headings};
      font-weight: 600;
    }

    p {
      font-size: ${body_1};
      color: ${text};
      margin-right: ${xs_space};
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
  }

  @media only screen and (max-width: 999px) {
    .wrapper {
      padding: 0 ${medium_space_1};
      flex-direction: column;
      margin-top: ${small_space};

      .left-hero,
      .right-hero {
        width: 100%;
        margin: ${small_space};
      }

      .left-hero {
        h1 {
          margin-top: 0;
          margin-bottom: 0;
          text-align: center;
        }

        div {
          flex-direction: column;
          text-align: center;
        }
      }

      .right-hero {
        p {
          text-align: center;
        }
      }
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    .wrapper {
      p {
        font-size: ${body_2};
      }

      h1 {
        font-size: ${heading_3};
      }
    }
  }
`;

export default LandingHero;
