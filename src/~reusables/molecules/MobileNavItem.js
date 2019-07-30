import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { small_space } from "../variables/spacing";
import { primary, text } from "../variables/colors";
import { body_2 } from "../variables/font-sizes";

const MobileNavItem = ({ icon, text, path }) => {
  return (
    <StyledNavItem>
      <NavLink exact to={path} activeClassName="active-nav">
        <i className="material-icons">{icon}</i>
      </NavLink>
      <NavLink exact to={path} activeClassName="active-nav">
        <span>{text}</span>
      </NavLink>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.div`
  font-size: ${body_2};
  padding: 0 ${small_space};

  a {
    color: ${text};
    text-decoration: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    vertical-align: middle;
    font-size: 28px;
  }

  .active-nav {
    color: ${primary};
    font-weight: 500;
  }
  margin-top: ${small_space};
`;

export default MobileNavItem;
