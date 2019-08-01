// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components/functions
import Tabs from "../../../~reusables/molecules/Tabs";

// styles
import { heading_5, body_2 } from "../../../~reusables/variables/font-sizes";
import { support, primary, secondary } from "../../../~reusables/variables/colors";
import { xs_space } from "../../../~reusables/variables/spacing";

const QuizList = props => {
  const {
    firstHeading,
    secondHeading,
    thirdHeading,
    fourthHeading,
    listOfQuizzes
  } = props;
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(0);
  }, [listOfQuizzes]);

  const renderQuizzes = () => {
    return listOfQuizzes.slice(tabIndex * 8, 8 * (tabIndex + 1)).map(quiz => {
      let quizStatus = quiz.status === "Active" || quiz.status === "Complete" ? 'blue-link' : 'red-link'
      return (
        <div key={quiz.quiz} className="body">
          <p>{quiz.quiz}</p>
          <p className="center-align hide-item">{quiz.completionRate}%</p>
          <p className="center-align hide-item">{quiz.score}%</p>
          <p className={`right-align ${quizStatus}`}>{quiz.status} ></p>
        </div>
      );
    });
  };

  return (
    <StyledList>
      <div className="headers">
        <h4>{firstHeading}</h4>
        <h4 className="center-align hide-item">{secondHeading}</h4>
        <h4 className="center-align hide-item">{thirdHeading}</h4>
        <h4 className="right-align">{fourthHeading}</h4>
      </div>
      {renderQuizzes()}
      <div className="footer">
        <Tabs
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          arrayList={listOfQuizzes}
        />
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  .headers {
    display: flex;
    align-items: center;
    h4 {
      font-size: ${heading_5};
      font-weight: 400;
      color: ${support};
      flex: 1 1 200px;
      margin-bottom: ${xs_space};
    }
  }

  .blue-link, .red-link {
    text-decoration: underline;
  }

  .blue-link {
    color: ${primary};
  }

  .red-link {
    color: ${secondary};
  }

  .center-align {
    text-align: center;
  }

  .right-align {
    text-align: right;
  }

  .body {
    display: flex;
    align-items: center;

    p {
      font-size: ${body_2};
      flex: 1 1 200px;
      margin-bottom: ${xs_space};
    }
  }

  @media only screen and (max-width: 767px) {
    .hide-item {
      display: none;
    }
  }
`;

export default QuizList;
