// modules
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// components/functions
import { validateUser } from "../../store/actions/authActions";

// styles
import {
  large_space,
  medium_space_2,
  medium_space_3
} from "../variables/spacing";
import {
  support,
  secondary,
  white,
  text,
  headings,
  primary,
  light_grey
} from "../variables/colors";
import { heading_4 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";

const AppHeader = props => {
  const { user, validateUser } = props;

  const logout = () => {
    localStorage.clear();
    validateUser();
  };

  const toggleDropdown = () => {
    document
      .querySelector(".dropdown-content")
      .classList.toggle("show-dropdown");
  };

  window.onclick = function(e) {
    if (!e.target.matches(".arrow-down")) {
      const myDropdown = document.querySelector(".dropdown-content");
      if (myDropdown && myDropdown.classList.contains("show-dropdown")) {
        myDropdown.classList.remove("show-dropdown");
      }
    }
  };

  return (
    <StyledHeader>
      <nav>
        <div className="info">
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <p>
            {user.role} - {user.cohort}
          </p>
        </div>
        <div className="initials">
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </div>
        <div className="dropdown">
          <div onClick={toggleDropdown} className="arrow-down" />
          <div className="dropdown-content">
            <Link to="/app/profile">Profile</Link>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > nav {
    margin-right: ${large_space};
    display: flex;
    align-items: center;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: ${medium_space_3};
    background-color: ${light_grey};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(151, 162, 185, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: ${white};
    color: ${primary};
  }

  .show-dropdown {
    display: block;
  }

  h4,
  p {
    margin: 0;
  }

  h4 {
    color: ${headings};
    font-size: ${heading_4};
  }

  p {
    color: ${text};
  }

  .info {
    text-align: right;
  }

  .initials {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background: ${secondary};
    margin: 0 ${medium_space_2};
    font-weight: 500;

    color: ${white};
    font-size: ${heading_4};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${support};
    cursor: pointer;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    display: none;
  }
`;

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { validateUser }
)(AppHeader);
