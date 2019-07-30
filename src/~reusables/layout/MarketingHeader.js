// modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components/functions
import logo from "../assets/logo.png";

// styles
import {
  medium_space_1,
  medium_space_2,
  small_space
} from "../variables/spacing";
import { headings, primary } from "../variables/colors";
import { ButtonPrimary } from "../atoms/Buttons";
import { body_2 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link className="logo" to="/">
          <div className="logo">
            <img src={logo} alt="Pluto Logo" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li className="desktop">
            <Link to="/signup">
              <ButtonPrimary>Sign Up</ButtonPrimary>
            </Link>
          </li>
          <li className="mobile">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 10vh;
  min-height: 60px;

  nav {
    height: inherit;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    padding: 0 ${medium_space_1};
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${headings};
    font-weight: 500;
  }

  .logo {
    width: 132px;
    img {
      width: inherit;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;

    .mobile {
      display: none;
    }

    li:last-child,
    button {
      margin-left: ${medium_space_2};
    }

    li {
      font-size: ${body_2};
    }
  }

  ul li a:hover {
    color: ${primary};
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    nav {
      padding: 0 ${small_space};
    }

    ul {
      li:last-child {
        margin-left: ${small_space};
      }

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }
    }
  }
`;
