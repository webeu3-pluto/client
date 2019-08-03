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
        selectedQuestion: action.payload.questions[0]
      };
    default:
      return state;
  }
}
