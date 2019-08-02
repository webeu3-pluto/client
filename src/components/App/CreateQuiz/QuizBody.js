// modules
import React, { useState } from "react";
import styled from "styled-components";

// components/functions
import { LineInput } from "../../../~reusables/atoms/Inputs";

// styles
import {
  medium_space_2,
  medium_space_1,
  xs_space,
  small_space,
  medium_space_3
} from "../../../~reusables/variables/spacing";
import { text, headings } from "../../../~reusables/variables/colors";
import {
  TextButton,
  ButtonTertiary,
  ButtonPrimary
} from "../../../~reusables/atoms/Buttons";
import DeleteModal from "../../../~reusables/molecules/DeleteModal";

const QuizBody = () => {
  const [modal, setModal] = useState(false);

  return (
    <StyledQuizBody>
      {modal && (
        <DeleteModal
          // functionCb={deleteUser}
          closeModal={setModal}
          heading="Lorem ipsum lorem ipsum"
          paragraph="Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum."
        />
      )}
      <div className="create">
        <h4 className="label">Questions</h4>

        <LineInput placeholder="Start typing your question..." />
        <h4 className="label">Answers</h4>
        <LineInput className="correct" placeholder="Correct option" />
        <LineInput className="incorrect" placeholder="Incorrect option" />
        <LineInput className="incorrect" placeholder="Incorrect option" />
        <LineInput className="incorrect" placeholder="Incorrect option" />
        <section className="buttons">
          <TextButton color="#DA2640" onClick={() => setModal(true)}>
            Delete Question
          </TextButton>
          <ButtonTertiary>Save Question</ButtonTertiary>
        </section>
      </div>
      <div className="view">
        <h4>Questions on this survey</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
          <li>Lorem ipsum dolor sit amet Lorem ips ></li>
        </ul>
        <ButtonPrimary>New Question</ButtonPrimary>
      </div>
    </StyledQuizBody>
  );
};

const StyledQuizBody = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  padding: ${medium_space_2} ${medium_space_1};
  border-radius: 8px;

  h4 {
    color: ${headings};
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    button {
      margin: ${small_space} ${xs_space} 0 ${xs_space};
    }
  }

  .create {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
  }

  .view {
    margin-left: ${medium_space_3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul li {
      color: ${text};
      margin-bottom: ${medium_space_2};
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 999px) {
    flex-direction: column;
    justify-content: center;

    .create {
      order: 1;
    }

    .view {
      order: 0;
      margin-left: 0;
      margin-top: ${small_space};
    }
  }
`;

export default QuizBody;
