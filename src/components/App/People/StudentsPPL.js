// modules
import React from 'react';
import styled from 'styled-components';

// components/functions

// styles
import { medium_space_2, large_space, medium_space_3 } from '../../../~reusables/variables/spacing';
import { ButtonTertiary } from '../../../~reusables/atoms/Buttons';
import { support } from '../../../~reusables/variables/colors';

const Students = () => {
  return (
    <StyledStudent>
      <div className="wrapper">
        <div className="header">
          <h4>TEAM LEADS</h4>
          <ButtonTertiary>Add Team Lead</ButtonTertiary>
        </div>
        <div className="body">
          
        </div>
      </div>
    </StyledStudent>
  )
}

const StyledStudent = styled.main`
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
`

export default Students;