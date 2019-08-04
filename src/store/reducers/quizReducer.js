import * as types from "../actions/quizActions";

const initState = {
  quizzes: [],
  selectedQuiz: null,
  selectedQuestion: null,
  categories: [],
  subCategories: []
};

export default function(state = initState, action) {
  switch (action.type) {
    // students
    case types.GET_QUIZZES_FOR_STUDENT:
      return {
        ...state,
        quizzes: action.payload
      }
    // team leads
    case types.UPDATE_QUESTION:
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: action.payload
        },
        selectedQuestion: ''
      }
    case types.SAVE_QUESTION:
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: [...state.selectedQuiz.questions, ...action.payload]
        },
        selectedQuestion: state.selectedQuestion === null ? '' : null
      };
    case types.CLICK_NEW_QUESTION:
      return {
        ...state,
        selectedQuestion: null
      };
    case types.DELETE_QUIZ:
      return {
        ...state,
        selectedQuiz: null,
        categories: [],
        subCategories: []
      };
    case types.DELETE_QUESTION_ON_QUIZ:
      return {
        ...state,
        selectedQuestion: action.payload.length > 0 ? action.payload[0] : null,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: action.payload
        }
      };
    case types.CLEAR_QUIZ_STATE:
      return {
        ...state,
        categories: [],
        subCategories: [],
        selectedQuiz: null
      };
    case types.UPDATE_QUIZ_STATUS:
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          status: action.payload
        }
      };
    case types.UPDATE_QUIZ_BY_CAT_AND_SUBCAT:
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          category: action.payload.category,
          categoryId: action.payload.categoryId,
          subCategory: action.payload.subCategory,
          subCategoryId: action.payload.subCategoryId
        }
      };
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case types.GET_SUBCATEGORIES:
      return {
        ...state,
        subCategories: action.payload
      };
    case types.SELECT_QUIZ_QUESTION:
      return {
        ...state,
        selectedQuestion: action.payload
      };
    case types.GET_QUIZ_BY_TEAMLEAD_ID:
      return {
        ...state,
        quizzes: action.payload
      };
    case types.CREATE_QUIZ_WITH_QS:
      return {
        ...state,
        selectedQuiz: action.payload,
        selectedQuestion: action.payload.questions[0]
      };
    case types.GET_QUIZ_AND_QS_UUID:
      return {
        ...state,
        selectedQuiz: action.payload,
      };
    default:
      return state;
  }
}
