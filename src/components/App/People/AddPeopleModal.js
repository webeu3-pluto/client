// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import Select from "react-select";

// components/functions
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary
} from "../../../~reusables/atoms/Buttons";

// styles
import { text, white, headings } from "../../../~reusables/variables/colors";
import {
  heading_3,
  body_2,
  heading_5,
  body_1
} from "../../../~reusables/variables/font-sizes";
import { tablet_max_width } from "../../../~reusables/variables/media-queries";
import {
  small_space,
  medium_space_1
} from "../../../~reusables/variables/spacing";

const AddPeopleModal = props => {
  const {
    closeModal,
    functionCb,
    functionArg,
    heading,
    paragraph,
    people
  } = props;

  const [personToAdd, setPersonToAdd] = useState("");

  let peopleOptions = people.map(person => {
    return {
      value: person.id,
      label: `${person.firstName} ${person.lastName}`
    };
  });

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  const onClickBack = e => {
    e.preventDefault();
    closeModal(false);
  };

  const onClickAdd = e => {
    e.preventDefault();
    // functionCb(functionArg);
    // closeModal(false);
  };

  return (
    <StyledModal>
      <animated.div style={fade} className="popup">
        <div className="popup-inner">
          <section>
            <h4>{heading}</h4>
            <p>{paragraph}</p>
            <Select
              styles={{
                control: styles => ({
                  ...styles,
                  borderColor: "rgba(74, 85, 104, 0.2)"
                })
              }}
              className="select"
              options={peopleOptions}
              onChange={e => setPersonToAdd(e)}
            />
            <div className="buttons">
              <ButtonTertiary onClick={onClickBack}>Go Back</ButtonTertiary>
              <ButtonPrimary onClick={onClickAdd}>Add Student</ButtonPrimary>
            </div>
          </section>
        </div>
      </animated.div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 100;

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .select {
    margin-bottom: ${medium_space_1};
  }

  h4,
  p {
    text-align: center;
  }

  h4 {
    margin: ${small_space} 0 0 0;
    color: ${headings};
    font-size: ${heading_3};
    font-weight: 600;
  }

  p {
    color: ${text};
    font-size: ${body_1};
  }

  section {
    width: 90%;
  }

  .popup {
    z-index: 100;

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup-inner {
    padding: ${medium_space_1};
    background: ${white};
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    border-radius: 20px;
    max-width: 800px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    .popup-inner {
      left: 17%;
      right: 17%;
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    section {
      width: 100%;
      input {
        width: 80%;
      }
    }
    h4 {
      font-size: ${heading_5};
    }
    p {
      font-size: ${body_2};
    }
    .popup-inner {
      left: 7%;
      right: 7%;
      top: 15%;
      bottom: 15%;
    }
  }
`;

function mapStateToProps(state) {
  return {
    people: state.people.peopleByCohort
  };
}

export default connect(mapStateToProps)(AddPeopleModal);
