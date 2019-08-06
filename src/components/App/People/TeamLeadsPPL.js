// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import AddPeopleModal from "./AddPeopleModal";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import {
  getStudentsByCohort,
  addStudentToPeople,
  getTeamLeadStudents,
  removeStudent
} from "../../../store/actions/peopleActions";
import PeopleList from "../../../~reusables/molecules/PeopleList";

// styles
import {
  medium_space_2,
  large_space,
  medium_space_3,
  small_space,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { support } from "../../../~reusables/variables/colors";

const TeamLeadsPPL = props => {
  const [modal, setModal] = useState(false);
  const { getStudentsByCohort, addStudentToPeople, getTeamLeadStudents, people, removeStudent } = props;

  useEffect(() => {
    getTeamLeadStudents();
  }, [])

  const onAddStudent = () => {
    getStudentsByCohort();
    setModal(true);
  };

  return (
    <StyledProfile>
      <div className="wrapper">
        {modal && (
          <AddPeopleModal
            functionCb={addStudentToPeople}
            closeModal={setModal}
            heading="Lorem ipsum"
            paragraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
        )}
        <div className="header">
          <h4>STUDENTS</h4>
          <ButtonTertiary onClick={onAddStudent}>Add Student</ButtonTertiary>
        </div>
        <div className="body">
          <PeopleList
            firstHeading="Name"
            secondHeading="Quizzes Complete"
            thirdHeading="Avg. Score"
            listOfPeople={people}
            removePerson={removeStudent}
          />
        </div>
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
    padding: ${medium_space_3} ${medium_space_2} ${medium_space_1}
      ${medium_space_2};
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

  @media only screen and (max-width: 767px) {
    margin: ${small_space};

    .wrapper {
      padding: ${medium_space_1} ${small_space};
    }

    .header {
      h4 {
        font-size: 14px;
        letter-spacing: 0.2rem;
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    people: state.people.peopleByUser
  }
}

export default connect(
  mapStateToProps,
  { getStudentsByCohort, addStudentToPeople, getTeamLeadStudents, removeStudent }
)(TeamLeadsPPL);
