// modules
import React from "react";
import styled from "styled-components";

// components/functions
import lambdaSchool from "../../../~reusables/assets/lambdaschool.jpg";
import lambdaLogo from "../../../~reusables/assets/lambda-logo.png";

// styles
import {
  light_grey,
  white,
  headings,
  text,
  primary
} from "../../../~reusables/variables/colors";
import {
  medium_space_3,
  xl_space,
  small_space,
  medium_space_1,
  medium_space_2
} from "../../../~reusables/variables/spacing";
import {
  heading_3,
  heading_4,
  body_1,
  body_2
} from "../../../~reusables/variables/font-sizes";

const LandingMain = () => {
  return (
    <StyledMain>
      <div className="wrapper">
        <div className="benefits">
          <h3>Quizzes Made Simple</h3>
          <p>
            Pluto was built for Team Leads who are invested in the success of
            their students.
          </p>
          <div className="benefit">
            <i className="material-icons">assessment</i>
            <div>
              <h4>Performance at a Glance</h4>
              <p>
                Quickly see quiz scores and completion rates from a unified
                dashboard
              </p>
            </div>
          </div>
          <div className="benefit">
            <i className="material-icons">blur_on</i>
            <div>
              <h4>Generate Quizzes</h4>
              <p>
                Leverage the work of prior Team Leads by generating
                previously-created quizzes
              </p>
            </div>
          </div>
          <div className="benefit">
            <i className="material-icons">cached</i>
            <div>
              <h4>Real-Time Updates</h4>
              <p>
                With each quiz published, Students get automatic and immediate
                access.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="photo"
            src={lambdaSchool}
            alt="Girl in Lambda T-Shirt stting on steps"
          />
          <img className="logo" src={lambdaLogo} alt="Lambda School logo" />
          <p>
            <em>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit.
            </em>
          </p>
          <p>
            <em>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur.
            </em>
          </p>
        </div>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background: ${light_grey};
  .wrapper {
    max-width: 1280px;
    padding: ${xl_space} ${medium_space_3};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .testimonial {
    background: ${white};
    flex-basis: 420px;
    border-radius: 12px;
    box-shadow: 0px 1px 5px rgba(151, 162, 185, 0.2),
      0px 3px 4px rgba(151, 162, 185, 0.12),
      0px 2px 4px rgba(151, 162, 185, 0.14);

    .photo {
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      width: 100%;
      object-fit: cover;
      height: 45%;
    }

    .logo {
      max-width: 148px;
      margin: ${medium_space_2} 0 0 ${medium_space_2};
    }

    em {
      font-style: italic;
    }

    p {
      margin: ${small_space} ${medium_space_2};
    }
  }

  .benefits {
    flex-basis: 50%;
  }

  .benefits > p {
    font-size: ${body_1};
    margin-bottom: ${medium_space_3};
  }

  .benefit p {
    font-size: ${body_2};
  }

  .benefit {
    display: flex;
    margin-bottom: ${medium_space_1};
    max-width: 90%;

    i {
      color: ${primary};
      margin-right: ${small_space};
    }
  }

  p {
    color: ${text};
  }

  h3,
  h4 {
    color: ${headings};
  }

  h3 {
    font-size: ${heading_3};
  }

  h4 {
    font-size: ${heading_4};
    margin-top: 0;
    margin-bottom: ${small_space};
  }

  @media only screen and (max-width: 900px) {
    .wrapper {
      flex-direction: column;
    }

    .benefits > p {
      font-size: ${body_2};
    }
  }
`;

export default LandingMain;
