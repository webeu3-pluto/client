// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/functions
import { LineSelect } from "../../../~reusables/atoms/Select";
import {
  getSubCategories,
  updateQuizByCatandSubcat,
  clearQuizState
} from "../../../store/actions/quizActions";

// styles
import {
  medium_space_2,
  medium_space_1
} from "../../../~reusables/variables/spacing";
import { headings } from "../../../~reusables/variables/colors";

const QuizDetails = props => {
  const {
    selectedQuiz,
    categories,
    getSubCategories,
    subCategories,
    updateQuizByCatandSubcat,
    clearQuizState
  } = props;
  const [category, setCategory] = useState(selectedQuiz.category);
  const [categoryId, setCategoryId] = useState(selectedQuiz.categoryId);
  const [subCategory, setSubCategory] = useState(selectedQuiz.subCategory);
  const [subCategoryId, setSubCategoryId] = useState(
    selectedQuiz.subCategoryId
  );

  useEffect(() => {
    getSubCategories(categoryId);
    return () => {
      clearQuizState();
    };
  }, []);

  useEffect(() => {
    if (subCategories.length !== 0) {
      let foundSubCat = subCategories.find(subCat => subCat.subCategoryName === subCategory);
      updateQuizByCatandSubcat(
        categoryId,
        foundSubCat ? subCategoryId : subCategories[0].subCategoryId,
        selectedQuiz.uuid
      );
    }
  }, [subCategories])

  useEffect(() => {
    setCategory(selectedQuiz.category);
    setCategoryId(selectedQuiz.categoryId);
    setSubCategory(selectedQuiz.subCategory);
    setSubCategoryId(selectedQuiz.subCategoryId);
  }, [selectedQuiz]);

  const onChangeCategory = e => {
    let catChanged = categories.find(
      cat => cat.categoryId === parseInt(e.target.value)
    );
    getSubCategories(catChanged.categoryId);
    setCategory(catChanged.category);
    setCategoryId(catChanged.categoryId);
  };

  const onChangeSubCategory = e => {
    updateQuizByCatandSubcat(categoryId, e.target.value, selectedQuiz.uuid);
  };

  return (
    <StyledQuizDetails>
      <h4 className="label">Choose category</h4>
      <LineSelect onChange={onChangeCategory}>
        <option value={categoryId}>{category}</option>
        {categories.map(cat => {
          if (cat.category !== category) {
            return (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.category}
              </option>
            );
          } else {
            return null;
          }
        })}
      </LineSelect>
      <h4 className="label">Choose sub-category</h4>
      <LineSelect onChange={onChangeSubCategory}>
        <option value={subCategoryId}>{subCategory}</option>
        {subCategories.map(subCat => {
          if (subCat.subCategoryName !== subCategory) {
            return (
              <option key={subCat.subCategoryId} value={subCat.subCategoryId}>
                {subCat.subCategoryName}
              </option>
            );
          } else {
            return null;
          }
        })}
      </LineSelect>
    </StyledQuizDetails>
  );
};

const StyledQuizDetails = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(56, 105, 160, 0.25);
  padding: ${medium_space_2} ${medium_space_1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 80%;

  h4 {
    color: ${headings};
  }
`;

function mapStateToProps(state) {
  return {
    categories: state.quiz.categories,
    subCategories: state.quiz.subCategories
  };
}

export default connect(
  mapStateToProps,
  { getSubCategories, updateQuizByCatandSubcat, clearQuizState }
)(QuizDetails);
