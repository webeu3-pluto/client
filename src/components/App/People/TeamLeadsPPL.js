// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

// components/functions
import AddPeopleModal from "./AddPeopleModal";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import { getStudentsByCohort } from "../../../store/actions/peopleActions";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3
} from "../../../~reusables/variables/spacing";
import { support } from "../../../~reusables/variables/colors";

const TeamLeadsPPL = (props) => {
  const [modal, setModal] = useState(false);

  const { getStudentsByCohort } = props;

  const onAddStudent = () => {
    getStudentsByCohort();
    setModal(true);
  }

  return (
    <StyledProfile>
      <div className="wrapper">
        {modal && (
          <AddPeopleModal
            closeModal={setModal}
            heading="Lorem ipsum"
            paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
        )}
        <div className="header">
          <h4>STUDENTS</h4>
          <ButtonTertiary onClick={onAddStudent}>
            Add Student
          </ButtonTertiary>
        </div>
        <div className="body" />
      </div>
    </StyledProfile>
  );
};

const StyledProfile = styled.main`
  margin: ${medium_space_2} ${large_space};

  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  border-radius: 8px;

  .wrapper {
    padding: ${medium_space_3} ${medium_space_2};
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: ${support};
      letter-spacing: 0.25rem;
    }
  }
`;



export default connect(null, { getStudentsByCohort } )(TeamLeadsPPL);
