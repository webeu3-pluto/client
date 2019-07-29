// modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components/functions
import logo from "../assets/logo.png";
import { medium_space_1, medium_space_2 } from "../variables/spacing";
import { headings, primary } from "../variables/colors";
import { ButtonPrimary } from "../atoms/Buttons";
import { body_2 } from "../variables/font-sizes";

// styles

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
          <li>
            <Link to="/signup">
              <ButtonPrimary>Sign Up</ButtonPrimary>
            </Link>
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
`;
