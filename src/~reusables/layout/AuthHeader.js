// modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components/functions
import logoWhite from "../assets/logo-white.png";
import { medium_space_1 } from "../variables/spacing";
import { primary, white } from "../variables/colors";
import { body_2 } from "../variables/font-sizes";

// styles

const Header = ({path, linkText}) => {
  return (
    <StyledHeader>
      <nav>
        <Link className="logo" to="/">
          <div className="logo">
            <img src={logoWhite} alt="Pluto Logo" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to={path}>{linkText}</Link>
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
  background: ${primary};

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
    color: ${white};
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

    li {
      font-size: ${body_2};
    }
  }
`;
