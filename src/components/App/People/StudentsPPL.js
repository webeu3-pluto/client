// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import AddPeopleModal from "./AddPeopleModal";
import { ButtonTertiary } from "../../../~reusables/atoms/Buttons";
import {
  getTeamLeadsByCohort,
  addTeamLeadToPeople,
  getStudentsTeamLeads,
  removeTeamLead
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

const StudentsPPL = props => {
  const [modal, setModal] = useState(false);
  const {
    getTeamLeadsByCohort,
    addTeamLeadToPeople,
    getStudentsTeamLeads,
    people,
    removeTeamLead
  } = props;

  useEffect(() => {
    getStudentsTeamLeads();
  }, []);

  const onAddStudent = () => {
    getTeamLeadsByCohort();
    setModal(true);
  };

  return (
    <StyledProfile>
      <div className="wrapper">
        {modal && (
          <AddPeopleModal
            functionCb={addTeamLeadToPeople}
            closeModal={setModal}
            heading="Add Team Lead"
            paragraph="Add a new team lead to the list of people you receive published quizzes from."
          />
        )}
        <div className="header">
          <h4>TEAM LEADS</h4>
          <ButtonTertiary onClick={onAddStudent}>Add Team Lead</ButtonTertiary>
        </div>
        <div className="body">
          <PeopleList
            firstHeading="Name"
            secondHeading="TL's Quizzes Complete"
            thirdHeading="TL's Avg. Score"
            listOfPeople={people}
            removePerson={removeTeamLead}
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
  { getTeamLeadsByCohort, addTeamLeadToPeople, getStudentsTeamLeads, removeTeamLead }
)(StudentsPPL);
