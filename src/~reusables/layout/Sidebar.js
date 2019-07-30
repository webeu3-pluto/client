// modules
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// components/functions
import logo from '../../~reusables/assets/logo.png'

// styles
import { light_grey, headings, white, primary } from '../variables/colors';
import { medium_space_2 } from '../variables/spacing';
import { heading_4 } from '../variables/font-sizes';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className="logo">
        <img src={logo} alt="Pluto logo" />
      </div>
      <NavLink activeClassName="active" exact to="/app">Dashboard</NavLink>
      <NavLink activeClassName="active" exact to="/app/quizzes">Quizzes</NavLink>
      <NavLink activeClassName="active" exact to="/app/people">Students</NavLink>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 180px;
  background: ${light_grey};
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${headings};
    font-size: ${heading_4};
    padding-left: ${medium_space_2};
    flex-basis: 80px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: ${primary};
  }

  .active {
      background: ${white};
      color: ${primary};
    }


  .logo {
    margin: ${medium_space_2} auto;
    width: 70%;
    flex-basis: 68px;

    img {
      width: 100%;
    }
  }
`

export default Sidebar;


