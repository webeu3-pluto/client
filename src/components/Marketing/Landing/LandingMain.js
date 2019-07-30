// modules
import React from 'react';
import styled from 'styled-components';

// components/functions
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
import lambdaSchool from "../../../~reusables/assets/lambdaschool.jpg";
import lambdaLogo from "../../../~reusables/assets/lambda-logo.png";

// styles

const LandingMain = () => {
  return (
    <StyledMain>
      <div className="wrapper">
        <div className="benefits">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="benefit">
            <i class="material-icons">collections_bookmark</i>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="benefit">
            <i class="material-icons">collections_bookmark</i>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="benefit">
            <i class="material-icons">collections_bookmark</i>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet, consectetur.
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
    height: 540px;
    flex-basis: 420px;
    border-radius: 12px;

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
`;

export default LandingMain;
